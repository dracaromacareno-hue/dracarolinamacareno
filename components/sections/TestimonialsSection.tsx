import AnimatedSection from '../AnimatedSection';

interface TestimonialsMessages {
  titulo: string;
  subtitulo: string;
}

type Locale = 'es' | 'en';

const StarIcon = () => (
  <svg className="w-4 h-4 text-[#8A6B2E]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const GoogleIcon = ({ className = 'w-3 h-3' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.4a5.5 5.5 0 0 1-2.4 3.6v3h3.9c2.2-2.1 3.6-5.2 3.6-8.8z" />
    <path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3a7.2 7.2 0 0 1-10.7-3.8H1.4v3.1A12 12 0 0 0 12 24z" />
    <path fill="#FBBC05" d="M5.3 14.3a7.1 7.1 0 0 1 0-4.6V6.6H1.4a12 12 0 0 0 0 10.8l3.9-3.1z" />
    <path fill="#EA4335" d="M12 4.8c1.8 0 3.4.6 4.6 1.8l3.5-3.5A12 12 0 0 0 1.4 6.6l3.9 3.1A7.2 7.2 0 0 1 12 4.8z" />
  </svg>
);

/** Avión, para marcar al paciente que viajó desde otro país. */
const PlaneIcon = () => (
  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16z" />
  </svg>
);

/**
 * Reseñas REALES de Google, transcritas del perfil de la Dra. el 3-ago-2026.
 *
 * Antes estas seis tarjetas eran de Doctoralia mientras la insignia de arriba
 * decía "26 opiniones verificadas en Google". Un visitante que hiciera clic no
 * encontraba esas frases en Google, y una prueba social que no se puede
 * verificar resta más de lo que suma. Ahora la insignia, el enlace y las
 * citas apuntan todas a la misma fuente.
 *
 * REGLAS PARA EDITAR ESTO:
 * 1. El texto va TEXTUAL, tal como está en Google, incluidas las erratas del
 *    paciente ("concenso"). Si se corrige, deja de coincidir con lo que la
 *    persona ve al verificar.
 * 2. `meta` lleva la procedencia del paciente: la que dice la propia reseña
 *    (Xiomara y Minerva la nombran) o la que confirmó la dueña, que conoce a
 *    sus pacientes (Anelisse de Panamá, el resto de Medellín, 3-ago-2026).
 *    Nunca se deduce del nombre ni del idioma.
 * 3. Las reseñas largas se recortan con […] y siempre por frases completas,
 *    nunca cambiando palabras.
 * 4. `internacional` NO se deduce: se marca solo cuando la procedencia de la
 *    regla 2 está confirmada y es fuera de Colombia. Es la etiqueta que hace
 *    que la tarjeta salga de primera y con la insignia de "viajó desde".
 * 5. `meta` y `origen` llevan su versión en inglés. Son texto NUESTRO, así que
 *    se traducen. El campo `text` NO: es la cita del paciente y va en el idioma
 *    en que la escribió, siempre. Traducir una reseña sería falsearla, y quien
 *    la verifique en Google no encontraría esas palabras.
 *
 * EL ORDEN DE ESTE ARRAY ES EL ORDEN EN PANTALLA, y es deliberado: primero
 * los pacientes internacionales. El turismo dental es el negocio de mayor
 * ticket, y a alguien que está evaluando volar a Medellín le pesa mucho más
 * leer a otro que ya voló que a un paciente de la misma ciudad.
 */
