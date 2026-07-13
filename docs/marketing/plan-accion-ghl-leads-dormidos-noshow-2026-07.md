# Plan de acción — Recuperar leads dormidos + Fix no-show + Registro de cierres (GHL)
### Ejecución operativa · julio 2026 · Dra. Carolina Macareno

> Documento de ejecución. Se apoya en:
> - `docs/marketing/auditoria-consecutivo-mayo-junio-julio-2026.md` (diagnóstico y cifras)
> - `docs/marketing/plantillas-whatsapp-recordatorios.md` (plantillas previas)
> - `docs/marketing/auditoria-ghl-no-show-2026-05-29.md` (causas del no-show)
>
> **Contexto GHL:** HubLevel · location `z84DlOrVXLL9zuRM5VYV`. Pipeline principal **"Nuevos Pacientes Dra. C"** con fases: `Nuevo Lead → Prospecto → Agenda Cita → Vino a la cita → Ganado / Perdido-abandonado`. Negocio **WhatsApp-first**. Audiencia ~90% diáspora hispana (colombianos en el exterior + familia). Tono: cálido, profesional, cercano, español neutro. NO inventar credenciales/prensa.
>
> **Cifras que justifican esto (junio):** 230 leads → 187 SIN TOCAR (81%) → 26 agendaron valoración → 9 asistieron (no-show 68%) → 0 tratamiento registrado.

---

## OBJETIVO DE LA SESIÓN DE EJECUCIÓN
1. **Recuperar** los ~187 leads dormidos en "Nuevo Lead" (inversión ya pagada).
2. **Reducir el no-show** con recordatorios que SÍ lleguen (plantillas WhatsApp) + confirmación.
3. **Registrar cierres** en GHL (mover a "Ganado" + monto) para por fin medir facturación.
4. **Mantener pausada CP Landing Turismo** (decisión ya tomada: leads interesados pero que no comprometían la cita). Foco del presupuesto en leads locales que asisten. Diseñar embudo de turismo aparte para reactivar con más recursos.

**Métrica norte:** subir asistencias a valoración de ~9 a ~30/mes y registrar cierres con su valor.

---

## PARTE A — GUIONES DE WHATSAPP (copiar/pegar, personalizar {Nombre})

### A1. Reactivación de lead dormido — reciente (< 30 días, no contactado)
```
Hola {Nombre} 👋 Le escribe el equipo de la Dra. Carolina Macareno, rehabilitadora oral en Medellín.
Vi que se interesó en {tema: diseño de sonrisa / implantes / rehabilitación}. ¿Sigue buscando resolver esto?
Con gusto le agendo una *valoración* para que la Dra. revise su caso y le dé un plan claro. ¿Le va bien esta semana o la próxima?
```

### A2. Reactivación de lead dormido — antiguo (> 30 días, "revivir")
```
Hola {Nombre}, ¿cómo está? 🙂 Retomo su consulta sobre {tema} con la Dra. Carolina Macareno.
Sé que pasó un tiempo — si aún quiere una sonrisa que se vea y funcione bien, este es buen momento: estamos agendando valoraciones esta semana.
¿Le gustaría que le aparte un espacio? Solo dígame y coordinamos.
```

### A3. Lead de turismo dental (diáspora / exterior)
```
Hi {Nombre} / Hola {Nombre} 👋 Le escribe el equipo de la Dra. Carolina Macareno en Medellín.
Vi su interés en tratamiento dental en Colombia. Muchos de nuestros pacientes vienen del exterior y coordinamos todo: valoración virtual previa, plan, y agenda para su viaje.
¿Quiere que agendemos una *valoración virtual* sin costo para revisar su caso? ¿Qué día/hora le sirve (su zona horaria)?
```

### A4. Confirmación de cita de valoración — 24 h antes
```
Hola {Nombre} 🙂 Le recordamos su *valoración* con la Dra. Carolina Macareno:
🗓️ {Fecha} a las {Hora}
📍 {Dirección / enlace virtual}
Por favor confírmenos con un *SÍ* para reservar su espacio. Si necesita reprogramar, con gusto le ayudamos.
```

### A5. Recordatorio — 2 h antes
```
{Nombre}, su valoración con la Dra. Carolina es hoy a las {Hora} 😊
{Dirección / enlace}. La esperamos. ¿Confirma que viene?
```

### A6. Recuperación de no-show (no asistió)
```
Hola {Nombre}, notamos que no pudo asistir a su valoración de hoy — no hay problema, entendemos que surgen cosas 🙌
¿Quiere que la reprogramemos? Tengo espacio {opción 1} y {opción 2}. Dígame cuál le sirve y la dejo lista.
```

### A7. Seguimiento post-valoración (para CERRAR tratamiento)
```
Hola {Nombre}, fue un gusto atenderle 😊 Como quedamos, aquí le confirmo el plan de la Dra.:
🦷 {Tratamiento} · Inversión: {monto} · {financiación/CuraPay si aplica}
¿Resolvemos dudas y agendamos el inicio? Podemos empezar {fecha propuesta}.
```

