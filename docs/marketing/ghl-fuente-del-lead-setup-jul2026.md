# GHL: llenar "Fuente del lead" automáticamente (setup jul-2026)

Estado a 18-jul-2026: la atribución web→GHL está **probada de punta a punta**. El webhook
`[WEB→GHL] Dental Implants Landing turismo dental` (location `z84DlOrVXLL9zuRM5VYV`) recibe el
POST del formulario de la web con `attributed_source` y `attributed_label`. Falta terminar de
escribir esa fuente en un campo, y replicarlo en los otros canales.

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

## PROMPT LISTO PARA PEGAR EN UNA SESIÓN NUEVA

> Estoy configurando GHL (location z84DlOrVXLL9zuRM5VYV, white-label HubLevel) para que cada
> lead traiga su "Fuente del lead (auto)" (campo texto). La atribución web→GHL ya está probada:
> el webhook `[WEB→GHL] Dental Implants Landing turismo dental` recibe `attributed_label`.
> Guíame paso a paso (voy dando pantallazos) para: (1) terminar de mapear
> `{{inboundWebhookRequest.attributed_label}}` en ese webhook, (2) crear el workflow
> parse-WhatsApp que lee `[fuente: X]` del primer mensaje, (3) replicar el mismo campo en los
> forms de GHL de pauta (Form Implantes, etc.). NO tocar la secuencia de Turismo todavía.
> Ver docs/marketing/ghl-fuente-del-lead-setup-jul2026.md para el contexto completo.
