# Prep FASE 0 — Reescritura H1/H2 con keyword local + estrellas Rich Results

> **Estado:** PREPARADO, NO APLICADO. Aplicar el día que termine el freeze SEO (~inicio julio 2026), todo junto.
> **Origen:** auditoría competitiva 15-jun-2026 (OralStudio, Clínica Ártica, Dentali, Dr. Carlos Paz, Clínica Colombiana de Implantes).

## 1. Hallazgo — estrellas en Rich Results (NO tocar el schema)

El `aggregateRating` (5.0, 55) + 9 `Review` del nodo `Dentist`/`MedicalClinic` en `components/SchemaOrg.tsx`
es **self-serving review markup** → **inelegible para estrellas** según política Google 2026
("el negocio no puede calificarse a sí mismo en su web"). Google lo **ignora** (no penaliza).

**Decisión:** se MANTIENE como contexto de entidad/E-E-A-T (es inerte para estrellas, pero útil).
**El lever real de estrellas = Google Business Profile**, no el schema. Reactivar reseñas en GBP.
AggregateRating SÍ es elegible solo en: **Book** (Amazon) y futuro **Course** (Método Proyectia).

## 2. Hallazgo — H1/H2 sin keyword local

El `<title>` SÍ lleva "Medellín", pero **H1 y todos los H2 son genéricos** en las 11 páginas de servicio
(mismo template). Gap exacto que OralStudio explota. Regla: **H1 + 1-2 H2 ancla con keyword local +
2-3 menciones naturales en el cuerpo. NO keyword-stuffing.**

### Reescrituras exactas (las 3 prioritarias)

| Página | H1 actual → nuevo | H2 ancla actual → nuevo |
|---|---|---|
| `servicios/implantes-dentales` | "Implantes Dentales" → **"Implantes Dentales en Medellín"** | "Implantología con precisión digital" → **"Implantología con precisión digital en Medellín"** |
| `servicios/diseno-de-sonrisa` | "Diseño de Sonrisa" → **"Diseño de Sonrisa en Medellín"** | "Tu sonrisa diseñada antes de iniciar" → **"Diseño de sonrisa digital en Medellín, paso a paso"** |
| `servicios/rehabilitacion-oral-completa` | "Rehabilitación Oral Completa" → **"Rehabilitación Oral en Medellín"** | añadir city al H2 "El caso más complejo requiere la mayor experiencia" o al H2 de proceso |

### Las 8 restantes (mismo patrón)

Regla por página: añadir " en Medellín" al H1 (service name) + meter la ciudad en UN H2 ancla
(el de "por qué elegir" o "proceso"). H1 actual = nombre del servicio en texto plano.

- `servicios/protesis-fija` → H1 "Prótesis Fija sobre Implantes en Medellín"
- `servicios/estetica-dental` → H1 "Estética Dental en Medellín"
- `servicios/ortodoncia` → H1 "Ortodoncia en Medellín"
- `servicios/endodoncia` → H1 "Endodoncia en Medellín"
- `servicios/periodoncia` → H1 "Periodoncia en Medellín"
- `servicios/cirugia-maxilofacial` → H1 "Cirugía Maxilofacial en Medellín" (title ya lo tiene)
- `servicios/consulta-diagnostico` → H1 "Consulta y Diagnóstico Dental en Medellín"
- `servicios/page.tsx` (índice) → H1 con "en Medellín"

## 3. Acción transversal — estandarizar `<RespuestaDirecta>`

`diseno-de-sonrisa` ya tiene `<RespuestaDirecta pregunta="¿Cuánto cuesta un diseño de sonrisa en Medellín?">`
→ gran señal GEO/AEO + captura intención de precio (lo que hace Dentali) sin tocar precios.
**`implantes-dentales` NO lo tiene.** Rollout a las 11 con su pregunta "¿Cuánto cuesta X en Medellín?".

## 4. Checklist de aplicación (post-freeze)

- [ ] Reescribir H1 de las 11 páginas (+ " en Medellín")
- [ ] Reescribir 1-2 H2 ancla por página con keyword local
- [ ] Añadir `<RespuestaDirecta>` a las páginas que no lo tienen
- [ ] Verificar 2-3 menciones naturales de la ciudad en el cuerpo de cada página
- [ ] NO tocar el schema del Dentist (queda como está)
- [ ] En paralelo: arrancar plan de reseñas Google Business Profile (lever real de estrellas)
- [ ] Validar en Rich Results Test que NO hay errores (esperado: sin estrellas en Dentist, es normal)
