import type { Metadata } from 'next';
import SchemaOrg, { breadcrumbSchema } from '@/components/SchemaOrg';

const BASE = 'https://dracarolinamacareno.com';

/**
 * Privacy Policy, bilingual, GDPR + CCPA + Colombia Ley 1581 / 2012 compliant.
 *
 * Purpose:
 * - Satisfies Google Ads "Personalization and data" policy
 * - Satisfies Meta Ads "Business Tools" terms
 * - Satisfies EU GDPR (Art. 13/14 information duties)
 * - Satisfies California CCPA / CPRA
 * - Satisfies Colombia Ley 1581 of 2012 ("Habeas Data")
 *
 * Last reviewed: 2026-05-20. To re-issue, update the LAST_UPDATED constant.
 */
const LAST_UPDATED = '2026-05-20';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';
  const url = isEs ? `${BASE}/privacy-policy` : `${BASE}/en/privacy-policy`;
  return {
    title: isEs
      ? 'Política de Privacidad | Dra. Carolina Macareno'
      : 'Privacy Policy | Dr. Carolina Macareno',
    description: isEs
      ? 'Cómo recopilamos, usamos y protegemos tu información en dracarolinamacareno.com. Cumplimos GDPR, CCPA y Ley 1581 de 2012 de Colombia.'
      : 'How we collect, use and protect your information at dracarolinamacareno.com. We comply with GDPR, CCPA and Colombia Law 1581 of 2012.',
    alternates: {
      canonical: url,
      languages: {
        es: `${BASE}/privacy-policy`,
        en: `${BASE}/en/privacy-policy`,
      },
    },
    robots: { index: true, follow: true },
  };
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEs = locale === 'es';
  const url = isEs ? `${BASE}/privacy-policy` : `${BASE}/en/privacy-policy`;

  const breadcrumbs = breadcrumbSchema([
    { name: isEs ? 'Inicio' : 'Home', url: isEs ? BASE : `${BASE}/en` },
    { name: isEs ? 'Política de Privacidad' : 'Privacy Policy', url },
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
            {isEs ? 'Política de Privacidad' : 'Privacy Policy'}
          </h1>
          <p className="text-[#9CA3AF] text-sm mb-12">
            {isEs ? 'Última actualización' : 'Last updated'}: {LAST_UPDATED}
          </p>

          <div className="prose prose-invert max-w-none space-y-8 text-[#D1D5DB] text-base leading-relaxed">
            {isEs ? (
              <>
                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>1. Quién soy</h2>
                  <p>
                    Esta web pertenece a la <strong>Dra. Carolina Macareno</strong>, odontóloga especialista en Rehabilitación Oral, con consultorio en Cra. 25 #1A Sur-155, Cons. 1353, Edificio Platinum Superior, El Poblado, Medellín, Colombia. Para asuntos de privacidad puedes escribirme a <a href="mailto:dracarolinamacarenob@gmail.com" className="text-[#C9A461] underline">dracarolinamacarenob@gmail.com</a> o por WhatsApp al <a href="https://wa.me/573163975232" className="text-[#C9A461] underline">+57 316 397 5232</a>.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>2. Qué información recolecto</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Formulario de contacto:</strong> nombre, email, teléfono o WhatsApp, tipo de tratamiento de interés y mensaje opcional.</li>
                    <li><strong>WhatsApp:</strong> el número y la conversación que inicias conmigo (la conversación queda en mi celular y en WhatsApp Business, encriptada end-to-end).</li>
                    <li><strong>Cookies de análisis (Google Analytics 4):</strong> tipo de dispositivo, navegador, país aproximado, páginas que viste, tiempo en la página, fuente de tráfico. Esta información es anonimizada y se usa solo para entender el comportamiento general de los visitantes.</li>
                    <li><strong>Cookies de marketing (Meta Pixel):</strong> registra eventos como "viste la página de contacto" o "hiciste click en WhatsApp" para optimizar mis anuncios en Facebook e Instagram.</li>
                    <li><strong>Servidores:</strong> mi proveedor de hosting (Vercel) registra la IP de tu visita como parte del logging técnico estándar. Esta información se borra en 30 días.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>3. Para qué uso esta información</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Responder a tus consultas por formulario o WhatsApp.</li>
                    <li>Coordinar tu tratamiento (planificación, videoconsultas, presupuesto, agendamiento).</li>
                    <li>Mejorar el sitio web y entender qué contenido es útil.</li>
                    <li>Optimizar mis anuncios para llegar a personas con intereses similares a los tuyos.</li>
                    <li>Cumplir obligaciones legales y profesionales (historia clínica, facturación).</li>
                  </ul>
                  <p className="mt-3"><strong>No vendo, alquilo ni comparto tu información personal con terceros para fines de marketing.</strong></p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>4. Con quién comparto datos (proveedores)</h2>
                  <p>Uso los siguientes proveedores que pueden procesar parte de tu información:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong>Resend</strong> (resend.com), envío de los correos del formulario. Servidor en USA.</li>
                    <li><strong>Google Analytics 4</strong> (google.com), análisis de tráfico web. Servidor global.</li>
                    <li><strong>Meta Pixel + Conversions API</strong> (meta.com), optimización de anuncios. Servidor USA.</li>
                    <li><strong>Vercel</strong> (vercel.com), hosting del sitio. Servidor USA/EU.</li>
                    <li><strong>WhatsApp Business</strong> (Meta), conversaciones contigo.</li>
                    <li><strong>GoHighLevel</strong> (CRM), gestión de leads y agendamiento (uso interno).</li>
                  </ul>
                  <p className="mt-3">Cada uno tiene su propia política de privacidad y cumple GDPR/CCPA.</p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>5. Tus derechos</h2>
                  <p>Tienes derecho a:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong>Acceder</strong> a la información que tengo sobre ti.</li>
                    <li><strong>Rectificar</strong> datos incorrectos.</li>
                    <li><strong>Eliminar</strong> tus datos (derecho al olvido).</li>
                    <li><strong>Oponerte</strong> al uso de tus datos para marketing.</li>
                    <li><strong>Portabilidad</strong>: pedir una copia de tus datos en formato estándar.</li>
                    <li><strong>Retirar el consentimiento</strong> para cookies en cualquier momento (botón "Configuración de cookies" en el footer).</li>
                  </ul>
                  <p className="mt-3">Para ejercer cualquiera de estos derechos, escríbeme a <a href="mailto:dracarolinamacarenob@gmail.com" className="text-[#C9A461] underline">dracarolinamacarenob@gmail.com</a>. Respondo en menos de 30 días.</p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>6. Pacientes en Europa (GDPR)</h2>
                  <p>Si vives en la Unión Europea, Reino Unido, Suiza o Noruega: las cookies de análisis y marketing solo se activan si das tu consentimiento explícito a través del banner. Puedes retirarlo en cualquier momento. La base legal para procesar tus datos es tu consentimiento (Art. 6.1.a GDPR) y, cuando aplica, la ejecución de un contrato de tratamiento (Art. 6.1.b).</p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>7. Pacientes en California (CCPA / CPRA)</h2>
                  <p>Si resides en California tienes derecho a saber qué información personal recolecto, a pedir que la borre, y a optar por no compartirla con socios publicitarios. No vendo información personal en el sentido del CCPA. Para ejercer estos derechos, contáctame por email.</p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>8. Pacientes en Colombia (Ley 1581 de 2012, Habeas Data)</h2>
                  <p>Como ciudadano colombiano tienes los mismos derechos descritos en la sección 5. Para reclamos relacionados con el tratamiento de datos personales también puedes acudir a la Superintendencia de Industria y Comercio (SIC).</p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>9. Información médica</h2>
                  <p>Las historias clínicas se guardan en mi sistema clínico privado (no en esta página web) y se manejan bajo las normas de la Resolución 1995 de 1999 del Ministerio de Salud de Colombia. La información médica nunca se comparte sin autorización expresa.</p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>10. Menores</h2>
                  <p>Esta web no está dirigida a menores de 13 años. No recolecto deliberadamente datos de menores. Si crees que un menor envió información, escríbeme y la borraré.</p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>11. Cambios a esta política</h2>
                  <p>Si modifico esta política, actualizo la fecha arriba ("Última actualización"). Para cambios materiales, te notificaré por email si tengo tu correo. La versión vigente siempre estará publicada en esta URL.</p>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>1. Who I am</h2>
                  <p>
                    This website belongs to <strong>Dr. Carolina Macareno</strong>, oral rehabilitation specialist, with practice at Cra. 25 #1A Sur-155, Cons. 1353, Edificio Platinum Superior, El Poblado, Medellín, Colombia. For privacy matters write to <a href="mailto:dracarolinamacarenob@gmail.com" className="text-[#C9A461] underline">dracarolinamacarenob@gmail.com</a> or via WhatsApp at <a href="https://wa.me/573163975232" className="text-[#C9A461] underline">+57 316 397 5232</a>.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>2. What information I collect</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Contact form:</strong> name, email, phone or WhatsApp, treatment of interest and optional message.</li>
                    <li><strong>WhatsApp:</strong> the number and conversation you start with me (the conversation stays on my phone and WhatsApp Business, end-to-end encrypted).</li>
                    <li><strong>Analytics cookies (Google Analytics 4):</strong> device type, browser, approximate country, pages viewed, time on page, traffic source. This information is anonymized and only used to understand general visitor behavior.</li>
                    <li><strong>Marketing cookies (Meta Pixel):</strong> records events like "viewed the contact page" or "clicked WhatsApp" to optimize my Facebook and Instagram ads.</li>
                    <li><strong>Servers:</strong> my hosting provider (Vercel) records your visit IP as part of standard technical logging. This information is deleted after 30 days.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>3. Why I use this information</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Respond to your inquiries by form or WhatsApp.</li>
                    <li>Coordinate your treatment (planning, video consultations, quotes, scheduling).</li>
                    <li>Improve the website and understand what content is useful.</li>
                    <li>Optimize my ads to reach people with interests similar to yours.</li>
                    <li>Meet legal and professional obligations (medical records, invoicing).</li>
                  </ul>
                  <p className="mt-3"><strong>I do not sell, rent or share your personal information with third parties for marketing purposes.</strong></p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>4. Who I share data with (providers)</h2>
                  <p>I use the following providers that may process part of your information:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong>Resend</strong> (resend.com), sending form emails. Server in USA.</li>
                    <li><strong>Google Analytics 4</strong> (google.com), web traffic analysis. Global server.</li>
                    <li><strong>Meta Pixel + Conversions API</strong> (meta.com), ad optimization. USA server.</li>
                    <li><strong>Vercel</strong> (vercel.com), website hosting. USA/EU servers.</li>
                    <li><strong>WhatsApp Business</strong> (Meta), conversations with you.</li>
                    <li><strong>GoHighLevel</strong> (CRM), lead management and scheduling (internal use).</li>
                  </ul>
                  <p className="mt-3">Each has its own privacy policy and complies with GDPR/CCPA.</p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>5. Your rights</h2>
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong>Access</strong> the information I hold about you.</li>
                    <li><strong>Correct</strong> incorrect data.</li>
                    <li><strong>Delete</strong> your data (right to be forgotten).</li>
                    <li><strong>Object</strong> to use of your data for marketing.</li>
                    <li><strong>Portability</strong>: request a copy of your data in a standard format.</li>
                    <li><strong>Withdraw consent</strong> for cookies at any time ("Cookie settings" button in the footer).</li>
                  </ul>
                  <p className="mt-3">To exercise any of these rights, email me at <a href="mailto:dracarolinamacarenob@gmail.com" className="text-[#C9A461] underline">dracarolinamacarenob@gmail.com</a>. I respond within 30 days.</p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>6. EU / UK patients (GDPR)</h2>
                  <p>If you live in the EU, UK, Switzerland or Norway: analytics and marketing cookies only activate after your explicit consent via the banner. You can withdraw it at any time. The legal basis for processing your data is your consent (Art. 6.1.a GDPR) and, where applicable, the performance of a treatment contract (Art. 6.1.b).</p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>7. California patients (CCPA / CPRA)</h2>
                  <p>If you reside in California you have the right to know what personal information I collect, to request that I delete it, and to opt out of sharing it with advertising partners. I do not "sell" personal information within the meaning of CCPA. To exercise these rights, contact me by email.</p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>8. Colombian patients (Law 1581 of 2012, Habeas Data)</h2>
                  <p>As a Colombian citizen you have the same rights described in section 5. For complaints related to the processing of personal data you may also contact the Superintendencia de Industria y Comercio (SIC).</p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>9. Medical information</h2>
                  <p>Medical records are stored in my private clinical system (not this website) and are managed under Colombian Ministry of Health Resolution 1995 of 1999. Medical information is never shared without explicit authorization.</p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>10. Minors</h2>
                  <p>This website is not directed at children under 13. I do not knowingly collect data from minors. If you believe a minor has sent information, write to me and I will delete it.</p>
                </section>

                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#C9A461] mb-3" style={{ fontFamily: 'var(--font-playfair-display, serif)' }}>11. Changes to this policy</h2>
                  <p>If I update this policy, I refresh the date above ("Last updated"). For material changes, I will notify you by email if I have your address. The current version is always published at this URL.</p>
                </section>
              </>
            )}
          </div>
        </div>
      </article>
    </>
  );
}
