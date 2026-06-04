# Auditoría Meta Ads + Instagram — Dra. Carolina Macareno

> **Documento canónico de auditoría.** Base para el plan estratégico de crecimiento.
> Ubicación estable: `docs/marketing/auditoria-meta-ads-instagram-2026-05-29.md`
>
> - **Fecha de auditoría:** 29 may 2026
> - **Rango de datos:** 29 abr 2023 – 27 may 2026 (histórico máximo de la cuenta)
> - **Método:** auditoría en vivo vía Chrome + exportación oficial de Meta (CSV de Campañas y Anuncios)
> - **Tipo de cambio (COP/USD):** 4.000 COP/USD
> - **Autor:** Andrés (Director de Crecimiento) con Claude

---

## 0. Hallazgo crítico: la operación vive en otra cuenta

El Business Manager tiene **3 contextos, cada uno con 1 cuenta publicitaria**:

| Contexto | Cuenta publicitaria | Estado |
|---|---|---|
| Carolina Macareno (personal) | `10151851718768201` | **Zombie:** 9 campañas apagadas/borrador, gasto $0 |
| **Dra. Carolina Macareno (portfolio)** | **`450101980459992`** (business_id `831246610755904`) | ⭐ **Operación real:** 24 campañas, ~130 anuncios |
| Theperfectsmile | (1 cuenta) | Secundaria, sin auditar |

> ⚠️ **Regla operativa:** al abrir Ads Manager, verificar siempre que arriba diga **"Dra Carolina Macareno (450101980459992)"**. La cuenta personal no tiene actividad.

---

## 1. Resumen ejecutivo

- **Gasto total histórico: 7.780.966 COP (~$1.945 USD)** en toda la vida de la cuenta. La cuenta está **muy temprano en paid** — casi todo ha sido *testing*. Potencial intacto.
- **3 campañas activas hoy** (~79.000 COP/día ≈ $20 USD/día):
  - ✅ **CP Diseño de sonrisa** — 64 leads @ $19.531 COP. Funciona.
  - ✅ **Visitas al perfil de IG** — 3.964 visitas @ $189 COP. Motor de seguidores.
  - 🔴 **CP - Landing Turismo** — 0 resultados. Rota (cold-start).
- **Conclusión de fondo:** el cuello de botella hacia $30k USD/mes **no es generar leads** (los genera baratos), sino: (1) que el funnel de implantes/turismo no se rompa, (2) la **tasa de cierre real**, y (3) la **capacidad operativa** (10-15 diseños + 10 implantes/mes).

---

## 2. Campañas activas (detalle)

| Campaña | Objetivo | Resultados | Costo/result | Gastado (COP) | Presup./día |
|---|---|---|---|---|---|
| CP Diseño de sonrisa | Conversión landing (Lead) | 64 | $19.531 | 1.250.031 | 39.000 |
| Visitas al perfil de IG | Visitas perfil | 3.964 | $189 | 749.887 | 10.000 |
| CP - Landing Turismo | Conversión landing | 0 | — | 47.340 | 30.000 |

**Anuncios de CP Diseño de sonrisa:** AD3 es el ganador (64 resultados, ~1.164.465 COP, $18.194/lead). AD1/AD2/AD4 sin resultados → Meta concentró bien el presupuesto en el ganador.

**Anuncios de CP - Landing Turismo:** ad set *"CP - LANDING TURISMO ML + SUGERENCIAS"*, lanzado **26-may-2026**, 6 anuncios, alcance total **~887 personas**, 0 resultados.

---

## 3. Ranking histórico (qué funciona / qué quema)

### Lo que mejor rinde
| Campaña / estrategia | Volumen | Costo unitario | Gastado (COP) |
|---|---|---|---|
| W2 TEST (mensajes WhatsApp) | 1.142 conversaciones | $1.301 | 1.486.269 |
| IMPLANTES NIVEL 1 JULIO (mensajes) | 126 conv | $567 | 71.404 |
| W1 TEST (mensajes) | 288 conv | $1.375 | 395.996 |
| Visitas al perfil IG | 3.964 visitas | $189 | 749.887 |
| Form precalificación Implantes | 163 leads | $4.106 | 669.244 |
| Form precalificación Carillas/orto | 186 leads | $4.138 | 769.711 |
| CP Diseño de sonrisa (landing) | 64 leads | $19.531 | 1.250.031 |

