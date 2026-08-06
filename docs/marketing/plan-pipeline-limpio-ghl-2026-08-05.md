# Pipeline limpio en GHL: por qué se ensucia y cómo se cierra

**Fecha:** 5 de agosto de 2026
**Estado:** diagnóstico verificado en vivo · plan pendiente de ejecutar
**Location GHL:** `z84DlOrVXLL9zuRM5VYV` (HubLevel)

---

## Resumen en una frase

El sistema pregunta **"¿sé que esta persona NO es un lead?"** cuando debería preguntar
**"¿sé que esta persona SÍ lo es?"**. Todo lo demás sale de ahí.

---

## Lo primero: no se borró nada

Era la hipótesis de partida y los datos la descartan. Las etiquetas guardián del 31 de
julio siguen puestas y hasta crecieron:

| Etiqueta | 31-jul-2026 | 5-ago-2026 |
|---|---|---|
| `no-lead` | 314 | **411** |
| `en-pipeline` | (no medido) | 431 |
| `stop bot` | (no medido) | 315 |

El flujo `Lead WhatsApp directo` (`f44cb347`) sigue publicado. El problema no es que se
haya roto algo: es que la solución del 31 de julio **quedó a medias** y su diseño no
podía sostenerse sola.

---

## Las tres fallas

Son distintas, tienen víctimas distintas y se arreglan distinto. Confundirlas es lo que
ha hecho que el problema parezca volver una y otra vez.

### Falla 1 · El paciente que ya existe entra como lead nuevo

**Quién lo sufre:** pacientes actuales y antiguos.

El flujo solo se salta a quien tenga la etiqueta `en-pipeline`. Y esa etiqueta se aplicó
únicamente a los **contactos internos** (laboratorios, familia, equipo), nunca a los
pacientes que ya tenían oportunidad. Ese paso estaba en el plan original como "paso
previo obligatorio" y no se completó.

| | |
|---|---|
| Contactos con oportunidad | 2.076 |
| Protegidos con `en-pipeline` | **282** |
| **Expuestos** | **1.794** |

Y mirando solo a los pacientes antiguos identificados:

| | |
|---|---|
| Contactos con `tipo:paciente-antiguo` | 549 |
| De esos, **sin** `en-pipeline` | **539** |

**Caso confirmado — Gladys Carmona:**

```
10-jul   Pacientes Actuales / Revisión (Retomar)     ← ya era paciente
05-ago   Nuevos Pacientes / Nuevo Lead               ← al confirmar su cita
```

Confirmó una cita y el sistema la registró como lead nuevo.

### Falla 2 · El paciente marcado como "no es lead" se vuelve invisible

**Quién lo sufre:** pacientes clasificados por error en el lote de julio.

El lote del 31-jul tomó los 314 contactos que tenían `stop bot` (de la clasificación del
21-22 de julio) y les puso `no-lead`. Esa clasificación **incluía pacientes reales**, no
solo laboratorios y familia.

**Caso confirmado — Héctor Forero:**

```
etiquetas: stop bot , no-lead , en-pipeline
```

Es paciente. Escribió, no tenía oportunidad, no aparecía en el pipeline, y Estefanía tuvo
que crearla a mano y dejarlo en `Revisión (Retomar)`.

**Alcance:** 10 contactos con `tipo:paciente-antiguo` están marcados `no-lead`. Es la
falla más pequeña de las tres y la más fácil de cerrar, pero la que más confunde: hace
creer que el CRM "perdió" pacientes.

### Falla 3 · Cualquier número nuevo entra como lead

**Quién lo sufre:** el pipeline entero, todos los días.

Una lista negra solo protege de la gente que ya conocías. Cada odontólogo, laboratorio,
proveedor, familiar o número personal que escriba **por primera vez** entra como lead
nuevo, porque no estaba en la foto de julio.

**Caso confirmado — el número personal de la Dra.:**

```
contacto creado    04-ago 15:19   sin ninguna etiqueta
escribe            05-ago 15:12
oportunidad creada 05-ago 15:12   Nuevos Pacientes / Nuevo Lead
```

Esto **no se arregla etiquetando más gente**. Es un agujero que no se cierra por
acumulación: siempre habrá un número que nunca escribió antes.

---

## Por qué el diseño actual no puede funcionar

El flujo decide *"¿es un lead?"* en el segundo en que llega el primer mensaje, que es
justo el momento en que no tiene ninguna información sobre esa persona. Como no puede
saberlo, asume que **sí** lo es y confía en una lista negra para las excepciones.

