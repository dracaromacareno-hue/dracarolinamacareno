# 🏗️ Arquitectura Web Estratégica — Plan Anti-Canibalización

> ## 🚨 ALERTA — REVISAR Y EJECUTAR EN **JULIO 2026**
> Este plan NO se ejecuta durante el freeze SEO (jun 2026). El freeze se levanta a inicios de julio.
> **Acción al abrir julio:** leer este documento completo, validar con Andrés, y ejecutar por fases en el orden indicado.
> Cambiar URLs / hacer 301 durante el freeze sería contraproducente. Esperar.

**Creado:** 16-jun-2026 · **Ejecutar:** julio 2026 (post-freeze) · **Dueño:** Andrés (Director de Crecimiento)
**Negocio:** Odontología especializada premium · Dra. Carolina Macareno · El Poblado, Medellín
**Audiencia:** ~90% diáspora hispana (colombianos en EE.UU., Canadá, Panamá, Rep. Dominicana, España) + ~10% local.

---

## 1. Objetivo

Reorganizar la web para que las páginas **dejen de competir entre sí** por el mismo intento de búsqueda (canibalización) y en su lugar **se potencien** mediante una arquitectura hub-and-spoke con una sola intención por URL y enlazado interno deliberado.

Resultado esperado: cada página money posiciona más fuerte (no diluida), Google entiende qué URL responde a cada intención, y el paciente de la diáspora encuentra una ruta clara hacia la conversión.

---

## 2. Diagnóstico del estado actual (real, jun-2026)

### Páginas que existen hoy
**Raíz (`/[locale]/...`):** all-on-4-medellin · casos-clinicos · contacto · coronas-zirconio-carillas · dental-implants-for-us-patients · dental-tourism-colombia · dra-carolina-macareno · landing · libros · smile-makeover-colombia · sobre-mi · privacy-policy · terms · blog

**Servicios (`/servicios/...`):** implantes-dentales · rehabilitacion-oral-completa · protesis-fija · diseno-de-sonrisa · estetica-dental · cirugia-maxilofacial · ortodoncia · endodoncia · periodoncia · consulta-diagnostico

### 🔴 Canibalizaciones detectadas (prioridad de arreglo)

| # | Severidad | Cluster en conflicto | Páginas que se pisan | Query que se disputan |
|---|---|---|---|---|
| 1 | 🔴 ALTA | **Estética / Sonrisa** | `/servicios/diseno-de-sonrisa` + `/servicios/estetica-dental` + `/coronas-zirconio-carillas` | "diseño de sonrisa Medellín", "carillas", "estética dental" (3 páginas ES por el mismo intento) |
| 2 | 🟠 MEDIA | **Internacional / Turismo** | `/dental-tourism-colombia` + `/dental-implants-for-us-patients` (ambas EN) | "dental tourism colombia", "implants for US patients" (se solapan en inglés) |
| 3 | 🟠 MEDIA | **Vacío estratégico** | NO existe hub de turismo dental en **español** | La diáspora (90%) busca en español "tratamiento dental en Colombia" y no hay página que la capture |
| 4 | 🟡 BAJA | **Bio / Marca** | `/sobre-mi` + `/dra-carolina-macareno` | Posible contenido duplicado de biografía (verificar y consolidar) |
| 5 | 🟡 BAJA | **Implantes sin destino** | Cigomáticos solo existe como artículo de blog, no como página de servicio | "implantes cigomáticos / sin hueso" (intención transaccional sin landing) |

---

## 3. Principios de arquitectura (las reglas que evitan canibalización)

1. **Una intención de búsqueda = una sola URL.** Si dos páginas pueden rankear para la misma query, se fusionan o una pasa a ser sección de la otra.
2. **Hub-and-spoke.** Una página pillar amplia (ej. Implantes) enlaza a sus spokes específicos (All-on-4, Cigomáticos), y cada spoke devuelve el enlace al pillar. Reparten autoridad en vez de competir.
3. **Geo en el contenido, no solo en la URL.** Cada money page trabaja doble keyword: "en Medellín" (autoridad local) + "Colombia para pacientes en EE.UU., Canadá, Panamá, R. Dominicana y España" (captura diáspora).
4. **Diferenciación por avatar/decisión, no por sinónimo.** No tener una página por cada palabra ("carillas", "diseño de sonrisa", "estética"): tener una por cada DECISIÓN distinta del paciente.
5. **Un idioma por página** (regla de marca ya vigente). El hub de turismo de la diáspora va en español primero.

---

## 4. Arquitectura objetivo (ordenada por potencial de NEGOCIO)

