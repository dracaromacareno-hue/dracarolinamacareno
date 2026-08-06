import { NextRequest, NextResponse } from 'next/server';

const PIXEL_ID = '36066925139564924';

/**
 * Evento de servidor (Conversions API) para las páginas de gracias.
 *
 * Restricción de sector salud: no se puede enviar ningún dato de contacto
 * (email, teléfono, nombre) para matching -- Meta lo prohíbe para anunciantes
 * de salud. Por eso este evento SOLO usa señales técnicas (fbp, fbc, IP,
 * user-agent), igual que ya se acepta en el pixel del navegador.
 *
 * event_id debe ser el mismo que usa fbq('trackCustom', ..., {eventID}) en el
 * cliente, para que Meta deduplique el evento y no lo cuente dos veces.
 */
export async function POST(req: NextRequest) {
  try {
    if (!process.env.META_CAPI_ACCESS_TOKEN) {
      console.error('CAPI Lead API: META_CAPI_ACCESS_TOKEN missing');
      return NextResponse.json({ error: 'META_CAPI_ACCESS_TOKEN no configurada en Vercel' }, { status: 500 });
    }

    const body = await req.json();
    const { event_name, event_source_url, event_id, fbp, fbc } = body;

    if (!event_name || !event_source_url) {
      return NextResponse.json(
        { error: 'event_name y event_source_url son requeridos' },
        { status: 400 },
      );
    }

    const clientIp =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      undefined;
    const userAgent = req.headers.get('user-agent') || undefined;

    const userData: Record<string, string> = {};
    if (fbp) userData.fbp = fbp;
    if (fbc) userData.fbc = fbc;
    if (clientIp) userData.client_ip_address = clientIp;
    if (userAgent) userData.client_user_agent = userAgent;

    const metaResponse = await fetch(
      `https://graph.facebook.com/v21.0/${PIXEL_ID}/events?access_token=${process.env.META_CAPI_ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: [
            {
              event_name,
              event_time: Math.floor(Date.now() / 1000),
              event_source_url,
              action_source: 'website',
              event_id,
              user_data: userData,
            },
          ],
        }),
      },
    );

    const result = await metaResponse.json().catch(() => null);

    if (!metaResponse.ok) {
      console.error('Meta CAPI error:', JSON.stringify(result));
      return NextResponse.json({ error: 'Meta CAPI request failed', detail: result }, { status: 502 });
    }

    return NextResponse.json({ success: true, metaResponse: result });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('CAPI Lead API error:', err);
    return NextResponse.json({ error: `Excepción: ${msg}` }, { status: 500 });
  }
}
