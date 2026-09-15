import { ghlFuenteDelLead, buildWaUrl } from '@/lib/source-tracking';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const ASSISTANT_EMAIL = process.env.ASSISTANT_EMAIL || 'dracarolinamacarenob@gmail.com';

/*
  15-sep-2026: la plantilla de WhatsApp de bienvenida quedó en categoría
  MARKETING y Meta la bloquea para +1 (EE. UU. y Canadá), apelación abierta
  hasta el 4-oct-2026. Un lead del formulario web nunca escribió primero por
  WhatsApp, así que GHL solo puede abrir la conversación con esa plantilla,
  y falla en silencio. Se usa tanto en el asunto del correo como en el aviso
  dentro del cuerpo, para que sea la misma verificación en los dos lados.
*/
function esNumeroUsOCanada(whatsapp: string): boolean {
  return /^\+?1\D?\d{3}/.test((whatsapp || '').replace(/[\s()-]/g, ''));
}

// El idioma en el que el paciente llenó el formulario. Las páginas en inglés
// viven bajo /en/; todo lo demás, incluidas las landings de pauta, es
// español. Va como etiqueta y no solo dentro de `page` porque el flujo del
// CRM sabe filtrar por etiqueta, pero no sabe leer una ruta. Sin esto, a un
// paciente de Estados Unidos le llega la plantilla de WhatsApp en español.
//
// 15-sep-2026: la ruta por sí sola falla cuando alguien llega por Google
// Business Profile o Maps y aterriza en una página en español sin pasar por
// /en/, aunque escriba en inglés perfecto (caso real: Joanne Harman,
// source:gbp, quedó en `lang:es` con un mensaje en inglés). Por eso el texto
// que el paciente escribió manda sobre la ruta cuando hay señal clara: es lo
// único que refleja el idioma real de la persona, no de la página en la que
// cayó. Se extrajo a función de módulo porque ahora la usan dos correos
// distintos, el interno y el que recibe la paciente, y tienen que coincidir.
function detectarIdiomaDelTexto(texto: string): 'en' | 'es' | null {
  const t = ` ${(texto || '').toLowerCase()} `;
  const marcadoresEn = [' the ', ' and ', ' you ', ' your ', ' with ', ' have ', ' this ', ' that ', ' please ', ' thank ', ' i am ', " i'm ", ' hi ', ' hello ', ' cost ', ' price ', ' teeth ', ' implant ', ' veneers '];
  const marcadoresEs = [' que ', ' con ', ' para ', ' de la ', ' gracias ', ' hola ', ' quiero ', ' quisiera ', ' cuanto ', ' cuánto ', ' precio ', ' costo ', ' dientes ', ' implante ', ' carillas '];
  const hitsEn = marcadoresEn.filter((m) => t.includes(m)).length;
  const hitsEs = marcadoresEs.filter((m) => t.includes(m)).length;
  // Umbral conservador: solo se anula la ruta con una señal clara (2+
  // marcadores y diferencia neta), para no adivinar sobre mensajes cortos
  // como "hi" o "hola" donde una sola palabra no basta.
  if (hitsEn >= 2 && hitsEn > hitsEs) return 'en';
  if (hitsEs >= 2 && hitsEs > hitsEn) return 'es';
  return null;
}

function detectarIdioma(mensaje: string, referer: string): 'en' | 'es' {
  const ref = new URL(referer || 'https://dracarolinamacareno.com');
  const idiomaPorRuta = /^\/en(\/|$)/.test(ref.pathname) ? 'en' : 'es';
  return detectarIdiomaDelTexto(mensaje) ?? idiomaPorRuta;
}

/**
 * Manda el lead al CRM y DEVUELVE si llegó.
 *
 * Antes esto vivía suelto después del correo y sus errores se tragaban en
 * silencio. El resultado: los leads del formulario no aparecían en el pipeline
 * y había que crearlos a mano, sin que nadie supiera por qué.
 *
 * Nunca lanza: si el CRM está caído, el lead igual se salva en el correo. Pero
 * ahora el correo dice qué pasó.
 */
