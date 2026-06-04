# Plan de ejecución consolidado — Marketing & Tracking DRCM
**Fecha:** 29 may 2026 · **Dominio:** dracarolinamacareno.com · **Cuenta Meta:** `450101980459992`

> Documento único de ejecución. Reúne TODOS los hallazgos de la fase de auditoría
> (Meta Ads + IG, GHL no-show, GHL tracking/CAPI, Google Search Console, GA4) en un
> checklist priorizado. Decisión del usuario: **auditar todo primero, ejecutar en conjunto**.
>
> Fuentes detalladas (no se repiten aquí):
> - `auditoria-meta-ads-instagram-2026-05-29.md`
> - `auditoria-ghl-no-show-2026-05-29.md` (Parte 1 no-show + Parte 2 tracking + checklist §13)
> - Sección A de este doc = auditoría GSC Indexación (nueva, antes solo en conversación)

---

## A. Auditoría GSC — Indexación de páginas (cierre de la fase)

**Propiedad:** `sc-domain:dracarolinamacareno.com` · informe "Indexación de páginas".

### Foto general
| Métrica | Valor |
|---|---|
| Páginas **indexadas** | **27** |
| Páginas **sin indexar** | **86** |
| % del sitio invisible | ~76% |
| Clics orgánicos (6 sem) | ~32 |
| Sitemap enviado | `/sitemap.xml` · estado **Correcto** · **60 páginas descubiertas** · última lectura 19 may |

### Desglose de los 86 sin indexar (7 motivos)
| # | Motivo | Fuente | Validación | Qué son realmente |
|---|---|---|---|---|
| 41 | **Descubierta: actualmente sin indexar** | Google | Iniciada | 🔴 Las URLs **NUEVAS de Next.js** = el sitio real: `/blog/*` (15 ES + 15 EN), `/servicios/*`, `/libros/*`, `/sobre-mi`, `/contacto` y sus `/en/*`. Google las descubrió pero NO las indexa. |
| 21 | **No se ha encontrado (404)** | Sitio web | Iniciada | URLs viejas de **WordPress**: slugs planos ES (`/casos-de-exito/`, `/blanqueamiento/`, `/ortodoncia/`…), `/wp-content/*`, `/wp-admin/*`, `/agenda-tu-cita/`, `/contactanos/`. |
| 9 | Página con redirección | Sitio web | No iniciada | URLs no-canónicas que redirigen (normalmente esperado, baja prioridad). |
| 7 | Rastreada: actualmente sin indexar | Google | Error | Rastreada pero Google no la indexa (señal de calidad/duplicado). |
| 6 | **Error de redirección** | Sitio web | No iniciada | Inconsistencia **trailing-slash** (con/sin `/`: `/protesis-hibrida` vs `/protesis-hibrida/`) + home en inglés `/en/`. |
| 1 | Bloqueada por otro 4xx | Sitio web | No iniciada | Investigar 1 URL. |
| 1 | Excluida por `noindex` | Sitio web | No iniciada | Probablemente intencional — verificar cuál. |

### 🎯 Causa raíz (conecta todo)
El sitio se **migró de WordPress → Next.js sin un mapa de redirecciones 301**.
Consecuencia en cadena:
1. Las URLs viejas de WP quedaron en **404** (21) y con **redirect errors** (6).
2. Google sigue rastreando ese **ruido**, gastando presupuesto de rastreo.
3. Las URLs nuevas y buenas (blog, servicios, libros) quedan en **"Descubierta, no indexada"** (41) — descubiertas vía sitemap pero **deprioritizadas** por crawl budget + baja autoridad + sitio nuevo.
4. Resultado: **solo 27/113 URLs indexadas** → casi todo el contenido real es invisible → ~32 clics/6 sem.

> El sitemap **NO es el problema** (está Correcto, 60 págs, incluye las URLs nuevas). El problema es presupuesto de rastreo desperdiciado + ausencia de 301 + autoridad baja.

---

## B. Checklist de ejecución consolidado (priorizado)

Prioridad: **P0** = arregla fuga de dinero/señal ya · **P1** = mide dinero y campaña · **P2** = consolidación.
Esfuerzo: 🟢 bajo (<1h) · 🟡 medio (medio día) · 🔴 alto (varios días / requiere dev).

### 🔴 P0 — Crítico (esta semana)

