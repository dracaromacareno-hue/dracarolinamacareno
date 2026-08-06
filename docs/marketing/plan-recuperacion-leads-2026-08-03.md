# Plan de recuperación de leads 2026 — Dra. Carolina Macareno

> **Fecha:** 3 de agosto de 2026
> **Fuente:** lectura directa del CRM GHL/HubLevel (location `z84DlOrVXLL9zuRM5VYV`) vía API interna.
> **Universo leído:** 2.225 oportunidades, 2.315 conversaciones, 71 envíos de formulario, mensajes completos de 374 contactos prioritarios.
> **Alcance:** todo lo creado en 2026 (el CRM no tiene registros anteriores a enero de este año).

---

## 1. La foto real

De las 2.225 oportunidades del CRM, **solo 403 son leads reales de este año** (362 contactos únicos). El resto son cargas masivas:

| Bloque | Cantidad | Qué es |
|---|---|---|
| Base Antigua - Reactivación · "Por contactar" | 1.534 | Importación de base vieja, nunca trabajada |
| Pacientes Actuales · "Revisión (Retomar)" (won) | 232 | Pacientes históricos importados |
| **Leads reales 2026** | **403** | Lo que se trabaja en este documento |

**Leads reales por mes:** ene 21 · feb 1 · mar 12 · abr 23 · may 55 · jun 140 · jul 149 · ago 2

El embudo real de esos 403:

| Etapa | Abiertos | Abandonados | Total | Lectura |
|---|---|---|---|---|
| Nuevo Lead (sin trabajar) | 40 | 99 | **139** | Nunca se movieron de la primera casilla |
| Prospecto (habló, no agendó) | 50 | 31 | **82** | Conversó y se enfrió |
| Agenda Cita (agendó, no asistió) | 26 | 48 | **74** | No-show |
| Asistió a la cita | 36 | 6 | **42** | **Vinieron y no arrancaron** |
| Turismo Dental · Lead nuevo | 46 | — | 46 | Pipeline paralelo (37 son duplicados) |

### Lo que SÍ se convirtió (corregido 3-ago)

Los tratamientos no se registran en el pipeline de leads sino en **Pacientes Actuales** — el modelo de dos pipelines. Contando ahí, **9 leads de 2026 iniciaron tratamiento por $129.700.000**:

| Paciente | Valor | Estado | Origen |
|---|---|---|---|
| Raymond Serpa 🌎 | $35.000.000 | En tratamiento — 4 implantes + primera fase; **vuelve en noviembre por las coronas** | WhatsApp |
| Xiomara Serpa 🌎 | $24.000.000 | En tratamiento | `source:grok` + `source:google_organic` |
| Slawomir Gluch | $22.500.000 | Inicia tratamiento | WhatsApp |
| Bibiana Buitrago | $21.450.000 | 1 finalizado + 1 en curso | WhatsApp |
| Stephen Rixchardson | $12.000.000 | En tratamiento | **`source:chatgpt`** |
| Dora Elisa Zapata | $7.200.000 | En tratamiento | — |
| Maria Julieta Rivera | $6.000.000 | En tratamiento | WhatsApp |
| Juan Esteban Maya Álvarez | $1.550.000 | Inicia tratamiento | — |

Pipeline de tratamiento completo, incluyendo pacientes antiguos: **$232.865.000** en 24 oportunidades.

**Notas de atribución:** Raymond y Xiomara Serpa son familia y vinieron juntos desde Orlando — **$59M de un solo núcleo de turismo dental**. Stephen Rixchardson llegó por **ChatGPT** y Xiomara por **Grok**: son la segunda y tercera atribución GEO medible del negocio.

**El dato duro sigue en pie:** 42 personas se sentaron en la silla este año y la gran mayoría no arrancó. **Ese es el dinero que está en la mesa.** Pero la conversión real del año no es cero — es $129,7M, y viene desproporcionadamente de turismo dental y de búsquedas en IA, no de la pauta.

### ⚠️ Cuatro pacientes EN TRATAMIENTO tienen un lead falso abierto — NO escribirles como leads

El flujo de "Crear oportunidad" les abrió una oportunidad de `Nuevo Lead` **después** de que ya habían empezado tratamiento. Si se trabajan como leads, se les pregunta "¿sigue interesado en una valoración?" a un paciente que ya está en obra.

| Paciente | Lead falso creado | Realidad |
|---|---|---|
| Raymond Serpa | 31-jul | En tratamiento desde 22-jul, $35M |
| Maria Julieta Rivera | 31-jul | En tratamiento desde 22-jul, $6M |
| Bibiana Buitrago | 31-jul | Tratamiento finalizado 26-jul, $14M |
| Stephen Rixchardson | 21-jul | En tratamiento desde 26-jul, $12M |

**Acción: eliminar esas 4 oportunidades de lead y revisar el disparador del workflow.**

### Tres problemas de CRM que hay que arreglar hoy

1. ~~**37 contactos duplicados** entre "Nuevos Pacientes" e "Implantes - Turismo Dental".~~ ✅ **RESUELTO el 3-ago.** El conteo definitivo fue **41**, no 37 (el primer número salió de una muestra filtrada). Las 41 se descartaron y un lead real que solo vivía en Implantes se rescató. Ver el registro de cambios. La Dra. ya había cortado el origen: hoy todos los leads entran a "Nuevos Pacientes".
2. **En "Asistió a la cita" hay 9 pacientes antiguos y de "Base de datos"** que nunca fueron leads (Zulay Sabala, Jairo Jaramillo, Danna Castellanos, María Lamazares, Patricia Martínez, Wilmer Tapias, Esteban Niño, Gustavo Lobo, Santiago Tobón). Ensucian la métrica de conversión.
3. **Ninguna oportunidad de "Asistió a la cita" tiene responsable asignado.** Por eso quedan huérfanas.

---

## 2. Los 5 grupos y la estrategia de cada uno

| Grupo | Personas | Tipo de contacto | Quién lo hace | Meta |
|---|---|---|---|---|
| **A. Asistieron y no iniciaron** | 42 | **Individual, uno por uno** | La Dra. (audio propio) | 8 tratamientos |
| **B. No-show / cita perdida** | 74 | Semi-individual, 2 tandas | Estefanía | 20 re-agendadas |
| **C. Prospectos indecisos** | 82 | Grupal segmentado por objeción | Estefanía + Salomé | 15 valoraciones |
| **D. Diáspora / otros países** | 29 | **Individual, "reserva de agenda"** | La Dra. | 6 reservas de fecha |
| **E. Leads nuevos sin tocar** | 139 | Masivo automatizado | Salomé IA | 25 conversaciones |

### Por qué individual y por qué grupal

**Individual** cuando la persona ya te vio la cara o ya te habló personalmente (grupos A y D). Un mensaje genérico a alguien que se sentó en tu silla se lee como desprecio, y son los casos de mayor valor.

**Grupal segmentado** cuando la persona nunca llegó a la consulta (grupos B, C y E). Ahí el volumen manda y el mensaje puede ser el mismo dentro de cada segmento de objeción.

### La regla que atraviesa todo

> ⚠️ **CORREGIDO EL 4-AGO-2026. Lo que decía aquí era falso.** Se afirmaba que «al menos 6 están esperando un presupuesto que nunca les llegó». **Las propuestas sí se enviaron**: Gina Gil y Nora Bastidas tienen presupuesto explícito de **$5.600.000**, y a Sabulón, Pio, Tannia y Marisol se les respondió. El error venía de una métrica mal construida (ver sección 12).
>
> **El problema real es otro:** se responde bien y **no se cierra**. Las conversaciones mueren en «quedo pendiente» y «estaré atenta», sin fecha ni siguiente paso.

Segunda regla, la de Hormozi que ya está en el plan de rescate: **nunca bajes el precio, cambia la oferta.** Empezar por fases o cambiar de tratamiento no es descuento.

---

## 3. GRUPO A — Asistieron a la cita y no iniciaron tratamiento (42)

**Estrategia: individual, con propuesta escrita, audio de la Dra.** Este grupo no se toca con plantilla fría.

### A1 · Prioridad máxima — están esperando algo tuyo (8 personas)

| Paciente | Última comunicación | ¿Se habló? | Fuente | Formulario | Lo más importante de la conversación | Estrategia de recuperación |
|---|---|---|---|---|---|---|
| **Sabulón Mosquera** +57 311 414 7464 | 21-jul | Sí — 22 mensajes suyos, 9 respuestas humanas | Form Implantes Turismo Dental (Meta) | No | *"El tratamiento ya tengo definido hacérmelo con usted, estoy esperando un pago para poder cancelarle e iniciar… yo le estaré informando"* | **El más caliente del CRM.** Audio de la Dra.: reservarle cupo sin pago, ofrecer arranque por fases para que no dependa del pago completo. Cerrar fecha esta semana. |
| **Pio Santos Jimenez** +57 321 411 9105 | 25-jul | Sí — 15 mensajes, cita cumplida | Pauta | No | *"Estoy pendiente de recibir el presupuesto del valor del tratamiento que me va a adelantar"* — lo pidió textual y nunca llegó | **Enviar el presupuesto HOY.** Es una venta perdida por omisión, no por objeción. |
| **Gina Gil** +57 315 665 5789 | 10-jun | Sí — 13 mensajes | Base de datos | No | *"Quisiera de una vez mirar e incluir el retoque de las resinas y un posible blanqueamiento… me gustaría tener todo completo"* | Pidió MÁS tratamiento, no menos. Enviar plan integral con precio total y opción por fases. |
| **Marisol Quiroga** +57 314 313 1120 | 1-jul | Sí — 10 mensajes | Directo | No | *"Me realicé las radiografías en Zipaquirá, te están enviando los resultados al correo… quedo atenta"* + "falta el 22 y el 12" | Ya hizo su tarea. Revisar radiografías y mandar plan. Si no llegaron al correo, pedirlas de nuevo. |
| **Nora Bastidas** +57 311 789 6174 | 11-jun | Sí — 30 mensajes, transferencia a humano | Form Diseño (Instagram) | No | *"¿Este valor es solo los alineadores? Para esta transformación donde veo blanqueamiento y corrección de imperfecciones, ¿sería un valor aparte?"* | Propuesta incompleta. Enviar el paquete completo desglosado: alineadores + blanqueamiento + estética, con precio de cada fase. |
| **Gustavo Montoya** +57 321 209 7775 | 21-may | Sí — 12 mensajes | Base de datos | No | *"¿Cuánto cuesta y cómo le cancelo?"* + *"¿Podemos hacerla virtual? Tengo que estar aquí para una cita"* | Pidió precio y forma de pago, nunca se le respondió el cierre. Ofrecer valoración virtual + plan escrito. |
| **Tannia Silva Hernández** +57 317 276 9717 | 21-jul | Sí — 8 mensajes | Form Diseño (Instagram) | No | *"Me habías dicho de la calza del diente delantero… la encía inflamada… también me hablaste del cambio de la carilla que tengo"* | Recuerda el plan de memoria pero no lo tiene por escrito. Mandarlo formalizado con precios. |
| **Lina Marcela Aristizábal** +57 320 324 9148 | 30-jun | Sí — 11 mensajes | Form Diseño (Instagram) | No | *"Yo mañana saco el ratico para llevar las radiografías"* — nunca las llevó | Ofrecer que las mande por WhatsApp o agendar la toma en el consultorio. |

### A2 · Segunda prioridad — se enfriaron con excusa de tiempo (10 personas)

| Paciente | Última comunicación | ¿Se habló? | Fuente | Formulario | Lo más importante | Estrategia |
|---|---|---|---|---|---|---|
| Freddy Pelaez +57 313 890 8487 | 27-jul | Sí — 4 msg | Form Diseño (Facebook) | **Sí:** 49 años, mecánico, Medellín + otra ciudad, presupuesto **$500–$2.000 USD**, "dientes torcidos o separados", ya consultó antes: *"Sí, pero no me convencieron"* | "Confirmar / Ok / Listo!" — asistió, sin cierre | Presupuesto declarado y modesto: entrar por **alineadores o diseño por fases**, no por el premium. Ya lo decepcionó otra clínica: apoyarse en eso. |
| Sergio Alberto Montoya +57 310 448 0605 | 11-jul | Sí — 11 msg | Form Diseño (Facebook) | **Sí:** 56 años, docente, otra ciudad de Colombia, *"Necesito conocer opciones primero"* | *"Ya estoy en el edificio, esperando autorización de subir"* — asistió puntual | Pidió **opciones**, no precio. Mandarle el menú de tratamientos con 3 rutas y precios. Viaja desde otra ciudad: agrupar citas. |
| Martina Gomez Montes +57 300 662 2769 | 17-jul | Sí — 12 msg | Directo | No | *"Ella estudia en la mañana"*, disponible *"hasta las 3 de la tarde"* | **Es para su hija, una niña.** La valoración se cobró $100.000 como favor de la Dra. Ofrecer franja de tarde específica y hablar con la mamá. Al cotizar, tener presente que el caso ya viene con un gesto de la Dra. |
| Gabriela Muñoz +57 324 403 4772 | 11-jul | Sí — 13 msg | Form Diseño (Facebook) | No | *"La próxima semana nos contactamos"* (hace 3 semanas) | Cerrar el bucle: proponer dos fechas concretas, no "cuando puedas". |
| Andrea Gómez +57 315 245 5901 | 26-jun | Sí — 11 msg | Directo | No | *"Aún no he podido salir de la oficina, ¿cuánto me pueden esperar?"* | Ofrecer primera cita fuera de horario laboral o virtual. |
| Raul Sarmiento +57 311 725 7342 | 17-jun | Sí — 12 msg | Form Diseño (Facebook) | No | *"Disculpa el incumplimiento… ¿estamos en 3 min, alcanzamos?"* | Incumplió y se avergonzó. Mensaje sin culpa: "le guardamos el cupo". |
| Sara Gómez A +57 310 605 7964 | 4-may | Sí — 16 msg | Directo | No | *"Tengo un percance, ¿es posible reprogramarla?"* — nunca se reprogramó | Reprogramación directa con 2 opciones de fecha. |
| Juan Carlos Álvarez +57 314 873 4326 | 23-jun | Sí — 6 msg | Directo | No | *"Listo, perfecto… allá estaré"* | Confirmó y no hubo seguimiento. Retomar como si nada hubiera pasado. |
| Carolina Agudelo Quintero +57 321 550 7290 | 22-abr | Sí — 9 msg | Directo | No | *"He tenido que viajar mucho, espero el viernes hacerme la radiografía"* | Recordatorio suave + facilitar radiografía cerca de su casa. |
| Leydy Cardona +57 300 230 4025 | 6-may | Sí — 46 msg | Pauta (etiqueta lead-sin-procesar) | No | *"Debo trabajar… apenas organice mis horarios te contacto"* | 46 mensajes de ida y vuelta y no cerró. Llamada de la Dra., no WhatsApp. |