> Nota: usar plantillas APROBADAS en GHL (las free-form no entregan bien y fue una causa del no-show). Registrar estas 7 como *Snippets/Templates* en GHL.

---

## PARTE B — PASOS EXACTOS EN GHL

### B1. Trabajar los 187 leads dormidos
1. Entrar a `app.gohighlevel.com` → location Dra. Carolina Macareno → **Oportunidades / Clientes Potenciales**.
2. Abrir pipeline **"Nuevos Pacientes Dra. C"**, fase **"Nuevo Lead"**.
3. Filtrar por **fecha de creación** (segmentar: últimos 30 días vs. más antiguos) y por **fuente** (turismo vs. local) para elegir el guion (A1/A2/A3).
4. Asignar un **responsable** a cada oportunidad (dueño del pipeline) para que no queden huérfanas.
5. Abrir cada contacto → pestaña **Conversaciones** → enviar WhatsApp con la plantilla correspondiente (personalizar {Nombre}, {tema}).
6. **Mover de fase** según respuesta:
   - Responde con interés → **Prospecto**.
   - Acepta agendar → crear la cita en **Calendarios** y mover a **Agenda Cita**.
   - No responde tras 2 intentos (día 1 y día 3) → dejar en secuencia de nurturing, no en "Perdido" todavía.
7. Meta de la primera pasada: sacar **30–40** leads a "Agenda Cita".

### B2. Fix del no-show (que los recordatorios SÍ lleguen)
1. Verificar que **cada cita agendada se cree en Calendarios** (causa raíz previa: citas sin crear).
2. Registrar las plantillas A4/A5/A6 como **Templates de WhatsApp** en GHL.
3. Montar/activar un **Workflow** de recordatorios en el calendario de valoración:
   - Disparador: cita agendada.
   - −24 h → enviar A4 (pide confirmación con SÍ).
   - −2 h → enviar A5.
   - Si marca no-asistió → enviar A6 (recuperación) + tarea al responsable.
4. Confirmar que el **agente IA / envío** esté ENCENDIDO (causa previa: agente Principal apagado, IA reservaba 0 citas).
5. Objetivo: asistencia 32% → 60%.

### B3. Registro de cierres (para medir facturación)
1. Cuando una valoración cierra tratamiento: abrir la oportunidad → mover a **"Ganado"**.
2. **Cargar el valor** de la oportunidad (monto del tratamiento en COP o USD) — sin esto el dashboard seguirá mostrando $0.
3. Registrar también los cierres de las últimas semanas que se hicieron por WhatsApp y nunca se marcaron (recuperar histórico).
4. Revisar semanalmente: **Dashboard → Ingresos ganados** y **conversión**.

### B4. Meta (paralelo) — NO reactivar Turismo todavía
1. **CP - Landing Turismo se mantiene pausada A PROPÓSITO.** Razón real: traía leads baratos pero de baja intención — al momento de agendar decían "después llamo / ahora no puedo" y no comprometían la cita. Se optimiza el presupuesto hacia leads que sí asisten e inician tratamiento.
2. **Antes de reactivarla** (cuando haya más recursos), diseñar un **embudo específico de turismo**: valoración *virtual* previa, nurture largo por zona horaria, coordinación alrededor de la fecha de viaje. Sin ese embudo, reactivar solo vuelve a quemar presupuesto.
3. Verificar que W3 (conversación) no esté canibalizando presupuesto sin dar leads de formulario; concentrar en CP Diseño de sonrisa (local, mayor asistencia).

---

## PARTE C — CHECKLIST PENDIENTE (de la auditoría)
- [ ] 187 leads dormidos contactados (guiones A1–A3).
- [ ] 7 plantillas WhatsApp cargadas como Templates en GHL.
- [ ] Workflow de recordatorios de valoración activo (−24 h / −2 h / no-show).
- [ ] Agente IA / envíos encendidos y verificados.
- [ ] Cierres históricos y nuevos marcados "Ganado" con monto.
- [x] CP Landing Turismo pausada a propósito (baja conversión de cita). Pendiente: diseñar embudo de turismo (valoración virtual + nurture) antes de reactivar.
- [ ] Cadencia GBP retomada (post + fotos; última hace 66 días).
- [ ] Plan para revertir declive de Instagram.
- [ ] Decisión Google Ads (arreglar o cerrar campaña rota).
- [ ] UTMs entrantes para vaciar "Direct" en GA4 (atribución).

## PARTE D — MÉTRICAS A REVISAR CADA SEMANA (consecutivo)
Leads Meta · CPL · Clics orgánicos (GSC) · Oportunidades GHL · **Agendaron valoración · Asistieron · Cierres (Ganado) con monto**. Registrar en el mismo formato de `auditoria-consecutivo-mayo-junio-julio-2026.md`.
