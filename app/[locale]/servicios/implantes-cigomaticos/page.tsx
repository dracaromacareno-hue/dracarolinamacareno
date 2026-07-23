import type { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppLink from '@/components/WhatsAppLink';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import RespuestaDirecta from '@/components/RespuestaDirecta';
import SchemaOrg, { medicalServiceSchema, breadcrumbSchema, faqSchema, medicalWebPageSchema } from '@/components/SchemaOrg';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const BASE = 'https://dracarolinamacareno.com';
  const isEs = locale === 'es';
  const slug = 'implantes-cigomaticos';

  return {
    title: isEs
      ? 'Implantes Cigomáticos en Medellín | Sin Injerto Óseo'
      : 'Zygomatic Implants in Medellín | No Bone Graft',
    description: isEs
      ? '¿Sin hueso para implantes? Los implantes cigomáticos se anclan en el pómulo, sin injerto y con dientes fijos en pocos días. Especialista 17 años.'
      : 'Told you have no bone for implants? Zygomatic implants in Medellín anchor in the cheekbone, no bone graft, fixed teeth in days. 17-year specialist. Free virtual assessment.',
    keywords: isEs
      ? [
          'implantes cigomáticos Medellín',
          'implantes cigomáticos Colombia',
          'implantes sin hueso',
          'maxilar atrófico implantes',
          'implantes sin injerto óseo',
          'me rechazaron para implantes',
          'implantes cigoma',
          'rehabilitación maxilar superior sin hueso',
          'dientes fijos sin hueso Medellín',
          'Dra. Carolina Macareno',
        ]
      : [
          'zygomatic implants Medellin',
          'zygomatic implants Colombia',
          'implants without bone',
          'atrophic maxilla implants',
          'no bone graft implants',
          'rejected for dental implants',
          'fixed teeth no bone Medellin',
        ],
    openGraph: {
      title: isEs
        ? 'Implantes Cigomáticos en Medellín | Dra. Carolina Macareno'
        : 'Zygomatic Implants in Medellín | Dr. Carolina Macareno',
      description: isEs
        ? 'La solución para el maxilar superior sin hueso: implantes anclados en el pómulo, sin injertos y con dientes fijos en pocos días. El Poblado, Medellín.'
        : 'The solution for the upper jaw without bone: implants anchored in the cheekbone, no grafts, fixed teeth in days. El Poblado, Medellín.',
      type: 'website',
      locale: isEs ? 'es_CO' : 'en_US',
      url: isEs ? `${BASE}/servicios/${slug}` : `${BASE}/en/servicios/${slug}`,
    },
    alternates: {
      canonical: isEs
        ? `${BASE}/servicios/${slug}`
        : `${BASE}/en/servicios/${slug}`,
      languages: {
        es: `${BASE}/servicios/${slug}`,
        en: `${BASE}/en/servicios/${slug}`,
      },
    },
  };
}