### A3 · Retomar ahora porque cambió su circunstancia (4 personas)

| Paciente | Última comunicación | ¿Se habló? | Fuente | Formulario | Lo más importante | Estrategia |
|---|---|---|---|---|---|---|
| **Diana Cuervo** +57 324 390 0351 | 15-abr | Sí — 5 msg | Base de datos | No | *"Nos llegó traslado de ciudad y estamos acá hasta mitad de año"* | **Ya pasó mitad de año.** Es el momento exacto de escribirle. Mensaje: "¿ya volvieron a Medellín?" |
| Pcte Zaida Simanca +57 320 510 5471 | 21-jul | Sí — 3 msg | Paciente antigua | No | *"Tengo un familiar fuera de Colombia y piensa venir y necesita de su profesión, le pasé su contacto"* | **Remisión activa** — el canal más rentable del negocio. Agradecer, pedir el contacto del familiar y activar protocolo de turismo dental. |
| Francy Elena Flores +57 314 859 5172 | 5-jun | Sí — 12 msg | Form Diseño (Facebook) | No | *"No me quedó clara la consulta de ayer. ¿El costo de los $350.000 era la consulta solamente? Inicialmente me dijeron la valoración de $160.000 pero incluía parte del tratamiento"* | **Objeción de precio por confusión, no por plata.** Aclarar por escrito qué incluye cada valor. Es recuperable. |
| Johanna +57 311 310 1519 | 6-jul | Sí — 45 msg, transferencia a humano | Form Diseño (Facebook) | No | *"No he terminado la ortodoncia"* | Necesita coordinar con su ortodoncista. Ofrecer plan que arranque después o en paralelo. |

### A4 · Dijeron que no explícitamente — marcar Perdido con motivo (3 personas)

| Paciente | Última comunicación | Lo que dijo | Qué hacer |
|---|---|---|---|
| Gloria Elena Cardona Ortega +57 310 475 0665 | 19-jun | *"Como no tenía todo el dinero, busqué otra opción"* | **Perdido — motivo: precio.** Nurture largo (contenido, no venta). Ofrecer opción por fases en 3 meses. |
| Lina Marcela Mazo Mejía +57 314 791 0669 | 30-jun | *"Por el momento no podré comenzar el tratamiento"* | **Perdido — motivo: momento.** Reactivar en noviembre (prima de fin de año). |
| Andrés María Saavedra Parra +57 313 523 4950 | 21-jul | *"Mi hija menor está presa… hay que buscarle un buen abogado… lo que ahora necesito es dinero"* (41 mensajes) — formulario: 58 años, minero, presupuesto USD 3.000–5.000, "lo antes posible" | **NO insistir.** Crisis familiar real. Mensaje humano de acompañamiento sin venta, y volver a contactar en 4-6 meses. Era un lead de alto presupuesto. |

### A5 · Resto del grupo — seguimiento estándar (8) + limpieza de CRM (9)

**Seguimiento estándar:** Yazmin +57 321 448 6268 (*"me gustaría más alineados abajo"*, vio el diseño) · Sonia Gallego +57 317 670 1079 · Marisol Quiroga +57 310 764 7609 (**posible duplicado** con la de A1) · Julio Mejía +57 310 831 7969 · Daniel Cure +57 300 720 3797 (*"mañana le aviso"*) · Fabián Sierra +57 310 399 0404 (*"yo les aviso en qué momento"*) · Matías Martínez +57 314 215 7830 · Víctor Hugo Giraldo +57 315 274 8176 (*"sí necesito una valoración"*).

**Sacar del embudo de leads** (son pacientes antiguos o base importada, no leads de este año): Pcte Zulay Sabala · Pcte Jairo Jaramillo · Pcte Santiago Tobón (pagó doble, pidió devolución — **resolver eso primero**) · Pcte Cristina Ríos (preguntó por póliza Sura) · Gustavo Lobo · Danna Castellanos · María Lamazares · Patricia Martínez · Wilmer Tapias · Esteban Niño.

---

## 4. GRUPO B — Agendaron y no asistieron (74)

**Estrategia: 2 tandas, semi-individual.** Estefanía envía, la Dra. solo entra si el paciente responde con objeción de fondo.

### B1 · Urgentes — escribieron esta semana (3)

| Paciente | Última comunicación | ¿Se habló? | Fuente | Lo más importante | Estrategia |
|---|---|---|---|---|---|
| **Marianela Gari** +57 321 791 3851 | **3-ago (hoy)** | Sí — 42 msg, 17 respuestas humanas | WhatsApp directo | *"Buenos días, disculpa, para cambiar la cita como entre el 10 y 17 de agosto"* | **Responder hoy.** Darle 3 opciones concretas en esa ventana y bloquear el cupo. |
| **María Eugenia Agudelo** +57 311 365 3647 | **2-ago** | Sí — 19 msg | WhatsApp | *"Reprogramar"* | Responder con fechas concretas, no con pregunta abierta. |
| Ángel David Lengua +1 864 631 3542 🌎 | 30-jul | Sí — 13 msg | WhatsApp (EE.UU.) | *"Sí, para confirmarla por favor"* — y quedó abandonada | Va a grupo D (diáspora). Reservar cupo condicionado a su viaje. |

### B2 · Cancelaron con motivo concreto y prometieron volver (17)

Todos dijeron alguna versión de *"yo les aviso"*. **La estrategia es la misma para todos: no preguntar "¿cuándo puede?" sino ofrecer 2 fechas concretas y decir que se les guarda el cupo 48 horas.**

| Paciente | Última com. | Fuente | Lo más importante |
|---|---|---|---|
| Gloria Franco +57 302 489 1978 | 18-jul | Form Implantes TD (Facebook) | *"Se me presentó algo personal, esta semana viajo a Bogotá, cuando llegue reprogramamos"* |
| John Builes Tejada +57 310 864 2633 | 21-jul | WhatsApp | *"Voy a reprogramar… el miércoles tengo pico y placa"* |
| Mariana Villegas +57 313 359 3735 | 17-jul | WhatsApp | *"Estoy en Bogotá, cuando regrese a Medellín me comunico"* |
| Germán David Pérez +57 311 704 9362 | 24-jul | Form Diseño (Facebook) · **formulario:** 38 años, empleado, Medellín, quiere blanqueamiento, presupuesto $500–$2.000 USD, *"sí consulté pero no me convencieron"* | *"Te escribo el lunes que tenga el espacio de la semana siguiente confirmado"* |
| Juvenal Johany Aguirre +57 300 315 4859 | 17-jul | Form Implantes TD (Facebook) | *"Aún no he podido bajar a Medellín, la otra semana reprogramo"* |
| Adriana Agudelo Bedoya +57 322 503 3624 | 6-jul | Form Implantes TD | *"Yo le aviso cuando tenga condiciones"* |
| Saul Urrea +57 320 683 2229 | 11-jun | Form Diseño (Instagram) | *"Se me presentó un inconveniente, yo llamo la próxima semana"* |
| Alejandro Mariaca +57 301 537 1756 | 12-jun | Form Diseño (Facebook) | *"En semana no me queda fácil, mejor yo les escribo cuando pueda asistir"* |
| Nohora Ramos +57 318 254 3661 | 12-jun | Instagram | *"Me pusieron una visita de trabajo a las 2 pm en Guayabal"* |
| Ana Cristina Henao +57 311 405 6828 | 6-jul | Form Diseño (Instagram) | *"Mañana no voy a poder asistir, estoy en un pueblo"* |
| Amparo González +57 319 597 8787 | 6-may | Directo | *"En la primera oportunidad que vea solucionado mi problema estaré allá, porque esto para mí es más que prioridad"* |
| Wilman Henry Guerra +57 305 412 4990 | 29-may | Form Diseño (Facebook) | *"Por tema de trabajo se me cruzó… cancelo la cita"* (24 mensajes, muy formal y educado) |
| Najul +57 314 891 4885 | 2-may | Directo | *"Me tienen trabajando, voy a mirar qué días me dan de descanso y me agendo de nuevo"* |
| Luz Adriana Aranzazu +57 322 442 5442 | 5-jun | Form Diseño (Facebook) | *"Todavía estoy fuera de la ciudad por temas de trabajo"* |
| Manyelys +57 302 732 0721 | 16-may | Form Diseño (Facebook) | *"No voy a poder asistir, me tocó salir de viaje para después de junio"* — **ya pasó junio, retomar** |
| Emilce +57 300 804 0018 | 26-may | Directo | *"Me tocó viajar fuera de Medellín, apenas llegue les escribo"* |
| Daniela Ruiz Loaiza +57 302 309 8073 | 5-may | Form Diseño (Instagram) | *"Se me presentó un inconveniente, debí cancelar la cita 🥺"* |

### B3 · Objeción de precio o información sin resolver (6)

| Paciente | Última com. | Fuente | Lo más importante | Estrategia |
|---|---|---|---|---|
| **Ross** +1 646 761 8073 🌎 | 15-jun | WhatsApp (Nueva York) | *"The price posted on your website today is $4500"* / *"Ok, I'm listening"* (27 mensajes) | Está comparando contra el precio de la web. Responder en inglés con el desglose y qué incluye. Alto valor. |
| Natalia +57 310 653 1387 | 30-abr | Directo | *"No me respondieron el valor de esta consulta"* + *"????"* | Nunca le contestaron. Disculpa + precio claro. |
| Moisés Rafael Franco +57 320 704 3595 | 8-may | Form Diseño (Facebook) | *"Estoy interesado y me la voy a hacer con ustedes, ya averigüé lo del seguro, a mí no me dan financiamiento"* | **Quiere hacerlo, no consigue financiación.** Ofrecer arranque por fases. |
| Rodrigo Gómez Goraldo +57 323 590 6722 | 1-jul | Form Implantes TD (Facebook) | Dejó datos completos (cédula, correo) y se abandonó | Dio sus datos = alta intención. Retomar directo. |
| Carmen Pipicano +57 310 553 1597 | 4-jul | Form Implantes TD (Facebook) | *"Allí estaré 🙏"* — confirmó y no llegó | Recuperación de no-show estándar. |
| Eva del Pilar Barrera +57 310 653 6868 | 10-jul | Form Implantes TD · **formulario:** 65 años, Medellín, **edentulismo total**, ama de casa, "lo antes posible", presupuesto USD 3.000–5.000 | *"Yo soy una familiar que le está agendando"* | **Caso All-on-4 de alto valor.** Hablar con la familiar que gestiona, no con la paciente. |

### B4 · Perdidos confirmados (2) y sin conversación (7)

- **Joshua Andrew Chapman** +57 305 259 5348: *"Al final encontré una clínica muy cerca y tienen disponibilidad hoy"* → **Perdido - competencia.** Señal de que la disponibilidad inmediata cierra ventas.
- **Sandra** +57 315 925 2688: *"Ya me atendieron"* → Perdido - competencia.
- Sin ninguna conversación (agendaron por formulario y nadie escribió): Sandra Hoyos, 310 305 1889, Roberto Rubio, Keryn García, Hernando Mejía, Pcte Giovanny Ramírez, Pcte Diseño 1 Doris Soto. → **Primer contacto real, no recordatorio.**

### B5 · Resto del grupo B (39)

Karol Acevedo · Silvio Chaverra (formulario: 34 años, independiente, Medellín, primera consulta) · José Alejandro Apóstal · Guicela Echeverri · Wendy 🌎 +1 604 · Pcte Melissa 🌎 +1 339 · Teryn Wolfe · Rafael Cárdenas · Lorena Rodríguez · Pcte Martín Molina · Pcte Jhon Bairon Henao · Pcte Laura Castaño · Pcte Diego Diosa · Flabia Carvajal · Claudia Patricia Morales · Paola Andrea · George Morales · Yohana Rodríguez · Oglys · Giovanni Sepúlveda · Paola Andrea García · María del Carmen Tolosa · Rentería · Rubén · Marinar de la Osa · Amanda · Sonia Janeth Morales · Jorge Marimón · Carpintería I.H (Franklin León — caso de implantes inferiores pendientes, alto valor) · Gerardo · Carolina Macarenolupe · Orlando · Juan Perdomo · Onexy · Yeimyzabala · R Y i · Margarita Rosa · Yeis · te amo eres mi vida mona.

---

## 5. GRUPO C — Prospectos: hablaron y nunca agendaron (82)

**Estrategia: grupal, segmentada por objeción.** Un mensaje distinto por segmento, mismo mensaje dentro del segmento.

