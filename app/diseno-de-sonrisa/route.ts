export async function GET() {
  const response = await fetch(
    'https://sites.leadconnectorhq.com/preview/oS37NiFZQpFc66t5Ts4L',
    { cache: 'no-store' }
  );

  let html = await response.text();

  html = html.replace(
    /<meta(?=[^>]*\bname=["']robots["'])(?=[^>]*\bcontent=["'][^"']*noindex)[^>]*>/gi,
    ''
  );

  return new Response(html, {
    status: response.status,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}
