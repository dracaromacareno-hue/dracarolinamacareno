import type { Metadata } from 'next';
import Link from 'next/link';

const WA = 'https://wa.me/573163975232?text=Hola%2C%20quiero%20información%20sobre%20recuperar%20mis%20dientes%20fijos%20con%20implantes';

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
      ? 'Recupera tus Dientes Fijos | Implantes Dentales Medellín — Dra. Carolina Macareno'
      : 'Get Your Fixed Teeth Back | Dental Implants Medellín',
    description: isEs
      ? 'Solución permanente para dientes perdidos. Implantes dentales y prótesis fija atornillada en El Poblado, Medellín. Come, habla y sonríe sin limitaciones. Consulta tu caso hoy.'
      : 'Permanent solution for missing teeth. Dental implants and fixed prosthetics in El Poblado, Medellín. Eat, talk and smile without limitations.',
    alternates: {
      canonical: isEs ? `${BASE}/landing/dientes-fijos` : `${BASE}/en/landing/dientes-fijos`,
    },
    robots: { index: false, follow: false },
  };
}

export default async function DientesFijosLanding({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === 'es';

  return (
    <div style={{ backgroundColor: '#070B14', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>

      {/* MINIMAL NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ backgroundColor: 'rgba(7,11,20,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(201,164,97,0.15)' }}>
        <div style={{ fontFamily: 'var(--font-playfair-display, serif)', color: '#F5F5F0', fontWeight: 700, fontSize: '1.1rem' }}>
          Dra. Carolina Macareno
        </div>
        <a href={WA} target="_blank" rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded font-semibold text-sm transition-all hover:scale-105"
          style={{ backgroundColor: '#25D366', color: '#fff' }}>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          {isEs ? 'Consulta gratis' : 'Free consultation'}
        </a>
      </nav>

      {/* HERO */}
      <section className="relative pt-28 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(201,164,97,0.12) 0%, transparent 70%)' }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#C9A461' }}>
            {isEs ? 'El Poblado, Medellín · Implantología Avanzada' : 'El Poblado, Medellín · Advanced Implantology'}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs
              ? <>Recupera tus dientes fijos<br /><span style={{ color: '#C9A461' }}>y vuelve a vivir sin limitaciones</span></>
              : <>Get your fixed teeth back<br /><span style={{ color: '#C9A461' }}>and live without limitations</span></>}
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto" style={{ color: '#D1D5DB', lineHeight: 1.7 }}>
            {isEs
              ? 'Implantes dentales y prótesis fija atornillada que se sienten como dientes naturales. Come lo que quieras, habla con confianza, sonríe sin miedo.'
              : 'Dental implants and screw-retained fixed prosthetics that feel like natural teeth. Eat whatever you want, talk with confidence, smile without fear.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: '#C9A461', color: '#070B14', boxShadow: '0 8px 32px rgba(201,164,97,0.3)' }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {isEs ? 'Evalúa tu caso gratis por WhatsApp' : 'Evaluate your case free on WhatsApp'}
            </a>
            <Link href={locale === 'es' ? '/contacto' : '/en/contacto'}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border transition-all hover:scale-105"
              style={{ borderColor: '#C9A461', color: '#C9A461' }}>
              {isEs ? 'Agenda tu consulta' : 'Book your consultation'}
            </Link>
          </div>
          {/* Trust bar */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {[
              { n: '17+', label: isEs ? 'años de experiencia' : 'years experience' },
              { n: '3,500+', label: isEs ? 'pacientes transformados' : 'patients transformed' },
              { n: '98%', label: isEs ? 'tasa de éxito' : 'success rate' },
              { n: '0', label: isEs ? 'dolor durante el procedimiento' : 'pain during procedure' },
            ].map((s) => (
              <div key={s.n} className="text-center">
                <p className="text-2xl font-bold" style={{ color: '#C9A461', fontFamily: 'var(--font-playfair-display, serif)' }}>{s.n}</p>
                <p className="text-xs" style={{ color: '#9CA3AF' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMA → SOLUCIÓN */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Problema */}
            <div className="p-8 rounded-2xl border" style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#EF4444' }}>
                {isEs ? 'El problema' : 'The problem'}
              </p>
              <h3 className="text-xl font-bold mb-5" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
                {isEs ? '¿Te identificas con esto?' : 'Do you relate to this?'}
              </h3>
              <ul className="space-y-3">
                {(isEs ? [
                  'Evitas comer alimentos duros o fibrosos',
                  'Te sientes inseguro al hablar o reír en público',
                  'Tu prótesis removible se mueve o resulta incómoda',
                  'Has perdido uno o varios dientes y no sabes qué hacer',
                  'Llevas años postergando la solución por miedo o costos',
                ] : [
                  'You avoid eating hard or fibrous foods',
                  'You feel insecure talking or laughing in public',
                  'Your removable denture moves or feels uncomfortable',
                  'You\'ve lost one or more teeth and don\'t know what to do',
                  'You\'ve been postponing the solution for years',
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#D1D5DB' }}>
                    <span className="mt-0.5 shrink-0" style={{ color: '#EF4444' }}>✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Solución */}
            <div className="p-8 rounded-2xl border" style={{ backgroundColor: '#0a1a0a', borderColor: '#C9A461' }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9A461' }}>
                {isEs ? 'La solución' : 'The solution'}
              </p>
              <h3 className="text-xl font-bold mb-5" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
                {isEs ? 'Implantes + Prótesis Fija' : 'Implants + Fixed Prosthetics'}
              </h3>
              <ul className="space-y-3">
                {(isEs ? [
                  'Dientes permanentes que no se quitan ni se mueven',
                  'Come carne, manzana, lo que quieras — sin restricciones',
                  'Habla y ríe con total confianza',
                  'Resultados estéticos naturales, nadie notará la diferencia',
                  'Inversión que dura toda la vida con el cuidado adecuado',
                ] : [
                  'Permanent teeth that don\'t come out or move',
                  'Eat meat, apple, anything — no restrictions',
                  'Talk and laugh with total confidence',
                  'Natural aesthetic results, no one will notice the difference',
                  'Lifetime investment with proper care',
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#D1D5DB' }}>
                    <span className="mt-0.5 shrink-0" style={{ color: '#C9A461' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OPCIONES DE TRATAMIENTO */}
      <section className="py-16 px-4" style={{ backgroundColor: '#070B14' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? 'Tu solución según tu caso' : 'Your solution for your case'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🦷',
                title: isEs ? 'Implante unitario' : 'Single implant',
                desc: isEs ? 'Para uno o pocos dientes perdidos. Un implante de titanio + corona de zirconia. Resultado idéntico al diente natural.' : 'For one or few missing teeth. A titanium implant + zirconia crown. Result identical to natural tooth.',
                cta: isEs ? 'Desde $4.5M COP' : 'From $4.5M COP',
              },
              {
                icon: '✨',
                title: isEs ? 'All-on-4 / All-on-6' : 'All-on-4 / All-on-6',
                desc: isEs ? 'Para pérdida total de dientes en una arcada. 4 o 6 implantes sostienen una prótesis fija completa. Puedes salir el mismo día con dientes.' : 'For total tooth loss in one arch. 4 or 6 implants support a complete fixed prosthesis. Same-day teeth.',
                cta: isEs ? 'Evaluación requerida' : 'Evaluation required',
                highlight: true,
              },
              {
                icon: '🔬',
                title: isEs ? 'Implantes cigomáticos' : 'Zygomatic implants',
                desc: isEs ? 'Para casos con pérdida ósea severa donde los implantes convencionales no son posibles. Anclados en el pómulo. Tecnología avanzada.' : 'For severe bone loss cases. Anchored in the cheekbone. Advanced technology.',
                cta: isEs ? 'Evaluación especializada' : 'Specialized evaluation',
              },
            ].map((opt, i) => (
              <div key={i} className="p-7 rounded-2xl border flex flex-col"
                style={{
                  backgroundColor: opt.highlight ? 'rgba(201,164,97,0.06)' : '#111827',
                  borderColor: opt.highlight ? '#C9A461' : '#1F2937',
                }}>
                <div className="text-3xl mb-4">{opt.icon}</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>{opt.title}</h3>
                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: '#9CA3AF' }}>{opt.desc}</p>
                <span className="text-xs font-semibold" style={{ color: '#C9A461' }}>{opt.cta}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO EN 4 PASOS */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0D1321' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? 'Así funciona el proceso' : 'How the process works'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {(isEs ? [
              { n: '01', title: 'Consulta diagnóstica', desc: 'Tomografía 3D, evaluación ósea y plan de tratamiento personalizado con costos reales.' },
              { n: '02', title: 'Cirugía de implantes', desc: 'Bajo anestesia local. Ambulatorio, sin dolor. 60 a 120 minutos según el caso.' },
              { n: '03', title: 'Oseointegración', desc: 'El implante se funde con el hueso en 3-6 meses. Provisorio estético mientras tanto.' },
              { n: '04', title: 'Corona definitiva', desc: 'Prótesis final en zirconia o cerámica. Natural, estética y permanente.' },
            ] : [
              { n: '01', title: 'Diagnostic consultation', desc: '3D tomography, bone evaluation and personalized treatment plan with real costs.' },
              { n: '02', title: 'Implant surgery', desc: 'Under local anesthesia. Outpatient, no pain. 60 to 120 minutes depending on the case.' },
              { n: '03', title: 'Osseointegration', desc: 'The implant fuses with the bone in 3-6 months. Aesthetic provisional in the meantime.' },
              { n: '04', title: 'Final crown', desc: 'Final zirconia or ceramic prosthesis. Natural, aesthetic and permanent.' },
            ]).map((step) => (
              <div key={step.n} className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-sm"
                  style={{ backgroundColor: 'rgba(201,164,97,0.15)', color: '#C9A461', border: '1px solid rgba(201,164,97,0.3)' }}>
                  {step.n}
                </div>
                <h4 className="font-semibold mb-2 text-sm" style={{ color: '#F5F5F0' }}>{step.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: '#9CA3AF' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(135deg, #0f2027 0%, #070B14 50%, #1a2a0a 100%)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
            {isEs ? '¿Listo para recuperar tus dientes?' : 'Ready to get your teeth back?'}
          </h2>
          <p className="mb-8" style={{ color: '#D1D5DB' }}>
            {isEs
              ? 'La consulta de diagnóstico incluye evaluación clínica completa, tomografía 3D y plan de tratamiento con costos reales. Sin compromiso.'
              : 'The diagnostic consultation includes complete clinical evaluation, 3D tomography and treatment plan with real costs. No commitment.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105"
              style={{ backgroundColor: '#C9A461', color: '#070B14' }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {isEs ? 'Escríbeme por WhatsApp ahora' : 'Message me on WhatsApp now'}
            </a>
            <Link href={locale === 'es' ? '/contacto' : '/en/contacto'}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border transition-all hover:scale-105"
              style={{ borderColor: '#C9A461', color: '#C9A461' }}>
              {isEs ? 'Agenda tu cita' : 'Book appointment'}
            </Link>
          </div>
          <p className="mt-6 text-sm" style={{ color: '#9CA3AF' }}>
            📍 {isEs ? 'El Poblado, Medellín · Atención de lunes a sábado' : 'El Poblado, Medellín · Monday to Saturday'}
          </p>
        </div>
      </section>

      {/* FOOTER MINIMAL */}
      <footer className="py-8 px-4 text-center border-t" style={{ borderColor: '#1F2937' }}>
        <p className="text-sm" style={{ color: '#6B7280' }}>
          © 2026 Dra. Carolina Macareno · El Poblado, Medellín ·{' '}
          <Link href={locale === 'es' ? '/' : '/en'} style={{ color: '#C9A461' }}>
            {isEs ? 'Ver sitio completo' : 'View full site'}
          </Link>
        </p>
      </footer>
    </div>
  );
}