const faqsEs = [
  {
    q: '¿Qué son los implantes cigomáticos y para quién son?',
    a: 'Los implantes cigomáticos son implantes largos que, en lugar de anclarse en el hueso maxilar (que puede estar reabsorbido), se fijan en el hueso cigomático, es decir, el pómulo. Están indicados para pacientes del maxilar superior con pérdida ósea severa a quienes les dijeron que "no tienen hueso" para implantes convencionales, personas que llevan años con placa removible, o casos de injertos o implantes previos fallidos.',
  },
  {
    q: '¿Cuánto cuestan los implantes cigomáticos en Medellín?',
    a: 'El costo depende de cuántos implantes cigomáticos requiera el caso (habitualmente 2 o 4), de si se combinan con implantes convencionales y del tipo de prótesis fija. Al evitar los injertos óseos y los meses de espera que exigen otras técnicas, suele resolver en menos cirugías un caso que antes se consideraba inviable. El valor exacto se define en la valoración con diagnóstico 3D (CBCT).',
  },
  {
    q: '¿Puedo tener dientes fijos si no tengo hueso en el maxilar superior?',
    a: 'Sí. Los implantes cigomáticos permiten rehabilitar una arcada superior completa con dientes fijos incluso cuando no hay hueso suficiente para implantes convencionales, sin necesidad de injertos. En muchos casos se coloca una prótesis provisional fija en las primeras 24 a 72 horas (carga inmediata o temprana), según lo que indique la evaluación.',
  },
  {
    q: '¿Necesito injerto de hueso para los implantes cigomáticos?',
    a: 'No. La principal ventaja del implante cigomático es precisamente que evita el injerto óseo y la elevación de seno. En vez de "reconstruir" el hueso perdido (un proceso que puede tomar de 6 a 12 meses), el implante busca un anclaje sólido en el hueso del pómulo, que casi nunca se reabsorbe. Esto acorta el tratamiento de forma considerable.',
  },
  {
    q: '¿Es segura la cirugía de implantes cigomáticos?',
    a: 'Es un procedimiento avanzado que exige planificación 3D precisa y experiencia quirúrgica, ya que el implante pasa cerca del seno maxilar y la órbita. Realizado por un especialista con tomografía CBCT, cirugía guiada y preferiblemente bajo anestesia general en quirófano, tiene tasas de éxito documentadas superiores al 95% en estudios a largo plazo. La valoración determina si es la técnica indicada para su caso.',
  },
  {
    q: '¿Sirven los implantes cigomáticos para el maxilar inferior?',
    a: 'No. Los implantes cigomáticos son exclusivos del maxilar superior, porque se anclan en el hueso del pómulo. Para pérdida ósea severa en la mandíbula (maxilar inferior) existen otras soluciones, como los implantes subperiósticos fabricados a medida o técnicas de regeneración. En la valoración se define la opción correcta según su anatomía.',
  },
];

const faqsEn = [
  {
    q: 'What are zygomatic implants and who are they for?',
    a: 'Zygomatic implants are long implants that, instead of anchoring in the maxillary bone (which may be resorbed), are fixed in the zygomatic bone, the cheekbone. They are indicated for upper-jaw patients with severe bone loss who were told they "have no bone" for conventional implants, people who have worn a removable denture for years, or cases of failed previous grafts or implants.',
  },
  {
    q: 'How much do zygomatic implants cost in Medellín?',
    a: 'The cost depends on how many zygomatic implants the case requires (usually 2 or 4), whether they are combined with conventional implants, and the type of fixed prosthesis. By avoiding the bone grafts and months of waiting that other techniques demand, it often resolves in fewer surgeries a case that was previously considered unviable. The exact figure is defined at your assessment with 3D (CBCT) diagnosis.',
  },
  {
    q: 'Can I have fixed teeth if I have no bone in my upper jaw?',
    a: 'Yes. Zygomatic implants make it possible to restore a full upper arch with fixed teeth even when there is not enough bone for conventional implants, with no grafts needed. In many cases a fixed provisional prosthesis is placed within the first 24 to 72 hours (immediate or early loading), depending on what the evaluation indicates.',
  },
  {
    q: 'Do I need a bone graft for zygomatic implants?',
    a: 'No. The main advantage of the zygomatic implant is precisely that it avoids bone grafting and sinus lift. Instead of "rebuilding" the lost bone (a process that can take 6 to 12 months), the implant finds solid anchorage in the cheekbone, which almost never resorbs. This shortens treatment considerably.',
  },
  {
    q: 'Is zygomatic implant surgery safe?',
    a: 'It is an advanced procedure that demands precise 3D planning and surgical experience, since the implant passes near the maxillary sinus and the orbit. Performed by a specialist with CBCT tomography, guided surgery and preferably under general anesthesia in an operating room, it has documented success rates above 95% in long-term studies. Your assessment determines whether it is the right technique for your case.',
  },
  {
    q: 'Do zygomatic implants work for the lower jaw?',
    a: 'No. Zygomatic implants are exclusive to the upper jaw, because they anchor in the cheekbone. For severe bone loss in the lower jaw (mandible) there are other solutions, such as custom-made subperiosteal implants or regeneration techniques. Your assessment defines the correct option for your anatomy.',
  },
];