const testimonials = [
  {
    name: 'Xiomara Veloz',
    meta: 'Orlando, Florida',
    metaEn: 'Orlando, Florida',
    origen: 'Estados Unidos',
    origenEn: 'the United States',
    internacional: true,
    // Va en inglés porque así la escribió ella. Traducirla sería falsear una cita.
    text: "Dr. Carolina Macareno is an amazing dentist. She's absolutely caring, gentle, and understanding. Her office is immaculate and her staff is top notch. We came from Orlando, Florida and now I will come annually. We highly recommend her over & over again.",
    initials: 'XV',
  },
  {
    name: 'Minerva Dutari',
    meta: 'Panamá · 10 implantes y prótesis híbrida',
    metaEn: 'Panama · 10 implants and hybrid prosthesis',
    origen: 'Panamá',
    origenEn: 'Panama',
    internacional: true,
    destacada: true,
    // Recorte de una reseña muy larga. Frases completas y en su orden original.
    text: 'Debido a problemas de encías y pérdida de hueso, fue necesario extraer todas mis piezas dentales, tanto arriba como abajo. Viajé desde Panamá especialmente para realizarme este tratamiento aquí […] Me colocaron 10 implantes en total (superiores e inferiores), junto con injerto de hueso […] la experiencia fue mucho mejor de lo que imaginaba: no sentí dolor durante el procedimiento ni después […] Destaco la meticulosidad de la Dra. Macareno que garantiza su trabajo y transmite total confianza.',
    initials: 'MD',
  },
  {
    name: 'Anelisse Dutari',
    meta: 'Panamá',
    metaEn: 'Panama',
    origen: 'Panamá',
    origenEn: 'Panama',
    internacional: true,
    text: 'La doctora Macareno es excelente, su calidad humana, su paciencia y dedicación al paciente cumple todas las expectativas. Recibí orientación antes y después del procedimiento, atendió mis consultas de manera exhaustiva y me atendió puntualmente y de manera efectiva. Totalmente recomendada.',
    initials: 'AD',
  },
  {
    name: 'Álvaro Giraldo',
    meta: 'Medellín',
    // "concenso" es del original. No se corrige, ver regla 1.
    text: 'La Dra Macareno evalúa, comparte y llega a un concenso con el cliente en lo relacionado con la intervención odontologica y el presupuesto. Muy profesional en todo sentido, excelente la intervención y atención.',
    initials: 'AG',
  },
  {
    name: 'Bibiana Buitrago Peláez',
    meta: 'Medellín',
    text: 'Muy buena experiencia, excelente calidad humana y profesionalismo, empática y brinda las mejores opciones para trabajar. Gracias!',
    initials: 'BB',
  },
  {
    name: 'Paola Andrea Jaramillo',
    meta: 'Medellín',
    text: 'Excelente atención, la doctora Carolina es un amor y su trabajo es genial.',
    initials: 'PJ',
  },
];

/**
 * Sección de testimonios.
 *
 * POR QUÉ DEJÓ DE SER UN CARRUSEL (5-ago-2026)
 *
 * Antes mostraba UNA reseña a la vez, con botones abajo para cambiar. La gente
 * casi nunca los toca, así que en la práctica el 83 % de la prueba social no se
 * veía nunca. Y lo que quedaba escondido era lo más caro que tiene el negocio:
 * las reseñas de los pacientes que viajaron desde Estados Unidos y Panamá.
 *
 * Ahora se ven las seis a la vez, en una rejilla de tres. El visitante percibe
 * el volumen sin tener que hacer nada, que es de lo que se trata la prueba
 * social, y la primera fila son las tres reseñas de pacientes internacionales.
 *
 * También dejó de ser componente de cliente: sin carrusel no hay estado, así
 * que ya no necesita `'use client'` ni framer-motion. Se renderiza en el
 * servidor y no suma nada al JavaScript que descarga el paciente.
 */
