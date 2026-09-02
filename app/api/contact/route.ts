import { ghlFuenteDelLead } from '@/lib/source-tracking';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const ASSISTANT_EMAIL = process.env.ASSISTANT_EMAIL || 'dracarolinamacarenob@gmail.com';

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

    // El idioma en el que el paciente llenó el formulario. Las páginas en
    // inglés viven bajo /en/; todo lo demás, incluidas las landings de pauta,
    // es español. Va como etiqueta y no solo dentro de `page` porque el flujo
    // del CRM sabe filtrar por etiqueta, pero no sabe leer una ruta.
    // Sin esto, a un paciente de Estados Unidos le llega la plantilla de
    // WhatsApp en español.
    const idioma = /^\/en(\/|$)/.test(ref.pathname) ? 'en' : 'es';

    const tags = ['web_form', `lang:${idioma}`];
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
      subject: `🦷 Nuevo lead: ${nombre}, ${tipoConsulta || 'Consulta general'}`,
      html: buildEmailHtml({ nombre, email, whatsapp, empresa, tipoConsulta, mensaje, estadoCrm }),
    });

    if (error) {
      console.error('Resend error:', JSON.stringify(error));
      return NextResponse.json(
        { error: error.message || 'Error enviando email', name: error.name, detail: error },
        { status: 500 }
      );
    }


    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('Contact API error:', err);
    return NextResponse.json({ error: `Excepción: ${msg}` }, { status: 500 });
  }
}
