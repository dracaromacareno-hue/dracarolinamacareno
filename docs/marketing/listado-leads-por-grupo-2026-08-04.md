# Listado completo de leads por grupo — para envío masivo

> **Fecha:** 4 de agosto de 2026
> **Fuente:** lectura directa del CRM GHL/HubLevel (`z84DlOrVXLL9zuRM5VYV`) vía API.
> **Complementa** a `plan-recuperacion-leads-2026-08-03.md`. Este documento es la lista operativa; el otro es el diagnóstico.

---

## Cómo se verificó (y qué se corrigió)

El primer análisis usaba una métrica equivocada: contaba mensajes de salida **con `userId`** para saber si un humano había respondido. **Ese campo viene vacío siempre**, así que la métrica no medía nada y produjo la afirmación falsa de que a varios pacientes «nunca se les respondió». La Dra. lo detectó con el caso de Nilsa Orozco, que tiene **15 mensajes de salida**.

**Criterio correcto, aplicado en este listado:**

1. Se leen **todas** las conversaciones de cada contacto, no solo la primera.
2. Se filtran los mensajes de sistema (`Opportunity updated`, `Opportunity status changed`, `Message type is currently not supported`).
3. La señal es **la dirección del último mensaje real** y el conteo de entrantes/salientes.
4. Se toma **una sola oportunidad por contacto: la más avanzada**, para que nadie aparezca dos veces.
5. Se excluyen los 23 que ya son pacientes en tratamiento y 3 registros de prueba.

**Universo final: 348 contactos.**

| Grupo | Personas | Definición |
|---|---|---|
| **G1** Asistieron y no arrancaron | **33** | Llegaron a la consulta, hubo conversación, no iniciaron |
| **G2** Agendaron y no asistieron | **68** | Pidieron cita, hubo conversación, no llegaron |
| **G3** Prospectos que no agendaron | **81** | Hablaron, se les respondió, nunca agendaron |
| **G4** Leads nuevos sin avanzar | **86** | Primer contacto atendido, no pasaron de ahí |
| **G5** Nunca respondieron | **58** | Se les escribió y jamás contestaron nada |
| **G6** Nunca contactados | **7** | Cero mensajes de salida. Nadie les escribió |
| **GP** Perdidos | **15** | Marcados `Perdido` en el CRM |

**Etiquetas visuales en las tablas:** 🌎 del exterior · 👤 paciente antiguo · ⛔ oportunidad abandonada

**Cruces que importan:** 30 son del exterior (20 de ellos en G3) · 15 son pacientes antiguos metidos en el embudo de adquisición · 193 tienen la oportunidad en estado `abandonado`.

**Aparte del embudo:** 265 en `Pacientes Actuales / Revisión (Retomar)` (control y retomar) y 1.534 en `Base Antigua - Reactivación`. Se tratan al final.

---

## ⚠️ Antes de enviar nada: la ventana de 24 horas de WhatsApp

**Casi todos estos contactos llevan semanas o meses sin escribir.** WhatsApp solo permite mensajes libres dentro de las 24 horas siguientes al último mensaje del paciente. Fuera de esa ventana **solo entregan las plantillas aprobadas (HSM)**.

Esto ya pasó antes y fue una de las causas del no-show: se enviaron mensajes libres que nunca llegaron, y nadie se enteró porque el CRM los muestra como enviados.

**Entonces:**

1. Los mensajes de este documento hay que **registrarlos como plantillas y hacerlas aprobar** antes de la difusión.
2. Una vez el paciente responde, se abre la ventana de 24 h y ahí sí se puede escribir libre.
3. Para los que llevan meses, la plantilla debe ser corta y de reactivación, no un discurso de venta.

---

## Cómo montar los grupos y la difusión en GHL

### Paso 1 · Etiquetar en lote

`Contactos → Listas inteligentes → Filtros avanzados`, y filtrar por **Oportunidad: etapa** y **Estado**. Con el resultado en pantalla, seleccionar todo y usar `Acciones en lote → Añadir etiqueta`.

Etiquetas sugeridas, una por grupo:

```
g1-asistio-sin-iniciar
g2-no-show
g3-prospecto-frio
g4-lead-sin-avanzar
g5-nunca-respondio
g6-sin-contactar
```

Guardar cada filtro como **Lista inteligente** para no repetir el trabajo cada mes.

### Paso 2 · El flujo de envío

`Automatización → Crear flujo`:

- **Disparador:** `Etiqueta añadida` = `g1-asistio-sin-iniciar` (uno por grupo).
- **Acción 1:** `Enviar WhatsApp` con la plantilla aprobada del grupo.
- **Acción 2:** `Espera` de 3 días.
- **Acción 3:** `Si/Entonces` → si respondió, salir del flujo y notificar a Estefanía. Si no, segundo toque.

⚠️ **Reinscripción desactivada.** Si queda activa, cualquier reetiquetado vuelve a mandar el mensaje. Ya hay un flujo en la cuenta con ese problema.

### Paso 3 · Ritmo de envío

**20 a 30 contactos por día, no los 348 de una.**

No es por límites de la plataforma: es que si entran 200 respuestas el mismo día no hay quién las atienda, y **una respuesta sin contestar es peor que no haber escrito nunca**. Ese es exactamente el problema que este plan busca corregir.

Orden sugerido: **G1 → G2 → G3 → GP → G4 → G5 → G6**. G1 y G2 los trabaja la Dra. o Estefanía; G4 y G5 pueden ir con Salomé.

### Paso 4 · Registrar el resultado el mismo día

Cada respuesta mueve la oportunidad de etapa. Si esto no se hace, en dos semanas volvemos a no saber quién quedó en qué, que es como se llegó hasta aquí.

---

## G1 · Asistieron a la cita y no arrancaron (33)

**Situación:** vinieron al consultorio, hablaron con la Dra., varios tienen plan o presupuesto. No arrancaron.

**Estrategia:** no volver a mandar el plan, **pedir la decisión con fecha**. Es el grupo de mayor valor y el único que justifica mensaje individual de la Dra.

**Mensaje base:**
```
Hola {Nombre} 😊 Le habla la Dra. Carolina.
Estuve revisando su caso y sigo con la misma recomendación que hablamos.
No le escribo para insistirle con el plan: le escribo para ponerle fecha.
Tengo dos espacios para arrancar: {fecha 1} y {fecha 2}.
¿Cuál le sirve? Si ninguno le cuadra, dígame usted el día y se lo reservo.
```

