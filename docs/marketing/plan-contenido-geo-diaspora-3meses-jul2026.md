# Plan de contenido GEO/SEO para la diáspora (3 meses)
### Posicionar a Dra. Carolina Macareno ante hispanos en EEUU, Puerto Rico y Panamá
**Fecha:** 15 de julio de 2026
**Cadencia:** 3 publicaciones por semana (1 Medellín local + 2 diáspora)
**Ventana:** semana del 21 de julio al 19 de octubre de 2026 (13 semanas)

---

## 1. Resumen ejecutivo

Google ya personaliza los resultados por ubicación. Para "salir más" en EEUU, Puerto Rico y Panamá no hay un botón: hay que darle a Google (y a los motores de IA) contenido en español que responda **exactamente lo que busca un hispano desde esos países**, más señales técnicas de que servimos a esos mercados.

El ángulo cambia por país porque la brecha de precio cambia:

- **Estados Unidos y Puerto Rico:** el gancho es el ahorro (la diferencia es grande y real) + confianza + logística del viaje.
- **Panamá:** con el dólar, los precios quedaron parejos. Aquí NO se compite por precio. Se compite por **especialista rehabilitadora, materiales premium (Straumann/Neodent), mejores opciones de tratamiento, casos complejos (cigomáticos) y servicio**.

Audiencia real: ~90% diáspora hispana (colombianos y latinos en el exterior). Todo el contenido va en español primero.

---

## 2. Verificación de tarifas (fuente: `lib/pricing.ts`, ref. CurePay/Dental Partner + mercado 2026)

| Mercado | All-on-4 / arcada | Implante unitario | Diseño de sonrisa (10 carillas) | Brecha vs Medellín |
|---|---|---|---|---|
| **Medellín (tú)** | $12.000-$20.000 | $1.000-$2.000 | $5.500-$8.500 | referencia |
| **Estados Unidos** | $25.000-$35.000 | $3.500-$6.000 | $15.000-$25.000 | 2x a 2,9x más caro |
| **Puerto Rico** | $20.000-$32.000 | $2.800-$4.500 | $12.000-$20.000 | 1,6x a 2x más caro |
| **Panamá** | $14.000-$22.000 | $1.500-$2.500 | $5.000-$9.000 | casi igual (~$2k) |

**Implicación estratégica confirmada:**
- **EEUU:** brecha enorme. El paciente ahorra $13k-$15k por arcada en All-on-4. Precio + confianza mandan.
- **Puerto Rico:** brecha real ($8k-$12k por arcada). Además hablan español y muchos boricuas ya viajan por salud. Precio + mismo idioma + experiencia.
- **Panamá:** empate de precios. El contenido que diga "ahorra" NO funciona (y puede sonar falso). Diferenciación por calidad, especialización y resultado.

---

## 3. Auditoría GEO: estado actual del sitio

### Lo que YA existe (bien hecho, no rehacer)
- **Schema `Dentist`/`MedicalClinic`** con `areaServed` que nombra Estados Unidos, Puerto Rico y Panamá; `currenciesAccepted: 'COP, USD'`; `priceRange`. (`components/SchemaOrg.tsx`)
- **Precios en USD** para usa/panama/puerto_rico y más, en una sola fuente (`lib/pricing.ts`), consumidos por la calculadora de ahorro (`components/SavingsCalculator.tsx`).
- **Costos de viaje en USD** desde Miami, Fort Lauderdale, Atlanta, NY, Houston, LA, Panamá City, etc. (`lib/travel-costs.ts`).
- **`robots.txt`** deja entrar a los bots de IA (GPTBot, ClaudeBot, PerplexityBot, Google-Extended). GEO bien encaminado.
- **Landings de turismo** existentes: `/dental-tourism-colombia`, `/dental-implants-for-us-patients` (única con formulario internacional + calculadora + costos de viaje), `/all-on-4-medellin`, `/smile-makeover-colombia`, `/coronas-zirconio-carillas`.
- **Artículos internacionales** ya publicados: `turismo-dental-en-colombia-seguro`, `turismo-dental-medellin`, `costo-implantes-dentales-colombia`, `all-on-4-colombia-vs-usa-guia-2025`.

### El hueco a cerrar
1. **hreflang solo tiene `es` y `en`.** No hay `es-US`, `es-PR`, `es-PA` ni `es-419`. Falta la señal regional. (`lib/metadata.ts`, páginas inline)
2. **No hay landings por país.** El contenido internacional es genérico "Colombia/US patients". Faltan `/turismo-dental-puerto-rico` y `/turismo-dental-panama` con su ángulo propio.
3. **Formulario internacional + calculadora de ahorro** solo viven en 1 página (`dental-implants-for-us-patients`), no en las demás landings de turismo.
4. **Fuga de indexación:** `smile-makeover-colombia` existe pero NO está en el sitemap (`app/sitemap.ts`).

