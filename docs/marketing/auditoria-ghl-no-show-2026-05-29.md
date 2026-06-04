# Auditoría GHL (GoHighLevel) — Diagnóstico del No-Show

**Cuenta:** Dra. Carolina Macareno · Rehabilitación Oral, Estética e Implantología (Medellín)
**CRM:** GoHighLevel (whitelabel "HubLevel") · Location `z84DlOrVXLL9zuRM5VYV`
**Fecha:** 2026-05-29
**Auditor:** Andrés (Estratega de Crecimiento) — auditoría en vivo vía navegador
**Documento hermano:** `auditoria-meta-ads-instagram-2026-05-29.md`

---

## 0. Por qué esta auditoría

La auditoría de Meta + IG dejó claro que el cuello de botella **no está en generar leads** sino en
convertirlos en pacientes. El embudo real de **mayo 2026**:

```
43 leads  →  13 citas agendadas  →  3 asistieron  →  2 cerraron
                                   (6 no-show + 4 pendientes)
```

- **Show rate ≈ 33%** (no-show ≈ **67%** sobre las citas con resultado definido).
- La doctora **cierra 66%** de quien SÍ asiste. El problema no es el cierre: **es que la gente no llega.**

Objetivo de esta auditoría: entender, dentro de GHL, **por qué no llegan** y qué arreglar para subir el
show rate por encima del 70%.

---

## 1. Hallazgos macro (Dashboard · Todos los embudos)

| Métrica | Valor |
|---|---|
| Oportunidades totales (histórico) | **688** |
| Abandonadas | **558 (81%)** |
| Abiertas | 106 |
| Ganadas | **24** |
| Tasa de conversión global | **3.49%** |
| Ingresos registrados | **$0** (no se captura valor monetario en ninguna oportunidad) |

> 81% de las oportunidades terminan "abandonadas" y el valor monetario nunca se registra → es imposible
> calcular CAC, LTV o ROI real dentro del CRM.

---

## 2. Pipelines y etapas

Existen **3 pipelines** con nomenclatura inconsistente (numeración 01/03 sin 02, mayúsculas erráticas
"pipeLine", typo "Cosnsultorio"):

### 2.1 `01. Marketing pipeline Cosnsultorio` (Diseño de sonrisa / consultorio) — **134 abiertas**
| Etapa | Abiertas |
|---|---|
| Nuevo Lead | 19 |
| Otros | 0 |
| Prospección | **39** |
| Agenda Cita virtual | 3 |
| Agenda Cita presencial | **33** |
| En seguimiento para Venta | 17 |
| Venta / Review / Base de datos / Clientes actuales | 0 |

🚩 **Problema estructural #1 — no se puede medir el show rate.**
Después de "Agenda Cita virtual/presencial" la siguiente etapa es "En seguimiento para Venta".
**No existe una etapa "Asistió".** El CRM no distingue *agendó* de *asistió* → la clínica vuela a ciegas
sobre la métrica más importante.

🚩 Mezcla embudo de venta con post-venta (Review, Base de datos, Clientes actuales) en el mismo pipeline.
🚩 Muchísimas tarjetas marcadas **"Usuario sin asignar"** → leads sin dueño = sin responsable del seguimiento.
🚩 Estancamiento: 39 en Prospección + 33 en Agenda presencial sin avanzar.

### 2.2 `Implantes - Turismo Dental` — **2 abiertas**
Etapas: Lead nuevo → Contactado → Pidió cita → **Asistió / Valoración** → Tratamiento.
✅ Estructura correcta (sí distingue "pidió cita" de "asistió")… pero **casi sin uso** (2 leads).
Las oportunidades llegan de "Form Implantes - Meta Ads".

### 2.3 `03. Marketing pipeLine Ecommerce` — **0 abiertas**
Etapas: Nuevo lead → Prospección WA → Comprador. Vacío (probablemente reservado para Proyectia).

---

## 3. Automatizaciones de confirmación / recordatorio

Los workflows están organizados en carpetas: **Appoiment** (sic), Asesoria Pauta, Asistentes IA, CRM,
Otros, Redes sociales.

### 3.1 Carpeta `Appoiment` — sí existen recordatorios (y eso sorprende)
| Workflow | Estado | Inscritos totales | Activos |
|---|---|---|---|
| 1. Appointment Booking Virtual | Published | 4 | 0 |
| 2. Appointment Booking Presencial | Published | **37** | 0 |