Una lista negra tiene dos modos de fallar y los está teniendo los dos a la vez:

- **Se queda corta** → 1.794 contactos expuestos (Falla 1) y todo número nuevo (Falla 3).
- **Se pasa** → 10 pacientes marcados como no-lead (Falla 2).

---

## La solución: invertir el criterio

Cambiar de **lista negra** a **lista blanca**. Solo crear oportunidad cuando haya
evidencia positiva de que la persona viene de un canal de captación.

**La buena noticia: esa evidencia ya existe y ya funciona.** La cuenta tiene 33 etiquetas
de fuente que otros flujos ya aplican solos:

`web_form` · `source:direct` · `source:instagram` · `source:google_ads` ·
`source:google_organic` · `source:gbp` · `source:referido` · `source: anuncio meta` ·
`source: anuncio whatsapp` · `source: form implantes` · `source: form diseño` ·
`lead de pauta` · `meta` · `source:chatgpt` · `source:grok` · `source:gemini` …

Verificado que llegan bien: `Silvio Chaverra Moreno`, `Yeimis Pahola`, `Olma Juliana
Pajoy` y `Elizeth Escorcia` traen `meta, lead de pauta`. `Juan Manuel` y `estefania
prueba A` traen `web_form, source:direct, consulta:...`.

### Regla nueva

> Crear oportunidad **solo si** el contacto tiene una etiqueta de fuente
> **y** no tiene ya `en-pipeline`.

Quien escriba sin marca de origen (el número personal de la Dra., un odontólogo, un
laboratorio, una paciente antigua confirmando cita) **no genera oportunidad**. El mensaje
queda en Conversaciones y lo atiende Estefanía. Decisión de la dueña, 5-ago-2026.

### Qué habría pasado con esta regla

Aplicada a las oportunidades por WhatsApp de los últimos días:

| Contacto | Hoy | Con la regla nueva |
|---|---|---|
| Carolina (nº personal) | entró como lead | no entra ✅ |
| Gladys Carmona | entró como lead | no entra ✅ |
| Dré | entró (luego marcada `no-lead`) | no entra ✅ |
| ⚽ | entró | no entra ✅ |
| Jc | entró | no entra ✅ |
| Leads de pauta Meta | entran | siguen entrando ✅ |
| Leads de formulario web | entran | siguen entrando ✅ |

---

## Plan de ejecución

### ⚠️ El orden importa. Paso 0 primero, sin excepción.

**Paso 0 — Pausar el flujo `Crear oportunidad` (`12c8d7d0`) antes de tocar etiquetas.**

Ese flujo se dispara con **«Etiqueta añadida»**. Si se etiquetan 1.794 contactos con el
flujo encendido, se dispara 1.794 veces y crea oportunidades fantasma en `Pacientes
Actuales` con valor $0.

No es una hipótesis: ya pasó dos veces, está documentado.

- 26-jul, Dora Zapata: al editarle etiquetas su lead se movió solo de pipeline.
- 3-ago: mover 4 leads generó 4 oportunidades fantasma 16 minutos después.

Sin este paso, la limpieza crea un desastre mayor que el que arregla.

### Paso 1 — Limpieza de datos (una sola vez)

1. Poner `en-pipeline` a los **1.794** contactos que ya tienen oportunidad y no la tienen.
   Esto solo ya corta la Falla 1.
2. Quitar `no-lead` a los **10** pacientes mal clasificados (Héctor Forero entre ellos).
   Cierra la Falla 2.
3. Probar **con un contacto primero** y confirmar que no se mueve de etapa antes de
   lanzar el lote. Es la misma precaución que se tomó en julio y sirvió.

### Paso 2 — Cambiar el criterio del flujo `Lead WhatsApp directo` (`f44cb347`)

Filtros dentro del disparador (recordar: **filtros = Y**, disparadores = O):

- `Tiene etiqueta` → la lista de fuentes de arriba (entre ellas es O)
- `No tiene etiqueta` → `en-pipeline`

GHL no deja repetir el mismo tipo de filtro, pero sí admite uno de cada tipo, así que la
combinación cabe.

**Ojo con la carrera de tiempos:** las etiquetas de fuente las pone otro flujo leyendo el
mensaje. Si los dos arrancan a la vez, el de oportunidad puede mirar antes de que la
etiqueta exista. Hay que meter una **espera de 2-5 minutos** al inicio y comprobar la
condición después.