### C1 · Alta intención con formulario reciente — atacar primero (8)

| Paciente | Fecha | ¿Se habló? | Fuente | Qué contestó en el formulario | Lo más importante | Estrategia |
|---|---|---|---|---|---|---|
| **Nilsa Orozco** +57 320 312 7832 | 28-jul | Sí — 7 msg, 0 humanas | Form Implantes TD | 66 años, Medellín, **"me faltan varios dientes"**, pensionada, **"lo antes posible"** | *"¿Dónde está ubicado su consultorio? ¿Me puede compartir su dirección?"* — **nunca se le respondió** | Responder ya con ubicación + foto del consultorio + 2 cupos. Pensionada + "lo antes posible" = decisión rápida. |
| **Jose Prada** +57 311 778 8992 | 28-jul | Sí — 2 msg | Form Implantes TD | 58 años, Medellín, **"dientes muy dañados que necesitan reemplazo"**, sistemas, **"lo antes posible"** | *"En cuanto pueda me comunico con ustedes para agendar"* | No dejarlo a él. Ofrecer cupo concreto esta semana. |
| **Maria Fernanda Herrera** +57 314 546 0042 | 23-jul | Sí — 11 msg | Form Diseño | Ama de casa y comerciante, Medellín, **"quiero una transformación completa"**, primera consulta | *"¿Reciben todo método de pago?"* | Pregunta de cierre pura. Responder métodos de pago + agendar en el mismo mensaje. |
| Lucía Rivera +57 300 541 3468 | 28-jul | Sí — 1 msg | Form Diseño | 44 años, Medellín, forma/tamaño de dientes, primera consulta | *"Muchas gracias por la información, se ve súper interesante ✨ Sí quiero una valoración pero me va a tocar programar"* | Dijo que sí. Solo falta la fecha. |
| Yeison Anaya +57 301 222 0042 | 23-jul | Sí — 5 msg, 5 humanas | Form Implantes TD | Medellín, **"lo antes posible"** | *"Si"* | Cerrar fecha. |
| Jorge Enrique de la Rosa +57 317 777 9878 | 16-jul | Sí — 3 msg, 4 humanas | Form Implantes TD | **"Uso prótesis removible y quiero dientes fijos"**, pensionado, en 1-3 meses | *"Ok"* | Caso clásico de sobredentadura/All-on-4. Enviar caso clínico similar. |
| Luis Hernández Uparela +57 300 798 1775 | 15-jul | Sí — 12 msg | Form Implantes TD | **"Uso prótesis removible y quiero dientes fijos"**, otra ciudad, docente, *"solo estoy averiguando por ahora"* | *"Gracias, igualmente para usted"* | Dijo que solo averigua: nurture educativo, no venta. Casos antes/después. |
| Jessica Niño +57 304 536 0108 | 16-jul | Sí — 6 msg | Form Diseño | Camarera, **"se me ve mucha encía al sonreír"**, primera consulta | *"Muchas gracias"* | Gingivectomía + diseño. Enviar caso similar. |

### C2 · Objeción de dinero explícita (7) — cambiar la oferta, no el precio

| Paciente | Fecha | Fuente | Lo más importante | Estrategia |
|---|---|---|---|---|
| Socorro Carvajal +57 300 404 7980 | 29-may | Directo | *"Yo te escribo tan pronto tenga el dinero, por ahora era como averiguar"* | Oferta de entrada por fases: "puede empezar por lo prioritario". |
| Joha Oliveros +57 301 186 0313 | 30-jun | Form Diseño | *"Le confirmo en lo que me paguen la quincena"* | Escribir el día 30 o el 15. Timing, no argumento. |
| María Bárbara +57 333 231 4660 | 14-may | Directo | *"Estoy esperando por un lado lo del préstamo y también espero la respuesta…"* (16 msg, 17 humanas) | Preguntar si el préstamo salió. Ofrecer arranque parcial. |
| Lucy +57 305 207 1981 | 19-may | Directo | *"Sí, pero la valoración siempre está costosa"* | Objeción al precio de la **valoración**, no del tratamiento. Considerar valoración con abono al tratamiento. |
| Jehová Es Mi Roca +1 219 713 4616 🌎 | 2-jul | WhatsApp (EE.UU.) | *"Es lo que necesito saber, señorita Carolina. Sin embargo, ¿hay algún material que pueda ofrecerme más económico?"* | Pidió alternativa de material. **Nunca se le respondió.** Es exactamente el caso del menú de tratamientos. |
| Maira Vargas +57 301 847 6890 | 5-jun | Directo | *"¿Qué precio tiene la valoración?"* | Responder + agendar. |
| Fernando Vélez +57 319 536 2094 | 3-jun | Form Diseño (pauta) | *"¿Qué cuesta la cita y el diseño de sonrisa?"* | Igual. |

### C3 · Objeción de ubicación o desplazamiento (5)

Angelika +57 313 327 1479 (*"¿en qué parte de Medellín se encuentra?"*) · Walter +57 301 697 6726 (*"en la parte del centro de Medellín no tienen clínica"*) · Henry Pérez +57 310 513 4584 (*"cuando esté en la ciudad te escribo"*) · Mónica Franco +57 320 676 4972 (*"cuando tenga programado volver a Medellín me comunico"*) · Luz Marina Eastman +57 301 671 6130 (*"mañana te confirmo mi regreso, estoy por fuera"*).

**Estrategia común:** ubicación + parqueadero + cercanía a El Tesoro en un solo mensaje con foto, y para los que están fuera, valoración virtual previa.

### C4 · Objeción de tiempo o trabajo (6)

Paola +57 320 923 9641 (*"tengo mucho personal a cargo, es complicado los permisos"*) · Carmen Lucía +57 321 759 1941 (*"esta semana decido cómo proceder"*) · Eduardo López +57 305 299 8253 · Ganaisary +57 314 736 2384 (*"tengo un horario complicado, personalmente escribiré a Estefanía"* — **le prometió escribir a Estefa y no lo hizo, Estefa debe escribirle**) · Luz Helena Ramírez +57 310 407 2519 (*"yo le confirmo el lunes tempranito"*) · Yeimar Saavedra +57 321 339 9819 (*"¿qué días puedo ir al consultorio para la valoración?"* — **preguntó y no se le respondió**).

### C5 · Resto de prospectos (56)

Jennifer 🌎 · Andrés Arias Zuleta (formulario: blanqueamiento, "sí consulté pero no me convencieron", **0 conversación**) · Patricia Castaño 🌎 +1 847 · Alejandro 🌎 +1 305 (*"prefiero agendar primero una limpieza y evaluación de encías"*) · Leidy Villalba · Henry David Uribe · maritzaaguderos · Raquel Núñez 🌎 · Irene 🌎 · Moisés Torres 🌎 · María Matos · Eddy 🌎 · M 🌎 · Diego · Amalfi Jinete · Tati 🌎 · Quesería Devas Gourmet 🌎 +34 · Yeimi Baldovino · Van 🌎 +506 · Cida 🌎 +1 425 · Jorge Peláez · Adriana Rico · Camilo Velásquez · Yo · Alba Luz · Eugenio Arrubla · Yeidi Cristina Usuga · La Vida Es Bella (*"y quiero hacerme el tratamiento"*) · Perfumes Tienda · Deisy Gómez · JOBINER MEJÍA · Fanny Margarita Duqué · Gustavo Betancur · Gloria Franco (2º registro) · Mary Luz · LD 🌎 · Psicóloga Julieth Zapata · Alejandrahaning · Maryely Catalina Duque · Lau 🌎 +34 · Luna · Diana Ramírez · Hisnardo Parra · Omaira Salazar · Esteban Reyes 🌎 · Guillermo Reyes · Catarine David Cortés · Eduvina Parra · Milán · Analu Burgos · Cruz Elena · . 🌎 +1 809 · Claudia Muñoz Rendón · Gloria Guzmán (*"Doctora, me gustaría comentarle mi caso"* — **nunca se le respondió**) · Mariorodriguez 🌎.

---

## 6. GRUPO D — Diáspora y otros países (29) ⭐

**Este es el grupo del que hablabas: gente con la que tú y Estefa hablaron personalmente, que quedó en avisar cuando viniera.** No se les puede escribir "¿sigue interesado?" — hay que darles una razón de calendario.

**Estrategia: individual, con "reserva de agenda".** El mensaje no pregunta si quiere; le pide la **fecha del viaje** y le ofrece bloquear cupo.

| Paciente | País | Última com. | ¿Se habló? | Lo más importante | Estrategia |
|---|---|---|---|---|---|
| **Cida** +1 425 354 7908 | EE.UU. (Seattle) | 2-jul | Sí — 21 msg | *"Voy a ir a Medellín solo para arreglarme los dientes, así que necesito saber cuáles son las opciones y el precio"* | **El mejor lead internacional del CRM.** Viaja exclusivamente para esto y pidió opciones y precio. **Nunca se le mandó propuesta.** Enviar paquete de turismo dental completo. |
| **Ross** +1 646 761 8073 | EE.UU. (NY) | 15-jun | Sí — 27 msg | *"The price posted on your website today is $4500"* | Propuesta en inglés con desglose. |
| ~~**Raymond Serpa**~~ +1 407 800 9134 | EE.UU. (Orlando) | 31-jul | Sí — 32 msg, 9 humanas | **NO ES LEAD — YA ES PACIENTE.** Vino con Xiomara, ya tiene **4 implantes y la primera fase**, $35M | **Sacar del grupo D.** Va a seguimiento de tratamiento: recordatorio en **octubre** para confirmar el viaje de **noviembre** (coronas). Ver sección 6-bis. |
| Ángel David Lengua +1 864 631 3542 | EE.UU. | 30-jul | Sí — 13 msg | *"Sí, para confirmarla por favor"* | Reservar cupo condicionado a viaje. |
| Dré +1 646 877 5543 | EE.UU. (NY) | 31-jul | Sí — 15 msg | Conversación activa | Pedir fecha de viaje. |
| Wendy +1 604 816 0299 | Canadá | 25-may | Sí — 6 msg | *"Son las 8:22 aquí y me acabo de despertar"* — diferencia horaria | Coordinar por franja horaria y virtual. |
| Marilyn Fontanez +1 347 266 0375 | EE.UU. | 17-jul | Sí — 4 msg | *"Perdona que no pude hablar cuando me llamaron"* | Reintentar llamada en su horario. |
| Alejandro +1 305 384 8030 | EE.UU. (Miami) | 17-jul | Sí — 4 msg | *"Prefiero agendar primero una limpieza y evaluación para revisar mis encías y confirmar si puedo hacer…"* | Ofrecer plan de dos viajes: evaluación + tratamiento. |
| Patricia Castaño +1 847 409 9995 | EE.UU. (Chicago) | 21-jul | Sí — 7 msg | *"Te confirmo más tarde si tengo disponibilidad mañana"* + formulario: alineadores, dientes torcidos | Cerrar. |
| Jennifer +1 347 397 3696 | EE.UU. | 21-jul | Sí — 3 msg | *"Gracias"* | Retomar con propuesta. |
| 07723 442693 +44 | Reino Unido | 3-ago (hoy) | Sí — 9 msg, 4 humanas | Conversación activa hoy | Atender hoy. |
| Van +506 835 7076 | Costa Rica | 15-jul | Sí — 18 msg | *"Voy a revisarlo"* | Seguimiento a la propuesta enviada. |
| Quesería Devas Gourmet +34 644 066 588 | España | 11-jul | Sí — 28 msg | *"Muchas gracias 😊"* | Alto engagement. Pedir fecha de viaje. |
| M +1 829 502 0066 | Rep. Dominicana | 1-jun | Sí — 12 msg | *"¡Gracias!"* | Retomar. |
| Raquel Núñez +1 849 266 4844 | Rep. Dominicana | 14-ene | Sí — 10 msg, 13 humanas | Mucha inversión humana, sin cierre | Reactivación anual. |
| Tati +1 832 248 9586 | EE.UU. (Houston) | 6-jun | Sí — 2 msg | *"For december"* | **Agendar recordatorio para octubre.** Dijo diciembre. |
| Otros | — | — | — | Irene 🇺🇸 · Eddy 🇺🇸 · Esteban Reyes 🇺🇸 · . 🇩🇴 · Mariorodriguez 🇩🇴 · Moisés Torres 🇵🇦 · LD 🇨🇷 · Lau 🇪🇸 · Diana Cardona 🇨🇷 · Pedro Miguel Zambrano 🇺🇸 · Pcte Melissa 🇺🇸 · DIOS MIO PERDONAME 🇵🇦 · Teryn Wolfe | Tanda 2 del grupo. |

**Nota estratégica:** 29 de los 383 leads prioritarios son internacionales (7,6%) y varios son de altísimo valor porque viajan exclusivamente para el tratamiento. **Ninguno tiene propuesta escrita enviada.** Este grupo justifica por sí solo un paquete de turismo dental formalizado (precio, días de estadía, número de visitas, qué incluye).

---

## 6-bis. Pacientes en tratamiento — el seguimiento que nadie está haciendo

Estos **no son leads** y no llevan mensaje de recuperación. Pero tienen fases pendientes, y una fase pendiente sin fecha agendada es facturación en riesgo.

> **Verificado con la Dra. el 3-ago-2026:** todos los de esta tabla **siguen en tratamiento**. No hay que marcarlos como finalizados ni tratarlos como cierres del mes.

### Tratamientos activos — 16 pacientes, $166.400.000