El workflow **Appointment Booking Presencial** (el principal) tiene esta secuencia:

```
Trigger: Appointment Status (presencial)
  → Meta Conversion API   (✅ buen tracking de conversión a Meta)
  → Tag "agenda consulta presencial"
  → Actualizar Oportunidad (Booking)
  → Asignar usuario
  → Nota + Notificación al Setter   (✅ aviso interno al equipo)
  → Wait 1 min → WhatsApp 1   (confirmación: "¡Tu consulta está confirmada!")
  → (espera) 22 horas antes → WhatsApp 2
  → (espera) 2 horas antes  → WhatsApp 3
```

**Conclusión contraintuitiva: los recordatorios SÍ están construidos** (confirmación + 22 h antes + 2 h
antes). El no-show **no se debe a la ausencia de recordatorios.** Se debe a *cómo* están construidos:

🚩 **Causa raíz #1 — los recordatorios se envían como "Free form message", no como plantilla aprobada.**
El nodo WhatsApp usa `SELECT WHATSAPP TEMPLATE = None - Free form message` (desde +57 316 3975232).
La API de WhatsApp Business **solo entrega mensajes libres dentro de la ventana de 24 h** posterior al
último mensaje del cliente. Para mensajes iniciados por el negocio fuera de esa ventana (un recordatorio
de una cita agendada con 1–3 días de anticipación) **se requiere una plantilla aprobada**.
→ Los recordatorios de **22 h y 2 h antes** (los más importantes) **muy probablemente no se entregan**
para citas agendadas con anticipación. Fallan en silencio.

🚩 **Causa raíz #2 — recordatorios de una sola vía, sin captura de confirmación.**
WhatsApp 1 dice "tu consulta está confirmada" pero **no pide al paciente responder** (CONFIRMO / REAGENDAR).
`ENABLE BRANCHES` está **desactivado** → aunque se usara plantilla con botones, no se ramifica ni se
captura la respuesta. No hay tarea para que un humano llame a quien no confirma.

🚩 **Causa raíz #3 — la mayoría de las citas nunca disparan el workflow.**
El trigger es "Appointment Status", o sea requiere una **cita creada en el calendario de GHL**.
El workflow presencial acumula **37 inscritos desde noviembre 2025** (~6 meses) ≈ **6/mes**, frente a
**~13 citas/mes** reales. → Aproximadamente **la mitad de las citas nunca se registran como cita en el
calendario** (se acuerdan por chat) y por tanto **nunca reciben recordatorio.**

🚩 No existe **workflow de recuperación de no-show** (si la cita queda como "no asistió" → reagendar).

---

## 4. Agentes de IA de WhatsApp y handoff

GHL muestra un dashboard de **"Agentes de IA de Conversación"** (mayo 2026):

| Métrica (1–29 may) | Valor | vs mes anterior |
|---|---|---|
| Contactos únicos atendidos | 173 | **▼ -70.6%** |
| Acciones activadas | 20 | ▼ -37.5% |
| **Citas reservadas por la IA** | **0** | — |
| Tiempo ahorrado | 1.74 h | ▼ -72.5% |

**La IA conversa con 173 contactos pero reserva 0 citas, y su actividad cayó 70% vs abril.**

### Lista de agentes (5 bots, no 3)
| Agente | Estado | Canal |
|---|---|---|
| **Salomé 2** | 🟢 Piloto automático (**único activo**) | WhatsApp |
| Salomé | Apagado | WhatsApp |
| Sofi extranjeros | **Apagado** | WhatsApp |
| **Sofi** | 🔵 **Principal** — pero **APAGADO** | WhatsApp |
| Lumi | Apagado | Widget chat web / SMS |

🚩 **Causa raíz #4 — el handoff de mensajes entrantes está mal configurado.**
El propio panel advierte: *"Únicamente el agente principal responderá a los mensajes entrantes"*.
El agente marcado **Principal (Sofi) está APAGADO**. El único encendido (Salomé 2) **no** es el principal y
opera en piloto automático. Resultado probable: incoherencia en quién/qué responde los WhatsApp entrantes,
lo que explica la caída del 70% y las 0 citas reservadas.

🚩 **"Sofi extranjeros" (pacientes de turismo dental / extranjeros) está APAGADO** → los leads de la
campaña de Implantes-Turismo no reciben atención automatizada en su idioma/flujo. Coincide con que el
pipeline de Implantes solo tenga 2 oportunidades.