| # | Acción | Área | Por qué | Esfuerzo | Dónde |
|---|---|---|---|---|---|
| 1 | **Reconectar la integración de Facebook en GHL** a la página correcta (Dra. Carolina, NO "Theperfectsmile") y resolver el estado EN ERROR | GHL tracking | La integración está rota y apuntando a la página equivocada → leads de Meta sin sincronizar bien | 🟢 | GHL → Configuración → Integraciones |
| 2 | **Encender el agente IA "Principal"** y revisar por qué la IA reserva 0 citas | GHL no-show | Agente apagado = leads sin atención inmediata → no-show 67% | 🟢 | GHL → Conversations AI |
| 3 | **Mapa de redirecciones 301** WP→Next.js: cada URL vieja en 404 → su equivalente nuevo (ej. `/ortodoncia/` → `/servicios/ortodoncia`, `/casos-de-exito/` → `/sobre-mi` o galería). Las `/wp-*` → 410/301 a home | GSC / Web | Detiene la fuga de presupuesto de rastreo y recupera autoridad de enlaces viejos | 🔴 (dev, `next.config` redirects) | repo `dracarolinamacareno` |
| 4 | **Normalizar trailing-slash** (elegir con o sin `/` y forzar 301 consistente) + reparar la home `/en/` | GSC / Web | Mata los 6 "error de redirección" | 🟡 (dev) | `next.config.js` `trailingSlash` |
| 5 | **Mover el evento CAPI "Lead" al submit del formulario** (hoy dispara al agendar cita) y **añadir Event ID** para dedup con el pixel `383402556430150` | GHL / Meta CAPI | Hoy Meta no recibe la señal de lead real y hay doble conteo sin dedup → optimización de ads ciega | 🟡 | GHL workflows + CAPI |
| 6 | **Recordatorios de cita con plantilla aprobada** (no free-form) y verificar entrega | GHL no-show | Los recordatorios free-form no se entregan → no-show | 🟡 | GHL → Appoiment workflows |

### 🟠 P1 — Alto (medir dinero y campaña)

| # | Acción | Área | Por qué | Esfuerzo |
|---|---|---|---|---|
| 7 | Asignar **valor monetario real** a las oportunidades (no placeholder $79; usar ticket real por servicio: All-on-4 $12–20k, etc.) | GHL / Meta | Sin valor no se puede optimizar a ROAS ni medir CPL real | 🟡 |
| 8 | **Atribución por campaña vía UTM**: capturar `utm_source/medium/campaign` en los formularios y mapear a la oportunidad (reemplazar la fuente estática "Form Implantes - Meta Ads" y el tag genérico "lead de pauta") | GHL / Meta | Hoy no se sabe qué campaña/anuncio trae cada lead | 🟡 |
| 9 | **Enhanced Conversions de vuelta a Google Ads** (hoy solo entra lead sync, no devuelve conversión) | GHL / Google | Google Ads optimiza sin saber qué lead convierte | 🟡 |
| 10 | **Crear Oportunidad + asignar** en el workflow "Formulario Diseño de sonrisa" (67 inscritos, el más usado, hoy no crea oportunidad ni asigna) | GHL | 67 leads cayendo sin entrar al pipeline ni a un dueño | 🟢 |
| 11 | **Validar fixes en GSC**: tras desplegar 301 (acción 3-4), pulsar "Validar corrección" en 404 y Error de redirección; reenviar sitemap | GSC | Acelera la re-indexación de las 41 buenas | 🟢 |
| 12 | **Solicitar indexación manual** (Inspección de URLs → Solicitar indexación) de las 5–10 páginas más comerciales: `/servicios/*`, blog turismo dental, `/contacto` | GSC | Empuja directamente las páginas que venden | 🟢 |

### 🟡 P2 — Medio (consolidación)

| # | Acción | Área | Por qué | Esfuerzo |
|---|---|---|---|---|
| 13 | **Unificar los 2 workflows de Implantes** en uno solo | GHL | Hoy hay 2 separados → mantenimiento y lógica duplicada | 🟡 |
| 14 | **Conectar GA4 a las landings de GHL** (hoy el tráfico de Meta vive en landings GHL sin GA4 → 0 sesiones desde Meta en GA4, dos universos desconectados) | GA4 | Unificar medición de Meta con el resto del sitio | 🟡 |
| 15 | **Enlazado interno** hacia las páginas "Descubiertas no indexadas" (links desde home/blog hacia `/servicios/*`, `/libros/*`) para subir su prioridad de rastreo | GSC / Web | Más autoridad interna = Google las indexa antes | 🟡 |
| 16 | Revisar la URL `noindex` (1) y la `4xx bloqueada` (1) — confirmar si son intencionales | GSC | Limpiar el último ruido | 🟢 |

---

## C. Orden de ejecución sugerido
1. **Día 1 (config, sin dev):** acciones 1, 2, 10, 12 — encender lo apagado y empujar lo que ya existe.
2. **Día 1-2 (GHL tracking):** acciones 5, 6, 7, 8, 9 — recuperar la señal de Meta/Google.
3. **Sprint dev (repo):** acciones 3, 4 (301 + trailing-slash) → desplegar → acción 11 (validar en GSC).
4. **Seguimiento 2-4 sem:** acciones 13, 14, 15, 16 + medir re-indexación y CPL por campaña.

## D. Cómo se mide el éxito (post-cambios)
- **GSC:** páginas indexadas suben de 27 → objetivo >80 en 4-6 semanas; 404 y redirect errors → ~0.
- **Meta:** evento Lead llega en el submit, con dedup; CPL real visible por campaña.
- **GHL:** show rate ≥70%; cada lead con valor $ y campaña; agente IA atendiendo.
- **GA4:** sesiones desde Meta > 0 (landings GHL midiendo).
