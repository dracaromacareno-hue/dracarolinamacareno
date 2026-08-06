# Auditoría SEO + GEO + Instagram — Dra. Carolina Macareno
**Fecha:** 5 de agosto de 2026
**Ventana de análisis:** últimos 28 días (7 jul – 4 ago 2026), con los 3 meses previos como línea base
**Fuentes usadas:** Google Search Console (sc-domain:dracarolinamacareno.com), GA4 (propiedad 412449617), Perfil de Empresa de Google, Meta Business Suite, Instagram, GoHighLevel (location z84DlOrVXLL9zuRM5VYV), el repositorio del sitio y comprobaciones directas sobre el dominio en producción.

---

## 1. Resumen ejecutivo

**La premisa de la pregunta es falsa, y esa es la mejor noticia del informe.** El SEO no bajó: en los últimos 28 días el sitio hizo **80 clics y 6.280 impresiones**, frente a **67 clics y 4.720 impresiones en los 62 días anteriores**. Traducido a ritmo diario: pasaste de **1,08 clics/día a 2,86** (+165%) y de **76 impresiones/día a 224** (+195%). El orgánico casi triplicó en un mes.

Lo que sí bajó es el **total de GA4**, y bajó por una razón mecánica: el 88% de las sesiones de los últimos 28 días eran de pauta (825 de Paid Social + 178 de Paid Search sobre 1.138 sesiones). Cuando la pauta se apaga, el número grande se desploma aunque el orgánico esté subiendo. Estás mirando un termómetro que mide sobre todo el dinero, no el posicionamiento.

Hay **tres cosas que sí están rotas de verdad**, y ninguna es "el SEO":

1. **La pauta no convierte y el orgánico sí.** 825 sesiones de Paid Social → **0 eventos clave**. 4 sesiones de "AI Assistant" (ChatGPT/Grok/Perplexity) → **7 eventos clave**. En GHL, la fuente `form diseño` acumula **67 leads y 0 ganados** en 20 días, mientras la fuente sin etiquetar acumula 88 leads y 9 ganados por $32,7M.
2. **El Perfil de Empresa de Google está apagado.** 222 visualizaciones en 30 días que producen **2 llamadas y 2 clics al sitio**. Tendencia mensual: jun 52 → jul 34 interacciones (−35%). Este sí es un indicador que bajó.
3. **Instagram no genera un solo lead medible.** 4.225 seguidores, 301 publicaciones, y Meta reporta **0 conversaciones iniciadas, 0 contactos nuevos, 0 clientes potenciales** en 28 días.

**Las 3 prioridades con más impacto**, en orden:

| # | Acción | Por qué |
|---|--------|---------|
| 1 | Marcar el envío de formulario y el clic a WhatsApp como evento clave en las landings de pauta (`/diseno-de-sonrisa`, `/implantes`) | Hay ~16 leads reales en `/gracias-diseno-de-sonrisa` que GA4 registra como 0 conversiones. Estás optimizando a ciegas y pagando por ello |
| 2 | Reactivar el Perfil de Empresa: categorías, publicaciones semanales, reseñas | Es el canal más barato que tienes y está al 4% de su potencial |
| 3 | Doblar el blog en inglés orientado a EE.UU. | EE.UU. ya genera 1.803 impresiones y 17 clics sin que le hayas dedicado casi nada. Es el mercado del turismo dental |

**Veredicto general: base técnica sólida, medición rota, distribución dormida.** El sitio está bien construido. El problema no es que Google no te vea; es que lo que Google ya te manda no se está midiendo ni se está multiplicando.

---

## 2. La pregunta central: ¿por qué "bajaron todos los indicadores"?

### 2.1 Lo que realmente pasó, indicador por indicador

| Indicador | Antes | Ahora (28 días) | Variación | Diagnóstico |
|---|---|---|---|---|
| Clics orgánicos (GSC) | 67 en 62 días (1,08/día) | 80 en 28 días (2,86/día) | **+165%** | ✅ Subió mucho |
| Impresiones orgánicas (GSC) | 4.720 (76/día) | 6.280 (224/día) | **+195%** | ✅ Subió mucho |
| CTR medio | 1,3% | 1,3% | = | ⚠️ Plano y bajo |
| Posición media | 9,5 | 9,7 | −0,2 | ➖ Ruido, no señal |
| Sesiones totales (GA4) | 47 (10 jun–7 jul) | 1.138 | +2.321% | ⚠️ Espejismo: es pauta |
| Sesiones orgánicas (GA4) | 25 | 44 | **+76%** | ✅ Subió |
| Eventos clave (GA4) | 16 | 36 | +125% | ✅ Subió |
| Interacciones GBP | 52 (junio) | 34 (julio) | **−35%** | ❌ **Bajó de verdad** |
| Seguidores IG netos | — | +21 en 28 días | — | ❌ Estancado |
| Conversaciones IG/FB | — | 0 | — | ❌ Cero |

### 2.2 Las tres causas reales

**Causa 1 — Estás leyendo el gráfico equivocado.**
El informe que ves a diario (GA4 "usuarios/sesiones") mide el total, y el total era 88% pauta. La curva de Meta cae a cero literalmente el 1 de agosto: las visualizaciones diarias pasan de 755 el 31 de julio a **2, 3, 2, 5** los días siguientes. Eso no es una caída de SEO, es un interruptor.

**Causa 2 — El Perfil de Empresa se enfrió.**
Este sí bajó: 52 interacciones en junio → 34 en julio. Y el volumen absoluto es minúsculo: 222 visualizaciones en 30 días (161 en Búsqueda, 61 en Mapas) que producen 2 llamadas, 2 clics al sitio, 0 conversaciones y 0 reservas. Un perfil de una especialista con 5,0★ debería estar generando 10–20 veces eso.

**Causa 3 — El tráfico nuevo es más frío, y eso baja los porcentajes.**
El orgánico creció (25 → 44 sesiones) pero los eventos clave orgánicos bajaron de 13 a 10. La tasa de evento clave orgánica pasó de 36% a 15,9%. Es esperable: el crecimiento viene del blog en inglés y de consultas informativas de EE.UU. y México, gente que investiga, no que agenda. **No es un problema, es una fase** — pero explica por qué "todo se ve peor" en porcentajes aunque el volumen suba.

### 2.3 Lo que NO es la causa

- **No es un problema técnico del sitio.** Los 22 "404" que muestra Search Console ya están resueltos: comprobé las 8 URLs de ejemplo y todas redirigen correctamente (`/implantes-dentales/` → `/servicios/implantes-dentales`, `/casos-de-exito/` → `/casos-clinicos`, etc.). Search Console está enseñando rastreos de mayo y junio.
- **No es una penalización.** No hay acciones manuales, el HTTPS está bien, el sitemap responde 200 y las cabeceras de caché funcionan (`x-vercel-cache: HIT`).
- **No es que Google no te indexe.** 62 páginas indexadas. El problema es otro (ver §4).

---

## 3. Qué estás haciendo bien

Esto no es cortesía; es la lista de lo que hay que **proteger y multiplicar**.

**1. El blog es tu motor y funciona.**
Las 6 páginas que más clics traen son 5 artículos de blog + la home:

| Página | Clics | Impresiones |
|---|---|---|
| `/en/blog/turismo-dental-en-colombia-seguro` | 17 | 1.242 |
| `/` (home) | 12 | 150 |
| `/blog/straumann-y-neodent-cual-implante-elegir` | 9 | 888 |
| `/blog/costo-implantes-dentales-colombia` | 5 | 625 |
| `/en/blog/costo-implantes-dentales-colombia` | 3 | 580 |
| `/blog/sobredentadura-sobre-implantes` | 3 | 118 |

El artículo en inglés sobre seguridad del turismo dental es tu página número uno. Eso confirma la tesis del negocio: el paciente internacional te busca y te encuentra leyendo, no viendo un anuncio.

**2. Estás ganando en GEO, y es el canal de mayor calidad que tienes.**
GA4 tiene un canal propio llamado **"AI Assistant"**: 4 sesiones en 28 días, **100% de interacción**, y **7 eventos clave** — el 19% de todas tus conversiones con el 0,35% del tráfico. En los últimos 7 días: 2 sesiones, 4 eventos clave, **tasa de conversión del 100%**. Ninguna otra fuente se acerca.

Y el `robots.txt` ya está preparado para esto: permite explícitamente a GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, meta-externalagent y Cohere-AI. Eso está bien hecho y es raro verlo bien hecho.

**3. La arquitectura técnica está cuidada.**
- Sitemap dinámico con 129 URLs y decisiones documentadas en el código sobre qué incluir de `/en/*` y por qué.
- 16 redirects 301 heredados de la era WordPress, con comentarios explicando por qué no se redirigen `/wp-admin/*` y `/wp-content/*`.
- Cabeceras de caché de CDN resueltas (`cdn-cache-control: public, s-maxage=86400`).
- Estructura de servicios completa: 11 páginas de servicio, landings de turismo dental por país (Panamá, Puerto Rico), páginas de casos clínicos.
- 35 artículos de blog, en español e inglés.

**4. El Perfil de Empresa tiene la reputación que hace falta: 5,0★ con 26 reseñas.** No hay que arreglar la calidad, hay que arreglar el volumen y la actividad.

**5. Los enlaces de Instagram ya vienen etiquetados.** El `wa.me` de la bio incluye `[fuente: Instagram | p: bio]`. La infraestructura de atribución existe; falta usarla y verificar que llega a GHL.

---

## 4. Hallazgos: qué está roto

### 4.1 Tabla de hallazgos por severidad

| # | Hallazgo | Dónde | Severidad | Evidencia |
|---|---|---|---|---|
| 1 | Las landings de pauta no registran conversiones | GA4 / `/diseno-de-sonrisa`, `/implantes` | **Crítico** | 1.304 vistas y 689 usuarios en `/diseno-de-sonrisa` → **0 eventos clave**. Pero `/gracias-diseno-de-sonrisa` tiene 26 vistas / 16 usuarios: los leads existen, el evento no |
| 2 | La pauta consume el 88% del tráfico y aporta el 0% de las conversiones | GA4 + GHL | **Crítico** | Paid Social 825 sesiones / 0 eventos clave / 4 s de interacción media. En GHL: `form diseño` = 67 leads, **0 ganados**, 42 abandonados |
| 3 | El 54% de los leads de GHL no tiene fuente | GHL, 1–20 jul | **Crítico** | 88 de 162 leads con fuente `-`. Son además los que más facturan ($32,7M, 9 ganados) — no sabes de dónde vienen tus mejores pacientes |
| 4 | El Perfil de Empresa no genera acciones | GBP | **Alto** | 222 visualizaciones/30 días → 2 llamadas, 2 clics web, 0 reservas, 0 conversaciones. Tendencia jun→jul −35% |
| 5 | Instagram no produce ningún contacto medible | Meta Business Suite | **Alto** | 0 conversaciones iniciadas, 0 contactos nuevos, 0 clientes potenciales en 28 días. La IA de Salomé sigue solo en WhatsApp |
| 6 | 20 páginas "Descubiertas pero sin indexar" | GSC | **Alto** | Google las conoce y ha decidido no gastar rastreo en ellas |
| 7 | Todo el sitemap declara `lastmod` de los últimos 3 días | `/sitemap.xml` | **Alto** | Las 129 URLs tienen fecha del 3–5 de agosto. Cuando todo dice "cambió ayer", Google deja de creer el campo entero |
| 8 | CTR del 1,3% con posición media 9,7 | GSC | **Alto** | Apareces, pero no te hacen clic. En posición 9-10 el CTR normal ronda el 2–3% |
| 9 | Consultas con muchas impresiones y cero clics | GSC 90 días | **Medio** | `estética dental avanzada` 132 impr / 0 clics · `corona metal porcelana vs zirconia` 114/0 · `dental implants in columbia` 90/0 · `turismo odontologico en panama` 70/0 · `dental tourism colombia` 65/0 |
| 10 | El embudo se rompe en "Asistió a la cita" | GHL | **Medio** | Nuevo Lead 100% → Prospecto 39,5% → Agenda Cita 15,1% → **Asistió 2,9%** → Inicio Tratamiento 0% |
| 11 | Categoría de GBP demasiado genérica | GBP | **Medio** | Apareces como "Dentista en Medellín", no como especialista en implantes |
| 12 | Search Console arrastra 22 "404" que ya no existen | GSC | **Bajo** | Verificado: los 8 ejemplos redirigen 301 correctamente. Falta pedir revalidación |
| 13 | Cadena de redirección doble (308 → 301 → 200) | Producción | **Bajo** | `/blanqueamiento/` → `/blanqueamiento` → `/servicios/estetica-dental`. Funciona, pero pierde un poco de fuerza y explica las 14 "Página con redirección" |
| 14 | Schema con `?s={search_term_string}` heredado de WordPress | JSON-LD | **Bajo** | Genera una URL fantasma que GSC marca como `noindex` |
| 15 | Solo 26 reseñas en Google | GBP | **Medio** | Con 5,0★ y 15 pacientes ganados por $41,35M, deberías tener el triple |

### 4.2 El hallazgo #1, explicado en detalle (porque es el que más dinero cuesta)

Esto es lo que ve GA4 en los últimos 28 días:

```
/diseno-de-sonrisa      1.304 vistas · 689 usuarios · 10 s de interacción · 0 eventos clave
/implantes                107 vistas ·  77 usuarios · 1 min 21 s        · 0 eventos clave
/  (home)                  67 vistas ·  27 usuarios · 1 min 05 s        · 28 eventos clave  ← el 78% del total
```

689 personas entraron a la landing de diseño de sonrisa y GA4 dice que ninguna convirtió. Pero `/gracias-diseno-de-sonrisa` recibió 26 vistas de 16 usuarios: **hubo unos 16 formularios enviados** (≈2,3% de conversión). Lo mismo en `/gracias-implantes` (9 vistas, 2 usuarios) y `/gracias` (9 vistas, 7 usuarios).

Consecuencia en cadena:
- Google Ads y Meta reciben **0 conversiones** → optimizan hacia el clic barato, no hacia el paciente.
- El CPC de Facebook está en **$238 con un CTR del 4,49%** y $1,25M gastados: métricas de tráfico buenas, resultado comercial nulo.
- En GHL, `form diseño` acumula 67 leads con un valor total de **$450.000** frente a los $32,7M de la fuente sin etiquetar. La pauta trae volumen barato; el orgánico trae pacientes.

**Estas landings son páginas servidas por proxy desde GoHighLevel** (`/implantes` y `/diseno-de-sonrisa` están excluidas de la caché en `next.config` justamente por eso). Por eso se les escapó el evento: no pasan por el mismo camino que el resto del sitio.

> **⚠️ Corrección importante (verificado el 5-ago por la tarde).**
> Esto **ya está arreglado en el código desde el 3-ago** (`lib/landing-tracking.ts`). Los datos de arriba son del 8 jul–4 ago, o sea casi todos **anteriores** al arreglo. Comprobado hoy en producción: el script está inyectado, dispara `generate_lead`, saca la navegación del iframe y etiqueta el enlace de WhatsApp. Lo que sigue fallando **no es el arreglo, es lo que falta después de él**: `generate_lead` no está marcado como evento clave en GA4, así que Google Ads no lo puede importar. Ver la sección 13.

---

## 5. Posicionamiento actual: dónde estás de verdad

### 5.1 Por país (28 días)

| País | Clics | Impresiones | CTR |
|---|---|---|---|
| Colombia | 26 | 1.442 | 1,8% |
| **Estados Unidos** | **17** | **1.803** | 0,94% |
| México | 10 | 1.073 | 0,93% |
| España | 5 | 349 | 1,4% |
| Puerto Rico | 4 | 93 | 4,3% |
| Canadá | 3 | 218 | 1,4% |
| Perú | 3 | 140 | 2,1% |
| Panamá | 1 | 160 | 0,6% |
| Argentina | 1 | 114 | 0,9% |

**EE.UU. ya te da más impresiones que Colombia.** Y Puerto Rico tiene el mejor CTR de la tabla (4,3%) con muy poco volumen: la landing dedicada funciona. Panamá, en cambio, tiene 160 impresiones y 1 solo clic — ahí hay un problema de título/meta, no de posición.

### 5.2 Dónde apareces y no te hacen clic (90 días)

| Consulta | Clics | Impresiones | Posición | Lectura |
|---|---|---|---|---|
| estética dental avanzada | 0 | 132 | 9,4 | Estás en página 1 y nadie entra |
| corona metal porcelana vs zirconia | 0 | 114 | 8,3 | Ídem — consulta comparativa, alto valor |
| dental implants in columbia | 0 | 90 | 29,0 | Página 3, error tipográfico frecuente de "Colombia" |
| turismo odontologico en panama | 0 | 70 | 27,2 | Página 3 pese a tener landing dedicada |
| dental tourism colombia | 0 | 65 | 16,8 | Página 2, keyword central del negocio |
| metal porcelana vs zirconio | 0 | 59 | 7,6 | Página 1 sin clics |
| neodent implant vs straumann | 0 | 57 | 46,2 | Tienes el artículo pero en inglés no rankea |
| odontología cosmética avanzada | 0 | 45 | 10,6 | — |
| rehabilitación oral medellín | 0 | 39 | — | Tu especialidad principal |

**Patrón claro:** varias consultas donde ya estás en página 1 no generan ni un clic. Eso es un problema de **título y meta descripción**, no de posicionamiento. Es la corrección más barata y rápida de todo el informe.

### 5.3 Competencia

Saqué los competidores del SERP real, en las dos búsquedas que definen tus dos mercados.

**"implantes dentales medellin" (mercado local):** no apareces en la página 1. Tu posición media para esa consulta es 15,2.

| Competidor | Fortaleza |
|---|---|
| clinicacolombianadeimplantes.com | Dominio exacto de la keyword, clínica monotemática |
| nataliamira.com | Marca personal + especialidad, igual que tú pero mejor posicionada |
| oralstudio.com.co | Contenido de precios ("¿Cuánto cuestan?") |
| clinicaartica.com | Página de servicio con PBX visible |
| sanadentodontologos.com.co | Volumen ("más de 4.000 implantes") |
| dentioral.com | Multiservicio |
| topdoctors.com.co / doctoralia.co | Directorios que ocupan 2 posiciones |
| drcarlospaz.dentiscale.com.co | Anuncio con precio explícito ("desde $4.300.000, corona incluida") |

**"dental implants medellin colombia" (mercado EE.UU.):**

| Competidor | Fortaleza |
|---|---|
| **nataliamira.com** | **#1**, con página en inglés dedicada `/dental-implants-medellin-colombia` |
| dentaltourismcolombia.com | Blog de costos con precios en USD ($790, $1.385) |
| mdecare.co | Comparativa de precio directa: "$800-$1500 vs $3000-$5000 en EE.UU." + garantía de 10 años |
| dentaldepartures.com | Directorio con tabla de precios USD/CAD |
| dentioral.com/english | Lista de precios por marca de implante |
| clinicaunilaser.com | Marca de clínica grande |

**Las tres cosas que hacen los que ganan y tú no:**
1. **Precios en dólares, visibles.** Todos los que rankean en inglés publican rangos de precio. Tú no.
2. **Una URL en inglés por keyword exacta.** `nataliamira.com/dental-implants-medellin-colombia` es una página, no una traducción de `/en/`.
3. **La comparación con EE.UU. como gancho.** "$800 aquí vs $3.000 allá" es el titular que convierte al paciente internacional.

**Comparativa resumida:**

| Dimensión | dracarolinamacareno.com | nataliamira.com | Clínicas locales | Gana |
|---|---|---|---|---|
| Profundidad de contenido | 35 artículos ES+EN | Media | Baja | **Tú** |
| Preparación para IA (robots.txt) | Completa | No verificada | No verificada | **Tú** |
| Posición local "implantes dentales medellin" | 15,2 | Página 1 | Página 1 | Ellos |
| Posición EE.UU. "dental implants medellin" | 18,8 | #1 | Variable | Ellos |
| Precios públicos en USD | No | Sí | Sí | Ellos |
| Reseñas de Google | 26 (5,0★) | Mayor volumen | 58+ | Ellos |
| Marca personal / autoridad clínica | Alta (libro, casos, 17 años) | Alta | Baja | **Tú** |

**Conclusión competitiva:** tienes mejor materia prima que casi todos y peor distribución que todos. No necesitas más contenido; necesitas que el contenido que ya tienes esté en la URL correcta, con el título correcto y el precio visible.

---

## 6. Oportunidades de palabras clave

Ordenadas por oportunidad. "Dificultad" es una estimación a partir del SERP observado, no de una herramienta de pago.

