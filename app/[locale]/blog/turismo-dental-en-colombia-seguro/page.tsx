import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import SchemaOrg, { articleSchema, breadcrumbSchema } from '@/components/SchemaOrg';

const BASE = 'https://dracarolinamacareno.com';
const SLUG = 'turismo-dental-en-colombia-seguro';
const WHATSAPP = '573163975232';
const RETHUS_URL =
  'https://web.sispro.gov.co/THS/Cliente/ConsultasPublicas/ConsultaPublicaDeTHxIdentificacion.aspx';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';

  return {
    title: isEs
      ? '¿Es Seguro el Turismo Dental en Colombia?'
      : 'Is Dental Tourism in Colombia Safe?',
    description: isEs
      ? 'Una especialista en implantología de Medellín explica qué hace seguro al turismo dental en Colombia y las señales de alerta que todo paciente debe evitar.'
      : 'A Medellín implant specialist explains what makes dental tourism in Colombia safe — and the red flags every US patient should avoid.',
    keywords: isEs
      ? [
          'turismo dental Colombia seguro',
          'turismo dental Medellín',
          'implantes dentales Colombia',
          'es seguro el turismo dental en Colombia',
          'implantes dentales Medellín',
          'Dra. Carolina Macareno',
        ]
      : [
          'is dental tourism in colombia safe',
          'dental tourism colombia',
          'dental implants colombia',
          'dental tourism medellin',
          'colombia dental tourism safety',
        ],
    openGraph: {
      title: isEs
        ? '¿Es seguro el turismo dental en Colombia? Guía honesta'
        : 'Is Dental Tourism in Colombia Safe? An Honest Guide',
      description: isEs
        ? 'Qué verifica un paciente antes de viajar a Medellín por implantes dentales.'
        : 'What a patient should verify before traveling to Medellín for dental implants.',
      type: 'article',
      locale: isEs ? 'es_CO' : 'en_US',
      url: isEs ? `${BASE}/blog/${SLUG}` : `${BASE}/en/blog/${SLUG}`,
    },
    alternates: {
      canonical: isEs ? `${BASE}/blog/${SLUG}` : `${BASE}/en/blog/${SLUG}`,
      languages: { es: `${BASE}/blog/${SLUG}`, en: `${BASE}/en/blog/${SLUG}` },
    },
  };
}

// ── TIPOS DE CONTENIDO ──────────────────────────────────────────────────────
type Block =
  | { k: 'p'; t: string }
  | { k: 'h3'; t: string }
  | { k: 'note'; t: string }
  | { k: 'list'; items: string[]; ordered?: boolean };

interface Content {
  tags: string[];
  h1a: string;
  h1b: string;
  lead: string;
  bylineRole: string;
  bylineLocation: string;
  sections: { label: string; heading: string; blocks: Block[] }[];
  relatedEyebrow: string;
  relatedTitle: string;
  relatedDesc: string;
  faqHeading: string;
  faq: { q: string; a: string }[];
  authorLabel: string;
  authorIntro: string;
  authorRethusPre: string;
  authorRethusPost: string;
  authorVerify: string;
  ctaHeading: string;
  ctaText: string;
  ctaPrimary: string;
  ctaSecondary: string;
  waText: string;
  financeHeading: string;
  financeText: string;
  disclaimer: string;
  crumbHome: string;
  crumbBlog: string;
  crumbHere: string;
}