### Quick wins técnicos (ejecutar en paralelo al contenido)
| # | Acción | Impacto | Esfuerzo |
|---|---|---|---|
| T1 | Añadir hreflang `es-us`, `es-pr`, `es-pa`, `es-419` en las landings de diáspora | Alto | Bajo |
| T2 | Crear landing `/turismo-dental-puerto-rico` (ángulo precio + idioma) | Alto | Medio |
| T3 | Crear landing `/turismo-dental-panama` (ángulo calidad, NO precio) | Alto | Medio |
| T4 | Meter calculadora de ahorro + formulario internacional en todas las landings de turismo | Medio | Bajo |
| T5 | Añadir `smile-makeover-colombia` al sitemap | Medio | Trivial |
| T6 | `areaServed` con `Offer.priceCurrency: USD` en los servicios clínicos | Bajo | Bajo |

---

## 4. Estrategia de contenido por país (el ángulo diferenciado)

| País | Gancho principal | Emociones/objeciones a atacar | Prueba a mostrar |
|---|---|---|---|
| **Estados Unidos** | Ahorro 50-60% + "¿es seguro?" | Miedo a que salga mal lejos, garantía, idioma | Marcas iguales (Straumann/Neodent), casos reales, testimonios de pacientes de EEUU, garantía y seguimiento |
| **Puerto Rico** | Ahorro real + mismo idioma + experiencia | "¿por qué salir de territorio US?", logística | Comparativa PR vs Medellín, español nativo, testimonios boricuas |
| **Panamá** | Calidad + especialización (NO precio) | "si cuesta parecido, ¿por qué viajar?" | Especialista rehabilitadora, materiales premium, casos complejos (cigomáticos), resultado y servicio |
| **Medellín (local)** | Autoridad + cercanía + E-E-A-T | Confianza local, elegir bien | Casos antes/después, proceso, educación, especialidad |

**Reglas de marca (obligatorias en todo el contenido):**
- Español primero. Versión en inglés solo cuando se pida.
- Nunca em dash (—). Usar coma, punto o paréntesis. Rangos con guion corto (-).
- Nunca inventar prensa, premios ni credenciales (E-E-A-T). Solo datos reales.
- La cirugía compleja la realiza el especialista del equipo, no Carolina (rehabilitadora oral). Redactarlo así.
- FAQs escritas como la gente pregunta en ChatGPT/Gemini (pregunta natural completa + respuesta directa con dato real).
- Cada artículo enlaza internamente a la money page correspondiente (All-on-4, turismo, servicio) y a la landing de país cuando exista.
- CuraPay NO se ofrece a pacientes que no sean de EEUU (aún no vinculada). No prometerla.

**Formato de cada pieza:** 1 artículo de blog (el activo que rankea) + su repurpose (post GBP para las de Medellín; reel o carrusel IG/FB para las de diáspora). El artículo es lo importante para Google; el post amplifica.

---

## 5. Calendario editorial (13 semanas)

Cadencia fija:
- **Lunes:** Medellín (local, autoridad)
- **Miércoles:** Diáspora pieza 1
- **Viernes:** Diáspora pieza 2

Reparto de los 26 slots de diáspora: 13 EEUU, 7 Puerto Rico, 4 Panamá, 2 general.

### MES 1 — Fundamentos: precio, seguridad, marcas (Semanas 1-4, 21 jul - 17 ago)

