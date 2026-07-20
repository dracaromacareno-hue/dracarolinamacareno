# Playbook: mover landings a .com + GA4, e identificar la fuente de cada lead

Fecha: 18-jul-2026. Objetivo: que Google Ads deje de ser un agujero negro (hoy no lo ven ni GA4, ni GSC, ni GHL) y que cada lead que entra a GHL quede marcado con su canal real.

## Datos maestros (para cualquier sesión)

- GHL location ID: `z84DlOrVXLL9zuRM5VYV`
- GA4 Measurement ID: `G-8NTC47VWNV` | Propiedad: `412449617` (a290092206p412449617)
- Repo del sitio web: `dracarolinamacareno` (Next.js 15 + Vercel). Ruta: `C:\Users\User\repos\dracarolinamacareno`
- Google Ads: cuenta `285-456-9300`. Campañas activas: "Implantologia Colombia" y "SEARCH / DISENO LANDING"
- Meta Ads: cuenta `450101980459992`

### Funnels ACTIVOS (los bien diseñados, en uso)

| Funnel | ID en GHL | URL actual (.co) | Dominio |
|---|---|---|---|
| Implantes Turismo Dental | `YFHMC1yzqH5VP80qhQJM` | `dracarolinamacareno.co/implantes` | `.co` (domainId Jg8q41K13357AQuqcUmd) |
| DISEÑO DE SONRISA | `dhagtYZqbwlxR07yt5MB` | `dracarolinamacareno.co/diseno-de-sonrisa` | `.co` (mismo dominio) |

### Funnels VIEJOS (NO tocar, no se usan): Landing Rehabilitación, Landing Estéticos (abr), VSL Extranjeros (nov-2025).

Subdominio destino elegido: **`agenda.dracarolinamacareno.com`** (sirve para los dos funnels; un solo CNAME).

DNS del `.com`: está en **GoDaddy** (ahí se agrega el CNAME del subdominio). Esto NO toca ni el sitio web ni la raíz `dracarolinamacareno.com`, solo crea un registro nuevo aparte.

IMPORTANTE (por qué no bloquean la campaña): el subdominio NO es un redirect. Google Ads apunta la URL final DIRECTO a `agenda.dracarolinamacareno.com/implantes`, y GHL sirve la página ahí mismo. No hay salto de un dominio a otro, así que no hay riesgo de desaprobación. El único redirect (301 del `.co`) es el Paso 6, opcional y al final, y para entonces los anuncios ya NO apuntan al `.co`, así que nunca están en la ruta del redirect.

---

# TAREA 1: mover las landings a .com + GA4

Regla de oro del orden: nunca cambiar el dominio sin actualizar Google Ads al mismo tiempo, o los anuncios se caen. Se hace en este orden:

### Paso 1. Crear el subdominio en GHL
1. GHL → Sites (Sitios) → abrir el funnel "Implantes Turismo Dental".
2. Settings del funnel → Domain → **Add domain** → escribir `agenda.dracarolinamacareno.com`.
3. GHL muestra un valor de **CNAME** para configurar en el DNS. Copiarlo (suele ser tipo `funnels.leadconnectorhq.com` o un valor propio).

### Paso 2. Apuntar el DNS del .com (en GoDaddy)
1. Entrar a GoDaddy → dracarolinamacareno.com → DNS → Administrar zonas / Registros.
2. Agregar registro **CNAME**: Host/Nombre `agenda`, Valor/Apunta a = el que dio GHL, TTL por defecto.
3. Guardar y esperar propagación (minutos a 1 hora). En GHL dar "Verify".
4. Esto NO afecta el sitio web ni la raíz; es un registro nuevo e independiente.

### Paso 3. Asignar los dos funnels al dominio nuevo
1. En cada funnel (Implantes y DISEÑO), Settings → Domain → elegir `agenda.dracarolinamacareno.com`.
2. Las URLs quedan: `agenda.dracarolinamacareno.com/implantes` y `agenda.dracarolinamacareno.com/diseno-de-sonrisa`.
3. Mantener el `.co` activo todavía (no borrar).

### Paso 4. Agregar GA4 al funnel
1. En cada funnel: Settings → **Tracking Code** → sección **Head**.
2. Pegar el snippet de GA4:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-8NTC47VWNV"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-8NTC47VWNV');
</script>
```
3. En GA4 → Admin → Flujos de datos → el flujo web → "Configurar tus dominios" → agregar `agenda.dracarolinamacareno.com` y `dracarolinamacareno.com` (medición entre dominios).
4. Verificar en GA4 → Tiempo real: abrir la landing nueva y ver que aparezca la sesión.

### Paso 5. Actualizar Google Ads (al mismo tiempo que el paso 3-4)
1. Cambiar la **URL final** de los anuncios:
   - Campaña "Implantologia Colombia" → `https://agenda.dracarolinamacareno.com/implantes`
   - Campaña "SEARCH / DISENO LANDING" → `https://agenda.dracarolinamacareno.com/diseno-de-sonrisa`
2. Configuración de la cuenta → **Sufijo de la URL final** (nivel cuenta):
   `utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_content={creative}`
3. Guardar. Nota: cambiar la URL final resetea parte del aprendizaje unos días (costo de una vez).

### Paso 6. (Último, opcional) Redirección 301 del .co
Solo cuando lo de arriba funcione y GA4 ya reciba datos. Requiere acceso al DNS/host del `.co` (posiblemente Sebastián): 301 de `dracarolinamacareno.co/*` → `agenda.dracarolinamacareno.com/*`.

