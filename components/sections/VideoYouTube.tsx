'use client';

import { useState } from 'react';

/**
 * Un video de YouTube que NO pesa hasta que alguien lo toca.
 *
 * Por qué existe (22-oct-2026): la landing /implantes ya tuvo el problema contrario, un
 * video incrustado que arranca solo y suma más de 800 KB a una página que el 94 % del
 * tráfico abre en celular. Aquí se pinta solo la miniatura (una imagen con carga
 * diferida) y el reproductor de YouTube se monta únicamente cuando la persona pulsa
 * play. Cero JavaScript de terceros antes de eso.
 *
 * Se usa el dominio youtube-nocookie.com para no instalar cookies de YouTube hasta que
 * el visitante decide ver el video.
 */
interface Props {
  id: string;
  title: string;
  /** Texto del botón para lectores de pantalla */
  playLabel: string;
}

export default function VideoYouTube({ id, title, playLabel }: Props) {
  const [activo, setActivo] = useState(false);

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl border"
      style={{ aspectRatio: '16 / 9', backgroundColor: '#070B14', borderColor: '#E8E3DA' }}
    >
      {activo ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActivo(true)}
          aria-label={`${playLabel}: ${title}`}
          className="group absolute inset-0 h-full w-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt={title}
            loading="lazy"
            decoding="async"
            width={480}
            height={360}
            className="h-full w-full object-cover transition-opacity group-hover:opacity-90"
          />
          <span
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-transform group-hover:scale-110"
            style={{ backgroundColor: '#C9A461' }}
          >
            <svg className="ml-1 h-7 w-7" viewBox="0 0 24 24" fill="#070B14" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