| Nombre | Teléfono | Fuente | Etiquetas | Entró | Lo más significativo que dijo |
|---|---|---|---|---|---|
| Freddy Pelaez | +57 313 890 8487 | Form Diseño | lead de pauta | 20-jul | *"Confirmar"* — asistió, sin cierre |
| Andrés María Saavedra ⛔ | +57 313 523 4950 | Form Implantes TD | lead de pauta | 16-jul | *"¿En su consultorio cuenta con qué hacerme las radiografías y las ayudas diagnósticas o me toca ir a otro lugar?"* |
| Sergio Alberto Montoya | +57 310 448 0605 | Form Diseño | lead de pauta | 11-jul | *"Yo tengo clara la hora, solo que me fue posible llegar antes… nos vemos a las 2"* |
| **Johanna** | +57 311 310 1519 | Form Diseño | transferencia a humano | 3-jul | ⭐ *"Una pregunta, si no me hacen nada ¿me toca pagar 150 de todos modos?"* — **duda de precio sin resolver** |
| **Sabulón Mosquera** | +57 311 414 7464 | Form Implantes TD | lead de pauta | 27-jun | ⭐ *"El tratamiento ya tengo definido hacérmelo con usted, estoy esperando…"* |
| **Tannia Silva Hernández** | +57 317 276 9717 | Form Diseño | lead de pauta | 28-jun | *"Me habías dicho de la calza del diente delantero… con la rx se miraba el golpe de la muela de abajo"* |
| Martina Gómez Montes | +57 300 662 2769 | — | — | 26-jun | *"Vamos 5 minutos retrasadas porque estamos en un tráfico"* — es para su hija, una niña |
| Gloria Elena Cardona ⛔ | +57 310 475 0665 | Form Diseño | lead de pauta | 26-jun | ❌ *"Como no tenía todo el dinero, busqué otra opción"* — **perdida por precio** |
| **Marisol Quiroga** | +57 314 313 1120 | — | — | 25-jun | *"Me realicé las radiografías en Zipaquirá, te están enviando los resultados al correo"* |
| Lina Marcela Aristizábal | +57 320 324 9148 | Form Diseño | lead de pauta | 24-jun | *"Mis dientes están un poco más arriba de mi labio, entonces casi no se ven"* |
| **Pio Santos Jiménez** | +57 321 411 9105 | WhatsApp | lead-whatsapp | 20-jun | *"Me da pena con usted pero no ha sido posible terminar la diligencia en la que estoy"* |
| Andrea Gómez | +57 315 245 5901 | — | — | 18-jun | *"Me queda fácil el próximo viernes 26 de junio a las 11am"* — dio disponibilidad concreta |
| **Raul Sarmiento** | +57 311 725 7342 | Form Diseño | lead de pauta | 17-jun | ⭐ Registró a **dos personas**: él y **Zulay Sabala León** (+57 311 309 1139). Núcleo familiar |
| **Gabriela Muñoz** | +57 324 403 4772 | Form Diseño | lead-whatsapp | 16-jun | ⭐ *"La próxima semana retomo el tema, me estaré comunicando"* — **ya tiene los dos presupuestos y descuento por hacer ambos** |
| Lina Marcela Mazo ⛔ | +57 314 791 0669 | Form Diseño | lead de pauta | 12-jun | *"Disculpa, no podré asistir, se me presentó un imprevisto"* |
| Victor Hugo Giraldo | +57 315 274 8176 | Form Diseño | lead de pauta | 11-jun | ⚠️ Responde con publicidad de su negocio (Granja la Paturra). Revisar si es lead real |
| **Francy Elena Flores** | +57 314 859 5172 | Form Diseño | lead de pauta | 1-jun | ⭐ *"No me quedó clara la consulta. ¿El costo de los $350.000 era la consulta solamente? Inicialmente me dijeron la valoración de $160.000"* — **confusión de precio** |
| Pcte Santiago Tobón 👤 | +57 311 617 7684 | — | paciente antiguo | 28-may | *"Haciéndote el pago me quedó doble"* — **resolver la devolución** |
| Pcte Cristina Ríos 👤 | +57 317 667 1408 | — | paciente antiguo | 15-may | *"Me podrías recordar la dirección"* |
| Marisol Quiroga (2º registro) | +57 310 764 7609 | — | — | 16-may | *"Acabo de modificar la cita para el 25 de junio por razones de viaje"* — ⚠️ **posible duplicado** |
| **Nora Bastidas** | +57 311 789 6174 | Form Diseño | transferencia a humano | 1-may | ⭐ *"Para esta transformación donde veo blanqueamiento y corrección de imperfecciones, ¿sería un valor aparte?"* — **ya tiene presupuesto de $5.600.000** |
| Yazmin ⛔ | +57 321 448 6268 | Form Diseño | lead de pauta | 29-abr | *"Comparto la radiografía"* — ya la mandó |
| Sara Gómez A | +57 310 605 7964 | — | — | 28-abr | *"¿Para limpieza y otros procedimientos tienen convenio con EPS o póliza?"* — tiene Sura/Colsanitas, 20% dto |
| Sonia Gallego | +57 317 670 1079 | — | — | 26-abr | *"Quiero una cita con la Dra. Carolina Macareno"* |
| Juan Carlos Álvarez | +57 314 873 4326 | — | — | 23-abr | ⚠️ Es una empresa de tecnología haciendo prospección. **Revisar si es paciente real** |
| Leydy Cardona | +57 300 230 4025 | — | agenda consulta presencial | 27-mar | *"No me he realizado el examen… me programaron otras citas de la EPS"* |
| Carolina Agudelo Quintero | +57 321 550 7290 | — | — | 14-ene | *"He estado viajando, probablemente me haga mañana la radiografía"* — alineadores pendientes |
| Diana Cuervo | +57 324 390 0351 | Base de datos | stop bot, no-lead | 8-ene | *"Nos llegó traslado de ciudad y estamos acá hasta mitad de año"* — **ya pasó, retomar** |
| Fabián Sierra | +57 310 399 0404 | Base de datos | stop bot, no-lead | 8-ene | *"Muchísimas gracias, lo mismo para usted y su equipo"* |
| **Julio Mejía** | +57 310 831 7969 | Base de datos | stop bot, no-lead | 8-ene | ⭐ *"Quisiera que la Dra. Carolina me diera un presupuesto para ponerme carillas en los 6 dientes frontales"* — **pidió presupuesto explícito** |
| Daniel Cure | +57 300 720 3797 | Base de datos | stop bot, no-lead | 8-ene | *"Me hago mis controles y retomamos"* |
| Gustavo Montoya | +57 321 209 7775 | Base de datos | stop bot, no-lead | 8-ene | ⚠️ Habla de colon irritable, no de odontología. Revisar si corresponde a este embudo |
| **Gina Gil** | +57 315 665 5789 | Base de datos | stop bot, no-lead | 8-ene | ⭐ *"Quisiera de una vez incluir el retoque de las resinas y un posible blanqueamiento"* — **ya tiene presupuesto de $5.600.000** |

**Los 6 de máxima prioridad en G1:** Sabulón Mosquera · Julio Mejía · Gabriela Muñoz · Gina Gil · Nora Bastidas · Francy Elena Flores. Los tres primeros pidieron o ya tienen precio y no dijeron que no; los tres últimos tienen presupuesto y una duda concreta sin resolver.

**Dos a limpiar del grupo:** Victor Hugo Giraldo y Juan Carlos Álvarez responden como empresas, no como pacientes. Gustavo Montoya habla de un tema médico ajeno.

**Un núcleo familiar:** Raúl Sarmiento + Zulay Sabala León.

---

## G6 · Nunca contactados (7)

**Situación:** entraron al CRM y **nadie les escribió nunca**. Cero mensajes de salida. Es el grupo más pequeño y el más barato de arreglar.