| Paciente | Valor | Etapa en CRM | Próximo paso | Cuándo |
|---|---|---|---|---|
| **Raymond Serpa** 🇺🇸 Orlando | $35.000.000 | En tratamiento | **4 implantes y primera fase ya puestos.** Faltan las **coronas** — vuelve en noviembre | **Escribir en octubre** para confirmar fecha de viaje y bloquear varios días seguidos |
| **Xiomara Serpa** 🇺🇸 Orlando | $24.000.000 | En tratamiento | Confirmar si su siguiente fase coincide con el viaje de Raymond | Octubre, junto con Raymond |
| Pcte Heidy Lina Castrillón 🇺🇸 | $24.000.000 | Inicia tratamiento (`open`) | Confirmar cronograma de fases | Esta semana |
| Slawomir Gluch 🇺🇸 | $22.500.000 | Inicia tratamiento | Confirmar cronograma de fases | Esta semana |
| Stephen Rixchardson | $12.000.000 | En tratamiento | Confirmar siguiente cita | Esta semana |
| Claudio De la Rosa 🇦🇷 | $8.800.000 | En tratamiento | Confirmar siguiente cita | Esta semana |
| Bibiana Buitrago (2ª fase) | $7.450.000 | En tratamiento | Cerrar la fase abierta (la 1ª ya está finalizada, $14M) | Esta semana |
| Dora Elisa Zapata | $7.200.000 | En tratamiento | Confirmar siguiente cita | Esta semana |
| Jenny Gómez | $6.000.000 | En tratamiento | Confirmar siguiente cita | Esta semana |
| Maria Julieta Rivera | $6.000.000 | En tratamiento (`open`) | Confirmar siguiente cita | Esta semana |
| Pcte Fernanda / Lucas | $6.000.000 | En tratamiento | Confirmar siguiente cita | Esta semana |
| Natalia Martínez | $3.200.000 | En tratamiento | Confirmar siguiente cita | Esta semana |
| Juan Esteban Maya Álvarez | $1.550.000 | Inicia tratamiento (`open`) | Confirmar cronograma | Esta semana |
| Oscar Pérez | $1.500.000 | En tratamiento | Confirmar siguiente cita | Esta semana |
| Horacio Duque | $1.200.000 | En tratamiento | Confirmar siguiente cita | Esta semana |
| **Edwin Bañoz** | **$0 — falta el valor** | En tratamiento | ⚠️ Registrar el monto del tratamiento | Esta semana |

### Tratamientos finalizados del año — 8 pacientes, $73.915.000

| Paciente | Valor | Finalizado |
|---|---|---|
| **Minerva Moreno** 🇵🇦 | **$45.000.000** | **3-ago — movida en esta sesión** |
| Bibiana Buitrago (1ª fase) | $14.000.000 | 26-jul |
| Santiago Montoya Varela | $7.000.000 | 22-jul |
| **Anelisse Dutari** 🇵🇦 — la hija de Minerva, **implante** | $4.000.000 | 22-jul |
| Sergio Arango | $1.920.000 | 22-jul |
| Sofia Cortés | $895.000 | 22-jul |
| Tatiana Trejos | $800.000 | 22-jul |
| Juana Salomé Benjumea Pulgarín | $300.000 | 22-jul |

### ⚠️ El CRM no puede darte la facturación real

De las **288 oportunidades** del pipeline "Pacientes Actuales", **solo 26 tienen un valor registrado**. Las otras 262 —incluidas las 232 de `Revisión (Retomar)`, que son la base histórica importada— están en $0.

Consecuencia práctica: el total de $254.215.000 que muestra el pipeline **no es la facturación del año**, es la suma de una muestra. Mientras no se registre el valor de cada tratamiento al cerrarlo, no hay forma de medir contra la meta de $50k/mes desde el CRM.

### El hallazgo más importante del año: los núcleos familiares de turismo dental

**Dos familias del exterior valen $108.000.000 — el 42% de todo el pipeline de tratamiento.**

| Núcleo | Origen | Integrantes | Valor |
|---|---|---|---|
| **Serpa** | Orlando, EE.UU. 🇺🇸 | Raymond ($35M, 4 implantes + fase 1, vuelve en noviembre por coronas) + Xiomara ($24M, llegó por Grok) | **$59.000.000** |
| **Moreno / Dutari** | Panamá 🇵🇦 | Minerva Moreno, la madre ($45M) + Anelisse Dutari, la hija ($4M, implante, tratamiento finalizado) | **$49.000.000** |

Ninguno de los cuatro vino de la pauta. Vinieron de búsqueda en IA, orgánico y WhatsApp directo.

**La regla operativa que sale de aquí:** en todo lead del exterior hay que **preguntar siempre por el acompañante o el familiar** que viaja con la persona y que también podría tratarse en el mismo viaje. No es venta cruzada agresiva: es que quien viaja desde Panamá o Florida para un tratamiento dental casi nunca viaja solo, y el segundo integrante del núcleo se cierra sin costo de adquisición.

### Y hay más Panamá detrás

Además de Minerva y Anelisse hay **7 contactos panameños más** en `Revisión (Retomar)`, todos sin valor registrado: Fadia Cantore, Francisco Seisdedos, Alonso Alvarado, Dalia Lopera, Alix Pacheco, Gabriel Agudelo y Carlos Morales. Más **Sofia Cantore** (Italia, +39) que comparte apellido con Fadia — probable segundo núcleo familiar.

**Acción:** trabajar el bloque Panamá como un segmento propio, no como contactos sueltos. Empezar por preguntarle a Minerva y a Anelisse si hay alguien más de la familia o del círculo que quiera tratarse.

**Mensaje de recordatorio para noviembre (Raymond):**
```
Hola Raymond, le escribe el equipo de la Dra. Carolina 😊
Ya vamos acercándonos a la fase de sus coronas. Para tenerle todo listo y que aproveche
cada día de su viaje, ¿ya tiene fecha tentativa para venir en noviembre?
Con eso le bloqueamos la agenda y coordinamos también lo de Xiomara si le sirve.
```

---

## 7. GRUPO E — Leads nuevos sin trabajar (139)

**Estrategia: masiva automatizada con Salomé.** Aquí el volumen manda.

### E1 · Llenaron formulario y nadie les escribió nunca — 0 mensajes (22 personas)

Este es el desperdicio más caro: pagaste el clic, contestaron un formulario largo, y nadie escribió.

| Paciente | Fecha | Fuente | Qué contestó en el formulario |
|---|---|---|---|
| Elizeth Escorcia +57 300 577 4880 | 25-jul | Form Diseño | Asesora, Medellín, blanqueamiento, primera consulta |
| Diana Cardona +506 865 4856 🌎 | 23-jul | Form Diseño | Ama de casa, blanqueamiento + transformación completa |
| David Rendón Velásquez +57 304 400 4726 | 23-jul | Form Diseño | Administración y comunicación, Medellín, forma/tamaño de dientes |
| Yanny Almario +57 313 574 2851 | 22-jul | Form Diseño | Manicurista, Medellín, forma/tamaño + color |
| Sandra +57 302 382 2697 | 19-jul | Form Diseño | Ama de casa, Medellín, dientes torcidos |
| Rafael Peñuela +57 305 356 1778 | 17-jul | Form Diseño | **Médico**, Medellín, quiere evaluación, "sí consulté pero no me convencieron" |
| Diana Cifuentes +57 310 493 9466 | 16-jul | Form Diseño | Ama de casa, Medellín, dientes torcidos, primera consulta |
| Melissa Cano +57 320 563 9778 | 16-jul | Form Diseño | Independiente, Medellín, forma/tamaño |
| Stiven Vallejo +57 312 637 7411 | 16-jul | Form Diseño | Independiente, Medellín, blanqueamiento, "no me convencieron" |
| Beatriz Rojas Trujillo +57 300 417 2129 | 14-jul | Form Implantes TD | **"Me dijeron que no tengo hueso para implantes"**, pensionada, en 1-3 meses ⭐ caso de injerto, alto valor |
| Rudesindo Hoyos +57 314 759 4946 | 13-jul | Form Diseño | Comerciante, Medellín, "no me convencieron" |
| Hilda Díaz +57 317 381 9520 | 12-jul | Form Diseño | Independiente, Medellín, dientes torcidos |
| Bianeth Cristina Duque +57 322 660 7507 | 9-jul | Form Diseño | Auxiliar de producción, Medellín, quiere evaluación |
| Ana Carolina Torres +57 314 611 0248 | 6-jul | Form Diseño | Independiente, dientes torcidos, otra ciudad |
| Ana Pérez Munera · Alex Agudelo · Alba Luz Zapata | 4-jul | Form Diseño | — |
| Isabel Barrientos · Giovanny Ramírez · Derlis Andrade · Candy Barreneche · Henry Giovanny Giraldo | 9-10 jul | Form Diseño | — |

**Acción:** secuencia de 3 toques de Salomé (día 0, día 2, día 5) usando la respuesta del formulario como gancho personalizado. *"Vi que le interesa {respuesta del formulario}…"*

### E2 · Escribieron preguntando precio o ubicación y no se les respondió (18)

Todos preguntaron algo concreto y quedaron sin respuesta. **Este es el arreglo más rentable y más fácil.**

Beatriz Elena Ríos (*"¿qué vale la consulta? ¿dónde están ubicados?"*) · Álvaro Jaramillo (*"¿costos y en qué ciudad están?"*) · Martín Alonso García (*"creí que la valoración no tenía costo"*) · Paulina Velásquez (*"¿la valoración tiene algún costo?"*) · Jimy Alejandro (*"quiero un valor aproximado de un microdiseño para 6 dientes"*) · Sandra Carolina Reyes (*"un valor promedio de los planes de ortodoncia"*) · Paulina González (*"¿qué valor tiene el microdiseño?"*) · Doris Cruz (*"¿en qué ciudad se encuentra?"*) · Angela (*"quiero saber dónde están ubicados y qué precio"*) · Ana Tavera (*"no tengo encías y manejo prótesis removible, ¿se puede hacer un implante?"* ⭐) · Lennert Knippenberg (*"precio de blanqueamiento y limpieza"*) · Yuleidy · Alejandra Quinchia · Andrey Castro · Escribiendo (*"¿cuánto vale el diseño de sonrisa?"*) · Distritodo · Simon Isaza (*"¿cómo accedo a una cita de valoración?"*) · Jairo Toro · Carmen Gamarra · Monaca · Rocío (Guajira) · Isaa (*"microdiseño"*).

**Acción:** respuesta con precio de valoración + ubicación + link de agenda, en un solo mensaje. **Salomé debe tener esta respuesta automatizada ya.**

### E3 · Conversaciones activas de WhatsApp sin clasificar (5)

⚽ +57 312 373 5927 (*"¿qué vale la consulta?"*) · Familia❤️ · Alberto (15 msg) · Nora Jaramillo (*"¿hoy en la mañana puedo hablar con ella?"*) · Andrea Mojica.

> **Corregido 3-ago:** Maria Julieta Rivera y Bibiana Buitrago estaban en esta lista por error — **las dos están en tratamiento** ($6M y $21,45M). Salen del grupo E.

### E4 · Registros de prueba a eliminar (3)

"Prueba safari url" · "Prueba De atribucion" · "Sebastian prueba". **Borrarlos** — inflan las métricas.

> **Corregido 3-ago:** "Stephen Rixchardson" estaba aquí por error. **No es una prueba: es un paciente real en tratamiento por $12M que llegó por ChatGPT** (`source:chatgpt`). Es una de las atribuciones GEO más valiosas del negocio — no borrar bajo ninguna circunstancia.

---

## 8. Los mensajes (listos para copiar)

### M1 · Asistió y espera propuesta (Grupo A1) — audio de la Dra., no texto
```
Hola {Nombre}, le habla la Dra. Carolina. Quedé pendiente de enviarle su plan por escrito
y quiero cumplirle.
🦷 {Tratamiento} · Inversión: {monto}
Podemos hacerlo completo o empezar por {fase prioritaria}, que resuelve {su dolor}
y le permite avanzar ya.
¿Le parece si lo revisamos juntos {día} y dejamos agendado el inicio?
```

### M2 · Asistió y se enfrió por tiempo (Grupo A2)
```
Hola {Nombre} 😊 Le escribe el equipo de la Dra. Carolina.
Sé que se le cruzó el tiempo — nos pasa a todos.
Le tengo dos espacios: {opción 1} y {opción 2}. ¿Cuál le sirve?
Si ninguno le funciona, dígame qué día de la semana es su mejor día y se lo guardo.
```

### M3 · No-show que prometió avisar (Grupo B2)
```
Hola {Nombre} 👋 Quedamos en que nos avisaba cuando pudiera venir.
Le guardo cupo para {fecha 1} o {fecha 2} — se lo reservo por 48 horas sin compromiso.
Si prefiere, primero hacemos una valoración virtual de 15 min y ya después viene
solo a lo importante. ¿Cuál prefiere?
```

### M4 · Objeción de dinero (Grupo C2)
```
Hola {Nombre}, entiendo perfectamente.
Con su caso tenemos varias formas de resolverlo. La ideal es {premium}, pero también
podemos empezar por {fase/alternativa}, que resuelve {su dolor} y le deja avanzar hoy.
El precio total no cambia — cambia el orden en que lo hacemos.
¿Cuál le acomoda más para empezar?
```

### M5 · Diáspora / turismo dental (Grupo D) ⭐
```
Hola {Nombre} 😊 Le escribe el equipo de la Dra. Carolina Macareno desde Medellín.
Quedamos en que nos avisaba cuando tuviera fecha de viaje.
Le cuento cómo lo hacemos con pacientes que vienen del exterior:
📅 Reservamos su cupo con la fecha tentativa, sin costo.
🦷 Antes del viaje hacemos una valoración virtual y le dejamos su plan y presupuesto listos.
✈️ Cuando llega, aprovechamos cada día — no se pierde tiempo en trámites.
¿Cuál es la fecha, aunque sea aproximada, en que piensa venir? Con eso le bloqueo la agenda.
```

