# Estrategia Orgánica Junio 2026 — Dra. Carolina Macareno

> Generado el 2026-06-02. Basado en auditoría en vivo de Search Console + GA4 + Google Business (lectura real abril vs mayo 2026). **Junio = 100% orgánico (sin Google Ads).**

---

## Contexto

- **Marca:** Dra. Carolina Macareno — rehabilitadora oral e implantóloga, Medellín (El Poblado, Edificio Platinum, Cra 25).
- **Nicho alto ticket:** implantes, All-on-4 ($12-20k USD), rehabilitación sobre implantes, diseño de sonrisa, turismo dental (pacientes EE.UU.).
- **Sitio:** dracarolinamacareno.com (Next.js 15 + i18n, repo `dracarolinamacareno`, Vercel).
- **CRM:** GoHighLevel (GHL). **GA4:** propiedad p412449617. **GSC:** sc-domain:dracarolinamacareno.com. **GBP:** 5,0★ / 19 reseñas.

## Datos reales Abril vs Mayo 2026

| Métrica | Abril | Mayo | Señal |
|---|---|---|---|
| Impresiones (GSC) | 833 | 1.930 | 🟢 +132% |
| Clics (GSC) | 13 | 24 | 🟢 +85% |
| CTR | 1,6% | 1,2% | 🔴 cae |
| Posición media | 10,6 | 10,0 | 🟢 mejora |
| Sesiones (GA4) | 49 | 132 | 🟢 +170% |
| Eventos clave | 0 | 48 (inflado) | ⚠️ revisar |
| Interacciones GBP | ~52 | ~35 | 🔴 cae |

- **Indexación:** 33 indexadas vs **80 sin indexar** → 40 "Descubierta sin indexar" + 20 "404" (URLs viejas WordPress sin 301) + redirecciones/noindex.
- **Canales mayo (GA4):** Direct 44%, Organic Search 24% (sano, 62% interacción), Organic Social 13% (solo 4s = rebote IG), Paid Search 11% (0% interacción, 0 conversiones).
- **Eventos que SÍ disparan:** `whatsapp_click`, `cta_click`, `page_view`, `scroll`. **Referidos rastreados:** google, instagram, gbp(UTM), bing, **chatgpt.com**.
- **GBP:** 223 interacciones ene-jun pero tendencia descendente (ene ~75 → abr ~52 → may ~35). Perfil incompleto.

## Qué estamos haciendo bien (mantener/amplificar)

1. Volumen de contenido sube impresiones. 2. Keywords correctas (turismo dental + implantes alto ticket). 3. Marca #1 con sitelinks. 4. Citados en Doctoralia/TopDoctors (oro para GEO). 5. Tracking básico funciona. 6. Reputación 5,0★.

---

## TAREA 1 — Cerrar el círculo de medición (web → GA4 → GHL)

**Diagnóstico:** GA4 solo mide acciones DENTRO de la web. Los leads que llegan a GHL por fuera (WhatsApp directo, IG DM, "preguntaron a la IA", ficha de GBP) son invisibles a GA4. Los "48 eventos clave" de mayo están INFLADOS (hay un evento blando marcado como clave).

1. Limpiar eventos clave: dejar SOLO `whatsapp_click`, `cta_click` y `form_submit`. Quitar `scroll`, `first_visit`, `session_start`.
2. Verificar que exista y dispare `form_submit`/`generate_lead` en el formulario web.
3. Cerrar loop GA4↔GHL: que GHL estampe origen (UTM/referrer) de cada lead; reimportar conversiones offline a Google (Enhanced Conversions for Leads / "Path A" pendiente).
4. Activar seguimiento de llamadas/mensajes del perfil en GBP; en GHL etiquetar manualmente origen ("WhatsApp directo / IA / referido").
5. Regla de lectura: tablero real de leads = GHL, no GA4. GA4 = comportamiento web; GHL = cuántos escribieron. Leer juntos.

## TAREA 2 — Ajustes SEO para junio (orgánico puro)

1. Reescribir títulos/meta de páginas con muchas impresiones y 0 clics: "estética dental avanzada" (83 imp/0 clics), "dental implant costs in colombia" (21/0), "dientes parejos y blancos" (22/0), "odontología cosmética avanzada" (21/0), "dental tourism colombia" (11/0). Fórmula: gancho + número/precio + ubicación. Meta: CTR 1,2% → 3%+ (≈ 24→58 clics).
2. 301 de las 20 URLs viejas (404) de WordPress → equivalente Next.js.
3. Enlazado interno desde home/blog hacia las 40 páginas "descubiertas sin indexar" + reenviar sitemap.
4. Clusters por intención: pilar "Implantes dentales en Colombia: guía de precios 2026" → sub-artículos (All-on-4, carga inmediata, zirconio vs titanio, financiación).
5. Empujar keywords turismo dental de pos. 10-20 hacia top 5.
6. Revisar Core Web Vitals / velocidad móvil (80% del tráfico es móvil).

## TAREA 3 — GEO que falta (Generative Engine Optimization: AI Overviews, ChatGPT, Perplexity)