🚩 "Lumi" (chat del sitio web) apagado → el chat de la web queda desatendido.

> El handoff a humano específico (cuándo el bot pasa a una persona) no se inspeccionó a fondo en esta
> sesión — **verificar** dentro de la config de Salomé 2 (sección "Acciones"/"Transferir").

---

## 5. Atribución por campaña

- Las oportunidades traen "Fuente del cliente": `Form Diseño`, `Form Implantes - Meta Ads`, y muchas con
  prefijo `WA -` (entraron por WhatsApp) o vacías `||`.
- ✅ El workflow incluye **Meta Conversion API** → buena señal: las conversiones de agendamiento se
  reportan de vuelta a Meta (ayuda a optimizar las campañas).
- 🚩 Inconsistencia: muchos leads de WhatsApp llegan **sin fuente de campaña** (`||`) → no se puede atribuir
  qué anuncio/campaña los originó. Se pierde la trazabilidad ad → cita → venta.

---

## 6. Diagnóstico — por qué no llegan (resumen de causas raíz)

| # | Causa raíz | Impacto en no-show |
|---|---|---|
| 1 | Recordatorios en **modo "free form"** (no plantilla) → 22 h y 2 h antes no se entregan fuera de la ventana 24 h | **Alto** |
| 2 | Citas acordadas por chat **no se registran en el calendario** → ~50% nunca recibe recordatorio | **Alto** |
| 3 | Recordatorios de **una sola vía**, sin pedir confirmación ni follow-up humano a quien no confirma | **Alto** |
| 4 | **Agente IA principal apagado** + IA reserva 0 citas + actividad ▼70% | **Alto** |
| 5 | Pipeline principal **sin etapa "Asistió"** → no se mide el show rate, se optimiza a ciegas | Medio (habilitante) |
| 6 | Leads **"sin asignar"** → nadie es responsable del seguimiento | Medio |
| 7 | Sin **workflow de recuperación de no-show** | Medio |
| 8 | Atribución incompleta (`WA -`, `||`) | Bajo (pero ciega el ROI) |

---

## 7. Plan para subir el show rate (priorizado por impacto/esfuerzo)

### 🚀 Quick wins — esta semana
1. **Pasar los recordatorios a plantillas de WhatsApp aprobadas (categoría Utility)** para WhatsApp 2 (22 h)
   y WhatsApp 3 (2 h). Verificar que +57 316 3975232 esté conectado vía WhatsApp Business API oficial.
   *→ Arregla la falla silenciosa de entrega. Es la palanca #1.*
2. **Convertir el recordatorio en una conversación**: plantilla con botones **"Confirmo ✅ / Reagendar 🔁"**
   y activar `ENABLE BRANCHES`. Quien no responda en X horas → **tarea automática para que un humano llame.**
3. **Regla operativa: toda cita se crea como cita en el calendario de GHL** (sin excepción). Entrenar al
   equipo y al bot para agendar siempre dentro del calendario → así dispara el workflow de recordatorios.
4. **Arreglar el agente IA principal**: marcar como *Principal* al agente activo (Salomé 2) **o** reactivar
   Sofi. Que siempre haya exactamente un agente principal **encendido** respondiendo los entrantes.
5. **Reactivar "Sofi extranjeros"** para los leads de turismo dental.
6. **Asignar dueño a cada lead** (round-robin del equipo) → eliminar "Usuario sin asignar".

### 🏗️ Estructural — 2 a 4 semanas
7. **Agregar etapas "Asistió", "No asistió" y "Reagendado"** al pipeline Cosnsultorio → medir show rate nativo.
8. **Cadencia de recordatorios mejorada** (con plantillas):
   confirmación al agendar → **noche anterior** → **mañana del día (3 h antes)** con dirección/parqueo/cómo
   llegar → **"¿vas en camino?" 1 h antes** → llamada humana a no-confirmados el día previo.
9. **Workflow de recuperación de no-show**: si Appointment Status = no-show → WhatsApp empático inmediato +
   2 opciones de reagendamiento + tag `no-show` para retargeting.
10. **Aumentar el compromiso**: paso de "guarda tu cupo" / micro-depósito reembolsable, o mensaje de valor
    pre-cita (video corto de la Dra. + qué esperar) para subir la intención de asistir.