export default function TestimonialsSection({
  messages,
  locale = 'es',
}: {
  messages: TestimonialsMessages;
  locale?: Locale;
}) {
  const isEs = locale === 'es';

  return (
    <section className="py-24 bg-[#FCFBF9] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_rgba(201,164,97,0.04)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <span className="text-[#8A6B2E] text-xs font-medium tracking-[0.3em] uppercase mb-3 block">
            {messages.subtitulo}
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#211E18]"
            style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
          >
            {messages.titulo}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#C9A461] to-[#E5B866] mx-auto mt-6 mb-6" />
          {/*
            Insignia agregada: apunta a Google, NO a Doctoralia (agosto 2026).
            Doctoralia es un directorio que compite por las mismas búsquedas
            ("odontólogo Medellín") y este enlace le pasaba autoridad desde la
            home, la página más fuerte del sitio. Google Business Profile, en
            cambio, es un activo propio: las reseñas de ahí alimentan el mapa
            local, que es de donde llegan los pacientes de Medellín.

            La cifra es la real de Google verificada el 3-ago-2026 (5,0 con 26
            reseñas, las 26 de 5 estrellas). Si cambia el número en Google hay
            que actualizarlo aquí; no lo inventes ni lo redondees.

            Las seis citas de abajo también son de Google, transcritas del
            perfil. Antes eran de Doctoralia y contradecían esta insignia: quien
            hiciera clic no las encontraba en Google.
          */}
          <a
            href="https://maps.app.goo.gl/bNw5rUJT1DVBpbRj9"
            target="_blank"
            rel="noopener noreferrer"
            title={isEs ? 'Ver las reseñas en Google' : 'See the reviews on Google'}
            className="inline-flex items-center gap-3 bg-white border border-[#E8E3DA] hover:border-[#C9A461]/40 rounded-lg px-5 py-3 transition-colors"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <span className="text-[#211E18] font-semibold text-sm">5.0</span>
            <span className="text-[#77726A] text-sm">·</span>
            <span className="text-[#77726A] text-sm">
              {isEs ? '26 opiniones verificadas en' : '26 verified reviews on'}
            </span>
            <span className="text-[#4285F4] font-semibold text-sm">Google</span>
          </a>
        </AnimatedSection>

        {/*
          REJILLA, NO COLUMNAS CSS. La diferencia importa.

          Con `columns` el texto fluye de arriba abajo y recién entonces salta a
          la columna siguiente. O sea que la primera FILA que ve el visitante
          serían las tarjetas 1, 3 y 5, y la de Minerva (la 2) quedaría debajo de
          la de Xiomara, fuera de la vista inicial. Se probó y pasaba
          exactamente eso: el caso más fuerte del negocio volvía a esconderse.

          Con `grid` el orden es el que uno espera al leer, de izquierda a
          derecha, así que la primera fila son las TRES reseñas de pacientes
          internacionales. Que es de lo que se trata.

          `items-start` evita que las tarjetas se estiren para igualar la altura
          de la más larga: cada una ocupa lo que necesita su texto.
        */}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                /*
                  `flex flex-col` + `mt-auto` en el pie: las tarjetas de una
                  misma fila se igualan a la más alta, y sin esto a la corta le
                  quedaban doscientos píxeles de blanco suelto abajo. Con la
                  firma anclada al pie, la altura pareja se lee como decisión de
                  diseño y no como un hueco.
                */
                className={`bg-white rounded-lg p-6 sm:p-7 relative border h-full flex flex-col ${
                  t.internacional ? 'border-[#C9A461]/45' : 'border-[#E8E3DA]'
                }`}
              >
                {/*
                  La insignia de "viajó desde" solo va en los internacionales.
                  Es el dato que convence a alguien que está evaluando volar:
                  no que la doctora sea buena, sino que otros ya viajaron.
                */}
                {t.internacional && (
                  <div className="inline-flex items-center gap-1.5 bg-[#C9A461]/12 text-[#8A6B2E] rounded-full px-3 py-1 mb-4 text-[11px] font-semibold tracking-wide">
                    <PlaneIcon />
                    <span>
                      {isEs
                        ? `Viajó desde ${t.origen}`
                        : `Travelled from ${t.origenEn}`}
                    </span>
                  </div>
                )}

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>

                <blockquote
                  className={`text-[#5A5449] leading-relaxed mb-6 ${
                    t.destacada ? 'text-base' : 'text-[15px]'
                  }`}
                >
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                <figcaption className="mt-auto flex items-center gap-3 pt-4 border-t border-[#E8E3DA]">
                  <div className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-br from-[#C9A461] to-[#A07830] flex items-center justify-center text-[#211E18] font-bold text-xs">
                    {t.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[#211E18] font-semibold text-sm truncate">{t.name}</p>
                    {/* `meta` solo aparece si la reseña dice de dónde es o qué se hizo. */}
                    {t.meta && <p className="text-[#77726A] text-xs">{t.meta}</p>}
                  </div>
                  <span
                    className="shrink-0 flex items-center gap-1 text-[#77726A] text-[11px]"
                    title={isEs ? 'Reseña verificada en Google' : 'Verified Google review'}
                  >
                    <GoogleIcon />
                    <span className="hidden sm:inline">Google</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
