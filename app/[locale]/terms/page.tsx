import type { Metadata } from 'next';
import SchemaOrg, { breadcrumbSchema } from '@/components/SchemaOrg';

const BASE = 'https://dracarolinamacareno.com';
const LAST_UPDATED = '2026-05-20';

/**
 * Terms of Service, basic version covering jurisdiction, scope of
 * services, no-medical-advice disclaimer, and limits of liability.
 *
 * Required by:
 * - Google Ads (Healthcare and medicines policy), must be reachable
 *   from any landing page used as an ad destination
 * - Meta Ads (Business Tools terms)
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';
  const url = isEs ? `${BASE}/terms` : `${BASE}/en/terms`;
  return {
    title: isEs
      ? 'Términos y Condiciones | Dra. Carolina Macareno'
      : 'Terms of Service | Dr. Carolina Macareno',
    description: isEs
      ? 'Términos de uso del sitio web dracarolinamacareno.com y del servicio de consulta dental.'
      : 'Terms of use for the dracarolinamacareno.com website and dental consultation service.',
    alternates: {
      canonical: url,
      languages: {
        es: `${BASE}/terms`,
        en: `${BASE}/en/terms`,
      },
    },
    robots: { index: true, follow: true },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const url = isEs ? `${BASE}/terms` : `${BASE}/en/terms`;

  const breadcrumbs = breadcrumbSchema([
    { name: isEs ? 'Inicio' : 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: isEs ? 'Términos y Condiciones' : 'Terms of Service', url },
  ]);

  return (
    <>
      <SchemaOrg schema={breadcrumbs} />

      <article className="bg-[#070B14] text-[#F5F5F0] min-h-screen pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C9A461] text-xs font-medium tracking-widest uppercase mb-3">
            {isEs ? 'Documentos Legales' : 'Legal'}
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight"
            style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
          >
            {isEs ? 'Términos y Condiciones' : 'Terms of Service'}
          </h1>
          <p className="text-[#9CA3AF] text-sm mb-12">
            {isEs ? 'Última actualización' : 'Last updated'}: {LAST_UPDATED}
          </p>

          <div className="space-y-8 text-[#D1D5DB] text-base leading-relaxed">
            {isEs ? (
              <>
                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>1. Quién presta el servicio</h2>
                  <p>Este sitio web (dracarolinamacareno.com) y los servicios de consultoría odontológica los presta de forma profesional independiente la <strong>Dra. Carolina Macareno</strong>, con consultorio en Cra. 25 #1A Sur-155, Cons. 1353, Edificio Platinum Superior, El Poblado, Medellín, Colombia. Registrada como odontóloga ante el Tribunal Ético de Odontología de Colombia.</p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>2. Información del sitio web</h2>
                  <p>El contenido publicado en este sitio (blog, casos clínicos, calculadora de ahorro, FAQs) tiene <strong>fines educativos e informativos</strong>. <strong>No constituye un diagnóstico ni un plan de tratamiento.</strong> El diagnóstico y plan de tratamiento siempre se determinan después de una evaluación clínica completa.</p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>3. Rangos de precios y presupuestos</h2>
                  <p>Los precios mostrados en el sitio son <strong>rangos referenciales</strong> basados en casos típicos. El precio final se define después de una videoconsulta y/o consulta presencial donde se evalúan factores como estado del hueso, materiales seleccionados, complejidad del caso y tratamientos complementarios. El presupuesto formal siempre se entrega por escrito antes de iniciar cualquier procedimiento.</p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>4. Resultados clínicos</h2>
                  <p>Cada paciente es único. Los resultados mostrados en casos clínicos (antes/después, testimonios) son reales pero <strong>los resultados individuales pueden variar</strong> según el caso, la respuesta biológica de cada paciente y el cumplimiento de las indicaciones post-tratamiento. No se garantizan resultados específicos.</p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>5. Videoconsultas y pacientes internacionales</h2>
                  <p>La videoconsulta inicial gratuita es una evaluación preliminar para orientar el plan de tratamiento. No reemplaza una evaluación presencial. La evaluación presencial completa se realiza durante la primera visita al consultorio en Medellín.</p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>6. Propiedad intelectual</h2>
                  <p>Todo el contenido del sitio (textos, imágenes, casos clínicos, libro "El Poder de Tu Sonrisa", logo) es propiedad de la Dra. Carolina Macareno. Se permite citar y compartir contenido con atribución; no se permite reproducir el contenido completo sin autorización escrita.</p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>7. Jurisdicción</h2>
                  <p>Cualquier controversia relacionada con este sitio web o con los servicios profesionales prestados se rige por las leyes de la República de Colombia. La jurisdicción competente es Medellín, Antioquia.</p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>8. Cambios</h2>
                  <p>Estos términos pueden actualizarse. La versión vigente siempre está publicada en esta URL. Para cambios materiales notifico por email si tengo tu correo.</p>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>1. Who provides the service</h2>
                  <p>This website (dracarolinamacareno.com) and the dental consulting services are provided independently by <strong>Dr. Carolina Macareno</strong>, with practice at Cra. 25 #1A Sur-155, Cons. 1353, Edificio Platinum Superior, El Poblado, Medellín, Colombia. Registered as a dentist with the Tribunal Ético de Odontología de Colombia.</p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>2. Website information</h2>
                  <p>Content published on this site (blog, clinical cases, savings calculator, FAQs) is for <strong>educational and informational purposes</strong>. <strong>It does not constitute a diagnosis or treatment plan.</strong> Diagnosis and treatment plans are always determined after a complete clinical evaluation.</p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>3. Price ranges and quotes</h2>
                  <p>Prices shown on the site are <strong>reference ranges</strong> based on typical cases. The final price is set after a video and/or in-person consultation evaluating factors like bone status, selected materials, case complexity and complementary treatments. The formal written quote is always provided before starting any procedure.</p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>4. Clinical outcomes</h2>
                  <p>Each patient is unique. The results shown in clinical cases (before/after, testimonials) are real but <strong>individual results may vary</strong> depending on each case, each patient's biological response, and adherence to post-treatment instructions. Specific outcomes are not guaranteed.</p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>5. Video consultations and international patients</h2>
                  <p>The free initial video consultation is a preliminary evaluation to guide the treatment plan. It does not replace an in-person evaluation. The complete in-person evaluation takes place during the first visit to the practice in Medellín.</p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>6. Intellectual property</h2>
                  <p>All site content (text, images, clinical cases, the book "El Poder de Tu Sonrisa", logo) is property of Dr. Carolina Macareno. Quoting and sharing content with attribution is allowed; reproducing the full content without written authorization is not.</p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>7. Jurisdiction</h2>
                  <p>Any dispute related to this website or to the professional services provided is governed by the laws of the Republic of Colombia. The competent jurisdiction is Medellín, Antioquia.</p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>8. Changes</h2>
                  <p>These terms may be updated. The current version is always published at this URL. For material changes I notify by email if I have your address.</p>
                </section>
              </>
            )}
          </div>
        </div>
      </article>
    </>
  );
}
