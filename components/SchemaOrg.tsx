interface SchemaOrgProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
}

export default function SchemaOrg({ schema }: SchemaOrgProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Dra. Carolina Macareno',
    url: 'https://dracarolinamacareno.com',
    description: 'Especialista en Rehabilitación Oral, Implantes Dentales y Diseño de Sonrisa en Medellín, Colombia',
    inLanguage: ['es', 'en'],
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://dracarolinamacareno.com/blog?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Carolina Macareno',
    honorificPrefix: 'Dra.',
    jobTitle: 'Especialista en Rehabilitación Oral',
    description: 'Odontóloga especialista en rehabilitación oral, implantes dentales y diseño de sonrisa con más de 17 años de experiencia en Medellín, Colombia.',
    url: 'https://dracarolinamacareno.com',
    image: 'https://dracarolinamacareno.com/dr-carolina-macareno.jpg',
    sameAs: [
      'https://www.instagram.com/dracarolinamacareno',
      'https://www.facebook.com/dracarolinamacareno',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Medellín',
      addressRegion: 'Antioquia',
      addressCountry: 'CO',
      streetAddress: 'El Poblado',
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Universidad El Bosque',
        description: 'Odontología',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Universidad CES',
        description: 'Especialización en Rehabilitación Oral',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'FACOP',
        description: 'Implantología',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'New York University',
        description: 'Estética Dental',
      },
    ],
    knowsAbout: [
      'Rehabilitación Oral',
      'Implantes Dentales',
      'Diseño de Sonrisa',
      'Prótesis Fija',
      'Estética Dental',
    ],
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    '@id': 'https://dracarolinamacareno.com/#dentist',
    name: 'Dra. Carolina Macareno',
    alternateName: [
      'Dra. Carolina Margarita Macareno',
      'Dra. Carolina Margarita Macareno Baquero',
      'Dra. Carolina Macareno - Rehabilitadora Oral',
    ],
    description:
      'Especialista en Rehabilitación Oral Estética e Implantología en Medellín con 17 años de experiencia y más de 3,500 pacientes tratados. Consultorio en El Poblado. Implantes cigomáticos, subperiósticos, diseño de sonrisa digital, All-on-4, All-on-6. Atención a pacientes locales e internacionales.',
    url: 'https://dracarolinamacareno.com',
    logo: 'https://dracarolinamacareno.com/logo.png',
    image: [
      'https://dracarolinamacareno.com/dr-carolina-macareno.jpg',
      'https://dracarolinamacareno.com/images/consultorio.jpg',
    ],
    telephone: '+573163975232',
    email: 'contacto@dracarolinamacareno.com',
    priceRange: '$$$',
    currenciesAccepted: 'COP, USD',
    paymentAccepted: 'Cash, Credit Card, Debit Card, PSE, Bank Transfer, NFC',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Cra. 25 #1A Sur-155, Consultorio 1353, Edificio Platinum Superior',
      addressLocality: 'Medellín',
      addressRegion: 'Antioquia',
      postalCode: '050021',
      addressCountry: 'CO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 6.1957519,
      longitude: -75.5587065,
    },
    hasMap: 'https://maps.app.goo.gl/bNw5rUJT1DVBpbRj9',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '12:30',
      },
    ],
    sameAs: [
      'https://maps.app.goo.gl/bNw5rUJT1DVBpbRj9',
      'https://www.instagram.com/dracarolinamacareno',
      'https://www.facebook.com/dracarolinamacareno',
      'https://www.doctoralia.co/carolina-macareno/odontologo/medellin',
      'https://www.topdoctors.com.co/doctor/carolina-margarita-macareno-baquero/',
      'https://www.doctoranytime.co/d/odontologo/carolina-margarita-macareno-baquero-2',
      'https://www.linkedin.com/in/dracarolinamacareno',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '44',
      bestRating: '5',
      worstRating: '1',
    },
    medicalSpecialty: ['Dentistry', 'Oral Rehabilitation'],
    additionalType: 'https://schema.org/MedicalBusiness',
    areaServed: [
      { '@type': 'City', name: 'Medellín' },
      { '@type': 'City', name: 'Envigado' },
      { '@type': 'City', name: 'Sabaneta' },
      { '@type': 'City', name: 'Bello' },
      { '@type': 'City', name: 'Rionegro' },
      { '@type': 'City', name: 'La Ceja' },
      { '@type': 'City', name: 'Retiro' },
      { '@type': 'City', name: 'Marinilla' },
      { '@type': 'City', name: 'La Estrella' },
      { '@type': 'Country', name: 'Estados Unidos' },
      { '@type': 'Country', name: 'Panamá' },
      { '@type': 'Country', name: 'Puerto Rico' },
      { '@type': 'Country', name: 'Costa Rica' },
    ],
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'Implantes Dentales',
        url: 'https://dracarolinamacareno.com/servicios/implantes-dentales',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Implantes Cigomáticos',
        url: 'https://dracarolinamacareno.com/servicios/implantes-dentales',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Implantes Subperiósticos',
        url: 'https://dracarolinamacareno.com/servicios/implantes-dentales',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Prótesis Fija Atornillada (All-on-4, All-on-6)',
        url: 'https://dracarolinamacareno.com/servicios/protesis-fija',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Diseño de Sonrisa Digital',
        url: 'https://dracarolinamacareno.com/servicios/diseno-de-sonrisa',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Carillas y Coronas Cerámicas',
        url: 'https://dracarolinamacareno.com/servicios/estetica-dental',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Rehabilitación Oral Completa',
        url: 'https://dracarolinamacareno.com/servicios/rehabilitacion-oral-completa',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Blanqueamiento Dental Profesional',
        url: 'https://dracarolinamacareno.com/servicios/estetica-dental',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Ortodoncia Invisible y con Brackets',
        url: 'https://dracarolinamacareno.com/servicios/ortodoncia',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Endodoncia con Microscopio',
        url: 'https://dracarolinamacareno.com/servicios/endodoncia',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Periodoncia',
        url: 'https://dracarolinamacareno.com/servicios/periodoncia',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Cirugía Oral y Maxilofacial',
        url: 'https://dracarolinamacareno.com/servicios/cirugia-maxilofacial',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Protocolo Sonrisa 360° - Evaluación Integral',
        url: 'https://dracarolinamacareno.com/servicios/consulta-diagnostico',
      },
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'Protocolo Sonrisa 360°',
        description:
          'Evaluación integral con radiografía panorámica, escaneo digital 3D, limpieza profesional, diseño de sonrisa y plan de tratamiento personalizado en una sola cita.',
        price: '350000',
        priceCurrency: 'COP',
        url: 'https://dracarolinamacareno.com/servicios/consulta-diagnostico',
      },
    ],
    knowsLanguage: ['es', 'en'],
    slogan: 'Sonríe otra vez',
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  url: string;
  publishDate: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    author: {
      '@type': 'Person',
      name: 'Dra. Carolina Macareno',
      url: 'https://dracarolinamacareno.com/sobre-mi',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dra. Carolina Macareno',
      logo: {
        '@type': 'ImageObject',
        url: 'https://dracarolinamacareno.com/logo.png',
      },
    },
    image: article.image || 'https://dracarolinamacareno.com/og-image.jpg',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  };
}