### Paso 3 — Salomé

Requisito de la dueña: **el bot no habla con pacientes antiguos ni con quien escriba sin
marca de origen.** A esos responde Estefanía directo, porque suelen ser confirmaciones de
cita o preguntas puntuales, no consultas nuevas.

Mismo criterio de lista blanca que el pipeline.

**Hallazgo aparte que hay que atender:** Salomé 2 aparece en estado **Error** (última
actualización 23-jul) y en 5 días tocó **4 contactos únicos**, un −95,6% contra el mes
anterior, con **0 citas reservadas**. Antes de restringirle a quién habla, hay que
entender por qué casi no está hablando.

### Paso 4 — Reverificar

- Volver a contar contactos con oportunidad y sin `en-pipeline`: debe dar **0**.
- Volver a contar pacientes con `no-lead`: debe dar **0**.
- Escribir desde un número personal nuevo y confirmar que **no** crea oportunidad.
- Escribir desde un enlace de la web y confirmar que **sí** la crea.
- Revisar el pipeline ~20 min después de cualquier cambio en lote, por las fantasmas.

---

---

## Ampliación del 5-ago (tarde): la lista de pacientes a re-etiquetar

Se pidió revisar los pacientes antiguos para poder medirlos bien en una auditoría. Al
medirlo salió algo distinto de lo esperado, y mejor.

### Los 549 con etiqueta `tipo:paciente-antiguo` están bien

**Los 549 tienen oportunidad. Ninguno falta.** Ese grupo no hay que tocarlo.

Entonces Jenny, Héctor y Mercedes **no llevan esa etiqueta**. El grupo perdido es otro.

### El grupo real: 146 contactos marcados `no-lead` y sin oportunidad

Todos comparten el mismo perfil (`stop bot, no-lead, en-pipeline`, sin oportunidad) y
casi todos vienen de tres importaciones. Pero las tres **no son iguales**:

| Importación | Cuántos | Qué son | ¿Bien marcados? |
|---|---|---|---|
| 9-ene | 23 | proveedores y laboratorios: `abc dental`, `dentos`, `dio implant`, `straumman`, `prisma`, `doctoralia`, `sistecredito` | ✅ sí |
| 9-feb | 79 | casi todos `dr`/`dra`: colegas y remitentes | ✅ sí |
| **8-ene** | **34** | **nombres de persona normales** | ❌ **aquí se colaron** |

Clasificando los 146 por tipo de nombre:

| Tipo | Cuántos | Acción |
|---|---|---|
| Doctores (`dr`/`dra`) | 86 | dejar como están |
| Empresas y laboratorios | 17 | dejar como están |
| **Personas** | **43** | **revisar uno por uno** |

### Los 43 que necesitan tu ojo

Son los únicos donde puede haber pacientes. Nadie más que la dueña puede decidir esto:
un nombre suelto no dice si es paciente, conocido o proveedor sin membrete.

```
8-ene   alex guzman ..7972          betsy pareja ..9862         boris mercado ..8410
        carolina rodriguez ..6741   claudio rosa ..9547         diana román ..3304
        dominic cantore ..0662      isis murillo ..6447          ivan de hoyos ..7475
        jessica sulbaran ..0107     jorge restremo ..9837        jose arroyave ..3907
        juan olmos ..2660           laura correa ..9714          leydi marin ..4225
        luis madrid ..1988          luis perez ..8797            maria alvarez ..3139
        maria perez ..6412          mercedes wandurraga ..0047   monica arenas ..1257
        monica villegas ..1471      nathaly arenas ..4065        olga morales ..2129
        oscar cantore ..0660        sara gonzalez ..1929         tatiana guedez ..1064
        tatiana zamora ..0084       yamile urrea ..5968          yenny jimenez ..6472
        yorleida mieles ..1738      yuliana lopera ..9492
9-ene   heidy mendoza ..4716        ivan padilla ..2097          jesus naranjo ..3785
        juliana jaimes ..2865       luis cortes ..0641
otros   lili ..1603                 epifanio ..3530              drogueria copias ..0795
        novio jesus eladio naranjo ..6212
        raúl torres · medical departures ..8376
        mateo jiménez | skool
```

**Ojo con `oscar cantore` y `dominic cantore`.** Oscar Cantore es el origen de la cadena
de remisión que terminó en Minerva (Oscar Cantore → Carlos Morales → Minerva, ~$90M). Que
esté marcado `no-lead` puede ser correcto si es remitente y no paciente, pero conviene
decidirlo a conciencia y no por descarte. Ver el canal de remisión.

