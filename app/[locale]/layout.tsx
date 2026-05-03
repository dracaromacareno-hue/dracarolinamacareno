import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SchemaOrg, { websiteSchema, localBusinessSchema, personSchema } from '@/components/SchemaOrg';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { fontVariables } from '@/app/fonts';
import type { Metadata } from 'next';

const locales = ['es', 'en'] as const;

type Locale = typeof locales[number];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';

  return {
    title: {
      template: '%s | Dra. Carolina Macareno',
      default: isEs
        ? 'Dra. Carolina Macareno | Rehabilitadora Oral Medellín'
        : 'Dr. Carolina Macareno | Oral Rehabilitation Specialist Medellín',
    },
    description: isEs
      ? 'Especialista en rehabilitación oral, implantes dentales y diseño de sonrisa en El Poblado, Medellín. 17+ años de experiencia. Agenda tu cita hoy.'
      : 'Oral rehabilitation specialist, dental implants and smile design in El Poblado, Medellín. 17+ years of experience. Book your appointment today.',
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  const nav = (messages as Record<string, Record<string, string>>).nav || {};
  const footer = (messages as Record<string, Record<string, string>>).footer || {};

  return (
    <html lang={locale} className={fontVariables} suppressHydrationWarning>
      <head>
        <SchemaOrg schema={websiteSchema()} />
        <SchemaOrg schema={localBusinessSchema()} />
        <SchemaOrg schema={personSchema()} />
        <meta name="msvalidate.01" content="FE8586DD67E3BB8B97F7A39A25E8BB99" />
        <meta name="yandex-verification" content="7eb7b53e1708c7dd" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <GoogleAnalytics />
        <NextIntlClientProvider messages={messages}>
          <Navigation
            locale={locale}
            messages={{
              inicio: nav.inicio || 'Inicio',
              sobreMi: nav.sobreMi || 'Sobre mí',
              servicios: nav.servicios || 'Servicios',
              libros: nav.libros || 'Libros',
              casosClinicosLabel: nav.casosClinicosLabel || 'Casos Clínicos',
              blog: nav.blog || 'Blog',
              contacto: nav.contacto || 'Contacto',
              agendaCita: nav.agendaCita || 'Agenda tu Cita',
            }}
          />
          <main>{children}</main>
          <Footer
            locale={locale}
            messages={{
              tagline: footer.tagline || '',
              servicios: footer.servicios || 'Servicios',
              navegacion: footer.navegacion || 'Navegación',
              contacto: footer.contacto || 'Contacto',
              derechos: footer.derechos || 'Todos los derechos reservados.',
              autoridad: footer.autoridad || '',
              ubicacion: footer.ubicacion || '',
            }}
            navMessages={{
              inicio: nav.inicio || 'Inicio',
              sobreMi: nav.sobreMi || 'Sobre mí',
              libros: nav.libros || 'Libros',
              casosClinicosLabel: nav.casosClinicosLabel || 'Casos Clínicos',
              blog: nav.blog || 'Blog',
              contacto: nav.contacto || 'Contacto',
            }}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
