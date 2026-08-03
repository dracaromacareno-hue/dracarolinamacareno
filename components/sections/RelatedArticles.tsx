import Link from 'next/link';
import { blogPosts } from '@/lib/blog-posts';

/**
 * Espejo de RelatedServices: enlaza landings y páginas de servicio HACIA el blog.
 *
 * Por qué existe (julio 2026):
 * GSC reportaba 20 artículos en "Descubierta: actualmente sin indexar" con
 * "Último rastreo: N/D", es decir que Google NUNCA los fue a buscar. No era un
 * fallo técnico: estaban en el sitemap, enlazados desde /blog y devolviendo 200.
 *
 * La causa era que el blog era una isla. Al medir los enlaces salientes hacia
 * /blog/* desde las páginas con autoridad real:
 *
 *   /                                        0 enlaces  <-- la página más fuerte
 *   /all-on-4-medellin                       0 enlaces
 *   /servicios/rehabilitacion-oral-completa  0 enlaces
 *   /turismo-dental-puerto-rico              1 enlace
 *   /servicios/implantes-dentales            1 enlace
 *
 * Google solo alcanzaba el blog vía /blog (que él mismo rastrea poco) y vía
 * sitemap. En un dominio joven (la propiedad .com arranca el 27-abr-2026) eso
 * no basta para ganar prioridad de rastreo.
 *
 * Criterio de selección: NO se enlazan los 31 artículos. Se enlazan los de
 * intención comercial alta, priorizando turismo dental hispanohablante y
 * tratamientos de alto ticket, que son los de mayor ingreso por hora de silla.
 * Forzar la indexación de todo diluye la señal.
 *
 * Para agregar un enlace nuevo: añade el slug al array de la ruta. El título se
 * resuelve solo contra blog-posts.ts, así que nunca se desincroniza.
 */

type Props = {
  /** Ruta de la página que renderiza el bloque, ej. '/all-on-4-medellin'. */
  route: string;
  locale: string;
};

const ROUTE_TO_ARTICLES: Record<string, string[]> = {
  // Home: la página con más autoridad del sitio (9,22 % de CTR). Recibe los
  // tres artículos de intención más alta y más transversal.
  '/': [
    'costo-implantes-dentales-colombia',
    'dientes-mismo-dia-carga-inmediata-medellin',
    'duele-implante-dental-mitos',
  ],

  // All-on-4: ticket alto. Se enlaza la comparación de precios contra USA y la
  // decisión clínica All-on-4 vs All-on-6.
  '/all-on-4-medellin': [
    'all-on-4-colombia-vs-usa-guia-2025',
    'all-on-4-vs-all-on-6-diferencias',
    'dientes-mismo-dia-carga-inmediata-medellin',
  ],

  // Rehabilitación completa: el caso de mayor valor por hora de silla.
  '/servicios/rehabilitacion-oral-completa': [
    'como-elegir-rehabilitador-oral-medellin',
    'protesis-fija-atornillada',
    'sobredentadura-sobre-implantes',
  ],

  // Turismo desde Puerto Rico: el mercado con mejor CTR (2,70 %). Contenido de
  // logística del viaje, que es la duda real de ese paciente.
  '/turismo-dental-puerto-rico': [
    'cuantos-dias-medellin-implantes',
    'turismo-dental-desde-puerto-rico',
    'all-on-4-colombia-vs-usa-guia-2025',
  ],

  // Implantes dentales: hub de servicio. Objeciones y decisión de material.
  '/servicios/implantes-dentales': [
    'duele-implante-dental-mitos',
    'implante-titanio-vs-zirconio',
    'duracion-implantes-dentales',
  ],
};

export default function RelatedArticles({ route, locale }: Props) {
  const slugs = ROUTE_TO_ARTICLES[route];
  if (!slugs || slugs.length === 0) return null;

  const isEs = locale !== 'en';
  const prefix = isEs ? '' : '/en';

  const posts = slugs
    .map((slug) => blogPosts.find((p) => p.slug === slug && !p.redirected))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (posts.length === 0) return null;

  return (
    <section className="bg-[#FCFBF9] bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-2 text-center text-2xl font-semibold text-slate-900 md:text-3xl">
          {isEs ? 'Sigue leyendo' : 'Keep reading'}
        </h2>
        <p className="mb-10 text-center text-slate-600">
          {isEs
            ? 'Resuelve tus dudas antes de decidir'
            : 'Answer your questions before deciding'}
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`${prefix}/blog/${post.slug}`}
              className="group flex flex-col rounded-xl border border-slate-200 p-6 transition hover:border-slate-400 hover:shadow-md"
            >
              <span className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                {isEs ? post.category : post.categoryEn}
              </span>
              <h3 className="mb-3 text-lg font-semibold leading-snug text-slate-900 group-hover:underline">
                {isEs ? post.title : post.titleEn}
              </h3>
              <p className="line-clamp-3 text-sm text-slate-600">
                {isEs ? post.excerpt : post.excerptEn}
              </p>
              <span className="mt-4 text-sm font-medium text-slate-900">
                {isEs ? 'Leer artículo' : 'Read article'}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
