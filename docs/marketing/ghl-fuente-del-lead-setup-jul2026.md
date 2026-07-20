# GHL: llenar "Fuente del lead" automáticamente (setup jul-2026)

## ESTADO ACTUAL (19-jul-2026) — leer esto primero

- ✅ Atribución web→GHL **probada de punta a punta**. Webhook `[WEB→GHL] Dental Implants
  Landing turismo dental` (location `z84DlOrVXLL9zuRM5VYV`) recibe el POST del form web con
  `attributed_source`/`attributed_label` (probado 18-jul con lead "prueba de atribucion",
  utm_source=instagram → attributed_label "Instagram"). Su URL = `GHL_WEBHOOK_URL` (Vercel, confirmado).
- ⚠️ **VERIFICAR PRIMERO:** en ese webhook se agregó la acción **"Set Fuente del lead"** (entre
  "Crear contacto" y "Add Tag") con valor `{{inboundWebhookRequest.attributed_label}}`. Quedó
  apuntando al campo **dropdown "Fuente del Lead"** (NO al campo de texto que se había decidido).
  Confirmar si se guardó (sin puntico rojo en "Guardar") y decidir: dejarlo en el dropdown
  (funciona pero mezcla con las 6 categorías manuales) o mover a un campo de texto
  "Fuente del lead (auto)". Si el equipo NO llena el dropdown a mano, dejarlo así está bien.
- ✅ **Deploys en prod:** `897d9a0` (26 archivos wa.me → WhatsAppLink) + `2e4ee62`
  (source-tracking.ts: IA Gemini/Copilot/DeepSeek/Grok + `utm_source=gbp` → "Google Business").
- ✅ **GBP Website ya tiene UTM:** `?utm_source=gbp&utm_medium=listing&utm_campaign=google_maps`
  (ya estaba puesto). Con el deploy 2e4ee62 vivo, esos clics se etiquetan "Google Business". NADA que cambiar.
- ⏳ **GBP WhatsApp** (link `wa.me/573163975232` en el campo de mensajes del perfil): sin tag.
  Taguearlo va junto con el parse-WhatsApp (ver PARTE 2 y PARTE 6).
- ⚠️ **El mayor volumen de pauta NO entra por la web** sino por forms de GHL de Sebastián
  (Form Implantes 48, Formulario Diseño 146 vs webhook web 4). Esos son la PARTE 3, sin hacer.

Custom field a usar: **"Fuente del lead (auto)"** tipo **Texto de una línea** (NO usar el
dropdown "Fuente del lead", que tiene categorías de negocio fijas y mezcla vocabularios).

Referencia del dato del webhook (escribir a mano, no aparece en el selector de Custom Values):
`{{inboundWebhookRequest.attributed_label}}` (bonito: "Google Ads", "Instagram", "ChatGPT")
`{{inboundWebhookRequest.attributed_source}}` (código: "google_ads", "instagram", "chatgpt")

---

## PARTE 1 — Terminar el webhook de la web (casi listo)

1. Configuración → Campos personalizados → Agregar campo:
   Nombre `Fuente del lead (auto)`, tipo Texto de una línea, objeto Contacto. Guardar.
2. Automatización → workflow `[WEB→GHL] Dental Implants Landing turismo dental` → abrir la
   acción **"Set Fuente del lead"** (está entre "Crear contacto" y "Add Tag").
3. Campo: seleccionar **"Fuente del lead (auto)"** (el de texto nuevo).
4. Valor: cambiar a **Dinámico** y escribir a mano `{{inboundWebhookRequest.attributed_label}}`.
5. Guardar acción. El workflow ya está Publicado, queda vivo.
6. Verificar: enviar un lead de prueba desde `dracarolinamacareno.com/contacto?utm_source=instagram`
   (nombre "PRUEBA 2"). En Contactos, abrir "PRUEBA 2" y confirmar "Fuente del lead (auto)" = Instagram.

(Opcional, robustez) Añadir If/Else antes de la acción: si `attributed_label` viene vacío,
escribir `{{inboundWebhookRequest.utm_source}}`; si también vacío, literal "Directo".

---

## PARTE 2 — Parse-WhatsApp (los que escriben por el botón, no por form)

El tag `[fuente: X]` viaja en el texto del primer mensaje de WhatsApp. Workflow nuevo:
- Trigger: **Customer Replied / Inbound Message**, filtro Channel = WhatsApp, y Message
  `contains` `[fuente:` (añadir OR con `[source:` para inglés).
- If/Else: gate en `Fuente del lead (auto)` `is empty` (first-touch, no sobrescribir).
- Escribir `Fuente del lead (auto)` según el mensaje. Sin regex nativo: cadena de If/Else
  con `contains` para cada etiqueta conocida:
  Google Ads, Meta Ads, Instagram, TikTok, Google (orgánico), Facebook, Doctoralia,
  ChatGPT, Gemini, Copilot, Perplexity, Claude AI, DeepSeek, Grok; catch-all → "Web (otro)".
- Si el plan tiene acción **Custom Code (JS)**: extraer con regex
  `\[(?:fuente|source):\s*([^\]]+)\]` y escribir el grupo capturado (cubre también fuentes
  dinámicas tipo `ref_dominio.com`).

---

## PARTE 3 — Forms de GHL de Sebastián (mayor volumen)

`Form Implantes`, `Formulario Diseño de sonrisa`, etc. NO entran por el webhook web, entran
por formularios nativos de GHL en las landings de pauta. Su fuente la captura GHL por UTM.
Para cada workflow que dispara con "Formulario enviado":
- Añadir la misma acción "Actualizar campo de contacto" → `Fuente del lead (auto)`.
- Valor: mapear el UTM/source que GHL capturó del formulario (revisar qué campo trae la
  fuente en esos forms; normalmente `{{contact.utm_source}}` o el custom value del form).