11. **Backstop con notificaciones nativas del calendario** (email + SMS) independientes del workflow.
12. **Limpieza de pipelines**: corregir typos, unificar nomenclatura, separar funnel de post-venta,
    estandarizar fuentes/UTMs para cerrar la atribución `WA -`/`||`.

### 📊 Medición
- KPI norte: **show rate** semanal vía la nueva etapa "Asistió". **Meta: ≥70%.**
- Secundarios: % de citas registradas en calendario (meta 100%), % recordatorios entregados, % confirmaciones,
  citas reservadas por IA (>0), tasa de recuperación de no-shows.

---

## 8. Pendiente de verificar (no cubierto a fondo en esta sesión)
- Config de **notificaciones nativas del calendario** (¿reminders email/SMS activos? buffers, ventana de
  reserva, doble booking).
- **Handoff exacto** del agente Salomé 2 (cuándo y a quién transfiere).
- Estado de la **conexión WhatsApp Business API** (oficial vs no oficial) del número +57 316 3975232.
- Contenido literal de WhatsApp 2 y 3 (se confirmó que ambos pasos existen; se asume modo free-form como WA 1).

---

*Próximo paso sugerido: ejecutar los Quick Wins 1–6 y reauditar el show rate en 2 semanas.*

---
---

# PARTE 2 — Auditoría de TRACKING (Formularios → Workflows → Meta/Google)

**Fecha:** 2026-05-29 · **Auditor:** Andrés · verificación en vivo, solo lectura (no se ejecutó ni modificó nada).
**Pregunta a responder:** ¿el sistema trackea bien y *devuelve* la info para que Meta/Google aprendan y para medir por campaña?

---

## 9. Formularios de captura

Hay **10 formularios** en Sitios → Formularios. Los dos que importan para pauta:

### 9.1 `Form Implantes Turismo Dental` (id `IDvNYSl93KphtPZG9ikw`)
Campos: Nombre, Apellidos, **Teléfono\***, **Correo\***, Edad, ¿Dónde te encuentras? (ubicación),
¿Situación actual?, ¿A qué te dedicas?, **¿En cuánto tiempo decides?**, **¿Rango de inversión?**
✅ Excelente calificación (presupuesto + tiempo de decisión + ubicación, clave para turismo dental).
✅ Consentimiento **Habeas Data (Ley 1581 de 2012)**.
🚩 "Al enviar" muestra **mensaje genérico en inglés** ("We appreciate your feedback!") sin personalizar y **sin redirección** a página de gracias/WhatsApp.

### 9.2 `Form Diseño` (id `a5YKAMOFyAjYl35B2huR`)
Campos: Nombre Completo\*, **Teléfono/WhatsApp\***, Correo\*, Edad, Ocupación, Ciudad/País,
¿Qué mejorar?, ¿Consultaste antes?, **¿Rango de inversión?**
✅ Buena calificación + **consentimiento explícito de marketing/WhatsApp** (mejor que Implantes para mensajes iniciados por el negocio — ayuda con la entrega de WhatsApp).

> **Captura de fuente/UTM:** los formularios **no tienen campos ocultos de UTM**. GHL captura la atribución
> de forma nativa en el contacto cuando el form va embebido en una página rastreada; PERO la **"Fuente"
> de la *oportunidad* se escribe como etiqueta estática** (ver 10.2) → no se distingue campaña/adset dentro
> del CRM. (Los nombres del usuario "Cable B Form Implantes" y "web-ghl dental implants landing" no son
> formularios sino el **workflow Cable B** y la **landing del embudo Implantes Turismo Dental**.)

---

## 10. Workflows de lead (los que disparan al enviar el formulario)

Hallazgo de fondo: **el manejo del lead de implantes está partido en 2 workflows separados** y el de diseño
en 1. **Ninguno de los 3 workflows de lead envía el evento a Meta (no tienen nodo Meta CAPI).**

### 10.1 `Form Implantes` (96db2b75 · Published · 5 inscritos)
Trigger **Formulario Enviado = Form Implantes** ✅
→ **WhatsApp** con **plantilla aprobada** `gracias_diseno (es) - MARKETING` y **ENABLE BRANCHES = ON** ✅
  (botones interactivos; nº `+57 316 3975232`)
→ Ramas: *Undelivered / Hablar con un consultor / Time Out* → cada una **Asignar usuario = Estefania Adarve López** ✅
🚩 Sin Meta CAPI · 🚩 no crea oportunidad · ⚠️ usa plantilla "gracias_**diseno**" en flujo de **implantes** (naming cruzado).

