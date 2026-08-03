import Link from 'next/link';
import Image from 'next/image';
import MedicalDisclaimer from './MedicalDisclaimer';
import WhatsAppLink from './WhatsAppLink';

interface FooterProps {
  locale: string;
  messages: {
    tagline: string;
    servicios: string;
    navegacion: string;
    contacto: string;
    derechos: string;
    autoridad: string;
    ubicacion: string;
  };
  navMessages: {
    inicio: string;
    sobreMi: string;
    libros: string;
    casosClinicosLabel: string;
    blog: string;
    contacto: string;
  };
}

export default function Footer({ locale, messages, navMessages }: FooterProps) {
  const localePath = (path: string) => {
    if (locale === 'es') return path;
    return `/en${path}`;
  };

  const year = new Date().getFullYear();

  // Internal links to the REAL service pages (was '/#servicios' anchor → made
  // every /servicios/* sub-page an orphan with no internal links, which GSC
  // surfaced as "Descubierta: actualmente sin indexar". May 2026 SEO fix.
  const services = [
    { label: 'Implantes Dentales', href: '/servicios/implantes-dentales' },
    { label: 'Rehabilitación Oral', href: '/servicios/rehabilitacion-oral-completa' },
    { label: 'Diseño de Sonrisa', href: '/servicios/diseno-de-sonrisa' },
    { label: 'Prótesis Fija', href: '/servicios/protesis-fija' },
    { label: 'Estética Dental', href: '/servicios/estetica-dental' },
    { label: 'Endodoncia', href: '/servicios/endodoncia' },
    { label: 'Periodoncia', href: '/servicios/periodoncia' },
    { label: 'Ortodoncia', href: '/servicios/ortodoncia' },
    { label: 'Cirugía Maxilofacial', href: '/servicios/cirugia-maxilofacial' },
    { label: 'Consulta de Diagnóstico', href: '/servicios/consulta-diagnostico' },
  ];

  const isEs = locale === 'es';

  // High-value commercial landings + authority pages that were orphaned (no
  // site-wide internal links → GSC "Descubierta: actualmente sin indexar").
  // Linking them from the footer gives every page a site-wide inbound link,
  // which is what unblocks crawl/indexing. Labels switch by locale.
  const destacados = [
    { label: isEs ? 'All-on-4 en Medellín' : 'All-on-4 in Medellín', href: '/all-on-4-medellin' },
    { label: isEs ? 'Turismo Dental Colombia' : 'Dental Tourism Colombia', href: '/dental-tourism-colombia' },
    { label: isEs ? 'Implantes en Colombia para Pacientes de EE.UU.' : 'Dental Implants for US Patients', href: '/dental-implants-for-us-patients' },
    { label: isEs ? 'Turismo Dental para Puerto Rico' : 'Dental Tourism for Puerto Rico', href: '/turismo-dental-puerto-rico' },
    { label: isEs ? 'Turismo Dental para Panamá' : 'Dental Tourism for Panama', href: '/turismo-dental-panama' },
    { label: isEs ? 'Coronas y Carillas en Zirconio' : 'Zirconia Crowns & Veneers', href: '/coronas-zirconio-carillas' },
    { label: isEs ? 'Sobre la Dra. Carolina Macareno' : 'About Dr. Carolina Macareno', href: '/dra-carolina-macareno' },
  ];

  return (
    <footer className="bg-[#1F2937] border-t border-[#1F2937]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link
              href={localePath('/')}
              aria-label={locale === 'es' ? 'Dra. Carolina Macareno - Inicio' : 'Dr. Carolina Macareno - Home'}
              className="inline-block mb-4 opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/images/logo-dark.png"
                alt="Dra. Carolina Macareno"
                width={140}
                height={70}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6">
              {messages.tagline}
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/dracarolinamacareno"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded border border-[#1F2937] flex items-center justify-center text-[#9CA3AF] hover:text-[#C9A461] hover:border-[#C9A461] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/dracarolinamacareno"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded border border-[#1F2937] flex items-center justify-center text-[#9CA3AF] hover:text-[#C9A461] hover:border-[#C9A461] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/*
                Google Business Profile y LinkedIn añadidos (agosto 2026).

                El pie solo tenía Instagram, Facebook y WhatsApp, mientras el
                schema del sitio ya declaraba los tres perfiles que faltaban. Que
                el schema los nombre y la página no los enlace es justo lo
                contrario de lo que Google espera: los enlaces visibles son los
                que confirman que los perfiles son de la misma persona.

                Google Business Profile va PRIMERO a propósito. Es el que más
                pesa de todos: ahí viven las 26 reseñas y es lo que alimenta
                el mapa local, que es de donde llegan los pacientes de Medellín.
                Los clics del sitio hacia la ficha cuentan como actividad.

                YouTube NO se enlaza todavía: el canal existe pero tiene 3 videos
                con 1, 4 y 8 vistas (verificado 3-ago-2026). Un visitante que entra y no
                encuentra material sale con menos confianza que si nunca hubiera
                visto el enlace. Se queda en el `sameAs` del schema, que solo
                declara identidad y no promete contenido, y se añade aquí cuando
                el canal tenga videos que valga la pena mostrar.

                Regla general: comprobar cualquier perfil antes de enlazarlo.
              */}
              <a
                href="https://maps.app.goo.gl/bNw5rUJT1DVBpbRj9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded border border-[#1F2937] flex items-center justify-center text-[#9CA3AF] hover:text-[#C9A461] hover:border-[#C9A461] transition-colors"
                aria-label={locale === 'en' ? 'Google Business Profile and reviews' : 'Perfil y reseñas en Google'}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 11v3.4h4.8a4.2 4.2 0 0 1-1.8 2.7l2.9 2.3c1.7-1.6 2.7-3.9 2.7-6.7 0-.6-.1-1.2-.2-1.7z" />
                  <path d="M12 20.5c2.4 0 4.5-.8 6-2.1l-2.9-2.3c-.8.6-1.9.9-3.1.9-2.4 0-4.4-1.6-5.1-3.8H3.9v2.4A9 9 0 0 0 12 20.5z" />
                  <path d="M6.9 13.2a5.4 5.4 0 0 1 0-3.4V7.4H3.9a9 9 0 0 0 0 8.2z" />
                  <path d="M12 6.6c1.3 0 2.5.5 3.5 1.4l2.6-2.6A9 9 0 0 0 3.9 7.4l3 2.4c.7-2.2 2.7-3.2 5.1-3.2z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/dracarolinamacareno"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded border border-[#1F2937] flex items-center justify-center text-[#9CA3AF] hover:text-[#C9A461] hover:border-[#C9A461] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
              <WhatsAppLink
                message={locale === 'en' ? 'Hi, I would like to book an evaluation.' : 'Hola, quiero agendar una valoración.'}
                locale={locale as 'es' | 'en'}
                trackingLabel="footer_social_icon"
                className="w-9 h-9 rounded border border-[#1F2937] flex items-center justify-center text-[#9CA3AF] hover:text-[#C9A461] hover:border-[#C9A461] transition-colors"
                ariaLabel="WhatsApp"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </WhatsAppLink>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#F5F5F0] font-semibold text-sm tracking-widest uppercase mb-4">
              {messages.servicios}
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={localePath(service.href)}
                    className="text-[#9CA3AF] hover:text-[#C9A461] text-sm transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[#F5F5F0] font-semibold text-sm tracking-widest uppercase mb-4">
              {messages.navegacion}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href={localePath('/')} className="text-[#9CA3AF] hover:text-[#C9A461] text-sm transition-colors">
                  {navMessages.inicio}
                </Link>
              </li>
              <li>
                <Link href={localePath('/sobre-mi')} className="text-[#9CA3AF] hover:text-[#C9A461] text-sm transition-colors">
                  {navMessages.sobreMi}
                </Link>
              </li>
              <li>
                <Link href={localePath('/libros')} className="text-[#9CA3AF] hover:text-[#C9A461] text-sm transition-colors">
                  {navMessages.libros}
                </Link>
              </li>
              <li>
                <Link href={localePath('/casos-clinicos')} className="text-[#9CA3AF] hover:text-[#C9A461] text-sm transition-colors">
                  {navMessages.casosClinicosLabel}
                </Link>
              </li>
              <li>
                <Link href={localePath('/blog')} className="text-[#9CA3AF] hover:text-[#C9A461] text-sm transition-colors">
                  {navMessages.blog}
                </Link>
              </li>
              <li>
                <Link href={localePath('/contacto')} className="text-[#9CA3AF] hover:text-[#C9A461] text-sm transition-colors">
                  {navMessages.contacto}
                </Link>
              </li>
              {destacados.map((item) => (
                <li key={item.href}>
                  <Link href={localePath(item.href)} className="text-[#9CA3AF] hover:text-[#C9A461] text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#F5F5F0] font-semibold text-sm tracking-widest uppercase mb-4">
              {messages.contacto}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#C9A461] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[#9CA3AF] text-sm">{messages.ubicacion}</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#C9A461] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <WhatsAppLink
                  message={locale === 'en' ? 'Hi, I would like to book an evaluation.' : 'Hola, quiero agendar una valoración.'}
                  locale={locale as 'es' | 'en'}
                  trackingLabel="footer_phone"
                  className="text-[#9CA3AF] hover:text-[#C9A461] text-sm transition-colors"
                >
                  +57 316 397 5232
                </WhatsAppLink>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#C9A461] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:dracarolinamacarenob@gmail.com" className="text-[#9CA3AF] hover:text-[#C9A461] text-sm transition-colors">
                  dracarolinamacarenob@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Medical Disclaimer + Privacy/Terms/Cookie links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <MedicalDisclaimer locale={locale} />
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1F2937]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#9CA3AF] text-xs">
            © {year} Dra. Carolina Macareno. {messages.derechos}
          </p>
          <p className="text-[#9CA3AF] text-xs opacity-60">
            {messages.autoridad}
          </p>
        </div>
      </div>
    </footer>
  );
}