### M6 · Preguntó precio y nunca se le respondió (Grupo E2)
```
Hola {Nombre}, mil disculpas por la demora en responderle 🙏
Le respondo lo que preguntó:
💰 Valoración especializada: $150.000 (incluye {qué incluye})
📍 Estamos en {dirección}, cerca al C.C. El Tesoro, con parqueadero.
¿Le agendo esta semana? Tengo {opción 1} o {opción 2}.
```

---

## 9. Orden de ejecución

### Hoy (lunes 3 de agosto)
1. Responder a **Marianela Gari** (pidió mover la cita al 10-17 de agosto **hoy**) y a **María Eugenia Agudelo** y al contacto de Reino Unido.
2. Enviar el presupuesto a **Pio Santos** — lo pidió por escrito hace 9 días.
3. Escribir a **Sabulón Mosquera** — ya decidió hacerse el tratamiento contigo.
4. Resolver el pago doble de **Pcte Santiago Tobón**.
5. **Eliminar los 4 leads falsos** de Raymond Serpa, Maria Julieta Rivera, Bibiana Buitrago y Stephen Rixchardson — están en tratamiento y no pueden recibir mensajes de lead.
6. **Agendar recordatorio para octubre:** confirmar el viaje de noviembre de Raymond Serpa (coronas) y coordinar con Xiomara.

### Esta semana
5. **Grupo A1 completo (8 personas)** — audio de la Dra., una por una. Es donde está el dinero.
6. **Grupo D, top 5 internacionales** (Cida, Ross, Raymond, Ángel David, Dré) — propuesta de turismo dental escrita.
7. **Grupo E2 (18 personas)** — responder los precios y ubicaciones pendientes. Es trabajo mecánico y de alto retorno.
8. Contactar a **Pcte Zaida Simanca** por la remisión de su familiar del exterior.

### Próximas dos semanas
9. Grupo A2 y A3 (14 personas).
10. Grupo B1 + B2 (20 personas) — tanda de re-agendamiento.
11. Grupo C1 (8 prospectos de alta intención).
12. Secuencia automatizada de Salomé para E1 (22 formularios sin tocar).

### Arreglos de CRM en paralelo
13. Fusionar los **37 duplicados** entre Turismo Dental y Nuevos Pacientes.
14. Sacar los **9 pacientes antiguos** de "Asistió a la cita".
15. Borrar los **4 registros de prueba**.
16. Asignar **responsable** a toda oportunidad en "Asistió a la cita" y "Agenda Cita".
17. Crear la etapa/etiqueta **"Asistió sin iniciar"** con su propio workflow — hoy caen en el limbo.
18. Marcar como **Perdido con motivo** los 5 casos confirmados (Gloria Elena Cardona, Lina Marcela Mazo, Joshua Chapman, Sandra, Diana Cuervo si no responde).

---

## 10. Metas y medición

| Grupo | Personas | Meta de conversión | Resultado esperado |
|---|---|---|---|
| A — Asistieron | 42 | 20% → 8 tratamientos | El grueso de la facturación |
| B — No-show | 74 | 27% → 20 re-agendadas | De ahí salen ~5 tratamientos |
| C — Prospectos | 82 | 18% → 15 valoraciones | ~4 tratamientos |
| D — Diáspora | 29 | 20% → 6 reservas de fecha | Casos de alto ticket |
| E — Leads nuevos | 139 | 18% → 25 conversaciones | ~4 valoraciones |

**Métricas semanales a revisar:** mensajes enviados por grupo · tasa de respuesta · citas agendadas · citas asistidas · **propuestas enviadas por escrito** (esta es la que falta hoy) · tratamientos iniciados con monto.

> **La conclusión de fondo (corregida el 4-ago):** no tienes un problema de leads. Entraron 403 este año y 9 se convirtieron en $129,7M de tratamiento. Tampoco tienes un problema de respuesta: de 339 contactos del embudo, **251 fueron respondidos** y se quedaron callados. Lo que falta es el **cierre**: pedir la decisión con una fecha concreta en vez de terminar en «quedo pendiente». Arreglar eso vale más que cualquier campaña nueva.
>
> **Y el segundo hallazgo:** los cuatro casos más grandes del año — Minerva Moreno ($45M) y su hija Anelisse Dutari ($4M) desde Panamá, y Raymond ($35M) y Xiomara Serpa ($24M) desde Orlando — **no vinieron de la pauta**. Son dos núcleos familiares de turismo dental que valen $108M. Sumado a Stephen Rixchardson ($12M, llegó por ChatGPT), son $120M que no le deben nada a Meta ni a Google Ads.

---

## 11. Registro de cambios

Este documento se actualiza cada vez que aparece un dato nuevo o se detecta un error. Las correcciones se dejan visibles a propósito: sirven para no repetir el mismo diagnóstico equivocado.

### 3-ago-2026 · Versión inicial
Lectura completa del CRM: 2.225 oportunidades, 2.315 conversaciones, 71 formularios y los mensajes de 374 contactos prioritarios. Segmentación en 5 grupos y estrategia por grupo.

### 3-ago-2026 · Corrección 1 — el número de conversión estaba mal
**Se reportó "42 asistieron y solo 4 iniciaron tratamiento". Es falso.** El error fue contar únicamente la etapa `Inicio Tratamiento` dentro del pipeline de leads, ignorando que los tratamientos se registran en el pipeline **Pacientes Actuales** (el modelo de dos pipelines que ya estaba montado).

**Cifra correcta: 9 leads de 2026 iniciaron tratamiento por $129.700.000.**

Regla para el futuro: al medir conversión hay que mirar **los dos pipelines**, siempre.

### 3-ago-2026 · Corrección 2 — Stephen Rixchardson no era un registro de prueba
Estaba clasificado en "registros de prueba a eliminar" por el nombre y por tener 47 mensajes. **Es un paciente real en tratamiento por $12.000.000 que llegó por ChatGPT** (`source:chatgpt`). Es una de las atribuciones GEO más valiosas del negocio. **No borrar.**

### 3-ago-2026 · Corrección 3 — dos pacientes en tratamiento estaban listadas como leads
Maria Julieta Rivera y Bibiana Buitrago aparecían en "conversaciones sin clasificar" del grupo E. Las dos están en tratamiento ($6M y $21,45M).

### 3-ago-2026 · Hallazgo — 4 leads falsos sobre pacientes activos
Raymond Serpa, Maria Julieta Rivera, Bibiana Buitrago y Stephen Rixchardson tienen una oportunidad de `Nuevo Lead` creada **después** de haber empezado tratamiento (21-31 jul). Es el bug del workflow "Crear oportunidad", que reinscribe contactos. **Riesgo: escribirle "¿sigue interesado en una valoración?" a alguien que ya tiene 4 implantes puestos.**

### 3-ago-2026 · Aporte de la Dra. — caso Serpa
Raymond Serpa ya tiene **4 implantes y la primera fase**. Vuelve en **noviembre** por las coronas. Vino con Xiomara. Se agrega recordatorio para octubre.

### 3-ago-2026 · Aporte de la Dra. — caso Moreno / Dutari
**Minerva Moreno es la madre y Anelisse Dutari es la hija**, las dos de Panamá. A Anelisse se le puso un **implante** y su tratamiento está finalizado ($4M). Con esto el patrón de núcleos familiares queda confirmado por segunda vez: **$108M entre las dos familias.**

### 3-ago-2026 · Confirmación de la Dra. — los demás siguen en tratamiento
Los 16 pacientes de la tabla de tratamientos activos (Heidy Lina Castrillón, Claudio De la Rosa, Dora Elisa Zapata, Jenny Gómez, Maria Julieta Rivera, Pcte Fernanda/Lucas, Natalia Martínez, Edwin Bañoz y el resto) **no han terminado**. No se marcan como cierres del mes.

### 3-ago-2026 · ✅ CAMBIO EJECUTADO EN EL CRM — Minerva Moreno
Con autorización de la Dra., se movió la oportunidad de **Minerva Moreno** de `En tratamiento` a **`Tratamiento finalizado`** en el pipeline "Pacientes Actuales".

| Campo | Antes | Después |
|---|---|---|
| Etapa | En tratamiento | **Tratamiento finalizado** |
| Estado | won | won *(sin cambio)* |
| Valor | $45.000.000 | $45.000.000 *(sin cambio)* |

Verificado releyendo del servidor. **Efecto:** los tratamientos finalizados pasan de 7 a **8**, y de $28.915.000 a **$73.915.000**. Es el único cambio que se ha hecho en el CRM en toda esta sesión; todo lo demás fue lectura.

> Para revertirlo, basta con devolver la oportunidad a `En tratamiento` desde el tablero.

### 3-ago-2026 · ✅ CAMBIO EJECUTADO EN EL CRM — duplicados Implantes / Nuevos Pacientes

**Contexto que aportó la Dra.:** ella ya había detectado el problema y **cortó el origen** — hoy todos los leads entran a "Nuevos Pacientes". Lo que quedó pendiente fue limpiar las oportunidades viejas que el pipeline "Implantes - Turismo Dental" ya tenía duplicadas.

**Diagnóstico antes de tocar nada.** De las 46 oportunidades del pipeline Implantes:

| Situación | Cantidad | Verificación |
|---|---|---|
| Duplicadas (el contacto ya existe en Nuevos Pacientes) | 41 | **Las 41 estaban en `Lead nuevo / open`**, es decir sin trabajar. Su gemela en Nuevos Pacientes estaba en etapa **igual o más avanzada en el 100% de los casos**. Cero información única que perder. |
| Solo en Implantes | 5 | Se revisaron una por una antes de actuar |

**Qué se hizo con cada una de las 5 únicas:**

| Contacto | Qué era | Acción |
|---|---|---|
| **Pedro Miguel Zambrano** +1 324 🌎 | **Lead real internacional, nunca trabajado.** Su único registro estaba en Implantes | ✅ **Movido a `Nuevos Pacientes / Nuevo Lead`, estado `open`.** Si se hubiera borrado el pipeline entero, se perdía un lead de turismo dental |
| Stephen Rixchardson | Ya es **paciente en tratamiento** ($12M). Este era un lead viejo sin cerrar | ✅ Descartado. Su registro de tratamiento en Pacientes Actuales queda intacto |
| Prueba safari url · Prueba De atribucion · Sebastian prueba | Registros de prueba | Se dejaron **abiertos a propósito**, para que la Dra. los borre cuando quiera. No se tocaron |

**Ejecución:** 42 oportunidades (las 41 duplicadas + el lead viejo de Stephen) pasaron a estado **`abandoned`**. 42 de 42 exitosas, 0 fallos.

**Resultado verificado releyendo del servidor:**

| Métrica | Antes | Después |
|---|---|---|
| Oportunidades abiertas en Implantes | 46 | **3** (solo las pruebas) |
| Duplicadas abiertas | 41 | **0** |
| Leads reales perdidos | — | **0** |

> **Por qué `abandoned` y no borrado:** descartar es reversible (se devuelve a `open` desde el tablero) y consigue el mismo efecto operativo — salen del tablero activo y dejan de generar seguimientos. **El borrado permanente no lo hago yo**: si quieres eliminarlas del todo, se seleccionan en bloque desde el tablero de Implantes y se borran. Recomendación: dejarlas descartadas al menos unas semanas, por si aparece algo.

### 3-ago-2026 · 📐 MODELO DEFINIDO POR LA DRA. — cómo se registran lead y tratamiento

Esta es la regla oficial. Todo el CRM se audita contra ella.

| Pipeline | Qué representa | Qué valor lleva |
|---|---|---|
| **Nuevos Pacientes** | El **lead**. Se queda ahí y avanza hasta `Asistió a la cita` o `Inicio Tratamiento`. **No se borra ni se mueve al otro pipeline.** | El **pago de la valoración** ($150.000) |
| **Pacientes Actuales** | El **tratamiento**. Cuando el paciente inicia, se crea una oportunidad **nueva** | El **valor del tratamiento completo** |

**Para qué sirve:** el pipeline de leads mide cuántas oportunidades reales hubo y cuánto entró por valoraciones; el de tratamientos mide la facturación. Separados nunca se suman entre sí, y así la auditoría de resultados cuadra.

**Consecuencia importante:** los "leads falsos" sobre pacientes en tratamiento **no se borran** — se mueven a la etapa correcta. La recomendación anterior de eliminarlos era incorrecta bajo este modelo y queda anulada.

### 3-ago-2026 · ✅ CAMBIO EJECUTADO — 4 leads reubicados según el modelo

| Paciente | Antes | Después |
|---|---|---|
| Raymond Serpa | Nuevos Pacientes / `Nuevo Lead` | **Nuevos Pacientes / `Inicio Tratamiento`** |
| Bibiana Buitrago | Nuevos Pacientes / `Nuevo Lead` | **Nuevos Pacientes / `Inicio Tratamiento`** |
| Maria Julieta Rivera | Nuevos Pacientes / `Nuevo Lead` | **Nuevos Pacientes / `Inicio Tratamiento`** |
| **Stephen Rixchardson** | Implantes / `Lead nuevo`, descartado | **Nuevos Pacientes / `Inicio Tratamiento`, activo** |

Los cuatro quedaron además en estado **Ganado**, como manda el modelo del 26-jul (el lead termina en `Inicio Tratamiento` con Estado Ganado). Valor $0 — ver el punto de la línea de corte más abajo.

