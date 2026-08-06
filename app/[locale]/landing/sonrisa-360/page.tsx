import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import Link from 'next/link';
import WhatsAppLink from '@/components/WhatsAppLink';

const WA = 'Hola, quiero información sobre el Protocolo Sonrisa 360';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';
  const BASE = 'https://dracarolinamacareno.com';
  return {
    title: isEs
      ? 'Protocolo Sonrisa 360 | Diseño de Sonrisa Completo'
      : 'Smile 360 Protocol | Complete Smile Design',
    description: isEs
      ? 'Transformación completa con el Protocolo Sonrisa 360: diseño digital, carillas, blanqueamiento y más. El Poblado, Medellín. Agenda tu consulta hoy.'
      : 'Complete smile transformation with the Smile 360 Protocol. Digital design, veneers, whitening and more. El Poblado, Medellín.',
    alternates: {
      canonical: isEs ? `${BASE}/landing/sonrisa-360` : `${BASE}/en/landing/sonrisa-360`,
    },
    robots: { index: false, follow: false },
  };
}

export default async function Sonrisa360Landing({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === 'es';

  return (
    <div style={{ backgroundColor: '#FCFBF9', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>

      {/* MINIMAL NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ backgroundColor: 'rgba(7,11,20,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(201,164,97,0.15)' }}>
        <div style={{ fontFamily: 'var(--font-playfair-display, serif)', color: '#F5F5F0', fontWeight: 700, fontSize: '1.1rem' }}>
          Dra. Carolina Macareno
        </div>
        <WhatsAppLink message={WA} locale={locale as 'es' | 'en'} trackingLabel="sonrisa360_nav"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded font-semibold text-sm transition-all hover:scale-105 bg-[#C9A461] text-[#070B14]">
          {isEs ? 'Ver mi caso' : 'Evaluate my case'}
        </WhatsAppLink>
      </nav>

      {/* HERO */}
      <section className="relative pt-28 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(201,164,97,0.15) 0%, transparent 65%)' }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-semibold tracking-widest uppercase"
            style={{ backgroundColor: 'rgba(201,164,97,0.1)', border: '1px solid rgba(201,164,97,0.3)', color: '#C9A461' }}>
            ✦ {isEs ? 'Protocolo exclusivo · Resultados visibles desde la primera cita' : 'Exclusive protocol · Visible results from the first visit'}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs
              ? <><span style={{ color: '#C9A461' }}>Protocolo</span> Sonrisa 360</>
              : <><span style={{ color: '#C9A461' }}>Smile</span> 360 Protocol</>}
          </h1>
          <p className="text-lg md:text-xl mb-4 max-w-2xl mx-auto" style={{ color: '#5A5449', lineHeight: 1.7 }}>
            {isEs
              ? 'La transformación completa que siempre quisiste. Diseñamos tu sonrisa ideal con tecnología digital antes de tocar un solo diente.'
              : 'The complete transformation you always wanted. We design your ideal smile with digital technology before touching a single tooth.'}
          </p>
          <p className="text-base mb-10 max-w-xl mx-auto" style={{ color: '#77726A' }}>
            {isEs
              ? 'Carillas · Blanqueamiento · Diseño Digital DSD · Coronas · Ortodoncia · Todo coordinado bajo un mismo protocolo.'
              : 'Veneers · Whitening · Digital DSD Design · Crowns · Orthodontics · All coordinated under one protocol.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppLink message={WA} locale={locale as 'es' | 'en'} trackingLabel="sonrisa360_hero"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105 hover:shadow-xl bg-[#C9A461] text-[#070B14] shadow-[0_8px_32px_rgba(201,164,97,0.3)]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {isEs ? 'Quiero ver mi Sonrisa 360' : 'I want to see my Smile 360'}
            </WhatsAppLink>
            <Link href={locale === 'es' ? '/contacto' : '/en/contacto'}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border transition-all hover:scale-105"
              style={{ borderColor: '#C9A461', color: '#C9A461' }}>
              {isEs ? 'Agenda tu consulta' : 'Book consultation'}
            </Link>
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-center mb-3" style={{ color: '#C9A461' }}>
            {isEs ? 'El protocolo completo' : 'The complete protocol'}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? '¿Qué incluye el Sonrisa 360?' : 'What does Smile 360 include?'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <Icon name="monitor" />,
                title: isEs ? 'Diseño Digital DSD' : 'DSD Digital Design',
                desc: isEs ? 'Visualizas tu sonrisa final en pantalla antes de cualquier procedimiento. Sin sorpresas.' : 'You see your final smile on screen before any procedure. No surprises.',
              },
              {
                icon: <Icon name="sparkle" />,
                title: isEs ? 'Carillas de cerámica' : 'Ceramic veneers',
                desc: isEs ? 'Laminillas ultrafinas que transforman color, forma y tamaño de los dientes. Mínima invasión, máximo resultado.' : 'Ultra-thin laminate veneers that transform color, shape and size. Minimal invasion, maximum result.',
              },
              {
                icon: <Icon name="bolt" />,
                title: isEs ? 'Blanqueamiento profesional' : 'Professional whitening',
                desc: isEs ? 'Resultado visible desde la primera sesión. Hasta 8 tonos más blanco con técnica profesional.' : 'Visible result from the first session. Up to 8 shades whiter with professional technique.',
              },
              {
                icon: <Icon name="diamond" />,
                title: isEs ? 'Coronas de zirconia' : 'Zirconia crowns',
                desc: isEs ? 'Restauraciones completas para dientes deteriorados o tratados. Resistencia y estética superior.' : 'Complete restorations for damaged or treated teeth. Superior strength and aesthetics.',
              },
              {
                icon: <Icon name="ruler" />,
                title: isEs ? 'Ortodoncia coordinada' : 'Coordinated orthodontics',
                desc: isEs ? 'Cuando se requiere alineación previa, coordinamos con el especialista para un resultado perfecto.' : 'When prior alignment is needed, we coordinate with the specialist for a perfect result.',
              },
              {
                icon: <Icon name="award" />,
                title: isEs ? 'Seguimiento garantizado' : 'Guaranteed follow-up',
                desc: isEs ? 'Plan de mantenimiento personalizado para que tu sonrisa dure muchos años en perfectas condiciones.' : 'Personalized maintenance plan so your smile lasts many years in perfect condition.',
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border flex flex-col gap-3"
                style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA' }}>
                <span className="text-3xl">{item.icon}</span>
                <h3 className="font-bold text-base" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#77726A' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUIÉN ES */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? '¿Para quién es el Sonrisa 360?' : 'Who is Smile 360 for?'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(isEs ? [
              'Tienes dientes manchados, amarillos o con cambio de color',
              'Tus dientes están desgastados, pequeños o con formas irregulares',
              'Tienes espacios, diastemas o dientes separados',
              'Sientes que tu sonrisa no refleja quién eres',
              'Tienes una boda, evento importante o cambio de vida próximo',
              'Has soñado con una sonrisa perfecta pero no sabes por dónde empezar',
            ] : [
              'Your teeth are stained, yellow or discolored',
              'Your teeth are worn, small or irregularly shaped',
              'You have spaces, diastemas or separated teeth',
              'You feel your smile doesn\'t reflect who you are',
              'You have a wedding, important event or life change coming up',
              'You\'ve dreamed of a perfect smile but don\'t know where to start',
            ]).map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E3DA' }}>
                <span style={{ color: '#C9A461', flexShrink: 0, marginTop: 2 }}>✦</span>
                <p className="text-sm" style={{ color: '#5A5449' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? 'Del diagnóstico a tu nueva sonrisa' : 'From diagnosis to your new smile'}
          </h2>
          <div className="space-y-4">
            {(isEs ? [
              { n: '01', title: 'Consulta y fotografía clínica', desc: 'Evaluación completa, fotos clínicas de alta resolución y análisis de tu sonrisa actual.' },
              { n: '02', title: 'Diseño Digital DSD', desc: 'Creamos el diseño de tu nueva sonrisa en pantalla. Ves el resultado antes de empezar.' },
              { n: '03', title: 'Aprobación y plan', desc: 'Apruebas el diseño y recibes el plan de tratamiento completo con tiempos y costos transparentes.' },
              { n: '04', title: 'Ejecución del protocolo', desc: 'Realizamos los procedimientos en el orden correcto: desde preparación hasta restauraciones finales.' },
              { n: '05', title: 'Entrega y seguimiento', desc: 'Sonrisa terminada. Plan de mantenimiento personalizado para proteger tu inversión.' },
            ] : [
              { n: '01', title: 'Consultation and clinical photography', desc: 'Complete evaluation, high-resolution clinical photos and analysis of your current smile.' },
              { n: '02', title: 'DSD Digital Design', desc: 'We create your new smile design on screen. You see the result before we start.' },
              { n: '03', title: 'Approval and plan', desc: 'You approve the design and receive the complete treatment plan with transparent timelines and costs.' },
              { n: '04', title: 'Protocol execution', desc: 'We perform the procedures in the correct order: from preparation to final restorations.' },
              { n: '05', title: 'Delivery and follow-up', desc: 'Smile finished. Personalized maintenance plan to protect your investment.' },
            ]).map((step) => (
              <div key={step.n} className="flex items-start gap-5 p-5 rounded-xl border"
                style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-sm"
                  style={{ backgroundColor: 'rgba(201,164,97,0.15)', color: '#C9A461', border: '1px solid rgba(201,164,97,0.3)' }}>
                  {step.n}
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: '#211E18' }}>{step.title}</h4>
                  <p className="text-sm" style={{ color: '#77726A' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16 px-4" style={{ backgroundColor: '#FCFBF9' }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl text-center" style={{ backgroundColor: 'rgba(201,164,97,0.06)', border: '1px solid rgba(201,164,97,0.2)' }}>
            <p className="text-4xl mb-4" style={{ color: '#C9A461' }}>"</p>
            <p className="text-lg italic mb-6" style={{ color: '#5A5449', lineHeight: 1.8 }}>
              {isEs
                ? 'Siempre quise mejorar mi sonrisa pero no sabía por dónde empezar. El proceso fue claro desde el principio, pude ver cómo iba a quedar antes de comenzar. Hoy no puedo dejar de sonreír.'
                : 'I always wanted to improve my smile but didn\'t know where to start. The process was clear from the beginning, I could see how it would look before we started. Today I can\'t stop smiling.'}
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                style={{ backgroundColor: 'rgba(201,164,97,0.2)', color: '#C9A461' }}>M</div>
              <div className="text-left">
                <p className="font-semibold text-sm" style={{ color: '#211E18' }}>María C.</p>
                <p className="text-xs" style={{ color: '#77726A' }}>Protocolo Sonrisa 360 · Medellín</p>
              </div>
              <div className="ml-2 flex gap-0.5">
                {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#C9A461' }}>★</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #FCFBF9 55%, #F6F1E8 100%)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? 'Tu nueva sonrisa empieza hoy' : 'Your new smile starts today'}
          </h2>
          <p className="mb-3" style={{ color: '#5A5449' }}>
            {isEs
              ? 'En la primera consulta diseñamos tu sonrisa ideal. Sales con claridad total sobre tu plan, los pasos y los costos.'
              : 'In the first consultation we design your ideal smile. You leave with complete clarity on your plan, steps and costs.'}
          </p>
          <p className="mb-8 text-sm" style={{ color: '#77726A' }}>
            {isEs ? '⏱ Cupos limitados por semana' : '⏱ Limited spots per week'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppLink message={WA} locale={locale as 'es' | 'en'} trackingLabel="sonrisa360_bottom"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105 bg-[#C9A461] text-[#070B14]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {isEs ? 'Quiero mi Sonrisa 360' : 'I want my Smile 360'}
            </WhatsAppLink>
            <Link href={locale === 'es' ? '/contacto' : '/en/contacto'}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border transition-all hover:scale-105"
              style={{ borderColor: '#C9A461', color: '#C9A461' }}>
              {isEs ? 'Agenda tu cita' : 'Book appointment'}
            </Link>
          </div>
          <p className="mt-6 text-sm" style={{ color: '#77726A' }}>
            El Poblado, Medellín · +57 316 397 5232
          </p>
        </div>
      </section>

      {/* FOOTER MINIMAL */}
      <footer className="py-8 px-4 text-center border-t" style={{ borderColor: '#E8E3DA' }}>
        <p className="text-sm" style={{ color: '#77726A' }}>
          © 2026 Dra. Carolina Macareno · El Poblado, Medellín ·{' '}
          <Link href={locale === 'es' ? '/' : '/en'} style={{ color: '#C9A461' }}>
            {isEs ? 'Ver sitio completo' : 'View full site'}
          </Link>
        </p>
      </footer>
    </div>
  );
}