export function bookSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: 'El poder de tu sonrisa',
    author: {
      '@type': 'Person',
      name: 'Dra. Carolina Macareno',
    },
    description: 'Guía completa sobre rehabilitación oral, implantes dentales y el impacto psicológico de una sonrisa saludable.',
    inLanguage: 'es',
    genre: 'Medical / Health',
    url: 'https://dracarolinamacareno.com/libros/el-poder-de-tu-sonrisa',
  };
}

export function medicalServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  keywords?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: service.name,
    description: service.description,
    url: service.url,
    procedureType: 'https://schema.org/SurgicalProcedure',
    followup: 'Seguimiento post-procedimiento incluido',
    preparation: 'Consulta de diagnóstico y plan de tratamiento personalizado',
    recognizingAuthority: {
      '@type': 'Organization',
      name: 'Tribunal Ético de Odontología de Colombia',
    },
    relevantSpecialty: {
      '@type': 'MedicalSpecialty',
      name: 'Odontología y Rehabilitación Oral',
    },
    provider: {
      '@type': 'Dentist',
      name: 'Dra. Carolina Macareno',
      url: 'https://dracarolinamacareno.com',
      telephone: '+573163975232',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Cra. 25 #1A Sur-155, Consultorio 1353, Edificio Platinum Superior',
        addressLocality: 'Medellín',
        addressRegion: 'Antioquia',
        addressCountry: 'CO',
      },
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