### 10.2 `Cable B · Form Implantes → Pipeline Turismo Dental` (651dfd86 · Published · 12 inscritos)
Trigger **Formulario Enviado = Form Implantes** ✅
→ **Crear oportunidad** en pipeline **Implantes - Turismo Dental**, etapa **Lead nuevo**
  · Fuente = **"Form Implantes - Meta Ads"** (etiqueta **estática**, no campaña real)
  · **Valor = VACÍO** 🚩 (para implantes de US$12-20k es crítico: imposible medir ingresos/ROAS)
🚩 Sin Meta CAPI · sin tag · **sin asignar usuario** · sin notificación · sin seguimiento. → FIN.

> Conclusión implantes: entre los 2 workflows se cubre WhatsApp + asignar a Estefa + crear oportunidad,
> pero **fragmentado** y **sin devolver el Lead a Meta**.

### 10.3 `Formulario Diseño de sonrisa` (2723a3de · Published · **67 inscritos** — el más usado)
Trigger **Formulario Enviado = Form Diseño** ✅
→ **Add Tag = "lead de pauta"** ✅ (origen genérico, no por campaña)
→ **WhatsApp** interactivo (ENABLE BRANCHES) → ramas *Undelivered / Hablar con un consultor / Time Out*
→ rama "Hablar con un consultor" → **Update Conversation AI Bot and Status** → FIN
🚩 Sin Meta CAPI · 🚩 **no crea oportunidad en ningún pipeline** · 🚩 **no asigna a Estefa**.

> Hay además workflows en **Draft sin uso**: `Formulario Rehabilitación`, `para Form Diaseño` (typo) → 0 inscritos.

---

## 11. Conexión Meta (Conversions API) y Google

### 11.1 El único Meta CAPI vive en `Appointment Booking Presencial` (no en el lead)
Secuencia: **Appointment Status presencial → Meta Conversion API → Etiqueta → Actualizar Oportunidad → Asignar → Nota → WhatsApps**

Config del nodo **API de Conversión de Meta**:
| Campo | Valor |
|---|---|
| Tipo de conexión | **Integración** (usa la conexión de Facebook del CRM) |
| Tipo de evento | Funnel Event |
| **Nombre del evento** | **`Lead`** |
| Valor / Moneda | **79 USD** (placeholder, no el valor real del tratamiento) |
| ID del conjunto de datos (Pixel) | **`383402556430150`** |
| Token de acceso | configurado (`EAAYhF8yj…`) |
| **Campo Event ID (dedup)** | **NO existe** 🚩 |

Implicaciones:
- 🚩 El evento se llama **"Lead" pero dispara al AGENDAR CITA presencial**, no al enviar el formulario.
  → Meta recibe la conversión **muy abajo del embudo** (~6/mes, las citas que sí se crean en calendario),
  no el lead real (~13-43/mes). Optimiza con poquísima señal.
- 🚩 **No hay deduplicación con el pixel** (sin Event ID). Si el pixel del sitio también dispara "Lead",
  hay riesgo de doble conteo; si no dispara, no hay señal de navegador que casar.
- 🚩 Usa **conexión "Integración"** → y la integración de Facebook **está en ERROR** (ver 11.2),
  por lo que **este CAPI probablemente está fallando hoy**.

### 11.2 Estado de las integraciones (Configuración → Integraciones)
| Integración | Estado |
|---|---|
| **Facebook** | 🚩🚩 **ERROR — "Solucionar problema"**. Conectada a la página **"Theperfectsmile, +1"** (no a la de Dra. Carolina) → reconectar a la cuenta/página correcta. |
| Google (Drive/Sheets/Gmail) | ✅ Conectada (`dracaromacareno@gmail.com`) |
| **Google Ads** ("Anuncios clientes potenciales de Google") | ✅ Conectada (Gestionar) — **pero solo sincroniza leads Google → CRM (entrada)**. La app "Google Lead Ads" del marketplace aparece como *Instalar*. |
| **Google Business Profile** | ✅ Conectada como **Dra. Carolina** (cuenta correcta) |
| WhatsApp | ✅ Conectada |
| LinkedIn / TikTok Ads | ⚪ No conectadas |

