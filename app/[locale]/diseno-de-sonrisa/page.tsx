import type { Metadata } from 'next';
import Image from 'next/image';
import WhatsAppLink from '@/components/WhatsAppLink';
import SchemaOrg, { faqSchema, medicalServiceSchema } from '@/components/SchemaOrg';
import LandingDisenoCliente from './LandingDisenoCliente';

/*
  Landing de pauta de diseño de sonrisa.

  1-oct-2026: deja de ser un espejo del funnel de GHL y pasa a ser una página
  propia. La URL NO cambia (`/diseno-de-sonrisa`), para no tocar la URL final de
  los anuncios: cambiarla reiniciaría el aprendizaje de la campaña.

  Por qué se cambió, medido el 1-oct sobre septiembre:
  - La página convertía al 5,9 % contra el 21,8 % de /implantes.
  - Desde el 20-sep, la campaña de Google Ads de diseño gastó USD 265 y produjo
    8 leads, 0 citas y 0 tratamientos.
  - El formulario del funnel pedía 13 campos dentro de un iframe.

  Decisiones de contenido, todas con fuente:
  - Precios: de `lib/pricing.ts`, siempre con «desde».
  - Valoración: desde $150.000 COP, presencial o virtual, y NUNCA gratis
    (regla de la dueña del 22-sep-2026). Decirlo filtra a quien llega esperando
    que sea gratis.
  - Resina directa: lleva diseño digital pero NO prueba en boca. El ensayo que la
    paciente se prueba existe con carillas en cerámica. Regla clínica del CLAUDE.md.
  - Casos: los mismos de `lib/casos-galeria.ts`, ya autorizados y recortados a la
    sonrisa, sin cara.
  24-oct-2026, antes de publicar (pedido de la dueña): video pasado de HEVC a H.264 720p
  (5,4 MB) para que lo reproduzca cualquier celular y computador; quitada la pista de
  subtítulos porque el video ya los trae quemados y se veían dobles; placa solo en el
  diseño completo; sin «candidata»; sin número de opiniones (se desactualiza); la
  valoración virtual ya no promete escaneo 3D; encabezado sin tapar el inicio.
  - [FALTA DATO] Video de la Dra. para el hero: /implantes tiene uno y es una de
    las diferencias con esta página. Pedirle el enlace y añadirlo aquí.
*/

const BASE = 'https://dracarolinamacareno.com';

export const metadata: Metadata = {
  title: 'Diseño de Sonrisa en Medellín | Carillas y Resina',
  description:
    'Carillas en cerámica o resina, planificadas en digital antes de tocar un diente. Valoración presencial o virtual con la especialista en El Poblado, Medellín.',
  alternates: { canonical: `${BASE}/diseno-de-sonrisa` },
  openGraph: {
    title: 'Diseño de Sonrisa en Medellín | Dra. Carolina Macareno',
    description:
      'Carillas en cerámica o resina, planificadas en digital. Valoración presencial o virtual en El Poblado, Medellín.',
    url: `${BASE}/diseno-de-sonrisa`,
    type: 'website',
    locale: 'es_CO',
  },
};

const faqs = [
  {
    q: '¿Cuánto cuesta un diseño de sonrisa en Medellín?',
    a: 'Depende del material, de cuántos dientes entran y de lo que tu caso necesite antes, por ejemplo alinear o nivelar la encía. El presupuesto se arma después de la valoración, con las opciones viables para ti, y se entrega por escrito.',
  },
  {
    q: '¿Qué diferencia hay entre resina y cerámica?',
    a: 'Las carillas hechas en laboratorio, en resina inyectada o en cerámica, tienen mejor acabado y pulido, sellan mejor, resisten más y son más precisas. La resina directa se hace en boca, es estética y no exige tallar el diente, pero es menos resistente. La cerámica es la que más dura.',
  },
  {
    q: '¿Puedo ver cómo va a quedar antes de empezar?',
    a: 'El diseño se planifica en digital en los dos materiales, así que ves la propuesta antes de empezar. La prueba que te mides en boca antes de cementar existe cuando el tratamiento es con carillas en cerámica.',
  },
  {
    q: '¿Me van a tallar los dientes?',
    a: 'Depende del caso y del material. El microdiseño en resina directa se aplica sin tallar el diente. En carillas de laboratorio se prepara la superficie lo mínimo necesario, y cuánto se prepara se decide diente por diente según el esmalte que tengas.',
  },
  {
    q: '¿La valoración es gratis?',
    a: 'No. La valoración con la Dra. Carolina tiene un valor desde $150.000 COP. La presencial incluye historia clínica, escaneo intraoral 3D, diagnóstico y presupuesto por escrito; la virtual se hace por videollamada, con tus fotos. Si solo quieres saber si el tratamiento es para ti, envía fotos por WhatsApp y el equipo te orienta.',
  },
  {
    q: '¿Cuántos días necesito si vengo de otra ciudad o de otro país?',
    a: 'Un diseño con carillas suele tomar entre 4 y 7 días, con pruebas antes de cementar. El plan exacto se define en la valoración, porque depende de cuántos dientes entran y del material.',
  },
  {
    q: '¿Cuánto duran las carillas?',
    a: 'Dependen del material, de la mordida y del cuidado. En el diseño de sonrisa completo va incluida la placa de protección, que protege el trabajo de las fuerzas de apretar o rechinar.',
  },
  {
    q: '¿Quién me atiende?',
    a: 'La Dra. Carolina Macareno, especialista en rehabilitación oral, estética e implantología, con más de 17 años de experiencia, en El Poblado, Medellín.',
  },
];