**Estrategia:** primer contacto real, con disculpa incluida. Son los únicos donde la disculpa es sincera y desarma.

**Mensaje:**
```
Hola {Nombre} 👋 Le escribe el equipo de la Dra. Carolina Macareno.
Vi que se interesó en {tema} y quiero pedirle disculpas: no le respondimos a tiempo.
¿Sigue buscando resolverlo? Le agendo la valoración cuando usted diga.
```

| Nombre | Teléfono | Fuente | Etiquetas | Entró | Nota |
|---|---|---|---|---|---|
| Pcte Jairo Jaramillo Lenis 👤 | +57 324 403 4747 | — | paciente antiguo | 6-jul | Paciente antiguo mal ubicado en el embudo |
| Pct María Victoria Hernández | +57 304 545 0592 | — | — | 29-jun | Sin fuente ni etiquetas |
| **Grace Andersson** | +57 4 519 2719 | dracarolinamacareno.com | `web_form`, `source:utm_gbp`, `source:google_organic`, `consulta:implantes dentales` | 22-jun | ⭐ **Llenó formulario web pidiendo implantes, llegó por la Ficha de Google, y nadie le escribió.** El más grave del grupo |
| Pcte Zulay Sabala León 👤 | +57 311 309 1139 | — | paciente antiguo | 17-jun | Es la acompañante que registró **Raúl Sarmiento** (G1). Tratarlos juntos |
| Patricia Martínez | +57 316 497 9919 | Base de datos | stop bot, no-lead | 8-ene | De la base importada |
| Wilmer Tapias ⛔ | +57 310 431 9708 | Base de datos | stop bot, no-lead | 8-ene | De la base importada |
| Esteban Niño ⛔ | +57 310 261 1023 | Base de datos | stop bot, no-lead | 8-ene | De la base importada |

**Prioridad:** Grace Andersson. Pidió implantes por el formulario, llegó por la ficha de Google, y nunca recibió respuesta.

**Los 3 de «Base de datos» y los 2 pacientes antiguos** no son leads del año: conviene sacarlos del embudo para que no ensucien la métrica de conversión.

---

## GP · Perdidos (15)

**Situación:** marcados `Perdido` en el CRM. **No todos son iguales**, y ahí está el valor: varios se perdieron por distancia o por momento, no porque no quisieran.

**Estrategia: no volver a venderles.** Se dividen en tres.

**GP-a · Perdidos por distancia (4) — recuperables con turismo dental o virtual**

| Nombre | Teléfono | Fuente | Entró | Lo que dijo |
|---|---|---|---|---|
| Liliana Gómez 🌎 | +1 647 835 8155 | — | 8-jul | *"Tengo muy pocos días en Colombia y me queda imposible viajar a Medellín, me tocó buscar otro odontólogo"* |
| Hernán Osorio | +57 318 636 4846 | — | 24-jun | *"Me encuentro en Rionegro y se me dificulta por tiempo viajar con frecuencia a Medellín"* |
| Lenis | +57 310 498 0657 | — | 20-jun | *"Vivo en la Guajira"* |
| Eliana López Restrepo | +57 310 520 0154 | Form Diseño | 11-jul | *"No, muchas gracias, siempre me queda retirado"* |

> Mensaje: ofrecer **valoración virtual** y, para los de fuera de Medellín, agrupar todo el tratamiento en pocos viajes. A Liliana, que está en Canadá, va el mensaje de turismo dental con reserva de fecha.

**GP-b · Perdidos por precio o momento (3) — nurturing largo, reactivar en 3-6 meses**

| Nombre | Teléfono | Fuente | Entró | Lo que dijo |
|---|---|---|---|---|
| **Olma Juliana Pajoy** | +57 315 058 8810 | Form Diseño · `meta` | 25-jul | 💔 *"Tengo mis dientes desgastados y fracturados pero no me alcanza para la consulta, soy madre cabeza de familia de 4 menores"* |
| Luz Montoya | +57 314 715 1225 | — | 8-jun | *"Mi diagnóstico es bueno, ya me lo han dicho. Solo quiero saber lo económico para saber si está a mi alcance"* |
| Gladys | +57 312 388 4992 | — | 8-may | *"El diseño ya tiene 6 años y debo volver…"* — **es paciente antigua que quiere renovar**, no una perdida |

> **Gladys no debería estar en Perdidos.** Va a `Revisión (Retomar)`: es una renovación de diseño a los 6 años.
> **Olma Juliana:** no insistir con venta. Si algún día hay una opción de entrada de bajo costo, es la persona a la que se le ofrece.

**GP-c · Perdidos correctamente o por revisar (8)**

| Nombre | Teléfono | Entró | Nota |
|---|---|---|---|
| **Martín Alonso García** | +57 304 477 7131 | 26-jun | ⚠️ *"Tengo una prótesis fija, quisiera que me la revisen porque creo que no quedó bien. ¿Cuánto cuesta la cita?"* — **es una consulta de segunda opinión, no un perdido.** Recuperable |
| **Henry David Balcázar** | +57 310 731 6274 | 9-jul | ⚠️ *"Me falta un diente, tengo la raíz… me lo hicieron hace diez años y se cayó"* — **caso claro de implante.** Revisar por qué se marcó perdido |
| BZ 🐝 🌎 | +1 808 627 5000 | 14-jul | *"Me gustaría agendar una visita con la Dra."* — pidió cita. Revisar |
| Fabio Barrera | +57 321 855 1249 | 15-jul | Vino de anuncio de Meta pidiendo información |
| Luisa Fernanda Salazar | +57 315 544 6373 | 28-abr | *"Ya solucioné"* — perdido correctamente |
| Lua Pineda | +1 954 444 1393 🌎 | 10-jun | Contacto profesional, no paciente |
| Mirarudasy | +57 301 329 2021 | 10-jul | *"El me conoce como la hermana de Sebas"* — contacto personal, no lead |
| Pcte Andrés Pérez 👤 | +57 304 381 2188 | 26-jun | Paciente antiguo, sin conversación |

> **Tres a rescatar de aquí:** Martín Alonso García, Henry David Balcázar y BZ. Los tres pidieron algo concreto y quedaron marcados como perdidos. Merecen una segunda mirada antes de darlos por cerrados.

---

## G2 · Agendaron y no asistieron (68)

**Situación:** pidieron cita, hubo conversación, no llegaron. 44 de los 68 están en estado `abandonado`.

**Estrategia:** no preguntar «¿cuándo puede?». **Ofrecer dos fechas concretas y decir que se les guarda el cupo 48 horas.** La pregunta abierta es lo que dejó a este grupo donde está.

**Mensaje:**
```
Hola {Nombre} 👋 Sé que se le cruzó la cita, nos pasa a todos.
Le tengo cupo el {fecha 1} y el {fecha 2}. Se lo guardo 48 horas sin compromiso.
Y si venir es lo complicado, hacemos primero una valoración virtual de 15 minutos
y ya después viene solo a lo importante. ¿Cuál prefiere?
```

### G2-a · Casos clínicos fuertes que se perdieron por logística (11) — **trabajar primero**