async function enviarAlCrm(d: {
  nombre: string; email: string; whatsapp: string; tipoConsulta: string;
  mensaje: string; source: string; sourceLabel: string; gclid: string; referer: string;
}): Promise<string> {
  const url = process.env.GHL_WEBHOOK_URL;
  if (!url) return 'NO CONFIGURADO (falta GHL_WEBHOOK_URL en Vercel)';

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const ref = new URL(d.referer || 'https://dracarolinamacareno.com');
    const utmSource = ref.searchParams.get('utm_source') || '';
    const utmCampaign = ref.searchParams.get('utm_campaign') || '';

    // La atribución del cliente es más fiable que el referer, que pierde los
    // UTM en cuanto el visitante pasa de la página de entrada.
    const attributedSource = d.source || utmSource || '';

    const idioma = detectarIdioma(d.mensaje, d.referer);

    const tags = ['web_form', `lang:${idioma}`];
    // Marca aparte para poder filtrar en GHL, no solo en el correo: la
    // plantilla de WhatsApp está bloqueada para +1, ver el comentario de
    // esNumeroUsOCanada arriba en el archivo.
    if (esNumeroUsOCanada(d.whatsapp)) tags.push('whatsapp-plantilla-bloqueada');
    if (attributedSource) tags.push(`source:${attributedSource}`);
    if (utmCampaign) tags.push(`campaign:${utmCampaign}`);
    if (d.tipoConsulta) tags.push(`consulta:${d.tipoConsulta}`);

    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: d.nombre,
        email: d.email,
        phone: d.whatsapp || '',
        source: 'dracarolinamacareno.com',
        page: ref.pathname || '/',
        idioma,
        referer: d.referer,
        utm_source: utmSource,
        utm_medium: ref.searchParams.get('utm_medium') || '',
        utm_campaign: utmCampaign,
        attributed_source: attributedSource,
        attributed_label: d.sourceLabel || utmSource || '',
        // Ya traducido al texto exacto del desplegable del CRM, que rechaza
        // cualquier valor que no coincida letra por letra.
        fuente_del_lead: ghlFuenteDelLead(attributedSource),
        // Solo trae valor si el paciente llegó desde un anuncio de Google.
        gclid: d.gclid || '',
        tipo_consulta: d.tipoConsulta || 'general',
        mensaje: d.mensaje || '',
        tags,
        submitted_at: new Date().toISOString(),
      }),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!r.ok) return `ERROR ${r.status} al llamar al CRM`;
    return 'OK, enviado al CRM';
  } catch (e) {
    const m = e instanceof Error ? e.message : String(e);
    return `ERROR: ${m.slice(0, 90)}`;
  }
}