### Lo que quema plata
| Campaña | Resultados | Costo/result | Veredicto |
|---|---|---|---|
| C2 Chequeo LANDING NUEVO EVENTO | 2 | $143.382 | Apagar |
| C1 Chequeo Integral | 8 | $35.127 | Apagar/replantear |
| CP - Landing Turismo | 0 | — | Reconstruir |

### Lección clave
Hay una **brecha de 15-100x** entre el lead más barato (mensajería WhatsApp $567-1.301) y el lead de landing/conversión ($19.531-143.382). La migración "mensajería → landing+GHL" es correcta en estrategia (lead más calificado, ticket más alto), pero es la causa del dolor actual con implantes/turismo: ese funnel aún no madura.

---

## 4. Diagnóstico: por qué Implantes/Turismo da 0 leads

**No es el creativo. Es arranque en frío (cold start):**
- Campaña lanzada hace ~3 días (26-may), optimizando un **evento de conversión nuevo en la landing ("Gracias landing turismo") sin historial**.
- Meta necesita ~50 conversiones/semana por ad set para salir de aprendizaje. Con 0 histórico + audiencia lookalike fría + ticket altísimo → entrega mínima (1.318 impresiones).
- Mismo patrón de error que C1/C2 Chequeo.

**Fix (en orden):**
1. Cambiar la optimización del ad set a **Mensajes/WhatsApp** (evento probado, $567-1.301) hasta acumular ~30-50 conversiones.
2. Concentrar presupuesto (40-50k/día) en el ad set, no repartido en 6 anuncios fríos.
3. Verificar que el Píxel + GHL realmente disparan el evento "Gracias".
4. Cuando el píxel tenga historial, volver a optimización por conversión.

---

## 5. Instagram orgánico (@dracarolinamacareno)

| Métrica | Valor | Lectura |
|---|---|---|
| Seguidores | 4.104 | Meta 100k = ×24 |
| Publicaciones | 289 | Mucho contenido, poco seguidor → bajo alcance |
| Engagement | ~11 likes / 0 comentarios por reel (~0,3%) | Bajo |
| Formato | Reels-first | Correcto |
| Destacadas | APRENDE, IMPLANTES, INSPIRACION, TESTIMONIOS, ESPECIALISTAS, MI VIDA, DISEÑOS | Branding sólido |
| Bio/link | walink.co → WhatsApp | Coherente con funnel |

**Recomendación:** pasar de 4-5 reels/mes a **3/semana** con **reels de alcance** (hook en 1er segundo, transformaciones antes/después, historias de paciente, "errores con tus dientes"). Medir **guardados y compartidos**, no likes. Recortar "seguidos" (521) para perfil de autoridad.

---

## 6. Plan estratégico priorizado (30 días)

**Semana 1 — arreglar lo que sangra**
1. Apagar C1 y C2 Chequeo Integral.
2. Rescatar CP - Landing Turismo (optimización → Mensajes/WhatsApp).
3. Verificar Píxel + GHL en ambas landings.

**Semana 2-3 — escalar lo que gana**
4. Subir presupuesto de CP Diseño de sonrisa +30% cada 3-4 días mientras CPL < $25k.
5. Reactivar motor de implantes estilo W2 TEST (mensajería) como top-funnel hacia GHL.
6. Mantener "Visitas al perfil IG".

**IG orgánico (continuo)**
7. 3 reels/semana de alcance.
8. Recortar seguidos.

---

## 6.5 Funnel REAL — Diseño de sonrisa (mayo 2026) ⭐ dato confirmado

Datos reales aportados por Carolina (todos los 43 leads de mayo = CP Diseño de sonrisa):