> **Corrección sobre lo hecho una hora antes:** el lead de Stephen se había descartado junto con los duplicados de Implantes. Bajo el modelo que acaba de definir la Dra., ese lead **sí debe existir** — es el rastro de atribución de un paciente que llegó por ChatGPT y facturó $12M. Se recuperó y se movió al pipeline correcto.

### 3-ago-2026 · ✅ Pipeline "Implantes - Turismo Dental" cerrado del todo
Las 3 pruebas (`Prueba safari url`, `Prueba De atribucion`, `Sebastian prueba`) quedaron descartadas a petición de la Dra. **El pipeline Implantes queda en 0 oportunidades abiertas.**

> Borrado permanente: no se hace desde aquí. Si se quieren eliminar del todo, se seleccionan en el tablero de Implantes y se borran a mano — son 3 registros.

### 3-ago-2026 · ⚠️ AUDITORÍA CONTRA EL MODELO — 19 de 23 pacientes no cumplen

Al aplicar la regla recién definida a los 23 pacientes del pipeline de tratamiento:

| Situación | Cantidad | Detalle |
|---|---|---|
| ✅ Correctos | 4 → **8** tras el arreglo | Juan Esteban Maya, Slawomir Gluch, Xiomara Serpa, Dora Elisa Zapata + los 4 reubicados hoy |
| ❌ **Sin oportunidad de lead** | **15** | Minerva Moreno, Anelisse Dutari, Pcte Heidy Lina Castrillón, Claudio De la Rosa, Jenny Gómez, Natalia Martínez, Pcte Fernanda/Lucas, Oscar Pérez, Horacio Duque, Edwin Bañoz, Santiago Montoya, Sergio Arango, Sofia Cortés, Tatiana Trejos, Juana Salomé Benjumea |

**Y el valor de la valoración casi no se registra:** de 358 oportunidades en Nuevos Pacientes, **solo 14 tienen los $150.000**. Las otras 343 están en $0.

> **Esto NO se rellena, y ya estaba decidido.** Bajo la convención anterior al 1-ago-2026, la oportunidad se movía entera a Pacientes Actuales y se le sobrescribía el valor del tratamiento; la valoración nunca se anotaba aparte. Rellenar $150.000 ahora en pacientes que ya tienen su plata contada en Pacientes Actuales **la contaría dos veces**.
>
> **Línea de corte: 1-ago-2026.** De ahí en adelante rige el modelo de dos pipelines y las métricas se leen limpias. El histórico queda marcado como "convención anterior" y no se compara peso contra peso.
>
> Si algún día se quiere recuperar parte del histórico, el único filtro válido es **asistió a la cita Y no está en Pacientes Actuales** — esos sí son $150.000 que nunca se registraron.

### 3-ago-2026 · 🔴 BUG DEL WORKFLOW REPRODUCIDO EN VIVO

Al reubicar los 4 leads se disparó el flujo y quedó **grabado con marca de tiempo**. Ya no es una sospecha:

| Hora | Qué pasó |
|---|---|
| **17:47:16 – 17:47:19** | Se movieron los 4 leads a `Nuevos Pacientes / Inicio Tratamiento`, estado Ganado |
| **18:03:29 – 18:03:45** | ~16 minutos después, **el flujo creó 4 oportunidades NUEVAS** en `Pacientes Actuales / Inicia Tratamiento`, con **$0** y estado Ganado |

**El diagnóstico de julio estaba incompleto.** Se creía que el flujo *movía* la oportunidad existente de un pipeline a otro. Lo que hace hoy es **crear una oportunidad fantasma duplicada** en Pacientes Actuales cada vez que un lead llega a una etapa de conversión. El paciente termina con **tres registros**: el tratamiento real con su valor, el lead correcto, y un fantasma en $0.

**Efecto en el tablero:** la columna `Inicia Tratamiento` pasó de 3 oportunidades reales a **7**, con 4 tarjetas en $0 que inflan el conteo y hunden el ticket promedio.

**Se limpió:** las 4 fantasmas quedaron descartadas. La columna vuelve a 3 reales por $48.050.000 (Heidy Lina Castrillón, Slawomir Gluch, Juan Esteban Maya).

> **Responsabilidad:** estas 4 fantasmas las provocó esta sesión al mover los leads. No existían antes. Se detectaron y limpiaron en el momento. **Pero la causa no es la edición: es el flujo.** Cualquier persona que mueva un lead a `Inicio Tratamiento` desde el tablero va a generar exactamente lo mismo.

**Estructura real del flujo, vista el 3-ago** (`/automation/workflow/12c8d7d0-bb6f-4713-b060-4c3ab3b66e96`):

- **10 disparadores en paralelo**, de los cuales **9 son «Etiqueta añadida»**: `consulta:…`, `whatsapp`, `web_form`, `lead de …`, `source:i…`, `source:g…`, `source:u…` y dos más de `consulta:`. El décimo es «Formulario enviado».
- **Una sola acción:** `Crear o actualizar oportunidad`.
- No hay condiciones ni filtros entre el disparador y la acción.

**Ahí está la causa.** Las etiquetas no se ponen una sola vez: las añade Salomé, las añaden otros flujos, y se añaden a mano. **Cada etiqueta nueva vuelve a meter al contacto al flujo y vuelve a ejecutar la acción**, aunque el contacto ya sea paciente desde hace semanas.

#### ⚠️ Corrección — este flujo NO creó las fantasmas de hoy

Al abrir su `Historial de inscripciones`, **la inscripción más reciente es del 31 de julio**. El flujo «Crear oportunidad» **no se ejecutó el 3 de agosto**, así que no pudo crear las 4 fantasmas de las 18:03.

**Hay un segundo flujo, todavía sin identificar, que sí lo hizo.** El patrón apunta a uno disparado por **cambio de etapa de oportunidad**: cuando un lead llega a `Inicio Tratamiento` en Nuevos Pacientes, crea automáticamente la oportunidad de tratamiento en Pacientes Actuales. Es decir, **alguien ya automatizó el modelo de dos pipelines** — pero sin comprobar si el paciente YA tiene una oportunidad de tratamiento. Por eso duplica.

**Cómo encontrarlo:** `Automatización → Flujos de trabajo`, abrir cada flujo y mirar `Registros de ejecución` filtrado al 3-ago alrededor de las 18:03. El sospechoso principal es el flujo de los $150.000 que la Dra. actualizó hoy, o cualquiera cuyo disparador sea «Oportunidad — cambio de etapa».

> El listado de flujos no se puede leer de forma automatizada (va en un marco anidado que no carga). Lo tiene que abrir la Dra.

**Qué hay que revisar, en orden:**
1. **Pestaña `Configuración` → reinscripción.** Buscar «Permitir que los contactos vuelvan a entrar en el flujo» / «Re-inscripción» / «Permitir múltiples inscripciones». **Debe quedar desactivada.** Es el arreglo de una sola casilla.
2. **Una condición antes de la acción.** Añadir un paso `Si/Entonces` que corte el flujo si el contacto ya tiene oportunidad, o si tiene la etiqueta `en-pipeline`. Así el flujo sigue creando leads nuevos pero deja en paz a los que ya existen.
3. **Revisar el estado Borrador/Publicar.** El interruptor está a la derecha del título. Si el flujo quedó en **Borrador**, los cambios recientes —incluida la automatización de los $150.000— **no están corriendo en producción**.
4. **`Historial de inscripciones`** — filtrar por los últimos días para ver cuántos contactos se reinscribieron. Confirma el tamaño real del problema.

⚠️ **No apagar el flujo:** es la entrada de leads. Sin él ningún lead nuevo genera oportunidad.

### 3-ago-2026 · Aporte de la Dra. — la valoración no siempre se cobró

Los $0 del histórico **no son un fallo de digitación**. Al principio la valoración **era gratis** y se dieron muchas de prueba; el cobro de $150.000 se instauró después. Los datos lo confirman: el valor aparece por primera vez en abril (2 casos) y se vuelve habitual **desde mediados de junio**.

| Mes | Llegaron a `Asistió a la cita` / `Inicio Tratamiento` | Con valor registrado |
|---|---|---|
| ene | 14 | 0 |
| mar | 1 | 0 |
| abr | 5 | 2 |
| may | 4 | 0 |
| **jun** | 14 | **9** |
| **jul** | 12 | **4** |

**Lo que sí es un problema:** en julio solo 4 de 12 quedaron con el valor, aunque ya se cobraba a todas. El registro es inconsistente, no el cobro.

**La Dra. ya actuó:** actualizó el flujo para que **los $150.000 se pongan automáticamente al pasar a `Asistió a la cita`**. Eso resuelve el problema hacia adelante y hay que verificar en los próximos días que esté disparando bien.

> **Caso de $100.000 aclarado:** Martina Gómez Montes (26-jun) pagó $100.000 porque **la paciente es una niña y la Dra. le hizo el favor**. No es un error de digitación ni una tarifa vigente — es una excepción puntual. No usarlo como referencia de precio ni "corregirlo" a $150.000.

### 3-ago-2026 · 📍 RESPUESTA A SEBASTIÁN — ¿en qué campo se tipifica la fuente?

**Pregunta:** *"¿cuál es el campo donde estás tipificando la fuente? Ejemplo: una persona nos encontró en ChatGPT, ¿eso en qué campo lo tipifica, aparte de ponerle una etiqueta?"*

**Respuesta corta: el campo existe, está bien diseñado, y está vacío.**

Se llama **`Fuente del Lead`** (`contact.fuente_del_lead`), es de tipo lista desplegable y ya tiene **17 opciones cargadas**, incluida exactamente la que Sebastián menciona:

`Búsqueda con IA (ChatGPT, Grok, Gemini)` · `Google Orgánico` · `Google Ads` · `Meta Ads` · `Instagram Orgánico` · `Facebook Orgánico` · `Ficha de Google / Maps` · `Referido por paciente` · `Referido por colega / médico` · `Consultorio Local` · `WhatsApp directo — origen desconocido` · `Otra red social (TikTok, LinkedIn, X)` · `Plataforma de turismo dental (Dental Departures, TourSalud)` · `Doctoralia` · `CuraPay` · `PROYECTIA Auditoría` · `Otro`

**Qué tan lleno está.** Muestra de 120 contactos con oportunidad en Nuevos Pacientes:

| Campo | Contactos con dato | Comentario |
|---|---|---|
| **`Fuente del Lead`** (el correcto) | **1 de 120** | Y ese único es un registro llamado "Prueba" |
| `Fuente del contacto` (texto libre) | **0 de 120** | Campo duplicado, sin uso |
| `UTM Source` | 48 de 120 | Solo se llena en formularios web con UTMs |
| Etiqueta `source:*` | 3 de 120 | Es lo que hoy se usa a mano |

**Dónde vive hoy la fuente, repartida en 4 sitios que no se hablan entre sí:**

1. **Etiquetas** — `source:chatgpt`, `source:grok`, `source:google_organic`, `source:instagram`. Es lo único que funcionó para los casos grandes, pero se pone **a mano** y no es reportable.
2. **Campos UTM** (`UTM Source`, `Medium`, `Campaign`, `Term`, `Content`, `FBCLID`, `Landing Page`) — se llenan solos, pero **solo si el lead viene de formulario web**. Los de WhatsApp directo llegan vacíos.
3. **Campo `source` de la oportunidad** — texto libre con el nombre del formulario (`Form Diseño`, `Form Implantes - Meta Ads`, `Base de datos`, `REMISION`, `PACIENTE ANTIGUO`). Tiene basura: hay registros con `|  |` y `-  -  |  |`.
4. **La marca en el primer mensaje de WhatsApp** — `[fuente: … | p: …]`, que pone `WhatsAppLink` del sitio.

**Ejemplos reales de la incoherencia:**

| Paciente | Fuente del Lead | Etiquetas | `source` de la oportunidad |
|---|---|---|---|
| Stephen Rixchardson ($12M) | *(vacío)* | `source:chatgpt` | Form Implantes Turismo Dental |
| Xiomara Serpa ($24M) | *(vacío)* | `source:grok`, `source:google_organic` | *(vacío)* |
| Raymond Serpa ($35M) | *(vacío)* | `lead-whatsapp` | *(vacío)* |
| Minerva Moreno ($45M) | *(vacío)* | `no-lead` | Base de datos |
| Freddy Pelaez | *(vacío)* | `lead de pauta` | Form Diseño + UTMs completos (fb / paid) |

**Los 4 tratamientos más grandes del año no tienen fuente tipificada en ningún campo reportable.** Solo etiquetas puestas a mano.

**Lo que hay que hacer:**
1. **Llenar `Fuente del Lead` siempre.** Es un desplegable de 17 opciones: son 2 segundos por contacto. Sin eso no hay informe de ROI por canal posible.
2. **Automatizarlo donde se pueda:** un flujo que traduzca `UTM Source = fb` → `Meta Ads`, `utm_source = google` + `medium = organic` → `Google Orgánico`, etiqueta `source:chatgpt|grok|gemini` → `Búsqueda con IA`.
3. **Para lo que no se puede automatizar** (WhatsApp directo, remisiones, IA), la única fuente fiable es **preguntar**: «¿cómo me encontraste?» como pregunta fija del primer contacto de Salomé, guardada en este campo.
4. **Eliminar `Fuente del contacto`** — está en 0 de 120 y solo genera confusión sobre cuál es el campo bueno.

### 3-ago-2026 · 🔧 CÓMO SE ARREGLA LA ATRIBUCIÓN — plan en 3 capas

El problema no se arregla con una sola cosa, porque tiene tres partes distintas: el histórico sucio, los leads que entran mañana, y lo que ninguna máquina puede saber.

