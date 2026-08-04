/**
 * Casos clínicos reales (antes/después) documentados por la Dra. Carolina Macareno.
 *
 * Fuente: fotos clínicas reales cargadas en /public/images (mismas que ya se usan
 * en RecentCasesGrid del home). Cada par corresponde a un paciente real.
 *
 * REGLA E-E-A-T: descripciones basadas SOLO en el tipo de tratamiento visible y
 * en la categoría con la que la clínica archivó cada caso. No se inventan datos,
 * cifras ni claims. La dueña revisa cada texto antes de publicar.
 *
 * PRIVACIDAD: fotos con consentimiento del paciente. Antes de sumar casos nuevos,
 * confirmar consentimiento firmado para uso en web/marketing.
 */

export type CasoAntesDespues = {
  id: string;
  before: string;
  after: string;
  /** Etiqueta de tratamiento, ej. "Carillas cerámicas" */
  tag: { es: string; en: string };
  /** Descripción honesta de lo que se hizo (1 frase) */
  caption: { es: string; en: string };
  /** alt accesible/SEO para cada foto */
  alt: { es: string; en: string };
};

/**
 * Casos de agosto 2026, los más recientes.
 *
 * Van primero en la vitrina de /casos-clinicos porque son los que tienen mejor
 * fotografía y los tratamientos de mayor valor. Son las mismas fotos que salen
 * en el carrusel de la home: `RecentCasesGrid` muestra la selección, esta lista
 * los muestra todos. Si se agrega un caso nuevo hay que ponerlo en los dos
 * sitios, no hay una fuente única.
 *
 * Los textos son los que aprobó la Dra. el 3-ago-2026. No se resumen ni se
 * reescriben sin volver a preguntarle.
 *
 * Dos piezas del carrusel NO están aquí y es a propósito: el montaje de
 * implantes cigomáticos y la radiografía del All-on-4 son imágenes únicas, y
 * esta vitrina necesita un par antes/después para partir la tarjeta en dos.
 */
