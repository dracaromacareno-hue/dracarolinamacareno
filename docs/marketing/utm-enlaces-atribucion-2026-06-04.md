# Enlaces con UTM para atribución — Dra. Carolina Macareno

**Fecha:** 4-jun-2026
**Objetivo:** vaciar el "Direct" de GA4 (visitas anónimas) etiquetando los enlaces ENTRANTES a la web, para saber qué canal trae los pacientes que agendan.

## Qué es esto (en simple)
Un UTM es una etiqueta invisible al final del link de la web. El paciente ve la página igual, pero Google Analytics (y GHL) leen la etiqueta y saben de dónde vino la visita. Es como ponerle una pulsera de color a cada visitante según la puerta por la que entró.

## Links listos para usar

| Canal | Link con UTM |
|---|---|
| Instagram – bio | `https://dracarolinamacareno.com/?utm_source=instagram&utm_medium=bio` |
| Instagram – sticker stories | `https://dracarolinamacareno.com/?utm_source=instagram&utm_medium=story` |
| Google Business – botón "Sitio web" | `https://dracarolinamacareno.com/?utm_source=google_business&utm_medium=profile` |
| WhatsApp – estado/firma/manuales | `https://dracarolinamacareno.com/?utm_source=whatsapp&utm_medium=chat` |
| GHL – mensajes automáticos | `https://dracarolinamacareno.com/?utm_source=ghl&utm_medium=crm` |
| Email / newsletter | `https://dracarolinamacareno.com/?utm_source=email&utm_medium=newsletter` |
| Facebook – página | `https://dracarolinamacareno.com/?utm_source=facebook_organico&utm_medium=social` |

## Reglas
1. **Solo en enlaces que entran a la web desde afuera** (redes, Google, mensajes, email).
2. **NUNCA** en botones internos de la propia web (borraría la atribución original).
3. Si quieres apuntar a una página específica (ej. una landing), reemplaza `dracarolinamacareno.com/` por la ruta (ej. `dracarolinamacareno.com/contacto`) y deja el `?utm_...` igual al final.

## Compatibilidad con el código
`lib/source-tracking.ts` ya lee estos `utm_source` y etiqueta el lead en GHL:
- `instagram` → "Instagram"
- `email` → "email"
- `google_business`, `whatsapp`, `ghl`, `facebook_organico` → etiqueta con su propio nombre (default)

(Nota: NO usar `utm_source=facebook` a secas — el código lo interpreta como "Meta Ads" de pago. Por eso para FB orgánico usamos `facebook_organico`.)

## Estado de colocación
- [ ] Instagram bio
- [ ] Instagram stories (cuando aplique)
- [ ] Google Business "Sitio web"
- [ ] GHL mensajes automáticos
- [ ] WhatsApp estado / firma
- [ ] Email / newsletter
- [ ] Facebook página

Relacionado: auditoría 3 sistemas (jun-2026), `lib/source-tracking.ts`.
