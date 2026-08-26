# dracarolinamacareno.com

Sitio de la Dra. Carolina Macareno (rehabilitadora oral estética e implantóloga, Medellín).
Next.js 15 + i18n (es/en) + Tailwind, desplegado en Vercel desde `main`.

## Atribución de leads: regla obligatoria

**Nunca escribas un link de WhatsApp a mano.** Siempre usa el componente `WhatsAppLink`:

```tsx
import WhatsAppLink from '@/components/WhatsAppLink';

<WhatsAppLink
  message="Hola, leí el artículo sobre X. Me gustaría una valoración."
  locale={locale as 'es' | 'en'}
  trackingLabel="nombre_del_cta"
>
  Escríbeme por WhatsApp
</WhatsAppLink>
```

Por qué: el negocio es WhatsApp primero y el CRM (GoHighLevel) solo ve el texto del
primer mensaje, sin datos de atribución. `WhatsAppLink` le pega automáticamente al
mensaje una marca con el canal y la página de origen:

```
[fuente: Google (orgánico) | p: duele-implante-dental-mitos]
```

Esa marca es la única forma de saber qué campaña y qué artículo traen pacientes. Un
`<a href="https://wa.me/...">` escrito a mano se salta el sistema **en silencio**: el
link funciona, el lead llega, y nadie nota que entró sin fuente. Ya pasó con dos links
del footer que estuvieron sin atribución en todas las páginas del sitio.

Los UTM no sirven aquí: WhatsApp descarta los parámetros de URL. Por eso la marca va
dentro del texto del mensaje.

La lógica vive en `lib/source-tracking.ts`. Es de primer toque y se mantiene durante
toda la sesión del visitante. Si agregas un canal nuevo, agrégalo ahí, no en la página.

### Cada artículo nuevo lleva su `whatsappMessage`

El CTA de WhatsApp **ya se renderiza solo** en todos los posts: lo pone el template
de `app/[locale]/blog/[slug]/page.tsx`, no depende de que te acuerdes. Y si el post
no define mensaje, cae en uno genérico. O sea que la atribución nunca se rompe.

Lo que sí depende de ti es que el mensaje **nombre el tema del artículo**. Sin eso,
el paciente llega diciendo "vengo de la página web" y Salomé arranca la conversación
sin saber qué le interesa.

Al crear un artículo, agrega siempre los dos campos en `lib/blog-posts.ts`:

```ts
whatsappMessage: 'Hola, leí el artículo sobre si duele ponerse un implante. Me gustaría una valoración de mi caso.',
whatsappMessageEn: 'Hello, I read the article about whether getting an implant hurts. I would like an evaluation of my case.',
```

La fórmula: **saludo + "leí el artículo sobre [tema]" + la acción que quieres que pida.**
Nombrar el artículo es mejor que abrir con "vengo de la página web": el tema le da a
Salomé el contexto para responder sin preguntar de nuevo.

No metas la marca `[fuente: ... | p: ...]` a mano en el mensaje. `WhatsAppLink` se la
pega sola con `appendSourceTag`; si la escribes tú, queda duplicada.

## Después de desplegar: `npm run indexnow`

```bash
npm run indexnow
```

Empuja las URLs del sitemap a **Bing, Yandex e IndexNow API** al instante. Es gratis,
no tiene cuota y no depende de Search Console.

Por qué importa más de lo que parece: **ChatGPT Search y Perplexity se apoyan en el
índice de Bing, no en el de Google.** El presupuesto de rastreo de Google se agota en
las páginas en español y a las de `/en/` no llega (medido el 25-ago-2026: 6 de 12 URLs
en inglés con `Último rastreo: N/D`). IndexNow es la vía que no pasa por ahí.

Estuvo montado desde semanas antes sin que nadie lo corriera. Córrelo después de cada
despliegue que cambie contenido, junto con `lastmod`.

⚠️ La clave vive en `public/<clave>.txt` y se autovalida sirviéndose desde la raíz. Si
Bing devuelve 403 `UserForbiddedToAccessSite`, la clave quedó registrada para otro
dominio: se rota generando una nueva y su archivo, sin pedirle permiso a nadie.

## Después de cambiar contenido: `npm run lastmod`

```bash
npm run lastmod
```

Corre esto **después de commitear** un cambio de contenido y commitea el
`lib/route-lastmod.json` que genera. Lee el historial de git y escribe la fecha real
de última modificación de cada página; el sitemap la publica como `<lastmod>`.