Estos describieron un problema serio. No se fueron por precio.

| Nombre | Teléfono | Fuente | Entró | Lo que dijo |
|---|---|---|---|---|
| **Amparo González** ⛔ | +57 319 597 8787 | — | 29-abr | *"Tengo una prótesis puesta en 2018 que fue un fracaso total, los dientes inferiores están todos flojos. Ya comer me es casi imposible"* |
| **Carmen Pipicano** ⛔ | +57 310 553 1597 | Form Implantes TD | 30-jun | *"Uso prótesis fija pero se me dañó y quiero reemplazarla lo más pronto posible, son 8 piezas frontales"* |
| **Adriana Agudelo Bedoya** ⛔ | +57 322 503 3624 | Form Implantes TD | 23-jun | *"Le tengo terror a odontología, toda mi dentadura son puras raíces, hasta tengo algunas enterradas en la encía"* |
| **Rubén** | +57 314 757 9564 | — | 12-abr | *"Hace 48 años perdí un diente… me pusieron una prótesis fija pero cuando…"* |
| **Carpintería I.H (Franklin León)** | +57 301 723 5739 | — | 2-abr | *"Los implantes inferiores aún no están puestos, conservo los dientes naturales pero se me están moviendo y no puedo comer bien"* |
| **Oglys** | +57 315 141 7806 | — | 2-may | *"Tengo solo un diente en la parte central de arriba"* |
| **Paola Andrea** ⛔ | +57 311 389 1974 | Form Diseño | 7-may | *"Tengo diseño y dos implantes… estoy con un implantólogo pero él solo me realiza eso, quisiera una valoración"* — **segunda opinión** |
| **Eva del Pilar Barrera** ⛔ | +57 310 653 6868 | Form Implantes TD | 10-jul | *"La necesito para que me autoricen el dinero"* — edentulismo total, ya buscaba financiar |
| **Najul** ⛔ | +57 314 891 4885 | — | 16-abr | *"Vivo cerca de Medellín… mi caso sería prótesis y estética"* |
| **Yohana Rodríguez** ⛔ | +57 312 289 4798 | Form Diseño | 4-may | *"Me gustaría hacerme el microdiseño ya que mis dientes son muy pequeños"* |
| **Juan Perdomo** | +57 316 570 9534 | — | 20-mar | Caso de pérdida dental, ya calificado por Salomé |

### G2-b · Cancelaron con motivo y prometieron volver (14)

| Nombre | Teléfono | Entró | Lo que dijo |
|---|---|---|---|
| **Marianela Gari** | +57 321 791 3851 | 20-jun | 💔 *"Disculpa que he cancelado las citas, todavía estoy sin ánimos, mi hermana falleció en Venezuela"* — **tratar con cuidado** |
| Gloria Franco | +57 302 489 1978 | 15-jun | *"Se me presentó algo personal, viajo a Bogotá, cuando llegue reprogramamos"* |
| Ana Cristina Henao ⛔ | +57 311 405 6828 | 23-jun | *"Mañana no voy a poder asistir, estoy en un pueblo"* |
| Juvenal Johany Aguirre ⛔ | +57 300 315 4859 | 12-jun | *"Aún no he podido bajar a Medellín, la otra semana reprogramo"* |
| Nohora Ramos ⛔ | +57 318 254 3661 | 11-jun | *"Me pusieron una visita de trabajo a las 2 pm en Guayabal"* |
| Saul Urrea ⛔ | +57 320 683 2229 | 8-jun | *"Se me presentó un inconveniente"* |
| Alejandro Mariaca ⛔ | +57 301 537 1756 | 29-may | *"En semana no me queda fácil, mejor yo les escribo"* |
| Manyelys ⛔ | +57 302 732 0721 | 16-may | *"Me tocó salir de viaje para después de junio"* — **ya pasó junio** |
| Luz Adriana Aranzazu ⛔ | +57 322 442 5442 | 19-may | *"Todavía estoy fuera de la ciudad por temas de trabajo"* |
| Wilman Henry Guerra ⛔ | +57 305 412 4990 | 7-may | Canceló muy formalmente por trabajo |
| Paola Andrea García ⛔ | +57 301 549 5259 | 28-abr | *"Hubo un error en la comunicación, la cita la pedí para el lunes 11"* — ⚠️ **error nuestro** |
| Margarita Rosa | +57 321 788 4980 | 5-mar | *"Se me cruzó con un viaje, de regreso solicitaré nuevamente"* |
| George Morales ⛔ | +57 304 670 1529 | 4-may | *"Creo que no me dará el tiempo"* |
| Lorena Rodríguez ⛔ | +57 312 824 3449 | 29-abr | *"Mañana no me da"* |

### G2-c · Del exterior o de otra ciudad (6) — turismo dental

| Nombre | Teléfono | Entró | Lo que dijo |
|---|---|---|---|
| **Wendy** 🌎 | +1 604 816 0299 | 25-may | ⭐ *"Vivo en el exterior y estoy planeando un viaje a Colombia con el objetivo exclusivo de…"* |
| **Ross** 🌎 | +1 646 761 8073 | 12-jun | ⭐ Ya tiene **plan de 8 días** propuesto: día 1 planeación, día 2 cirugía de implantes, día 3 prótesis |
| Ángel David Lengua 🌎 ⛔ | +1 864 631 3542 | 30-jul | Consulta por un mucocele en el labio inferior |
| Pcte Melissa 🌎 👤 | +1 339 600 9873 | 5-may | *"Estoy lista"* |
| Flabia Carvajal ⛔ | +57 312 881 2788 | 21-may | *"¿Con cuántos días de anticipación puedo programar? Vivo en Santa Bárbara"* |
| Teryn Wolfe ⛔ | +57 310 224 7416 | 14-feb | *"¿Es posible una cita el lunes de asesoría con la doctora?"* |

### G2-d · Llegaron del anuncio y no concretaron (16)

Todos con el mismo primer mensaje automático de Meta (*"vi el anuncio de la doctora, quiero orientación profesional sobre mi caso"*). **Mensaje idéntico para todo el bloque.**

María del Carmen Tolosa ⛔ · Natalia ⛔ · Rentería ⛔ · Marinar de la Osa · Amanda · Sonia Janeth Morales · Jorge Marimón ⛔ · Carolina Macarenolupe · Orlando ⛔ · Onexy · R Y i · Pcte Diseño 1 Doris Soto 👤⛔ · Guicela Echeverri ⛔ · Rafael Cárdenas ⛔ · Claudia Patricia Morales ⛔ · Gerardo 🙃

### G2-e · Los demás (21)

