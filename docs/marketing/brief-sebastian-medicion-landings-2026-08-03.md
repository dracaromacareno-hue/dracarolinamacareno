# Brief para Sebastián — medición de las landings de pauta

> **Fecha:** 3 de agosto de 2026
> **Verificado en vivo** descargando el HTML real que sirven `dracarolinamacareno.com/diseno-de-sonrisa` y `/implantes`.
> **Objetivo:** que las landings midan (1) cuando alguien entra y (2) cuando alguien envía el formulario, para que Google y Meta puedan optimizar y para que sepamos de dónde viene cada lead.

---

## 1. Lo que Sebastián YA arregló (verificado hoy, no volver a pedirlo)

| Pieza | Estado 30-jul | Estado hoy |
|---|---|---|
| GA4 en `/diseno-de-sonrisa` | ❌ ausente | ✅ **`G-8NTC47VWNV` instalado** |
| GA4 en `/implantes` | ❌ ausente | ✅ **instalado** |
| Tag de Google Ads duplicado en `/implantes` | ⚠️ 2 veces | ✅ **una sola vez** (`AW-17492725815`) |
| Píxel de Meta | ✅ | ✅ `36066925139564924` |
| Botón flotante de WhatsApp en `/diseno-de-sonrisa` | ❌ no había | ✅ **agregado** |

**Falta reconocerlo:** el bloque A del reporte anterior está en buena parte cerrado.

---

## 2. Cómo está montada la landing (contexto para no perder tiempo)

No es una página del sitio en Next.js. Es un **proxy en el servidor**: la ruta `app/diseno-de-sonrisa/route.ts` descarga el HTML del embudo de GHL (`sites.leadconnectorhq.com/preview/oS37NiFZQpFc66t5Ts4L`) y lo sirve bajo el dominio `.com`.

**Esto es importante porque abre dos vías para inyectar código:** dentro del embudo en GHL, o en el `route.ts` del repo antes de servir el HTML. La segunda es más fácil de versionar y no depende de que nadie toque GHL.

El formulario vive en un iframe:

```
https://api.leadconnectorhq.com/widget/form/a5YKAMOFyAjYl35B2huR
```

cargado con `https://link.msgsndr.com/js/form_embed.js`.

---

## 3. Lo que falta — 3 puntos concretos

### 3.1 · No existe NINGÚN evento de conversión

Se buscó en el HTML servido y **no hay un solo `gtag('event', ...)`**. Solo está el pageview.

Consecuencia: la conversión de Google Ads sigue dependiendo de que la ventana cargue `/gracias-implantes`, y eso **no ocurre**, porque el envío del formulario y su redirect pasan **dentro del iframe**. El recuadro navega, la ventana no. Google no ve nada.

Meta sí lo ve porque su píxel corre dentro del iframe. Por eso en la misma página Meta registró 33 eventos y Google 0.

**Lo que hay que hacer:** escuchar el mensaje que el iframe le manda a la página cuando el formulario se envía, y desde ahí disparar todo.

```js
window.addEventListener('message', (e) => {
  if (!/leadconnectorhq\.com|msgsndr\.com/.test(e.origin)) return;
  const tipo = (e.data && (e.data.type || e.data.event)) || '';
  if (!/form.*submit|submit.*success/i.test(String(tipo))) return;

  // 1) GA4
  gtag('event', 'generate_lead', {
    form_id: 'a5YKAMOFyAjYl35B2huR',
    landing: location.pathname
  });

  // 2) Google Ads: NO va evento. Ver la nota de restricción de salud abajo.

  // 3) Meta
  if (window.fbq) fbq('track', 'Lead');

  // 4) Que la VENTANA navegue a la página de gracias
  window.top.location.href = '/gracias-diseno-de-sonrisa';
});
```

**Nota para Sebastián:** el nombre exacto del mensaje que emite `form_embed.js` hay que confirmarlo en vivo con un `console.log(e.data)` antes de filtrar. Por eso arriba el filtro va por expresión regular y no por igualdad exacta.

### ⚠️ La conversión de Google Ads se queda POR URL — restricción de salud

**La cuenta está en una categoría restringida de Google Ads (salud), así que la medición tiene que ir por carga de página de gracias, no por evento.** Esto anula lo que se planteó en una versión anterior de este brief.

**Y no es un problema, porque el arreglo es el mismo.** Lo único que faltaba para que la conversión por URL funcionara era **sacar la navegación del iframe**. Cuando la ventana carga de verdad `/gracias-…`, la conversión que ya está configurada dispara sola, con la cookie `_gcl_aw` intacta porque landing y gracias viven en el mismo dominio.