Por qué importa: `<lastmod>` es la señal con la que Google decide a qué URL vuelve y
en qué orden. Sin ella, una página que ya rastreó no tiene motivo para revisarla, y
el cambio que acabas de hacer tarda semanas en verse en los resultados. Con ella,
Google lo detecta solo y no hay que gastar la cuota diaria de 12 URLs de Search
Console pidiendo indexación a mano.

Si se te olvida no se rompe nada: el sitemap sigue publicando las fechas del JSON
anterior, simplemente desactualizadas. Y no se puede falsear sin querer, porque las
fechas salen de git, no de un campo que se escribe a mano.

## Enlaces salientes a directorios médicos

Doctoralia, TopDoctors y similares compiten con el sitio por las mismas búsquedas
("odontólogo Medellín", "implantes Medellín"). Un enlace normal hacia ellos les pasa
autoridad justo en las consultas que queremos ganar.

- En texto visible: si el sello aporta confianza al paciente, se queda, pero con
  `rel="...  nofollow"`. Ver `AboutSection.tsx`.
- La insignia de reseñas de la home apunta a **Google**, no a Doctoralia: el perfil
  de Google es activo propio y alimenta el mapa local, que es de donde llegan los
  pacientes de Medellín. La cifra debe ser la real de Google, verificada, nunca la
  suma de plataformas.
- En `sameAs` de Schema.org **sí** se dejan: ahí no son enlaces de autoridad sino
  declaraciones de identidad que ayudan a Google a confirmar quién es la Dra.

## Contenido

- **Español primero.** El inglés solo si se pide explícitamente. Cada página es 100%
  un solo idioma, nunca mezclada.
- **Nunca uses em dash (—)** en contenido público. Usa coma, punto o paréntesis.
- **Nunca inventes** credenciales, premios, prensa, testimonios ni cifras clínicas.
  Si no tienes el dato confirmado por la dueña, pregunta antes de escribir.
- **No cambies precios** sin autorización explícita de la dueña. Y cuando publiques
  un valor, va **siempre con "desde"**, nunca cerrado ni con techo: los presupuestos
  varían según el caso y el dólar se mueve. La única excepción es la tabla
  comparativa contra Estados Unidos de `smile-makeover-colombia`, donde sin rango
  en los dos lados no hay comparación posible.
- **Los títulos van bajo 60 caracteres y las descripciones bajo 150.** Google no
  corta por letras sino por ancho en pixeles, unos 920 px en computador y unos
  680 en celular, así que en móvil el corte llega cerca de los 120: lo esencial va
  al principio de la frase. Y nunca pongas un precio en la descripción, porque en
  el resultado queda debajo del título y se lee como el precio de todo el servicio.
- Cada artículo tiene su propio objetivo. No uniformes mensajes entre artículos sin
  preguntar primero.
- Antes de escribir un artículo nuevo, verifica canibalización contra los que ya
  existen en `lib/blog-posts.ts`.

## Datos clínicos que se escriben mal con frecuencia

- La cirugía la realiza la Dra. Carolina **o** el cirujano maxilofacial del equipo.
  Ella opera algunos casos, no todos, y se define en la planeación inicial.
  **Nunca escribas que ella no hace cirugías.**
- **Las radiografías no están incluidas en la valoración, pero siempre son
  necesarias.** No se trabaja a ciegas. Si el paciente las tiene se usan, y si no, se
  le da una orden para que se las realice en el centro radiológico de la torre vecina.
  Nunca escribas que son opcionales ni que el escaneo intraoral las reemplaza.
- El escaneo intraoral 3D **sí** está incluido y se hace en el consultorio. Dile
  "escaneo intraoral", no "impresión digital".
- **El microdiseño en resina directa lleva diseño digital pero NO prueba en boca.**
  El ensayo previo, el que el paciente se prueba y aprueba antes de que sea
  definitivo, existe cuando son **carillas en cerámica**. No mezcles las dos cosas
  en un texto público: pegar "ve tu sonrisa antes de empezar" al precio de entrada
  promete algo que ese material no incluye. "Diseño digital" sí es cierto con los
  dos, y por eso es la frase segura cuando el texto no distingue material.
  Y no digas "ensayo" en español: se lee como ensayo de teatro, no como prueba
  dental.