const casos = [
  {
    before: '/images/antes-diseno-ceramica-7.webp',
    after: '/images/final-diseno-ceramica-7.webp',
    texto: 'Carillas en cerámica sobre dientes desgastados.',
  },
  {
    before: '/images/antes-diseno-resina-3.webp',
    after: '/images/final-diseno-resina-3.webp',
    texto: 'Alineadores y después microdiseño en resina, sin tallar.',
  },
  {
    before: '/images/antes-diseno-ceramica-5.webp',
    after: '/images/final-diseno-ceramica-5.webp',
    texto: 'Carillas en cerámica, buscando un resultado natural.',
  },
];

const WA = 'Hola, vi la página de diseño de sonrisa. Me gustaría que evalúen mi caso.';

export default function LandingDisenoDeSonrisa() {
  return (
    <main style={{ backgroundColor: '#FCFBF9' }} className="min-h-screen">
      <SchemaOrg
        schema={[
          medicalServiceSchema({
            name: 'Diseño de Sonrisa en Medellín',
            description:
              'Diseño de sonrisa con carillas en cerámica o resina, planificado en digital, en El Poblado, Medellín.',
            url: `${BASE}/diseno-de-sonrisa`,
          }),
          faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
        ]}
      />

      {/* HERO */}
      <section className="px-4 pt-28 md:pt-32 pb-12" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A461' }}>
              Carillas · Resina · El Poblado, Medellín
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
              Una sonrisa que se vea tuya, planificada en digital antes de tocar un diente
            </h1>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#5A5449' }}>
              Te atiende la Dra. Carolina Macareno, especialista en rehabilitación oral y estética, con más de 17 años
              de experiencia.
            </p>
            <ul className="space-y-2 mb-7">
              {[
                'Tu sonrisa se diseña en digital antes de empezar',
                'Carillas en cerámica o en resina, según tu caso',
                'Placa de protección incluida en el diseño completo',
                'Pacientes de Medellín y del exterior',
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#C9A461', color: '#070B14' }}>✓</span>
                  <span style={{ color: '#5A5449' }}>{t}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <WhatsAppLink
                message={WA}
                locale="es"
                trackingLabel="landing_diseno_hero"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-base bg-[#C9A461] text-[#070B14] transition-all hover:scale-105"
              >
                Escríbeme por WhatsApp
              </WhatsAppLink>
              <a
                href="#casos"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl font-semibold text-base border transition-all hover:scale-105"
                style={{ borderColor: '#C9A461', color: '#8A6B2E' }}
              >
                Ver casos reales
              </a>
            </div>
            <p className="mt-4 text-sm" style={{ color: '#77726A' }}>
              Calificación de 5,0 en Google, según las opiniones de pacientes.
            </p>
          </div>

          <div className="space-y-5">
            {/*
              El VSL de la Dra. (1:06). La landing de GHL servía la versión SIN comprimir,
              de 78 MB y de abril; esta es la edición del 26-sep, de 8,6 MB, nueve veces
              más liviana. En pauta casi todo el tráfico es de celular, así que el peso del
              video es dinero. `preload="metadata"` y el póster evitan descargarlo entero
              a quien no le da play.
            */}
            <video
              controls
              playsInline
              preload="metadata"
              poster="/images/poster-landing-diseno.jpg"
              className="w-full rounded-2xl border"
              style={{ borderColor: '#E8E3DA', backgroundColor: '#000' }}
            >
              <source src="/videos/landing-diseno.mp4" type="video/mp4" />
            </video>
            <LandingDisenoCliente />
          </div>
        </div>
      </section>

      {/* CASOS */}
      <section id="casos" className="px-4 py-14" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
            Casos reales, antes y después
          </h2>
          <p className="mb-8" style={{ color: '#77726A' }}>
            Pacientes de la Dra. Carolina, recortados a la sonrisa.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {casos.map((c) => (
              <div key={c.before} className="rounded-xl border overflow-hidden" style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA' }}>
                <div className="grid grid-cols-2">
                  <div className="relative aspect-square">
                    <Image src={c.before} alt="Antes del diseño de sonrisa" fill className="object-cover" sizes="(max-width: 768px) 50vw, 20vw" />
                    <span className="absolute bottom-1 left-1 text-[10px] px-2 py-0.5 rounded" style={{ backgroundColor: '#211E18', color: '#FFFFFF' }}>Antes</span>
                  </div>
                  <div className="relative aspect-square">
                    <Image src={c.after} alt="Después del diseño de sonrisa" fill className="object-cover" sizes="(max-width: 768px) 50vw, 20vw" />
                    <span className="absolute bottom-1 left-1 text-[10px] px-2 py-0.5 rounded" style={{ backgroundColor: '#C9A461', color: '#070B14' }}>Después</span>
                  </div>
                </div>
                <p className="text-sm p-4" style={{ color: '#5A5449' }}>{c.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUIÉN TE ATIENDE */}
      {/*
        2-oct-2026, pedido de la dueña: la landing de GHL sí la presentaba y esta no.
        En un tratamiento estético la paciente no compra carillas, compra la mano que
        se las va a hacer, así que va justo después de los casos: primero ve el
        resultado, después ve de quién es.

        Todos los datos salen de la ficha canónica de identidad, la misma que se usa
        para corregir Doctoralia, Top Doctors y el GBP. Ni uno se escribe de memoria:
        17 años se cuentan desde la especialización del CES en 2009, y la formación
        son las cuatro de la ficha. El registro profesional y el REPS van porque son
        verificables en línea, que es lo que distingue a una clínica real de una
        página de pauta.
      */}
      <section className="px-4 py-14" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-[minmax(0,230px)_1fr] gap-8 items-center">
          {/*
            2-oct-2026: la Dra. eligió esta foto, la misma que usaba la landing de GHL
            y en círculo como allí. Es `dra-carolina-hero.webp` recortada en cuadrado
            sobre la cara y los hombros, porque la original es apaisada y un círculo
            sobre ella la dejaba lejos. El recorte se hizo del archivo del sitio, no
            del que servía GHL.
          */}
          <div className="relative aspect-square rounded-full overflow-hidden border-4 mx-auto w-full max-w-[230px]" style={{ borderColor: '#FFFFFF', boxShadow: '0 8px 30px rgba(33,30,24,0.10)' }}>
            <Image
              src="/images/dra-carolina-retrato.webp"
              alt="Dra. Carolina Macareno, odontóloga especialista en rehabilitación oral, estética e implantología en El Poblado, Medellín"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 60vw, 230px"
            />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#C9A461' }}>
              Quién te atiende
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
              Dra. Carolina Macareno
            </h2>
            <p className="font-medium mb-4" style={{ color: '#8A6B2E' }}>
              Odontóloga especialista en rehabilitación oral, estética e implantología
            </p>
            <p className="leading-relaxed mb-5" style={{ color: '#5A5449' }}>
              17 años reconstruyendo sonrisas y más de 3.500 pacientes atendidos, en consultorio propio en El Poblado.
              Los casos de arriba son suyos: la valoración, el diseño y el tratamiento los hace ella.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                'Odontóloga, Universidad El Bosque',
                'Especialista en Rehabilitación Oral, Universidad CES',
                'Implantología, FACOP (Brasil)',
                'Estética dental, New York University',
              ].map((c) => (
                <span key={c} className="text-xs px-3 py-1.5 rounded-full border" style={{ borderColor: '#E8E3DA', backgroundColor: '#FCFBF9', color: '#5A5449' }}>
                  {c}
                </span>
              ))}
            </div>
            <p className="text-xs" style={{ color: '#77726A' }}>
              Registro profesional 52696525 · Código REPS 0500111814 · Calificación de 5,0 en Google
            </p>
          </div>
        </div>
      </section>

      {/* CÓMO SE HACE */}
      <section className="px-4 py-14" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
            Cómo se hace, paso a paso
          </h2>
          <div className="space-y-5">
            {[
              { t: 'Valoración y diagnóstico', d: 'Presencial, con historia clínica, escaneo intraoral 3D y presupuesto por escrito, o virtual por videollamada. Desde $150.000 COP.' },
              { t: 'Diseño digital', d: 'La forma, la proporción y el color se diseñan antes de tocar un diente.' },
              { t: 'Prueba antes de cementar', d: 'Con cerámica te pruebas el resultado en boca y se ajusta.' },
              { t: 'Carillas definitivas', d: 'En cerámica o en resina, elegidas por resistencia y no solo por estética.' },
              { t: 'Placa de protección', d: 'En el diseño de sonrisa completo va incluida: protege el trabajo de apretar y rechinar.' },
            ].map((p, i) => (
              <div key={p.t} className="flex gap-4 items-start">
                <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{ backgroundColor: '#C9A461', color: '#070B14' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="flex-1 p-4 rounded-xl border" style={{ backgroundColor: '#FCFBF9', borderColor: '#E8E3DA' }}>
                  <p className="font-semibold mb-1" style={{ color: '#211E18' }}>{p.t}</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#77726A' }}>{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPCIONES DE TRATAMIENTO, SIN CIFRAS */}
      {/*
        1-oct-2026, decisión de la dueña: aquí NO van cifras de tratamiento.
        Razón suya: ajusta el valor según el caso y el paciente, y una cifra en la
        página le quita ese margen y espanta antes de poder explicar. Lo que sí va
        es qué distingue a cada opción, para que la paciente llegue entendiendo.
        La única cifra que se conserva en la página es la de la valoración, por la
        regla del 22-sep: la valoración nunca es gratis.
      */}
      <section className="px-4 py-14" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
            Tus opciones, explicadas sin rodeos
          </h2>
          <p className="mb-8" style={{ color: '#77726A' }}>
            Cuál te conviene se decide con tu caso en la mano.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                t: 'Microdiseño en resina directa',
                d: 'Se hace en boca, en pocas citas y sin tallar el diente. La opción más conservadora, aunque resiste menos que lo hecho en laboratorio.',
              },
              {
                t: 'Carillas en resina de laboratorio',
                d: 'Hechas fuera de la boca: mejor acabado, sellan mejor y resisten más que la resina directa.',
              },
              {
                t: 'Carillas en cerámica',
                d: 'En disilicato de litio. La que más dura y mejor mantiene el color. Te la pruebas antes de cementar.',
              },
            ].map((c) => (
              <div key={c.t} className="p-5 rounded-xl border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA' }}>
                <p className="font-semibold mb-2" style={{ color: '#211E18' }}>{c.t}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#77726A' }}>{c.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base" style={{ color: '#5A5449' }}>
            El presupuesto se arma después de verte y se entrega por escrito, con las opciones viables para ti.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-14" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
            Lo que más preguntan
          </h2>
          {/*
            Van plegadas a propósito (2-oct-2026, pedido de la dueña: «que no tenga
            tanto texto»). El `<details>` deja las ocho respuestas dentro del HTML,
            así que Google y los buscadores con IA las siguen leyendo y el
            `faqSchema` sigue siendo cierto, pero la paciente ve ocho líneas en vez
            de ocho párrafos. Si se cambiaran por un acordeón de JavaScript, el
            texto dejaría de estar en el HTML servido.
          */}
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border overflow-hidden" style={{ backgroundColor: '#FCFBF9', borderColor: '#E8E3DA' }}>
                <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-base" style={{ color: '#8A6B2E' }}>{f.q}</h3>
                  <span className="shrink-0 transition-transform group-open:rotate-45 text-xl leading-none" style={{ color: '#C9A461' }} aria-hidden="true">+</span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: '#5A5449' }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="px-4 py-16" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
            ¿Quieres saber si este tratamiento es para ti?
          </h2>
          <p className="mb-7 text-lg" style={{ color: '#5A5449' }}>
            Envíame fotos de tu sonrisa por WhatsApp y te digo qué se puede hacer en tu caso.
          </p>
          <WhatsAppLink
            message={WA}
            locale="es"
            trackingLabel="landing_diseno_cierre"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base bg-[#C9A461] text-[#070B14] transition-all hover:scale-105"
          >
            Escríbeme por WhatsApp
          </WhatsAppLink>
          <p className="mt-6 text-sm" style={{ color: '#77726A' }}>
            Dra. Carolina Macareno · Edificio Platinum Superior, Cra. 25 #1A Sur-155, consultorio 1353, El Poblado, Medellín
          </p>
        </div>
      </section>
    </main>
  );
}