1. Bloques de respuesta directa al inicio de cada página (pregunta exacta + respuesta 2-3 líneas con dato concreto: precio, tiempo, material).
2. Schema markup: `Dentist` / `MedicalClinic` / `Physician` + `FAQPage` + `Review` + `LocalBusiness` con NAP idéntico en todos lados.
3. Datos factuales citables: "17+ años", "implantes Straumann/Neodent", "All-on-4 desde $X", ubicación El Poblado.
4. Reforzar perfiles que la IA ya cita (Doctoralia, TopDoctors): completos, con reseñas, NAP idéntico.
5. Entidad de marca consistente (mismo nombre/especialidad en web, GBP, redes, directorios).
6. Geo-local explícito: barrios y referencias (El Poblado, Cra 25, landmarks) para "dentista cerca de mí" y AI Overviews locales.

## TAREA 4 — 10 opciones: más marca · más vistas · más clics · mejor visualización

1. Reescribir los 10 títulos/metas con + impresiones y 0 clics (CTR inmediato).
2. Google Business semanal: 1 publicación + 2 fotos reales (antes/después, equipo, consultorio).
3. Campaña de reseñas: de 19 a 40+ en 60 días (QR en consultorio + link post-cita por WhatsApp).
4. Datos estructurados (schema) en todo el sitio → rich snippets (estrellas, FAQs, precios).
5. Página pilar turismo dental bilingüe (ES/EN): precios, paquetes, testimonios extranjeros, logística de viaje.
6. Reels/Shorts indexables (antes/después, "cuánto cuesta un implante") en YouTube + IG enlazados.
7. Arreglar rebote de Instagram (4s): link de bio a landing que retenga (oferta + prueba social + botón WhatsApp arriba), no a la home.
8. UTMs en TODOS los enlaces (WhatsApp, bio IG, GBP, directorios) para sacar el 44% "Direct" de la sombra.
9. Bloques FAQ con respuesta directa en cada servicio (precio, dolor, duración, garantía) → featured snippets + alimenta IA + resuelve objeción.
10. Página "Sobre la Dra." con EEAT: credenciales, especialización, casos documentados, prensa (clave en salud / YMYL).

## Orden de arranque (impacto/esfuerzo)

- **Semana 1:** T4#1 (títulos) + T4#4 (schema) + T4#2 (GBP semanal) + T1#1 (limpiar eventos clave).
- **Semana 2:** T2#2 (301s) + T2#3 (indexación) + T1#3 (loop GHL).
- **Semana 3-4:** páginas pilar (T2#4, T4#5), GEO (T3), reseñas (T4#3).

---

## Hallazgo importante (2026-06-02)

El repo YA tiene buenos `title` + `description` por página, vía `generateMetadata` con manejo
ES/EN, OpenGraph, keywords y canonical. Ejemplo `servicios/implantes-dentales`:
`"Implantes Dentales Medellín desde $1.200 USD | 17 Años Especialista"`.
→ NO hay que reinventar títulos: hay que **ajustar selectivamente** los de las páginas con
muchas impresiones y 0 clics. Precio confirmado: **implante + corona desde $1.200 USD**.

Páginas ya optimizadas (NO tocar): `servicios/implantes-dentales`, `dental-implants-for-us-patients`.

## PROMPT CONSOLIDADO PARA INICIAR SESIÓN NUEVA (pegar tal cual)

```
Eres mi Director de Crecimiento de la marca Dra. Carolina Macareno (rehabilitadora oral e
implantóloga, Medellín; turismo dental EE.UU.). Junio 2026 = 100% orgánico, SIN Google Ads.
Lee primero docs/marketing/estrategia-organica-junio-2026.md (repo dracarolinamacareno) para
todo el contexto y los datos abril vs mayo.

Ejecuta en este orden:

PASO 1 — Títulos/metas (CTR). El repo ya tiene buenos títulos; NO los reinventes. Ajusta SOLO
title + description (respetando el patrón generateMetadata ES/EN existente) de estas páginas
que tienen muchas impresiones y 0 clics en Search Console de mayo:
  - app/[locale]/servicios/estetica-dental        → "estética dental avanzada" (83 imp/0 clics)
  - app/[locale]/servicios/diseno-de-sonrisa       → "diseño de sonrisa", "dientes parejos y blancos"
  - app/[locale]/dental-tourism-colombia           → "dental tourism colombia"
  - app/[locale]/servicios/protesis-fija           → "protesis fija metal porcelana", "corona"
  - app/[locale]/servicios/ortodoncia              → "invisalign medellin"
  - app/[locale]/servicios (hub)                   → "soluciones dentales avanzadas"
  Usa como base los 10 títulos/metas redactados en este doc. Precio público: implante+corona
  desde $1.200 USD. NO toques servicios/implantes-dentales ni dental-implants-for-us-patients
  (ya optimizadas). Al terminar: commit + deploy a Vercel.

PASO 2 — Schema markup (GEO): añadir/verificar Dentist/MedicalClinic + FAQPage + Review +
  LocalBusiness con NAP idéntico, y bloques de respuesta directa al inicio de cada página.

PASO 3 — Google Business: 1 publicación + 2 fotos reales esta semana; activar campaña de reseñas
  (de 19 a 40+). [requiere navegador]

PASO 4 — Medición: en GA4 dejar como evento clave SOLO whatsapp_click, cta_click y form_submit
  (quitar scroll/first_visit/session_start, que inflan); verificar que form_submit dispare;
  cerrar loop GA4↔GHL (UTMs + conversiones offline). [requiere navegador/GHL]

Empieza por el PASO 1 y muéstrame los diffs antes de commit.
```