export const casosRecientes: CasoAntesDespues[] = [
  {
    id: 'protesis-fija-zirconio',
    before: '/images/caso-protesis-fija-zirconio-antes.webp',
    after: '/images/caso-protesis-fija-zirconio-despues.webp',
    tag: { es: 'Prótesis fija en zirconio', en: 'Fixed zirconia prosthesis' },
    /*
      Va de primero: es el único caso que responde a la objeción que frena a
      cualquiera que evalúa tratarse fuera de su país, "¿y si me lo hacen mal?".
      Aquí la respuesta es un paciente que ya vivió eso y viajó a Medellín a que
      se lo rehicieran.

      El "dos visitas de cinco días" no es un adorno: quien viene de otro país
      necesita saber cuántos días pedir antes de decidirse, y esa cifra es de lo
      primero que pregunta. Está escrita porque la Dra. la confirmó, igual que el
      motivo de las dos visitas (la cicatrización de los dos implantes).

      La redacción describe lo que el paciente consultó y lo que se encontró.
      No califica el trabajo de otra clínica ni la nombra: eso no aporta nada al
      lector y sí expone a la Dra.
    */
    caption: {
      es: 'Paciente de Brasil, inconforme con un tratamiento que le habían realizado antes: no le devolvía ni estética ni función. Se colocaron dos implantes y se rehizo la rehabilitación completa con prótesis fija en coronas de zirconio, recuperando forma, color y mordida. Dos visitas de cinco días cada una, con el tiempo de cicatrización de los implantes entre las dos.',
      en: 'A patient from Brazil, unhappy with treatment he had received previously: it gave him back neither aesthetics nor function. Two implants were placed and the full rehabilitation was redone with a fixed prosthesis in zirconia crowns, restoring shape, colour and bite. Two visits of five days each, with the implant healing time in between.',
    },
    alt: {
      es: 'Antes y después de una prótesis fija en coronas de zirconio en Medellín, caso rehecho tras un tratamiento previo',
      en: 'Before and after of a fixed zirconia crown prosthesis in Medellín, a case redone after previous treatment',
    },
  },
  {
    id: 'cigomas-bimaxilar',
    before: '/images/caso-cigomas-bimaxilar-antes.webp',
    after: '/images/caso-cigomas-bimaxilar-despues.webp',
    tag: { es: 'Cigomáticos + prótesis bimaxilar', en: 'Zygomatic implants + full-mouth prosthesis' },
    /*
      Es el caso técnicamente más exigente del sitio y el primero de implantes
      cigomáticos con fotografía de sonrisa, no solo radiografía.

      De las dos fotos de antes que envió la Dra. se usa la de sonrisa y no la
      intraoral con separador: el después es una foto de sonrisa, y emparejar
      una intraoral con una sonrisa hace que el ojo compare el tipo de foto en
      vez del resultado.

      Los días de cada viaje van escritos porque el paciente viajó desde Estados
      Unidos, y quien evalúa eso necesita saber cuánto tiempo pedir antes de
      decidirse.
    */
    caption: {
      es: 'Llegó desde Washington D.C. La cirugía se realizó en quirófano: cuatro implantes cigomáticos en el maxilar superior y cuatro convencionales en el inferior. En el segundo viaje se instaló la prótesis fija bimaxilar en zirconio. Dos visitas, quince días la primera, la de la cirugía, y diez días la segunda.',
      en: 'He travelled from Washington D.C. Surgery was performed in an operating room: four zygomatic implants in the upper jaw and four conventional implants in the lower. On the second trip the fixed full-mouth zirconia prosthesis was fitted. Two visits, fifteen days for the first one, the surgical one, and ten days for the second.',
    },
    alt: {
      es: 'Antes y después de una rehabilitación con cuatro implantes cigomáticos y prótesis fija bimaxilar en zirconio en Medellín',
      en: 'Before and after of a rehabilitation with four zygomatic implants and a fixed full-mouth zirconia prosthesis in Medellín',
    },
  },
  {
    id: 'all-on-6-4',
    before: '/images/caso-all-on-6-4-antes.webp',
    after: '/images/caso-all-on-6-4-despues.webp',
    tag: { es: 'All-on-6 + All-on-4', en: 'All-on-6 + All-on-4' },
    /*
      "Sedación consciente", no solo sedación, y la prótesis definitiva es de
      zirconio solamente. Las dos correcciones las hizo la Dra. sobre el primer
      borrador. La reseña pública de la paciente dice "zirconio y acrílico";
      la versión clínica correcta es esta.
    */
    caption: {
      es: 'Llegó desde Panamá con pérdida ósea y enfermedad periodontal avanzada: no era posible conservar ningún diente. En una sola sesión bajo sedación consciente se hicieron las extracciones, el injerto óseo y la colocación de 10 implantes, seis arriba y cuatro abajo, con prótesis temporal el mismo día. Cuatro meses después se instaló la definitiva híbrida en zirconio.',
      en: 'She travelled from Panama with bone loss and advanced periodontal disease: no tooth could be preserved. In a single session under conscious sedation we performed the extractions, the bone graft and the placement of 10 implants, six upper and four lower, with a temporary prosthesis the same day. Four months later the definitive zirconia hybrid was fitted.',
    },
    alt: {
      es: 'Antes y después de una rehabilitación completa con All-on-6 superior y All-on-4 inferior en Medellín',
      en: 'Before and after of a full-arch rehabilitation with All-on-6 upper and All-on-4 lower in Medellín',
    },
  },
  {
    id: 'recambio-carillas',
    before: '/images/caso-recambio-carillas-antes.webp',
    after: '/images/caso-recambio-carillas-despues.webp',
    tag: { es: 'Recambio de carillas', en: 'Veneer replacement' },
    /*
      Son CARILLAS, no coronas: en búsquedas no es lo mismo. Y no hubo manejo de
      encía, solo se adaptó el diseño a como quedó. Confirmado por la Dra.
    */
    caption: {
      es: 'Llegó desde Orlando con carillas de más de veinte años: manchadas y con la encía retraída. Quería que se vieran naturales y que duraran. Se retiraron y se realizaron carillas nuevas en cerámica en el arco superior, devolviendo forma y color, y adaptando el diseño a la nueva posición de la encía. 4-5 días, con pruebas antes de cementar y placa de protección incluida.',
      en: 'She travelled from Orlando with veneers over twenty years old: stained, with receded gums. She wanted them to look natural and to last. They were removed and new ceramic veneers were made for the upper arch, restoring shape and colour and adapting the design to the new gum position. 4-5 days, with try-ins before cementing and a protective guard included.',
    },
    alt: {
      es: 'Antes y después del recambio de carillas de más de veinte años por cerámica nueva',
      en: 'Before and after replacing twenty-year-old veneers with new ceramic',
    },
  },
  {
    id: 'ceramico-arco-superior',
    before: '/images/caso-ceramico-arco-superior-antes.webp',
    after: '/images/caso-ceramico-arco-superior-despues.webp',
    tag: { es: 'Diseño cerámico', en: 'Ceramic smile design' },
    /*
      Abre con las palabras de la paciente, no con las del odontólogo. "Me veo
      los dientes amarillos" conecta mucho mejor que "discromía": es la frase
      que la persona que busca este tratamiento se dice a sí misma.
    */
    caption: {
      es: '"No me gusta mi sonrisa, me veo los dientes amarillos." Con eso llegó. Rehabilitación estética del arco superior en cerámica, con pruebas intermedias para aprobar forma y color antes de cementar. 4-5 días, con placa de protección incluida.',
      en: '"I do not like my smile, my teeth look yellow." That is how she arrived. Aesthetic rehabilitation of the upper arch in ceramic, with intermediate try-ins to approve shape and colour before cementing. 4-5 days, with a protective guard included.',
    },
    alt: {
      es: 'Antes y después de un diseño cerámico de arco superior en Medellín',
      en: 'Before and after of an upper-arch ceramic smile design in Medellín',
    },
  },
  {
    id: 'alineadores-resina',
    before: '/images/caso-alineadores-resina-antes.webp',
    after: '/images/caso-alineadores-resina-despues.webp',
    tag: { es: 'Alineadores + resina', en: 'Aligners + resin' },
    caption: {
      es: 'Llegó con apiñamiento y bordes desgastados e irregulares. Primero se corrigió la posición con alineadores, entre cuatro y cinco meses, y solo cuando los dientes estuvieron alineados se hizo el microdiseño en resina directa para devolver forma y proporción a los bordes. La resina directa se aplica sin tallar el diente.',
      en: 'He arrived with crowding and worn, uneven edges. Position was corrected first with aligners, over four to five months, and only once the teeth were aligned was the direct-resin microdesign done to restore shape and proportion to the edges. Direct resin is applied without reducing the tooth.',
    },
    alt: {
      es: 'Antes y después de un tratamiento con alineadores y microdiseño en resina directa, sin tallar los dientes',
      en: 'Before and after of aligners plus direct-resin microdesign, with no tooth reduction',
    },
  },
  {
    id: 'carillas-ceramicas-3',
    before: '/images/caso-carillas-ceramicas-3-antes.webp',
    after: '/images/caso-carillas-ceramicas-3-despues.webp',
    tag: { es: 'Carillas cerámicas', en: 'Ceramic veneers' },
    caption: {
      es: 'Empresaria de Medellín. Llegó incómoda con su sonrisa y con una idea muy clara de lo que quería: que se viera natural. Se realizó el diseño en carillas cerámicas sobre el arco superior.',
      en: 'A businesswoman from Medellín. She came in uncomfortable with her smile and with a very clear idea of what she wanted: for it to look natural. The design was done with ceramic veneers on the upper arch.',
    },
    alt: {
      es: 'Antes y después de un tratamiento con carillas cerámicas en Medellín',
      en: 'Before and after of ceramic veneers in Medellín',
    },
  },
];