#### Capa 1 — Rellenar el histórico con datos duros (138 de 361 contactos)

Se puede deducir la fuente **sin inventar nada** para 138 contactos, cruzando etiquetas y campos UTM que ya existen:

| Se llenaría con | Contactos | De dónde sale el dato |
|---|---|---|
| `Meta Ads` | 134 | `UTM Source` = fb/ig/an **y** `UTM Medium` = paid |
| `Búsqueda con IA (ChatGPT, Grok, Gemini)` | 2 | etiqueta `source:chatgpt` / `source:grok` |
| `Google Orgánico` | 1 | etiqueta `source:google_organic` |
| `Instagram Orgánico` | 1 | etiqueta `source:instagram` |

**Los 223 restantes se dividen así, y cada grupo necesita una decisión:**

| Grupo | Cuántos | Qué se sabe | Propuesta |
|---|---|---|---|
| Sin ningún dato + `source` en `\|  \|` | 167 | Nada. El `\|  \|` es el bug del merge tag roto | Marcar `WhatsApp directo — origen desconocido`. **Es más honesto que dejarlo vacío**: distingue «no se sabe» de «no lo hemos llenado» |
| Solo etiqueta `lead-whatsapp` | 10 | Llegó por WhatsApp | Marcar `WhatsApp directo — origen desconocido` |
| Formulario web sin UTM ni FBCLID | 25 | Llenaron formulario, pero **no hay rastro de campaña**. Se verificó: 25 de 29 no tienen FBCLID | **Dejar vacío.** No se puede afirmar que sean de pauta. Que Salomé pregunte |
| `Base de datos` / paciente antiguo | 10 | No eran leads de campaña | `Consultorio Local` |
| `REMMISION DRA MERCEDES` | 1 | Remisión de colega | `Referido por colega / médico` |

> **Nada de esto se ejecuta sin autorización de la Dra.** La capa 1 son 138 registros con dato duro; el resto son criterios que ella decide.

#### Capa 2 — Que se llene solo de aquí en adelante (especificación para Sebastián)

Un flujo nuevo, **`Tipificar fuente del lead`**, que corre una sola vez por contacto:

- **Disparador:** `Contacto creado` (y como red de seguridad, `Etiqueta añadida` con reinscripción **desactivada**).
- **Acción:** `Actualizar campo del contacto` → `Fuente del Lead`, con ramas `Si/Entonces` en este orden de prioridad:

| Si… | Entonces `Fuente del Lead` = |
|---|---|
| etiqueta contiene `source:chatgpt`, `source:grok`, `source:gemini`, `source:perplexity` | `Búsqueda con IA (ChatGPT, Grok, Gemini)` |
| `UTM Source` = `gbp` | `Ficha de Google / Maps` |
| `UTM Source` = `google` y `UTM Medium` = `cpc`/`paid` | `Google Ads` |
| `UTM Source` = `google` y `UTM Medium` = `organic` | `Google Orgánico` |
| `UTM Source` ∈ {`fb`,`ig`,`an`,`msg`} y `UTM Medium` = `paid` | `Meta Ads` |
| `UTM Source` = `instagram` sin medium pago | `Instagram Orgánico` |
| tiene `FBCLID` pero no UTMs | `Meta Ads` |
| nada de lo anterior | `WhatsApp directo — origen desconocido` |

**Clave: la última rama.** Que nunca quede vacío. Un «desconocido» explícito se puede contar y perseguir; un vacío no.

#### Capa 3 — Lo que ninguna máquina puede saber

El recorrido real de los casos grandes es **IA primero, Google después**: la persona le pregunta a ChatGPT, sale el nombre de la Dra., y entonces la googlea por marca. **Cuando llega al sitio ya no hay referrer de ChatGPT**, así que el marcador la etiqueta como orgánica y le da el crédito a Google.

Ninguna automatización arregla eso. La única atribución fiable es preguntar:

> **«¿Cómo nos encontraste?»** como pregunta fija del primer contacto de Salomé, con la respuesta guardada en `Fuente del Lead`.

Es la pregunta que reveló que Xiomara venía de Grok y Stephen de ChatGPT. Sin ella, esos $36M se le habrían acreditado a Google.

#### Limpieza pendiente

- **Borrar el campo `Fuente del contacto`** (texto libre, 0 de 120 lleno). Tener dos campos con nombre casi idéntico garantiza que se llene el equivocado.
- **Arreglar el merge tag roto** que escribe `|  |` en el campo `source` de la oportunidad — ver el bug ya documentado del campo Fuente.

### 3-ago-2026 · Corrección de la Dra. sobre el caso Raymond

*"El caso de Raymond creo que lo hicimos a mano, porque ahí nos dimos cuenta de que si pasábamos la oportunidad de `Asistió` a `Inicio Tratamiento` se borraba la oportunidad y solo aparecía en Pacientes Actuales, entonces corregimos eso a mano."*

Esto encaja con el diagnóstico de julio: al llegar a `Inicio Tratamiento`, la oportunidad **se movía** al otro pipeline y desaparecía del embudo de adquisición.

**Pero hoy el comportamiento fue distinto:** los 4 leads que se movieron a las 17:47 **se quedaron** en Nuevos Pacientes, y además aparecieron 4 registros nuevos en Pacientes Actuales a las 18:03. O sea que hoy **duplicó** en vez de mover.

Sea cual sea la variante, la conclusión operativa es la misma: **algo reacciona automáticamente cuando un lead entra a `Inicio Tratamiento`**, y hay que identificar qué. Queda pendiente revisar los `Registros de ejecución` de los demás flujos alrededor de las 18:03 de hoy.

### 3-ago-2026 · ▶️ EJECUTADO POR LA DRA. — audios enviados al Grupo A

La Dra. envió los audios personales al **Grupo A (asistieron y no iniciaron)**. Primer toque hecho.

**Estado al momento de registrarlo:** ninguno de los 22 contactos del Grupo A aparece todavía con respuesta en las conversaciones del CRM. Es normal, acaban de salir.

#### ⚠️ Verificar por dónde se enviaron

Si los audios salieron del **WhatsApp personal** y no del CRM, el CRM no los registra. Tres consecuencias:

1. No queda constancia de quién fue contactado ni cuándo.
2. Estefanía o Salomé pueden volver a escribirle al mismo paciente.
3. No se puede medir la tasa de respuesta de esta acción, que es justo lo que hay que saber para repetirla.

**Si fue por fuera:** anotarlo al menos como nota en cada contacto, o mover la oportunidad de etapa para dejar rastro.

#### Protocolo de seguimiento del Grupo A

| Cuándo | Qué hacer |
|---|---|
| **Día 0** (hoy) | ✅ Audio enviado |
| **Día 2** | A quien no respondió: **enviar la propuesta escrita igual**, sin esperar respuesta. Los 8 del grupo A1 llevan semanas esperando precio; el audio abre, el número cierra |
| **Día 5** | Segundo toque solo a quien no abrió ni respondió. Cambiar de canal: llamada de Estefanía |
| **Día 10** | Sin respuesta tras 3 toques → mover a nurturing, **no a Perdido** |

**Al recibir respuesta, mover la oportunidad en el acto:**
- Pide precio o pregunta algo → sigue en `Asistió a la cita`, y se manda la propuesta el mismo día
- Acepta agendar → crear la cita y mover a `Agenda Cita`
- Dice que no puede ahora → `Perdido` **con motivo**, y fecha de recontacto
- No responde → se queda donde está, no se toca

#### Cómo se ejecutó realmente (aclaración de la Dra.)

No fue solo audio: **llamó a varios del grupo A1, y el audio se lo envió a quienes no contestaron la llamada.** Llamada primero, audio como respaldo. Vale la pena registrarlo porque es un orden distinto —y mejor— del que proponía el plan.

#### ⚠️ El contador de "sin leer" del CRM NO sirve como lista de pendientes

Se levantaron como urgentes tres conversaciones con mensajes sin leer (Juan Cuervo, Bibiana Buitrago, Maria Eugenia Agudelo). **Falsa alarma: la Dra. ya había hablado con los tres.**

**Por qué pasa:** cuando el equipo responde desde el WhatsApp personal, el CRM nunca marca la conversación como leída. El contador queda inflado para siempre y no distingue "nadie ha respondido" de "ya se atendió por fuera".

**Cómo aplicarlo:** no usar `unreadCount` para armar listas de pendientes. La única señal fiable es **la etapa de la oportunidad** y las notas del contacto. Esto refuerza lo de arriba: si el trabajo pasa por fuera del CRM, el CRM deja de servir para dirigir el trabajo.

#### Y el caso de Juan Cuervo se leyó mal

Se interpretó *"ya tres se han reventado y me quedan pocos"* como dientes fracturados y un caso nuevo de rehabilitación. **No lo es.** Aclaración de la Dra.: **se le fracturó un aditamento de un dispositivo que se le entregó hace cerca de un año.** Vive en otra ciudad, así que se le va a **enviar el repuesto**.

Es un caso de **posventa**, no un lead. Va en `Pacientes Actuales / Revisión (Retomar)`, no en el embudo de adquisición.

**Lección:** los mensajes sueltos de pacientes antiguos se parecen mucho a los de un lead nuevo. Antes de clasificar una conversación como oportunidad de venta, mirar si el contacto ya tiene historia de tratamiento.

**Cabo suelto que conviene no perder:** confirmar que el repuesto **se envió, llegó y resolvió**. Un envío a otra ciudad es fácil de dar por hecho, y un paciente al que se le fractura un aditamento del año pasado es exactamente el que hay que atender rápido: es garantía, reputación y una reseña de Google en juego.

### 3-ago-2026 · 🔍 GRUPO A2 al detalle — para que la Dra. escriba personalizado

La Dra. va a escribirle ella misma al A2 porque **varios ya tienen presupuesto y son tratamientos distintos**. Se releyeron las 10 conversaciones completas y esto es lo que hay en cada una.

#### El patrón que aparece en 6 de 10: no es el precio, es la radiografía

| Paciente | Qué se le dijo / qué falta |
|---|---|
| Freddy Pelaez | *"Quedamos pendientes de la radiografía"* |
| Gabriela Muñoz | *"Tienes unas radiografías pendientes para iniciar tu tratamiento"* |
| Carolina Agudelo | *"Estamos pendientes de tus radiografías para hacer la planeación de los alineadores"* |
| Juan Carlos Álvarez | Cita de radiografía agendada en Diagnóstico Oral 3D sede Conquistadores. *"¿Te tomaste las radiografías?"* |
| Sara Gómez | *"¿Te pudiste tomar la radiografía?"* |
| Leydy Cardona | *"Allá no encuentran como la referencia"* — problema con la orden |

**Seis de diez están frenados en el mismo escalón, y no es dinero.** Es un trámite: ir a tomarse la radiografía en otro sitio. Cada uno lo pospone y el caso se enfría solo.

**Esto cambia el mensaje.** A este grupo no hay que convencerlo de nada ni recordarle el precio: hay que **quitarle de encima la radiografía**. Agendársela en concreto (día y hora en el centro de la torre vecina), reenviarle la orden, o resolver el caso de Leydy, a quien no le encuentran la referencia.

#### Ficha por paciente

| Paciente | Tratamiento hablado | Estado real | Gancho para el mensaje |
|---|---|---|---|
| **Gabriela Muñoz** +57 324 403 4772 | **Dos tratamientos** | ⭐ **Presupuestos YA ENVIADOS.** *"Le adjunté los presupuestos. Si se hacen los dos, tendrían un descuento adicional"* | Es la más avanzada del grupo. Retomar por el descuento por los dos y por la radiografía. **Ojo: aparece un tal Jairo con cita aparte, posible acompañante o familiar** |
| **Raul Sarmiento** +57 311 725 7342 | Plan ya definido | ⭐ *"Dejamos su plan listo y sé que quedó…"* | **Registró a dos personas: él y Zulay Sabala León** (que aparece aparte en el Grupo A). Es un núcleo, tratarlo como tal |
| **Martina Gómez Montes** +57 300 662 2769 | **Ortodoncia** (es una niña) | Se revisaron sus estudios, se definió ortodoncia. El ortodoncista iba el jueves 23 | Preguntar si alcanzó a verlo. Valoración cobrada en $100.000 como favor |
| **Carolina Agudelo** +57 321 550 7290 | **Alineadores** | Falta radiografía para planear cuántos alineadores | ⚠️ En un mensaje la llamaron **"Laura"**. Verificar el nombre antes de escribir |
| **Andrea Gómez** +57 315 245 5901 | **Limpieza + diseño de sonrisa** | Lo dijo ella textual: *"Estoy interesada en la limpieza y un diseño de sonrisa"* | Entrada fácil: empezar por la limpieza y de ahí al diseño |
| **Sara Gómez** +57 310 605 7964 | Valoración general + limpieza | Tiene póliza (Sura / Colsanitas) → **20% de descuento** aplicable | Recordarle el beneficio de la póliza. Radiografía pendiente |
| **Juan Carlos Álvarez** +57 314 873 4326 | Sin definir | Radiografía agendada y nunca tomada | Reagendarle la radiografía |
| **Freddy Pelaez** +57 313 890 8487 | Diseño / dientes torcidos | Radiografía pendiente. Formulario: presupuesto **$500–$2.000 USD**, *"consulté antes pero no me convencieron"* | Presupuesto modesto y declarado: entrar por fases, no por el premium |
| **Leydy Cardona** +57 300 230 4025 | Sin definir | 92 mensajes, dos citas reprogramadas, y *"allá no encuentran como la referencia"* | El problema es la orden de la radiografía. Resolver eso primero |
| Sergio Alberto Montoya +57 310 448 0605 | Pidió **opciones**, no precio | Sin conversación localizable en el CRM | Verificar por qué no aparece su conversación |