```
/                                         ← HOME · hub de marca, NO ataca un servicio. Reparte autoridad.
│
├─ TIER 1 · MONEY PAGES (mayor ticket + demanda diáspora)
│  ├─ /all-on-4-colombia                  ← #1 Dientes fijos arcada completa ($12-20k)
│  ├─ /implantes-cigomaticos              ← #2 "Sin hueso / me rechazaron" ($16-25k, baja competencia)  [NUEVA: hoy solo es blog]
│  └─ /turismo-dental-colombia            ← #3 HUB internacional EN ESPAÑOL (convierte a la diáspora)    [NUEVA / consolidada]
│
├─ TIER 2 · PILLARS DE TRATAMIENTO
│  ├─ /servicios/rehabilitacion-oral-completa   ← #4 Full mouth ($$$)
│  ├─ /servicios/implantes-dentales             ← #5 Pillar implantes (unitario/pocos dientes)
│  │      └─ secciones internas (NO URLs aparte): titanio · zirconio · prótesis fija sobre implante
│  └─ /servicios/diseno-de-sonrisa              ← #6 Estética / carillas (cluster consolidado)
│
├─ TIER 3 · SECUNDARIAS
│  └─ /servicios/ortodoncia                     ← solo si hay foco real (alineadores)
│
└─ TIER 4 · SOPORTE (sin inversión SEO; existen para completitud y E-E-A-T)
   └─ /servicios/endodoncia · /periodoncia · /cirugia-maxilofacial · /consulta-diagnostico
   └─ /sobre-mi (bio única) · /casos-clinicos · /libros · /contacto
```

### Lógica del orden (por negocio, no por volumen de búsqueda)
1. **All-on-4** — máximo ticket, intención clarísima, altísima demanda diáspora.
2. **Cigomáticos** — ticket aún mayor, competencia casi nula, intención emocional de "última esperanza".
3. **Turismo dental Colombia (ES)** — no vende un tratamiento, es el EMBUDO que captura al paciente del exterior y lo reparte a #1, #2, #5.
4. **Rehabilitación oral completa** — ticket alto, caso integral.
5. **Implantes dentales** — entrada amplia y pillar que sostiene #1 y #2.
6. **Diseño de sonrisa** — margen alto, avatar distinto, demanda estable.

---

## 5. Mapa de intención por página (qué ataca cada una)

| URL objetivo | Intención única / avatar | Keyword principal | NO debe hablar de |
|---|---|---|---|
| `/all-on-4-colombia` | Desdentado de una arcada, quiere fijos ya | all-on-4 colombia / dientes fijos en un día | rehabilitación de boca con dientes propios |
| `/implantes-cigomaticos` | "No tengo hueso, me rechazaron" | implantes cigomáticos / implantes sin hueso | implante unitario normal |
| `/turismo-dental-colombia` | Vive en el exterior, evalúa venir | tratamiento dental en Colombia desde EE.UU./España | detalle clínico profundo (eso va en las money pages) |
| `/servicios/rehabilitacion-oral-completa` | Boca deteriorada, reconstrucción integral | rehabilitación oral completa Medellín | All-on-4 puro |
| `/servicios/implantes-dentales` | Falta 1 a 3 dientes | implante dental Medellín/Colombia | arcada completa (enlaza a All-on-4) |
| `/servicios/diseno-de-sonrisa` | Tiene sus dientes, quiere mejorarlos | diseño de sonrisa / carillas de porcelana Medellín | implantes / pérdida de dientes |

---

## 6. Cómo se POTENCIAN (enlazado interno deliberado)

- **Pillar Implantes → spokes:** `/servicios/implantes-dentales` enlaza en su cuerpo a `/all-on-4-colombia` (para arcada completa) y `/implantes-cigomaticos` (para falta de hueso). Cada spoke devuelve el enlace al pillar.
- **Hub Turismo → money pages:** `/turismo-dental-colombia` enlaza a All-on-4, Cigomáticos y Rehabilitación, con foco en logística (viaje, tiempos, pago, garantías). Las money pages enlazan de vuelta al hub con un bloque "¿Eres paciente internacional?".
- **Blog → money pages:** cada artículo (cigomáticos, carga inmediata, marcas, etc.) enlaza a su página de servicio correspondiente (ya implementado el patrón con 2 enlaces internos + CTA WhatsApp por artículo).
- **Home → Tier 1:** la home destaca primero las 3 money pages, no los servicios genéricos.

---

## 7. Plan de redirects 301 (al ejecutar)

| Página actual | Acción | Destino 301 |
|---|---|---|
| `/servicios/estetica-dental` | FUSIONAR con diseño de sonrisa | `/servicios/diseno-de-sonrisa` |
| `/coronas-zirconio-carillas` | FUSIONAR (carillas/coronas estéticas) | `/servicios/diseno-de-sonrisa` |
| `/all-on-4-medellin` | RENOMBRAR a colombia (o mantener y elegir UNA canónica) | `/all-on-4-colombia` |
| `/dental-implants-for-us-patients` + `/dental-tourism-colombia` + `/smile-makeover-colombia` | EVALUAR Fase 2: son landings con nombre en inglés que se solapan con la versión `/en/` del switcher. Por defecto, consolidar en la `/en/` del hub/servicio que corresponda | `/en/turismo-dental-colombia` (hub) o `/en/servicios/diseno-de-sonrisa` |
| `/dra-carolina-macareno` | Si duplica bio → consolidar | `/sobre-mi` |

> ⚠️ Regla: todo 301 debe ser **un solo salto** (evitar cadenas), conservar el contenido bueno de la página fusionada, y actualizar el sitemap + enlaces internos el mismo día. Reenviar a Google con IndexNow + GSC tras cada cambio.