O sea: **no hay que crear ninguna conversión nueva ni tocar Google Ads.** Hay que hacer que la ventana navegue, que es exactamente lo que hace el punto 7.

Los eventos de GA4 y Meta sí se mandan: sirven para analítica y para que Meta optimice, y no son la conversión que reporta Google Ads.

### 3.2 · El botón de WhatsApp no lleva la marca de atribución

El botón que se agregó apunta a:

```
https://wa.me/573163975232?text=Hola, quiero agendar mi valoración de Diseño de Sonrisa
```

**Le falta la marca `[fuente: … | p: …]`.** Es exactamente el fallo silencioso que documenta el `CLAUDE.md` del repo: el link funciona, el lead llega, y nadie nota que entró sin fuente.

En el sitio en Next.js esto lo resuelve el componente `WhatsAppLink` con `appendSourceTag` (`lib/source-tracking.ts`). **Pero la landing es HTML proxeado de GHL, así que el componente no aplica.** Hay que replicar la lógica ahí: leer los UTM de la URL y pegarle la marca al texto del mensaje antes de abrir WhatsApp.

**Por qué importa, con números:** de 361 contactos con oportunidad, **167 no tienen ningún dato de fuente**. Un botón de WhatsApp sin marca en las páginas que reciben la plata de la pauta es una de las causas más probables de ese agujero.

### 3.3 · `/implantes` sigue sin botón de WhatsApp

Se verificó: no hay ni un `wa.me` en el HTML. Solo el formulario.

En un negocio WhatsApp primero, y con audiencia mayoritariamente mayor y de la diáspora, obligar a llenar formulario deja gente por fuera. Replicar ahí el botón flotante de diseño, ya con la marca de atribución.

---

## 4. Cómo se verifica que quedó bien

| Punto | Prueba |
|---|---|
| Entrada medida | GA4 → Tiempo real: entrar a `/diseno-de-sonrisa` y verse aparecer |
| Envío medido | Llenar el formulario de prueba y ver `generate_lead` en GA4 Tiempo real |
| Google Ads | La conversión pasa de 0 a ≥1 en 24-48 h, en el informe de conversiones |
| Meta | El evento `Lead` sube en el Administrador de eventos |
| Página de gracias | Tras enviar, **la barra de direcciones del navegador** cambia a `/gracias-…`. Si solo cambia el recuadro, no quedó |
| WhatsApp con marca | Hacer clic en el botón y ver que el mensaje prellenado incluye `[fuente: … \| p: …]` |
| Lead en el CRM | El contacto aparece en GHL con `UTM Source` lleno, no vacío |

---

## 5. Una aclaración que conviene hacer en la reunión

**Los leads del formulario SÍ están llegando al CRM.** El formulario es de GHL, así que cada envío crea el contacto. Hay 71 envíos registrados.

**Lo que no llega es la medición.** Google no cuenta la conversión, y buena parte de los contactos entra sin fuente. Son dos problemas distintos y conviene no mezclarlos: no estamos perdiendo leads en el formulario, estamos perdiendo la capacidad de saber cuáles funcionaron y de que Google optimice hacia ellos.

---

## 6. Orden sugerido

1. **Evento de conversión por postMessage** (3.1). Es lo que desbloquea a Google Ads. Máximo impacto.
2. **Marca de atribución en el botón de WhatsApp** (3.2). Barato y arregla el agujero de los 167 sin fuente.
3. **Botón de WhatsApp en `/implantes`** (3.3).
4. Cambiar la conversión de Google Ads de «carga de página» a «evento».

---

---

## 7. ✅ IMPLEMENTADO — 3-ago-2026

Los puntos 3.1 y 3.2 **ya están resueltos en el repo**. No hay que pedírselos a Sebastián: hay que revisarlos y desplegarlos.

**Archivo nuevo:** `lib/landing-tracking.ts`
**Rutas modificadas:** `app/diseno-de-sonrisa/route.ts` · `app/implantes/route.ts`

Como las landings son HTML de GHL servido por un proxy, el script se **inyecta antes de `</body>`** desde el route handler. No hay que tocar nada dentro de GHL.

### Qué hace

1. **Detecta la fuente** en JS plano, replicando `lib/source-tracking.ts`: `gclid` → Google Ads, `fbclid` → Meta Ads, UTMs, y referrer con las IA evaluadas **antes** que los buscadores (Gemini y Copilot viven en dominios de Google y Microsoft).
2. **Reescribe los enlaces de WhatsApp** para que lleven la marca. Revisa al cargar, al hacer clic, y en pasadas cada 500 ms durante 10 s, porque GHL monta el botón flotante tarde.
3. **Escucha el `postMessage` del iframe del formulario** y al detectar el envío dispara `generate_lead` en GA4, `Lead` en Meta, y **navega la ventana principal** a la página de gracias, conservando la query original (`gclid`, `utm_*`).

