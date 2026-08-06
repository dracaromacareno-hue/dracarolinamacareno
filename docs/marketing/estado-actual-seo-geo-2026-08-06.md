# Estado actual de SEO, GEO y medición

**Fecha:** 6 de agosto de 2026
**Qué es esto:** la foto de cómo está todo hoy, verificada en plataforma. Sin historial de correcciones ni versiones anteriores. Si algo no aparece aquí, es que no está verificado.
**Reemplaza a:** `auditoria-seo-geo-instagram-2026-08-05.md` (movido a `historico/`).

---

## 1. Los números de partida

| Métrica | Hoy | Dónde se mide |
|---|---|---|
| Clics orgánicos | **2,86/día** (80 en 28 días) | Search Console |
| Impresiones orgánicas | **224/día** (6.280 en 28 días) | Search Console |
| CTR medio | 1,3% | Search Console |
| Posición media | 9,7 | Search Console |
| Páginas indexadas | **62** de 126 | Search Console |
| Visualizaciones del Perfil de Empresa | 222/mes | GBP |
| Acciones del Perfil de Empresa | **4/mes** (2 llamadas, 2 clics web) | GBP |
| Reseñas de Google | 26, con 5,0★ y todas respondidas | GBP |
| Seguidores de Instagram | 4.225 (+21 netos en 28 días) | Instagram |
| Sesiones del canal "AI Assistant" | 4 en 28 días, con 7 eventos clave | GA4 |
| **Leads orgánicos nuevos** | **~1 cada 10 días** | GHL |

**El dato que ordena todo:** el SEO no bajó, subió. En los 62 días anteriores el sitio hacía 1,08 clics/día y ahora hace 2,86. Lo que cayó fue el total de GA4, porque el 88% del tráfico era pauta y la pauta está apagada desde principios de agosto.

**El dato que duele:** ese crecimiento todavía no se traduce en pacientes. Un lead orgánico cada diez días.

---

## 2. Lo que está bien construido y no hay que tocar

Verificado midiendo el HTML que sirve producción, no el código fuente.

**El sitio**
- 129 URLs en el sitemap, con `lastmod` real: el script hashea el bloque de cada artículo por revisión de git y solo cambia la fecha del que cambió de verdad
- Cabeceras de caché de CDN funcionando (`x-vercel-cache: HIT`)
- Redirects 301 de la era WordPress resueltos, y los 4 artículos consolidados redirigen 308 a su página comercial y están fuera del sitemap
- `www` redirige al dominio raíz

**Contenido**
- 31 artículos activos, todos con título de 40 a 60 caracteres, meta descripción de 129 a 159, entre 21 y 25 enlaces internos y 4 enlaces de WhatsApp
- Los precios en dólares ya están publicados en las metas y en las páginas

**Datos estructurados y capa de IA**
- Schema completo en todas las páginas: `Dentist`, `MedicalWebPage`, `MedicalProcedure`, `MedicalCondition`, `MedicalSpecialty`, `FAQPage`, `Review`, `Person`, `EducationalOrganization`, `BreadcrumbList`. Las páginas de turismo dental llevan además `HowTo` con `MonetaryAmount`
- `robots.txt` permite explícitamente GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, meta-externalagent y Cohere-AI
- `llms.txt` publicado: 133 líneas con posicionamiento, formación, especialidades, índice de páginas y la tabla de precios completa en USD y COP

**Perfil de Empresa**
- 7 categorías: Dentista (principal), Endodoncista, Ortodoncista, Prostodoncista, Blanqueamiento dental, Cirujano oral y maxilofacial, Periodoncista de implantes dentales
- Publicaciones activas, bilingües y programadas, con ganchos de objeción y precios comparados con EE.UU.
- Las 26 reseñas están respondidas
- Enlace del sitio web con UTM (`utm_source=gbp&utm_medium=listing&utm_campaign=google_maps`)
- Facebook, Instagram y YouTube vinculados

**Medición**
- Píxel de Meta con calidad de datos 8,0/10 y API de conversiones activa
- GA4 vinculado a Google Ads (cuenta 285-456-9300)
- Las landings de pauta miden: script inyectado, `generate_lead` llegando a GA4, WhatsApp etiquetado, cookies `_ga`, `_fbp`, `_fbc` y `_gcl_au`
- El formulario web crea el contacto en GHL con fuente
- 92 etiquetas en GHL con taxonomía `consulta:*` en uso

---

## 3. Lo que falta, por orden de impacto

### 3.1 La atribución de WhatsApp borra el origen del lead 🔴

GHL clasifica como `Social media` todo lo que entra por WhatsApp, sin mirar de dónde venía la persona.

**La prueba:** de los dos únicos leads nuevos confirmados de la semana, `silvio` entró por formulario y conserva campaña, medio y `fbclid` completos. `slawomir` llegó de Google a través de la web, escribió por WhatsApp, y el CRM lo guardó como `Social media` sin fuente.

Afecta a 8 de cada 23 contactos. Y explica los 88 leads "sin fuente" que sí facturaron.

**Qué hacer:** un flujo en GHL que lea la marca `[fuente: … | p: …]` del primer mensaje y con ella escriba `Fuente del Lead`. La marca ya viaja en el mensaje, solo falta leerla. Y dejar de poner `Social media` por defecto: un vacío se detecta, un dato falso no.

