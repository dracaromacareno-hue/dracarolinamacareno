# Plantillas de WhatsApp — Recordatorios de cita (GHL)

**Para:** Dra. Carolina Macareno · clínica (Medellín)
**Objetivo:** subir el show rate ≥70% arreglando la causa raíz #1 (recordatorios en "free form" que no se entregan fuera de la ventana de 24 h).
**Fecha:** 2026-05-29 · Complementa `auditoria-ghl-no-show-2026-05-29.md`

> ⚠️ **Clave:** estas plantillas son **categoría Utility** y deben **aprobarse en WhatsApp Business API**
> (Meta) ANTES de usarlas en el workflow. Una vez aprobadas, en el nodo WhatsApp de GHL se selecciona la
> plantilla (NO "Free form") y se mapean las variables. Así sí se entregan aunque la cita se haya agendado
> con días de anticipación.
>
> **Variables WhatsApp** = `{{1}}, {{2}}…`. Abajo indico a qué **custom value de GHL** mapear cada una.
> **Botones** = Quick Reply (respuesta rápida). Activar `ENABLE BRANCHES` en el nodo para ramificar la respuesta.
> Las plantillas Utility NO pueden tener lenguaje promocional (si no, Meta las marca Marketing o las rechaza).

---

## 1) Confirmación al agendar  ·  (nodo "WhatsApp 1", ~1 min después de agendar)

**Nombre interno:** `confirmacion_cita_drcm`
**Categoría:** Utility

**Body:**
```
¡Hola {{1}}! 💛 Soy del equipo de la Dra. Carolina Macareno.

Tu cita de valoración quedó agendada para el {{2}} a las {{3}}.

Es presencial en {{4}}. Te esperamos con muchas ganas de conocerte y de cuidar tu sonrisa.

¿Confirmas que vas a asistir?
```
**Botones (Quick Reply):**  `✅ Confirmo`   ·   `🔁 Reagendar`

**Mapeo GHL:**
- `{{1}}` → `{{contact.first_name}}`
- `{{2}}` → `{{appointment.start_date}}`
- `{{3}}` → `{{appointment.start_time}}`
- `{{4}}` → dirección del consultorio (custom value `{{location.address}}` o texto fijo)

**Ramas (branches):**
- `✅ Confirmo` → tag `cita_confirmada` + nota al setter.
- `🔁 Reagendar` → tarea/asignación a humano para reubicar + tag `pidio_reagendar`.

---

## 2) Recordatorio — noche anterior  ·  (~20 h antes)

**Nombre interno:** `recordatorio_noche_anterior_drcm`
**Categoría:** Utility

**Body:**
```
Hola {{1}} 💛 Mañana es tu cita con la Dra. Carolina.

🗓 {{2}} a las {{3}}
📍 {{4}}

Aparta unos 45 minutos para que conversemos con calma sobre tu caso. ¿Nos confirmas que cuentas con ese espacio?
```
**Botones:**  `✅ Ahí estaré`   ·   `🔁 Necesito reagendar`

**Mapeo GHL:** igual que la #1.

**Ramas:**
- `✅ Ahí estaré` → tag `confirmado_24h`.
- `🔁 Necesito reagendar` → handoff a humano + slot alternativo.
- **Sin respuesta en 3 h** → tarea automática: **llamada del equipo** a ese paciente.

---

## 3) Recordatorio — el día de la cita  ·  (~3 h antes)

**Nombre interno:** `recordatorio_dia_cita_drcm`
**Categoría:** Utility

**Body:**
```
¡Hoy es el día, {{1}}! 😄 Tu cita con la Dra. Carolina es a las {{2}}.

📍 {{3}}
🚗 Cómo llegar: {{4}}

Si vienes en carro, hay parqueo {{5}}. Cualquier cosa, respóndenos por aquí y te ayudamos.
```
**Botones:**  `✅ Voy en camino`   ·   `🔁 Tuve un imprevisto`

**Mapeo GHL:**
- `{{1}}` → `{{contact.first_name}}`
- `{{2}}` → `{{appointment.start_time}}`
- `{{3}}` → dirección
- `{{4}}` → link de Google Maps (custom value o texto)
- `{{5}}` → indicación de parqueo (texto fijo: "en el edificio" / "sobre la calle X")

**Ramas:**
- `🔁 Tuve un imprevisto` → handoff inmediato a humano para reagendar (no perder al paciente).

---

## 4) "¿Vas en camino?"  ·  (~1 h antes)  *(opcional, alto impacto)*

**Nombre interno:** `recordatorio_1h_drcm`
**Categoría:** Utility

**Body:**
```
{{1}}, en una hora te esperamos 💛 La Dra. Carolina ya tiene tu espacio reservado.

¿Todo bien para llegar a las {{2}}?
```
**Botones:**  `✅ Sí, voy`   ·   `🔁 Voy a llegar tarde`

**Mapeo GHL:** `{{1}}` → first_name · `{{2}}` → start_time.

**Ramas:**
- `🔁 Voy a llegar tarde` → aviso al setter para ajustar la agenda (evita marcar no-show a alguien que sí viene).

---

## 5) Recuperación de no-show  ·  (workflow nuevo: trigger Appointment Status = "No-show")

**Nombre interno:** `recuperacion_noshow_drcm`
**Categoría:** Utility

**Body:**
```
Hola {{1}} 💛 Hoy te esperábamos y no pudiste venir; tranquil@, a todos nos pasa.

Tu sonrisa sigue siendo importante para nosotros y queremos darte una nueva fecha sin enredos.

¿Te reservo otro espacio esta semana?
```
**Botones:**  `🗓 Sí, reagendar`   ·   `📞 Que me llamen`

**Mapeo GHL:** `{{1}}` → first_name.

**Ramas:**
- `🗓 Sí, reagendar` → enviar link del calendario / asignar a humano.
- `📞 Que me llamen` → tarea de llamada.
- **Sin respuesta 24 h** → segundo intento + tag `noshow_frio` para retargeting Meta.

---

## Notas de implementación

1. **Aprobar primero en Meta/WhatsApp Manager** (las 4–5 plantillas Utility). Tarda de minutos a 24 h.
2. En cada nodo WhatsApp del workflow `Appointment Booking Presencial`: cambiar de **"None - Free form"** a la
   **plantilla aprobada** y mapear variables. Activar **ENABLE BRANCHES**.
3. La confirmación inmediata (#1) puede ir como free-form **solo si** el paciente escribió en las últimas 24 h;
   aun así, usar plantilla es más robusto.
4. Crear el **workflow nuevo de no-show** (#5) con trigger `Appointment Status = No-show`.
5. Verificar que el número **+57 316 3975232** esté conectado vía **WhatsApp Business API oficial** (sin eso,
   las plantillas no aplican).
6. Mantener tono **cálido y cercano** (💛 con moderación, tú, nombre propio). Evitar sonar robótico o promocional.