| Palabra clave | Dificultad | Oportunidad | Posición actual | Intención | Formato recomendado |
|---|---|---|---|---|---|
| dental implants medellin colombia | Media | **Alta** | 18,8 | Comercial | Landing EN dedicada con precios USD |
| dental implants colombia | Media | **Alta** | 27,1 | Comercial | Landing EN nacional |
| dental tourism colombia | Media | **Alta** | 16,8 | Comercial | Reforzar `/en/dental-tourism-colombia` |
| corona metal porcelana vs zirconia | Baja | **Alta** | 8,3 | Informativa | Ya existe: reescribir título y meta |
| estética dental avanzada | Baja | **Alta** | 9,4 | Informativa | Ya existe: reescribir título y meta |
| implantes dentales medellin | **Alta** | **Alta** | 15,2 | Comercial | Página de servicio + GBP + reseñas |
| cuánto cuesta un implante dental en colombia | Media | **Alta** | 6,0 | Comercial | Ya rankeas: añadir tabla de precios |
| all on 4 medellin | Media | **Alta** | — | Comercial | Ya existe `/all-on-4-medellin`: reforzar |
| diseño de sonrisa medellin precio | Media | **Alta** | 11,1 | Transaccional | Página con rango de precios real |
| turismo odontologico en panama | Baja | **Alta** | 27,2 | Comercial | Landing Panamá existe: revisar indexación |
| cirujano maxilofacial medellin | Media | Media | 23,7 | Comercial | Página de servicio existente |
| rehabilitación oral medellín | Media | Media | — | Comercial | Tu especialidad: falta página fuerte |
| neodent vs straumann implant | Baja | Media | 18,5 (EN 46,2) | Informativa | Artículo existe en ES: crear versión EN real |
| sobredentadura precios | Baja | Media | 4,3 | Comercial | Ya rankeas bien: añadir precio |
| dental implants in columbia | Baja | Media | 29,0 | Comercial | Error tipográfico con 90 impresiones/90d |
| implantes cigomáticos medellín | Baja | Media | — | Comercial | Diferenciador clínico real, poca competencia |
| all on 4 vs all on 6 | Baja | Media | — | Informativa | Artículo existe |
| cuántos días en medellín para implantes | Baja | Media | — | Informativa | Clave para turismo dental |
| dientes en el mismo día medellín | Media | Media | — | Comercial | Carga inmediata, alto valor |
| implante dental fallido qué hacer | Baja | Media | — | Informativa | Captación de rescate, alto margen |
| garantía implantes paciente internacional | Baja | Media | — | Consideración | Objeción #1 del paciente de EE.UU. |
| smile makeover colombia cost | Media | Media | — | Comercial | Página existe: añadir precios |
| veneers medellin colombia price | Media | Media | — | Comercial | Competidores ya la ocupan |
| best dentist medellin for americans | Baja | Media | — | Comercial | Long tail de alto valor |
| implantes dentales medellin precios | Media | Media | — | Transaccional | Está en "también se buscó" del SERP |

---

## 7. Checklist técnico

| Comprobación | Estado | Detalle |
|---|---|---|
| HTTPS + HSTS | ✅ Pasa | `strict-transport-security: max-age=63072000; preload` |
| robots.txt | ✅ Pasa | Correcto, y con todos los bots de IA permitidos explícitamente |
| Sitemap accesible | ✅ Pasa | 129 URLs, responde 200 |
| Caché de CDN | ✅ Pasa | `x-vercel-cache: HIT`, `cdn-cache-control: s-maxage=86400` |
| Redirects heredados | ✅ Pasa | Los 8 verificados resuelven 301 → 200 |
| Datos estructurados | ⚠️ Aviso | JSON-LD presente en 6 páginas clave, pero no en todas las de servicio ni en los artículos |
| `lastmod` del sitemap | ❌ Falla | Las 129 URLs con fecha del 3–5 ago: el campo pierde credibilidad |
| Indexación | ❌ Falla | 62 indexadas / **64 sin indexar** (20 descubiertas sin rastrear, 14 con redirección, 6 rastreadas sin indexar) |
| Cadenas de redirección | ⚠️ Aviso | Doble salto 308 → 301 en todas las URLs antiguas con barra final |
| Schema heredado de WordPress | ⚠️ Aviso | `?s={search_term_string}` genera una URL fantasma |
| CTR / metadatos | ❌ Falla | 1,3% de CTR global con posición media 9,7 |
| Landings de pauta indexables | ⚠️ Aviso | `/implantes` y `/diseno-de-sonrisa` responden 200 y no están bloqueadas ni en el sitemap |
| Eventos clave en landings | ❌ Falla | 0 conversiones registradas donde sí hay leads |

---

## 8. Plan estratégico — Google (SEO + GEO)

Diseñado 100% orgánico, sin presupuesto de pauta, como pediste.

### Semana 1 — Reparar la medición (sin esto, nada de lo demás se puede evaluar)

**Paso 1.** En GA4, marcar como **evento clave** el envío de formulario y el clic a WhatsApp en `/diseno-de-sonrisa` y `/implantes`. Como son páginas servidas por proxy desde GoHighLevel, la vía más segura es marcar como evento clave la **vista de página de `/gracias-diseno-de-sonrisa`, `/gracias-implantes` y `/gracias`**. Eso ya recupera el histórico y no depende de tocar GHL.

**Paso 2.** En Search Console, ir a Indexación → "No se ha encontrado (404)" y pulsar **VALIDAR CORRECCIÓN**. Las 22 URLs ya redirigen; Google está mostrando rastreos de mayo y junio.

**Paso 3.** Arreglar el `lastmod` del sitemap: que cada URL lleve la fecha real de su último cambio de contenido, no la del último despliegue. Es un cambio en el script `npm run lastmod` — que no toque las páginas que no cambiaron.

**Paso 4.** Bloquear `/implantes` y `/diseno-de-sonrisa` en `robots.txt` (`Disallow`), igual que `/gracias`. Son páginas de pauta y no deben competir con las páginas de servicio.

### Semana 2 — Recuperar el CTR (la ganancia más rápida)

**Paso 5.** Reescribir título y meta descripción de las 9 páginas que aparecen en página 1 y no reciben clics. Fórmula que funciona en salud: **beneficio concreto + ciudad + señal de confianza**, dentro de 55–60 caracteres.

Ejemplos concretos:

| Página | Título actual (problema) | Título propuesto |
|---|---|---|
| `estética dental avanzada` | Genérico | `Estética Dental Avanzada en Medellín \| 17 Años de Experiencia` |
| `corona metal porcelana vs zirconia` | Descriptivo | `Corona de Zirconio vs Metal-Porcelana: Cuál Elegir y Precios` |
| Landing Panamá | Genérico | `Turismo Dental desde Panamá: Implantes en Medellín en 2 Viajes` |
| `dental tourism colombia` (EN) | Genérico | `Dental Tourism Colombia: Save 60% on Implants \| Board-Certified` |

**Paso 6.** Añadir **rangos de precio visibles** en las páginas de implantes, All-on-4, diseño de sonrisa y carillas, en pesos y en dólares. Es lo que hacen los 6 competidores que te ganan en inglés. Si hay una decisión comercial de no publicar precios, publica al menos el rango ("desde $X") — el paciente internacional filtra por precio antes de filtrar por doctora.

### Semanas 3–4 — Atacar el mercado de EE.UU. en serio