| Nombre | Teléfono | Entró | Nota |
|---|---|---|---|
| **Maria Eugenia Agudelo** ⛔ | +57 311 365 3647 | 30-jul | ⭐ Llegó por **el blog** (`implante-titanio-vs-zirconio`), con marca de atribución `Google (orgánico)`. **Prueba de que el sistema de marca funciona** |
| **Silvio Chaverra Moreno** | +57 323 466 4330 | 27-jul | *"Me quiero hacer una valoración sobre el tratamiento que me debo realizar"* |
| **Jose Alejandro Apostal** | +57 324 398 6513 | 23-jul | *"Quiero los brackets para tener los dientes derechos"* — ortodoncia |
| **Mariana Villegas** | +57 313 359 3735 | 5-jul | ⭐ *"Estoy interesada si Ella me realiza todo el tratamiento. No deseo que me asignen otro profesional. ¿Es posible?"* — **objeción resoluble en un mensaje** |
| **Yeis** | +57 314 892 6959 | 5-mar | ⭐ *"Si voy a la cita de valoración, pago los 150 mil y tomo el tratamiento con usted, ¿cuándo me podrían arreglar la muela que tengo con dolor?"* — **dolor activo** |
| **Daniela Ruiz Loaiza** ⛔ | +57 302 309 8073 | 29-abr | *"Tengo brackets abajo y me gustaría quitármelos, ¿es posible?"* |
| John Builes Tejada ⛔ | +57 310 864 2633 | 4-jul | Vino de **Instagram**, pidió cita |
| German David Pérez ⛔ | +57 311 704 9362 | 13-jul | *"Te escribo el lunes"* |
| Karol Acevedo ⛔ | +57 301 410 3527 | 3-jul | Solo saludó |
| Rodrigo Gómez ⛔ | +57 323 590 6722 | 1-jul | Llenó formulario, dio datos completos |
| Joshua Andrew Chapman ⛔ | +57 305 259 5348 | 26-jun | ❌ Pedía limpieza el mismo día, encontró otra clínica. **Señal: la disponibilidad inmediata cierra ventas** |
| Sandra ⛔ | +57 315 925 2688 | 25-may | ❌ *"Era una urgencia y ya conseguí la cita"* |
| Moisés Rafael Franco | +57 320 704 3595 | 23-abr | Quiere hacerlo, no consiguió financiación |
| Giovanni Sepúlveda ⛔ | +57 301 425 8393 | 28-abr | *"Voy en camino pero no llego a esa hora"* |
| Yeimyzabala300 | +57 324 251 4148 | 13-mar | *"Si es posible podría ser la otra semana"* |
| te amo eres mi vida mona ⛔ | +57 323 439 4061 | 8-jul | *"Mira, para separar una cita de valoración"* |
| Pcte Zaida Simanca 👤 | +57 320 510 5471 | 25-may | ⭐ **Remisión activa**: tiene un familiar en el exterior que quiere venir |
| Pcte Diego Diosa 👤⛔ | +57 321 781 9469 | 6-may | *"Deseo reagendar"* |
| Pcte Laura Castaño 👤⛔ | +57 319 521 9800 | 23-may | Mensaje no disponible |
| Pcte Jhon Bairon Henao 👤⛔ | +57 304 594 3866 | 6-may | *"Sí voy a asistir"* |
| Pcte Martin Hernán Molina 👤⛔ | +57 319 320 9197 | 28-abr | *"Sí claro, estaré si Dios quiere"* |

**Orden de trabajo del G2:** primero G2-a (11 casos clínicos fuertes), luego G2-c (turismo dental, alto ticket), luego G2-b. El bloque G2-d va con Salomé en masivo.

**Dos aprendizajes que salen de aquí:** Joshua y Sandra se fueron a otra clínica **por disponibilidad inmediata**, no por precio. Y a Paola Andrea García se le agendó mal la cita: fue error nuestro, conviene disculparse al retomarla.

---

## G3 · Prospectos que hablaron y nunca agendaron (81)

**Situación:** el grupo más grande de conversaciones reales. Contaron su caso, se les respondió, y no se agendó nada. **20 son del exterior.**

**Estrategia:** una sola pregunta cerrada. No más información: una decisión.

**Mensaje:**
```
Hola {Nombre} 😊 Hace un tiempo hablamos de su caso y quedamos ahí.
Le escribo con una sola pregunta: ¿sigue queriendo resolverlo?
Si es que sí, le agendo la valoración esta semana y salimos de dudas.
Si es que no por ahora, dígamelo con confianza y no la molesto más.
```

### 🔥 G3-a · Urgente por fecha (1)

| Nombre | Teléfono | Entró | Lo que dijo |
|---|---|---|---|
| **Ximena** 🌎 España | +34 644 066 588 | 8-jul | ⭐⭐ *"**Viajo a Medellín el 30 de agosto** y como le comenté a la doctora estaré **dos semanas**. Antes de confirmar…"* |

> **Escribirle ya.** Viaja en 26 días y estará solo dos semanas: la agenda hay que bloquearla ahora o el caso se pierde por calendario.

### G3-b · Casos clínicos de alto valor (14)

| Nombre | Teléfono | Fuente | Entró | Lo que dijo |
|---|---|---|---|---|
| **Dré** 🌎 Nueva York | +1 646 877 5543 | WhatsApp | 31-jul | ⭐ *"I'm located in New York and I'm looking to get dental work done. I believe I would need at least **5 dental implants**"* |
| **Maria Aparecida Grigsby** 🌎 | +1 425 354 7908 | — | 30-jun | ⭐ *"Mi sueño es hacer todo lo necesario para mejorar mi salud bucal"* |
| **Maira Vargas** ⛔ | +57 301 847 6890 | — | 9-jul | *"Soy paciente de 47 años, en la parte superior solo cuento con un diente natural"* |
| **Socorro Carvajal** | +57 300 404 7980 | — | 10-jul | *"Mi mamá ha tenido prótesis removible casi 40 años, se le movían y un día tosió…"* |
| **Nilsa Orozco** | +57 320 312 7832 | Form Implantes TD | 19-jul | 66 años, pensionada. **Envió su lista de medicamentos** (bisoprolol, atorvastatina, sacubitrilo/valsartán): caso cardiológico, requiere manejo especial |
| **Luz Helena Ramírez** ⛔ | +57 310 407 2519 | — | 2-jul | ⭐ *"Estoy en un proceso de rehabilitación oral en otra clínica **pero me han cancelado la cita tres veces**"* |
| **Eduvina Parra** | +57 313 589 1113 | — | 25-may | *"Tengo 2 prótesis, se me mueven mucho"* |
| **Milan** ⛔ | +57 318 911 4864 | — | 24-may | *"Por medio de mi EPS me hicieron una, por accidente, pero la encía superior quedó moviéndose"* |
| **Ganaisary** | +57 314 736 2384 | — | 23-may | 💔 *"Deseo tener una linda sonrisa, desde chica he sufrido por ese mal de dentadura dañada"* |
| **Yeimi Baldovino** | +57 312 493 5473 | Form Implantes TD | 1-jun | *"Pérdida dental, creo que tengo pérdida de encía en la parte de abajo"* |
| **María Bárbara** | +57 333 231 4660 | — | 1-may | *"Vivo en Cartagena. Quería una prótesis…"* |
| **Jose Prada** | +57 311 778 8992 | Form Implantes TD | 23-jul | 58 años, *"dientes muy dañados que necesitan reemplazo"*, «lo antes posible» |
| **Yeison Anaya** ⛔ | +57 301 222 0042 | Form Implantes TD | 23-jul | *"Me faltan dos muelas hace 6 años"* |
| **Jorge Enrique de la Rosa** | +57 317 777 9878 | Form Implantes TD | 16-jul | Pensionado, *"uso prótesis removible y quiero dientes fijos"* |

