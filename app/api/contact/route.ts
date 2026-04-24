import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const ASSISTANT_EMAIL = process.env.ASSISTANT_EMAIL || 'dracarolinamacarenob@gmail.com';

function buildEmailHtml(data: {
  nombre: string;
  email: string;
  whatsapp: string;
  empresa: string;
  tipoConsulta: string;
  mensaje: string;
}) {
  const waLink = `https://wa.me/${data.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Hola ${data.nombre}, te contactamos de parte de Dra. Carolina Macareno sobre tu consulta de ${data.tipoConsulta}.`)}`;
  const emailLink = `mailto:${data.email}?subject=Seguimiento%20consulta%20${encodeURIComponent(data.tipoConsulta)}&body=Hola%20${encodeURIComponent(data.nombre)}%2C`;

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nuevo Lead — Dra. Carolina Macareno</title>
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

          <!-- PATIENT INFO -->
          <tr>
            <td style="background:#111827;padding:28px 40px 0;">
              <p style="margin:0 0 16px;font-size:11px;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;color:#C9A461;">Datos del paciente</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                ${[
                  { label: '👤 Nombre', value: data.nombre },
                  { label: '📧 Email', value: data.email },
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
    const body = await req.json();
    const { nombre, email, whatsapp, empresa, tipoConsulta, mensaje } = body;

    if (!nombre || !email) {
      return NextResponse.json({ error: 'Nombre y email son requeridos' }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: 'Dra. Carolina Macareno <noreply@dracarolinamacareno.com>',
      to: [ASSISTANT_EMAIL],
      replyTo: email,
      subject: `🦷 Nuevo lead: ${nombre} — ${tipoConsulta || 'Consulta general'}`,
      html: buildEmailHtml({ nombre, email, whatsapp, empresa, tipoConsulta, mensaje }),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Error enviando email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