| Etapa | Cant. | Tasa |
|---|---|---|
| Leads | 43 | — |
| Agendaron cita | 13 | 30% (lead→cita) |
| Asistieron | 3 | show rate 33% |
| No-show | 6 | inasistencia 67% 🔴 |
| Cita futura pendiente | 4 | — |
| Cerraron (1 en tratamiento + 1 por iniciar) | 2 | cierre 66% de asistentes ⭐ |

**Lead → venta real: ~4,7%** (subirá al resolver las 4 citas pendientes). Valida el rango estimado 3-6%.

**Las 3 tasas:**
1. **Cierre en consulta 66%** → superpotencia. Quien entra, compra.
2. **Lead → cita 30%** → aceptable.
3. **Show rate 33% (67% no-show)** → 🔴 el sistema se cae aquí.

**Economía:** costo por venta ~$420.000 COP (~$105 USD) por tratamiento de 12-30M COP. Mayo Diseño: 2 ventas ≈ 24-36M COP con ~840.000 COP de inversión → ROAS ~30-43x.

**La palanca #1 (no-show):** si el show rate sube de 33%→70% (confirmación + recordatorios GHL), las mismas 13 citas dan ~6 ventas en vez de 2. Con los MISMOS leads y gasto, mayo habría sido ~108M COP (~$27k). **Arreglar el no-show > escalar presupuesto.**

> **Prioridad reordenada:** #1 secuencia anti-no-show en GHL · #2 escalar leads Diseño (tope = capacidad 10-15/mes; ~107 leads/mes bastan si se arregla el no-show) · #3 arreglar Implantes/Turismo.

---

## 7. Proyecciones por escenario (mensual)

**Supuestos (estimados, editables):**
- CPL Diseño (landing): $19.531 · CPL implantes (form/mensajería): ~$4.100
- Cierre Diseño: 3-6% (medio 4,5%) · Cierre implantes: ~0,8% (ciclo 1-6 meses)
- Ticket Diseño: 18M COP · Ticket implante (All-on-4/6): 30M COP
- Tope capacidad: 10-15 diseños + 10 implantes/mes

| | A – Optimizar | B – Crecer | C – Agresivo |
|---|---|---|---|
| Inversión/mes | $600 (2,4M) | $1.500 (6M) | $3.000 (12M) |
| Reparto (Diseño/Impl/IG) | 1,2M/0,9M/0,3M | 2,5M/2,5M/1,0M | 4,5M/5,5M/2,0M |
| Leads Diseño | ~61 | ~128 | ~230 |
| Ventas Diseño (3-6%) | 2-4 | 4-8 | 7-14 (≈tope) |
| Leads Implantes | ~220 | ~610 | ~1.340 |
| Ventas Implantes (~0,8%) | 1-3 | 3-7 | ~10 (tope) |
| Ingreso est./mes | ~$26k (104M) | ~$63k (250M) | ~$90-100k (tope operativo) |
| ROAS estimado | ~43x | ~42x | ~30x |

> ⚠️ Interpretación: en alto ticket dental, pocas ventas = mucho ingreso. El número real depende de la **tasa de cierre** y la **capacidad**, NO del presupuesto de ads. El ingreso de implantes se reconoce a lo largo de 1-6 meses.

---

## 8. Datos pendientes para precisar el plan

1. **Tasa de cierre real por producto** (de GHL: leads → citas → asistieron → cerraron). Convierte las proyecciones de "estimado" a "preciso". ← prioridad #1
2. Confirmar disparo del evento de conversión "Gracias" en landings (Píxel + GHL).
3. Auditar la cuenta Theperfectsmile.
4. Ticket promedio real por producto (Diseño y All-on-4/6).

---

## 9. Próximas decisiones (a tomar con Carolina/Sebastián)

- [ ] ¿Aprobar fix de CP - Landing Turismo (cambio de optimización)?
- [ ] ¿Apagar C1/C2 Chequeo?
- [ ] ¿Qué escenario de presupuesto (A/B/C) adoptamos?
- [ ] ¿Arrancar el calendario de reels 3/semana?

---

*Fuentes de datos: exportaciones oficiales de Meta Ads Manager (CSV Campañas y Anuncios, cuenta 450101980459992) descargadas el 29-may-2026, y revisión en vivo del perfil @dracarolinamacareno.*