### G3-c · Del exterior y turismo dental (19 más)

| Nombre | Teléfono | Entró | Nota |
|---|---|---|---|
| **Jennifer** 🌎 | +1 347 397 3696 | 21-jul | ⭐ *"Me interesa saber más sobre el **implante subperióstico**"* · **`[fuente: chatgpt.com \| p: implantes-subperiosticos]`** |
| **Marilyn Fontanez** 🌎 | +1 347 266 0375 | 17-jul | *"Antes de enviar el email llamé y hablé con Estefanía, le expliqué mi caso"* |
| **Patricia Castaño** 🌎⛔ | +1 847 409 9995 | 17-jul | *"¿Qué disponibilidad tienes martes o miércoles y dónde están?"* |
| **Alejandro** 🌎⛔ | +1 305 384 8030 | 17-jul | *"Vivo aquí en Medellín al lado de El Tesoro, quiero limpieza y también…"* |
| **Van** 🌎 Costa Rica | +506 835 7076 | 30-jun | Llegó por `/coronas-zirconio-carillas` con marca de atribución |
| **Tati** 🌎 Houston | +1 832 248 9586 | 9-jul | *"I came from your website and I would like to book an appointment"* · `Google (organic)` |
| **Lau** 🌎 España | +34 613 692 067 | 28-may | Llegó por `/servicios/protesis-fija` con marca |
| **LD** 🌎 Costa Rica | +506 830 60001 | 13-jun | Llegó por la home con marca |
| **Esteban Reyes** 🌎⛔ | +1 954 709 3034 | 8-may | Llegó del sitio web con marca |
| **M** 🌎 Rep. Dominicana | +1 829 502 0066 | 9-jul | *"Vi su WhatsApp en Doctor Especialistas"* — directorio |
| **Jehová Es Mi Roca** 🌎⛔ | +1 219 713 4616 | 2-jul | *"¿Hay algún material que pueda ofrecerme más económico?"* — **pidió alternativa, sin respuesta** |
| Eddy 🌎⛔ | +1 347 925 8214 | 9-jul | *"Solo necesito para hoy porque me voy para Nueva York ya"* |
| Mariorodriguez 🌎⛔ | +1 809 889 0582 | 15-ene | Cita virtual de valoración (anuncio) |
| . 🌎 | +1 809 350 8633 | 15-ene | Cita virtual de valoración (anuncio) |
| Raquel Núñez 🌎⛔ | +1 849 266 4844 | 14-ene | Cita virtual de valoración (anuncio) |
| Irene 🌎⛔ | +1 407 907 8504 | 14-ene | ❌ *"Ya consiguió una para hoy, a él le urge"* |
| Moisés Torres 🌎⛔ | +507 694 33128 | 8-ene | Llegó por **Instagram** 🇵🇦 |
| Henry Pérez | +57 310 513 4584 | 8-jun | *"Tengo pendiente el viaje a Medellín"* |
| Emilce | +57 300 804 0018 | 19-may | *"Me tocó viajar fuera de Medellín"* |

> **Los mensajes con marca `🌐` confirman que el sistema de atribución del sitio funciona.** Jennifer viene de **ChatGPT** por el artículo de implantes subperiósticos: es la cuarta atribución a IA documentada.

### G3-d · Preguntaron precio o ubicación y no cerraron (12)

Luz Marina Eastman (*"¿cuánto cuesta la valoración y dónde están?"*) · Hisnardo Parra ⛔ · Fernando Vélez ⛔ · Lucy ⛔ (*"la valoración siempre está costosa"*) · Alejandrahaning ⛔ (*"costo del diseño en resina y cerámica"*) · María Matos (*"¿cuánto vale la ortodoncia? quiero saber cuánto debo llevar"*) · Carmen Lucía · Angelika ⛔ · Perfumes Tienda · Yeimar Saavedra ⛔ · Claudia Muñoz ⛔ · Walter

> **Estrategia:** responder precio + ubicación + dos cupos, **en un solo mensaje**. Es el grupo más barato de mover.

### G3-e · Estética y diseño (8)

Lucia Rivera · Maria Fernanda Herrera ⛔ (*"desde que salieron mis cordales…"*) · Nora Jaramillo (*"porcelana y algunas muelas para diseño de sonrisa"*) · Jessica Niño (*"pérdida dental, dientes muy manchados"*) · Mary Luz ⛔ (*"blanqueamiento y un diseño"*) · Joha Oliveros (*"se me partió una muela, estoy apretando los dientes"*) · Leidy Villalba · Gloria Guzmán ⛔ (*"me gustaría comentarle mi caso"* — **nunca se le respondió el fondo**)

### G3-f · Objeción de tiempo o momento (12)

Paola (*"tengo mucho personal a cargo, complicado los permisos"*) · Mónica Franco · Jorge Peláez (*"me interesa que me llame el miércoles"*) · Eugenio Arrubla (*"yo te contacto, por razones laborales"*) · Amalfi Jinete ⛔ · Alba Luz (*"no tengo transporte"*) · Deisy Gómez ⛔ · Gustavo Betancur ⛔ · Catarine David · Guillermo Reyes (*"el jueves me hago la radiografía"*) · Luis Hernández Uparela · Henry David Uribe

### G3-g · Revisar antes de escribir (6)

| Nombre | Motivo |
|---|---|
| **Eduardo López Ramírez** | *"Qué bueno encontrarla de nuevo, hace un tiempo me hizo un buen trabajo"* — **es paciente antiguo**, va a Revisión |
| **Diego** ⛔ | Pregunta por **placas de avance mandibular para roncar**. ¿Se ofrece ese servicio? |
| Camilo Velásquez ⛔ | *"Mor, y qué tal si le propongo entonces algo"* — no parece consulta clínica |
| Yeidi Cristina Usuga ⛔ | Responde un bot de otra empresa (Conextetic). Número equivocado |
| Psicóloga Julieth Zapata ⛔ · Gloria Franco (2º registro) ⛔ | Posibles duplicados |
| Fanny Margarita ⛔ · Cruz Elena · Omaira Salazar · Yo (Pilar) · La Vida Es Bella ⛔ · Adriana Rico · Analu Burgos · Maryely Duque ⛔ · Y otros | Conversación mínima |

**Prioridad del G3:** Ximena (fecha de viaje) → Dré y Maria Aparecida (turismo de alto ticket) → Luz Helena (la está perdiendo otra clínica) → los 14 casos clínicos → el bloque de precio/ubicación en masivo.

---

## G4 · Leads nuevos que no avanzaron (86)

**Situación:** escribieron una vez, se les respondió, y ahí murió. **73 de 86 están abandonados.** La mayoría preguntó **precio o ubicación**.

**Estrategia:** este es el grupo de Salomé. Mensaje masivo con la respuesta que pidieron **de entrada**, sin obligar a preguntar dos veces.

