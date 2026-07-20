# Arreglo: la pregunta más repetida del negocio ("¿dónde están ubicados?")
**Fecha:** 19 de julio de 2026
**Estado:** textos listos para pegar. Nada ejecutado, todo requiere aprobación de la dueña.

---

## 1. El diagnóstico en una línea

374 pacientes preguntaron dónde queda la clínica. **El 100% llegó por Meta** (188 Paid Social + 186 Social media, con `adId` y `ctwaClid` de click-to-WhatsApp). **Cero llegaron por Google o por el perfil de Google Business.**

El GBP tiene la ubicación exacta y los horarios correctos. Da igual: **estos leads nunca lo ven.** Van del anuncio directo a WhatsApp.

Y ni el anuncio ni el mensaje de bienvenida les dicen dónde queda la clínica.

**Resultado medible:** 118 de 374 (32%) preguntan la ubicación en su PRIMER mensaje, antes de cualquier otra cosa.

---

## 2. Los cuatro fallos concretos

| # | Fallo | Evidencia |
|---|---|---|
| F1 | El mensaje de bienvenida no dice dirección, ciudad ni horarios | Texto literal actual, ver abajo |
| F2 | Los anuncios dicen "Medellín - Colombia" solo en el titular, no en el texto principal | 4 anuncios activos; el de "Publicacion IG" no la dice en ningún campo |
| F3 | No existe un snippet con la dirección | 78 redacciones distintas para 86 respuestas. 145 de 347 respuestas ni siquiera contienen una dirección |
| F4 | El anuncio "Cita Virtual de Valoración" confunde | Genera 46 preguntas de ubicación por sí solo: la palabra "virtual" hace dudar de si hay sede física |

**Mensaje de bienvenida actual (textual):**
> *¡Gracias por aplicar!* 😊
> Ya recibimos tu información y estamos revisando tu caso.
> Si quieres avanzar más rápido, puedes escribirnos aquí 👇 "Hablar con un consultor"
> Así una de nuestras asistentes te orientará directamente.

Sin dirección, sin ciudad, sin horarios, sin mapa.

---

## 3. 🚩 Hallazgo aparte y urgente: leads pagados que se pierden

De las conversaciones analizadas:
- **27 nunca recibieron respuesta.** Ninguna.
- **18 tardaron más de 24 horas**, o sea que cayeron en el muro de las 24h de WhatsApp y ya requieren plantilla aprobada para reactivarse.

Son leads por los que ya se pagó a Meta. Esto no es un problema de contenido, es de operación, y cuesta más que todo lo demás junto.

---

## 4. Textos listos para pegar

### 4.1 Mensaje de bienvenida corregido

> *¡Gracias por escribirnos!* 😊
> Somos la consulta de la Dra. Carolina Macareno, rehabilitación oral en **Medellín, Colombia**.
>
> 📍 Cra. 25 #1A SUR-155, Consultorio 1353
> Edificio Platinum Superior, El Poblado
> 🕐 [HORARIO A CONFIRMAR POR LA DUEÑA]
>
> Ya recibimos tu información y estamos revisando tu caso.
> Si quieres avanzar más rápido, escríbenos aquí 👇 "Hablar con un consultor"

⚠️ **Los horarios quedan en blanco a propósito.** No los inventé. Confírmalos y se completan.

### 4.2 Snippet de dirección para GHL (para dejar de improvisar 78 redacciones)

Nombre sugerido: `direccion-clinica`

> 📍 Estamos en Medellín, Colombia
> Cra. 25 #1A SUR-155, Consultorio 1353
> Edificio Platinum Superior, El Poblado
> 🕐 [HORARIO A CONFIRMAR]
> 🗺️ [ENLACE DE GOOGLE MAPS A CONFIRMAR]

La dirección ya está cargada correctamente en la location de GHL y no se está usando. El snippet solo la pone al alcance de un atajo.

### 4.3 Regla de copy para anuncios

La ciudad va en el **texto principal**, no solo en el titular. Ejemplo de apertura:

> Rehabilitación oral en **Medellín, Colombia**. [resto del mensaje]

Y al promocionar una publicación de Instagram: **reescribir el copy para pauta**, no promocionarla tal cual. Ese es el origen de los 26 de 84 anuncios (31%) que nunca nombran la ciudad.

### 4.4 Anuncio "Cita Virtual de Valoración"

Aclarar que la valoración virtual es el primer paso y que **el tratamiento es presencial en Medellín**. Hoy la palabra "virtual" hace pensar que no hay sede física, y genera 46 preguntas de ubicación por sí sola.

---

## 5. Orden sugerido

| # | Acción | Esfuerzo | Impacto |
|---|---|---|---|
| 1 | Confirmar horarios y enlace de Maps | 2 min (dueña) | Desbloquea todo lo demás |
| 2 | Mensaje de bienvenida con dirección | 10 min | Ataca el 32% que pregunta de entrada |
| 3 | Snippet `direccion-clinica` en GHL | 10 min | Consistencia en las 78 redacciones |
| 4 | Revisar los 27 leads sin respuesta y los 18 de +24h | 1 h | Dinero ya pagado, recuperable |
| 5 | Ciudad en el texto principal de los 4 anuncios activos | 20 min | Corta el problema en la fuente |
| 6 | Aclarar el anuncio "Cita Virtual" | 15 min | -46 preguntas |

---

## 6. Notas sueltas del diagnóstico

- Hay **dos identidades de asistente** conviviendo, "Salomé" y "Sofí". Conviene unificar.
- Se detectó al menos **un bot de terceros** conversando con Salomé.
- No se pudo verificar el perfil de WhatsApp Business (los endpoints dan 404); eso vive en Meta Business Manager.
- Solo existen 2 fragmentos en GHL, los de ejemplo en inglés, uno con un merge tag roto (`{{locaiton.website}}`, con la errata incluida).

---

**Nada de esto fue ejecutado.** Los dos diagnósticos fueron de solo lectura: no se modificó ninguna campaña, workflow ni plantilla, y no se envió ningún mensaje.