function buildEmailHtml(data: {
  nombre: string;
  email: string;
  whatsapp: string;
  empresa: string;
  tipoConsulta: string;
  mensaje: string;
  estadoCrm?: string;
}) {
  const waLink = `https://wa.me/${data.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Hola ${data.nombre}, te contactamos de parte de Dra. Carolina Macareno sobre tu consulta de ${data.tipoConsulta}.`)}`;
  const emailLink = `mailto:${data.email}?subject=Seguimiento%20consulta%20${encodeURIComponent(data.tipoConsulta)}&body=Hola%20${encodeURIComponent(data.nombre)}%2C`;
  const esLeadUsCanada = esNumeroUsOCanada(data.whatsapp);

  /*
    Aviso del CRM dentro del propio correo.

    Si el lead no llegó al pipeline, se ve en el primer correo que entre y no
    tres semanas después, cuando ya hay leads perdidos que nadie puede
    reconstruir. Verde cuando salió bien, rojo cuando no.
  */
  const okCrm = (data.estadoCrm || '').startsWith('OK');
  const avisoCrm = data.estadoCrm
    ? `<div style="margin:16px 0;padding:12px 14px;border-radius:6px;font:14px system-ui;background:${okCrm ? '#ecfdf5' : '#fef2f2'};color:${okCrm ? '#065f46' : '#991b1b'};border:1px solid ${okCrm ? '#a7f3d0' : '#fecaca'}">
         <strong>CRM:</strong> ${data.estadoCrm}${okCrm ? '' : ' &middot; este lead NO está en el pipeline, hay que crearlo a mano'}
       </div>`
    : '';

  const avisoWhatsappUs = esLeadUsCanada
    ? `<div style="margin:16px 0;padding:16px 18px;border-radius:6px;font:14px system-ui;background:#fef2f2;color:#991b1b;border:2px solid #dc2626">
         <strong>⚠️ Número de EE. UU. o Canadá.</strong> El bot de WhatsApp de GHL
         NO le va a escribir: la plantilla está bloqueada para +1 hasta que
         se resuelva la apelación (4-oct-2026). Este lead no le escribió
         primero por WhatsApp, así que sin plantilla no hay forma de que
         GHL abra la conversación sola.<br/><br/>
         <strong>Escríbele tú misma con el botón verde de abajo</strong>, abre
         la app de WhatsApp directo y no pasa por la plantilla bloqueada.
       </div>`
    : '';

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nuevo Lead, Dra. Carolina Macareno</title>
</head>
<body style="margin:0;padding:0;background:#0D1321;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0D1321;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg,#111827 0%,#1a2235 100%);border-radius:12px 12px 0 0;padding:32px 40px;border-bottom:2px solid #C9A461;text-align:center;">
              <p style="margin:0 0 8px 0;font-size:11px;font-weight:600;letter-spacing:0.3em;text-transform:uppercase;color:#C9A461;">NUEVO LEAD</p>
              <h1 style="margin:0;font-size:24px;font-weight:700;color:#F5F5F0;font-family:Georgia,serif;">Dra. Carolina Macareno</h1>
              <p style="margin:8px 0 0;font-size:13px;color:#9CA3AF;">Rehabilitadora Oral · El Poblado, Medellín</p>
            </td>
          </tr>

          <!-- ALERT BADGE -->
          <tr>
            <td style="background:#111827;padding:20px 40px 0;text-align:center;">
              <span style="display:inline-block;background:rgba(201,164,97,0.15);border:1px solid rgba(201,164,97,0.4);color:#C9A461;font-size:12px;font-weight:600;padding:6px 16px;border-radius:20px;letter-spacing:0.1em;">
                🔔 Paciente solicita atención · ${new Date().toLocaleDateString('es-CO', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
              </span>
            </td>
          </tr>

          <!-- AVISO WHATSAPP EE. UU. / CANADÁ -->
          <tr>
            <td style="background:#111827;padding:16px 40px 0;">${avisoWhatsappUs}</td>
          </tr>

          <!-- ESTADO DEL CRM -->
          <tr>
            <td style="background:#111827;padding:16px 40px 0;">${avisoCrm}</td>
          </tr>

          <!-- PATIENT INFO -->
          <tr>
            <td style="background:#111827;padding:28px 40px 0;">
              <p style="margin:0 0 16px;font-size:11px;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;color:#C9A461;">Datos del paciente</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                ${[
                  { label: '👤 Nombre', value: data.nombre },
                  { label: '📧 Email', value: data.email || 'No proporcionado' },
                  { label: '📱 WhatsApp', value: data.whatsapp || 'No proporcionado' },
                  { label: '🏢 Empresa / Referido', value: data.empresa || 'No especificado' },
                  { label: '🦷 Tipo de consulta', value: data.tipoConsulta || 'No especificado' },
                ].map(({ label, value }) => `
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #1F2937;">
                    <table width="100%"><tr>
                      <td width="40%" style="font-size:12px;color:#6B7280;vertical-align:top;padding-right:12px;">${label}</td>
                      <td width="60%" style="font-size:13px;font-weight:500;color:#F5F5F0;">${value}</td>
                    </tr></table>
                  </td>
                </tr>`).join('')}
              </table>
            </td>
          </tr>

          <!-- MESSAGE -->
          <tr>
            <td style="background:#111827;padding:24px 40px 0;">
              <p style="margin:0 0 12px;font-size:11px;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;color:#C9A461;">Mensaje del paciente</p>
              <div style="background:#0D1321;border:1px solid #1F2937;border-left:3px solid #C9A461;border-radius:6px;padding:16px 20px;">
                <p style="margin:0;font-size:14px;color:#D1D5DB;line-height:1.7;">${data.mensaje || 'El paciente no agregó un mensaje adicional.'}</p>
              </div>
            </td>
          </tr>

          <!-- ACTION BUTTONS -->
          <tr>
            <td style="background:#111827;padding:28px 40px;">
              <p style="margin:0 0 16px;font-size:11px;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;color:#9CA3AF;">Responder ahora</p>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-right:12px;">
                    <a href="${waLink}" style="display:inline-block;background:#25D366;color:#fff;font-size:13px;font-weight:700;padding:12px 24px;border-radius:8px;text-decoration:none;">
                      💬 WhatsApp
                    </a>
                  </td>
                  <td>
                    <a href="${emailLink}" style="display:inline-block;background:transparent;color:#C9A461;font-size:13px;font-weight:700;padding:12px 24px;border-radius:8px;text-decoration:none;border:1px solid #C9A461;">
                      ✉️ Responder por Email
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#0D1321;border-radius:0 0 12px 12px;padding:20px 40px;border-top:1px solid #1F2937;text-align:center;">
              <p style="margin:0;font-size:11px;color:#4B5563;">Este lead llegó desde <strong style="color:#9CA3AF;">dracarolinamacareno.com</strong> · Formulario de contacto</p>
              <p style="margin:6px 0 0;font-size:11px;color:#4B5563;">© ${new Date().getFullYear()} Dra. Carolina Macareno · El Poblado, Medellín</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/*
  15-sep-2026: correo de confirmación que recibe el PACIENTE, no el equipo.

  Hasta ahora, si el bot de WhatsApp fallaba (caso EE. UU./Canadá, ver
  esNumeroUsOCanada arriba) o si el correo interno se quedaba sin ver, el
  paciente no recibía absolutamente nada de vuelta. Esto es lo que de
  verdad cierra ese hueco: llega en segundos, no depende de GHL ni de
  WhatsApp ni de que alguien revise una bandeja, y usa el mismo idioma
  detectado que ya se usa para la etiqueta lang: del CRM.

  A propósito es corto: confirma que se recibió el mensaje y da una vía
  directa por WhatsApp para quien no quiera esperar. No promete precio ni
  tiempos, porque eso lo define la Dra. caso por caso.
*/
// Las opciones del formulario (ContactSection.tsx, `treatments`) están fijas
// en español, incluso en las páginas en inglés. Sin esta traducción, un
// paciente que escribe en inglés recibía "we've received your inquiry about
// Turismo Dental (Paciente Internacional)", español metido dentro de una
// frase en inglés. Solo cubre las opciones reales del desplegable; un valor
// que no está en la lista simplemente no se traduce y se usa tal cual, para
// no ocultar nunca lo que el paciente escribió.
const TIPO_CONSULTA_EN: Record<string, string> = {
  'Implantes Dentales': 'Dental Implants',
  'All-on-4 / All-on-6': 'All-on-4 / All-on-6',
  'Implantes Cigomáticos': 'Zygomatic Implants',
  'Diseño de Sonrisa Digital': 'Digital Smile Design',
  'Carillas de Porcelana / Zirconio': 'Porcelain / Zirconia Veneers',
  'Coronas de Zirconio': 'Zirconia Crowns',
  'Rehabilitación Oral Completa': 'Full Oral Rehabilitation',
  'Estética Dental Avanzada': 'Advanced Dental Esthetics',
  'Turismo Dental (Paciente Internacional)': 'Dental Tourism (International Patient)',
  'Consulta de Diagnóstico': 'Diagnostic Consultation',
  'Otra consulta': 'Another inquiry',
};

function buildPatientEmailHtml(nombre: string, tipoConsulta: string, idioma: 'en' | 'es', waLink: string) {
  const primerNombre = (nombre || '').trim().split(/\s+/)[0] || '';
  // Cuando no hay tipo de consulta, "your inquiry about your inquiry" o "tu
  // consulta sobre tu consulta" queda redundante. Se resuelve con una frase
  // aparte, no con un relleno genérico que repita la misma palabra dos veces.
  const consultaEn = tipoConsulta ? (TIPO_CONSULTA_EN[tipoConsulta] || tipoConsulta) : '';
  const consultaEs = tipoConsulta || '';

  const textos = idioma === 'en'
    ? {
        preheader: "We've received your inquiry and will reply soon.",
        greeting: primerNombre ? `Hi ${primerNombre},` : 'Hi there,',
        body1: consultaEn
          ? `Thank you for reaching out. We've received your inquiry about ${consultaEn} and Dr. Carolina Macareno's team is reviewing it.`
          : "Thank you for reaching out. We've received your message and Dr. Carolina Macareno's team is reviewing it.",
        body2: "We'll get back to you very soon with the information you need.",
        body3: "If you'd rather not wait, you can message us directly on WhatsApp:",
        cta: 'Message us on WhatsApp',
        signature: 'Kind regards,',
      }
    : {
        preheader: 'Ya recibimos tu consulta y te contestamos pronto.',
        greeting: primerNombre ? `Hola ${primerNombre},` : 'Hola,',
        body1: consultaEs
          ? `Gracias por escribirnos. Ya recibimos tu consulta sobre ${consultaEs} y el equipo de la Dra. Carolina Macareno la está revisando.`
          : 'Gracias por escribirnos. Ya recibimos tu mensaje y el equipo de la Dra. Carolina Macareno lo está revisando.',
        body2: 'Te vamos a contestar muy pronto, con la información que necesitas.',
        body3: 'Si prefieres no esperar, puedes escribirnos directamente por WhatsApp:',
        cta: 'Escríbenos por WhatsApp',
        signature: 'Un saludo,',
      };

  return `