**Mensaje:**
```
Hola {Nombre} 👋 Le escribe el equipo de la Dra. Carolina Macareno,
rehabilitadora oral en Medellín.
Le respondo lo que preguntó: la valoración especializada cuesta $150.000
e incluye evaluación integral, revisión de imágenes y su plan de tratamiento.
Estamos al lado del C.C. El Tesoro, con parqueadero.
¿Le agendo esta semana? Tengo {opción 1} u {opción 2}.
```

### 🔴 G4-a · Casos clínicos serios enterrados en este grupo (11)

Estos describieron un problema grave y quedaron sin seguimiento. **Sacarlos del masivo y tratarlos como G1.**

| Nombre | Teléfono | Fuente | Entró | Lo que dijo |
|---|---|---|---|---|
| **Héctor Jair Calle** ⛔ | +57 304 530 1756 | Form Implantes Meta | 7-jun | *"De Itagüí. **Tengo pérdida total de dentadura**"* |
| **Janed Cecilia Ríos** ⛔ | +57 300 886 8149 | Form Implantes Meta | 31-may | *"**Reconstrucción oral total. Por accidente de tránsito**"* |
| **Pedrozrm2018** ⛔ | +57 300 413 5249 | — | 8-jun | *"Quiero colocarme todos los dientes de arriba, los tres que tengo ya no me sirven"* |
| **Ana Tavera** ⛔ | +57 300 205 0669 | — | 10-jul | *"No tengo encías y manejo prótesis removible. ¿Se puede hacer un implante?"* |
| **Carmen Fabiola Fernández** ⛔ | +57 314 778 9956 | Form Implantes TD | 14-jun | *"Me encuentro en Silvia, Cauca. **Requiero unos implantes de 4 unidades**"* |
| **Dionisio Gallo Arias** ⛔ | +57 311 738 3237 | Form Implantes TD | 15-jun | *"Desde El Peñol, Antioquia. Implantes dentales por pérdida de…"* |
| **DIOS MÍO, PERDÓNAME** 🌎 | +507 647 37862 | — | 8-ene | 🇵🇦 *"Superior solo tengo tres piezas, me faltan las frontales y las que quedan no están…"* |
| **ROCIO** ⛔ | +57 322 528 9493 | — | 21-jun | ⚠️ *"Hace 6 meses me hicieron un microdiseño de sonrisa y…"* — **problema con trabajo de otra clínica** |
| **Jairo** ⛔ | +57 301 875 4664 | — | 20-jun | *"Necesito un implante en esa muela para hacer la prótesis completa"* |
| **Beatriz Elena Ríos** ⛔ | +57 301 227 0064 | Form Implantes TD | 26-jun | *"¿Qué vale la consulta? ¿Dónde están ubicados?"* |
| **Pcte Implante y fija 3 Lila** 👤⛔ | +57 310 605 2024 | — | 8-jul | *"¿Qué precio tiene la prótesis sobre los implantes?"* |

### G4-b · Preguntaron precio o ubicación (28) — respuesta masiva

Marlene Peñaranda ⛔ (*"necesito saber el costo para realizar un presupuesto"*) · Familia❤️ ⛔ (*"¿cuánto cuesta el implante convencional?"*) · Flor Ángela Orrego ⛔ · Paulina Velásquez · Isaa ⛔ · Angela ⛔ · Doris Cruz ⛔ · Jimy Alejandro ⛔ (*"microdiseño para 6 bordes"*) · Antonio Muñoz ⛔ · Lennert Knippenberg ⛔ (*"blanqueamiento y limpieza"*) · Sandra Carolina Reyes ⛔ (*"planes de ortodoncia"*) · Alejandra Quinchia ⛔ · Escribiendo ⛔ · 🖕🤪 ⛔ (*"¿un precio más o menos de 4 dientes?"*) · Yuleidy ⛔ · Distritodo ⛔ · Simon Isaza ⛔ · JAIRO TORO ⛔ · Natalia ⛔ · María Leonor Fernández ⛔ · MARÍA EUGENIA TABORDA ⛔ · Silvia Álvarez ⛔ (*"¿tienen cita los sábados?"*) · Ross ⛔ · Oscar Jiménez ⛔ · Rocio ⛔ · Alberto ⛔ · Lina ⛔ · Mary ⛔

### G4-c · Llenaron formulario y solo dijeron «hablar con un consultor» (12)

Ana Jaramillo · Julieth Dueñas · Arroyave López Daniela ⛔ · Edwison León Rúa ⛔ · Luis Hernán Duque ⛔ · Yajaira Márquez ⛔ · Carmen Gamarra ⛔ · Paola Cordero ⛔ · Andrea Mojica · Albert Díaz · Leidy Carmona · Yeimis Pahola (*"después de eso me quiero colocar brackets"*)

### G4-d · Saludo mínimo o sin contenido (26)

Jc · Real Cartagena · Oscarina ⛔ · Manuel ⛔ · Edison Paniagua ⛔ · Diana 💜 ⛔ · Erica Marín ⛔ · C G ⛔ · Nohemí Barrera ⛔ · Isaac Vida Mía ⛔ · Fenix ⛔ · XXX ⛔ · E🩷 ⛔ · Monaca ⛔ · Andrey Castro ⛔ · Camilo Hoyos ⛔ · Paulina González ⛔ · EdCA ⛔ · Raiza Requena ⛔ · Josimar Miranda ⛔ · Andrés Correa ⛔ · Álvaro Jaramillo ⛔ · Nancy Castaño ⛔ · Lucines Muñoz ⛔ · Maggy ⛔ · Yanet Marina Monsalve · Hernán Jaramillo ⛔ · ARGEMIRO Barrera ⛔ · Gladis Sánchez ⛔ · Gudurix Zagalo ⛔ (llegó de `/dra-carolina-macareno` con marca)

### G4-e · Limpiar (3)

Helen Suarez (responde el bot de Spa Mary Helen) · Sirley (invitación de la Federación Odontológica) · Pcte Ever Navarro 👤 (*"estoy esperando un dinero"*)

---

## G5 · Nunca respondieron (58)

**Situación:** se les escribió y **jamás contestaron nada**. Cero mensajes entrantes.

**Estrategia:** **cambiar de canal y dar salida.** No sirve insistir por el mismo medio. Y el mensaje debe ofrecer la puerta de salida, porque una baja limpia vale más que un contacto muerto en la lista.

**Mensaje:**
```
Hola {Nombre}, le hemos escrito un par de veces y quizá no le llegan los mensajes.
Si prefiere, la llamamos: dígame a qué hora le queda bien.
Y si ya no le interesa, respóndame «no» y no volvemos a escribirle. Sin problema.
```

### ⭐ G5-a · Llenaron el formulario completo y nunca contestaron (14)

Estos **dieron toda su información** (edad, ocupación, ciudad, qué quieren mejorar, presupuesto). Son los de mayor intención declarada de todo el G5.