| Sem | Día | País | Pregunta objetivo (como la buscan) | Ángulo / gancho | Slug sugerido |
|---|---|---|---|---|---|
| 1 | Lun | Medellín | ¿Cuánto dura un implante dental y cómo lo cuido? | Autoridad, educación | cuidados-implante-dental-cuanto-dura |
| 1 | Mié | EEUU | ¿Cuánto cuesta All-on-4 en Colombia comparado con Estados Unidos? | Ahorro por ciudad (Miami/NY/Houston) | all-on-4-colombia-vs-estados-unidos-ahorro |
| 1 | Vie | Puerto Rico | Turismo dental desde Puerto Rico: ¿por qué ir a Medellín? | Precio + mismo idioma | turismo-dental-desde-puerto-rico |
| 2 | Lun | Medellín | ¿Qué es la rehabilitación oral y quién la necesita? | Autoridad especialidad | que-es-rehabilitacion-oral |
| 2 | Mié | EEUU | ¿Es seguro hacerme los dientes en Colombia? Cómo verificar una clínica desde EEUU | Confianza (nuevo ángulo, no repetir el existente) | como-elegir-clinica-dental-segura-colombia |
| 2 | Vie | EEUU | ¿Las marcas de implantes en Colombia son las mismas que en EEUU? | Straumann/Neodent iguales | marcas-implantes-colombia-vs-eeuu |
| 3 | Lun | Medellín | Coronas de zirconio vs porcelana: ¿cuál elegir? | Educación clínica | coronas-zirconio-vs-porcelana |
| 3 | Mié | Panamá | El precio es parecido a Panamá: ¿qué te llevas de más en Medellín? | Calidad, especialista, materiales | turismo-dental-panama-vs-medellin-calidad |
| 3 | Vie | EEUU | ¿Cuántos días debo quedarme en Medellín para mis implantes? | Logística viaje | cuantos-dias-medellin-implantes |
| 4 | Lun | Medellín | ¿Duele ponerse un implante dental? Mitos y realidades | Objeción miedo | duele-implante-dental-mitos |
| 4 | Mié | Puerto Rico | Implantes en Puerto Rico vs Colombia: precio y calidad | Comparativa PR | implantes-puerto-rico-vs-colombia |
| 4 | Vie | EEUU | ¿Vale la pena viajar a Colombia solo por los dientes? (respuesta honesta) | Confianza / objeción | vale-la-pena-turismo-dental-colombia |

### MES 2 — Logística y confianza: viaje, garantía, testimonios (Semanas 5-9, 18 ago - 21 sep)

| Sem | Día | País | Pregunta objetivo | Ángulo / gancho | Slug sugerido |
|---|---|---|---|---|---|
| 5 | Lun | Medellín | Diseño de sonrisa en Medellín: el proceso paso a paso | Autoridad estética | diseno-de-sonrisa-medellin-proceso |
| 5 | Mié | EEUU | Turismo dental en Medellín: cuánto cuesta el viaje completo (vuelo + hospedaje + tratamiento) | Costo total real | costo-total-turismo-dental-medellin |
| 5 | Vie | General | Guía completa: cómo planear tu turismo dental en Colombia (checklist) | Hub / autoridad | guia-planear-turismo-dental-colombia |
| 6 | Lun | Medellín | ¿Cada cuánto debo ir al odontólogo si tengo implantes o prótesis? | Educación, retención | cada-cuanto-odontologo-implantes |
| 6 | Mié | EEUU | ¿Qué pasa con la garantía y el seguimiento cuando regreso a EEUU? | Objeción "¿y si sale mal?" | garantia-seguimiento-implantes-eeuu |
| 6 | Vie | Puerto Rico | Del aeropuerto de San Juan a tu nueva sonrisa en Medellín: cómo es el viaje | Logística boricua | de-san-juan-a-medellin-turismo-dental |
| 7 | Lun | Medellín | All-on-4 en Medellín: qué esperar el día de la cirugía | Autoridad, tranquilidad | all-on-4-medellin-dia-de-cirugia |
| 7 | Mié | EEUU | Colombianos en EEUU: aprovecha tu viaje a la familia para rehabilitar tu sonrisa | Diáspora colombiana directa | colombianos-en-eeuu-turismo-dental |
| 7 | Vie | Panamá | Panameños en Medellín: rehabilitación con materiales premium (Straumann/Neodent) | Calidad, materiales | panameños-rehabilitacion-oral-medellin |
| 8 | Lun | Medellín | Implantes cigomáticos: solución cuando te dijeron "no tienes hueso" | Autoridad caso complejo (especialista) | implantes-cigomaticos-sin-hueso |
| 8 | Mié | EEUU | ¿Puedo volar de regreso a EEUU justo después de la cirugía de implantes? | Objeción recuperación/viaje | volar-despues-cirugia-implantes |
| 8 | Vie | Puerto Rico | All-on-4 para pacientes de Puerto Rico: qué incluye y cuánto ahorras | Precio + inclusiones | all-on-4-para-pacientes-puerto-rico |
| 9 | Lun | Medellín | Antes y después reales: casos de rehabilitación oral | Prueba, E-E-A-T (con consentimiento) | casos-antes-despues-rehabilitacion |
| 9 | Mié | EEUU | Testimonios de pacientes de EEUU que se trataron en Medellín | Prueba social (real) | testimonios-pacientes-eeuu-medellin |
| 9 | Vie | EEUU | Cómo es una valoración a distancia por WhatsApp antes de viajar | Baja fricción, primer paso | valoracion-a-distancia-whatsapp |

