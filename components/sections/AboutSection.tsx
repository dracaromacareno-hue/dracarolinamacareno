import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '../AnimatedSection';

interface AboutMessages {
  titulo: string;
  subtitulo: string;
  bio1: string;
  bio2: string;
  bio3: string;
  credenciales: string;
  verMas: string;
}

interface AboutSectionProps {
  messages: AboutMessages;
  locale: string;
}

const credentials = [
  { label: 'Odontóloga', detail: 'Universidad El Bosque, 2002' },
  { label: 'Esp. Rehabilitación Oral', detail: 'Universidad CES, 2009' },
  { label: 'Implantología Avanzada', detail: 'FACOP, Brasil' },
  { label: 'Estética Dental', detail: 'New York University, EEUU' },
  { label: '17+ Años de Experiencia', detail: 'Instituciones de prestigio, Medellín' },
  { label: 'Actualización Permanente', detail: 'Cursos nacionales e internacionales' },
];

export default function AboutSection({ messages, locale }: AboutSectionProps) {
  const localePath = (path: string) => locale === 'es' ? path : `/en${path}`;

  return (
    <section className="py-24 bg-[#F3EEE5] relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_right,_rgba(201,164,97,0.10)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <AnimatedSection direction="right" className="relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              {/* Decorative frames */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#C9A461]/20 rounded" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C9A461]/10 rounded" />
              {/* Photo */}
              <div className="relative w-full h-full rounded overflow-hidden">
                <Image
                  src="/images/dra-carolina-consultorio.webp"
                  alt="Dra. Carolina Macareno - Rehabilitadora Oral, Medellín"
                  fill
                  className="object-cover object-[50%_10%]"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay gradient at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#070B14]/80 to-transparent" />
                {/* Name card at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p
                    className="text-[#8A6B2E] font-bold text-lg"
                    style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
                  >
                    Dra. Carolina Macareno
                  </p>
                  <p className="text-[#211E18] text-sm">Rehabilitadora Oral</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text content */}
          <AnimatedSection direction="left" className="order-1 lg:order-2">
            <div className="mb-2">
              {/*
                Dorado oscurecido a #8A6B2E solo para texto pequeno sobre fondo
                claro. El #C9A461 de marca sobre el beige #F3EEE5 queda en un
                contraste de ~2:1, por debajo del minimo legible, y en un texto
                de 12px en mayusculas con tracking amplio se vuelve casi
                invisible en pantalla de celular a plena luz. Es el mismo dorado,
                solo mas profundo. En fondos oscuros y en elementos grandes o
                decorativos se sigue usando #C9A461 sin tocar.
              */}
              <span className="text-[#8A6B2E] text-xs font-medium tracking-[0.3em] uppercase">
                {messages.subtitulo}
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#211E18] mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {messages.titulo}
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#C9A461] to-[#E5B866] mb-8" />

            <div className="space-y-4 mb-10">
              <p className="text-[#5A5449] leading-relaxed">{messages.bio1}</p>
              <p className="text-[#5A5449] leading-relaxed">{messages.bio2}</p>
            </div>

            {/* Credentials */}
            <div className="mb-8">
              <h3 className="text-[#211E18] font-semibold text-sm tracking-widest uppercase mb-4">
                {messages.credenciales}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {credentials.map((cred) => (
                  <div
                    key={cred.label}
                    className="flex items-start gap-3 bg-white border border-[#E8E3DA] rounded p-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A461] mt-1.5 flex-shrink-0" />
                    <div>
                      <p className="text-[#211E18] text-sm font-medium">{cred.label}</p>
                      <p className="text-[#77726A] text-xs">{cred.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-6 flex-wrap">
              <Link
                href={localePath('/sobre-mi')}
                className="inline-flex items-center gap-2 text-[#8A6B2E] hover:text-[#8A6B2E] font-medium transition-colors group"
              >
                {messages.verMas}
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/*
                Sello de confianza: Google, no Doctoralia (agosto 2026).

                Antes decía "Verificada en Doctoralia" y enlazaba allí. Dos
                problemas: Doctoralia es un directorio que compite por
                "odontólogo Medellín", así que el enlace le pasaba autoridad
                desde la home justo en las búsquedas que queremos ganarle; y
                además contradecía al resto de la página, que ya presenta las
                reseñas de Google.

                Ahora apunta al perfil de Google Business, que es activo propio:
                los clics hacia la ficha son señal de actividad para el mapa
                local, de donde llegan los pacientes de Medellín.

                La cifra es la real verificada el 3-ago-2026. Si cambia en
                Google hay que actualizarla aquí; no se inventa ni se redondea.
              */}
              <a
                href="https://maps.app.goo.gl/bNw5rUJT1DVBpbRj9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-[#E8E3DA] hover:border-[#C9A461] rounded px-3 py-2 transition-colors group"
                title={
                  locale === 'es'
                    ? 'Ver el perfil y las reseñas en Google'
                    : 'See the profile and reviews on Google'
                }
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.4a5.5 5.5 0 0 1-2.4 3.6v3h3.9c2.2-2.1 3.6-5.2 3.6-8.8z"/>
                  <path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3a7.2 7.2 0 0 1-10.7-3.8H1.4v3.1A12 12 0 0 0 12 24z"/>
                  <path fill="#FBBC05" d="M5.3 14.3a7.1 7.1 0 0 1 0-4.6V6.6H1.4a12 12 0 0 0 0 10.8l3.9-3.1z"/>
                  <path fill="#EA4335" d="M12 4.8c1.8 0 3.4.6 4.6 1.8l3.5-3.5A12 12 0 0 0 1.4 6.6l3.9 3.1A7.2 7.2 0 0 1 12 4.8z"/>
                </svg>
                {/*
                  Estaba escrito solo en español y se mostraba igual en la
                  versión en inglés: "5,0 ★ con 26 reseñas en Google" en medio
                  de una página en inglés. Detectado el 5-ago-2026.
                  El separador decimal también cambia: coma en español, punto
                  en inglés.
                */}
                <span className="text-[#5A5449] text-xs group-hover:text-[#211E18] transition-colors">
                  {locale === 'es' ? '5,0' : '5.0'} &#9733;{' '}
                  {locale === 'es' ? 'con 26 reseñas en' : 'from 26 reviews on'}{' '}
                  <span className="text-[#211E18] font-semibold">Google</span>
                </span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