// ── CONTENIDO BILINGÜE ──────────────────────────────────────────────────────
const content: Record<'es' | 'en', Content> = {
  es: {
    tags: ['GUÍA PARA PACIENTES', 'TURISMO DENTAL', 'IMPLANTES'],
    h1a: '¿Es seguro el turismo dental',
    h1b: 'en Colombia?',
    lead: 'Una guía honesta, escrita por una especialista en implantología que atiende pacientes internacionales en Medellín cada semana — para que decidas con información, no con miedo.',
    bylineRole: 'Rehabilitación Oral · Estética · Implantología · 17+ años',
    bylineLocation: 'Medellín, Colombia',
    sections: [
      {
        label: 'EL PUNTO DE PARTIDA',
        heading: 'La pregunta que todo paciente se hace primero',
        blocks: [
          {
            k: 'p',
            t: 'Si te han cotizado entre 20.000 y 35.000 dólares por una arcada — o entre 40.000 y 60.000 dólares por tu boca completa — por implantes dentales en Estados Unidos, seguramente ya escribiste en Google alguna versión de esto: ¿de verdad es seguro hacerme un tratamiento dental en Colombia?',
          },
          { k: 'p', t: 'Es una pregunta justa, y mereces una respuesta honesta — no un argumento de venta.' },
          {
            k: 'note',
            t: 'El turismo dental en Colombia puede ser muy seguro, pero no lo es de forma automática. La seguridad no depende del país: depende del especialista que elijas, de los estándares de la clínica y de cómo se planifique tu tratamiento.',
          },
          {
            k: 'p',
            t: 'La buena noticia es que todo eso lo puedes verificar antes de comprar un solo tiquete de avión. Esta guía te explica exactamente qué revisar.',
          },
        ],
      },
      {
        label: 'CONTEXTO',
        heading: 'Por qué Colombia se convirtió en un destino dental',
        blocks: [
          { k: 'p', t: 'Colombia — y Medellín en particular — no se volvió un destino para tratamientos dentales por casualidad.' },
          {
            k: 'p',
            t: 'Los especialistas dentales en Colombia completan una formación universitaria tan rigurosa como la de sus colegas en Estados Unidos, muchas veces seguida de especializaciones de posgrado formales en áreas como rehabilitación oral e implantología. Muchos de los materiales que se usan en una clínica colombiana de calidad — sistemas de implantes, zirconio, escáneres digitales, tomografía CBCT — son las mismas marcas internacionales que se usan en las mejores clínicas estadounidenses.',
          },
          {
            k: 'p',
            t: 'La diferencia de precio no es una diferencia de calidad. Es una diferencia en el costo de operar: menos gastos fijos, salarios más bajos en toda la economía y la ausencia de la maquinaria de facturación de seguros que infla cada procedimiento. Por eso los pacientes internacionales suelen ahorrar entre un 50% y un 80% frente a los precios de Estados Unidos, con los mismos materiales y una experiencia profesional comparable.',
          },
          {
            k: 'p',
            t: 'Medellín suma algo más: infraestructura de salud moderna, un clima primaveral todo el año, vuelos directos desde muchas ciudades de Estados Unidos y una ciudad preparada para recibir visitantes internacionales.',
          },
        ],
      },
      {
        label: 'MARCO REGULATORIO',
        heading: 'Colombia sí tiene un marco regulatorio',
        blocks: [
          {
            k: 'p',
            t: 'A diferencia de lo que muchas personas imaginan, la odontología en Colombia no opera sin control. El país tiene un marco regulatorio que tú mismo puedes usar para verificar a tu especialista:',
          },
          {
            k: 'list',
            items: [
              'El Ministerio de Salud y Protección Social supervisa el sistema de salud del país.',
              'El INVIMA — el equivalente colombiano a la FDA de Estados Unidos — aprueba los materiales y dispositivos dentales antes de que puedan usarse clínicamente.',
              'Todos los profesionales de la salud deben estar inscritos en el RETHUS, el Registro Único Nacional del Talento Humano en Salud: puedes verificar que tu odontóloga sea, en efecto, una profesional registrada y habilitada para ejercer.',
            ],
          },
          {
            k: 'p',
            t: 'Saber que este marco existe cambia la conversación: no estás arriesgándote en el extranjero, estás eligiendo dentro de un sistema regulado.',
          },
        ],
      },
      {
        label: 'LO QUE DEBES VERIFICAR',
        heading: 'Qué significa realmente seguro: las 4 cosas que debes verificar',
        blocks: [
          {
            k: 'p',
            t: 'Aquí viene la parte honesta. Dos pacientes pueden volar a la misma ciudad y vivir experiencias completamente distintas. La seguridad está en estos cuatro factores.',
          },
          { k: 'h3', t: '1. Las credenciales y la formación del especialista' },
          { k: 'p', t: 'Este es el factor más importante de todos. No estás eligiendo un país: estás eligiendo a una persona.' },
          {
            k: 'p',
            t: 'Busca a un odontólogo que sea especialista, no un odontólogo general que hace implantes de vez en cuando. El trabajo de implantes y de rehabilitación oral completa (como All-on-4) debe hacerlo alguien con formación de posgrado formal en implantología y rehabilitación oral, y con años de experiencia enfocada.',
          },
          {
            k: 'p',
            t: 'Pregunta directamente dónde estudió, cuál es su especialización y cuántos casos como el tuyo ha realizado. Un especialista confiable responde sin dudar — y recuerda que puedes confirmar su registro profesional en el RETHUS.',
          },
          { k: 'h3', t: '2. La tecnología y los estándares de esterilización de la clínica' },
          {
            k: 'p',
            t: 'Un procedimiento de implantes seguro es imposible sin un buen diagnóstico. La clínica debe usar CBCT (tomografía 3D de haz cónico) para mapear tu hueso y tus nervios antes de la cirugía, y escaneo intraoral digital para una planificación precisa. Desconfía de cualquier clínica que aún planifique una cirugía de implantes solo con una radiografía plana en 2D.',
          },
          {
            k: 'p',
            t: 'La esterilización no es negociable. Una clínica seria sigue protocolos estrictos de esterilización de instrumental y será transparente al respecto si lo preguntas.',
          },
          { k: 'h3', t: '3. La marca del implante y el laboratorio dental' },
          {
            k: 'p',
            t: 'Pregunta qué sistema de implantes usa la clínica y si es una marca reconocida internacionalmente con respaldo global. Lo mismo aplica para el laboratorio que fabrica tus prótesis: un buen zirconio y prótesis bien elaboradas son lo que hace que el resultado dure.',
          },
          {
            k: 'p',
            t: 'Una clínica que esconde esta información, o que no sabe nombrar las marcas que usa, es una clínica de la que debes alejarte.',
          },
          { k: 'h3', t: '4. Un plan de tratamiento real, antes de viajar' },
          {
            k: 'p',
            t: 'Nunca deberías llegar a otro país sin conocer ya tu diagnóstico, tu plan de tratamiento y tu precio completo. Un proceso seguro empieza con una consulta virtual donde la especialista revisa tu caso, te explica tus opciones y te entrega un plan por escrito. Las sorpresas después de aterrizar son una señal de alerta, no una parte normal del turismo dental.',
          },
        ],
      },
      {
        label: 'SEÑALES DE ALERTA',
        heading: 'Señales de alerta: cuándo alejarte',
        blocks: [
          { k: 'p', t: 'Ten cuidado si una clínica:' },
          {
            k: 'list',
            items: [
              'Te da un precio final sin ver ninguna imagen ni registro de tu caso.',
              'No te dice el nombre, las credenciales ni la especialización del profesional.',
              'No quiere nombrar la marca del implante ni el laboratorio dental.',
              'Te presiona para reservar hoy con descuentos que se vencen.',
              'No tiene un plan claro de seguimiento ni de qué hacer si algo sale mal.',
              'Solo se comunica a través de un vendedor, nunca de la doctora tratante.',
            ],
          },
          { k: 'note', t: 'Un especialista de confianza recibe tus preguntas con gusto. La presión y la vaguedad son advertencias.' },
        ],
      },
      {
        label: 'EL PROCESO',
        heading: 'Cómo se ve realmente una experiencia de turismo dental segura',
        blocks: [
          { k: 'p', t: 'Un proceso bien llevado es tranquilo y predecible. Se ve así:' },
          {
            k: 'list',
            ordered: true,
            items: [
              'Consulta virtual. Envías tus registros o imágenes recientes; la especialista revisa tu caso y te explica tus opciones en una videollamada.',
              'Plan de tratamiento y cotización por escrito. Recibes tu diagnóstico, el tratamiento propuesto, los materiales, los tiempos y el costo total — por escrito, antes de comprometerte.',
              'Planificación del viaje. Una vez que decides, la clínica te ayuda a entender cuántos días necesitas, qué incluye cada cita y cómo será la recuperación.',
              'Tratamiento en Medellín. Te atiende la misma especialista con la que ya hablaste, no una desconocida.',
              'Seguimiento. Te vas con instrucciones claras de cuidado posterior y un plan definido de seguimiento a distancia una vez que regreses a casa.',
            ],
          },
          {
            k: 'p',
            t: 'Cuando el proceso se ve así, el turismo dental es simplemente atención internacional planificada — y no hay nada riesgoso en estar bien informado y bien preparado.',
          },
        ],
      },
      {
        label: 'TU LISTA DE VERIFICACIÓN',
        heading: 'Preguntas que debes hacer antes de reservar',
        blocks: [
          { k: 'p', t: 'Copia estas preguntas y envíalas a cualquier clínica que estés considerando:' },
          {
            k: 'list',
            items: [
              '¿Quién exactamente realizará mi tratamiento y cuál es su especialización?',
              '¿Cuántos casos parecidos al mío ha completado?',
              '¿Usan CBCT y escaneo digital para la planificación?',
              '¿Qué sistema de implantes y qué laboratorio dental utilizan?',
              '¿Recibiré un plan de tratamiento y una cotización completa por escrito antes de viajar?',
              '¿Cómo es el seguimiento después de que regrese a Estados Unidos?',
              '¿Qué pasa si tengo una complicación cuando ya esté en casa?',
            ],
          },
          { k: 'p', t: 'La calidad de las respuestas te dirá casi todo lo que necesitas saber.' },
        ],
      },
    ],
    relatedEyebrow: 'SIGUE LEYENDO',
    relatedTitle: 'All-on-4 en Medellín: dientes fijos en un día',
    relatedDesc: 'Conoce cómo funciona el tratamiento de arcada completa, paso a paso.',
    faqHeading: 'Preguntas frecuentes',
    faq: [
      {
        q: '¿El trabajo dental en Colombia es tan bueno como en Estados Unidos?',
        a: 'La calidad depende del especialista y de la clínica específica, no del país. Una especialista en implantología bien formada en Medellín, que use las mismas marcas internacionales de implantes y diagnóstico 3D que una clínica de primer nivel en Estados Unidos, puede ofrecer resultados comparables. La clave es verificar credenciales, tecnología y materiales antes de reservar.',
      },
      {
        q: '¿Por qué el trabajo dental es mucho más económico en Colombia?',
        a: 'Los pacientes internacionales suelen ahorrar entre un 50% y un 80% frente a Estados Unidos. Ese precio más bajo refleja menores costos de operación — gastos fijos, salarios en toda la economía y la ausencia de los sobrecostos de facturación de seguros — no materiales ni atención de menor calidad.',
      },
      {
        q: '¿Necesito hablar inglés para tratarme en Medellín?',
        a: 'No. Las clínicas que trabajan con pacientes internacionales atienden y se comunican tanto en español como en inglés, desde la primera consulta virtual hasta el seguimiento.',
      },
      {
        q: '¿Cuántos días necesito quedarme en Medellín para unos implantes dentales?',
        a: 'Depende de tu plan de tratamiento específico. Durante tu consulta virtual, la especialista te dirá exactamente cuántos días necesitas y qué incluye cada cita, para que planifiques tu viaje con tranquilidad.',
      },
      {
        q: '¿Qué pasa si tengo un problema después de regresar a Estados Unidos?',
        a: 'Una clínica seria te entrega instrucciones claras de cuidado posterior y un plan definido de seguimiento a distancia. Pregunta por esto antes de reservar — siempre debe ser parte del proceso.',
      },
    ],
    authorLabel: 'SOBRE LA AUTORA',
    authorIntro:
      'Esta guía fue escrita por la Dra. Carolina Macareno, odontóloga especialista en rehabilitación oral, estética e implantología, con consulta en El Poblado, Medellín, y más de 17 años de experiencia clínica atendiendo pacientes de Estados Unidos, Panamá, Puerto Rico, Canadá y toda Latinoamérica.',
    authorRethusPre: 'Su título y su especialización están registrados en el ',
    authorRethusPost:
      ', el Registro Único Nacional del Talento Humano en Salud de Colombia — el registro oficial que cualquier paciente puede consultar para confirmar que un profesional está habilitado para ejercer. Su formación incluye el título de odontóloga de la Universidad El Bosque, la especialización en rehabilitación oral y estética de la Universidad CES, y la especialización en implantología de la Universidad FACOP.',
    authorVerify:
      'Es además una especialista verificada de forma independiente, mediante un proceso que incluyó una visita presencial a su consulta, una encuesta de calidad, la revisión de su reputación en línea y la comprobación de su licencia odontológica.',
    ctaHeading: '¿Lista para saber si un tratamiento en Medellín es para ti?',
    ctaText:
      'El primer paso más seguro no cuesta nada. Agenda una consulta virtual para que una especialista revise tu caso, entiendas tus opciones reales y recibas un plan de tratamiento por escrito — todo antes de decidir nada.',
    ctaPrimary: 'Agendar consulta por WhatsApp',
    ctaSecondary: 'Ver la guía completa para pacientes de EE. UU.',
    waText:
      'Hola Dra. Macareno, leí su guía sobre turismo dental en Colombia y quiero agendar mi consulta virtual.',
    financeHeading: '¿Y si el costo es una preocupación?',
    financeText:
      'No tienes que pagar todo de una sola vez. La Dra. Macareno ofrece a sus pacientes en Estados Unidos opciones de financiación, para cubrir el tratamiento con un plan de pago cómodo. Escríbele directamente para conocer las opciones disponibles para tu caso.',
    disclaimer:
      'Este artículo tiene fines informativos generales y no reemplaza una evaluación clínica personalizada.',
    crumbHome: 'Inicio',
    crumbBlog: 'Blog',
    crumbHere: 'Turismo dental seguro',
  },
  en: {
    tags: ['PATIENT GUIDE', 'DENTAL TOURISM', 'IMPLANTS'],
    h1a: 'Is dental tourism in Colombia',
    h1b: 'safe?',
    lead: 'An honest guide, written by an implant specialist who treats international patients in Medellín every week — so you can decide with information, not fear.',
    bylineRole: 'Oral Rehabilitation · Aesthetics · Implantology · 17+ years',
    bylineLocation: 'Medellín, Colombia',
    sections: [
      {
        label: 'THE STARTING POINT',
        heading: 'The question every US patient asks first',
        blocks: [
          {
            k: 'p',
            t: 'If you have been quoted between $20,000 and $35,000 for a single arch — or $40,000 to $60,000 for your full mouth — for dental implants in the United States, you have probably typed some version of this into Google: is it actually safe to get dental work done in Colombia?',
          },
          { k: 'p', t: 'It is a fair question, and you deserve an honest answer — not a sales pitch.' },
          {
            k: 'note',
            t: 'Dental tourism in Colombia can be very safe, but it is not automatically safe. Safety does not come from the country: it comes from the specific specialist you choose, the clinic standards, and how your treatment is planned.',
          },
          {
            k: 'p',
            t: 'The good news is that all of that is verifiable before you ever book a flight. This guide explains exactly what to check.',
          },
        ],
      },
      {
        label: 'CONTEXT',
        heading: 'Why Colombia became a dental destination',
        blocks: [
          { k: 'p', t: 'Colombia — and Medellín in particular — did not become a destination for dental care by accident.' },
          {
            k: 'p',
            t: 'Dental specialists in Colombia complete university training as rigorous as their US counterparts, often followed by formal postgraduate specializations in fields like oral rehabilitation and implantology. Many of the materials used in a quality Colombian clinic — implant systems, zirconia, digital scanners, CBCT imaging — are the same international brands used in top US practices.',
          },
          {
            k: 'p',
            t: 'The price difference is not a quality difference. It is a difference in the cost of operating: lower overhead, lower salaries across the economy, and none of the insurance-billing machinery that inflates every procedure. That is why international patients typically save between 50% and 80% compared to US prices — with the same materials and comparable professional expertise.',
          },
          {
            k: 'p',
            t: 'Medellín adds something more: modern healthcare infrastructure, a spring-like climate year-round, direct flights from many US cities, and a city built to welcome international visitors.',
          },
        ],
      },
      {
        label: 'REGULATORY FRAMEWORK',
        heading: 'Colombia has a real regulatory framework',
        blocks: [
          {
            k: 'p',
            t: 'Contrary to what many people imagine, dentistry in Colombia does not operate without oversight. The country has a regulatory framework you can use to verify your specialist:',
          },
          {
            k: 'list',
            items: [
              'The Ministry of Health and Social Protection oversees the country healthcare system.',
              'INVIMA — Colombia equivalent of the US FDA — approves dental materials and devices before they can be used clinically.',
              'Every healthcare professional must be registered in RETHUS, Colombia national registry of health professionals: you can confirm that your dentist is, in fact, a registered and licensed professional.',
            ],
          },
          {
            k: 'p',
            t: 'Knowing this framework exists changes the conversation: you are not taking a risk abroad — you are choosing within a regulated system.',
          },
        ],
      },
      {
        label: 'WHAT TO VERIFY',
        heading: 'What safe actually depends on: the 4 things you must verify',
        blocks: [
          {
            k: 'p',
            t: 'Here is the honest part. Two patients can fly to the same city and have completely different experiences. Safety lives in these four factors.',
          },
          { k: 'h3', t: '1. The specialist credentials and training' },
          { k: 'p', t: 'This is the single most important factor. You are not choosing a country — you are choosing a person.' },
          {
            k: 'p',
            t: 'Look for a dentist who is a specialist, not a general dentist who places implants occasionally. Implant and full-mouth rehabilitation work (like All-on-4) should be done by someone with formal postgraduate training in implantology and oral rehabilitation, and years of focused experience.',
          },
          {
            k: 'p',
            t: 'Ask directly where they trained, what their specialization is, and how many cases like yours they have completed. A trustworthy specialist answers without hesitation — and remember, you can confirm their professional registration in RETHUS.',
          },
          { k: 'h3', t: '2. The clinic technology and sterilization standards' },
          {
            k: 'p',
            t: 'A safe implant procedure is impossible without proper diagnostics. The clinic should use CBCT (3D cone-beam imaging) to map your bone and nerves before surgery, and digital intraoral scanning for precise planning. Be wary of any clinic still planning implant surgery from a flat 2D X-ray alone.',
          },
          {
            k: 'p',
            t: 'Sterilization is non-negotiable. A serious clinic follows strict instrument-sterilization protocols and will be transparent about them if you ask.',
          },
          { k: 'h3', t: '3. The implant brand and the dental lab' },
          {
            k: 'p',
            t: 'Ask which implant system the clinic uses and whether it is an internationally recognized brand with global support. The same applies to the lab that fabricates your prosthetics — quality zirconia and well-made prosthetics are what make the result last.',
          },
          {
            k: 'p',
            t: 'A clinic that hides this information, or cannot name the brands it uses, is a clinic to walk away from.',
          },
          { k: 'h3', t: '4. A real treatment plan, before you travel' },
          {
            k: 'p',
            t: 'You should never arrive in another country without already knowing your diagnosis, your treatment plan, and your full price. A safe process starts with a virtual consultation where the specialist reviews your case, explains your options, and gives you a written plan. Surprises after you land are a red flag, not a normal part of dental tourism.',
          },
        ],
      },
      {
        label: 'RED FLAGS',
        heading: 'Red flags: when to walk away',
        blocks: [
          { k: 'p', t: 'Be cautious if a clinic:' },
          {
            k: 'list',
            items: [
              'Gives you a final price without seeing any images or records of your case.',
              'Will not tell you the specialist name, credentials, or specialization.',
              'Will not name the implant brand or the dental lab.',
              'Pressures you to book today with expiring discounts.',
              'Has no clear plan for follow-up or for what to do if something goes wrong.',
              'Communicates only through a salesperson, never the treating doctor.',
            ],
          },
          { k: 'note', t: 'A reputable specialist welcomes your questions. Pressure and vagueness are warning signs.' },
        ],
      },
      {
        label: 'THE PROCESS',
        heading: 'What a safe dental tourism experience actually looks like',
        blocks: [
          { k: 'p', t: 'A well-run process is calm and predictable. It looks like this:' },
          {
            k: 'list',
            ordered: true,
            items: [
              'Virtual consultation. You send your records or recent images; the specialist reviews your case and explains your options on a video call.',
              'Written treatment plan and quote. You receive your diagnosis, the proposed treatment, the materials, the timeline, and the full cost — in writing, before you commit.',
              'Trip planning. Once you decide, the clinic helps you understand how many days you need and what each appointment involves.',
              'Treatment in Medellín. You are treated by the same specialist you already spoke with — not a stranger.',
              'Follow-up. You leave with clear post-treatment instructions and a defined plan for remote follow-up after you return home.',
            ],
          },
          {
            k: 'p',
            t: 'When the process looks like this, dental tourism is simply planned international care — and there is nothing risky about being well-informed and well-prepared.',
          },
        ],
      },
      {
        label: 'YOUR CHECKLIST',
        heading: 'Questions to ask before you book',
        blocks: [
          { k: 'p', t: 'Copy these and send them to any clinic you are considering:' },
          {
            k: 'list',
            items: [
              'Who exactly will perform my treatment, and what is their specialization?',
              'How many cases similar to mine have you completed?',
              'Do you use CBCT and digital scanning for planning?',
              'Which implant system and dental lab do you use?',
              'Will I receive a written treatment plan and full quote before I travel?',
              'What does follow-up look like after I return to the United States?',
              'What happens if I have a complication once I am home?',
            ],
          },
          { k: 'p', t: 'The quality of the answers will tell you almost everything you need to know.' },
        ],
      },
    ],
    relatedEyebrow: 'KEEP READING',
    relatedTitle: 'All-on-4 in Medellín: fixed teeth in a day',
    relatedDesc: 'See how full-arch implant treatment works, step by step.',
    faqHeading: 'Frequently asked questions',
    faq: [
      {
        q: 'Is dental work in Colombia as good as in the United States?',
        a: 'Quality depends on the specific specialist and clinic, not the country. A properly trained implant specialist in Medellín, using the same international implant brands and 3D diagnostics as a top US practice, can deliver comparable results. The key is to verify credentials, technology, and materials before you book.',
      },
      {
        q: 'Why is dental work so much cheaper in Colombia?',
        a: 'International patients typically save 50% to 80% compared with the US. That lower price reflects lower operating costs — overhead, salaries across the economy, and the absence of insurance-billing markups — not lower-quality materials or care.',
      },
      {
        q: 'Do I need to speak Spanish to get dental treatment in Medellín?',
        a: 'No. Clinics that work with international patients provide care and communication in English, from the first virtual consultation through follow-up.',
      },
      {
        q: 'How long do I need to stay in Medellín for dental implants?',
        a: 'It depends on your specific treatment plan. During your virtual consultation, the specialist will tell you exactly how many days you need and what each appointment involves, so you can plan your trip with confidence.',
      },
      {
        q: 'What happens if I have a problem after I return to the US?',
        a: 'A reputable clinic gives you clear post-treatment instructions and a defined plan for remote follow-up. Ask about this before you book — it should always be part of the process.',
      },
    ],
    authorLabel: 'ABOUT THE AUTHOR',
    authorIntro:
      'This guide was written by Dr. Carolina Macareno, a specialist in oral rehabilitation, aesthetics, and implantology, practicing in El Poblado, Medellín, with more than 17 years of clinical experience treating patients from the United States, Panama, Puerto Rico, Canada, and across Latin America.',
    authorRethusPre: 'Her degree and specialization are registered in ',
    authorRethusPost:
      ', Colombia National Registry of Health Professionals — the official registry any patient can consult to confirm that a professional is licensed to practice. Her training includes a dental degree from Universidad El Bosque, a specialization in oral rehabilitation and aesthetics from Universidad CES, and a specialization in implantology from Universidad FACOP.',
    authorVerify:
      'She is also an independently verified specialist, via a process that included an in-person visit to her practice, a quality survey, a review of her online reputation, and verification of her dental license.',
    ctaHeading: 'Ready to find out if treatment in Medellín is right for you?',
    ctaText:
      'The safest first step costs nothing. Book a virtual consultation so a specialist can review your case, help you understand your real options, and give you a written treatment plan — all before you decide anything.',
    ctaPrimary: 'Book a consultation on WhatsApp',
    ctaSecondary: 'See the full guide for US patients',
    waText:
      'Hi Dr. Macareno, I read your guide on dental tourism in Colombia and I would like to book my virtual consultation.',
    financeHeading: 'What if cost is a concern?',
    financeText:
      'You do not have to pay everything up front. Dr. Macareno offers her US patients financing options, so you can cover your treatment with a comfortable payment plan. Message her directly to learn which options are available for your case.',
    disclaimer:
      'This article is for general informational purposes and is not a substitute for a personalized clinical evaluation.',
    crumbHome: 'Home',
    crumbBlog: 'Blog',
    crumbHere: 'Dental tourism safety',
  },
};