### 11.3 Google — ¿se devuelve conversión?
🚩 **NO.** Ningún workflow tiene acción de **conversión offline / Enhanced Conversions a Google Ads**.
La integración de Google Ads es de **entrada** (importa leads de formularios de Google al CRM), no de **salida**.
→ Google Ads **no aprende** de las conversiones reales (cita/venta) que ocurren en el CRM.

---

## 12. VEREDICTO

> **¿Trackea bien y devuelve la info para que Meta/Google aprendan y para medir por campaña? → NO (parcial y roto).**

| Pieza | ¿Funciona? |
|---|---|
| Formularios capturan datos + califican | ✅ Sí (bien diseñados) |
| Consentimiento legal | ✅ Sí (Habeas Data / opt-in marketing) |
| Lead entra al CRM y se contacta por WhatsApp | ✅ Sí (plantillas + ramas + asignación a Estefa en implantes) |
| **Evento Lead devuelto a Meta al captar el lead** | 🚩 **NO** (los workflows de lead no tienen CAPI) |
| **Único CAPI existente** | ⚠️ dispara en *cita agendada*, llamado "Lead", **sin dedup**, sobre conexión **rota** |
| **Conexión Facebook** | 🚩 **EN ERROR** (y en página equivocada) |
| **Valor monetario / ROAS** | 🚩 **NO** (oportunidad sin valor; CAPI con placeholder 79 USD) |
| **Atribución por campaña en CRM** | 🚩 **NO** (fuente estática "Form Implantes - Meta Ads"; tag genérico "lead de pauta") |
| **Conversión devuelta a Google Ads** | 🚩 **NO** (integración solo de entrada) |
| Diseño crea oportunidad en pipeline | 🚩 **NO** (el workflow activo solo etiquetea) |

**Diagnóstico:** la pauta optimiza casi a ciegas. Meta solo recibe una señal tardía, mal etiquetada, sin
dedup y sobre una conexión caída; Google no recibe nada de vuelta; y dentro del CRM no se puede medir por
campaña ni por dinero.

---

## 13. CHECKLIST DE AJUSTES (priorizado)

### 🔴 Crítico — arreglar la fuga de señal
1. **Reconectar Facebook** en Configuración → Integraciones a la **cuenta/página de Dra. Carolina Macareno**
   (hoy está en *Theperfectsmile* y en error). Sin esto, el CAPI no entrega.
2. **Disparar un evento `Lead` por Meta CAPI EN EL ENVÍO DEL FORMULARIO** (en los 3 workflows de lead),
   no solo al agendar. Renombrar el evento de la cita a **`Schedule`** (su significado real).
3. **Configurar deduplicación**: enviar `event_id` único compartido entre el **pixel del navegador** (en la
   landing, evento `Lead` al submit) y el **CAPI** → evitar doble conteo y mejorar match quality.

### 🟠 Alto — medir dinero y campaña
4. **Registrar valor de la oportunidad** (rango de inversión del form → valor; ej. implantes US$12-20k).
   Cargar el valor real en el CAPI en vez del placeholder 79 USD.
5. **Atribución dinámica por campaña**: mapear UTMs (utm_campaign/adset/fbclid) a campos del contacto y
   a la **fuente de la oportunidad** (no etiqueta estática). Igual para "lead de pauta" → tag por campaña.
6. **Conversión de salida a Google Ads**: activar **Enhanced Conversions for Leads / import offline** para
   que las citas y ventas vuelvan a Google y la pauta de Google aprenda.

### 🟡 Medio — consolidación
7. **Unificar los 2 workflows de implantes** en uno (o encadenarlos) para que todo lead: cree oportunidad
   **con valor**, asigne a Estefa, etiquetee por campaña y dispare CAPI.
8. **Workflow de Diseño: agregar Crear Oportunidad** (hoy solo etiqueta → los leads de diseño quizá no
   entran a pipeline) y asignación de dueño.
9. **Personalizar el "Al enviar"** del Form Implantes (mensaje en español + redirección a página de gracias
   → permite además medir "ThankYou pageview" como conversión).
10. Borrar/archivar workflows en Draft sin uso (`para Form Diaseño`, `Formulario Rehabilitación`).

### 📊 Validación post-cambios
- Meta Events Manager: ver el evento `Lead` (servidor + navegador) con **dedup** y match quality.
- Comprobar que cada campaña tenga su atribución en la oportunidad (medible por campaña).
- Google Ads: que las conversiones offline aparezcan importadas.
