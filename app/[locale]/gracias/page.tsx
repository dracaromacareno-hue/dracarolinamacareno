import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

// Ruta del PDF servido desde /public. Nombre poco adivinable para reducir la
// fuga casual del enlace (blindaje real, con descarga por token firmado, queda
// para una fase posterior; para el MVP la descarga directa es suficiente).
const PDF_URL = '/descargas/el-poder-de-tu-sonrisa-2b9f4a7c1e.pdf';

// Correo de soporte de la compra. [por crear]: crear el Gmail
// consultoriadentalcm@gmail.com (2 min, gratis) o reemplazar por el corporativo
// cuando el dominio consultoriadentalcm.com esté registrado.
const SUPPORT_EMAIL = 'consultoriadentalcm@gmail.com';
const WA_SOPORTE = 'https://wa.me/573163975232?text=Hola%2C%20acabo%20de%20comprar%20el%20PDF%20El%20Poder%20de%20Tu%20Sonrisa%20y%20tengo%20una%20duda';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';
  return {
    title: isEs
      ? 'Gracias por tu compra | Dra. Carolina Macareno'
      : 'Thank you for your purchase | Dr. Carolina Macareno',
    // Página post-pago: nunca debe indexarse ni aparecer en resultados.
    robots: { index: false, follow: false },
  };
}

export default async function GraciasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const localePath = (path: string) => (locale === 'es' ? path : `/en${path}`);

  const pasos = isEs
    ? [
        {
          num: '1',
          title: 'Descarga tu libro',
          desc: 'Toca el botón dorado. El archivo PDF se guardará en tu dispositivo. Puedes leerlo en el celular, la tablet o el computador.',
        },
        {
          num: '2',
          title: 'Guárdalo en un lugar seguro',
          desc: 'Es tuyo para siempre. Te recomendamos guardar una copia en tu correo o en la nube para tenerlo siempre a mano.',
        },
        {
          num: '3',
          title: 'Empieza por el capítulo 1',
          desc: 'No necesitas leerlo de corrido. Lee un capítulo, aplícalo y avanza a tu ritmo. La transformación empieza por decidir mostrar tu sonrisa.',
        },
      ]
    : [
        {
          num: '1',
          title: 'Download your book',
          desc: 'Tap the gold button. The PDF file will be saved to your device. You can read it on your phone, tablet or computer.',
        },
        {
          num: '2',
          title: 'Save it somewhere safe',
          desc: 'It is yours forever. We recommend keeping a copy in your email or cloud so you always have it at hand.',
        },
        {
          num: '3',
          title: 'Start with chapter 1',
          desc: 'You do not need to read it in one sitting. Read a chapter, apply it and move at your own pace. Transformation starts by deciding to show your smile.',
        },
      ];

  return (
    <>
      {/* ── HERO GRACIAS ── */}
      <section className="pt-32 pb-16 bg-[#070B14] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(201,164,97,0.09)_0%,_transparent_60%)]" />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <AnimatedSection>
            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(201,164,97,0.12)', border: '1px solid rgba(201,164,97,0.35)' }}>
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#C9A461" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[#C9A461] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">
              {isEs ? 'Compra confirmada' : 'Purchase confirmed'}
            </span>
            <h1
              className="text-3xl sm:text-4xl font-bold text-[#F5F5F0] mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
            >
              {isEs ? 'Gracias, tu libro está listo' : 'Thank you, your book is ready'}
            </h1>
            <p className="text-[#D1D5DB] leading-relaxed mb-8">
              {isEs
                ? 'Acabas de dar el primer paso. Descarga aquí tu ejemplar de El Poder de Tu Sonrisa en PDF.'
                : 'You have just taken the first step. Download your copy of The Power of Your Smile in PDF here.'}
            </p>

            <a
              href={PDF_URL}
              download
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded font-bold text-base transition-all hover:scale-105"
              style={{ backgroundColor: '#C9A461', color: '#070B14' }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
              </svg>
              {isEs ? 'Descargar mi libro (PDF)' : 'Download my book (PDF)'}
            </a>

            <p className="text-[#6B7280] text-xs mt-4">
              {isEs
                ? '¿El botón no descarga? Escríbenos y te lo enviamos por correo.'
                : 'Button not downloading? Message us and we will email it to you.'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PASOS ── */}
      <section className="py-16 bg-[#0D1321]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-4">
            {pasos.map((p) => (
              <AnimatedSection key={p.num}>
                <div className="flex items-start gap-4 p-5 rounded-xl border" style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}>
                  <span
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: 'rgba(201,164,97,0.12)', color: '#C9A461' }}
                  >
                    {p.num}
                  </span>
                  <div>
                    <h2 className="text-base font-bold mb-1" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
                      {p.title}
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: '#D1D5DB' }}>{p.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOPORTE / SIGUIENTES PASOS ── */}
      <section className="py-16 bg-[#070B14]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-xl font-bold mb-3" style={{ color: '#F5F5F0', fontFamily: 'var(--font-playfair-display, serif)' }}>
              {isEs ? '¿Necesitas ayuda?' : 'Need help?'}
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#9CA3AF' }}>
              {isEs
                ? 'Si tuviste cualquier problema con la descarga o el pago, estamos para ayudarte.'
                : 'If you had any trouble with the download or payment, we are here to help.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={WA_SOPORTE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded font-semibold text-sm border transition-all hover:scale-105"
                style={{ borderColor: 'rgba(201,164,97,0.4)', color: '#F5F5F0' }}
              >
                {isEs ? 'Escribir por WhatsApp' : 'Message on WhatsApp'}
              </a>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded font-semibold text-sm border transition-all hover:scale-105"
                style={{ borderColor: 'rgba(201,164,97,0.4)', color: '#F5F5F0' }}
              >
                {SUPPORT_EMAIL}
              </a>
            </div>
            <div className="mt-10">
              <Link href={localePath('/')} className="text-sm transition-colors hover:text-[#C9A461]" style={{ color: '#6B7280' }}>
                {isEs ? '← Volver al inicio' : '← Back to home'}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