// ── RENDERIZADO DE BLOQUES ──────────────────────────────────────────────────
function renderBlock(b: Block, i: number) {
  if (b.k === 'p') {
    return (
      <p key={i} className="text-base md:text-lg leading-relaxed mb-5" style={{ color: '#9CA3AF' }}>
        {b.t}
      </p>
    );
  }
  if (b.k === 'h3') {
    return (
      <h3
        key={i}
        className="text-lg md:text-xl font-bold mt-8 mb-3"
        style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
      >
        {b.t}
      </h3>
    );
  }
  if (b.k === 'note') {
    return (
      <div
        key={i}
        className="my-6 rounded-lg px-5 py-4"
        style={{ background: 'rgba(201,164,97,0.08)', borderLeft: '3px solid #C9A461' }}
      >
        <p className="text-base leading-relaxed" style={{ color: '#F5F5F0' }}>
          {b.t}
        </p>
      </div>
    );
  }
  if (b.ordered) {
    return (
      <ol key={i} className="my-6 space-y-4">
        {b.items.map((it, idx) => (
          <li key={idx} className="flex gap-4">
            <span
              className="flex-shrink-0 text-xl font-bold leading-tight"
              style={{ color: '#C9A461', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {idx + 1}
            </span>
            <span className="text-base md:text-lg leading-relaxed" style={{ color: '#9CA3AF' }}>
              {it}
            </span>
          </li>
        ))}
      </ol>
    );
  }
  return (
    <ul key={i} className="my-6 space-y-3">
      {b.items.map((it, idx) => (
        <li key={idx} className="flex gap-3">
          <span
            className="flex-shrink-0 mt-2.5 rounded-full"
            style={{ width: '6px', height: '6px', backgroundColor: '#C9A461' }}
          />
          <span className="text-base md:text-lg leading-relaxed" style={{ color: '#9CA3AF' }}>
            {it}
          </span>
        </li>
      ))}
    </ul>
  );
}

// ── PÁGINA ──────────────────────────────────────────────────────────────────
export default async function TurismoDentalSeguro({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const t = isEs ? content.es : content.en;
  const localePath = (path: string) => (isEs ? path : '/en' + path);
  const url = isEs ? `${BASE}/blog/${SLUG}` : `${BASE}/en/blog/${SLUG}`;
  const waHref = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t.waText)}`;

  const breadcrumbs = [
    { name: t.crumbHome, url: isEs ? BASE : `${BASE}/en` },
    { name: t.crumbBlog, url: isEs ? `${BASE}/blog` : `${BASE}/en/blog` },
    { name: t.crumbHere, url },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <main style={{ backgroundColor: '#070B14' }} className="min-h-screen">
      <SchemaOrg
        schema={[
          breadcrumbSchema(breadcrumbs),
          articleSchema({
            title: `${t.h1a} ${t.h1b}`,
            description: t.lead,
            url,
            publishDate: '2026-05-22',
          }),
          faqSchema,
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-12" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-3xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: '#9CA3AF' }}>
            <Link href={localePath('/')} className="hover:text-[#C9A461] transition-colors">
              {t.crumbHome}
            </Link>
            <span>/</span>
            <Link href={localePath('/blog')} className="hover:text-[#C9A461] transition-colors">
              {t.crumbBlog}
            </Link>
            <span>/</span>
            <span style={{ color: '#C9A461' }}>{t.crumbHere}</span>
          </nav>

          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-5">
              {t.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border"
                  style={{ color: '#C9A461', borderColor: '#C9A461', background: 'rgba(201,164,97,0.08)' }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5"
              style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {t.h1a}
              <br />
              <span style={{ color: '#C9A461' }}>{t.h1b}</span>
            </h1>

            <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: '#9CA3AF' }}>
              {t.lead}
            </p>

            <div className="flex items-center gap-4 pb-8 border-b" style={{ borderColor: '#1F2937' }}>
              <div
                className="w-11 h-11 rounded-full overflow-hidden border-2 flex-shrink-0"
                style={{ borderColor: '#C9A461' }}
              >
                <Image
                  src="/images/dra-carolina-perfil.webp"
                  alt="Dra. Carolina Macareno"
                  width={44}
                  height={44}
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: '#F5F5F0' }}>
                  Dra. Carolina Macareno
                </p>
                <p className="text-xs" style={{ color: '#9CA3AF' }}>
                  {t.bylineRole}
                </p>
              </div>
              <div className="ml-auto text-right hidden sm:block">
                <p className="text-xs" style={{ color: '#9CA3AF' }}>
                  {t.bylineLocation}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Body sections */}
      <section className="pb-4 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-3xl mx-auto space-y-14">
          {t.sections.map((section, si) => (
            <AnimatedSection key={si} delay={0.05}>
              <article>
                <span
                  className="text-xs font-semibold tracking-widest uppercase block mb-2"
                  style={{ color: '#C9A461' }}
                >
                  {section.label}
                </span>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-2"
                  style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
                >
                  {section.heading}
                </h2>
                <div className="w-12 h-0.5 mb-6" style={{ background: '#C9A461' }} />
                {section.blocks.map((b, bi) => renderBlock(b, bi))}
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="py-10 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <Link
              href={localePath('/all-on-4-medellin')}
              className="block rounded-xl border p-6 transition-colors hover:border-[#C9A461]"
              style={{ borderColor: '#1F2937', background: '#0D1321' }}
            >
              <span
                className="text-xs font-semibold tracking-widest uppercase block mb-2"
                style={{ color: '#C9A461' }}
              >
                {t.relatedEyebrow}
              </span>
              <p
                className="text-lg font-bold mb-1"
                style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
              >
                {t.relatedTitle}
              </p>
              <p className="text-sm" style={{ color: '#9CA3AF' }}>
                {t.relatedDesc}
              </p>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Author */}
      <section className="py-12 px-4" style={{ backgroundColor: '#0D1321', borderTop: '1px solid #1F2937', borderBottom: '1px solid #1F2937' }}>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span
              className="text-xs font-semibold tracking-widest uppercase block mb-4"
              style={{ color: '#C9A461' }}
            >
              {t.authorLabel}
            </span>
            <div className="flex items-start gap-5">
              <div
                className="w-16 h-16 rounded-full overflow-hidden border-2 flex-shrink-0"
                style={{ borderColor: '#C9A461' }}
              >
                <Image
                  src="/images/dra-carolina-perfil.webp"
                  alt="Dra. Carolina Macareno"
                  width={64}
                  height={64}
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <div>
                <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: '#9CA3AF' }}>
                  {t.authorIntro}
                </p>
                <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: '#9CA3AF' }}>
                  {t.authorRethusPre}
                  <a
                    href={RETHUS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline"
                    style={{ color: '#C9A461' }}
                  >
                    RETHUS
                  </a>
                  {t.authorRethusPost}
                </p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: '#9CA3AF' }}>
                  {t.authorVerify}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {t.ctaHeading}
            </h2>
            <p className="mb-8" style={{ color: '#9CA3AF' }}>
              {t.ctaText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded text-sm tracking-wider uppercase transition-all hover:scale-105"
                style={{ backgroundColor: '#C9A461', color: '#070B14' }}
              >
                {t.ctaPrimary}
              </a>
              <Link
                href={localePath('/dental-implants-for-us-patients')}
                className="inline-flex items-center justify-center gap-2 border font-medium px-8 py-4 rounded text-sm tracking-wider uppercase transition-all"
                style={{ borderColor: 'rgba(201,164,97,0.4)', color: '#F5F5F0' }}
              >
                {t.ctaSecondary}
              </Link>
            </div>

            <div
              className="mt-10 rounded-xl border px-6 py-6 text-left"
              style={{ borderColor: '#1F2937', background: '#0D1321' }}
            >
              <p
                className="text-base font-bold mb-2"
                style={{ color: '#C9A461', fontFamily: 'var(--font-playfair-display, serif)' }}
              >
                {t.financeHeading}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>
                {t.financeText}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="mb-10 text-center">
            <h2
              className="text-2xl md:text-3xl font-bold"
              style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {t.faqHeading}
            </h2>
            <div className="w-12 h-0.5 mx-auto mt-4" style={{ background: '#C9A461' }} />
          </AnimatedSection>

          <div className="space-y-4">
            {t.faq.map((f, i) => (
              <AnimatedSection key={i} delay={0.05}>
                <div
                  className="rounded-xl border p-6"
                  style={{ borderColor: '#1F2937', background: '#0D1321' }}
                >
                  <h3
                    className="text-base md:text-lg font-bold mb-2"
                    style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}
                  >
                    {f.q}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: '#9CA3AF' }}>
                    {f.a}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <p className="text-xs text-center mt-10" style={{ color: '#4B5563' }}>
            {t.disclaimer}
          </p>
        </div>
      </section>
    </main>
  );
}