/**
 * Casos de diseño de sonrisa (carillas cerámicas y resina).
 *
 * Era "diseno-ceramica-6" el caso que estaba repetido: es la misma paciente que
 * `carillas-ceramicas-3`, con otra foto de antes y prácticamente la misma de
 * después. Se conservó la versión nueva, que sale del archivo original a 1400 px
 * y tiene el mismo encuadre en los dos lados.
 *
 * Al agregar un caso conviene comparar las fotos con las que ya están: dos
 * tarjetas del mismo paciente se leen como relleno y restan credibilidad justo
 * donde el visitante está evaluando si los resultados son reales.
 */
export const casosDisenoSonrisa: CasoAntesDespues[] = [
  {
    id: 'diseno-ceramica-2',
    before: '/images/antes-diseno-ceramica-2.webp',
    after: '/images/final-diseno-ceramica-2.webp',
    tag: { es: 'Carillas cerámicas', en: 'Ceramic veneers' },
    caption: {
      es: 'Veinticinco años, y desde muy joven evitando sonreír. Se realizaron carillas cerámicas en los dos arcos, devolviendo función y estética a la vez. Hoy no para de reír.',
      en: 'Twenty-five years old, and avoiding smiling since childhood. Ceramic veneers were made on both arches, restoring function and aesthetics at once. Today the laughing does not stop.',
    },
    alt: {
      es: 'Antes y después de diseño de sonrisa con carillas cerámicas en Medellín, Dra. Carolina Macareno',
      en: 'Before and after smile design with ceramic veneers in Medellín, Dr. Carolina Macareno',
    },
  },
  {
    id: 'diseno-ceramica-4',
    before: '/images/antes-diseno-ceramica-4.webp',
    after: '/images/final-diseno-ceramica-4.webp',
    tag: { es: 'Carillas cerámicas', en: 'Ceramic veneers' },
    caption: {
      es: 'Treinta y cinco años. Llegó diciendo que, por más que se riera, los dientes no se le veían, y pidiendo una sonrisa natural. Con la estética volvió también la confianza para mostrarla.',
      en: 'Thirty-five years old. The complaint was that no matter how much they laughed, the teeth never showed, and the request was for a natural smile. Along with the aesthetics came back the confidence to show it.',
    },
    alt: {
      es: 'Antes y después de carillas cerámicas, diseño de sonrisa en El Poblado Medellín',
      en: 'Before and after ceramic veneers, smile design in El Poblado Medellín',
    },
  },
  {
    id: 'diseno-ceramica-5',
    before: '/images/antes-diseno-ceramica-5.webp',
    after: '/images/final-diseno-ceramica-5.webp',
    tag: { es: 'Carillas cerámicas', en: 'Ceramic veneers' },
    caption: {
      es: 'Paciente de Medellín. Consultó con una sola idea, mejorar su sonrisa, y se realizó el diseño en los dos arcos. Quedó feliz con el resultado.',
      en: 'A patient from Medellín. They consulted with a single idea, to improve their smile, and the design was done on both arches. They were delighted with the result.',
    },
    alt: {
      es: 'Caso de diseño de sonrisa cerámico antes y después, Medellín',
      en: 'Ceramic smile design case before and after, Medellín',
    },
  },
  {
    id: 'diseno-resina-3',
    before: '/images/antes-diseno-resina-3.webp',
    after: '/images/final-diseno-resina-3.webp',
    tag: { es: 'Carillas en resina', en: 'Composite veneers' },
    caption: {
      es: 'Diseño de sonrisa con carillas en resina, técnica conservadora y en menos sesiones.',
      en: 'Smile design with composite veneers, a conservative technique in fewer sessions.',
    },
    alt: {
      es: 'Antes y después de carillas en resina, diseño de sonrisa Medellín',
      en: 'Before and after composite veneers, smile design Medellín',
    },
  },
  {
    id: 'diseno-1',
    before: '/images/antes-diseno-1.webp',
    after: '/images/final-diseno-1.webp',
    tag: { es: 'Rediseño de sonrisa', en: 'Smile redesign' },
    caption: {
      es: 'Rediseño completo de la sonrisa. Forma, color y proporción devueltos con un resultado natural.',
      en: 'Complete smile redesign. Shape, colour and proportion restored with a natural result.',
    },
    alt: {
      es: 'Antes y después de rediseño de sonrisa en Medellín, Dra. Carolina Macareno',
      en: 'Before and after smile redesign in Medellín, Dr. Carolina Macareno',
    },
  },
];