---

## 8. Plan de acción por fases (julio 2026, post-freeze)

### Fase 0 — Preparación (antes de tocar nada)
- [ ] Confirmar que el freeze SEO está levantado.
- [ ] Exportar en GSC el rendimiento actual (clics/impresiones por URL) de las páginas a fusionar, para comparar después.
- [ ] Verificar si `/sobre-mi` y `/dra-carolina-macareno` realmente duplican contenido.

### Fase 1 — Resolver la canibalización ALTA (estética) [impacto inmediato]
- [ ] Fusionar contenido de `estetica-dental` + `coronas-zirconio-carillas` dentro de `/servicios/diseno-de-sonrisa` (la mejor queda canónica).
- [ ] Implementar 301 de las dos URLs absorbidas.
- [ ] Actualizar enlaces internos y sitemap. Reindexar.

### Fase 2 — Crear el hub de turismo en ESPAÑOL (vacío estratégico)
- [ ] Crear `/turismo-dental-colombia` (ES) enfocado a la diáspora: confianza, viaje, tiempos, pago (CuraPay), garantías, segunda opinión virtual gratis.
- [ ] Enlazar money pages ↔ hub.
- [ ] Consolidar las dos páginas EN (`dental-tourism-colombia` + `dental-implants-for-us-patients`) en una sola versión EN del hub.

### Fase 3 — Convertir Cigomáticos en página de servicio
- [ ] Crear `/implantes-cigomaticos` (página transaccional, no solo blog). Reutilizar contenido del artículo + sección de proceso/equipo/CTA.
- [ ] Enlazar desde el pillar de implantes y desde el artículo de blog.

### Fase 4 — Unificar el cluster All-on-4
- [ ] Elegir UNA canónica (`/all-on-4-colombia`) y 301 desde `/all-on-4-medellin`.
- [ ] Asegurar doble keyword (Medellín + Colombia/diáspora) en el contenido.

### Fase 5 — Home y jerarquía
- [ ] Reordenar la home para destacar primero las 3 money pages.
- [ ] Revisar que cada money page tenga el bloque "¿Eres paciente internacional?" hacia el hub.

### Fase 6 — Limpieza Tier 4
- [ ] Consolidar bio (`/sobre-mi` única).
- [ ] Dejar endodoncia/periodoncia/maxilofacial como soporte (sin inversión SEO, sin canibalizar).

---

## 9. i18n / Geo (cómo funciona HOY — confirmado por Andrés)
- **El sitio carga SIEMPRE en español por defecto.** Cada página tiene un **switcher EN/ES manual**: si la persona quiere inglés, lo cambia ella. NO hay detección automática de idioma (routing.ts `localeDetection:false`, Navigation.tsx). Ya implementado.
- **Implicación clave para esta arquitectura:** cada página de servicio / money page YA tiene su versión en inglés vía el switcher (ruta `/en/...`). **NO hay que "crear" una versión EN aparte**: la genera el switcher. El plan se piensa sobre las URLs en español; el inglés viene incluido.
- Por eso, las landings con **nombre en inglés** que existen como rutas propias (`/dental-tourism-colombia`, `/dental-implants-for-us-patients`, `/smile-makeover-colombia`) hay que decidirlas en Fase 2: o se **consolidan** con la versión `/en/` del switcher (para no duplicar el mismo intento en dos sitios), o se conservan solo si aportan una keyword en inglés en la URL que el switcher no cubre. Por defecto: consolidar.
- El contenido traducido de las ~11 páginas de servicio a `/en` sigue **diferido** a propósito (la diáspora es el 90% y busca en español). El switcher existe en todas, pero priorizar la traducción cuidada solo del hub internacional.
- Money pages: "en Medellín" + "Colombia para pacientes en EE.UU., Canadá, Panamá, R. Dominicana y España" en el cuerpo (versión ES; el switcher da la EN).

## 10. Métricas de éxito (medir 4-6 semanas después de ejecutar)
- Las URLs fusionadas dejan de competir: la canónica sube clics/impresiones en GSC (vs export de Fase 0).
- Posición media de las money pages mejora (menos dilución).
- Aumenta el tráfico orgánico al hub de turismo ES y los clics a WhatsApp desde money pages.
- Cero cadenas de redirect y cero 404 en GSC tras los 301.

---

## 11. Riesgos / NO hacer
- ❌ NO ejecutar durante el freeze SEO (esperar julio).
- ❌ NO crear una URL por cada sinónimo (carillas vs estética vs sonrisa): consolidar.
- ❌ NO hacer cadenas de 301 (un solo salto).
- ❌ NO borrar contenido bueno al fusionar: migrarlo a la canónica.
- ❌ NO cambiar varias URLs el mismo día sin actualizar sitemap + enlaces + reindexar.

---

*Documento de planificación. Relacionado: `calendario-editorial-4-semanas-jun2026.md`, `estrategia-organica-junio-2026.md`, `plan-ejecucion-consolidado-2026-05-29.md`. Memoria: i18n-un-idioma-por-pagina, titulos-fix-freeze-jun2026 (freeze SEO).*