### MES 3 — Decisión y diferenciación: comparativas, casos, cierre (Semanas 10-13, 22 sep - 19 oct)

| Sem | Día | País | Pregunta objetivo | Ángulo / gancho | Slug sugerido |
|---|---|---|---|---|---|
| 10 | Lun | Medellín | ¿Cómo elegir un buen rehabilitador oral en Medellín? | Autoridad, criterios | como-elegir-rehabilitador-oral-medellin |
| 10 | Mié | EEUU | All-on-4 vs dentadura removible: qué conviene si vives en EEUU | Decisión de tratamiento | all-on-4-vs-dentadura-removible |
| 10 | Vie | Puerto Rico | Mismo idioma, mejor precio: la ventaja de tratarte en Colombia siendo de PR | Precio + idioma + experiencia | ventaja-tratarte-colombia-desde-pr |
| 11 | Lun | Medellín | Cuidados después de un implante dental: guía práctica | Educación, retención | cuidados-despues-implante-dental |
| 11 | Mié | EEUU | ¿Puedo usar mi tratamiento dental en Colombia como gasto médico? (información general) | Info útil (sin asesoría fiscal, remitir a contador) | tratamiento-dental-colombia-gasto-medico |
| 11 | Vie | Panamá | A un vuelo corto: por qué vale la pena venir de Panamá a tratarte con una especialista | Cercanía + especialización | de-panama-a-medellin-especialista |
| 12 | Lun | Medellín | Sobredentadura sobre implantes: ¿para quién es? | Educación, opción de tratamiento | sobredentadura-sobre-implantes |
| 12 | Mié | Puerto Rico | ¿Cuántos días de estadía necesito viniendo desde Puerto Rico? | Logística | cuantos-dias-estadia-desde-puerto-rico |
| 12 | Vie | EEUU | Diseño de sonrisa en Colombia: cuánto ahorras vs EEUU (10 carillas) | Ahorro estético | diseno-sonrisa-colombia-vs-eeuu |
| 13 | Lun | Medellín | Financiación y formas de pago en la clínica | Cierre local | financiacion-formas-de-pago |
| 13 | Mié | Panamá | Casos complejos (rehabilitación total, cigomáticos) que resolvemos en Medellín | Diferenciación técnica | casos-complejos-medellin-para-panama |
| 13 | Vie | General | Preguntas frecuentes de la diáspora sobre tratarse en Colombia (hub GEO FAQ) | Hub GEO, capta long-tails | faq-diaspora-turismo-dental-colombia |

---

## 6. Distribución (el "post" de cada pieza)

Cada artículo se amplifica el mismo día:
- **Piezas de Medellín (lunes):** post en Google Business Profile (local SEO) + story/post IG.
- **Piezas de diáspora (mié/vie):** reel o carrusel en IG/FB apuntando a la audiencia del país (segmentación geográfica orgánica por hashtags y menciones: #ColombianosEnEstadosUnidos, #TurismoDentalColombia, #BoricuasEnColombia, etc.) con enlace al artículo.
- Los testimonios y casos antes/después (con consentimiento firmado) rinden mejor en reel.

---

## 7. Cómo medir (revisión quincenal)

- **GSC:** impresiones y clics de las URLs nuevas, filtrando por país (Estados Unidos, Puerto Rico, Panamá) en el reporte de países. Meta: aparición creciente de impresiones desde esos 3 países.
- **GA4:** canal orgánico + referencias de IA (canal "AI Assistant"); eventos `whatsapp_click`, `cta_click`, `contact_form_submit` por país.
- **GEO:** preguntar en ChatGPT/Gemini "mejor clínica de implantes en Colombia para pacientes de EEUU" y ver si aparece la marca.
- **Negocio:** leads internacionales por WhatsApp/formulario etiquetados por país en GHL.

---

## 8. Dependencias y notas

- Los quick wins técnicos (sección 3) potencian TODO el contenido. Priorizar T1 (hreflang) y T2/T3 (landings PR y Panamá) en las primeras 2 semanas.
- Fotos/casos con consentimiento del paciente son el cuello de botella de las piezas de prueba social (semanas 9, 13). Pedirlos ya.
- No cambiar precios sin autorización de la dueña (regla vigente).
- Este plan es la fuente de referencia semanal. Marcar cada pieza como publicada y anotar la URL para el seguimiento en GSC.