export default async function ImplantesCigomaticosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const faqs = isEs ? faqsEs : faqsEn;
  const BASE = 'https://dracarolinamacareno.com';
  const localePath = (path: string) =>
    locale === 'es' ? path : '/en' + path;
  const waMessage = 'Hola, me interesa información sobre Implantes Cigomáticos (me dijeron que no tengo hueso)';

  const breadcrumbs = [
    { name: isEs ? 'Inicio' : 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: isEs ? 'Servicios' : 'Services', url: isEs ? `${BASE}/servicios` : `${BASE}/en/servicios` },
    { name: isEs ? 'Implantes Cigomáticos' : 'Zygomatic Implants', url: isEs ? `${BASE}/servicios/implantes-cigomaticos` : `${BASE}/en/servicios/implantes-cigomaticos` },
  ];

  return (
    <main style={{ backgroundColor: '#070B14' }} className="min-h-screen">
      <SchemaOrg schema={[
        medicalWebPageSchema({
          url: isEs ? `${BASE}/servicios/implantes-cigomaticos` : `${BASE}/en/servicios/implantes-cigomaticos`,
          name: isEs ? 'Implantes Cigomáticos Medellín' : 'Zygomatic Implants Medellín',
          description: isEs ? 'Implantes cigomáticos para el maxilar superior sin hueso en Medellín, sin injerto óseo y con dientes fijos en pocos días. El Poblado.' : 'Zygomatic implants for the upper jaw without bone in Medellín, no bone graft, fixed teeth in days. El Poblado.',
          procedureName: isEs ? 'Implantes Cigomáticos (Maxilar Atrófico)' : 'Zygomatic Implants (Atrophic Maxilla)',
        }),
        medicalServiceSchema({
          name: 'Implantes Cigomáticos Medellín',
          description: 'Implantes cigomáticos anclados en el hueso cigomático (pómulo) para pacientes con pérdida ósea severa del maxilar superior, sin injerto óseo. Medellín, El Poblado.',
          url: 'https://dracarolinamacareno.com/servicios/implantes-cigomaticos',
        }),
        faqSchema(faqs.map(f => ({ question: f.q, answer: f.a }))),
        breadcrumbSchema(breadcrumbs),
      ]} />

      {/* ── HERO ── */}
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection direction="down" delay={0}>
            <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: '#9CA3AF' }}>
              <Link href={localePath('/')} className="hover:text-[#C9A461] transition-colors">
                {isEs ? 'Inicio' : 'Home'}
              </Link>
              <span>/</span>
              <Link href={localePath('/servicios')} className="hover:text-[#C9A461] transition-colors">
                {isEs ? 'Servicios' : 'Services'}
              </Link>
              <span>/</span>
              <span style={{ color: '#C9A461' }}>{isEs ? 'Implantes Cigomáticos' : 'Zygomatic Implants'}</span>
            </nav>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A461' }}>
              {isEs ? 'Cirugía Oral Avanzada · Maxilar Atrófico' : 'Advanced Oral Surgery · Atrophic Maxilla'}
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {isEs ? 'Implantes Cigomáticos en Medellín' : 'Zygomatic Implants in Medellín'}
            </h1>
            <div className="w-20 h-px mb-6" style={{ backgroundColor: '#C9A461' }} />
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: '#D1D5DB' }}>
              {isEs
                ? 'La solución para quienes escucharon "no tienes hueso para implantes". Cuando el maxilar superior está reabsorbido, el implante cigomático se ancla en el pómulo, sin injertos, y devuelve dientes fijos en pocos días.'
                : 'The solution for those who were told "you have no bone for implants". When the upper jaw is resorbed, the zygomatic implant anchors in the cheekbone, no grafts, and gives back fixed teeth in days.'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <RespuestaDirecta
        pregunta={isEs ? '¿Puedo ponerme implantes si me dijeron que no tengo hueso?' : 'Can I get implants if I was told I have no bone?'}
        respuesta={isEs
          ? 'Sí. Cuando el maxilar superior no tiene hueso suficiente para implantes convencionales, los implantes cigomáticos se anclan en el hueso del pómulo (cigoma), sin necesidad de injertos, y permiten dientes fijos, muchas veces con prótesis provisional en 24-72 horas, . Es un procedimiento avanzado que la Dra. Carolina Macareno, rehabilitadora oral con más de 17 años en El Poblado, planifica con tomografía 3D. El plan y el costo se definen en la valoración.'
          : 'Yes. When the upper jaw lacks enough bone for conventional implants, zygomatic implants anchor in the cheekbone (zygoma) with no grafts needed, and allow fixed teeth, often with a provisional prosthesis in 24-72 hours. It is an advanced procedure that Dr. Carolina Macareno, an oral rehabilitation specialist with 17+ years in El Poblado, plans with 3D tomography. The plan and cost are defined at your assessment.'}
      />

      {/* ── QUÉ ES ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {isEs ? '¿Qué es un implante cigomático?' : 'What is a zygomatic implant?'}
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#D1D5DB' }}>
              {isEs
                ? 'Es un implante más largo que los convencionales, diseñado para anclarse en el hueso cigomático, el hueso del pómulo, en lugar del maxilar superior. Cuando alguien pierde los dientes de arriba y pasa mucho tiempo, el hueso maxilar se reabsorbe: se vuelve tan delgado que ya no sostiene un implante normal. El hueso cigomático, en cambio, es denso y estable, y casi nunca se reabsorbe.'
                : 'It is an implant longer than conventional ones, designed to anchor in the zygomatic bone, the cheekbone, instead of the upper jaw. When someone loses their upper teeth and time passes, the maxillary bone resorbs: it becomes so thin that it can no longer hold a normal implant. The zygomatic bone, on the other hand, is dense and stable, and almost never resorbs.'}
            </p>
            <p className="text-lg leading-relaxed mt-4" style={{ color: '#D1D5DB' }}>
              {isEs
                ? 'Por eso el implante cigomático resuelve casos que otras técnicas descartan: en vez de intentar reconstruir el hueso perdido con injertos y esperar meses, busca un anclaje sólido donde el hueso sí existe. Es la diferencia entre "no se puede" y "sí se puede, sin injertos y en menos tiempo".'
                : 'That is why the zygomatic implant solves cases other techniques rule out: instead of trying to rebuild lost bone with grafts and waiting months, it finds solid anchorage where bone does exist. It is the difference between "it can\'t be done" and "it can, with no grafts and in less time".'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PARA QUIÉN (avatar "me rechazaron") ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {isEs ? '¿Es para ti este tratamiento?' : 'Is this treatment for you?'}
            </h2>
          </AnimatedSection>
          <ul className="space-y-4">
            {(isEs ? [
              'Te dijeron en otra clínica que "no tienes hueso" o que no eres candidato para implantes en la parte de arriba.',
              'Llevas años usando una placa o dentadura removible superior que se mueve, lastima o incomoda.',
              'Te hicieron injertos de hueso o elevación de seno que no funcionaron, o quieres evitarlos.',
              'Tuviste implantes en el maxilar superior que fallaron por falta de hueso.',
              'Perdiste hueso por enfermedad periodontal avanzada, trauma o una cirugía previa.',
              'Quieres dientes fijos, no removibles, en el menor tiempo posible.',
            ] : [
              'You were told at another clinic that you "have no bone" or that you are not a candidate for upper implants.',
              'You have worn an upper removable denture for years that moves, hurts or feels uncomfortable.',
              'You had bone grafts or sinus lifts that did not work, or you want to avoid them.',
              'You had upper-jaw implants that failed due to lack of bone.',
              'You lost bone from advanced periodontal disease, trauma or previous surgery.',
              'You want fixed, not removable, teeth in the shortest time possible.',
            ]).map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#C9A461', color: '#070B14' }}>✓</span>
                <span style={{ color: '#D1D5DB' }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── VENTAJAS ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: '#C9A461' }}>
              {isEs ? 'Por qué el cigomático cambia el pronóstico' : 'Why the zygomatic changes the prognosis'}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {isEs ? 'Ventajas frente a las técnicas con injerto' : 'Advantages over graft-based techniques'}
            </h2>
            <p className="mb-10 max-w-2xl" style={{ color: '#9CA3AF' }}>
              {isEs
                ? 'Para el paciente con maxilar superior atrófico, el cigomático suele significar menos cirugías, menos espera y un resultado fijo.'
                : 'For the patient with an atrophic upper jaw, the zygomatic usually means fewer surgeries, less waiting and a fixed result.'}
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {(isEs ? [
              { badge: 'Sin injerto', title: 'No requiere injerto óseo', desc: 'Evita la reconstrucción del hueso y la elevación de seno, y los 6 a 12 meses de espera que suelen implicar.' },
              { badge: 'Rápido', title: 'Dientes fijos en pocos días', desc: 'En muchos casos se coloca una prótesis provisional fija en 24-72 horas (carga inmediata o temprana), según la evaluación.' },
              { badge: 'Anclaje sólido', title: 'Hueso que no se reabsorbe', desc: 'El pómulo es hueso denso y estable, lo que da soporte confiable incluso cuando el maxilar ya no lo tiene.' },
              { badge: 'Documentado', title: 'Tasas de éxito superiores al 95%', desc: 'Estudios a largo plazo respaldan el procedimiento cuando lo realiza un especialista con planificación 3D.' },
            ] : [
              { badge: 'No graft', title: 'No bone graft needed', desc: 'Avoids bone reconstruction and sinus lift, and the 6 to 12 months of waiting they usually involve.' },
              { badge: 'Fast', title: 'Fixed teeth in days', desc: 'In many cases a fixed provisional is placed in 24-72 hours (immediate or early loading), depending on the evaluation.' },
              { badge: 'Solid anchor', title: 'Bone that does not resorb', desc: 'The cheekbone is dense, stable bone, giving reliable support even when the upper jaw no longer has it.' },
              { badge: 'Documented', title: 'Success rates above 95%', desc: 'Long-term studies back the procedure when performed by a specialist with 3D planning.' },
            ]).map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-6 rounded-xl border h-full flex flex-col" style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}>
                  <span className="text-xs font-semibold px-2 py-1 rounded tracking-wide uppercase self-start mb-4" style={{ backgroundColor: '#C9A461', color: '#070B14' }}>{card.badge}</span>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>{card.title}</h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: '#9CA3AF' }}>{card.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO TRUST ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/implantes-cigomaticos.png"
                  alt="Radiografía con implantes cigomáticos anclados en el hueso cigomático (pómulo), Dra. Carolina Macareno, Medellín"
                  fill
                  className="object-contain"
                  style={{ backgroundColor: '#0D1321', padding: '0.5rem' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(7,11,20,0.6) 0%, transparent 45%)' }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#C9A461' }}>El Poblado, Medellín</span>
                  <p className="text-sm font-semibold mt-1" style={{ color: '#F5F5F0' }}>{isEs ? 'Implantes cigomáticos anclados en el pómulo (imagen radiográfica)' : 'Zygomatic implants anchored in the cheekbone (radiographic image)'}</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <span className="text-xs font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#C9A461' }}>
                {isEs ? '¿Por qué la experiencia importa aquí?' : 'Why experience matters here'}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
                {isEs ? 'Un procedimiento de especialista, no de rutina' : 'A specialist procedure, not a routine one'}
              </h2>
              <div className="space-y-4">
                {(isEs ? [
                  { icon: '🔬', title: 'Diagnóstico 3D antes de decidir', desc: 'Tomografía CBCT para medir el hueso disponible y planificar la trayectoria exacta del implante lejos del seno y la órbita.' },
                  { icon: '🎯', title: 'Anestesia general en quirófano', desc: 'Por tratarse de una zona anatómica delicada, el procedimiento se realiza preferiblemente bajo anestesia general en quirófano, con planificación digital previa.' },
                  { icon: '🤝', title: '17+ años y 3.500+ pacientes', desc: 'Formación avanzada en implantología (FACOP) y estética (NYU). Rehabilitación oral como especialidad, no como servicio general.' },
                  { icon: '🦷', title: 'Marcas y compatibilidad', desc: 'Trabajamos con sistemas reconocidos (Straumann, Neodent, DioImplant) y rehabilitamos el caso completo hasta la prótesis fija.' },
                ] : [
                  { icon: '🔬', title: '3D diagnosis before deciding', desc: 'CBCT tomography to measure available bone and plan the exact implant path away from the sinus and orbit.' },
                  { icon: '🎯', title: 'General anesthesia in an operating room', desc: 'As it involves a delicate anatomical area, the procedure is preferably performed under general anesthesia in an operating room, with prior digital planning.' },
                  { icon: '🤝', title: '17+ years and 3,500+ patients', desc: 'Advanced training in implantology (FACOP) and aesthetics (NYU). Oral rehabilitation as a specialty, not a general service.' },
                  { icon: '🦷', title: 'Brands and compatibility', desc: 'We work with recognized systems (Straumann, Neodent, DioImplant) and restore the full case through to the fixed prosthesis.' },
                ]).map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-sm mb-0.5" style={{ color: '#F5F5F0' }}>{item.title}</p>
                      <p className="text-sm" style={{ color: '#9CA3AF' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── PROCESO ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-10" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {isEs ? 'El proceso paso a paso' : 'The process step by step'}
            </h2>
          </AnimatedSection>
          <div className="space-y-6">
            {(isEs ? [
              { step: '01', title: 'Valoración y diagnóstico 3D (CBCT)', desc: 'Tomografía, fotografías y evaluación integral. Se confirma si el maxilar es candidato a cigomáticos y se diseña el plan con costos.' },
              { step: '02', title: 'Planificación digital de la cirugía', desc: 'Se define el número de implantes (habitualmente 2 o 4) y la trayectoria exacta, evitando el seno maxilar y la órbita.' },
              { step: '03', title: 'Cirugía de colocación', desc: 'Procedimiento realizado preferiblemente bajo anestesia general en quirófano. Los implantes cigomáticos se anclan en el pómulo; pueden combinarse con implantes convencionales anteriores.' },
              { step: '04', title: 'Prótesis provisional fija (carga inmediata/temprana)', desc: 'En muchos casos se coloca una prótesis fija provisional en 24-72 horas, para que salgas con dientes fijos.' },
              { step: '05', title: 'Prótesis definitiva', desc: 'Tras la cicatrización, se fabrica y coloca la prótesis fija definitiva en materiales de alta resistencia (zirconio/cerámica).' },
              { step: '06', title: 'Controles y mantenimiento', desc: 'Seguimiento periódico e higiene personalizada para cuidar los implantes y los tejidos a largo plazo.' },
            ] : [
              { step: '01', title: 'Assessment and 3D diagnosis (CBCT)', desc: 'Tomography, photos and full evaluation. We confirm whether the jaw is a candidate for zygomatics and design the plan with costs.' },
              { step: '02', title: 'Digital surgical planning', desc: 'We define the number of implants (usually 2 or 4) and the exact path, avoiding the maxillary sinus and orbit.' },
              { step: '03', title: 'Placement surgery', desc: 'Procedure preferably performed under general anesthesia in an operating room. Zygomatic implants anchor in the cheekbone; they may be combined with conventional anterior implants.' },
              { step: '04', title: 'Fixed provisional prosthesis (immediate/early loading)', desc: 'In many cases a fixed provisional prosthesis is placed within 24-72 hours, so you leave with fixed teeth.' },
              { step: '05', title: 'Final prosthesis', desc: 'After healing, the definitive fixed prosthesis is made and placed in high-strength materials (zirconia/ceramic).' },
              { step: '06', title: 'Checkups and maintenance', desc: 'Regular follow-up and personalized hygiene to care for the implants and tissues long term.' },
            ]).map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="flex gap-5 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm" style={{ backgroundColor: '#C9A461', color: '#070B14' }}>
                    {s.step}
                  </div>
                  <div className="flex-1 p-5 rounded-xl border" style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}>
                    <h3 className="font-semibold text-base mb-1" style={{ color: '#F5F5F0' }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>{s.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── INFO BAR ── */}
      <section className="py-10 px-4" style={{ backgroundColor: '#0D1321', borderTop: '1px solid #1F2937', borderBottom: '1px solid #1F2937' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {(isEs ? [
              { label: 'Indicación', value: 'Maxilar superior sin hueso', icon: '🦴' },
              { label: 'Injerto óseo', value: 'No requiere', icon: '✅' },
              { label: 'Dientes fijos', value: 'En 24 – 72 h (según caso)', icon: '⏱' },
            ] : [
              { label: 'Indication', value: 'Upper jaw without bone', icon: '🦴' },
              { label: 'Bone graft', value: 'Not required', icon: '✅' },
              { label: 'Fixed teeth', value: 'In 24 – 72 h (case-dependent)', icon: '⏱' },
            ]).map((pill, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl border" style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}>
                <span className="text-2xl">{pill.icon}</span>
                <div>
                  <p className="text-xs uppercase tracking-wide mb-0.5" style={{ color: '#9CA3AF' }}>{pill.label}</p>
                  <p className="font-semibold" style={{ color: '#C9A461' }}>{pill.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-16 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {isEs ? 'Preguntas frecuentes' : 'Frequently asked questions'}
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="p-6 rounded-xl border" style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}>
                  <h3 className="font-semibold text-base mb-3 flex items-start gap-2" style={{ color: '#E5B866' }}>
                    <span className="shrink-0 mt-0.5" style={{ color: '#C9A461' }}>▸</span>
                    {faq.q}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#D1D5DB' }}>{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELACIONADOS (hub-spoke) ── */}
      <section className="py-12 px-4" style={{ backgroundColor: '#0D1321', borderTop: '1px solid #1F2937' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-widest uppercase mb-6 text-center" style={{ color: '#C9A461' }}>
              {isEs ? 'Sigue explorando' : 'Keep exploring'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { href: '/servicios/implantes-dentales', t: isEs ? 'Implantes Dentales' : 'Dental Implants', d: isEs ? 'La guía completa: titanio, zirconio y cigomáticos.' : 'The full guide: titanium, zirconia and zygomatic.' },
                { href: '/all-on-4-medellin', t: 'All-on-4', d: isEs ? 'Arcada completa fija sobre 4 implantes.' : 'Full fixed arch on 4 implants.' },
                { href: '/blog/implantes-cigomaticos-medellin', t: isEs ? 'Artículo: Cigomáticos' : 'Article: Zygomatic', d: isEs ? 'Todo sobre el procedimiento, a fondo.' : 'Everything about the procedure, in depth.' },
              ].map((c) => (
                <Link
                  key={c.href}
                  href={localePath(c.href)}
                  className="flex flex-col rounded-xl border p-5 transition-all hover:border-[#C9A461]/60 group"
                  style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
                >
                  <p className="font-semibold text-sm mb-1 group-hover:text-[#C9A461] transition-colors" style={{ color: '#F5F5F0' }}>{c.t}</p>
                  <p className="text-xs leading-relaxed flex-1" style={{ color: '#9CA3AF' }}>{c.d}</p>
                  <span className="text-xs font-semibold mt-3 inline-flex items-center gap-1" style={{ color: '#C9A461' }}>
                    {isEs ? 'Ver' : 'View'}
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CASO CLÍNICO REAL (subperióstico) ── */}
      <section className="py-12 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-widest uppercase mb-6 text-center" style={{ color: '#C9A461' }}>
              {isEs ? 'Caso clínico real' : 'Real clinical case'}
            </p>
            <div className="rounded-xl overflow-hidden border border-[#1F2937] relative">
              <div className="relative aspect-[16/7]">
                <Image
                  src="/images/caso-clinico-subperiostico-postqx.webp"
                  alt={isEs ? 'Resultado postquirúrgico de un implante subperióstico a medida en Medellín' : 'Post-surgical result of a custom subperiosteal implant in Medellín'}
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(7,11,20,0.92) 0%, rgba(7,11,20,0.55) 55%, rgba(7,11,20,0.2) 100%)' }} />
                <div className="absolute inset-0 flex items-center px-8 md:px-12">
                  <div className="max-w-lg">
                    <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
                      {isEs ? 'Implante subperióstico a medida, paso a paso' : 'Custom subperiosteal implant, step by step'}
                    </h2>
                    <p className="text-sm mb-5" style={{ color: '#D1D5DB' }}>
                      {isEs
                        ? 'Cuando no queda hueso para un implante convencional y el maxilar está muy reabsorbido, el implante subperióstico a medida se apoya sobre el hueso. Mira el caso real documentado: planeación 3D, cirugía y resultado postquirúrgico.'
                        : 'When there is no bone left for a conventional implant and the jaw is severely resorbed, the custom subperiosteal implant rests on the bone. See the real documented case: 3D planning, surgery and post-surgical result.'}
                    </p>
                    <Link
                      href={localePath('/blog/implantes-subperiosticos-medellin')}
                      className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase transition-colors"
                      style={{ color: '#C9A461' }}
                    >
                      {isEs ? 'Ver caso clínico completo' : 'See full clinical case'}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {isEs ? '¿Te dijeron que no tenías solución?' : 'Were you told there was no solution?'}
            </h2>
            <p className="mb-8 text-lg" style={{ color: '#D1D5DB' }}>
              {isEs
                ? 'Envía tu caso por WhatsApp o agenda una valoración con diagnóstico 3D. Muchos casos que otras clínicas descartan sí tienen salida con implantes cigomáticos.'
                : 'Send your case via WhatsApp or book an assessment with 3D diagnosis. Many cases other clinics rule out do have a path with zygomatic implants.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppLink
                message={waMessage}
                locale={locale as 'es' | 'en'}
                trackingLabel="implantes_cigomaticos_cta"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-base transition-all hover:scale-105 bg-[#C9A461] text-[#070B14]"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.845L.057 23.938l6.29-1.648A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 01-5.012-1.374l-.36-.213-3.733.978.995-3.629-.234-.373A9.778 9.778 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z" />
                </svg>
                {isEs ? 'Enviar mi caso por WhatsApp' : 'Send my case via WhatsApp'}
              </WhatsAppLink>
              <Link
                href={localePath('/contacto')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border transition-all hover:scale-105"
                style={{ borderColor: '#C9A461', color: '#C9A461' }}
              >
                {isEs ? 'Agendar valoración' : 'Book assessment'}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
