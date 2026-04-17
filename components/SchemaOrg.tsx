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
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Universidad CES',
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
    name: 'Dra. Carolina Macareno - Rehabilitadora Oral',
    description: 'Especialista en rehabilitación oral, implantes dentales y diseño de sonrisa en Medellín.',
    url: 'https://dracarolinamacareno.com',
    telephone: '+573163975232',
    priceRange: '$$$',
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
      latitude: 6.20396,
      longitude: -75.57467,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '14:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/dracarolinamacareno',
      'https://www.facebook.com/dracarolinamacareno',
    ],
    medicalSpecialty: 'Dentistry',
    availableService: [
      { '@type': 'MedicalProcedure', name: 'Implantes Dentales' },
      { '@type': 'MedicalProcedure', name: 'Prótesis Fija Atornillada' },
      { '@type': 'MedicalProcedure', name: 'Diseño de Sonrisa Cerámico' },
      { '@type': 'MedicalProcedure', name: 'Rehabilitación Oral Completa' },
      { '@type': 'MedicalProcedure', name: 'Estética Dental Avanzada' },
    ],
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
