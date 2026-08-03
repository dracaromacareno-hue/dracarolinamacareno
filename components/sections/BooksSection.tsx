import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '../AnimatedSection';

interface BookMessages {
  titulo: string;
  subtitulo: string;
  descripcion: string;
  descripcion2: string;
  disponible: string;
  verLibro: string;
  paraQuien: string;
  pacientes: string;
  profesionales: string;
  curiosos: string;
}

export default function BooksSection({ messages, locale }: { messages: BookMessages; locale: string }) {
  const localePath = (path: string) => locale === 'es' ? path : `/en${path}`;

  /*
    Sin emojis (agosto 2026, pedido de la dueña).

    La lista usaba 🦷 👨‍⚕️ 📚. Un emoji se dibuja con la fuente del sistema
    operativo, así que en cada aparato se ve distinto y ninguno respeta la
    paleta ni la tipografía. En una página de salud eso resta seriedad justo
    en el bloque que habla de su libro publicado.

    Se reemplazan por una viñeta dorada de la marca. La lista se entiende
    igual y deja de competir con el texto.
  */
  const audiences = [
    { label: messages.pacientes },
    { label: messages.profesionales },
    { label: messages.curiosos },
  ];

  return (
    <section className="bg-[#F3EEE5] py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_left,_rgba(201,164,97,0.05)_0%,_transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A461]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Book visual */}
          <AnimatedSection direction="right">
            {/*
              La portada REAL, no una imitación (agosto 2026).

              Aquí había un libro dibujado con CSS: un rectángulo azul con
              degradado y el título escrito a mano en HTML. No se parecía en
              nada a la carátula verdadera, así que por más que se actualizara
              la imagen del libro esta sección seguía mostrando otra cosa. Era
              además el único azul del sitio, heredado del diseño oscuro viejo.

              Ahora usa el render de la portada real
              (scripts/render-libro.mjs lo genera desde la carátula de Canva).
              Si cambia la carátula, se regenera el render y esta sección se
              actualiza sola.
            */}
            <div className="relative flex justify-center">
              <Image
                src="/images/libro-el-poder-de-tu-sonrisa-2ed.webp"
                alt="El Poder de Tu Sonrisa, libro de la Dra. Carolina Macareno"
                width={420}
                height={595}
                quality={90}
                className="w-64 sm:w-72 lg:w-80 h-auto drop-shadow-[0_24px_44px_rgba(31,41,55,0.28)]"
              />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="left">
            <span className="inline-flex items-center gap-2 border border-[#C9A461]/30 rounded-full px-4 py-1.5 mb-6 bg-[#C9A461]/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A461]" />
              <span className="text-[#8A6B2E] text-xs font-medium tracking-wider uppercase">{messages.disponible}</span>
            </span>

            <h2
              className="text-3xl sm:text-4xl font-bold text-[#211E18] mb-2 leading-tight"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {messages.titulo}
            </h2>
            <p className="text-[#8A6B2E] text-lg mb-6 italic" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>
              {messages.subtitulo}
            </p>

            <div className="w-12 h-0.5 bg-gradient-to-r from-[#C9A461] to-[#E5B866] mb-6" />

            <p className="text-[#5A5449] leading-relaxed mb-4">{messages.descripcion}</p>
            <p className="text-[#5A5449] leading-relaxed mb-8">{messages.descripcion2}</p>

            {/* Audience */}
            <div className="mb-8">
              <p className="text-[#211E18] font-semibold text-sm tracking-wider uppercase mb-4">{messages.paraQuien}</p>
              <div className="space-y-2">
                {audiences.map((a) => (
                  <div key={a.label} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A461] flex-shrink-0" aria-hidden="true" />
                    <span className="text-[#5A5449] text-sm">{a.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href={localePath('/libros/el-poder-de-tu-sonrisa')}
              className="inline-flex items-center gap-2 bg-[#C9A461] hover:bg-[#E5B866] text-[#070B14] font-bold px-6 py-3 rounded transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#C9A461]/20"
            >
              {messages.verLibro}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