#### Dos núcleos familiares más

Aparecen otra vez, igual que Serpa y Moreno/Dutari:

- **Raúl Sarmiento + Zulay Sabala León** — él registró los datos de los dos
- **Gabriela Muñoz + Jairo** — cita aparte a nombre de Jairo el mismo día

Al escribirles, preguntar por el acompañante. Ya está probado que es donde está el dinero.

---

## 12. 🔴 CORRECCIÓN MAYOR (4-ago-2026) — el diagnóstico central estaba equivocado

La Dra. detectó el error revisando a Nilsa Orozco: el informe decía que **nunca se le respondió**, y sí se le respondió.

### Qué falló en el método

La columna «¿se habló?» se construyó contando mensajes de salida **que tuvieran `userId`**, asumiendo que eso marcaba «lo escribió un humano».

**Ese campo viene vacío SIEMPRE.** Nilsa tiene **15 mensajes de salida** y `userId` en cero. La métrica no medía nada, y de ahí salió la afirmación falsa de que a varios «nunca se les respondió».

También había ruido: mensajes de sistema (`Opportunity updated`, `Opportunity status changed`) se contaban como conversación.

**Criterio correcto, ya aplicado:** la señal es **la dirección del último mensaje real**, filtrando los de sistema. Si el último es entrante, esperan por nosotros. Si es saliente, la pelota está en su cancha.

### El titular del plan era falso

Se afirmó que **«al menos 6 personas se quedaron esperando un presupuesto que nunca llegó»**. Es incorrecto. Verificado uno por uno:

| Paciente | Lo que realmente pasó |
|---|---|
| **Gina Gil** | **SÍ recibió presupuesto:** *"si realizas el pago anticipado te queda todo en total en **$5.600.000**, te incluye alineadores, blanqueamiento y…"* |
| **Nora Bastidas** | **SÍ recibió presupuesto:** mismo paquete, **$5.600.000** con alineadores y blanqueamiento |
| **Sabulón Mosquera** | Le respondieron: *"estaré súper atenta para programar la cita de inicio"* |
| **Pio Santos** | Le escribieron el 4-ago proponiendo las exodoncias inferiores |
| **Tannia Silva** | Le escribieron pidiéndole horario disponible |
| **Marisol Quiroga** | Le respondieron: *"apenas las recibamos te contamos"* |
| Gustavo Montoya | El último mensaje fue de él, un *"gracias"* de cortesía |

**Las propuestas sí se enviaron.**

### El diagnóstico real, con los números corregidos

De **339 contactos** en el embudo de adquisición (excluidos los 23 que ya son pacientes):

| Situación | Cuántos | Qué significa |
|---|---|---|
| **Respondido y en silencio** | **251** | Se les contestó y dejaron de escribir |
| Nunca respondió | 59 | Les escribimos y jamás contestaron nada |
| Última palabra suya | 21 | Y casi todos son cierres de cortesía: *"gracias"*, *"listo"*, *"muy amable"* |
| Nunca contactado | 8 | Cero mensajes de salida |
| Sin mensajes | 8 | — |

**Nadie está represado esperando respuesta.** El problema no es la velocidad de respuesta ni las propuestas: es que **la conversación se muere después de responder**.

Las conversaciones terminan en *"quedo pendiente"*, *"estaré atenta"*, *"apenas recibamos te contamos"*. Sin fecha, sin siguiente paso, sin pedir una decisión. **Se responde muy bien y no se cierra.**

**Lo que cambia en la estrategia:** no hay que mandar presupuestos, hay que **pedir la decisión con una fecha concreta**. El mensaje deja de ser «te mando el plan» y pasa a ser «¿arrancamos el martes o el jueves?».

---

## 13. Estrategia de mensajes EN GRUPO (4-ago-2026)

La Dra. pidió mensajes por grupos, no individuales. El eje de tratamiento **no sirve** para segmentar: 288 de 339 no tienen tratamiento definido en el CRM, porque solo 71 llenaron formulario.

**El único eje limpio es etapa + estado de la conversación.** Da 6 grupos homogéneos, y cada uno admite un mismo mensaje para todos.

| # | Grupo | Personas | Qué tienen en común |
|---|---|---|---|
| **G1** | Asistió a la cita · respondido y en silencio | **32** | Vinieron, tienen plan o presupuesto, no arrancaron |
| **G2** | Agendó cita · respondido y en silencio | **65** | Agendaron, no asistieron, se les respondió |
| **G3** | Prospecto · respondido y en silencio | **79** | Hablaron, resolvieron dudas, nunca agendaron |
| **G4** | Lead nuevo · respondido y en silencio | **96** | Primer contacto atendido, no avanzaron |
| **G5** | Nunca respondió (todas las etapas) | **59** | Les escribimos y jamás contestaron |
| **G6** | Nunca contactado | **8** | Cero mensajes de salida. Empezar de cero |

### Los mensajes

**G1 · Asistieron y no arrancaron (32) — el del dinero**
```
Hola {Nombre} 😊 Le habla la Dra. Carolina.
Estuve revisando su caso y sigo con la misma recomendación que hablamos.
No le escribo para insistirle con el plan: le escribo para ponerle fecha.
Tengo dos espacios para arrancar: {fecha 1} y {fecha 2}.
¿Cuál le sirve? Si ninguno le cuadra, dígame usted el día y se lo reservo.
```

**G2 · Agendaron y no asistieron (65)**
```
Hola {Nombre} 👋 Sé que se le cruzó la cita, nos pasa a todos.
Le tengo cupo el {fecha 1} y el {fecha 2}. Se lo guardo 48 horas sin compromiso.
Y si venir es lo complicado, hacemos primero una valoración virtual de 15 minutos
y ya después viene solo a lo importante. ¿Cuál prefiere?
```

**G3 · Prospectos que no agendaron (79)**
```
Hola {Nombre} 😊 Hace un tiempo hablamos de su caso y quedamos ahí.
Le escribo con una sola pregunta: ¿sigue queriendo resolverlo?
Si es que sí, le agendo la valoración esta semana y salimos de dudas.
Si es que no por ahora, dígamelo con confianza y no la molesto más.
```

**G4 · Leads nuevos que no avanzaron (96)**
```
Hola {Nombre} 👋 Le escribe el equipo de la Dra. Carolina Macareno,
rehabilitadora oral en Medellín.
Usted nos escribió por {tema} y no alcanzamos a concretar.
¿Sigue buscando resolverlo? Con gusto le agendo una valoración para que la Dra.
revise su caso y le dé un plan claro. ¿Le sirve esta semana o la próxima?
```

**G5 · Nunca respondieron (59) — cambiar de canal**
```
Hola {Nombre}, le hemos escrito un par de veces y quizá no le llegan los mensajes.
Si prefiere, la llamamos: dígame a qué hora le queda bien.
Y si ya no le interesa, respóndame «no» y no volvemos a escribirle. Sin problema.
```

**G6 · Nunca contactados (8) — primer contacto real**
```
Hola {Nombre} 👋 Le escribe el equipo de la Dra. Carolina Macareno.
Vi que se interesó en {tema} y quiero pedirle disculpas: no le respondimos a tiempo.
¿Sigue buscando resolverlo? Le agendo la valoración cuando usted diga.
```

### Reglas para que esto funcione

1. **Mandar en tandas de 20 a 30 por día, no los 339 de una.** Si entran 300 respuestas el mismo día no hay quién las atienda, y una respuesta sin contestar es peor que no haber escrito.
2. **Orden por valor:** G1 primero, luego G2, después G3. El G4 y el G5 pueden ir con Salomé.
3. **Toda respuesta se cierra con fecha.** Es el error que causó este problema: responder bien y no pedir la decisión.
4. **Registrar el resultado en el CRM el mismo día**, o en dos semanas volvemos a no saber quién quedó en qué.

---

## 14. Formulario del sitio — dos ajustes pendientes (4-ago-2026)

El formulario de `dracarolinamacareno.com` **ya funciona**: llega el correo y se crea la oportunidad en GHL (caso «Juan Manuel», creado por flujo de trabajo, fuente `CRM Workflows`, etiquetas `web_form`, `source:direct`, `consulta:diseño de sonrisa digital`). Quedan dos cosas.

### 14.1 · La oportunidad nace con $150.000 y no debería

Se crea en `Nuevo Lead` con **Valor $150.000**. Según el modelo, ese valor es **el pago de la valoración** y solo debe aparecer **cuando el paciente llega a `Asistió a la cita`**, porque es cuando efectivamente pagó.

Mientras nazca con valor, la columna `Nuevo Lead` suma plata que nadie ha pagado y el pronóstico queda inflado.

**Arreglo, dos pasos en GHL:**

1. En el flujo que crea la oportunidad, abrir la acción **`Crear o actualizar oportunidad`** y **dejar el campo «Valor de la oportunidad» vacío** (o en 0).
2. Crear un flujo nuevo, **`Valor de valoración al asistir`**:
   - **Disparador:** `Oportunidad — cambio de etapa`, con filtro **etapa = `Asistió a la cita`**.
   - **Acción:** `Actualizar oportunidad` → Valor = **150000**.
   - **Reinscripción: desactivada.**

⚠️ **Cuidado con este disparador.** Ya hay en la cuenta un flujo que reacciona a cambios de etapa y **crea oportunidades fantasma duplicadas** en Pacientes Actuales (ver sección 12). Antes de publicar este nuevo flujo, conviene identificar aquel. Si no, cada movimiento a `Asistió a la cita` puede generar basura.

**Cómo verificar:** mover un contacto de prueba a `Asistió a la cita` y comprobar que (a) el valor pasa a $150.000 y (b) **no aparece ninguna oportunidad nueva** en Pacientes Actuales.

### 14.2 · Al paciente del formulario web no le llega el mensaje de gracias

**Lo que sí existe hoy:** al enviar el formulario, la web muestra una pantalla de confirmación con un botón de WhatsApp que **ya lleva la marca de atribución** (`WhatsAppLink`, en `components/sections/ContactSection.tsx`). Eso está bien y no hay que tocarlo.

**Lo que falta:** el mensaje que llega **al WhatsApp del paciente**, como pasa con las landings de implantes y diseño.

La diferencia es de origen: las landings usan un **formulario nativo de GHL**, y hay un flujo enganchado a «Formulario enviado» que manda el saludo. El formulario del sitio entra por **webhook**, y ningún flujo lo escucha.

**Arreglo en GHL:** duplicar el flujo de gracias que ya usan las landings y cambiarle el disparador a la entrada del webhook. La forma más estable de dispararlo es por **etiqueta**, que el webhook sí pone:

- **Disparador:** `Etiqueta añadida` = `web_form`.
- **Acción 1:** `Enviar WhatsApp` con el mensaje de gracias.
- **Acción 2:** `Espera` 1 hora → `Si/Entonces`: si no respondió, avisar a Estefanía.
- **Reinscripción: desactivada.**

**Mensaje sugerido**, con el mismo espíritu del de las landings:
```
Hola {{contact.first_name}} 😊 Gracias por escribirnos.
Recibimos su solicitud sobre {{consulta}} y ya la estamos revisando.
Si quiere adelantar, respóndame por aquí y le cuento las opciones para su caso.
```

### ⚠️ Lo que hay que verificar antes de darlo por hecho

**WhatsApp solo entrega mensajes libres dentro de las 24 horas siguientes al último mensaje del paciente.** Quien llena el formulario web **nunca ha escrito primero**, así que su ventana está cerrada: un mensaje libre **no se entrega**, y el CRM lo muestra igual como enviado.

Dos preguntas que hay que responder antes de montarlo:

1. **¿El mensaje de gracias de las landings usa una plantilla aprobada?** Si sí, se reutiliza esa misma. Si es libre, conviene comprobar que de verdad está llegando y no solo apareciendo como enviado.
2. Si toca plantilla, hay que **registrarla y hacerla aprobar** antes. Es el mismo requisito de la difusión masiva de la sección 13.

**Prueba de 2 minutos:** llenar el formulario con un número propio que nunca haya escrito al WhatsApp de la clínica y ver si el mensaje llega al teléfono. Si llega, no hay problema de ventana. Si no llega, es plantilla.

### Pendientes abiertos
1. **Edwin Bañoz:** en tratamiento con valor $0. Falta registrar el monto.
2. **262 de 288 oportunidades** de Pacientes Actuales sin valor registrado. Sin eso el CRM no puede medir facturación.
3. ~~Eliminar los 4 leads falsos.~~ ✅ **RESUELTO** — se reubicaron en `Inicio Tratamiento` según el modelo. Sigue pendiente **revisar el disparador del workflow** que los creó, para que no se repita.
4. ~~Borrar los 3 registros de prueba.~~ ✅ Descartados. Borrado permanente queda a mano de la Dra.
5. Confirmar si **Marisol Quiroga** (+57 314 313 1120 y +57 310 764 7609) son la misma persona duplicada.
6. **Los 15 pacientes en tratamiento sin oportunidad de lead: no se tocan.** Son de la convención anterior (pacientes antiguos, remisiones y base histórica). Crearles un lead retroactivo ensuciaría la conversión de 2026 con gente que nunca fue lead de campaña. La auditoría limpia arranca con los que entren **desde el 1-ago-2026**.
7. ~~Valor de la valoración en el histórico.~~ **Decidido: no se rellena** (contaría doble). Lo que sí hay que hacer de aquí en adelante: que Estefanía anote los **$150.000 al momento de cobrar la valoración**, no después.
8. Decidir si el pipeline **"Implantes - Turismo Dental"** se archiva del todo. Ya está en **0 oportunidades abiertas**.