**No dispara ninguna conversión por evento de Google Ads**, a propósito: por la restricción de salud la medición va por URL. La conversión la cuenta la propia página de gracias al cargarse en la ventana.

### Probado en local, no en teoría

| Prueba | Resultado |
|---|---|
| Script inyectado en las dos landings | ✅ |
| Entrada con `?utm_source=fb&utm_medium=paid` | ✅ detecta `meta_ads` |
| Mensaje de WhatsApp resultante | ✅ `Hola, 🌐meta quiero agendar mi valoración de Diseño de Sonrisa [fuente: Meta Ads \| p: diseno-de-sonrisa]` |
| Envío de formulario simulado | ✅ dispara `generate_lead` (con la fuente dentro) y `fbq('track','Lead')` |
| **La ventana navega a la página de gracias** | ✅ termina en `/gracias-diseno-de-sonrisa`, no solo el recuadro |
| El `gclid` sobrevive hasta la página de gracias | ✅ `/gracias-diseno-de-sonrisa?gclid=TESTGCLID123&utm_source=google&utm_medium=cpc` |
| Entrada con `?gclid=…` | ✅ detecta `google_ads` → `[fuente: Google Ads \| p: diseno-de-sonrisa]` |
| **No se dispara ninguna conversión por evento de Ads** | ✅ verificado, cero `gtag('event','conversion')` |
| `/gracias-diseno-de-sonrisa` y `/gracias-implantes` responden | ✅ las dos dan 200 |
| Typecheck y consola | ✅ sin errores |

### Un fallo que apareció al probar, y que vale la pena conocer

La primera versión escribía `[fuente: undefined]`. Causa: el script comparte la clave `dcm_source_v1` de sessionStorage con el sitio en React, que guarda las etiquetas como `labelEs` / `labelEn`, no como `label`. Si el visitante pasaba antes por una página del sitio, lo cacheado venía en el otro formato.

Ya está normalizado en las dos direcciones. **Es la clase de error que no se ve en revisión de código y sí en una prueba real**, y es justo el fallo silencioso contra el que advierte el `CLAUDE.md`.

### Lo que todavía necesita a Sebastián

1. **Confirmar el nombre real del mensaje del iframe.** El filtro es por expresión regular (`submit|submitted|form_complete|success`) porque GHL no lo documenta y ha cambiado entre versiones. Al enviar un formulario de verdad, la consola imprime `[landing] mensaje del iframe:` con el nombre exacto. Si no aparece nada, hay que ajustar el filtro.
2. **Confirmar que la conversión por URL de Google Ads apunta a las páginas de gracias correctas** y que sigue activa. **No hay que crear ninguna conversión nueva ni cambiarla a evento**: por la restricción de salud todo va por URL, y el script ya hace que la ventana llegue ahí.
3. **Agregar el botón de WhatsApp a `/implantes`** (punto 3.3). Verificado de nuevo hoy: sigue sin un solo `wa.me`. El script ya está listo para marcarlo en cuanto exista.
4. **Revisar que las páginas de gracias no sean alcanzables por tráfico directo.** `/gracias-implantes` ya va con `noindex`. Si alguien llega sin haber enviado el formulario, infla la conversión.

> **Sin desplegar.** Los cambios están en el working tree, sin commit. Falta revisión de Sebastián y `git push` para que Vercel los publique.

---

## Registro de cambios

**3-ago-2026 · versión inicial.** Verificado descargando el HTML real de las dos landings. Se confirmó que GA4, el tag único de Ads y el botón flotante ya están puestos, y que faltan los eventos de conversión y la marca de atribución en WhatsApp.

**3-ago-2026 · implementación.** Se resolvieron los puntos 3.1 y 3.2 con `lib/landing-tracking.ts` inyectado desde los route handlers. Probado en local: detección de fuente, marca en WhatsApp, eventos de GA4 y Meta, y navegación real de la ventana a la página de gracias.

**3-ago-2026 · corrección de la Dra.: todo por URL.** La cuenta está en categoría restringida de Google Ads (salud), así que la conversión **no puede ir por evento**. Se quitó del script el `gtag('event','conversion')` y las variables de entorno de etiqueta. La medición se apoya en la carga de la página de gracias, y el script conserva la query original (`gclid`, `utm_*`) al navegar para que la atribución llegue intacta. Verificado: `/gracias-diseno-de-sonrisa?gclid=TESTGCLID123&…`. Queda pendiente confirmar el nombre del mensaje del iframe y el botón de WhatsApp en `/implantes`.