- Verificar con un envío de prueba desde la landing correspondiente.

---

## PARTE 4 — Limpieza de duplicado (más adelante, NO ahora)

- Objetivo: que TODO caiga en el pipeline "Nuevos Pacientes" y se deje de duplicar en Turismo.
- Sospechoso del duplicado: `New Workflow :Cable B · Form Implantes → Pipeline Turismo Dental`
  (trigger "Formulario enviado" = "Form Implantes Turismo Dental", crea oportunidad en Pipeline
  Turismo Dental). El webhook web crea en "pipeline implantes".
- Antes de borrar la secuencia de Turismo, reapuntar sus creaciones de oportunidad a
  "Nuevos Pacientes" para no perder leads. Confirmar a qué pipeline apunta cada
  "Crear oportunidad".

---

## PARTE 5 — Código web (ya listo, falta desplegar)

- `lib/source-tracking.ts` ya mejorado (jul-18) para detectar IA: ChatGPT, Gemini, Copilot,
  Perplexity, Claude, DeepSeek, Grok, con bloque IA antes de buscadores. En working tree,
  SIN desplegar. Desplegar junto con lo demás.
- Punto ciego conocido: AI Overviews / AI Mode de Google llegan como referrer google.com y
  caen en "Google orgánico". Solo los atrapa la pregunta "¿cómo nos encontró?" (Salomé).

---

## PARTE 6 — ❌ DESCARTADA: NO se puede taguear el WhatsApp de GBP

**PROBADO Y FALLÓ el 19-jul-2026. NO volver a intentarlo.** Se pegó
`https://wa.me/573163975232?text=Hola,%20vengo%20de%20Google%20[fuente:%20Google%20Business]`
en el campo "WhatsApp click to chat URL" (Editar perfil → Contacto → Chat) y al guardar
**Google eliminó el `?text=`**, dejando solo `https://wa.me/573163975232`. Google normaliza ese
campo. (Se confirma porque el campo Website SÍ conserva su URL larga con UTMs, el de WhatsApp no.)

**Consecuencia:** los leads que escriben por WhatsApp desde el perfil de Google entran SIN fuente
y son indistinguibles de cualquier otro WhatsApp directo. Es un punto ciego permanente.

**Cómo mitigarlo (únicas opciones reales):**
1. La pregunta **"¿cómo nos encontró?"** al abrir la conversación (Salomé). Es el único método
   que atribuye a nivel lead.
2. **GBP Insights** da el VOLUMEN de clics al chat/llamada/web del perfil (el perfil ya registra
   224 interacciones). Sirve para saber cuántos, aunque no cuáles.
3. (Costoso, probablemente no vale la pena) Un número de WhatsApp dedicado solo para GBP.

---

## PARTE 6-BIS — Referencia histórica del intento (no ejecutar)

El botón de WhatsApp/mensajes del perfil de Google apunta a `https://wa.me/573163975232`
(sin tag), así que los que escriben por ahí entran sin fuente. Para taguearlo:
1. Google (logueada como dueña) → buscar "Dra. Carolina Macareno" → **Editar perfil** →
   **Contacto** → campo del link de WhatsApp/mensajes (el que muestra `wa.me/573163975232`).
2. Reemplazar por:
   `https://wa.me/573163975232?text=Hola,%20vengo%20de%20Google%20[fuente:%20Google%20Business]`
3. Guardar.
NOTA: esto solo sirve si el parse-WhatsApp (Parte 2) ya está leyendo el tag `[fuente:`. Por eso
se hacen juntas. Verificar que el campo de GBP acepte la URL con `?text=` (algunos campos de
mensajes solo aceptan el número; si es el caso, no se puede taguear y queda para la pregunta manual).

---

## PROMPT LISTO PARA PEGAR EN UNA SESIÓN NUEVA

> Continúo la atribución de fuente de leads de Dra. Carolina Macareno. NO reconstruyas nada,
> lee primero docs/marketing/ghl-fuente-del-lead-setup-jul2026.md (sección "ESTADO ACTUAL") y
> la memoria [[atribucion-fuente-leads-jul2026]]. Ya está desplegado y probado: la atribución
> web→GHL funciona (webhook [WEB→GHL] recibe attributed_label; deploys 897d9a0 y 2e4ee62 en prod;
> GBP Website ya tiene utm_source=gbp). GHL: location z84DlOrVXLL9zuRM5VYV (white-label HubLevel),
> lo edito yo por navegador dando pantallazos (su editor no se automatiza bien; usar get_page_text
> cuando el screenshot falle). Trabajo pendiente, en orden:
> 1) VERIFICAR que la acción "Set Fuente del lead" del webhook [WEB→GHL] quedó guardada, y decidir
>    campo dropdown vs texto "Fuente del lead (auto)".
> 2) PARTE 3: los forms de GHL de Sebastián (Form Implantes, Formulario Diseño de sonrisa) son el
>    MAYOR volumen de pauta. Abrir un contacto reciente de "Form Implantes Turismo Dental", ver qué
>    dato de fuente/gclid/utm capturó GHL, y agregar la misma acción "Actualizar campo de contacto"
>    en esos workflows.
> 3) PARTE 2: crear workflow parse-WhatsApp (lee [fuente: X]/[source: X] del 1er mensaje).
> 4) PARTE 6: taguear el wa.me de GBP (junto con la Parte 2).
> 5) PARTE 4 (más adelante): limpieza del duplicado Turismo → Nuevos Pacientes.
> Vigilar costo de Claude: preferir que el usuario dé pantallazos a que yo navegue en vivo.
> NO tocar la secuencia de Turismo todavía.
