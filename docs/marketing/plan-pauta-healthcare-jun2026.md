# Plan de Pauta — Dra. Carolina Macareno

> Generado 17-jun-2026 con la skill `claude-ads` (`/ads plan healthcare`), cruzado con auditorías reales previas (Meta may-2026, GHL no-show, GA4/GSC, turismo dental).

**Industria:** Salud / Odontología (rehabilitación oral) · **Geo:** Medellín (El Poblado) + diáspora hispana · **Objetivo:** Leads (citas) · **Presupuesto base:** ~$1.250/mo (rango histórico Meta) · **Estado junio:** 100% orgánico, Ads pausados

---

## ⚠️ Antes de gastar un peso: el cuello de botella NO son los leads

Va contra el instinto, pero las auditorías previas lo confirman. El problema **no es generar leads**, sino:

- **No-show 67%** — recordatorios free-form que no entregan, citas sin crear en calendario GHL, agente IA Principal apagado, IA de reserva reservando 0 citas
- **Cierre + capacidad** — el verdadero embudo angosto (auditoría Meta may-2026)
- **Medición rota** — GA4 con eventos clave inflados, GHL sin CAPI bien cableado, Landing Turismo en cold-start

**Regla dura:** meter presupuesto a tráfico antes de arreglar esto = pagar por leads que se caen. El **CPA real** se infla con cada no-show. Por eso la Fase 0 es de *fontanería*, no de pauta.

---

## Fase 0 — Fontanería (antes de reactivar Ads) · 1–2 semanas

| Acción | Por qué | Estado |
|---|---|---|
| Encender IA Principal + crear citas en calendario GHL | El no-show 67% arranca aquí | Pendiente (loc `z84DlOrVXLL9zuRM5VYV`) |
| Recordatorios que **sí entreguen** (no free-form) | Sube show rate a ≥70% | Pendiente |
| CAPI Meta + Enhanced Conversions Google | Sin esto no se mide el lead real | Path A en progreso (cuenta GA 285-456-9300) |
| Landing turismo: arreglar cold-start | Hoy convierte mal | Rota |

---

## Fase 1 — Mezcla de plataformas (presupuesto $1.250/mo)

Plantilla dental: CPC bajo (~$7.85) y CVR alta. Con $1.250 → **concentrar, no dispersar**.

| Plataforma | Rol | % | $/mo | Por qué |
|---|---|---|---|---|
| **Google Search** | Principal | 55% | ~$690 | Intención alta: "implantes dentales Medellín", "All-on-4 precio" |
| **Meta (FB/IG)** | Secundaria | 35% | ~$440 | Retargeting + awareness; operación real en cuenta `450101980459992` |
| **Testing** | Innovación | 10% | ~$120 | YouTube intro Dra. / nuevas audiencias |

> **TikTok: NO** por ahora — no está en el perfil, y la audiencia All-on-4 (45-65+) no es TikTok-first.

---

## Fase 2 — Arquitectura de campañas

### Google
```
├── Brand → "Dra Carolina Macareno", "clínica [nombre]"  (barato, protege marca)
├── Servicio: Implantes / All-on-4
│   ├── all on 4 medellín
│   ├── implantes dentales precio medellín
│   └── rehabilitación oral el poblado
├── Turismo dental (diáspora)
│   └── implantes colombia [para colombianos en el exterior]
└── Retargeting RLSA → visitantes del blog/servicios
```
- **Negativas críticas:** `gratis`, `eps`, `sura`, `universidad`, `empleo`, `salario`, `cómo hacer`
- **Idioma:** español. La audiencia de turismo es ~90% diáspora hispana (colombianos en el exterior + familia), NO gringos → inglés es baja prioridad.

### Meta
```
├── Awareness → video Dra. a cámara (confianza), tour consultorio
├── Lead Gen → formulario cita nueva (WhatsApp-first, ya optimizado)
└── Retargeting → visitantes servicios + viewers de video
```

---

## Fase 3 — Creativo (lo que funciona en dental)

- **P1:** Video Dra. a cámara 15-30s (genera confianza, muestra trato) → Meta + YouTube
- **P2:** Casos reales con **consentimiento** (habeas data) → Meta
- **P3:** Educativo: "5 señales de que necesitás rehabilitación oral"
- **P4:** Transparencia de costos / financiación (CuraPay) — reduce fricción del ticket alto ($12-20k USD)

> **Regla de marca:** nunca inventar premios/prensa/credenciales/conferencias. Solo datos reales (E-E-A-T).

---

## Fase 4 — KPIs realistas

| Métrica | Mes 1 | Mes 3 | Mes 6 |
|---|---|---|---|
| CPL (cita) | Baseline | −20% | Target |
| **Show rate** (cita→visita) | medir | **≥70%** | **80%** |
| Costo por paciente nuevo | medir | <20% del LTV | <15% del LTV |
| LTV All-on-4 | \$12-20k USD (altísimo → tolera CPA alto **si cierra**) | | |

El LTV gigante de All-on-4 es la ventaja: se puede pagar un CPA alto **siempre que show rate y cierre funcionen**. De ahí que la Fase 0 mande.

---

## Secuencia recomendada

1. **Ahora (junio orgánico):** ejecutar **Fase 0** (fontanería GHL + tracking). No necesita pauta.
2. **Fin de junio / julio:** reactivar con **Google Search de implantes** primero (intención más alta, CPC dental bajo).
3. **Después:** sumar Meta retargeting cuando pixel/CAPI ya midan bien.

---

## Benchmarks de referencia (plantilla healthcare/dental)

| Métrica | Benchmark dental |
|---|---|
| Google CPC | ~$7.85 (dental, vs $10-40 médico general) |
| Google CTR | 4.90% |
| Google CVR | 3.10% |
| Meta CPL (cita) | $15-$50 |
| Costo por paciente nuevo | $100-$500 |
| Presupuesto mínimo recomendado | $2.000+ (Google-first) — actual $1.250 está por debajo, de ahí "concentrar" |

## Pitfalls a evitar

- Combinar datos de páginas de salud con retargeting sin consentimiento (riesgo habeas data)
- Mandar tráfico al home genérico en vez de landing específica por servicio
- Sin call tracking → no se mide adquisición de paciente
- Prometer resultados médicos específicos (riesgo de política y legal)
- Ignorar no-show: infla el CPA real (ver Fase 0)