**Paso 7.** Crear **una URL en inglés por keyword exacta**, no traducciones bajo `/en/`. Prioridad:
1. `/en/dental-implants-medellin-colombia` (competencia directa con el #1 actual)
2. `/en/all-on-4-colombia-cost` (comparativa de precio con EE.UU.)
3. `/en/dental-tourism-colombia-guide` (guía completa: días necesarios, hotel, traslados, garantía)

Cada una con: rango de precio en USD, comparación explícita con el precio en EE.UU., cuántos días hay que quedarse, qué pasa si algo falla al volver a casa, y un caso real con fotos.

**Paso 8.** Publicar el **caso de Minerva** (All-on-6 + All-on-4, viajó desde Panamá, con su reseña de Google) como página propia en español e inglés, en cuanto tengas la autorización de imagen. Es el activo de conversión más fuerte que tienes sin usar.

**Paso 9.** Enlazado interno: cada artículo de blog debe enlazar a su página de servicio, y cada página de servicio a 2–3 artículos. Ahora mismo el blog trae el tráfico y no lo empuja hacia la conversión.

### Mes 2 — GEO (posicionamiento en IA)

Este es el canal que ya te está dando el mejor retorno y el que casi nadie de tu competencia está trabajando.

**Paso 10.** Reforzar el schema `MedicalBusiness` + `Physician` + `FAQPage` en todas las páginas de servicio. Los modelos de IA leen datos estructurados con prioridad.

**Paso 11.** Añadir a cada artículo un bloque de **respuesta directa de 2–3 frases al principio** ("Un implante dental en Medellín cuesta entre X y Y. El tratamiento requiere 2 viajes de N días..."). Los modelos citan párrafos autocontenidos.

**Paso 12.** Publicar una página de **datos verificables**: número de implantes colocados, años de ejercicio, universidades, marcas de implante que usas, garantía. Las IA priorizan fuentes con datos concretos y atribuibles.

**Paso 13.** Trabajar las **menciones en terceros**: Doctoralia (ya apareces), Dental Departures, MDE Care, Top Doctors. Los modelos se entrenan y se apoyan en esos agregadores. Estar en ellos con la ficha canónica (NAP idéntico) multiplica la probabilidad de ser citada.

### Mes 2 — Perfil de Empresa de Google

**Paso 14.** Añadir **categorías secundarias**: "Clínica de implantes dentales", "Cirujano oral y maxilofacial", "Protesista dental", "Odontólogo cosmético". Hoy solo apareces como "Dentista".

**Paso 15.** **Una publicación por semana** en el perfil (caso, antes/después, respuesta a una duda frecuente). El perfil lleva meses sin actividad y eso pesa en el ranking local.

**Paso 16.** Campaña de reseñas: pasar de 26 a 60 en 90 días. Con 15 pacientes ganados por $41,35M, pedir la reseña al final del tratamiento debería ser parte del protocolo, no una excepción. Usa el enlace directo de "Solicita opiniones" que ya tienes en el panel.

**Paso 17.** Subir **fotos nuevas cada semana** (consultorio, equipo, casos con autorización). Google premia perfiles activos.

**Paso 18.** Completar las tareas que el propio panel te está señalando: información del perfil incompleta, productos y servicios sin detallar.

---

## 9. Plan estratégico — Instagram

Base: 4.225 seguidores, 301 publicaciones, +21 seguidores netos en 28 días, alcance ~1.100/semana, **0 leads medibles**. Capacidad acordada: **3–4 piezas por semana**, sin pauta.

### El diagnóstico de Instagram en una frase

Tienes una cuenta bonita que no pide nada. 301 publicaciones y cero conversaciones iniciadas significa que el contenido informa pero no invita, y que el camino de Instagram a GHL está cortado.

### Fase 0 — Conectar el canal (semana 1, antes de publicar nada nuevo)

**Paso 1.** Conectar **Instagram y Facebook Messenger a GoHighLevel**. Hoy la IA de Salomé solo atiende WhatsApp; todos los DMs de Instagram se quedan fuera del CRM. Sin esto, cualquier crecimiento de Instagram es invisible y no medible.

**Paso 2.** Verificar que el `wa.me` de la bio (que ya lleva `[fuente: Instagram | p: bio]`) **crea el contacto en GHL con esa fuente**. Es una prueba de 2 minutos: escribir desde el enlace de la bio y comprobar que el contacto aparece etiquetado.

**Paso 3.** Crear **un enlace distinto por ubicación**, para saber qué funciona:
- `[fuente: Instagram | p: bio]` — bio
- `[fuente: Instagram | p: historia]` — historias
- `[fuente: Instagram | p: reel]` — reels
- `[fuente: Instagram | p: dm]` — respuestas a DM

**Paso 4.** Definir el **handoff a Estefanía**: la IA responde y califica; en cuanto hay intención de agendar, pasa a persona. Sin esa regla, la IA en Instagram genera conversaciones que se enfrían.

### Fase 1 — Formato y ritmo (semanas 2–8)

**3 piezas por semana, con reparto fijo.** No improvises el formato cada semana; improvisar es lo que hace que el ritmo se caiga.

| Día | Formato | Objetivo | Contenido |
|---|---|---|---|
| Martes | **Reel de caso** (20–40 s) | Alcance | Antes/después con tu voz explicando el problema clínico. No música sola |
| Jueves | **Carrusel educativo** (6–8 slides) | Autoridad + guardados | Una duda concreta: "¿Duele un implante?", "¿Cuántos días necesito en Medellín?", "Zirconio vs metal-porcelana" |
| Sábado | **Reel de testimonio o de "detrás"** | Confianza | Paciente hablando, o tú en consulta explicando una decisión clínica |
| (Opcional) | **4ª pieza**: respuesta a un comentario o DM frecuente | Conversación | Solo si la semana lo permite |

**Historias: 3 días por semana como mínimo.** Ahora publicas 0. Las historias son donde se abre la conversación, y la conversación es donde está el lead. Cada bloque de historias termina con una **encuesta o caja de preguntas**, no con un enlace.

### Fase 2 — Convertir alcance en conversación

**Paso 5.** Cada pieza cierra con **una sola llamada a la acción, siempre la misma**: "Escríbeme *IMPLANTES* por mensaje directo y te explico tu caso". La palabra clave en DM es lo que dispara la automatización en GHL.

**Paso 6.** Configurar en GHL una **automatización de palabra clave**: quien escriba IMPLANTES / CARILLAS / SONRISA recibe respuesta inmediata de la IA, se crea el contacto con fuente `Instagram-DM` y entra al pipeline de Nuevos Pacientes.

**Paso 7.** Los **highlights** que ya tienes (DUDAS, APRENDE, IMPLANTES, TESTIMONIOS...) están bien estructurados. Falta que cada uno termine con la misma llamada a la acción y con el enlace de WhatsApp etiquetado.

**Paso 8.** **Responder todos los comentarios en las primeras 2 horas.** Con 4.225 seguidores y ~328 interacciones por mes, es asumible y es la señal de alcance más barata que existe.

### Fase 3 — Contenido que trae pacientes internacionales (mes 2 en adelante)

**Paso 9.** Una de cada cuatro piezas, **en inglés o bilingüe**, dirigida al paciente de EE.UU.: cuánto cuesta, cuántos días, qué pasa con la garantía al volver, cómo es Medellín. Es el mismo contenido que va a alimentar las páginas nuevas del sitio — grábalo una vez, úsalo en los dos sitios.

**Paso 10.** Serie recurrente **"Un caso, un viaje"**: paciente que viajó, de dónde vino, cuántos días, qué se hizo. Es lo que convierte al núcleo familiar (Serpa, Moreno/Dutari) y lo que ningún competidor está contando.

**Paso 11.** Reutilizar sistemáticamente: **un reel de Instagram = un short de YouTube + un post de Facebook + una publicación en el Perfil de Empresa**. Cero trabajo extra, cuatro canales.

### Métricas de Instagram que vas a mirar (y las que no)

**Sí:**
- Contactos nuevos creados en GHL con fuente `Instagram-*` (hoy: 0 — este es EL número)
- Conversaciones iniciadas por DM (hoy: 0)
- Alcance de no seguidores (indica si el contenido sale de tu burbuja)
- Guardados y compartidos por pieza

**No:**
- Número de seguidores. Con 4.225 seguidores y 0 leads, un seguidor más no vale nada.
- Me gusta.

**Objetivo a 90 días, realista:** de 0 a **8–12 contactos nuevos al mes** desde Instagram, medidos en GHL.

---

## 10. Arquitectura de medición en GHL

Pediste que todo se mida en GHL. Este es el mapa mínimo para que eso sea cierto.

### 10.1 El problema de fondo

En los 20 días auditados (1–20 jul) entraron 162 leads. **88 no tienen fuente** — y son precisamente los que facturan ($32,7M, 9 ganados, 10,23% de cierre). Los 67 que sí tienen fuente (`form diseño`) generaron **$450.000 y cero ganados**. Es decir: lo que mides no vale, y lo que vale no lo mides.

### 10.2 Taxonomía de fuentes (una sola, para todos los canales)

| Canal | Valor de `Fuente del Lead` | Cómo llega |
|---|---|---|
| Formulario web | `Formulario web (directo)` | Ya funciona (commit `50544c7`) |
| WhatsApp desde la web | `Web-WhatsApp` | Enlace `wa.me` con parámetro |
| Instagram bio | `Instagram-Bio` | `wa.me` etiquetado ✅ ya existe |
| Instagram DM | `Instagram-DM` | Requiere conectar IG a GHL |
| Instagram historia / reel | `Instagram-Historia` / `Instagram-Reel` | `wa.me` etiquetado |
| Perfil de Empresa | `GBP` | UTM ya funciona (`utm_source=gbp`) ✅ |
| Búsqueda orgánica | `Orgánico-Google` | Desde GA4 / parámetro en el formulario |
| IA (ChatGPT, Grok, Perplexity) | `IA-Asistente` | Referrer en el formulario |
| Referido / boca a boca | `Remisión` | Manual, en la primera conversación |

### 10.3 Los 5 arreglos de GHL, en orden

1. **Conectar Instagram y Facebook** a Conversaciones. Sin esto no hay atribución posible de Instagram.
2. **Cerrar el desplegable `Fuente del Lead`**: verificar que acepta todos los valores de la tabla de arriba. El campo sigue rechazando valores que la web le manda.
3. **Preguntar la fuente en la primera respuesta** cuando el lead entra sin fuente: "¿Cómo nos encontraste?". La IA de Salomé puede hacerlo y guardar el valor. Eso ataca directamente los 88 leads sin origen.
4. **Separar los dos pipelines en los informes**: Nuevos Pacientes (valor del lead) y Pacientes Actuales (valor del tratamiento). Hoy el dashboard mezcla $32,7M de un lado con $41,35M del otro y ninguna cifra significa nada.
5. **Arreglar la etapa "Asistió a la cita"**. El embudo dice 2,93% acumulado y 0% en "Inicio Tratamiento", lo cual es falso: hay 15 pacientes ganados por $41,35M en el otro pipeline. El paso entre pipelines no se está registrando, y por eso ningún informe de conversión sirve.

### 10.4 El tablero semanal (5 números, 5 minutos)

| Número | Dónde | Meta |
|---|---|---|
| Clics orgánicos (7 días) | Search Console | ≥ 20/semana en 90 días |
| Contactos nuevos por fuente | GHL | 0 sin fuente |
| Contactos desde Instagram | GHL | ≥ 2/semana en 90 días |
| Acciones del Perfil de Empresa | GBP | ≥ 15/mes en 90 días |
| Citas asistidas | GHL | Medida de verdad, no 2,93% |

---

## 11. Plan de acción priorizado

### Ganancias rápidas — esta semana (menos de 2 horas cada una)

| # | Acción | Impacto | Esfuerzo | Depende de |
|---|---|---|---|---|
| 1 | Marcar `/gracias*` como evento clave en GA4 | **Alto** | 20 min | — |
| 2 | Validar la corrección de los 404 en Search Console | Medio | 5 min | — |
| 3 | Añadir categorías secundarias al Perfil de Empresa | **Alto** | 15 min | — |
| 4 | Publicar la primera publicación semanal en el Perfil de Empresa | **Alto** | 30 min | — |
| 5 | Reescribir 9 títulos y metas de páginas sin clics | **Alto** | 2 h | — |
| 6 | Bloquear `/implantes` y `/diseno-de-sonrisa` en robots.txt | Medio | 10 min | — |
| 7 | Probar el `wa.me` de la bio de Instagram → ver si llega a GHL con fuente | **Alto** | 10 min | — |
| 8 | Enviar el enlace de reseñas a los últimos 10 pacientes | **Alto** | 30 min | — |
| 9 | Publicar 3 historias esta semana con caja de preguntas | Medio | 30 min | — |

### Inversiones estratégicas — este trimestre

| # | Acción | Impacto | Esfuerzo | Depende de |
|---|---|---|---|---|
| 10 | Conectar Instagram + Facebook a GHL con la IA y el handoff a Estefanía | **Alto** | Medio día | Acceso a Meta Business |
| 11 | Arreglar el `lastmod` del sitemap | **Alto** | Medio día | Repositorio |
| 12 | 3 landings nuevas en inglés con precios en USD | **Alto** | 3–4 días | Decisión sobre publicar precios |
| 13 | Publicar el caso de Minerva como página propia (ES + EN) | **Alto** | 1 día | Autorización de imagen |
| 14 | Ritmo de 3 piezas/semana en Instagram durante 12 semanas | **Alto** | Continuo | Grabación en bloque |
| 15 | Campaña de reseñas: de 26 a 60 | **Alto** | Continuo | Protocolo en consulta |
| 16 | Enlazado interno blog ↔ servicios | Medio | 1 día | — |
| 17 | Schema `MedicalBusiness` + `FAQPage` en todas las páginas de servicio | Medio | 1 día | — |
| 18 | Bloque de respuesta directa al inicio de cada artículo (GEO) | **Alto** | 2 días | — |
| 19 | Arreglar el paso entre pipelines en GHL | **Alto** | Medio día | Revisar el flujo que mueve oportunidades |
| 20 | Fichas en Dental Departures, MDE Care, Top Doctors con NAP canónico | Medio | 1 día | Ficha canónica de identidad |

---

## 12. Lo que este informe no pudo verificar

Para que quede constancia y no se dé por hecho:

- **Insights nativos de Instagram por publicación.** Meta Business Suite solo expuso los datos a nivel de página de Facebook (que incluyen el alcance conjunto). Los datos por reel/carrusel requieren entrar desde la app o desde la vista de contenido de Business Suite.
- **Desglose de acciones del Perfil de Empresa por tipo** (llamadas / rutas / clics web mes a mes). El panel abrió pero no cargó las pestañas individuales; los totales de 30 días los tomé del informe que GHL ya trae integrado.
- **Volumen de búsqueda y dificultad reales de las palabras clave.** No hay Ahrefs ni Semrush conectados. Las estimaciones de dificultad salen del SERP observado. Si quieres cifras exactas, hay que conectar una de esas herramientas.
- **Visibilidad en modelos de IA medida directamente.** La confirmación de que el canal funciona viene de GA4 ("AI Assistant"), no de haber preguntado a ChatGPT/Grok/Perplexity y visto si te citan. Eso conviene medirlo aparte, con una lista fija de preguntas repetida cada mes.
- **Las 12 URLs restantes de los 404.** Search Console solo muestra 10 ejemplos por pantalla y la paginación no respondió. Las 10 que sí vi ya están corregidas y siguen el mismo patrón (URLs de la era WordPress).

---

## 13. Verificación de la medición (comprobado en vivo el 5-ago-2026)

Contexto que faltaba en la primera versión: **la pauta corría sobre el dominio `.co` con la medición rota, se pasó al `.com` a finales de julio y las campañas están apagadas mientras se termina de automatizar todo.** Eso explica buena parte de lo que se ve en los datos. Esta sección dice, pieza por pieza, **qué funciona hoy de verdad y qué falta**.

### 13.1 Lo que YA funciona (verificado, no supuesto)

| Pieza | Estado | Cómo se comprobó |
|---|---|---|
| Consentimiento → carga de GA4 y Píxel | ✅ Funciona | Cargando la landing con `?utm_source=meta_ads&fbclid=…`: `gtag` y `fbq` presentes, cookies `_ga`, `_ga_8NTC47VWNV`, `_fbp`, `_fbc`, `_gcl_au` escritas |
| Script de medición de las landings | ✅ Funciona | `<script data-dcm="landing-tracking">` presente en `/diseno-de-sonrisa` y `/implantes` |
| Etiquetado del WhatsApp en la landing | ✅ Funciona | El enlace real quedó: `Hola, 🌐meta quiero agendar mi valoración de Diseño de Sonrisa [fuente: Meta Ads \| p: diseno-de-sonrisa]` |
| Salida del iframe hacia la página de gracias | ✅ En sitio | El script está inyectado; falta la prueba de extremo a extremo con un envío real |
| Etiquetas en las páginas de gracias | ✅ Funciona | `/gracias-diseno-de-sonrisa` y `/gracias-implantes` traen GA4 `G-8NTC47VWNV` y Ads `AW-17492725815` en el HTML |
| `generate_lead` llega a GA4 | ✅ Funciona | Aparece en "Eventos recientes" del panel de GA4 |
| Detección de fuente, incluida la IA | ✅ Funciona | GA4 muestra `chatgpt.com / ai-assistant`, `instagram / bio`, `toursalud / profile` como fuentes reales |
| Redirección `.co` → `.com` (raíz) | ✅ Funciona | `https://dracarolinamacareno.co/` → 301 → `https://dracarolinamacareno.com/` |
| `www.dracarolinamacareno.com` → apex | ✅ Funciona | 308 a la raíz |
| Vinculación GA4 ↔ Google Ads | ✅ Activa | Cuenta 285-456-9300, vinculada el 4-may-2026, publicidad personalizada habilitada |

### 13.2 Lo que está ROTO o a medias

| # | Problema | Evidencia | Impacto |
|---|---|---|---|
| V1 | **`generate_lead` NO está marcado como evento clave en GA4** | Los eventos clave configurados son: `ads_conversion_Contactar_1`, `contact_form_submit`, `cta_click`, `purchase`, `whatsapp_click`. `generate_lead` sale en "Eventos recientes" pero sin estrella | El arreglo del 3-ago manda el dato y GA4 lo tira. Google Ads no lo puede importar. **Es el eslabón que falta** |
| V2 | **La conversión `Cita asistida` está INACTIVA** | Google Ads → Acciones de conversión: `Cita asistida`, fuente "Sitio web (Importar desde los clics)", estado **Inactiva**, 0 conversiones | Es la que cierra el círculo: le dice a Google qué lead se volvió paciente. Sin ella, Google optimiza a formularios, no a pacientes |
| V3 | **El `.co` solo redirige la raíz; todas las rutas dan 404** | `/implantes-dentales/`, `/contacto`, `/blog`, `/diseno-de-sonrisa`, `/implantes` → **404** en el `.co` | Cualquier anuncio, código QR, tarjeta o enlace antiguo que apunte a una ruta del `.co` cae en un 404. Y se pierde toda la autoridad de esas URLs |
| V4 | **`www.dracarolinamacareno.co` no resuelve** | Sin registro DNS | Si algún anuncio o directorio usa el `www` del `.co`, es un error duro de conexión |
| V5 | **Los clics a WhatsApp desde las landings de pauta no se miden** | El HTML de `/diseno-de-sonrisa` e `/implantes` no contiene `whatsapp_click` | El botón de WhatsApp es la vía principal de contacto y en las landings de pauta es invisible para GA4 y para Google Ads |
| V6 | **No hay Consent Mode v2** | `GoogleAnalytics.tsx` hace `if (!allowed) return null`: si no aceptan cookies no se carga nada, ni siquiera las señales sin cookies | Quien rechaza cookies desaparece por completo. Google no puede modelar esas conversiones. Explica parte de la brecha entre 80 clics en Search Console y 44 sesiones orgánicas en GA4 |
| V7 | **Referencias propias contaminando la atribución** | En GA4: `api.leadconnectorhq.com / referral` (2 sesiones) y `ads.google.com / referral` (4 sesiones) | El iframe del formulario de GHL corta la sesión y la reatribuye a sí mismo. Hay que excluirlos en la configuración de la etiqueta |
| V8 | **Sigue vinculada la cuenta de Google Ads cancelada** | GA4 → Vinculaciones: cuenta 668-329-3119 (marcada **Cancelado** en Google Ads), vinculada desde oct-2023 | Ensucia los informes y es probablemente la causa del "Error al cargar datos" del panel de Google Ads dentro de GHL |
| V9 | **Las conversiones nuevas del `.com` nunca han disparado** | `Registro - Diseño de Sonrisa (.com)` y `Registro Implantes (.com)`: "No hay conversiones recientes", 0.00 | Es esperable (las campañas están apagadas desde el 1-ago y el arreglo es del 3-ago), pero significa que **nadie las ha validado todavía** |
| V10 | **Las importaciones desde GA4 conservan el nombre del `.co`** | `www.dracarolinamacareno.co (web) contact_form_submit`, `… whatsapp_click`, `… cta_click` | El nombre es cosmético, pero confunde al leer los informes y hace difícil saber cuál está midiendo el `.com` |
| V11 | **Instagram y Facebook siguen sin conectar a GHL** | Meta Business Suite: 0 conversaciones iniciadas, 0 contactos nuevos, 0 clientes potenciales en 28 días | Todo DM de Instagram se queda fuera del CRM |
| V12 | **La conversión "Cliente potencial calificado" está en "Configuración incorrecta"** | Google Ads → Objetivos, grupo 3 | Es el objetivo que debería recibir la importación desde GHL |

### 13.3 Prueba de extremo a extremo antes de encender nada

Esto hay que hacerlo **en este orden** y con un envío real. Es una hora de trabajo y evita quemar presupuesto midiendo mal otra vez.

1. **Marcar `generate_lead` como evento clave** en GA4 (Administrar → Eventos → estrella). Sin esto, los pasos siguientes no sirven.
2. Marcar también **`form_start`** como evento normal de seguimiento (ya llega) para poder ver dónde se cae la gente dentro del formulario.
3. Excluir en GA4 (Flujo de datos → Configurar ajustes de etiqueta → Enumerar referencias no deseadas): `api.leadconnectorhq.com`, `ads.google.com`, `leadconnectorhq.com`.
4. **Desvincular la cuenta de Google Ads cancelada** (668-329-3119) de GA4.
5. Abrir `https://dracarolinamacareno.com/diseno-de-sonrisa?gclid=PRUEBA123` en una ventana de incógnito, **aceptar cookies**, rellenar el formulario con datos de prueba y enviarlo.
6. Comprobar, en este orden:
   - GA4 → Tiempo real: aparecen `form_start`, `generate_lead` y la vista de `/gracias-diseno-de-sonrisa`
   - GHL: el contacto entra con fuente `Google Ads`
   - Google Ads → Acciones de conversión: `Registro - Diseño de Sonrisa (.com)` pasa de "No hay conversiones recientes" a "Activa" (puede tardar hasta 24 h)
7. Repetir lo mismo con `?fbclid=PRUEBA123` y verificar en el Administrador de Eventos de Meta que llega `Lead`.
8. Repetir con el **botón de WhatsApp** de la landing: comprobar que el mensaje llega a WhatsApp con `[fuente: Google Ads | p: diseno-de-sonrisa]`.
9. **Activar la conversión `Cita asistida`** y hacer una importación de prueba con un solo registro, para confirmar que el formato del archivo es correcto.
10. Solo cuando los 9 pasos anteriores estén en verde, encender **una** campaña con presupuesto pequeño durante 7 días y volver a verificar. Después, escalar.

### 13.4 Los dos arreglos de dominio que hay que hacer sí o sí antes de encender

**A. Redirección del `.co` que conserve la ruta.** Hoy solo la raíz redirige. Hay que configurar en el hosting del `.co` (GoDaddy, según los nameservers `domaincontrol.com`) una redirección **301 con reenvío de ruta** al `.com`, o mejor: apuntar el `.co` al mismo proyecto de Vercel y dejar que el `next.config` resuelva cada URL a su equivalente. Así se recupera la autoridad de las URLs antiguas en vez de tirarla.

**B. Registro DNS para `www.dracarolinamacareno.co`.** Un CNAME que apunte al mismo destino que el apex. Hoy simplemente no existe.

---

## 14. Plan de crecimiento en Instagram: seguidores y vistas

La sección 9 explica cómo convertir Instagram en leads. Esta explica lo otro que pediste: **cómo crecer en seguidores y en vistas**. Son dos motores distintos y conviene no confundirlos.

### 14.1 Dónde estás y qué significa

| Métrica | Hoy | Lectura |
|---|---|---|
| Seguidores | 4.225 | Base decente para una marca personal médica |
| Publicaciones | 301 | Mucho contenido acumulado |
| Seguidores nuevos (28 días) | +22, netos +21 | **0,5% de crecimiento mensual**. A este ritmo tardas 16 años en duplicar |
| Alcance de Instagram | ~1.100/semana | El 26% de tus propios seguidores. Muy bajo |
| Reproducciones de 3 s (28 días) | 230 | El vídeo casi no se está viendo |
| Tiempo total de reproducción | 1 h 29 min en 28 días | Confirma lo anterior |
| Interacciones | 328, el **99,4% de no seguidores** | Lo poco que sale, sale por alcance frío, no por comunidad |

**El diagnóstico:** publicas mucho y te ve poca gente. Con 301 publicaciones y 4.225 seguidores, el problema no es constancia ni cantidad — es que **el formato no está hecho para que el algoritmo lo reparta**. 230 reproducciones de 3 segundos en un mes significa que casi no estás publicando vídeo, o que el que publicas no retiene.

### 14.2 La regla que ordena todo el plan

> **Los seguidores son consecuencia de las vistas, y las vistas son consecuencia de la retención en los primeros 3 segundos.**

No se crece publicando más. Se crece haciendo que cada pieza aguante los 3 primeros segundos. Todo lo que sigue está diseñado alrededor de eso.

### 14.3 Motor 1 — Vistas: el reel de captura

**3 reels por semana, todos con la misma estructura de 4 partes.** No es creatividad libre: es una plantilla, y por eso se puede grabar en bloque.

| Segundo | Qué pasa | Ejemplo |
|---|---|---|
| 0–3 | **Gancho visual + frase corta.** Nunca tu cara presentándote, nunca "hola, soy la Dra." | Un antes/después brutal ya en pantalla + "Esto tenía 4 implantes mal puestos" |
| 3–10 | **El conflicto.** Qué salió mal, qué duele, qué le preocupa al paciente | "Le habían dicho que ya no tenía hueso" |
| 10–30 | **La explicación clínica en lenguaje de persona normal** | "El hueso del pómulo sí servía. Eso es un implante cigomático" |
| 30–40 | **El resultado + una sola llamada a la acción** | Resultado + "Escríbeme IMPLANTES si te dijeron que no tienes hueso" |

**Los 5 tipos de gancho que funcionan en odontología** (rota entre ellos, uno por semana):
1. **Antes/después sin transición** — el resultado en el primer fotograma
2. **Contradicción** — "Te dijeron que necesitabas 8 implantes. Necesitas 4"
3. **Error ajeno** — "Esto es lo que pasa cuando ponen un implante sin planificar" (sin nombrar a nadie)
4. **Precio** — "Cuánto cuesta de verdad una boca completa en Colombia"
5. **Miedo concreto** — "¿Duele? Te muestro exactamente qué se siente"

**Reglas técnicas que no son opcionales:**
- 9:16, mínimo 720p, entre 15 y 90 segundos
- **Con voz siempre.** Meta ya te está avisando de esto en las recomendaciones: los reels silenciados no se reparten
- Subtítulos quemados (el 80% lo ve sin sonido)
- Texto en pantalla en el primer segundo
- Nada de música sola sobre imágenes bonitas: eso es lo que te tiene en 230 reproducciones

### 14.4 Motor 2 — Seguidores: dar una razón para quedarse

Una vista no te sigue si no le prometes algo. Hoy tu perfil no promete nada concreto.

**Paso 1 — Reescribir la bio para que prometa un resultado, no un cargo.** Ahora dice qué eres. Tiene que decir qué gana quien te sigue.

```
Actual:    Implantes · Prótesis fija · Diseño de sonrisa
           Transformo sonrisas → transformo vidas
           +17 años | Medellín 🇨🇴 | Pacientes...

Propuesta: Te explico si TU caso tiene solución (aunque te
           dijeran que no)
           Implantes y boca completa · Medellín 🇨🇴
           +17 años · Pacientes de 🇺🇸 🇵🇷 🇵🇦
           👇 Escríbeme y te digo qué necesitas
```

**Paso 2 — Cerrar cada reel con una razón para seguir, distinta de la llamada a la acción de venta.** "Sígueme si vas a hacerte implantes: subo un caso real cada semana."

**Paso 3 — Serie recurrente con nombre propio.** Las series generan seguidores porque crean expectativa. Elige una y sostenla 12 semanas:
- **"Casos que otros rechazaron"** — es tu diferencial clínico real (cigomáticos, poco hueso, implantes fallidos)
- **"Un caso, un viaje"** — el paciente internacional: de dónde vino, cuántos días, qué se hizo

**Paso 4 — Colaboraciones.** Es la palanca más rápida para saltar de 4.000 a 10.000. Publicaciones en colaboración (el contenido sale en las dos cuentas) con:
- Cirujanos, periodoncistas y ortodoncistas de Medellín con audiencia parecida
- Cuentas de turismo/expatriados en Medellín, para el público de EE.UU.
- Pacientes con cuenta pública que ya te dieron testimonio

Una colaboración al mes es suficiente y multiplica el alcance sin coste.

**Paso 5 — Historias 4 días por semana.** Hoy publicas 0. No hace falta producción: encuesta, caja de preguntas, un trozo de consulta. Las historias no traen seguidores nuevos, pero **retienen a los que llegan** y avisan al algoritmo de que la cuenta está viva.

### 14.5 Calendario semanal (3–4 piezas, la capacidad que confirmaste)

| Día | Pieza | Motor |
|---|---|---|
| **Lunes** | Historias: encuesta sobre la duda de la semana | Retención |
| **Martes** | **Reel de caso** (gancho antes/después) | Vistas |
| **Miércoles** | Historias: caja de preguntas + responder 2 en vídeo | Comunidad |
| **Jueves** | **Reel educativo** (gancho contradicción o precio) | Vistas + autoridad |
| **Viernes** | Historias: detrás de cámaras de consulta | Cercanía |
| **Sábado** | **Reel de testimonio** o carrusel de caso paso a paso | Confianza |
| **Domingo** | Descanso, o la 4ª pieza si la semana lo permitió | — |

**Grabación en bloque: un solo día al mes, 3 horas, 12 reels.** Es la única forma de sostener esto. Guion cerrado antes de grabar, misma ropa no importa, cambia el fondo.

### 14.6 Metas a 90 días, con números

| Métrica | Hoy | Meta a 90 días | Cómo se consigue |
|---|---|---|---|
| Seguidores | 4.225 | **5.500–6.000** | +450/mes en vez de +22 |
| Alcance semanal IG | ~1.100 | **8.000–12.000** | 3 reels/semana con gancho real |
| Reproducciones 3 s / mes | 230 | **6.000+** | Es el indicador que hay que vigilar cada semana |
| Contactos nuevos desde IG en GHL | 0 | **8–12/mes** | Requiere conectar IG a GHL (V11) |

**El número que revisas cada lunes: reproducciones de 3 segundos.** Si sube, todo lo demás sube detrás. Si no sube, el problema está en los 3 primeros segundos, no en el resto del plan.

### 14.7 Lo que NO hay que hacer

- **No comprar seguidores ni usar sorteos.** En salud destruye la calidad de la audiencia y Meta ya tiene la cuenta clasificada como "Proveedor de salud y bienestar": el margen de error es estrecho.
- **No publicar por publicar.** 301 publicaciones y +22 seguidores al mes demuestran que el volumen sin gancho no mueve nada.
- **No perseguir seguidores como métrica final.** Con 4.225 seguidores y 0 leads, el seguidor número 4.226 vale cero. El objetivo real son las conversaciones.
- **No mencionar precios de financiación ni socios con comisión** en el contenido público.

---

## 15. Orden de ejecución recomendado

Con el contexto del `.co` → `.com`, el orden correcto es este, y no otro:

| Fase | Cuándo | Qué |
|---|---|---|
| **0. Cerrar la medición** | Esta semana | V1 (evento clave `generate_lead`), V7 (referencias excluidas), V8 (desvincular cuenta cancelada), V5 (WhatsApp en landings), prueba de extremo a extremo de 13.3 |
| **1. Arreglar el dominio** | Esta semana | V3 y V4: redirección del `.co` con ruta + DNS del `www.co` |
| **2. Cerrar el círculo comercial** | Semana 2 | V2 y V12: activar `Cita asistida` e importación desde GHL. V11: conectar Instagram y Facebook a GHL |
| **3. Encender UNA campaña de prueba** | Semana 3 | Presupuesto pequeño, 7 días, verificar que la conversión registra antes de escalar |
| **4. Orgánico en paralelo, desde ya** | Continuo | Perfil de Empresa (§8), títulos y metas (§8 paso 5), reels de Instagram (§14) |

El orgánico y el Perfil de Empresa **no dependen de nada de lo anterior**: se pueden arrancar hoy mismo y son los que sostienen el negocio mientras la pauta está apagada.

---

## 16. Reverificación del 5-ago (noche): correcciones y un hallazgo nuevo y grave

Reverificado a petición tuya, antes de tocar nada. **Cinco cosas que dije antes estaban mal o imprecisas**, y apareció **un problema nuevo que hay que resolver antes de encender Facebook mañana**.

### 16.1 🔴 HALLAZGO NUEVO Y CRÍTICO: Meta está bloqueando los eventos web de tus tres dominios

En el Administrador de eventos de Meta, píxel "Pixel Caro Macareno" (ID 36066925139564924), hay una alerta activa:

> **"Se bloquearon algunos datos de sitios web"** — código `tiered_enforcement_full_blocking_web_actions`
> *"Algunos datos de sitios web están bloqueados porque aparentemente no cumplen nuestras Condiciones de las herramientas empresariales de Meta, ya que podrían tener relación con enfermedades, estados de salud concretos o relaciones proveedor-paciente."*

**Sitios web bloqueados:**
- `dracarolinamacareno.co`
- `dracarolinamacareno.com`
- `implantes.dracarolinamacareno.com`

**Qué significa:** es un bloqueo **total** de los eventos web de los tres dominios, no un aviso. Si mañana se encienden campañas de Facebook optimizadas a conversión web, **Meta va a descartar esos eventos** y la campaña optimizará a ciegas. Es exactamente el problema que se quiso evitar apagando y migrando.

**Qué hacer, y es lo primero de mañana:** Administrador de eventos → Acciones → "Se bloquearon algunos datos de sitios web" → **Revisar solución → Solicitar una revisión**, para los tres orígenes. Meta ofrece dos vías: lista de autorizados/bloqueados (solo si hubiera dominios ajenos, no es el caso) y **solicitar revisión de la categorización**, que es la que aplica. No lo hice yo: es una solicitud formal a Meta y la debes enviar tú o Sebastián.

**Mientras tanto**, y aunque se pida la revisión: no lances la campaña optimizada a conversión web. Arranca optimizando a **mensajes / clientes potenciales** (clic a WhatsApp o a Messenger), que no dependen del evento web bloqueado.

Nota: `lib/analytics.ts` ya documenta que en agosto se dejó de mandar `content_name` con el tratamiento por esta misma política, y fue lo correcto. Pero el bloqueo es **a nivel de dominio**, no de parámetro, así que quitar el parámetro no lo levanta por sí solo: hay que pedir la revisión.

### 16.2 🟢 Lo que está mejor de lo que dije

**El píxel está sano.** Puntuación de calidad de datos **8.0/10**, calificada como *"Great en comparación con anunciantes similares"* y por encima del objetivo (7,66). **La API de conversiones (CAPI) está activa**, junto con el píxel. Gasto afectado por baja calidad: solo $166.700.

**`Cita asistida` sí está creada y bien configurada.** Tenías razón. Detalle real:

| Campo | Valor |
|---|---|
| Fecha de creación | 29/5/2026 |
| Optimización | Clientes potenciales calificados, **Acción principal** |
| Valor | Valores distintos; por defecto **USD 40** |
| Fuente | Importar desde los clics |
| Ventana posclic / vista | 90 días / 3 días |
| Atribución | Basada en datos (recomendado) |

Lo único que falta es el último paso, y el propio panel lo dice: **"Esta acción de conversión no recibe datos porque no hay ninguna conexión asociada"** → botón *Conectar una fuente de datos*. O sea: la acción está bien hecha, falta enganchar la subida (archivo programado desde Google Sheets, SFTP/HTTPS o la API). Corrijo lo que puse en V2: **no es "configuración incorrecta", es "sin fuente conectada"**.

**Los títulos y las meta descripciones están bien hechos.** Los medí uno a uno en producción:

| Página | Título (car.) | Descripción (car.) |
|---|---|---|
| `/` | 56 | 154 |
| `/servicios/implantes-dentales` | 53 | 146 |
| `/servicios/estetica-dental` | 52 | 155 |
| `/coronas-zirconio-carillas` | 42 | 152 |
| `/all-on-4-medellin` | 47 | 151 |
| `/servicios/rehabilitacion-oral-completa` | 47 | 154 |
| `/servicios/cirugia-maxilofacial` | 47 | 155 |
| `/turismo-dental-panama` | 52 | 155 |
| `/dental-tourism-colombia` | 56 | 145 |
| `/blog/costo-implantes-dentales-colombia` | 54 | 150 |
| `/blog/straumann-y-neodent-cual-implante-elegir` | 47 | 147 |
| `/casos-clinicos` | 46 | 140 |
| `/en/dental-tourism-colombia` | 47 | **170** ⚠️ |
| `/en/blog/turismo-dental-en-colombia-seguro` | **67** ⚠️ | 131 |

**Todo dentro de rango salvo dos casos**, y son los dos únicos ajustes reales que quedan aquí:
- `/en/dental-tourism-colombia`: descripción de **170 caracteres**, se va a cortar. Además contiene `&amp;` en vez de `&`.
- `/en/blog/turismo-dental-en-colombia-seguro`: título de **67 caracteres**, se corta en el resultado. Y es tu página nº 1 en clics (17), así que aquí sí vale la pena afinar.

**Retiro la recomendación de "reescribir 9 títulos" del paso 5 de la sección 8.** Era incorrecta.

**Los precios en dólares ya están publicados.** Otra cosa que dije mal. Las metas actuales dicen "Implantes desde $1.200 USD", "$550 USD por pieza (vs $1.500-2.500 USA)", "All-on-4 desde $10.000 USD (vs $25K-35K USA)", "Ahorra hasta 65% vs EE.UU.". Lo estás haciendo igual o mejor que los competidores que rankean en inglés. **Retiro el paso 6 de la sección 8.**

### 16.3 🔵 Reinterpretación: por qué el CTR es 1,3%

Con los títulos y las metas verificados, la explicación que di antes ya no se sostiene. La correcta es más simple:

**El CTR es 1,3% porque la posición media es 9,7.** Estás en el fondo de la página 1 y en las páginas 2 y 3. A esas posiciones, un CTR entre el 1% y el 2% es lo normal. Las consultas de "muchas impresiones y cero clics" que señalé están todas donde cabía esperarlo:

| Consulta | Posición | CTR esperado a esa posición |
|---|---|---|
| corona metal porcelana vs zirconia | 8,3 | ~1,5% |
| estética dental avanzada | 9,4 | ~1,2% |
| dental tourism colombia | 16,8 | ~0,3% |
| turismo odontologico en panama | 27,2 | ~0,1% |
| dental implants in columbia | 29,0 | ~0,1% |
| neodent implant vs straumann | 46,2 | ~0% |

**Conclusión: no es un problema de redacción, es de posición.** La palanca no es reescribir metas, es subir de la posición 8–10 a la 3–5 en las consultas donde ya estás cerca. Eso se consigue con profundidad de contenido, enlazado interno y autoridad, no con el título.

Un matiz que sí es real: para `corona metal porcelana vs zirconia` (114 impresiones) la página que rankea es `/coronas-zirconio-carillas`, cuyo título habla de "Coronas de Zirconio y Carillas en Medellín" — no de la comparación. Existe además el artículo `/blog/coronas-zirconia-porcelana`. **Ahí sí hay algo que resolver, pero es de arquitectura (qué página debe rankear para esa consulta), no de metadatos.**

### 16.4 ⚪ El dominio `.co`: qué es exactamente

Tienes razón en que no es tu dominio de marca. Esto es lo que dice el registro público:

| Dato | Valor |
|---|---|
| Dominio | `dracarolinamacareno.co` |
| Fecha de creación | **11 de marzo de 2026** |
| Vencimiento | 11 de marzo de 2027 |
| Registrador | GoDaddy |
| Titular | **Registration Private / Domains By Proxy, LLC** (privacidad activada) |
| Configuración | Reenvío de dominio de GoDaddy, **solo la raíz** |

Encaja con lo que dices: se registró en marzo, justo para las landings de pauta de implantes y diseño de sonrisa. Hoy la raíz redirige al `.com` y **todas las rutas dan 404** (`/diseno-de-sonrisa`, `/implantes`, `/gracias-*`, etc.).

**Rebajo la severidad de lo que puse en V3.** Si el `.co` solo alojó landings de campaña y las campañas se van a relanzar sobre el `.com`, el impacto es menor: no hay autoridad SEO que rescatar. Quedan dos cosas reales:

1. **Cualquier anuncio, código QR o enlace antiguo que apunte a una ruta del `.co` cae en un 404.** Antes de encender, revisar que ninguna campaña conserve una URL final del `.co`.
2. **El dominio está a nombre de un proxy de privacidad y vence el 11-mar-2027.** Conviene saber en qué cuenta de GoDaddy está y quién la controla, aunque sea para dejarlo caducar a propósito y no por olvido.

Y sale a la luz un tercer dominio que no estaba en el mapa: **`implantes.dracarolinamacareno.com`**, que Meta lista como origen de datos bloqueado. Hay que averiguar qué es y si sigue vivo.

### 16.5 🟡 Otra acción pendiente en Meta, y encaja justo con lo que quieres

En el Administrador de eventos hay una acción marcada **Prioridad alta**:

> *"Conéctate a la actividad de chat desde las apps de mensajes comerciales. Ahora puedes usar la API de conversiones para conectar datos de los chats con negocios. Descubre cuántas compras o clientes potenciales recibes cuando publicas anuncios de clic a Instagram, Messenger o WhatsApp."*

Es exactamente la pieza que falta para medir Instagram y WhatsApp de verdad, y además es la vía que **no depende del evento web que está bloqueado**. Debería ir en el mismo bloque de trabajo de mañana.

### 16.6 🟢 GHL: confirmado que el trabajo está en curso

92 etiquetas creadas, con una taxonomía de intención viva y en uso: `consulta:implantes dentales` (26-may), `consulta:all-on-4 / all-on-6` (18-jul), `consulta:otra consulta` (24-jun) y **`consulta:diseño de sonrisa digital` creada el 4 de agosto** — o sea, ayer. Se nota el trabajo. No toqué nada.

Lo que no pude verificar: el panel de **Integraciones** de GHL carga en blanco desde aquí (mismo problema que el editor de flujos, vive en otra aplicación embebida). Así que **la conexión de Instagram y Facebook a GHL sigue sin confirmar por mi parte**: lo que sí es un dato duro es que Meta reporta **0 conversaciones iniciadas y 0 contactos nuevos** en 28 días, lo cual apunta a que no está conectado — pero confírmalo tú en pantalla antes de darlo por hecho.

### 16.7 Orden corregido para mañana y esta semana

**Mañana, Facebook (en este orden):**

1. **Solicitar la revisión de la categorización** de los 3 dominios bloqueados en el Administrador de eventos. Es lo primero porque el plazo de respuesta de Meta no lo controlas.
2. Activar la **API de conversiones para chats** (acción de prioridad alta).
3. Confirmar en pantalla si Instagram y Facebook están conectados a GHL. Si no, conectarlos.
4. Preparar la campaña optimizada a **mensajes**, no a conversión web, mientras el bloqueo siga activo.

**Google Ads, después:**

5. Marcar **`generate_lead`** como evento clave en GA4. Sigue siendo el eslabón que falta.
6. **Conectar la fuente de datos** de `Cita asistida` (subida programada desde Google Sheets es lo más simple de mantener).
7. Excluir `api.leadconnectorhq.com` y `ads.google.com` como referencias no deseadas.
8. Desvincular de GA4 la cuenta de Ads cancelada (668-329-3119).
9. Revisar que **ninguna campaña conserve una URL final del `.co`**.
10. Prueba de extremo a extremo (sección 13.3) y solo entonces encender una campaña con presupuesto pequeño.

**Web, dos ajustes pequeños y nada más:**

11. Acortar el título de `/en/blog/turismo-dental-en-colombia-seguro` a ≤60 caracteres.
12. Acortar la descripción de `/en/dental-tourism-colombia` a ≤155 y cambiar `&amp;` por `&`.

---

## 17. Plan estructurado de crecimiento orgánico: SEO + GEO

### 17.1 Primero, un dato: sí están llegando leads

Dijiste que en los últimos 7-10 días no ha llegado ni un lead nuevo. Fui al CRM a contarlos uno a uno. **No es cero.**

Contactos creados del **27 de julio al 5 de agosto: 23**. De esos, **9 traen señal de intención real** (etiqueta `consulta:*`, `lead-whatsapp` o `web_form`). Quitando la prueba del 5-ago y tu propio contacto, quedan **7 leads reales en 10 días ≈ 0,7 al día**.

Contactos nuevos por día:

```
5 ago  ██ 2      31 jul ██ 2       27 jul █████ 5
4 ago  ████ 4    30 jul ██ 2       26 jul ███ 3
3 ago  █ 1       29 jul ██ 2       25 jul ████████ 8
1 ago  ███ 3     28 jul ██ 2       24 jul ███████ 7
```

Por fuente en esos 10 días: `Social media` 10, sin fuente 10, `CRM Workflows` 2, `Form Diseño` 1.
Por etiqueta: `en-pipeline` 12, `lead-whatsapp` 8, `transferencia a humano` 4, `id dm` 3, `web_form` 2, **`source:grok` 1**, **`source:google_organic` 1**, `source:direct` 2, `meta` 1.

**Tres cosas que esto revela:**

1. **Los DMs de Instagram SÍ están entrando al CRM**, etiquetados `id dm`. Corrijo lo que dije en V11: la conexión existe. Lo que pasa es que la mayoría no son pacientes — en esos 10 días entraron `waysuccess • marca personal`, `jose kalil | business funding`, `stevenmono.vlz`: proveedores y spam, no gente que quiere implantes.
2. **El formulario web funciona.** El 4 de agosto entró `juan manuel` con `web_form` + `consulta:diseño de sonrisa digital`. El circuito está vivo.
3. **Grok te trajo un lead en los últimos 10 días** (`source:grok`), y Google orgánico otro. Con 2,86 clics al día, eso es una tasa de conversión altísima.

> **⚠️ Recalibrado con tu revisión (ver sección 20).** De esos 7, tú confirmaste que `juan manuel` y el del `⚽` eran pruebas, `juan maya` es una remisión de una vecina, y `xiomara serpa` es paciente antigua. **Leads digitales nuevos reales en 10 días: 2** — `slawomir` (Google orgánico) y `silvio` (pauta Meta, del 27-jul, cuando todavía corría). O sea: **1 lead orgánico en 10 días, no 7.** Tu percepción era la correcta y la mía optimista. Los números de partida y las metas de esta sección están corregidos en la 20.3.

**El problema real no es que no lleguen leads. Es que llega ~1 orgánico cada 10 días, la mitad de los contactos son ruido, y el que sí llega queda mal atribuido.** El plan que sigue ataca las tres cosas.

### 17.2 De dónde partimos, en cuatro números

| Número | Hoy | Qué lo limita |
|---|---|---|
| **224** impresiones/día | Google te muestra poco | 64 páginas sin indexar de 126 |
| **2,86** clics/día | Te muestran, no te clican | Posición media 9,7 (fondo de página 1 y páginas 2-3) |
| **0,7** leads/día | Poco tráfico y frío | Falta contenido de decisión y el perfil local está apagado |
| **1** lead de IA en 10 días | El canal existe y convierte | Nadie lo está alimentando a propósito |

La cadena es: **impresiones → clics → leads.** Hoy está estrangulada en los tres eslabones a la vez. Por eso el plan tiene cinco motores y no uno.

---

### 🔧 Motor 1 — Indexación: que Google vea lo que ya escribiste

**El problema:** tienes 126 páginas y Google solo indexa 62. Hay **20 "descubiertas y sin indexar"** (Google las conoce y decidió no gastar rastreo) y **6 "rastreadas sin indexar"**. Eso es la mitad de tu contenido invisible.

**Por qué pasa:** tres causas concretas, todas arreglables.
1. El sitemap declara **las 129 URLs con `lastmod` del 3-5 de agosto**. Cuando todo dice "cambié ayer", Google deja de creer el campo y raciona el rastreo.
2. Muchas páginas `/en/*` son espejo del español sin contenido propio suficiente; Google las trata como duplicado de bajo valor.
3. Los artículos nuevos no reciben enlaces internos desde páginas fuertes, así que Google no ve motivo para priorizarlos.

**Qué hacer:**

| # | Acción | Plazo |
|---|---|---|
| 1.1 | Arreglar `npm run lastmod` para que solo actualice la fecha de las páginas cuyo **contenido** cambió, no todas en cada despliegue | Semana 1 |
| 1.2 | Sacar la lista de las 20 "descubiertas sin indexar" en Search Console y decidir una por una: **enlazar** desde una página fuerte, **fusionar** con otra, o **quitar** del sitemap | Semana 1 |
| 1.3 | Enlazar cada artículo huérfano desde `/blog` y desde su página de servicio | Semana 2 |
| 1.4 | Inspeccionar URL + "Solicitar indexación" para las 10 páginas comerciales más importantes que estén fuera | Semana 2 |
| 1.5 | Validar la corrección de los 22 "404" (ya redirigen todos) | Semana 1 |

**Cómo se mide:** páginas indexadas en Search Console. **Meta: de 62 a 95 en 60 días.**
**Efecto esperado:** las impresiones suben con las páginas indexadas. De 224/día a ~350/día sin escribir nada nuevo.

---

### 🔧 Motor 2 — Posición: de la 8-10 a la 3-5

**El problema:** tu CTR es 1,3% porque tu posición media es 9,7. No es la redacción — eso ya lo verificamos. A esas posiciones, el 1-2% es lo normal.

**La oportunidad concreta:** tienes consultas donde ya estás en el borde de la página 1. Subir 4-5 puestos ahí multiplica los clics por 4 o 5 sin necesidad de tráfico nuevo.

| Consulta | Posición hoy | Impresiones/90d | Si llega a la 3-5 |
|---|---|---|---|
| sobredentadura precios | **4,3** | 3 | Ya casi está |
| que cuesta un implante dental en colombia | **6,0** | 2 | +3-4 clics/mes |
| dentistas en colombia precios | **6,0** | 3 | +3-4 clics/mes |
| metal porcelana vs zirconio | **7,6** | 59 | **+8-12 clics/mes** |
| corona metal porcelana vs zirconia | **8,3** | 114 | **+15-20 clics/mes** |
| estética dental avanzada | **9,4** | 132 | **+15-20 clics/mes** |
| neodent colombia | 10,0 | 13 | +2-3 clics/mes |
| odontología cosmética avanzada | 10,6 | 45 | +5-8 clics/mes |
| diseño de sonrisa medellin precio | 11,1 | 8 | +2 clics/mes |

**Solo esas nueve consultas, bien trabajadas, valen entre 50 y 70 clics más al mes.** Es duplicar el tráfico orgánico actual.

**Qué hacer:**

| # | Acción | Plazo |
|---|---|---|
| 2.1 | **Resolver el choque de `corona metal porcelana vs zirconia`.** Hoy rankea `/coronas-zirconio-carillas` (título comercial) y existe `/blog/coronas-zirconia-porcelana` (comparativo). Decide cuál gana esa consulta, refuerza esa y haz que la otra la enlace | Semana 2 |
| 2.2 | Ampliar a fondo los 4 artículos comparativos con más impresiones: añadir tabla comparativa, precios, cuándo elijo cada uno, foto de caso real | Semanas 3-5 |
| 2.3 | Añadir a cada uno un bloque de **preguntas frecuentes** con las preguntas literales que salen en "Más preguntas" de Google | Semanas 3-5 |
| 2.4 | Enlazado interno dirigido: cada artículo enlaza a su servicio, cada servicio a 2-3 artículos, con texto de enlace descriptivo | Semana 4 |
| 2.5 | Rehacer `rehabilitación oral medellín` como página fuerte: es tu especialidad principal y no tienes una página que la defienda | Semanas 6-7 |

**Cómo se mide:** posición media en Search Console y clics de esas 9 consultas.
**Meta: posición media de 9,7 a 7,0 en 90 días. Clics de 2,86 a 7-9 al día.**

---

### 🔧 Motor 3 — Local: el Perfil de Empresa es tu canal más barato y está apagado

**El problema:** 222 visualizaciones en 30 días que producen **2 llamadas y 2 clics al sitio**. Tendencia jun 52 → jul 34 interacciones. Un perfil de especialista con 5,0★ debería mover 10-20 veces eso.

**Por qué importa para leads calificados:** quien busca "implantes dentales medellín" y llama desde el mapa está mucho más abajo en el embudo que quien lee un artículo. **Es el canal más rápido para conseguir pacientes locales.**

**Qué hacer:**

| # | Acción | Plazo |
|---|---|---|
| 3.1 | **Categorías secundarias**: "Clínica de implantes dentales", "Cirujano oral y maxilofacial", "Protesista dental", "Odontólogo cosmético". Hoy solo eres "Dentista" | Esta semana |
| 3.2 | **Una publicación semanal** en el perfil: caso, antes/después, respuesta a una duda. Reutiliza el reel de Instagram de esa semana | Continuo |
| 3.3 | **Fotos nuevas cada semana**: consultorio, equipo, casos con autorización | Continuo |
| 3.4 | Completar los servicios y productos del perfil, uno por tratamiento con su descripción | Semana 1 |
| 3.5 | **De 26 a 60 reseñas en 90 días.** Pedirla al final del tratamiento, como parte del protocolo. Con 15 pacientes ganados por $41,35M, esto no debería costar nada | Continuo |
| 3.6 | Responder las 26 reseñas actuales, una por una, con texto propio | Semana 1 |
| 3.7 | Sección de **preguntas y respuestas** del perfil: publica tú las 10 preguntas frecuentes y respóndelas | Semana 2 |

**Cómo se mide:** acciones del perfil (llamadas + rutas + clics web).
**Meta: de 4 acciones/mes a 25-40 en 90 días.**

---

### 🔧 Motor 4 — GEO: que las IA te citen

**Por qué este motor va primero en calidad:** en los últimos 10 días, **Grok te trajo un lead**. En GA4, el canal "AI Assistant" convierte al 75-100% con 4 sesiones. Es el tráfico de mayor intención que recibes, y casi ningún competidor tuyo lo está trabajando.

**Lo que ya tienes bien:** el `robots.txt` permite explícitamente GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, meta-externalagent, Cohere-AI. Eso está hecho y bien hecho.

**Lo que falta: darles algo citable.** Los modelos citan párrafos autocontenidos con datos concretos y atribuibles. No citan páginas de venta.

**Qué hacer:**

| # | Acción | Por qué funciona | Plazo |
|---|---|---|---|
| 4.1 | **Bloque de respuesta directa** al inicio de cada artículo: 2-3 frases que respondan la pregunta completa, con cifras. *"Un implante dental en Medellín cuesta entre $1.200 y $2.000 USD con corona incluida. El tratamiento requiere dos viajes de 5-7 días separados por 4-6 meses."* | Es literalmente el formato que los modelos extraen y citan | Semanas 1-4 |
| 4.2 | **Página de datos verificables**: número de implantes colocados, años de ejercicio, universidades, marcas que usas, garantía, tiempos reales de tratamiento | Los modelos priorizan fuentes con datos atribuibles y verificables | Semana 3 |
| 4.3 | Schema `MedicalBusiness` + `Physician` + `FAQPage` en **todas** las páginas de servicio, no solo en 6 | Los datos estructurados son la vía de lectura preferente de las IA | Semana 4 |
| 4.4 | **Fechar y firmar** cada artículo con tu nombre y credencial, y actualizar la fecha cuando lo revises de verdad | La autoría y la frescura pesan en la selección de fuentes | Semana 2 |
| 4.5 | Fichas coherentes en **Doctoralia, Dental Departures, MDE Care, Top Doctors** con el NAP idéntico al del Perfil de Empresa | Los modelos se apoyan en agregadores; aparecer en varios multiplica la probabilidad de ser citada | Semanas 5-6 |
| 4.6 | **Medir la visibilidad en IA cada mes**: una lista fija de 12 preguntas ("¿cuánto cuesta un implante dental en Medellín?", "¿es seguro el turismo dental en Colombia?", "¿quién hace implantes cigomáticos en Medellín?") preguntadas en ChatGPT, Perplexity, Grok y Gemini, anotando si te citan | Sin esto el canal no se puede gestionar, solo esperar | Mensual, desde ya |

**Cómo se mide:** sesiones del canal "AI Assistant" en GA4 + el conteo mensual de citaciones.
**Meta: de 4 sesiones/28 días a 25-40, y de 1 lead/10 días a 3-5/mes.**

---

### 🔧 Motor 5 — Conversión: que el clic se vuelva lead

**El problema:** el 45% de los contactos de los últimos 10 días entra **sin fuente** y una parte grande son proveedores y spam. Y las páginas que reciben el tráfico orgánico son artículos de blog, que no piden nada.

**Qué hacer:**

| # | Acción | Plazo |
|---|---|---|
| 5.1 | **Cierre de conversión al final de cada artículo**: no un botón genérico, sino la oferta concreta — *"Mándame tu radiografía y te digo qué necesitas y cuánto cuesta, antes de que compres el vuelo"* | Semanas 2-4 |
| 5.2 | **Calculadora o formulario de presupuesto previo** en las páginas de turismo dental. Es la promesa que ya haces en la meta descripción; hazla accionable | Semanas 5-6 |
| 5.3 | Etiquetar el WhatsApp de **cada artículo** con su slug (`[fuente: Orgánico | p: costo-implantes-dentales-colombia]`) para saber qué contenido trae pacientes | Semana 2 |
| 5.4 | **Preguntar la fuente en la primera respuesta** cuando el contacto entra sin origen. La IA de Salomé puede hacerlo y guardarlo. Ataca directamente el 45% sin fuente | Semana 2 |
| 5.5 | **Filtro anti-ruido**: regla que etiquete automáticamente como `no-lead` los contactos de proveedores y spam (palabras: "funding", "marketing", "supplier", "SEO services"). Así el conteo de leads deja de mentir | Semana 1 |

**Cómo se mide:** leads con etiqueta `consulta:*` por semana, y % de contactos sin fuente.
**Meta: de 7 leads reales/10 días a 20-25, y de 45% sin fuente a menos del 10%.**

---

### 17.3 Calendario de 12 semanas

| Semana | Foco | Entregables |
|---|---|---|
| **1** | Desbloquear | `lastmod` arreglado · validar 404 · categorías del Perfil de Empresa · responder las 26 reseñas · filtro anti-ruido en GHL |
| **2** | Indexar y enlazar | Lista de las 20 sin indexar resuelta · enlazado de huérfanos · WhatsApp etiquetado por artículo · preguntas y respuestas en el perfil |
| **3** | Contenido de decisión | Ampliar `corona zirconio vs metal-porcelana` · bloque de respuesta directa en los 5 artículos con más impresiones · página de datos verificables |
| **4** | Contenido de decisión | Ampliar `estética dental avanzada` y `odontología cosmética` · schema en todas las páginas de servicio · enlazado interno completo |
| **5-6** | Mercado EE.UU. | `/en/dental-implants-medellin-colombia` · guía de turismo dental con días, costos y garantía · fichas en agregadores |
| **7-8** | Autoridad clínica | Página de `rehabilitación oral medellín` · caso de Minerva publicado en ES y EN · caso de implantes cigomáticos |
| **9-10** | Profundidad | 4 artículos nuevos de intención de decisión (garantía internacional, implante fallido, cuántos días, dientes el mismo día) |
| **11-12** | Consolidar | Revisar posiciones · segunda tanda de indexación · primera medición completa de citaciones en IA · ajustar según datos |

**Ritmo de contenido sostenible: 1 pieza larga nueva o ampliada por semana.** No más. Una pieza buena vale más que cuatro flojas, y en salud la profundidad es lo que rankea.

### 17.4 Tablero semanal: 6 números, 10 minutos los lunes

| Número | Dónde | Hoy | Meta 90 días |
|---|---|---|---|
| Páginas indexadas | Search Console | 62 | **95** |
| Impresiones/día | Search Console | 224 | **400** |
| Clics/día | Search Console | 2,86 | **8** |
| Posición media | Search Console | 9,7 | **7,0** |
| Acciones del Perfil de Empresa/mes | GBP | 4 | **30** |
| Leads con `consulta:*` /semana | GHL | ~5 | **15** |

**La regla de lectura:** si suben las impresiones pero no los clics, el problema es la posición (Motor 2). Si suben los clics pero no los leads, el problema es la conversión (Motor 5). Si no sube nada, es indexación (Motor 1).

### 17.5 Qué esperar, y cuándo

Sé honesta contigo misma con los plazos: **el SEO orgánico no da resultados en 10 días.** Esto es lo realista.

| Momento | Qué vas a ver |
|---|---|
| **Semanas 1-3** | Nada en leads. Sí en indexación: páginas indexadas subiendo. Y las primeras acciones del Perfil de Empresa |
| **Semanas 4-6** | Impresiones subiendo. Primeros movimientos de posición en las consultas trabajadas. El perfil local empieza a dar llamadas |
| **Semanas 7-9** | Clics subiendo de verdad. Primeros leads atribuibles a artículos concretos |
| **Semanas 10-12** | El orgánico empieza a sostener un flujo propio: 15-20 leads calificados al mes sin pauta |

**El canal que puede darte resultados antes que ninguno es el Perfil de Empresa** (semanas 2-4), porque el tráfico local ya existe y solo está sin capturar. Por eso el Motor 3 no puede esperar a que terminen las campañas.

### 17.6 Lo que NO hay que hacer

- **No escribir 20 artículos rápido.** Ya tienes 35 y la mitad no está indexada. Escribir más contenido sin resolver la indexación empeora el problema.
- **No tocar los títulos ni las metas.** Están bien. Verificado.
- **No esperar a que se resuelvan las campañas para arrancar.** Los cinco motores son independientes de Meta y de Google Ads.
- **No medir por posición de una sola palabra clave.** Mide clics y leads; la posición es un medio.

---

## 18. El bloqueo de Meta, explicado y reverificado

Reverificado el 5-ago a las 21:50, con el `.com` como foco. **Confirmado y vigente.**

### 18.1 Qué dice exactamente, hoy

En el Administrador de eventos → conjunto de datos "Pixel Caro Macareno" (36066925139564924) → pestaña **Acciones**:

> ⚠️ **Se bloquearon algunos datos de sitios web**
> *"Algunos datos de sitios web están bloqueados porque aparentemente no cumplen nuestras Condiciones de las herramientas empresariales de Meta, ya que podrían: tener relación con enfermedades, estados de salud concretos o relaciones proveedor-paciente."*
> *"**Este problema repercute en el rendimiento de los anuncios que se optimizan en eventos recibidos de sitios web bloqueados.**"*
>
> **Sitios web bloqueados:** `dracarolinamacareno.co` · **`dracarolinamacareno.com`** · `implantes.dracarolinamacareno.com`

Sí, el `.com` está en la lista. Y hay un tercer dominio, `implantes.dracarolinamacareno.com`, que conviene identificar.

### 18.2 De dónde salió: la causa exacta, con fecha y hora

Esto es lo importante y lo encontré en el **Historial** del conjunto de datos. El 12 de abril de 2026, a las 8:59 pm, hay dos entradas en el mismo minuto:

| Actividad | Detalle | Quién |
|---|---|---|
| Se actualizaron las categorías de conjuntos de datos | **"Actualizaste la categoría de tu conjunto de datos a Proveedor de salud y bienestar"** | Sebastián |
| Restricciones de datos actualizadas | **"Restricciones de datos activadas automáticamente"** | Sebastián |

**El bloqueo no es un castigo ni un error de nadie. Es la consecuencia automática de haber categorizado el conjunto de datos como "Proveedor de salud y bienestar".** En el momento en que se puso esa categoría, Meta activó las restricciones sola, el mismo minuto.

Y la categorización, para una odontóloga, **es la correcta**. No hay que quitarla ni mentir: hacerlo sería incumplir las condiciones y arriesgar la cuenta entera. Lo que hay que hacer es trabajar dentro de esa restricción, que es distinto.

Confirmado también en Configuración → **Categoría: "Proveedor de salud y bienestar"**, y **"Configuración de Core: Activada"** (*"las herramientas empresariales de Meta pueden restringir ciertos datos, como parámetros personalizados y partes de URL después del dominio"*).

Y ojo: los tres dominios **sí están en la lista de autorizados** (`dracarolinamacareno.com` desde el 25-may). **El bloqueo no es por permisos de dominio.** Es por categoría.

### 18.3 ¿Esto afecta al SEO, a Google o a la página web?

**No. En absoluto. Ni un poco.**

Es la pregunta que hiciste y la respuesta corta es que este bloqueo vive **entero dentro del sistema publicitario de Meta**. Lo que hace es que Meta descarte los eventos que tu píxel le manda desde esos dominios.

| Lo que SÍ afecta | Lo que NO afecta |
|---|---|
| La optimización de campañas de Facebook e Instagram que usen conversión web | El posicionamiento en Google |
| El reporte de conversiones en el Administrador de anuncios de Meta | El rastreo y la indexación del sitio |
| Los públicos de retargeting construidos con eventos web | Google Analytics 4 |
| Las funciones Advantage+ que dependen de señales web | Google Ads y sus conversiones |
| La atribución de Meta | El Perfil de Empresa de Google |
| — | Tu visibilidad en ChatGPT, Grok, Perplexity o Gemini |
| — | El funcionamiento de la página para los pacientes |

Google y Meta son sistemas separados que no se hablan. Nada de lo que Meta bloquee cambia una sola posición en Google. Tu plan orgánico de la sección 17 **puede avanzar sin tocar esto**.

### 18.4 Cómo se soluciona

**Primero, lo que hay que entender:** con la categoría de salud puesta —y debe quedarse puesta—, Meta **nunca** te va a dejar optimizar campañas con la misma libertad que a una tienda de ropa. La solución no es levantar el bloqueo del todo; es **dejar de depender del evento web** y limpiar lo que sí se puede limpiar.

**Ruta A — Limpiar y pedir el desbloqueo (Sebastián, esta semana)**

1. **Configuración → Controles de datos → "Administrar bloqueo de eventos" → Revisar.** Aquí se ve evento por evento cuál está bloqueado y se puede pedir el desbloqueo de los que ya se corrigieron.
   ⚠️ **Nota:** al abrir esta pantalla, Meta pide aceptar una declaración de cumplimiento ("Acepta para continuar"). **No la acepté** — es un compromiso formal y lo debes aceptar tú o Sebastián, no yo. **Que nadie la haya aceptado hasta ahora significa que esa pantalla lleva meses sin abrirse.** Es probablemente el paso que falta.
2. **Configuración → Controles de datos → "Administrar bloqueos de parámetros" → Revisar.** Lo mismo, pero a nivel de parámetro.
3. **Apagar "Seguimiento automático de los eventos sin código"**, que hoy está **Activado**. Esta función detecta eventos leyendo *"el texto del botón y los metadatos de la página"* — o sea, en tu sitio está leyendo literalmente "implantes dentales", "rehabilitación oral", "diseño de sonrisa". **Es el candidato más fuerte a estar alimentando el bloqueo de forma continua**, porque nadie controla qué manda. En una cuenta de salud, esto debería estar apagado.
4. **Revisar las coincidencias avanzadas automáticas.** Hoy están activadas con **fecha de nacimiento, sexo, ciudad, nombre y apellido, correo, teléfono e identificador externo**. Correo y teléfono son estándar y útiles. **Fecha de nacimiento y sexo, en una cuenta categorizada como salud, son exactamente el tipo de dato que agrava el enforcement.** Yo los apagaría.
5. **Solicitar la revisión de la categorización** de los tres orígenes (Acciones → Revisar solución → Solicitar una revisión), explicando que el sitio es informativo y de contacto, no un portal de pacientes.

**Ruta B — Dejar de depender del evento web (esto es lo que de verdad resuelve)**

6. **Activar la API de conversiones para chats.** Está señalada como **prioridad alta** en el propio panel: *"conectar datos de los chats con negocios… cuántos clientes potenciales recibes cuando publicas anuncios de clic a Instagram, Messenger o WhatsApp"*. **Esta vía no pasa por el evento web bloqueado.**
7. **Lanzar optimizando a mensajes, no a conversión web.** Objetivo "Mensajes" con destino WhatsApp. Es además el camino natural de tu negocio: el paciente escribe, Salomé califica, Estefanía cierra.
8. **Mandar la conversión desde el CRM por CAPI**, no desde el navegador. Un lead calificado en GHL se envía a Meta como evento de servidor, sin parámetros de tratamiento. Es más limpio, más difícil de bloquear y mide lo que de verdad importa.

### 18.5 Dos cosas más que aparecieron

**El píxel está bien asignado.** Configuración → Contenido compartido → Cuentas publicitarias: **`Dra Carolina Macareno — 450101980459992`**, que es exactamente la cuenta de tu Administrador de anuncios. Ahí no hay desajuste.

**La CAPI está viva.** "Negocio conectado — Activo — **Última recepción: hace 4 horas**".

**Hay un segundo píxel sin mapear:** "Píxel de Dra. Carolina Macareno", ID **1675925559443749**. Conviene saber qué es y si alguna campaña lo usa, porque dos píxeles conviviendo parten las señales en dos.

---

## 19. Los 23 contactos del 27 de julio al 5 de agosto

Aquí están todos, para que marques cuáles son leads de verdad. Los agrupé por lo que parecen ser.

### Parecen leads reales de paciente (7)

| # | Fecha y hora | Nombre | Fuente | Etiquetas |
|---|---|---|---|---|
| 3 | 4 ago 20:55 | **juan manuel** | CRM Workflows | `web_form`, `source:direct`, `consulta:diseño de sonrisa digital`, `en-pipeline` |
| 12 | 31 jul 19:04 | **⚽** (tel ...5927) | Social media | `en-pipeline`, `lead-whatsapp`, `transferencia a humano` |
| 13 | 30 jul 17:03 | **juan esteban maya alvarez** | — | `human handover`, `en-pipeline`, `lead-whatsapp` |
| 14 | 30 jul 15:55 | **maria eugenia agudelo** | — | `en-pipeline`, `lead-whatsapp` |
| 15 | 29 jul 19:04 | **angel david lengua holguin** | — | `en-pipeline` |
| 18 | 28 jul 16:32 | **slawomir gluch** | — | `lead-whatsapp`, `en-pipeline` |
| 22 | 27 jul 05:56 | **silvio chaverra moreno** | Form Diseño | `meta`, `lead de pauta`, `transferencia a humano`, `en-pipeline` |

### Casi seguro NO son leads nuevos (4)

| # | Fecha | Nombre | Por qué |
|---|---|---|---|
| 2 | 5 ago 17:02 | **prueba 05 de agosto** | Es una prueba vuestra |
| 5 | 4 ago 15:19 | **carolina macareno** | Eres tú |
| 17 | 28 jul 20:04 | **xiomara serpa** | Etiquetas `source:grok`, `source:google_organic`. **Pero es la paciente del núcleo Serpa que ya tenías.** Muy probablemente uno de los pacientes antiguos que reentró como lead nuevo |
| 11 | 31 jul 19:36 | **dré** | Ya marcado `no-lead` |

### Ruido: proveedores, spam y DMs sin intención (12)

| # | Fecha | Nombre | Señal |
|---|---|---|---|
| 1 | 5 ago 18:43 | jose kalil \| business funding | Vendedor de financiación |
| 4 | 4 ago 16:36 | waysuccess • marca personal | Agencia de marketing, `id dm` |
| 6 | 4 ago 01:03 | stevenmono.vlz | DM sin tel ni email |
| 7 | 3 ago 12:35 | enrique rocha | `id dm`, sin datos |
| 8 | 1 ago 23:50 | diego vetencourt | `id dm`, sin datos |
| 9 | 1 ago 21:01 | carlos apto 1204 | Sin etiquetas |
| 10 | 1 ago 03:59 | jc | Sin tel ni email |
| 16 | 29 jul 05:27 | caterinatrasolini | Sin datos |
| 19 | 27 jul 22:51 | soylaurabejarano | Sin datos |
| 20 | 27 jul 18:05 | customer success manager autop… | Vendedor |
| 21 | 27 jul 13:08 | mateo jiménez \| skool | Ya marcado `stop bot`, `no-lead` |
| 23 | 27 jul 00:45 | tomi fernández / e-commerce | Vendedor |

**Lectura honesta:** si de los 7 del primer grupo tú confirmas que varios son pacientes antiguos reentrando, entonces **el número real de leads nuevos esta semana puede ser 2 o 3, o incluso menos** — y tu percepción sería la correcta y la mía optimista. Dime cuáles reconoces y ajusto el punto de partida del plan, que es lo que determina si las metas de la sección 17 son realistas o hay que subir el listón.

**Y algo que sí es un problema medible con independencia de eso: 12 de 23 contactos son ruido.** Más de la mitad. Por eso el paso 5.5 del plan (regla automática que marque proveedores y spam como `no-lead`) no es cosmético: sin él, ningún conteo de leads va a significar nada.

---

## 20. Recalibración con tu revisión, y el hallazgo que sale de ella

### 20.1 Lo que confirmaste

| Contacto | Tu veredicto | Cuenta como lead nuevo |
|---|---|---|
| **slawomir gluch** | **Nuevo. Llegó de la página web por Google** | ✅ **Sí — orgánico** |
| **silvio chaverra moreno** | Probablemente nuevo | ✅ Sí — pero de pauta Meta (27-jul, cuando aún corría) |
| juan manuel | Era prueba | ❌ |
| ⚽ (tel …5927) | Era prueba | ❌ |
| juan esteban maya alvarez | Remisión de una vecina | ➖ Lead real, pero offline: no lo trajo ningún canal digital |
| maria eugenia agudelo | No sabes por dónde llegó | ❓ |
| angel david lengua holguin | No sabes por dónde llegó | ❓ |
| xiomara serpa | Paciente antigua reentrando | ❌ |

**Resultado: 1 lead orgánico en 10 días.** Ese es el punto de partida real.

### 20.2 🔴 El hallazgo: la atribución de WhatsApp está destruyendo el origen

Fui al registro completo de los dos leads confirmados. Comparar los dos es demoledor.

**SILVIO — llegó por formulario, atribución perfecta:**

```
source:      Form Diseño
tags:        meta, lead de pauta, transferencia a humano, en-pipeline
atribución:  utmCampaign = "CP Diseño de sonrisa .com"
             utmMedium   = "cpc"
             utmFbclid   = presente
             medium      = "form"
```

Todo. La campaña exacta, el medio, el identificador de clic de Meta. **Cuando el lead entra por formulario con UTMs, el sistema funciona perfecto.**

**SLAWOMIR — llegó por WhatsApp desde Google orgánico, atribución borrada:**

```
source:      (vacío)
tags:        lead-whatsapp, en-pipeline
atribución:  utmSessionSource = "Social media"     ← FALSO
             medium           = "whatsapp"
```

**Tú sabes que vino de la página web por Google. El CRM dice "Social media".** El origen real se perdió por completo.

**Por qué pasa:** GHL clasifica por defecto como `Social media` todo lo que entra por el canal de WhatsApp, sin mirar de dónde venía la persona. La marca `[fuente: … | p: …]` que el sitio pone en el mensaje o no llegó, o llegó y ningún flujo la leyó para escribir el campo `Fuente del Lead`.

**Por qué es grave:** de los 23 contactos, **8 tienen `lead-whatsapp`**. WhatsApp es tu canal principal de entrada. Y todos esos leads están cayendo en el cajón "Social media", que es exactamente por qué `Social media` aparece como fuente número 1 con 10 de 23 contactos. **No son 10 leads de redes sociales. Es un cajón de sastre donde se está enterrando el origen real de la mayoría de tus pacientes.**

Esto también explica algo de la sección 4: los 88 leads "sin fuente" que facturaron $32,7M. No es que no tuvieran origen — es que entraron por WhatsApp y el sistema lo borró.

**Qué hacer, y es de las cosas más rentables de toda la auditoría:**

| # | Acción | Plazo |
|---|---|---|
| 20.1 | **Flujo en GHL que lea la marca `[fuente: … | p: …]` del primer mensaje de WhatsApp** y escriba con ella el campo `Fuente del Lead` y una etiqueta `source:*`. La marca ya viaja en el mensaje: solo hay que leerla | Esta semana |
| 20.2 | **Dejar de usar `Social media` como fuente por defecto** en el canal de WhatsApp. Que quede vacío antes que mentir: un vacío se detecta, un dato falso no | Esta semana |
| 20.3 | Cuando no haya marca, **que Salomé pregunte "¿cómo nos encontraste?"** y guarde la respuesta en el campo | Esta semana |
| 20.4 | Revisar en retrospectiva los contactos con `lead-whatsapp` de los últimos 60 días y recuperar el origen desde el primer mensaje de la conversación, que sí lo conserva | Semana 2 |

Y lo bueno: **como Slawomir llegó de la web por Google, tu único lead orgánico de la semana confirma que el motor sí funciona.** El problema no es que el SEO no traiga a nadie. Es que trae poco y, cuando trae, no queda registrado de dónde vino.

### 20.3 Metas corregidas de la sección 17

Con el punto de partida real, las metas de la sección 17.4 quedan así. Las de tráfico no cambian; las de leads sí, y son más honestas.

| Número | Hoy (real) | Meta 90 días | Antes decía |
|---|---|---|---|
| Páginas indexadas | 62 | **95** | igual |
| Impresiones/día | 224 | **400** | igual |
| Clics/día | 2,86 | **8** | igual |
| Posición media | 9,7 | **7,0** | igual |
| Acciones del Perfil de Empresa/mes | 4 | **30** | igual |
| **Leads orgánicos/mes** | **~3** | **12-15** | *decía 15/semana — era irreal* |
| **% de leads con origen conocido** | **~10%** | **90%** | *nuevo, y es el que desbloquea todo lo demás* |

**Por qué la meta de leads baja y aun así es ambiciosa:** pasar de 3 a 12-15 leads orgánicos al mes es multiplicar por 4 o 5 en 90 días. Es agresivo pero alcanzable, porque el cuello de botella no es la conversión —Slawomir demuestra que quien llega, escribe— sino el volumen de tráfico, que es justo lo que atacan los motores 1, 2 y 3.

**Y el orden de prioridad cambia ligeramente.** Con solo 1 lead orgánico cada 10 días, el **Perfil de Empresa (Motor 3) pasa a ser lo primero**, por delante del contenido: es el único canal que puede darte pacientes locales en 2-4 semanas sin depender de que Google reindexe nada. El contenido sigue, pero detrás.

---

## 21. Corrección: no hay bloqueo operativo en Meta

**Sebastián tiene razón y la sección 18 estaba exagerada. La corrijo aquí y esta versión es la que vale.**

### 21.1 Qué me hizo equivocarme

Leí el código interno del diagnóstico, `tiered_enforcement_full_blocking_web_actions`, y de la expresión *"full blocking"* deduje un bloqueo total. **El texto que le muestra Meta al usuario dice otra cosa: "Se bloquearon *algunos* datos de sitios web".** Algunos, no todos. Y el código interno de un diagnóstico no es una descripción del estado real de la cuenta.

Debí comprobar el dato antes de calificarlo. Lo hice ahora.

### 21.2 Lo que dicen los datos: los eventos fluyen con normalidad

Administrador de eventos → Resumen, ventana 8 jul – 4 ago:

| Evento | Estado | Eventos totales | Última recepción | Integración |
|---|---|---|---|---|
| **PageView** | 🟢 Activo | **8,9 mil** | **Hace una hora** | Múltiple (píxel + CAPI) |
| **Ver contenido** | 🟢 Activo | 288 | Hace 6 días | Múltiple |
| **Cliente potencial** | 🟡 Sin actividad reciente | **4** | Hace 15 días | Solo navegador |

Y el gráfico de actividad muestra recepción continua durante todo el periodo, con la caída del 1 de agosto que corresponde al apagado de las campañas, no a ningún bloqueo.

**8,9 mil eventos recibidos y el último hace una hora no es una cuenta bloqueada.** Lo que hay es la restricción de datos estándar de un conjunto categorizado como salud: Meta recorta ciertos parámetros personalizados y partes de la URL después del dominio. Eso es el régimen normal y permanente de cualquier anunciante sanitario, se aceptó a conciencia el 12 de abril y **no se va a quitar ni hay que intentar quitarlo**.

### 21.3 Qué retiro y qué mantengo

**Retiro:**
- Que exista un "bloqueo total" que impida medir. **No lo hay.**
- Que haya que "solicitar una revisión" como si fuera un incidente. No lo es.
- La alarma sobre el segundo píxel (1675925559443749): Sebastián confirma que es de la agencia anterior, no está conectado a nada y llevan meses pautando solo con el nuevo. **Punto cerrado.**
- El marco de "esto hay que resolverlo antes de encender". No condiciona el encendido.

**Mantengo, pero como afinado, no como urgencia:**
- **Apagar "Seguimiento automático de los eventos sin código"** (hoy activado). Detecta eventos leyendo el texto de los botones y los metadatos de la página. En un sitio de salud es la vía más fácil de mandar sin querer algo que Meta recorte. Es higiene, no emergencia. Decisión de Sebastián.
- **Fecha de nacimiento y sexo** en coincidencias avanzadas: aportan poco y en una cuenta de salud son los parámetros más expuestos a que los recorten.

Y una nota general que asumo: **las tarjetas de "acciones recomendadas" de Meta son, en su mayoría, ventas.** Sebastián hace bien en cogerlas con pinzas y yo debí distinguir mejor entre una recomendación comercial y un estado de la cuenta.

### 21.4 Lo que sí importa de verdad para reencender, y no depende de nada de lo anterior

Mirando la misma tabla, hay un dato que sí condiciona el reencendido y que no tiene que ver con bloqueos:

> **El evento `Cliente potencial` tiene 4 eventos en total y no recibe nada desde hace 15 días. Y llega solo por navegador, sin respaldo por CAPI.**

Ese es el evento sobre el que Meta optimizaría una campaña de conversión. **Meta necesita del orden de 50 conversiones por semana y por conjunto de anuncios para salir de la fase de aprendizaje.** Con 4 eventos históricos, una campaña optimizada a `Cliente potencial` no va a aprender nunca: se va a quedar en aprendizaje limitado y el CPA se va a disparar, sin que ningún bloqueo tenga nada que ver.

**De ahí salen tres recomendaciones que se sostienen solas:**

1. **Arrancar optimizando a mensajes o a tráfico calificado**, no a `Cliente potencial`, hasta que ese evento tenga volumen suficiente. No es por el bloqueo: es por la fase de aprendizaje.
2. **Mandar `Cliente potencial` también por CAPI desde GHL**, no solo desde el navegador. Duplica la señal, sobrevive a los bloqueadores y al recorte de cookies, y acumula volumen más rápido.
3. **Mejorar la calidad de coincidencia de `PageView`**, hoy en **6,1/10** con "Actualización recomendada". Ese número sí afecta a la optimización y se sube mandando correo y teléfono con hash desde el servidor.

### 21.5 Y sobre el plan orgánico

Nada de esta discusión lo toca. Meta y Google son sistemas separados: **el bloqueo, lo hubiera o no, jamás afectó al SEO, a GA4, a Google Ads, al Perfil de Empresa ni a la visibilidad en IA.** Eso de la sección 18.3 sigue siendo válido y era lo que preguntaste.

Lo que sí sigue siendo el hallazgo más rentable de toda la auditoría es el de la sección 20: **la atribución de WhatsApp está borrando el origen de la mayoría de tus leads.** Ese no depende de Meta ni de nadie externo, se arregla dentro de GHL, y es lo que haría que todos los números empezaran a significar algo.

---

## 22. Cómo subir impresiones y clics con lo que ya tienes

Analicé los 35 artículos uno por uno, midiendo palabras, encabezados, enlaces internos y qué campos SEO tiene cada uno. **No hace falta escribir nada nuevo: hace falta terminar lo que ya está escrito.**

### 22.1 El diagnóstico: tienes dos blogs distintos

Hay una frontera nítida alrededor de las 900 palabras.

**Blog A — 14 artículos de 328 a 645 palabras.** Sin `seoTitle`, sin `seoDescription`, sin preguntas frecuentes, **sin un solo enlace interno** y sin botón de WhatsApp. Son la mitad de tu blog y no rankean.

**Blog B — 21 artículos de 900 a 1.900 palabras.** Con `seoTitle`, `seoDescription`, preguntas frecuentes, entre 2 y 10 enlaces internos y WhatsApp etiquetado. **Son los que traen todos los clics.**

No es casualidad. Es exactamente lo que separa a una página que rankea de una que no.

### 22.2 La tabla completa

Ordenados de menos a más palabras. La línea marca la frontera.

| Artículo | Pal. ES | Pal. EN | H2 | Enlaces | seoTitle | seoDesc | FAQ | lastMod | WhatsApp |
|---|---|---|---|---|---|---|---|---|---|
| duracion-implantes-dentales | 328 | 315 | 3 | **0** | ❌ | ❌ | ❌ | ❌ | ❌ |
| protesis-fija-atornillada | 342 | 301 | 5 | **0** | ✅ | ✅ | ❌ | ❌ | ❌ |
| **all-on-4-medellin** | 360 | **47** ⚠️ | 4 | **0** | ❌ | ❌ | ✅ | ✅ | ❌ |
| como-elegir-especialista-implantes | 373 | 360 | 3 | **0** | ❌ | ❌ | ❌ | ❌ | ❌ |
| perdida-dientes-autoestima | 382 | 357 | 4 | **0** | ❌ | ❌ | ❌ | ❌ | ❌ |
| cicatrizacion-implantes | 403 | 391 | 7 | **0** | ✅ | ❌ | ❌ | ❌ | ❌ |
| bruxismo-rehabilitacion | 405 | 357 | 5 | **0** | ❌ | ✅ | ❌ | ❌ | ❌ |
| implante-vs-protesis-removible | 406 | 402 | 5 | **0** | ✅ | ❌ | ❌ | ❌ | ❌ |
| rehabilitacion-oral-completa | 407 | 365 | 5 | **0** | ❌ | ❌ | ❌ | ❌ | ❌ |
| mantenimiento-implantes | 419 | 398 | 4 | **0** | ❌ | ❌ | ✅ | ✅ | ❌ |
| **turismo-dental-medellin** | 472 | **50** ⚠️ | 4 | **0** | ✅ | ❌ | ❌ | ❌ | ❌ |
| costo-implantes-dentales-colombia | 526 | 490 | 5 | 2 | ✅ | ✅ | ✅ | ✅ | ❌ |
| diseno-sonrisa-ceramico | 531 | 472 | 5 | **0** | ✅ | ❌ | ❌ | ❌ | ❌ |
| carillas-porcelana | 606 | 579 | 6 | **0** | ❌ | ❌ | ❌ | ❌ | ❌ |
| estetica-dental-avanzada | 645 | 622 | 5 | 2 | ✅ | ✅ | ✅ | ✅ | ✅ |
| coronas-zirconia-porcelana | 752 | 729 | 5 | 4 | ✅ | ✅ | ✅ | ✅ | ✅ |
| cirujano-maxilofacial-medellin | 845 | 604 | 6 | 5 | ✅ | ✅ | ✅ | ✅ | ✅ |
| ─────── frontera ─────── | | | | | | | | | |
| dientes-mismo-dia-carga-inmediata | 910 | 897 | 7 | 2 | ✅ | ✅ | ✅ | ❌ | ✅ |
| **implantes-dentales-medellin** | 913 | **178** ⚠️ | 6 | **0** | ✅ | ❌ | ❌ | ❌ | ❌ |
| sobredentadura-sobre-implantes | 915 | 921 | 8 | 7 | ✅ | ✅ | ✅ | ❌ | ✅ |
| marcas-implantes-respaldo-cientifico | 952 | 938 | 6 | 2 | ✅ | ✅ | ✅ | ❌ | ✅ |
| implante-titanio-vs-zirconio | 956 | 951 | 6 | 2 | ✅ | ✅ | ✅ | ❌ | ✅ |
| turismo-dental-desde-panama | 961 | 969 | 6 | 7 | ✅ | ✅ | ✅ | ❌ | ✅ |
| garantia-seguimiento-internacional | 981 | 977 | 7 | 10 | ✅ | ✅ | ✅ | ❌ | ✅ |
| all-on-4-vs-all-on-6-diferencias | 992 | 1.042 | 7 | 2 | ✅ | ✅ | ✅ | ❌ | ✅ |
| como-elegir-rehabilitador-oral | 1.050 | 1.050 | 6 | 7 | ✅ | ✅ | ✅ | ❌ | ✅ |
| straumann-y-neodent | 1.089 | 1.133 | 7 | 4 | ✅ | ✅ | ✅ | ❌ | ✅ |
| implante-dental-fallido-que-hacer | 1.109 | 1.108 | 7 | 9 | ✅ | ✅ | ✅ | ❌ | ✅ |
| implantes-cigomaticos-medellin | 1.211 | 1.201 | 8 | 3 | ✅ | ✅ | ✅ | ❌ | ✅ |
| carillas-colombia-vs-usa-costo | 1.561 | 1.527 | 9 | 7 | ✅ | ✅ | ✅ | ❌ | ✅ |
| duele-implante-dental-mitos | 1.577 | 1.530 | 10 | 5 | ✅ | ✅ | ✅ | ❌ | ✅ |
| turismo-dental-desde-puerto-rico | 1.776 | 1.660 | 5 | 7 | ✅ | ✅ | ✅ | ❌ | ✅ |
| **turismo-dental-en-colombia-seguro** | 1.818 | 1.593 | 10 | 3 | **❌** | **❌** | **❌** | ❌ | **❌** |
| all-on-4-colombia-vs-usa-guia-2025 | 1.897 | 1.318 | 10 | 3 | ❌ | ✅ | ✅ | ✅ | ❌ |
| cuantos-dias-medellin-implantes | 1.912 | 1.839 | 10 | 4 | ✅ | ✅ | ✅ | ❌ | ✅ |

**Resumen de huecos:** 10 sin `seoTitle` · 13 sin `seoDescription` · 13 sin preguntas frecuentes · **28 sin `lastModified`** · 17 sin WhatsApp · **14 con cero enlaces internos**.

---

### 22.3 Las cinco palancas, por retorno

#### 🥇 Palanca 1 — Tu artículo número uno está sin optimizar

**`turismo-dental-en-colombia-seguro` es tu página con más clics de todo el sitio: 17 clics y 1.242 impresiones en 28 días.** Tiene 1.818 palabras y 10 encabezados. Es un artículo excelente.

Y **no tiene `seoTitle`, ni `seoDescription`, ni preguntas frecuentes, ni WhatsApp.**

Aquí se cierra un círculo con algo que te señalé antes: el título que sale en Google mide **67 caracteres** y se corta. ¿Por qué? Porque al no haber `seoTitleEn`, el sistema usa el título del artículo como respaldo. **No era un descuido de redacción: era un campo vacío.**

| Qué hacer | Efecto esperado |
|---|---|
| `seoTitleEn` de ≤60 caracteres | Deja de cortarse → más clics sobre las mismas impresiones |
| `seoDescriptionEn` de ≤155 | Controlas el texto que ve el paciente de EE.UU. |
| 5-6 preguntas frecuentes con schema | Opción a fragmento destacado y a que las IA lo citen |
| `whatsappMessage` etiquetado | Hoy tu página más visitada **no tiene forma de convertir** |

**Es el trabajo de una hora sobre la página que más tráfico recibe.** No hay nada en toda la auditoría con mejor relación esfuerzo/resultado.

#### 🥈 Palanca 2 — Los tres artículos con el inglés vacío están frenando la indexación

| Artículo | Palabras ES | Palabras EN |
|---|---|---|
| `all-on-4-medellin` | 360 | **47** |
| `turismo-dental-medellin` | 472 | **50** |
| `implantes-dentales-medellin` | 913 | **178** |

Esas versiones `/en/` son cáscaras vacías. Google las ve como duplicados de bajísimo valor, y **por eso deja de confiar en el resto de tus `/en/`**. Es la explicación más probable de las **20 páginas "descubiertas y sin indexar"**: no es que Google no las encuentre, es que decidió que ese directorio no vale el rastreo.

**Dos salidas, elige una por artículo:**
- **Traducir de verdad** el contenido completo, si la palabra clave en inglés vale la pena (`all-on-4-medellin` sí la vale).
- **Sacar la versión `/en/` del sitemap** y ponerle `noindex`, si no la vale (`turismo-dental-medellin` probablemente no, porque ya tienes `/en/dental-tourism-colombia`).

Lo que no puede seguir es un artículo de 47 palabras compitiendo por tu nombre en el índice de Google.

#### 🥉 Palanca 3 — Catorce artículos huérfanos

Catorce artículos tienen **cero enlaces internos**. Google llega a ellos solo desde el listado del blog, que es la señal más débil que existe. Y todos ellos son, además, los más cortos.

Son estos: `duracion-implantes-dentales`, `protesis-fija-atornillada`, `all-on-4-medellin`, `como-elegir-especialista-implantes`, `perdida-dientes-autoestima`, `cicatrizacion-implantes`, `bruxismo-rehabilitacion`, `implante-vs-protesis-removible`, `rehabilitacion-oral-completa`, `mantenimiento-implantes`, `turismo-dental-medellin`, `diseno-sonrisa-ceramico`, `carillas-porcelana`, `implantes-dentales-medellin`.

**La regla que hay que aplicar, y no admite excepciones:**

> Cada artículo enlaza a **su página de servicio** y a **2 artículos hermanos**. Cada página de servicio enlaza a **3 artículos**. Con texto de enlace descriptivo, nunca "haz clic aquí".

Ejemplo concreto para `cicatrizacion-implantes`: debería enlazar a `/servicios/implantes-dentales`, a `mantenimiento-implantes` y a `duele-implante-dental-mitos`. Y `/servicios/implantes-dentales` debería enlazar de vuelta a los tres.

Esto no es cosmética. **El enlace interno es el mecanismo por el que la autoridad de tu página fuerte se reparte a las débiles.** Hoy tus artículos fuertes tienen entre 5 y 10 enlaces y los débiles cero: el reparto no está ocurriendo.

#### 🏅 Palanca 4 — Cuatro artículos delgados que ya están en la puerta

Estos rankean en el borde de la página 1 y son demasiado cortos para pasar. Ampliarlos es la vía más directa a más clics.

| Artículo | Palabras hoy | Consulta que ya capta | Posición | Impresiones/90d | Objetivo |
|---|---|---|---|---|---|
| `estetica-dental-avanzada` | 645 | estética dental avanzada | **9,4** | **132** | 1.400 palabras |
| `coronas-zirconia-porcelana` | 752 | corona metal porcelana vs zirconia | **8,3** | **114** | 1.400 palabras |
| `costo-implantes-dentales-colombia` | 526 | qué cuesta un implante en colombia | **6,0** | — | 1.600 palabras |
| `diseno-sonrisa-ceramico` | 531 | diseño de sonrisa medellín precio | 11,1 | — | 1.400 palabras |

**Con qué se amplían.** No con relleno: con lo que le falta a una página comercial de salud para ganar.

1. **Tabla de precios real**, en pesos y dólares
2. **Un caso propio** con fotos, tiempos y qué se hizo exactamente
3. **Comparativa honesta**: cuándo SÍ y cuándo NO recomiendas ese tratamiento
4. **Preguntas frecuentes** copiadas literalmente de "Más preguntas" del buscador de Google para esa consulta
5. **Qué pasa si algo sale mal**: garantía, seguimiento, revisiones

⚠️ **Aviso sobre `coronas-zirconia-porcelana`:** compite con `/coronas-zirconio-carillas` por la misma consulta. Antes de ampliarlo hay que decidir cuál de los dos gana: mi recomendación es que **el artículo gane la consulta comparativa** (`metal porcelana vs zirconia`) y la página comercial gane la transaccional (`coronas de zirconio medellín`), y que se enlacen entre sí.

#### 🎖️ Palanca 5 — Diecisiete artículos sin forma de convertir

17 de 35 no tienen `whatsappMessage`. Y no es un botón cualquiera: es el que lleva la marca `[fuente: … | p: slug]`, la misma que hace falta para saber qué artículo trae pacientes (ver sección 20).

Entre los que no lo tienen está **tu artículo número uno**. Es decir: la página que más pacientes potenciales recibe de todo el sitio no tiene por dónde escribirte.

Y aquí una cosa de redacción que importa. El cierre no puede ser genérico. Tiene que ser **la oferta concreta que ya prometes en tus meta descripciones**:

> *"Mándame tus radiografías por WhatsApp y te digo qué necesitas y cuánto cuesta, antes de que compres el vuelo."*

Eso convierte. "Agenda tu cita" no.

---

### 22.4 El otro ajuste, y es de código

**28 de 35 artículos no tienen `lastModified`.** Sin ese campo, el sitemap no puede declarar la fecha real de cada artículo y por eso acaba poniéndoles a todos la del último despliegue — el problema del `lastmod` uniforme del que hablamos.

Se arregla en dos pasos: rellenar `lastModified` en cada artículo con la fecha real de su última revisión de contenido, y que el generador del sitemap use ese campo en vez de la fecha del build.

**Y muy importante:** cuando amplíes un artículo de verdad, actualiza su `lastModified`. Google premia la actualización real de contenido, y con este arreglo por fin podrá distinguir entre "esta página cambió" y "hubo un despliegue".

---

### 22.5 La plantilla del artículo que sí funciona

Sale de tus propios datos, no de un manual. Es lo que tienen en común los que rankean:

| Elemento | Valor |
|---|---|
| Longitud | **1.000-1.600 palabras** en español, y lo mismo en inglés |
| Encabezados H2 | **7-10** |
| Enlaces internos | **5-10** |
| `seoTitle` | ≤ 60 caracteres |
| `seoDescription` | ≤ 155 caracteres |
| Preguntas frecuentes | **5-6**, con schema |
| Respuesta directa | 2-3 frases con cifras, al principio (para que las IA la citen) |
| WhatsApp | Etiquetado con el slug |
| `lastModified` | Fecha real |

### 22.6 Orden de ejecución y qué esperar

| Semana | Trabajo | Horas | Efecto |
|---|---|---|---|
| **1** | Palanca 1 completa: los 4 campos de `turismo-dental-en-colombia-seguro` | 1-2 h | **Clics arriba en días.** Es tu página nº1 |
| **1** | Los 10 `seoTitle` y 13 `seoDescription` que faltan | 3 h | Sube el CTR de todo el blog |
| **2** | Palanca 2: decidir traducir o desindexar los 3 con inglés vacío | 4 h | **Desbloquea la indexación de `/en/`** |
| **2** | Palanca 3: enlazado interno de los 14 huérfanos | 4 h | Reparte autoridad; empiezan a indexarse |
| **3** | `lastModified` real en los 35 + arreglo del sitemap | 3 h | Google vuelve a creer el campo |
| **3-4** | Palanca 5: WhatsApp etiquetado en los 17 que faltan | 2 h | **Los clics empiezan a convertir en leads** |
| **4-7** | Palanca 4: ampliar los 4 artículos delgados, uno por semana | 4-6 h c/u | Los movimientos de posición grandes |
| **8-12** | Preguntas frecuentes en los 13 que no las tienen + bloque de respuesta directa | 6 h | Fragmentos destacados y citaciones en IA |

**Total: unas 35-40 horas de trabajo repartidas en 12 semanas. Cero artículos nuevos.**

**Qué esperar, y en qué orden llega:**

- **Días 3-10:** sube el CTR. Es lo primero, porque los títulos y descripciones se reindexan rápido y no dependen de que Google cambie tu posición.
- **Semanas 2-4:** suben las impresiones, según se van indexando los huérfanos y se libera el directorio `/en/`.
- **Semanas 5-10:** suben las posiciones de los 4 artículos ampliados, y con ellas los clics de verdad.
- **Semanas 6-12:** empiezan los leads atribuibles a artículos concretos, porque ya sabrás cuál trajo a quién.

De 224 impresiones y 2,86 clics al día, este trabajo solo —sin escribir un artículo nuevo— debería llevarte a **350-400 impresiones y 6-8 clics al día**.

### 22.7 Lo que NO hay que hacer

- **No escribir artículos nuevos hasta la semana 9.** Tienes 35 y la mitad está a medio terminar. Cada artículo nuevo sin enlaces internos es una página huérfana más y empeora la indexación.
- **No ampliar los 14 cortos todos a la vez.** Solo los 4 que ya tienen impresiones. Los otros 10 primero necesitan enlaces internos; si tras eso empiezan a recibir impresiones, entonces se amplían.
- **No traducir por traducir.** Un `/en/` de 47 palabras hace más daño que no tenerlo.
- **No tocar los artículos de la generación B.** Están bien. Déjalos trabajar.

---

## 23. Auditoría de GBP y de posicionamiento en IA — y el plan estratégico

Reverificado el 5-ago por la noche. **Y aquí tengo que corregir dos cosas que te dije mal, porque el trabajo hecho es mucho mejor de lo que asumí.**

### 23.1 ❌ Corrección: el Perfil de Empresa SÍ está activo, y bien llevado

En la sección 8 te dije que *"el perfil lleva meses sin actividad"*. **Falso.** Entré a "Tus publicaciones":

| Publicación | Estado |
|---|---|
| *"Me pusieron un implante, se infectó, me lo quitaron y me dijeron que rechazo los implantes." Escucho esa…* | **Programada** el 9 ago |
| *"¿Y si vuelvo a mi país y algo sale mal?" Es la pregunta que frena a casi todos mis pacientes internacionales…* | **Programada** el 8 ago |
| *"A single veneer costs $1,500 to $2,500 in the United States. Here in Medellín, about $800 USD…"* | Publicada ayer |
| *"Una carilla en Estados Unidos cuesta entre $1.500 y $2.500 dólares. Aquí en Medellín, $2.500.000 pesos…"* | Hace 3 días |
| *"No todo tratamiento dental necesita…"* | La semana pasada |

Esto está **muy bien hecho**: ritmo sostenido, **bilingüe**, ganchos de objeción real, precios comparados con EE.UU. y publicaciones **programadas** por delante. Se ven reflejadas en el panel de Google ("hace 15 horas", "hace 3 días").

**Retiro el paso 3.2 del plan.** Ya está hecho, y mejor de lo que iba a proponer.

### 23.2 ❌ Corrección: el schema y el `llms.txt` son de primer nivel

En la sección 4 puse que el JSON-LD estaba *"solo en 6 páginas"*. **También falso.** Auditando el HTML servido, cada página lleva un grafo completo:

| Página | Tipos de schema servidos |
|---|---|
| `/servicios/implantes-dentales` | Dentist · MedicalWebPage · MedicalProcedure · MedicalCondition · MedicalSpecialty · MedicalAudience · FAQPage · Question/Answer · Review · AggregateRating · Person · EducationalOrganization · BreadcrumbList · Organization · Place |
| `/all-on-4-medellin` | + **HowTo · HowToStep · MonetaryAmount** |
| `/dental-tourism-colombia` | + **HowToSupply · HowToTool** |
| `/dra-carolina-macareno` | + **DentalClinic · ProfilePage** |
| Artículos del blog | + **Article · ImageObject** |

**HowTo con MonetaryAmount en las páginas de turismo dental es exactamente lo que los modelos extraen para responder "cuánto cuesta y cómo es el proceso".**

**Y existe `llms.txt`, y está muy bien.** 133 líneas, 1.217 palabras, sirviendo 200. Contiene el posicionamiento con cifras, la formación completa con universidades y años, las 10 áreas de especialización con marcas de implante, el índice de las 16 páginas principales y **la tabla de precios oficial completa en USD y COP**, con TRM, fecha de actualización y explicación de qué define cada rango.

Muy poca gente tiene esto, y menos con precios. **Retiro el paso 10 de la sección 8.**

### 23.3 Entonces, ¿por qué el GBP solo da 4 acciones al mes?

Con publicaciones de esa calidad, **el problema no es el contenido. Es que no te ven.** 222 visualizaciones al mes es un problema de *ranking local*.

El ranking local depende de **relevancia** (categorías y servicios), **distancia** (no la controlas) y **prominencia** (reseñas y menciones). Ahí están los huecos:

| Hueco | Estado | Impacto |
|---|---|---|
| **Categoría única: "Dentista"** | Sin categorías secundarias | 🔴 Alto — es la señal nº1 de relevancia |
| **Productos: solo 1** | Únicamente "Protocolo sonr… COP 350.000" | 🔴 Alto |
| **Preguntas y respuestas** | No aparecen en el panel: probablemente vacía (confírmalo) | 🟠 Medio |
| **26 reseñas** | 5,0★, calidad excelente | 🔴 Alto — es la palanca de prominencia |
| **Perfiles vinculados** | Instagram ✅ Facebook ✅ **YouTube ❌** | 🟡 Bajo |

Y una señal de con quién te compara Google: en "También se buscó" salen **Dra Nixer Cerinza, Dr. Juan Zuleta, Claudia Leyton y Dr. Andrés Álvarez**.

### 23.4 Huecos reales en la capa de IA

| # | Hueco | Por qué importa |
|---|---|---|
| 1 | **`llms.txt` no está enlazado desde `robots.txt`** | Es la forma estándar de que un rastreador lo descubra |
| 2 | **`llms.txt` dice "30 artículos"; hay 35** | Un archivo desactualizado pierde credibilidad como fuente |
| 3 | **13 artículos sin `FAQPage`** | Confirmado en el HTML servido. Las preguntas frecuentes son lo que más citan los modelos |
| 4 | **`AggregateRating` 5,0/26 en todas las páginas** | Google **ignora** las reseñas autoservidas desde 2019: no penaliza, pero no aporta en buscador. Las IA sí lo leen, así que lo dejaría — sabiendo que su valor es GEO, no SEO |
| 5 | **Nada mide si las IA te citan** | Sabemos que Grok trajo un paciente, pero no en qué preguntas apareces ni si mejora |
| 6 | **Pocas menciones en terceros** | Solo Doctoralia y Doctor Especialistas. Faltan los agregadores de turismo dental, que es de donde los modelos sacan las listas de "mejores clínicas en Medellín" |

---

### 23.5 Plan estratégico de posicionamiento

Con la base ya construida, la estrategia no es "montar" sino **empujar en tres frentes y no confundirlos**.

#### Frente 1 — Prominencia local (GBP): de 222 a 1.000 visualizaciones/mes

El de resultados más rápidos, y **todo se hace en el panel, sin tocar código**.

| # | Acción | Cuándo |
|---|---|---|
| 1.1 | **Categorías secundarias**: "Clínica de implantes dentales", "Cirujano oral y maxilofacial", "Protesista dental", "Odontólogo cosmético". Es la palanca individual con más efecto sobre el ranking local | Esta semana |
| 1.2 | **Catálogo de servicios completo**: una entrada por tratamiento (implante unitario, All-on-4, All-on-6, cigomáticos, carillas, coronas de zirconio, sobredentadura, rehabilitación completa) con descripción y rango de precio. Hoy hay 1; deberían ser 10-12 | Esta semana |
| 1.3 | **Publicar 10 preguntas y respuestas tú misma**, y responderlas. Es legítimo y está permitido. Usa las de "Más preguntas" de Google: *¿cuánto vale un implante dental en Medellín?*, *¿la EPS cubre implantes?*, *¿cuánto cuesta un micro diseño de sonrisa?* | Semana 1 |
| 1.4 | **De 26 a 60 reseñas en 90 días.** Protocolo fijo al terminar el tratamiento con el enlace de "Solicita opiniones". Es tu mayor desventaja frente a clínicas con 58+ | Continuo |
| 1.5 | **Responder las 26 reseñas** una por una, con texto propio | Semana 1 |
| 1.6 | Vincular **YouTube** como perfil | 10 min |
| 1.7 | **Seguir con las publicaciones tal cual.** Solo añade el UTM `?utm_source=gbp` en cada enlace para poder medirlas | Continuo |

#### Frente 2 — Autoridad en IA (GEO): de 4 sesiones a 40

| # | Acción | Cuándo |
|---|---|---|
| 2.1 | **Enlazar `llms.txt` desde `robots.txt`** y actualizarlo a 35 artículos | Esta semana |
| 2.2 | **Preguntas frecuentes en los 13 artículos que no las tienen.** 5-6 por artículo, con schema | Semanas 2-6 |
| 2.3 | **Bloque de respuesta directa** al inicio de cada artículo: 2-3 frases con cifras | Semanas 2-6 |
| 2.4 | **Página de datos verificables**: nº de implantes, años, universidades, marcas, garantía, tiempos reales | Semana 3 |
| 2.5 | **Fichas en agregadores de turismo dental**: Dental Departures, MDE Care, Top Doctors, Whatclinic | Semanas 4-6 |
| 2.6 | **Medición mensual de citaciones** con la lista de 12 preguntas de abajo | Mensual, desde ya |

**Las 12 preguntas de la medición mensual** (mitad y mitad, porque son dos mercados):

1. ¿Cuánto cuesta un implante dental en Medellín?
2. ¿Quién hace implantes cigomáticos en Medellín?
3. ¿Es seguro el turismo dental en Colombia?
4. ¿Cuál es el mejor rehabilitador oral de Medellín?
5. ¿Cuántos días necesito en Medellín para unos implantes?
6. ¿Qué pasa si un implante falla y ya volví a mi país?
7. How much do dental implants cost in Medellín, Colombia?
8. Best dental implant specialist in Medellín for American patients
9. Is dental tourism in Colombia safe?
10. All-on-4 cost Colombia vs USA
11. Veneers Medellín price vs United States
12. Who does zygomatic implants in Colombia?

#### Frente 3 — El blog: de 224 a 400 impresiones/día

Detallado en la sección 22. El resumen: **terminar los 14 artículos a medias, no escribir nuevos.**

### 23.6 Cómo se refuerzan entre sí

Esto es lo que lo hace una estrategia y no una lista:

- Las **preguntas frecuentes** de los artículos alimentan las **preguntas y respuestas del GBP** y son lo que **citan las IA**. Se escribe una vez, sirve tres veces.
- Las **publicaciones del GBP** que ya haces son reels de Instagram y párrafos de artículo. Mismo contenido, tres canales.
- Las **reseñas** suben el ranking local **y** son lo que los modelos leen para decidir a quién recomendar.
- El **`llms.txt` con precios** hace que una IA pueda responder *"cuesta entre X y Y con la Dra. Macareno"* en vez de mandar al usuario a un agregador.

### 23.7 Tablero de posicionamiento

| Métrica | Hoy | 90 días | Dónde |
|---|---|---|---|
| Visualizaciones del GBP/mes | 222 | **800-1.000** | Perfil de Empresa |
| Acciones del GBP/mes | 4 | **30** | Perfil de Empresa |
| Reseñas de Google | 26 | **60** | Perfil de Empresa |
| Categorías del GBP | 1 | **5** | Perfil de Empresa |
| Servicios/productos en el GBP | 1 | **12** | Perfil de Empresa |
| Preguntas y respuestas del GBP | ~0 | **10** | Perfil de Empresa |
| Sesiones de "AI Assistant" | 4 / 28 días | **40** | GA4 |
| Citaciones en IA (de 12 preguntas) | sin medir | **6 de 12** | Manual, mensual |
| Artículos con FAQPage | 22 de 35 | **35 de 35** | Repositorio |
| Fichas en agregadores | 2 | **6** | Manual |

### 23.8 Lo que quiero que te lleves de esta parte

**La base técnica de tu posicionamiento en IA ya está construida, y está por encima de la de tus competidores.** El `robots.txt` con todos los bots, el `llms.txt` con precios, el schema médico completo, las publicaciones bilingües del GBP: eso no es lo normal, es trabajo bien hecho.

**Lo que falta no es infraestructura, es masa.** Más reseñas, más categorías, más servicios listados, más preguntas respondidas, más menciones en terceros, y las preguntas frecuentes que faltan en 13 artículos. Nada de eso requiere reconstruir nada: requiere completar y sostener.

Y una advertencia que va con esto: **con la pauta apagada, este es el único motor que tienes girando.** Cada semana que las categorías sigan en "Dentista" y las reseñas en 26 es una semana de ventaja para las clínicas que ya te acompañan en "También se buscó".

---

## 24. Ejecución 1: la página de turismo dental, y correcciones al Frente 1

### 24.1 Lo que estaba mal era mi análisis, no la página

`turismo-dental-en-colombia-seguro` **no usa `lib/blog-posts.ts`**. Tiene su propia página en `app/[locale]/blog/turismo-dental-en-colombia-seguro/page.tsx`, y la ruta estática gana sobre la dinámica `[slug]`. Yo audité el archivo equivocado.

Lo que la página ya tenía, y yo dije que le faltaba:

| Elemento | Estado real |
|---|---|
| Preguntas frecuentes | ✅ **5 en español y 5 en inglés**, visibles en la página |
| Schema `FAQPage` | ✅ Con las 5 preguntas |
| WhatsApp | ✅ `WhatsAppLink` con `trackingLabel="turismo_seguro_cta"` y mensaje propio: *"Hola Dra. Macareno, leí su guía sobre turismo dental en Colombia y quiero agendar mi consulta virtual"* |
| Meta descripción | ✅ 154 caracteres en español, 131 en inglés |
| Verificación RETHUS | ✅ Enlace al registro oficial de talento humano en salud |

**Solo había un defecto real: el `<title>` en inglés medía 67 caracteres y se cortaba en Google.**

### 24.2 Lo que corregí

Un solo cambio, en `app/[locale]/blog/turismo-dental-en-colombia-seguro/page.tsx`:

| | Antes | Después |
|---|---|---|
| **Inglés** | `Is Dental Tourism in Colombia Safe? What US Patients Must Know 2026` (**67**) | `Is Dental Tourism in Colombia Safe? Honest 2026 Guide` (**53**) |
| **Español** | `¿Es Seguro el Turismo Dental en Colombia?` (41) | `¿Es Seguro el Turismo Dental en Colombia? Guía Honesta` (**54**) |

El inglés conserva la consulta exacta al principio, el público (US) y el año. El español aprovecha los 13 caracteres que sobraban para añadir el diferenciador del artículo.

**Verificado en local:** título 53 y 54 caracteres, descripciones 131 y 154, `FAQPage` con 5 preguntas, 4 enlaces `wa.me`, cero errores de consola, TypeScript limpio.

⚠️ **No commiteé.** El repositorio tiene cambios sin commitear de otra persona (`MetaPixel.tsx`, `HeroSection.tsx`, `next.config.ts`, favicon, `app/manifest.ts`, iconos y documentos en `docs/marketing/`). Commitear ahora arrastraría trabajo ajeno. Coordínalo con Sebastián y después corre `npm run lastmod` y commitea el `route-lastmod.json`, como pide el CLAUDE.md.

### 24.3 Correcciones al Frente 1 (GBP), verificadas en tu panel

**Las categorías secundarias YA ESTÁN.** Retiro el paso 1.1. Tienes **siete**:

> **Dentista** (principal) · Endodoncista · Ortodoncista · Prostodoncista · Servicio de blanqueamiento dental · Cirujano oral y maxilofacial · Periodoncista de implantes dentales

Lo que el panel público muestra ("Dentista en Medellín") es solo la principal, por eso lo di por incompleto.

**Queda una decisión, no una tarea:** la categoría **principal** es "Dentista", la más genérica de las siete, y en el ranking local la principal pesa mucho más que las secundarias. Cambiarla a **"Periodoncista de implantes dentales"** o **"Prostodoncista"** te haría más competitiva en "implantes dentales medellín", pero te quitaría visibilidad en las búsquedas genéricas de "dentista" y "odontólogo". Es un intercambio real y la decisión es tuya. Mi lectura: si el negocio son implantes y rehabilitación, la principal debería reflejarlo.

**Preguntas y respuestas: tienes razón.** Google retiró la función de Q&A de los perfiles de empresa. No es que esté bloqueada en tu cuenta: ya no existe. **Retiro el paso 1.3 por completo.** Esas preguntas siguen valiendo, pero su sitio ahora es el `FAQPage` de las páginas del sitio y las publicaciones del perfil, no el perfil.

**Reseñas: todas respondidas.** Retiro el paso 1.5. Queda solo el 1.4, subir de 26 a 60.

### 24.4 Cómo vincular YouTube (ruta exacta, verificada en tu panel)

Existe y está a cuatro clics:

1. Busca **"Dra. Carolina Macareno"** en Google, con tu cuenta iniciada
2. En el panel "Tu negocio en Google", pulsa **Editar perfil**
3. Pestaña **Contacto**
4. Sección **"Perfiles de redes sociales"**

Ahí verás hoy:
```
https://www.facebook.com/dracarolinamacareno
https://www.instagram.com/dracarolinamacareno/
```

Añade la URL del canal. Google acepta **un enlace por plataforma**, así que pega la del canal, no la de un vídeo.

### 24.5 🔴 Hallazgo nuevo en esa misma pantalla

En **Contacto → Usuario de chat** tienes:

```
WhatsApp    https://wa.me/573163975232    [PRINCIPAL]
```

**Ese enlace no lleva la marca de fuente.** Quien pulsa "Chat" desde tu ficha de Google entra a WhatsApp con un mensaje vacío, y en GHL cae como `Social media` sin origen. Es exactamente el agujero de la sección 20, pero en el canal local.

El sitio web sí lo tiene bien resuelto (`?utm_source=gbp&utm_medium=listing&utm_campaign=google_maps`). El chat no.

**Qué probar:** cambiar el enlace de chat por
```
https://wa.me/573163975232?text=Hola%2C%20vengo%20de%20su%20perfil%20de%20Google.%20Quiero%20informaci%C3%B3n%20sobre%20un%20tratamiento.%20%5Bfuente%3A%20Google%20Business%20%7C%20p%3A%20gbp%5D
```
Google puede recortar los parámetros del campo de chat; hay que probarlo y verificar que el mensaje llega con la marca. Si Google los descarta, la alternativa es apuntar el chat al mismo enlace con UTM del sitio y dejar que la web etiquete.

**Vale la pena hacerlo antes que casi nada del Frente 1:** el GBP genera pocas acciones, pero las que genera son las de mayor intención, y hoy entran sin nombre y sin origen.

---

## 25. Reverificación de los 35 artículos, medidos en producción

Tras lo que pasó con la guía de turismo dental, cambié el método: **dejé de leer el archivo de datos y medí las páginas reales**, una por una, en producción. El resultado desmonta casi todo lo que puse en la sección 22.

### 25.1 Lo que dije que faltaba y sí está

| Lo que afirmé (sección 22) | Realidad medida |
|---|---|
| "14 artículos con **cero enlaces internos**" | **Todos tienen entre 21 y 25 enlaces internos.** Yo conté solo los que van dentro del texto del artículo; el template añade navegación, artículos relacionados y enlaces a servicios |
| "17 artículos **sin WhatsApp**" | **Los 31 activos tienen 4 enlaces `wa.me`.** El CTA se renderiza solo, como dice el CLAUDE.md |
| "10 sin `seoTitle`" | **Todos los títulos miden entre 40 y 60 caracteres.** Ninguno se corta |
| "13 sin `seoDescription`" | **Todas las descripciones miden entre 129 y 159.** Cuando falta `seoDescription`, el `excerpt` hace de respaldo y funciona |
| "3 artículos con el inglés casi vacío frenando la indexación" | Son **artículos redirigidos a propósito** (ver 25.3). No hay nada roto |
| "El sitemap declara las 129 URLs con la misma fecha" | **El mecanismo está bien hecho** (ver 25.4). Retiro el hallazgo |

**Por qué me equivoqué:** medí `lib/blog-posts.ts`, que es solo la materia prima. Lo que Google ve es la página renderizada, y el template añade la mitad de lo que yo daba por ausente. La lección va también para ti: cuando alguien te audite el sitio, que mida el HTML servido, no el código fuente.

### 25.2 Tabla real (español, producción)

`TIT` y `DESC` en caracteres · `FAQ` = preguntas con schema · `WA` = enlaces de WhatsApp · `LINKS` = enlaces internos

| Artículo | TIT | DESC | FAQ | WA | LINKS |
|---|---|---|---|---|---|
| all-on-4-colombia-vs-usa-guia-2025 | 53 | 148 | 5 | 4 | 21 |
| all-on-4-vs-all-on-6-diferencias | 47 | 154 | 5 | 4 | 22 |
| **bruxismo-rehabilitacion** | 55 | 148 | **0** | 4 | 21 |
| carillas-colombia-vs-usa-costo | 48 | 156 | 5 | 4 | 22 |
| **carillas-porcelana** | 56 | 153 | **0** | 4 | 21 |
| **cicatrizacion-implantes** | 48 | 143 | **0** | 4 | 21 |
| cirujano-maxilofacial-medellin | 48 | 148 | 4 | 4 | 23 |
| **como-elegir-especialista-implantes** | 55 | 129 | **0** | 4 | 21 |
| como-elegir-rehabilitador-oral-medellin | 57 | 148 | 7 | 4 | 25 |
| coronas-zirconia-porcelana | 50 | 157 | 9 | 4 | 21 |
| costo-implantes-dentales-colombia | 54 | 150 | 5 | 4 | 21 |
| cuantos-dias-medellin-implantes | 49 | 146 | 6 | 4 | 23 |
| dientes-mismo-dia-carga-inmediata-medellin | 46 | 143 | 5 | 4 | 22 |
| **diseno-sonrisa-ceramico** | 47 | 140 | **0** | 4 | 21 |
| duele-implante-dental-mitos | 53 | 153 | 6 | 4 | 24 |
| **duracion-implantes-dentales** | 44 | 130 | **0** | 4 | 21 |
| estetica-dental-avanzada | 51 | 157 | 4 | 4 | 22 |
| garantia-seguimiento-paciente-internacional | 46 | 145 | 5 | 4 | 25 |
| implante-dental-fallido-que-hacer | 40 | 148 | 5 | 4 | 24 |
| implante-titanio-vs-zirconio | 54 | 159 | 5 | 4 | 22 |
| **implante-vs-protesis-removible** | 52 | 142 | **0** | 4 | 21 |
| implantes-cigomaticos-medellin | 60 | 154 | 5 | 4 | 22 |
| mantenimiento-implantes | 57 | 150 | 5 | 4 | 21 |
| marcas-implantes-dentales-respaldo-cientifico | 54 | 149 | 5 | 4 | 22 |
| **perdida-dientes-autoestima** | 51 | 154 | **0** | 4 | 21 |
| **protesis-fija-atornillada** | 54 | 155 | **0** | 4 | 21 |
| **rehabilitacion-oral-completa** | 58 | 154 | **0** | 4 | 21 |
| sobredentadura-sobre-implantes | 53 | 153 | 6 | 4 | 23 |
| straumann-y-neodent-cual-implante-elegir | 47 | 147 | 6 | 4 | 23 |
| turismo-dental-desde-puerto-rico | 56 | 152 | 6 | 4 | 23 |
| turismo-dental-en-colombia-seguro | 41→54 | 154 | 5 | 4 | 18 |

### 25.3 Los 4 que parecían rotos están bien

`all-on-4-medellin`, `implantes-dentales-medellin`, `turismo-dental-desde-panama` y `turismo-dental-medellin` no responden en `/blog/` porque están **redirigidos a propósito** a su página comercial:

| Artículo | Redirige a | Estado |
|---|---|---|
| `/blog/all-on-4-medellin` | `/all-on-4-medellin` | 308 → 200 ✅ |
| `/blog/implantes-dentales-medellin` | `/servicios/implantes-dentales` | 308 → 200 ✅ |
| `/blog/turismo-dental-desde-panama` | `/turismo-dental-panama` | 308 → 200 ✅ |
| `/blog/turismo-dental-medellin` | `/dental-tourism-colombia` | 308 → 200 ✅ |

Y ya están **fuera del sitemap**. Consolidación bien hecha: se evitó la canibalización y se conservó la autoridad.

*Detalle menor:* quedan **3 enlaces dentro del texto de otros artículos** apuntando a esas URLs redirigidas. Funcionan, solo añaden un salto. Se pueden apuntar directo al destino cuando toquemos esos artículos.

### 25.4 El `lastmod` también está bien: retiro ese hallazgo

Dije que era grave que las 129 URLs del sitemap tuvieran fecha del 3 al 5 de agosto. Miré el código: `scripts/gen-lastmod.mjs` **calcula el hash del bloque de cada artículo en cada revisión de git y solo actualiza la fecha cuando ese bloque cambió de verdad**. No usa la fecha del despliegue.

Lo comprobé corriéndolo: de las 71 rutas solo cambió la fecha de las dos que realmente se tocaron. El agrupamiento en el 3 de agosto no es un error: es que ese día editaste de verdad muchísimo contenido.

Y `app/sitemap.ts` descarta fechas futuras antes de elegir la más reciente, con el razonamiento documentado en el propio código. Está mejor pensado que la mayoría de los sitemaps que veo.

### 25.5 Lo único que queda de verdad: 10 artículos sin preguntas frecuentes

| Artículo | Palabras | Tiene tráfico hoy |
|---|---|---|
| `diseno-sonrisa-ceramico` | 531 | Sí, "diseño de sonrisa medellín precio" en posición 11,1 |
| `carillas-porcelana` | 606 | Poco |
| `duracion-implantes-dentales` | 328 | No |
| `protesis-fija-atornillada` | 342 | No |
| `como-elegir-especialista-implantes` | 373 | No |
| `perdida-dientes-autoestima` | 382 | No |
| `cicatrizacion-implantes` | 403 | No |
| `bruxismo-rehabilitacion` | 405 | No |
| `implante-vs-protesis-removible` | 406 | No |
| `rehabilitacion-oral-completa` | 407 | No |

**Qué significa una pregunta frecuente con schema, en simple:** es un bloque de pregunta y respuesta que se marca en el código para que Google y las IA sepan que eso es una pregunta con su respuesta. Sirve para tres cosas: puede salir desplegado en el resultado de Google y ocupar más espacio, es el formato que más citan ChatGPT y Perplexity, y ayuda al paciente a resolver la duda sin salir de la página.

**Qué implica no tenerlas:** no penaliza nada. Simplemente esos 10 artículos compiten con menos superficie y son invisibles para la capa de IA.

**Y hay un matiz que cambia el orden:** los 10 son también los más cortos, entre 328 y 407 palabras. Ponerle 5 preguntas a un artículo de 328 palabras es raro: las preguntas acabarían siendo más largas que el artículo. **Lo natural es ampliar y añadir preguntas en el mismo movimiento**, no por separado.

### 25.6 Lo que propongo decidir juntos

**Opción A, la que recomiendo:** empezar solo por `diseno-sonrisa-ceramico`, que es el único de los diez que ya tiene búsquedas (posición 11,1 en "diseño de sonrisa medellín precio"). Ampliarlo a unas 1.400 palabras con tabla de precios, un caso real y 5 preguntas frecuentes. Si en 3 o 4 semanas sube de posición, repetimos la fórmula en los otros nueve. Si no sube, cambiamos de enfoque antes de gastar 40 horas.

**Opción B:** añadir preguntas frecuentes a los diez sin ampliarlos. Más rápido, pero en artículos de 350 palabras el efecto va a ser pequeño.

**Opción C:** dejarlos como están y meter ese esfuerzo en el Perfil de Empresa y en las reseñas, que es donde el retorno se ve en semanas y no en meses.

Yo iría por la **A**, y en paralelo el Frente 1 del GBP, que no compite por tu tiempo de escritura.

**Antes de escribir nada te voy a preguntar los datos clínicos.** Las preguntas frecuentes de un artículo de rehabilitación llevan cifras y criterios que no puedo inventarme, y tu propio CLAUDE.md lo prohíbe. Te paso el borrador de las preguntas, tú me das las respuestas o me corriges, y yo lo monto.

### 25.7 Lo que quedó commiteado y lo que no

**Commiteado:**
- `5c0d63c` Acorta el título de la guía de turismo dental para que no se corte
- `8c99a65` Actualiza lastmod tras acortar el título

**Sin commitear, y no lo toqué:**
- `components/sections/TestimonialsSection.tsx`, con **188 líneas cambiadas**. No es mío. Si es de otra sesión tuya que sigue abierta, termínala antes de que se pisen los cambios.
- Diez archivos en `docs/marketing/` sin seguimiento (los informes de leads y pipeline). Dime si quieres que entren al repositorio o si prefieres que se queden fuera.

| Fecha | Cambio |
|---|---|
| 6 ago 2026 | Nueva sección **25**: reverificación de los 35 artículos **midiendo las páginas en producción**, no el archivo de datos. **Casi toda la sección 22 queda retirada**: los 31 artículos activos tienen 21-25 enlaces internos (no cero), 4 enlaces de WhatsApp cada uno, títulos de 40-60 caracteres y descripciones de 129-159. Los 4 que parecían rotos son redirects 308→200 bien hechos y fuera del sitemap. El `lastmod` también está bien: el script hashea el bloque de cada artículo y solo cambia la fecha del que cambió de verdad. **Lo único real que queda: 10 artículos sin preguntas frecuentes**, que son además los más cortos (328-407 palabras), así que ampliar y añadir preguntas va junto. Commiteado `5c0d63c` y `8c99a65`. Pendiente y sin tocar: `TestimonialsSection.tsx` (188 líneas, de otra sesión) y 10 archivos en `docs/marketing/`. |
| 5 ago 2026 (noche, 8) | Nueva sección **24**. **Ejecutada la corrección de `turismo-dental-en-colombia-seguro`**: el único defecto real era el `<title>` en inglés (67 caracteres, se cortaba en Google). Corregido a 53, y el español de 41 a 54 aprovechando el espacio libre. **Corrección de mi propio análisis**: ese artículo no usa `lib/blog-posts.ts`, tiene página estática propia, y ya tenía 5 preguntas frecuentes por idioma, `FAQPage`, `WhatsAppLink` con mensaje propio y verificación RETHUS. **Correcciones al Frente 1 verificadas en el panel**: las 7 categorías ya están puestas (retirado el paso 1.1), las preguntas y respuestas ya no existen en Google (retirado el 1.3) y todas las reseñas están respondidas (retirado el 1.5). **Hallazgo nuevo**: el enlace de chat de WhatsApp del perfil de Google no lleva marca de fuente, así que los leads del GBP entran sin origen. Documentada la ruta exacta para vincular YouTube. |
| 5 ago 2026 (noche, 7) | Nueva sección **23**: auditoría de GBP y de la capa de IA, con el plan estratégico en tres frentes. **Dos correcciones importantes**: el Perfil de Empresa **sí está activo y bien llevado** (publicaciones bilingües, con gancho de objeción y programadas — retirado el paso 3.2), y el **schema es de primer nivel** en todas las páginas, además de existir un `llms.txt` de 133 líneas con la tabla de precios completa (retirado el paso 10). El problema del GBP no es el contenido sino la prominencia: 1 categoría, 1 producto, 26 reseñas y sin preguntas y respuestas. |
| 5 ago 2026 (noche, 6) | Nueva sección **22**: análisis artículo por artículo de los 35 posts del blog. Descubierto que hay **dos generaciones**: 14 artículos de 328-645 palabras sin seoTitle, sin seoDescription, sin FAQ y **con cero enlaces internos**, frente a 21 de 900-1.900 palabras completos, que son los que traen todos los clics. **Hallazgo principal**: `turismo-dental-en-colombia-seguro`, la página nº1 del sitio con 17 clics, no tiene seoTitle, seoDescription, FAQ ni WhatsApp — y eso explica el título de 67 caracteres detectado antes. Tres artículos con la versión inglesa casi vacía (47, 50 y 178 palabras) están frenando la indexación de todo `/en/`. Plan de 5 palancas, 35-40 horas, sin escribir un artículo nuevo. |
| 5 ago 2026 | Versión inicial. Auditoría completa sobre GSC, GA4, GBP, Meta Business Suite, Instagram, GHL, repositorio y producción. |
| 5 ago 2026 (tarde) | Añadido el contexto de la migración `.co` → `.com` de finales de julio. Corregido el hallazgo #1 de la sección 4.2: el arreglo de medición de las landings ya está en producción desde el 3-ago y funciona; lo que falta es marcar `generate_lead` como evento clave. Nuevas secciones **13** (verificación en vivo de toda la medición: 10 piezas que funcionan y 12 que no), **14** (plan de crecimiento de Instagram enfocado en seguidores y vistas) y **15** (orden de ejecución). |
| 5 ago 2026 (noche, 5) | Nueva sección **21**: **corrección de la sección 18**. Sebastián tenía razón: **no hay bloqueo operativo**. Comprobado en el Administrador de eventos — PageView 8,9 mil eventos con última recepción hace una hora, Ver contenido 288, recepción continua. Deduje "bloqueo total" del código interno `tiered_enforcement_full_blocking_web_actions` cuando el texto real dice "algunos datos". Lo que hay es la restricción estándar y permanente de un conjunto de datos categorizado como salud, aceptada a conciencia en abril. Retirada también la alarma del segundo píxel (es de la agencia anterior, sin conectar). **A cambio, un hallazgo que sí condiciona el reencendido:** el evento `Cliente potencial` tiene solo 4 eventos históricos y ninguno hace 15 días, así que una campaña optimizada a esa conversión nunca saldría de la fase de aprendizaje. |
| 5 ago 2026 (noche, 4) | Nueva sección **20**. Recalibrado el punto de partida con la revisión de la Dra.: de los 7 supuestos leads, solo **2 son nuevos** (`slawomir` orgánico y `silvio` de pauta) → **1 lead orgánico en 10 días**, no 7. **Hallazgo nuevo**: comparando los registros de ambos se descubre que **la atribución de WhatsApp borra el origen real** — Slawomir vino de Google y el CRM lo guardó como `Social media`, mientras que Silvio, que entró por formulario, conserva campaña, medio y `fbclid` completos. Afecta a 8 de los 23 contactos y explica los 88 leads "sin fuente" de la sección 4. Metas de la sección 17 corregidas a la baja y el Perfil de Empresa asciende a primera prioridad. |
| 5 ago 2026 (noche, 3) | Nuevas secciones **18** y **19**. Reverificado el bloqueo de Meta con foco en el `.com`: confirmado y vigente. **Causa exacta localizada en el Historial**: el 12-abr-2026 a las 20:59 se categorizó el conjunto de datos como "Proveedor de salud y bienestar" y Meta activó las restricciones automáticamente en el mismo minuto. Los 3 dominios están en la lista de autorizados, así que no es un problema de permisos. **El bloqueo NO afecta a Google, al SEO, a GA4 ni a la web** — vive entero dentro del sistema publicitario de Meta. Añadida la ruta de solución en dos vías. Sección 19 con los 23 contactos del 27-jul al 5-ago clasificados para revisión. |
| 5 ago 2026 (noche, 2) | Nueva sección **17**: plan estructurado de crecimiento orgánico SEO + GEO, con cinco motores (indexación, posición, local, GEO, conversión), calendario de 12 semanas, tablero semanal de 6 números y expectativas por fase. **Corrección importante**: sí están llegando leads — 23 contactos del 27-jul al 5-ago, 7 de ellos leads reales (≈0,7/día), incluido uno traído por Grok. **Corregido V11**: los DMs de Instagram SÍ entran al CRM etiquetados `id dm`; el problema es que la mayoría son proveedores y spam, no pacientes. |
| 5 ago 2026 (noche) | Nueva sección **16** con la reverificación pedida. **Hallazgo nuevo y crítico**: Meta bloquea los eventos web de los 3 dominios por política de salud. **Correcciones**: los títulos y metas están bien (medidos uno a uno, solo 2 excepciones); los precios en USD ya están publicados; el CTR bajo se explica por la posición media 9,7, no por la redacción; `Cita asistida` está creada y bien configurada y solo le falta conectar la fuente de datos; el `.co` es un dominio de marzo-2026 con privacidad activada y su impacto es menor al que le asigné. **Confirmado sano**: píxel 8,0/10 con CAPI activa. Retirados los pasos 5 y 6 de la sección 8. |