<!DOCTYPE html>
<html lang="${idioma}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dra. Carolina Macareno</title>
</head>
<body style="margin:0;padding:0;background:#F5F5F0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <span style="display:none;font-size:1px;color:#F5F5F0;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">${textos.preheader}</span>
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F5F0;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="520" cellpadding="0" cellspacing="0" style="max-width:520px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #E5E7EB;">

          <tr>
            <td style="background:#111827;padding:28px 36px;border-bottom:2px solid #C9A461;text-align:center;">
              <h1 style="margin:0;font-size:20px;font-weight:700;color:#F5F5F0;font-family:Georgia,serif;">Dra. Carolina Macareno</h1>
              <p style="margin:6px 0 0;font-size:12px;color:#9CA3AF;">Rehabilitación Oral · El Poblado, Medellín</p>
            </td>
          </tr>

          <tr>
            <td style="padding:32px 36px;">
              <p style="margin:0 0 16px;font-size:15px;color:#111827;">${textos.greeting}</p>
              <p style="margin:0 0 16px;font-size:15px;color:#374151;line-height:1.6;">${textos.body1}</p>
              <p style="margin:0 0 24px;font-size:15px;color:#374151;line-height:1.6;">${textos.body2}</p>
              <p style="margin:0 0 12px;font-size:14px;color:#6B7280;">${textos.body3}</p>
              <a href="${waLink}" style="display:inline-block;background:#25D366;color:#fff;font-size:14px;font-weight:700;padding:12px 24px;border-radius:8px;text-decoration:none;">
                💬 ${textos.cta}
              </a>
              <p style="margin:28px 0 0;font-size:14px;color:#374151;">${textos.signature}<br/><strong>Dra. Carolina Macareno</strong></p>
            </td>
          </tr>

          <tr>
            <td style="background:#F9FAFB;padding:16px 36px;border-top:1px solid #E5E7EB;text-align:center;">
              <p style="margin:0;font-size:11px;color:#9CA3AF;">Dra. Carolina Macareno · El Poblado, Medellín</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('Contact API: RESEND_API_KEY missing');
      return NextResponse.json({ error: 'RESEND_API_KEY no configurada en Vercel' }, { status: 500 });
    }

    const body = await req.json();
    const { nombre, email, whatsapp, empresa, tipoConsulta, mensaje, source, sourceLabel, gclid } = body;

    // El negocio es WhatsApp-first: basta con nombre + un medio de contacto
    // (WhatsApp o email). El email pasó a ser opcional en el form principal.
    if (!nombre || (!email && !whatsapp)) {
      return NextResponse.json(
        { error: 'Nombre y al menos un medio de contacto (WhatsApp o email) son requeridos' },
        { status: 400 }
      );
    }

    /*
      El envío a GHL va ANTES del correo a propósito.

      Antes iba después y sus errores se tragaban en silencio: si el CRM no
      recibía el lead, el correo llegaba igual y nadie se enteraba. Así estuvo
      pasando, y los leads del formulario había que crearlos a mano en el
      pipeline sin saber por qué.

      Ahora el resultado viaja dentro del propio correo. Si algo falla, se ve en
      el primer lead que entre, no dentro de tres semanas.
    */
    const estadoCrm = await enviarAlCrm({
      nombre, email, whatsapp, tipoConsulta, mensaje, source, sourceLabel, gclid,
      referer: req.headers.get('referer') || '',
    });

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: 'Dra. Carolina Macareno <noreply@dracarolinamacareno.com>',
      to: [ASSISTANT_EMAIL],
      // Solo respondible al lead si dejó email; si no, se contacta por WhatsApp.
      ...(email ? { replyTo: email } : {}),
      subject: esNumeroUsOCanada(whatsapp)
        ? `⚠️🇺🇸 ESCRÍBELE TÚ: ${nombre} (EE. UU./Canadá, el bot no le llega)`
        : `🦷 Nuevo lead: ${nombre}, ${tipoConsulta || 'Consulta general'}`,
      html: buildEmailHtml({ nombre, email, whatsapp, empresa, tipoConsulta, mensaje, estadoCrm }),
    });

    if (error) {
      console.error('Resend error:', JSON.stringify(error));
      return NextResponse.json(
        { error: error.message || 'Error enviando email', name: error.name, detail: error },
        { status: 500 }
      );
    }

    /*
      15-sep-2026: confirmación al PACIENTE, no solo al equipo.

      Va después del correo interno y en su propio try/catch a propósito:
      si esto falla (por ejemplo, Resend rechaza el envío), el lead ya quedó
      guardado en el CRM y el equipo ya fue avisado. Un fallo aquí no puede
      tumbar la respuesta 200 que espera el formulario del sitio.

      Se salta si no dejó email, porque no hay a dónde mandarlo; para esos
      casos sigue siendo WhatsApp la única vía, con el mismo aviso de
      esNumeroUsOCanada de arriba si aplica.
    */
    if (email) {
      try {
        const idiomaPaciente = detectarIdioma(mensaje, req.headers.get('referer') || '');
        const waLinkPaciente = buildWaUrl({
          phone: '573163975232',
          message: idiomaPaciente === 'en'
            ? `Hi, I just filled out the form on your website about ${tipoConsulta || 'a consultation'}.`
            : `Hola, acabo de llenar el formulario de la web sobre ${tipoConsulta || 'una consulta'}.`,
          locale: idiomaPaciente,
        });
        await resend.emails.send({
          from: 'Dra. Carolina Macareno <hola@dracarolinamacareno.com>',
          to: [email],
          subject: idiomaPaciente === 'en'
            ? "We've received your inquiry, Dr. Carolina Macareno"
            : 'Recibimos tu consulta, Dra. Carolina Macareno',
          html: buildPatientEmailHtml(nombre, tipoConsulta, idiomaPaciente, waLinkPaciente),
        });
      } catch (e) {
        // No relanzar: el lead y el aviso interno ya están a salvo.
        console.error('Correo de confirmación al paciente falló:', e instanceof Error ? e.message : String(e));
      }
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('Contact API error:', err);
    return NextResponse.json({ error: `Excepción: ${msg}` }, { status: 500 });
  }
}
