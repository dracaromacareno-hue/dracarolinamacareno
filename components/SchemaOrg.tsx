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
      reviewCount: '55', // 12 en Google + ~43 migrables desde Doctoralia
      bestRating: '5',
      worstRating: '1',
    },
    // Individual reviews captured from Google as of 2026-04-30. These give
    // search engines actual quote-level testimonials to surface as snippets.
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Sebastian Felipe Ballen Wilches' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        datePublished: '2026-04-27',
        reviewBody:
          'El servicio es excelente, tengo un problema grande en las encías y me ayudaron a aclarar muchas dudas, la doctora me explicó con paciencia todo el proceso del tratamiento.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Cristian Duque' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        datePublished: '2026-04-23',
        reviewBody:
          'Me realicé un diseño de sonrisa con la doctora Carolina Macareno con resultado maravilloso. Muy recomendada.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Beatriz Rojo' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        datePublished: '2026-04-23',
        reviewBody:
          'Five-star experience with Dr. Carolina Macareno. Professional team and excellent care.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Eladio Naranjo' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        datePublished: '2026-04-23',
        reviewBody:
          'Excelente profesional. La Dra. Carolina Macareno no solo es experta en su área, sino que tiene esa calidez humana que hace que el paciente se sienta acompañado y comprendido en todo el proceso.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Antonio Arroyave' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        datePublished: '2026-04-23',
        reviewBody:
          '¡Súper recomendada la Dra. Carolina Macareno! Excelente profesional y una atención impecable.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Marta Restrepo' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        datePublished: '2026-04-23',
        reviewBody:
          'Excelente odontóloga, excelente manejo con los pacientes y un trabajo impecable. Muy agradecidos Doctora Carolina.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Edilberto Rafael Bertel Suárez' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        datePublished: '2026-04-23',
        reviewBody:
          'Excelente en todo sentido. Profesionalismo. Atención personalizada. Horario consensuado con el paciente. Trabajo técnicamente excelso. Súper contento y agradecido con el resultado.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Lucas Narvaez' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        datePublished: '2026-04-23',
        reviewBody: 'Excelente servicio y asesoría profesional.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Oscar Pérez' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        datePublished: '2026-03-05',
        reviewBody:
          'Me realicé un diseño de sonrisa en cerámica con la queridísima doctora Carolina Macareno, y me fue muy bien, quedé muy contento con el resultado.',
      },
    ],
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

// Shared geo-coverage that every clinical service inherits so search engines
// know a procedure in El Poblado is offered to local patients across Antioquia
// AND to the dental-tourism corridors in the US, Panamá, Puerto Rico, Costa Rica.
const SERVICE_AREA = [
  { '@type': 'City', name: 'Medellín', containedInPlace: { '@type': 'AdministrativeArea', name: 'Antioquia' } },
  { '@type': 'City', name: 'Envigado' },
  { '@type': 'City', name: 'Sabaneta' },
  { '@type': 'City', name: 'Bello' },
  { '@type': 'City', name: 'Rionegro' },
  { '@type': 'City', name: 'La Ceja' },
  { '@type': 'City', name: 'La Estrella' },
  { '@type': 'AdministrativeArea', name: 'Antioquia' },
  { '@type': 'Country', name: 'Estados Unidos' },
  { '@type': 'Country', name: 'Panamá' },
  { '@type': 'Country', name: 'Puerto Rico' },
  { '@type': 'Country', name: 'Costa Rica' },
];

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
      areaServed: SERVICE_AREA,
    },
    availableAtOrFrom: {
      '@type': 'Place',
      name: 'Clínica Privada Dra. Carolina Macareno',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Cra. 25 #1A Sur-155, Consultorio 1353, Edificio Platinum Superior',
        addressLocality: 'Medellín',
        addressRegion: 'Antioquia',
        postalCode: '050021',
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

// Wrap a service detail page as MedicalWebPage instead of generic WebPage.
// Surfaces medical-specific signals (audience, specialty, last review date) that
// Google uses for medical content trust scoring.
export function medicalWebPageSchema(page: {
  url: string;
  name: string;
  description: string;
  procedureName: string;
  lastReviewed?: string; // ISO date, defaults to today
}) {
  const today = new Date().toISOString().split('T')[0];
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    url: page.url,
    name: page.name,
    description: page.description,
    inLanguage: page.url.includes('/en/') ? 'en' : 'es',
    audience: {
      '@type': 'MedicalAudience',
      audienceType: 'Patient',
      healthCondition: {
        '@type': 'MedicalCondition',
        name: page.procedureName,
      },
    },
    about: {
      '@type': 'MedicalProcedure',
      name: page.procedureName,
    },
    specialty: {
      '@type': 'MedicalSpecialty',
      name: 'Odontología y Rehabilitación Oral',
    },
    lastReviewed: page.lastReviewed || today,
    reviewedBy: {
      '@type': 'Person',
      name: 'Dra. Carolina Macareno',
      jobTitle: 'Especialista en Rehabilitación Oral',
      url: 'https://dracarolinamacareno.com/sobre-mi',
    },
  };
}

// Individual reviews — much more powerful than the aggregateRating alone.
// Google can show review snippets in rich results when each review is structured.
export function reviewsSchema(
  reviews: {
    author: string;
    rating: number; // 1-5
    text: string;
    datePublished: string; // ISO date
  }[],
) {
  return reviews.map((r) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Dentist',
      name: 'Dra. Carolina Macareno',
      url: 'https://dracarolinamacareno.com',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: r.rating,
      bestRating: 5,
      worstRating: 1,
    },
    author: {
      '@type': 'Person',
      name: r.author,
    },
    reviewBody: r.text,
    datePublished: r.datePublished,
    publisher: {
      '@type': 'Organization',
      name: 'Google',
    },
  }));
}

// VideoObject schema — required for any YouTube embed to surface in
// Google video search and the Video carousel.
export function videoObjectSchema(video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string; // ISO date
  durationISO?: string; // e.g. "PT3M24S"
  contentUrl?: string;
  embedUrl: string; // youtube embed url
  transcript?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    duration: video.durationISO,
    contentUrl: video.contentUrl,
    embedUrl: video.embedUrl,
    transcript: video.transcript,
    publisher: {
      '@type': 'Organization',
      name: 'Dra. Carolina Macareno',
      logo: {
        '@type': 'ImageObject',
        url: 'https://dracarolinamacareno.com/logo.png',
      },
    },
  };
}

// HowTo schema — turns step-by-step content (procedure walkthrough,
// dental-tourism trip planning, scheduling flow) into a how-to rich result.
export function howToSchema(howto: {
  name: string;
  description: string;
  totalTime?: string; // ISO duration
  estimatedCost?: { currency: string; value: string };
  steps: { name: string; text: string; url?: string; image?: string }[];
  supply?: string[];
  tool?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howto.name,
    description: howto.description,
    totalTime: howto.totalTime,
    estimatedCost: howto.estimatedCost
      ? {
          '@type': 'MonetaryAmount',
          currency: howto.estimatedCost.currency,
          value: howto.estimatedCost.value,
        }
      : undefined,
    supply: howto.supply?.map((s) => ({ '@type': 'HowToSupply', name: s })),
    tool: howto.tool?.map((t) => ({ '@type': 'HowToTool', name: t })),
    step: howto.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
      url: s.url,
      image: s.image,
    })),
  };
}