| Nombre | Teléfono | Entró | Qué contestó en el formulario |
|---|---|---|---|
| **Beatriz Rojas Trujillo** | +57 300 417 2129 | 14-jul | ⭐ 61 años, pensionada, **"me dijeron que no tengo hueso para implantes"** — caso de injerto, alto valor |
| Rafael Peñuela | +57 305 356 1778 | 17-jul | 50 años, **médico**, Medellín, quiere evaluación, *"sí consulté pero no me convencieron"* |
| Elizeth Escorcia | +57 300 577 4880 | 25-jul | 45, asesora, Medellín, blanqueamiento |
| Diana Cardona 🌎 | +506 865 4856 | 23-jul | 61, ama de casa, 🇨🇷 blanqueamiento + transformación completa |
| David Rendón Velásquez | +57 304 400 4726 | 23-jul | 47, administración, forma/tamaño de dientes |
| Yanny Almario | +57 313 574 2851 | 22-jul | 28, manicurista, forma/tamaño + color |
| Sandra | +57 302 382 2697 | 19-jul | 50, ama de casa, dientes torcidos |
| Andrés Arias Zuleta | +57 300 463 6809 | 19-jul | 41, empleado, blanqueamiento |
| Diana Cifuentes | +57 310 493 9466 | 16-jul | 38, ama de casa, dientes torcidos |
| Melissa Cano | +57 320 563 9778 | 16-jul | 31, independiente, forma/tamaño |
| Stiven Vallejo | +57 312 637 7411 | 16-jul | 38, independiente, blanqueamiento |
| Rudesindo Hoyos | +57 314 759 4946 | 13-jul | 38, comerciante, *"no me convencieron"*, presupuesto **$500-$2.000 USD** |
| Hilda Díaz | +57 317 381 9520 | 12-jul | 26, independiente, dientes torcidos |
| Bianeth Cristina Duque | +57 322 660 7507 | 9-jul | 43, auxiliar de producción, quiere evaluación |
| Ana Carolina Torres ⛔ | +57 314 611 0248 | 6-jul | 39, independiente, dientes torcidos, **otra ciudad** |

### G5-b · Formulario sin respuestas + sin contestar (40)

Sandra Hoyos ⛔ · Diego Alfonso · Isabel Barrientos ⛔ · Giovanny Ramírez ⛔ · Henry Giovanny Giraldo ⛔ · Derlis Andrade ⛔ · Candy Barreneche ⛔ · Ana Pérez Munera ⛔ · Alex Agudelo ⛔ · Alba Luz Zapata ⛔ · HIPÓLITO González ⛔ · Madely López ⛔ · Claudia ⛔ · John Jairo Giraldo ⛔ · Andrey Caro ⛔ · Silvia Vélez ⛔ · Julián Quintero ⛔ · José ⛔ · Arturo Cristóbal Ricardo ⛔ · Roberto Rubio ⛔ · Luis W. Sepúlveda ⛔ · John Jairo Echeverri ⛔ · Sandra María Osorio ⛔ · Ruby Cardona ⛔ · Jorge Elkin Mesa ⛔ · Cruz Doris Mosquera ⛔ · maritzaaguderos · Carlos Manuel Cudriz ⛔ · 310 3051889 ⛔ · Lina Marcela Montoya ⛔ · Leidy Johana Monsalve ⛔ · Yadira ⛔ · **Pedro Miguel Zambrano** 🌎 +1 324 659 9931 (rescatado del pipeline de Implantes el 3-ago) · Luna · Diana Ramírez · Keryn García ⛔ · Olga Luz Ospina ⛔ · Hernando Mejía ⛔ · Pcte Giovanny Ramírez Moreno 👤⛔

### G5-c · De la base importada, no son leads (4)

Danna Castellanos · María Lamazares · Jobiner Mejía · Gustavo Lobo. **Sacar del embudo.**

---

## Los otros dos bloques, fuera del embudo de adquisición

### Pacientes antiguos · `Revisión (Retomar)` (265)

Es el pipeline de **control y retomar**, no de captación. **265 oportunidades**, casi todas sin valor registrado.

**Estrategia distinta: recordatorio de control, no venta.** Es el activo más rentable que tiene la clínica y el que menos se trabaja: son personas que ya confiaron y ya pagaron.

```
Hola {Nombre} 😊 Le escribe el equipo de la Dra. Carolina Macareno.
Ha pasado un tiempo desde su último control y queremos que su tratamiento
siga como el primer día.
¿Le agendamos su cita de revisión? Tengo {fecha 1} o {fecha 2}.
```

**Antes de enviar:** hay que separar quién tiene tratamiento activo de quién terminó hace años. Un recordatorio de control a alguien que sigue en tratamiento se lee como que no sabemos quién es.

**Dos que ya salieron por aquí:** Gladys (+57 312 388 4992, *"el diseño ya tiene 6 años y debo volver"*) y Eduardo López (+57 305 299 8253, *"hace un tiempo me hizo un buen trabajo"*). Los dos están mal clasificados en otros grupos y son renovaciones listas.

### `Base Antigua - Reactivación` (1.534)

Importación histórica, **nunca trabajada**. Todos en «Por contactar».

**No tocar todavía.** Antes hay que resolver el tema de las plantillas de WhatsApp y tener capacidad de atender respuestas. Enviar 1.534 mensajes sin eso quema la base y arriesga el número.

**Cuando se trabaje:** en tandas de 50, empezando por los más recientes, con un mensaje de reactivación puro (sin venta) que solo busque saber quién sigue interesado.

---

## Resumen para arrancar

| Prioridad | Quién | Cuántos | Quién lo hace |
|---|---|---|---|
| 1 | **Ximena** (viaja el 30 de agosto) | 1 | La Dra., hoy |
| 2 | G1 · los 6 de máxima prioridad | 6 | La Dra. |
| 3 | G3-b + G4-a · casos clínicos serios sin seguimiento | 25 | La Dra. / Estefanía |
| 4 | G2-a · casos fuertes que no asistieron | 11 | Estefanía |
| 5 | G3-c · turismo dental | 20 | La Dra. |
| 6 | Resto de G1, G2, G3 | ~145 | Estefanía |
| 7 | G4 + G5 masivo | 144 | Salomé |
| 8 | Revisión / control | 265 | Estefanía, campaña aparte |
| 9 | Base antigua | 1.534 | Después de resolver plantillas |

**Los 3 hallazgos que más valen de todo el listado:**

1. **Ximena viaja en 26 días** y estará dos semanas. Es la única con fecha límite real.
2. **Hay 25 casos clínicos serios** (pérdida total, reconstrucción por accidente, prótesis fallidas) enterrados en los grupos de menor prioridad, porque se clasificaron por etapa y no por gravedad.
3. **Jennifer llegó por ChatGPT** preguntando por implantes subperiósticos, con la marca de atribución intacta. Es la cuarta atribución a IA documentada y confirma que el sistema del sitio funciona.

---

## Registro de cambios

**4-ago-2026 · versión inicial.** Listado completo de 348 contactos en 7 grupos, con nombre, teléfono, fuente, etiquetas, lo más significativo de cada conversación y la estrategia por grupo. Verificado con el criterio corregido (dirección del último mensaje real, filtrando mensajes de sistema), después de que la Dra. detectara que el análisis anterior daba por no respondidos a pacientes que sí lo habían sido.