### ✅ Revisado y decidido por la dueña (5-ago-2026)

**Los 32 del bloque del 8-ene son pacientes.** Todos van igual que Oscar Cantore:
`Pacientes Actuales` / etapa `Revisión (Retomar)`.

> alex guzman · betsy pareja · boris mercado · carolina rodriguez · claudio rosa ·
> diana román · dominic cantore · isis murillo · ivan de hoyos · jessica sulbaran ·
> jorge restremo · jose arroyave · juan olmos · laura correa · leydi marin · luis madrid ·
> luis perez · maria alvarez · maria perez · mercedes wandurraga · monica arenas ·
> monica villegas · nathaly arenas · olga morales · oscar cantore · sara gonzalez ·
> tatiana guedez · tatiana zamora · yamile urrea · yenny jimenez · yorleida mieles ·
> yuliana lopera

**Los 11 restantes son personales y se quedan como están** (ya marcados bien):

> heidy mendoza · ivan padilla · jesus naranjo · juliana jaimes · luis cortes · lili ·
> epifanio · drogueria copias · novio jesus eladio naranjo · raúl torres (medical
> departures) · mateo jiménez | skool

El criterio del correo acertó: los 32 con ficha completa eran pacientes, los 11 sin correo
no lo eran.

### Qué hacer con cada uno

- **Es paciente** → quitar `no-lead`, dejar `en-pipeline`, y que Estefanía le abra
  oportunidad en `Pacientes Actuales` en la etapa que corresponda (como hizo con Héctor
  Forero, que quedó en `Revisión (Retomar)`).
- **No es paciente** → dejarlo como está. Ya está bien.

### La teoría del 7 de junio: no se pudo confirmar

Se buscó rastro de esa fecha en el registro completo de Mercedes Wandurraga (todos sus
campos, campos personalizados y notas) y **no aparece nada del 7 de junio**. Su contacto
se creó el 8-ene y se actualizó por última vez el 4-ago.

La API no deja ver oportunidades borradas, así que por ahí no se puede probar ni descartar.
Si esa observación se ve en alguna pantalla concreta del CRM, hay que mirarla ahí: sabiendo
dónde está, se puede reconstruir qué pasó.

Dato suelto que puede tener que ver: **1.702 de las 2.228 oportunidades se crearon en
julio de 2026**. Hubo una creación masiva ese mes. Si algo se borró antes, julio pudo ser
la reconstrucción, y estos 146 los que se quedaron fuera.

---

## Lo que no se pudo verificar

- **La configuración interna de los flujos.** La API de HubLevel no expone la definición
  (`/workflows/{id}` no responde) y la sección de flujos no se deja automatizar desde el
  navegador. Los disparadores y filtros hay que leerlos abriendo el flujo en pantalla.
- **Si Salomé respeta hoy la etiqueta `stop bot`.** Solo se pudo ver que está en Error y
  con actividad casi nula.

---

---

## ✅ EJECUTADO el 5-ago-2026: los 32 pacientes recuperados

**Falla 2 cerrada.** Los 32 del bloque del 8-ene están en el pipeline.

Cada uno quedó con **1 oportunidad** en `Pacientes Actuales / Revisión (Retomar)` ($0,
abierta), **sin** `no-lead` y **con** `tipo:paciente-antiguo`. Conserva `stop bot`, que es
lo correcto: son pacientes antiguos y les responde Estefanía, no Salomé.

| | Antes | Después |
|---|---|---|
| Oportunidades totales | 2.228 | 2.261 |
| `no-lead` | 411 | 379 |
| `tipo:paciente-antiguo` | 549 | 581 |
| Duplicadas generadas | — | **0** |

### El flujo `Crear oportunidad` NO hubo que pausarlo

Las capturas de la dueña permitieron leer los 9 disparadores, que la API no expone:

```
consulta…  ·  whatsapp  ·  Formulario Enviado  ·  web_form  ·  lead de…
source:i…  ·  consulta…  ·  source:g…  ·  source:u…
```

**Todos son «Etiqueta añadida». Ninguno es «etiqueta quitada»**, y ninguno coincide con
`no-lead` ni con `tipo:paciente-antiguo`. Por eso las tres operaciones eran seguras:

1. Crear oportunidad por API → no añade etiqueta → no dispara nada
2. Quitar `no-lead` → no es una adición → no dispara nada
3. Añadir `tipo:paciente-antiguo` → no coincide con ningún disparador

Corrección al plan original: **pausar el flujo habría salido más caro que el riesgo**, porque
es la entrada de todos los leads de formulario y de pauta. Se ejecutó sin pausarlo y se
confirmó después que no se disparó ni una vez.

⚠️ **`lead-whatsapp` NO se les puede poner** a estos contactos: el disparador
`Etiqueta añadida includes "whatsapp"` saltaría.

### Cabo suelto menor

Quedan **10 contactos con `tipo:paciente-antiguo` y `no-lead` a la vez**. No son urgentes
(sí tienen oportunidad, no están invisibles), pero la combinación es contradictoria y
conviene revisarla.

---

## ✅ EJECUTADO el 5-ago-2026: Falla 1 cerrada

Se aplicó `en-pipeline` a los **1.793** contactos que tenían oportunidad y no la tenían.

| Verificación | Resultado |
|---|---|
| Contactos con oportunidad | 2.108 |
| **Sin `en-pipeline`** | **0** |
| Oportunidades totales | 2.259 (sin cambio) |
| Fantasmas creadas | **0** |

**Decisión de la dueña sobre los abandonados/perdidos:** también se protegen. Un lead
abandonado que vuelve a escribir **no es un lead nuevo, es el mismo reactivado**. No debe
generar oportunidad automática: si se comunica otra vez, **Estefanía se la abre a mano**.
Misma regla que para los pacientes.

### Qué NO significa `en-pipeline`

No significa "es paciente". Significa **"este contacto ya tiene una oportunidad, no le
crees otra"**. De los 1.793 protegidos, solo 539 eran pacientes antiguos; 1.061 eran leads
de pauta. Gladys Carmona lo ilustra: es paciente antigua y sus etiquetas nunca lo dijeron
(solo tenía `en-pipeline` y `lead-whatsapp`).

### Lección operativa: la sesión de HubLevel caduca a la hora

El primer lote se cortó a mitad con `401 Invalid JWT` tras ~936 contactos. **No hubo daño**:
un 401 se rechaza antes de tocar la base, así que los intentos fallidos no escriben nada, y
cada contacto es una sola operación (o se aplica entera o no se aplica).

Para lotes largos:
- Ejecutar como tarea de fondo dentro de la página (sobrevive a cortes de la extensión),
  no con `await` largo: el navegador corta la respuesta a los 45 s.
- **Recalcular la lista desde cero al reanudar** en vez de continuar por un contador. Es
  autocorregible: coge exactamente a quien falte, sin repetir ni saltarse a nadie.
- Cortar el bucle al primer 401 en vez de seguir fallando en vano.

## Registro de cambios

- **5-ago-2026** — Documento creado. Diagnóstico verificado en vivo contra la API de GHL:
  2.228 oportunidades, 3.996 contactos, conteos de etiquetas y casos Gladys Carmona,
  Héctor Forero y número personal de la Dra. Plan sin ejecutar.
- **5-ago-2026 (noche)** — EJECUTADA la Falla 1: `en-pipeline` a los 1.793. Verificado 0
  contactos con oportunidad sin proteger, 0 fantasmas. Decidido que los abandonados y
  perdidos también se protegen (los reactiva Estefanía a mano). **Queda abierta solo la
  Falla 3** (criterio de lista negra en el flujo de WhatsApp), más el bot y dos cabos menores.
- **5-ago-2026 (17:50)** — EJECUTADO el rescate de los 32 pacientes. Falla 2 cerrada y
  verificada: 0 duplicadas, 0 fantasmas, el flujo `Crear oportunidad` no se disparó.
  Documentados los 9 disparadores del flujo, leídos de las capturas de la dueña.
  **Siguen abiertas la Falla 1 (1.794 sin `en-pipeline`) y la Falla 3 (criterio de lista
  negra).**
- **5-ago-2026 (tarde)** — Añadida la sección de re-etiquetado. Corregido un supuesto: los
  549 con `tipo:paciente-antiguo` SÍ tienen oportunidad, el grupo perdido es otro. Aislados
  146 contactos `no-lead` sin oportunidad y separados en 86 doctores + 17 empresas + **43
  personas a revisar**. Jenny confirmada por la dueña como `yenny jimenez` (con Y). La
  teoría del 7 de junio no se pudo confirmar por API.