---

# TAREA 2: identificar la fuente de cada lead en GHL

### Convención única de UTMs

| Canal real | utm_source | utm_medium |
|---|---|---|
| Google Ads | google | cpc |
| Google orgánico | google | organic (automático) |
| Facebook Ads | facebook | paid |
| Instagram Ads | instagram | paid |
| Instagram bio/orgánico | instagram | social |
| Sitio web (formulario/WhatsApp) | website | referral |
| IA (ChatGPT/Gemini) | chatgpt | ai |
| WhatsApp directo | whatsapp | chat |

### Paso A. Sitio web .com (lo hace Claude en el código)
En el repo `dracarolinamacareno`:
1. Capturar en la primera visita los UTMs de la URL y el `document.referrer`; guardarlos (cookie/localStorage first-touch).
2. Todo botón de WhatsApp y todo formulario que va a GHL debe adjuntar esos datos. Si no hay UTM (visita orgánica), estampar `utm_source=website` y deducir el canal por el referente (google/organic, chatgpt/ai, instagram/social).
3. Que el formulario/enlace pase esos campos a GHL (hidden fields o parámetros del `wa.me`/webhook).

### Paso B. Google Ads y Meta (lo pega el equipo)
- Google Ads: sufijo de URL final del Paso 5.2 de la Tarea 1.
- Meta: campo "Parámetros de URL" del anuncio: `utm_source=facebook&utm_medium=paid&utm_campaign={{campaign.name}}` (usar `instagram` si el emplazamiento es IG).

### Paso C. GHL: campo + workflow (lo arma el equipo, Claude da la spec)
1. GHL → Settings → Custom Fields → crear **"Fuente del lead"** tipo Dropdown con opciones: `Google Orgánico`, `Google Ads`, `Web`, `Facebook`, `Instagram`, `IA`, `WhatsApp`, `Referido`, `Base de datos`.
2. GHL → Automation → Workflow nuevo "Estampar fuente del lead":
   - Trigger: Contact Created (y también Form Submitted).
   - Ramas If/Else según `Attribution > utm_source`:
     - google + cpc → `Google Ads`
     - google + organic → `Google Orgánico`
     - facebook → `Facebook`
     - instagram + paid → `Instagram` / instagram + social → `Instagram`
     - website → `Web`
     - chatgpt → `IA`
     - whatsapp → `WhatsApp`
     - (sin utm) → dejar vacío para llenado manual.
   - Acción: Update Contact Field → "Fuente del lead".
3. Leads manuales/teléfono: el equipo elige la fuente a mano en el dropdown.

### Límite honesto
Los leads que escriben a WhatsApp directo sin pasar por un enlace tuyo, y los referidos de IA, siempre tendrán algo de "sin fuente". No es falla, es la naturaleza de esos canales.

---

# PROMPTS listos para copiar en otra sesión

## Prompt Tarea 1 (dominio + GA4)
```
Soy de la clínica Dra. Carolina Macareno. Quiero mover dos landings de Google Ads del dominio dracarolinamacareno.co al subdominio agenda.dracarolinamacareno.com y conectarlas a mi GA4, para que GA4/GSC/GHL por fin midan Google Ads.

Lee primero: docs/marketing/playbook-dominio-ga4-y-fuente-leads-jul2026.md (en el repo dracarolinamacareno) y sigue la TAREA 1 paso a paso.

Contexto: son funnels de GoHighLevel (location z84DlOrVXLL9zuRM5VYV). Funnel "Implantes Turismo Dental" (id YFHMC1yzqH5VP80qhQJM, hoy en .co/implantes) y "DISEÑO DE SONRISA" (id dhagtYZqbwlxR07yt5MB, hoy en .co/diseno-de-sonrisa). GA4 = G-8NTC47VWNV. Google Ads cuenta 285-456-9300, campañas "Implantologia Colombia" y "SEARCH / DISENO LANDING".

Guíame clic por clic en GHL, DNS, GA4 y Google Ads, respetando el orden para no romper la pauta en vivo. No cambies configuración de sistemas en producción por tu cuenta: en cada paso dime exactamente qué tocar y confírmame antes de que yo lo haga.
```

## Prompt Tarea 2 (fuente de cada lead)
```
Soy de la clínica Dra. Carolina Macareno. Quiero que cada lead que entra a GHL quede marcado con su canal real (Google orgánico, Google Ads, web, Facebook, Instagram, IA, WhatsApp, campañas).

Lee primero: docs/marketing/playbook-dominio-ga4-y-fuente-leads-jul2026.md (repo dracarolinamacareno) y ejecuta la TAREA 2.

Empieza por lo que está en tu cancha: el PASO A, modificar el código del sitio (repo dracarolinamacareno, Next.js 15) para que cada formulario y cada botón de WhatsApp capture los UTMs + el referente en la primera visita (first-touch) y los pase a GHL, estampando utm_source=website cuando no haya UTM. Muéstrame el diff antes de desplegar y no hagas deploy sin mi OK.

Luego dame: (B) los textos exactos de UTMs para pegar en Google Ads y Meta, y (C) la especificación del campo "Fuente del lead" y el workflow de GHL para armarlos yo. GHL location z84DlOrVXLL9zuRM5VYV. Usa la convención de UTMs del playbook.
```
