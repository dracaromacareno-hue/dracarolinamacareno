import { NextRequest, NextResponse } from 'next/server';
import TurndownService from 'turndown';

/**
 * Markdown para agentes (30-sep-2026).
 *
 * Cuando un agente de IA pide una página con `Accept: text/markdown`, el
 * middleware la reescribe aquí. Los navegadores y Googlebot nunca mandan ese
 * Accept, así que siguen recibiendo el HTML de siempre.
 *
 * Se convierte el HTML YA renderizado (pidiéndoselo al propio sitio) y no el
 * código fuente, para que el Markdown diga exactamente lo que ve un visitante:
 * mismos precios, mismos textos, en el idioma de la URL.
 *
 * ⛔ La respuesta va con `no-store` a propósito. El HTML de este sitio se cachea
 * un día en el CDN (ver el comentario largo en next.config.ts). Si esta
 * respuesta se cacheara, un rastreador podría recibir Markdown en lugar de la
 * página. Con no-store eso no puede pasar, cueste lo que cueste en invocaciones:
 * solo la piden agentes, son pocas.
 */

const turndown = new TurndownService({
  headingStyle: 'atx',
  bulletListMarker: '-',
  codeBlockStyle: 'fenced',
});
turndown.remove(['script', 'style', 'noscript', 'iframe', 'form', 'button']);
turndown.addRule('sinSvg', { filter: (node) => node.nodeName.toLowerCase() === 'svg', replacement: () => '' });

const MAX_PATH_LENGTH = 300;

export async function GET(request: NextRequest) {
  const path = request.headers.get('x-markdown-path') ?? request.nextUrl.searchParams.get('path') ?? '/';

  // Solo rutas del propio sitio. Nada de URLs completas ni de "//otro.com":
  // esta ruta hace un fetch, y no debe poder apuntar a ningún otro lado.
  if (!path.startsWith('/') || path.startsWith('//') || path.length > MAX_PATH_LENGTH || /[\\\s]/.test(path)) {
    return new NextResponse('Bad request', { status: 400 });
  }

  const target = new URL(path, request.nextUrl.origin);
  let html: string;
  try {
    const res = await fetch(target, {
      headers: { accept: 'text/html', 'user-agent': 'markdown-for-agents' },
      redirect: 'manual',
    });
    if (res.status >= 300 && res.status < 400) {
      const location = res.headers.get('location');
      return new NextResponse(null, { status: res.status, headers: { location: location ?? '/' } });
    }
    if (!res.ok) {
      return new NextResponse('Not found', { status: res.status === 404 ? 404 : 502 });
    }
    html = await res.text();
  } catch {
    return new NextResponse('Upstream error', { status: 502 });
  }

  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? '';
  const start = html.search(/<main[\s>]/i);
  const end = html.toLowerCase().lastIndexOf('</main>');
  const body = start !== -1 && end > start ? html.slice(start, end + 7) : html;

  const markdown = (title ? `# ${title}\n\n` : '') + turndown.turndown(body).replace(/\n{3,}/g, '\n\n').trim() + '\n';

  return new NextResponse(markdown, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'no-store',
      'Vercel-CDN-Cache-Control': 'no-store',
      'CDN-Cache-Control': 'no-store',
      Vary: 'Accept',
      'x-markdown-tokens': String(Math.ceil(markdown.length / 4)),
    },
  });
}