### 3.2 `generate_lead` no está marcado como evento clave en GA4 🔴

El script de las landings manda el evento y GA4 lo descarta, así que Google Ads no lo puede importar. Es un clic en una estrella.

Eventos clave configurados hoy: `ads_conversion_Contactar_1`, `contact_form_submit`, `cta_click`, `purchase`, `whatsapp_click`.

### 3.3 `Cita asistida` no tiene fuente de datos conectada 🔴

La acción de conversión existe y está bien configurada (creada el 29-may, acción principal, USD 40 por defecto, ventana de 90 días, atribución basada en datos). El panel dice: *"no recibe datos porque no hay ninguna conexión asociada"*. Falta enganchar la subida desde GHL.

### 3.4 El evento `Cliente potencial` de Meta tiene 4 registros históricos 🟠

Ninguno en los últimos 15 días, y llega solo por navegador sin respaldo de CAPI. Meta pide del orden de 50 conversiones por semana y por conjunto de anuncios para salir de la fase de aprendizaje. Una campaña optimizada a esa conversión no aprendería.

**Qué hacer al reencender:** optimizar a mensajes, no a conversión web. Y mandar `Cliente potencial` también por CAPI desde GHL.

### 3.5 El Perfil de Empresa no tiene prominencia 🟠

Con publicaciones de esa calidad, el problema no es el contenido: es que no te ven. 222 visualizaciones al mes es ranking local, y depende de relevancia, distancia y prominencia.

- **Catálogo de servicios: solo 1 producto.** Deberían ser 10-12, uno por tratamiento con su rango de precio
- **26 reseñas.** Es la palanca de prominencia y la mayor desventaja frente a clínicas con 58 o más
- **Categoría principal "Dentista"**, la más genérica de las siete. Decisión abierta: cambiarla a "Periodoncista de implantes dentales" o "Prostodoncista" te haría más competitiva en implantes y menos visible en búsquedas genéricas

*Nota: las preguntas y respuestas ya no existen en los perfiles de empresa, Google retiró la función.*
*Nota: el enlace de chat de WhatsApp del perfil no admite parámetros, Google los recorta. Probado el 6-ago. Y da igual: el perfil registró 0 conversaciones en 30 días.*

### 3.6 Nueve artículos cortos sin preguntas frecuentes 🟡

Entre 328 y 407 palabras cada uno, sin FAQ. No penaliza, pero ocupan menos espacio en el resultado y son invisibles para las IA.

`carillas-porcelana` · `duracion-implantes-dentales` · `protesis-fija-atornillada` · `como-elegir-especialista-implantes` · `perdida-dientes-autoestima` · `cicatrizacion-implantes` · `bruxismo-rehabilitacion` · `implante-vs-protesis-removible` · `rehabilitacion-oral-completa`

### 3.7 Detalles menores 🔵

- `llms.txt` no está enlazado desde `robots.txt` y dice "30 artículos" cuando hay 35
- 3 enlaces internos apuntan a URLs redirigidas (funcionan, solo añaden un salto)
- Sigue vinculada a GA4 la cuenta de Google Ads 668-329-3119, que está cancelada
- `api.leadconnectorhq.com` y `ads.google.com` entran como referencia propia y rompen la atribución de sesión
- Falta Consent Mode v2: quien rechaza cookies desaparece entero, sin señales modeladas

---

## 4. Ejecutado el 6 de agosto

| Qué | Resultado |
|---|---|
| Título de la guía de turismo dental | De 67 a 53 caracteres en inglés, de 41 a 54 en español. Ya no se corta |
| Artículo `diseno-sonrisa-ceramico` | De 531 a 1.223 palabras, con precios por material, 6 preguntas frecuentes con schema y el dato de duración corregido (decía 15-25 años, son 5 y 10 mínimo) |
| YouTube en el Perfil de Empresa | Añadido, pendiente de revisión de Google |
| Enlace de chat con parámetros | Probado: Google lo recorta. Descartado |

---

## 5. Lo siguiente, en orden

1. **Flujo de GHL que lea la fuente del mensaje de WhatsApp.** Es lo que hace que todos los demás números signifiquen algo
2. **Marcar `generate_lead` como evento clave** en GA4
3. **Catálogo de servicios del Perfil de Empresa** y campaña de reseñas hasta 60
4. **Conectar la fuente de datos de `Cita asistida`**
5. **Medir a 3 y 4 semanas** si `diseno-sonrisa-ceramico` sube de la posición 11 a la 5. Si sube, repetir la fórmula en los otros nueve. Si no, cambiar de enfoque antes de gastar 40 horas
6. **Medición mensual de citaciones en IA** con una lista fija de 12 preguntas en ChatGPT, Perplexity, Grok y Gemini

---

## 6. Cómo auditar este sitio, para la próxima

Una nota de método, porque me costó una lista de hallazgos falsos: **hay que medir el HTML que sirve producción, no el archivo de datos.** El template añade solo los enlaces internos, el botón de WhatsApp y los títulos de respaldo. Y hay tres artículos con página estática propia que no usan `lib/blog-posts.ts` en absoluto: `turismo-dental-en-colombia-seguro`, `implantes-subperiosticos-medellin` y `caso-clinico-implante-convencional`.

Si alguien audita el sitio y dice que faltan enlaces internos o botones de WhatsApp, pídele que lo demuestre sobre la página renderizada.