- **Al implante NO le da caries.** Es el dato que más cambia la comparación con
  un diente natural, porque la caries es lo que más dientes hace perder. Lo que
  sí puede enfermar son los tejidos alrededor del implante.
- **Las cuatro señales de que un implante está bien:** no hay movilidad, no hay
  dolor, no hay inflamación y no hay sangrado. Es la lista que la Dra. revisa en
  cada control y la que el paciente puede revisar solo en casa. Úsala tal cual,
  las cuatro, y no la resumas: su valor está en que el paciente pueda
  comprobarla sin depender de nadie.
- **Si el paciente siente que el diente se mueve, casi nunca va a perder el
  implante.** Lo más frecuente es que se soltó el **tornillo de fijación**, el
  que une la corona con el implante, y eso está dentro de los riesgos propios
  del procedimiento. La solución es **torquearlo**, o sea ajustarlo con la
  fuerza exacta que indica el fabricante: una cita corta, no una cirugía. **El
  implante que está dentro del hueso, mientras tanto, está perfecto.**
  Nunca escribas esto de forma vaga ("se dañó algo", "se soltó una pieza"): el
  paciente necesita saber qué síntoma mirar, qué lo causa y qué se hace.
- **El implante y la corona se comportan distinto y no duran lo mismo.** El
  implante oseointegrado no tiene fecha de caducidad; la corona es pieza de
  desgaste y se cambia sin tocar el implante. Confundirlos es la causa de casi
  todas las decepciones.
- **La placa de protección va incluida SIEMPRE, en cualquier tratamiento.** No es
  un extra ni se cobra aparte. Vale la pena nombrarlo cuando se hable de lo que
  incluye un tratamiento: buena parte de las clínicas la cobra por separado, y
  para el paciente es la señal de que el trabajo se cuida después de terminarlo.
- **Nunca ofrezcas financiación en el sitio público.** CuraPay sí está activa
  (agosto 2026), pero cobra comisión, así que la dueña la plantea en la conversación
  y solo si el paciente la pide. En las páginas van únicamente los medios de pago
  propios, que no cuestan comisión: tarjeta de crédito con opción de diferir a
  cuotas, PSE, transferencia bancaria y transferencia internacional en dólares.
  Cierra siempre invitando a escribir para revisar las opciones del caso: esa
  conversación es donde la financiación se ofrece, si hace falta.

## Fotos de casos clínicos

**Nunca se muestra la cara del paciente.** Es la regla de la dueña para todos los
casos, sin excepción: a muchos pacientes no les gusta, y aplicarla siempre evita
tener que preguntar caso por caso. Las fotos van recortadas a la sonrisa, de la
nariz a la barbilla como mucho.

De paso funciona mejor: sin cara, el ojo va directo a los dientes, que es lo que
se está comparando.

**La autorización está cubierta** por el consentimiento informado que cada
paciente firma antes del procedimiento. No hace falta un permiso aparte.

Requisitos técnicos de cada par de fotos:

- El **antes y el después del mismo caso deben tener el mismo encuadre y el mismo
  acercamiento**. Si en uno se ve la nariz y en el otro no, el ojo compara mal y
  el resultado se pierde. Es el error más fácil de cometer.
- Mínimo **1200 px de ancho**. Por debajo se ve pixelado al lado de una foto
  nítida, y el "antes" parece de mala calidad cuando en realidad solo está mal
  exportado.
- Recortar siempre desde el archivo ORIGINAL de la cámara, nunca desde una
  versión ya reducida: recortar un recorte multiplica la pérdida.

## Precios

La fuente única es `lib/pricing.ts`. Si cambias un precio, revisa también los
artículos de `lib/blog-posts.ts` y `public/llms.txt`, que los repiten en texto.

**Nunca nombres a CurePay ni a Dental Partner en texto público** (`shortPitch`,
copy de páginas, `llms.txt`, anuncios). Son socios que captan pacientes a cambio de
comisión, y el sitio es el canal directo, sin comisión. Publicar su nombre y su
tarifa le da al visitante una pista de búsqueda hacia el canal caro: se paga dos
veces por el mismo paciente. Sus tarifas se conservan **solo como comentarios**
en `lib/pricing.ts`, que es donde documentan de dónde salió cada rango.

Las comparaciones de precio en texto público son **Colombia contra el país del
paciente** (EE.UU., Canadá, Panamá, Puerto Rico, España, Chile). Esa es la que
convence. La tarifa de un socio no compara nada para alguien que no lo conoce.
