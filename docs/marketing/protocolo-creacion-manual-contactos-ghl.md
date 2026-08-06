# Protocolo: crear un contacto a mano en GHL

**Para:** Estefanía y la Dra. Carolina
**Actualizado:** 6 de agosto de 2026

Cuando alguien llama, escribe al WhatsApp personal o llega remitido, no entra por ninguna página y hay que crearlo a mano. Si se crea sin fuente y sin etiquetas, ese paciente queda invisible: no sabemos qué lo trajo y no cuenta en ningún informe.

Son dos minutos y dos preguntas.

---

## Las dos preguntas del guion

Van al principio de la conversación, antes de hablar de tratamiento.

> **1. "¿Y dónde nos encontró?"**
>
> **2. Si responde que en una inteligencia artificial: "¿en cuál, en ChatGPT o en otra?"**

La segunda pregunta parece un detalle y no lo es. Sin ella todos caen en "IA" a secas y nunca sabremos cuál está trayendo pacientes. **Grok trajo el núcleo familiar más grande del año.** Saber cuál funciona cambia dónde se invierte el contenido.

---

## Qué se llena

### 1. Campo `Fuente del Lead` (obligatorio)

Es un desplegable. **Nunca dejarlo vacío.** Si no se sabe, hay una opción para eso.

| Si dice… | Elegir |
|---|---|
| "le pregunté a ChatGPT / a la IA / a Gemini" | **Búsqueda con IA (ChatGPT, Grok, Gemini)** |
| "lo busqué en Google" | **Google Orgánico** |
| "vi su página en Google / en el mapa" | **Ficha de Google / Maps** |
| "vi un anuncio" (Instagram o Facebook) | **Meta Ads** |
| "vi un anuncio en Google" | **Google Ads** |
| "la sigo en Instagram" | **Instagram Orgánico** |
| "me la recomendó un paciente suyo" | **Referido por paciente** |
| "me la recomendó mi familiar que se trató con usted" | **Remisión familiar / acompañante** |
| "me remitió un colega / otro médico" | **Referido por colega / médico** |
| "vi su perfil en Doctoralia" | **Doctoralia** |
| "vi su perfil en Dental Departures / TourSalud" | **Plataforma de turismo dental** |
| "vine por CuraPay" | **CuraPay** |
| Escribió al WhatsApp y no se sabe de dónde salió | **WhatsApp directo — origen desconocido** |
| Ninguna de las anteriores | **Otro** |

### 2. Etiquetas

Siempre **sin espacio después de los dos puntos**. Ese es el formato que usan los flujos que sí funcionan.

**a) De dónde salió** (una sola):
`source:chatgpt` · `source:grok` · `source:gemini` · `source:ia-otra` · `source:google_organic` · `source:gbp` · `source:instagram` · `source:referido` · `source:direct`

**b) Cómo contactó** (una sola):
`lead-llamada` · `lead-whatsapp` · `lead-presencial`

> ⚠️ Estas dos son preguntas distintas y no hay que mezclarlas. "Me encontró por ChatGPT" y "me llamó por teléfono" son las dos verdad a la vez. Mezclarlas es lo que hizo que todos los leads de WhatsApp perdieran su origen real.

**c) Qué quiere** (una sola):
`consulta:implantes dentales` · `consulta:all-on-4 / all-on-6` · `consulta:diseño de sonrisa digital` · `consulta:otra consulta`

**d) Fijas** (las dos siempre):
`en-pipeline` · `tipo:lead-dental`

---

## Ejemplo completo

**Efraín Burbano**, 6 de agosto. Encontró a la Dra. preguntándole a una IA, llamó por teléfono, viene hoy a las 3 por implantes.

```
Fuente del Lead:  Búsqueda con IA (ChatGPT, Grok, Gemini)
Etiquetas:        source:chatgpt        ← cambiar según lo que responda
                  lead-llamada
                  consulta:implantes dentales
                  en-pipeline
                  tipo:lead-dental
Oportunidad:      Nuevos Pacientes → etapa Agenda Cita
```

Cuando asista, la oportunidad pasa a **Asistió a la cita**. Si inicia tratamiento, se crea la oportunidad en **Pacientes Actuales** con el valor real. Las dos no se suman nunca: la de Nuevos Pacientes es el lead, la de Pacientes Actuales es el tratamiento.

---

## Lo que NO hay que hacer

- **No dejar `Fuente del Lead` vacío.** Es la causa de que el 45% de los contactos no tenga origen y de que ningún informe de conversión signifique nada.
- **No usar las etiquetas con espacio** (`source: google ads`, `source: anuncio meta`, `source: form diseño`). Existen en el catálogo pero no están puestas en ningún contacto: son de flujos que no se están ejecutando. Tampoco hay que borrarlas, por si algún flujo las referencia.
- **No crear etiquetas nuevas sobre la marcha.** Si hace falta una, se agrega a este documento primero para que todos usen la misma.
- **No marcar como lead a un proveedor o a un vendedor.** Esos van con `no-lead`.

---

## Pendiente (no es de Estefanía)

Los flujos de pauta y de formulario deberían etiquetar solos y no lo están haciendo: las etiquetas `source: form diseño`, `source: anuncio meta` y `source: google ads` están en cero contactos. Y falta el flujo que lea la marca `[fuente: … | p: …]` del primer mensaje de WhatsApp para llenar `Fuente del Lead` automáticamente.

Mientras eso no exista, este protocolo manual es lo único que mantiene la atribución viva.
