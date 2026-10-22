import VideoYouTube from '@/components/sections/VideoYouTube';
import SchemaOrg from '@/components/SchemaOrg';

/**
 * Un video largo incrustado, y los demás como enlaces a YouTube.
 *
 * Pesa poco a propósito: el reproductor es uno solo (y carga al tocar, ver VideoYouTube)
 * y los videos relacionados son texto con un enlace, sin miniaturas ni reproductores.
 * Cada enlace abre YouTube en otra pestaña, para que el visitante no pierda esta página
 * ni el botón de WhatsApp.
 *
 * Además de verse, el video queda descrito para Google (VideoObject): es lo que permite
 * que la página aparezca también en los resultados de video.
 */
export interface VideoPrincipal {
  id: string;
  titulo: string;
  descripcion: string;
  /** AAAA-MM-DD de publicación */
  fecha: string;
  /** Duración en formato ISO 8601, por ejemplo PT24M26S */
  duracion: string;
}

export interface VideoRelacionado {
  id: string;
  titulo: string;
  /** Los Shorts van en /shorts/ y los videos normales en /watch?v= */
  short?: boolean;
}

interface Props {
  encabezado: string;
  intro: string;
  principal: VideoPrincipal;
  relacionadosTitulo: string;
  relacionados: VideoRelacionado[];
  playLabel: string;
  verEnYouTube: string;
}

export default function VideoConRelacionados({
  encabezado,
  intro,
  principal,
  relacionadosTitulo,
  relacionados,
  playLabel,
  verEnYouTube,
}: Props) {
  const esquema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: principal.titulo,
    description: principal.descripcion,
    thumbnailUrl: `https://i.ytimg.com/vi/${principal.id}/hqdefault.jpg`,
    uploadDate: principal.fecha,
    duration: principal.duracion,
    embedUrl: `https://www.youtube-nocookie.com/embed/${principal.id}`,
    contentUrl: `https://www.youtube.com/watch?v=${principal.id}`,
  };

  return (
    <section className="px-4 py-16" style={{ backgroundColor: '#FCFBF9' }}>
      <SchemaOrg schema={[esquema]} />
      <div className="mx-auto max-w-4xl">
        <h2
          className="mb-3 text-3xl font-bold md:text-4xl"
          style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}
        >
          {encabezado}
        </h2>
        <p className="mb-8 text-lg" style={{ color: '#5A5449' }}>
          {intro}
        </p>

        <VideoYouTube id={principal.id} title={principal.titulo} playLabel={playLabel} />

        <h3
          className="mb-4 mt-10 text-lg font-semibold"
          style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}
        >
          {relacionadosTitulo}
        </h3>
        <ul className="space-y-3">
          {relacionados.map((v) => (
            <li key={v.id}>
              <a
                href={v.short ? `https://www.youtube.com/shorts/${v.id}` : `https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-4 rounded-lg border px-4 py-3 transition-colors hover:bg-white"
                style={{ borderColor: '#E8E3DA', color: '#211E18' }}
              >
                <span>{v.titulo}</span>
                <span className="shrink-0 text-sm font-medium" style={{ color: '#8A6B2E' }}>
                  {verEnYouTube} &rarr;
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