/** Caso de rehabilitación con implantes / prótesis fija. */
export const casosImplantes: CasoAntesDespues[] = [
  {
    id: 'implantes-4',
    before: '/images/antes-implantes-4.webp',
    after: '/images/final-implantes-4.webp',
    tag: { es: 'Rehabilitación oral', en: 'Oral rehabilitation' },
    caption: {
      es: 'Rehabilitación de la sonrisa devolviendo función y estética con un resultado blanco y parejo.',
      en: 'Smile rehabilitation restoring function and aesthetics with an even, white result.',
    },
    alt: {
      es: 'Antes y después de rehabilitación oral en Medellín, Dra. Carolina Macareno',
      en: 'Before and after oral rehabilitation in Medellín, Dr. Carolina Macareno',
    },
  },
];

/**
 * Todos los casos, en el orden en que se muestran en /casos-clinicos.
 *
 * Los recientes van primero: son los de mejor fotografía y los tratamientos de
 * mayor valor, y quien entra a esta página ya está comparando resultados.
 */
export const casosDestacados: CasoAntesDespues[] = [
  ...casosRecientes,
  ...casosDisenoSonrisa,
  ...casosImplantes,
];

/**
 * Devuelve casos concretos por id, en el orden pedido.
 *
 * Sirve para que cada página de tratamiento muestre primero el caso al que
 * apuntan las tarjetas de la home. Si alguien toca "Carillas cerámicas" y cae en
 * una página cuya primera foto es otra sonrisa, siente que se equivocó de enlace
 * y se va, aunque la página sea la correcta.
 *
 * Ignora en silencio los ids que no existan: así, borrar un caso repetido no
 * rompe ninguna página.
 */
export function casosPorId(...ids: string[]): CasoAntesDespues[] {
  return ids
    .map((id) => casosDestacados.find((c) => c.id === id))
    .filter((c): c is CasoAntesDespues => Boolean(c));
}
