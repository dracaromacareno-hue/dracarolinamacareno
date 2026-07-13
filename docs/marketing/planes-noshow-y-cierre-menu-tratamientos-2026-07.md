# Planes de rescate: No-show + "Asistió sin iniciar" + Menú de tratamientos
### Dra. Carolina Macareno · Ejecución operativa (para Estefa + Dra.) · Julio 2026

> Contexto: el CRM se está organizando este mes (primera vez que se ordena cada lead). De ~230 oportunidades, muchas no continúan, no contestan o no quieren seguir (atrición normal). El foco NO es traer más leads, es (1) limpiar el pipeline, (2) enseñarle al algoritmo a traer gente que sí inicia, y (3) rescatar a los dos segmentos calientes: los que pidieron cita y no fueron, y los que fueron y no iniciaron. Meta: que inicien tratamiento, sin bajar precio, ofreciendo otras opciones clínicas.

---

## PARTE 0 — Higiene del CRM (para que dejen de aparecer "abiertos")

El dashboard dice "260 abiertas / 0 ganadas" porque falta **cerrar** cada oportunidad con un estado. Regla simple:

| Situación | Qué marcar en GHL | Efecto |
|---|---|---|
| Inició tratamiento (pagó o empezó) | **Ganado** + cargar el **monto** | Deja de estar abierta + mide facturación |
| No contesta tras 3 intentos / no quiere / no candidato | **Perdido** + elegir **Motivo de pérdida** | Deja de estar abierta + te dice POR QUÉ se pierden |
| Sigue en conversación real | Dejar abierta en su fase | Abierta = de verdad activa |

**Estandariza 5 motivos de pérdida** (Lost Reason) para leer el patrón:
1. No contesta
2. Sin presupuesto
3. No es candidato clínico
4. Solo preguntaba / no interesado
5. Se fue con otra clínica

> Cuando "abierto" signifique de verdad "activo", vas a poder manejar el negocio con el dashboard. Hoy no puedes porque todo se ve igual.

---

## PARTE 1 — Enseñarle al algoritmo a traer buenos pacientes (la palanca grande)

Tu queja es correcta: Facebook trae muchos que no tienen presupuesto. La razón es que la campaña está optimizada para **cantidad de leads**, no para **leads que inician tratamiento**. Se arregla enseñándole al algoritmo cómo es tu buen paciente.

### Nivel 1 — HOY (fácil, alto impacto)
1. En GHL, ponle a cada cierre la etiqueta **`inició-tratamiento`** + el monto.
2. **Exporta esa lista** de los que iniciaron (nombre, teléfono, email).
3. En Meta: **Públicos → crear Público Personalizado** con esa lista → luego **crear Público Similar (Lookalike) 1%**.
4. Apunta la campaña a ese **Similar 1%** (gente parecida a los que SÍ pagan) y **excluye** el público de los que se perdieron por "sin presupuesto".
5. Resultado: Meta empieza a buscar gente parecida a tus pagadores, no a tus curiosos.

> Al principio tienes pocos cierres. Siembra el público con los que **iniciaron + los que asistieron a valoración** (proxy de buena intención). A medida que acumules cierres, el Similar mejora solo.

### Nivel 2 — Pre-calificar en el anuncio (filtra a los sin presupuesto)
En el copy, enmarca que es una **inversión en salud premium**, no lo más barato. Ejemplos de línea:
- "Rehabilitación con implantes de marca premium. Una inversión en tu salud, no la opción más barata."
- "Para quienes buscan calidad y resultado duradero, no el precio más bajo."

Esto ahuyenta al que solo busca lo barato y atrae al que valora calidad. (Hormozi: el precio y el marco filtran a tu cliente.)

### Nivel 3 — MÁS ADELANTE (avanzado)
Conectar **GHL → Meta CAPI** para enviar el evento "inició tratamiento" con su valor de vuelta a Meta, y optimizar la campaña por **valor** y no por volumen. En Google, subir los cierres por Enhanced Conversions cuando se reactive esa cuenta (hoy en $0). Se agenda cuando el Nivel 1 ya esté rodando.

---

## PARTE 2 — El menú de tratamientos (para no perder a nadie por precio)

La regla Hormozi: **nunca bajes el precio, cambia la oferta.** Si el paciente no puede o no quiere el tratamiento premium, no lo pierdes: le ofreces otra solución clínica que resuelve su necesidad a su presupuesto. Todo suma a la meta.

**Escalera de opciones (la Dra. elige según el caso):**

| Necesidad del paciente | Opción premium (ancla) | Alternativa si presupuesto es la barrera |
|---|---|---|
| Boca sin dientes / dentadura fallando | All-on-4/6 fija ambas arcadas | Una sola arcada primero · prótesis fija sobre menos implantes · sobredentadura sobre implantes |
| Quiere verse mejor (estética) | Diseño de sonrisa completo (carillas) | Menos piezas · diseño por fases · blanqueamiento + ajuste |
| Dientes torcidos | Alineadores | Tratamiento por fases · arranque parcial |
| Faltan algunas piezas | Prótesis fija / implantes unitarios | Empezar por la zona prioritaria |

**Dos movimientos que NO son descuento:**
1. **Empezar por fases.** En odontología es normal: se arranca por lo prioritario (la cirugía, o la arcada que más molesta) y el resto se hace por etapas a medida que avanza. El paciente entra hoy sin pagar todo de golpe, y el precio total NO baja.
2. **Cambiar de tratamiento**, no de precio. El que no puede el All-on-4 quizá sí puede una prótesis fija sobre menos implantes o un diseño de sonrisa. Le resuelves su dolor real a su bolsillo, y cierras.

> Guion de puente: "Entiendo. Con tu caso tenemos varias formas de resolverlo. La ideal es [premium]. Pero también podemos empezar por [alternativa/fase], que resuelve [su dolor] y te deja avanzar hoy. ¿Cuál te acomoda más para empezar?"

---

## PARTE 3 — PLAN A: Pidieron cita y NO asistieron (no-show)

**Principio:** velocidad + cero culpa + reprogramar fácil + resolver la razón oculta (miedo, tiempo o plata).

### Cadencia (workflow)
| Momento | Acción |
|---|---|
| Mismo día del no-show | WhatsApp A6 (recuperación, sin reproche) con 2 opciones de horario |
| Día +2 | Segundo intento, ofrecer **valoración virtual** (menos fricción que ir a la clínica) |
| Día +5 | Tercer intento + recordar el beneficio y que hay cupo esta semana |
| Sin respuesta tras 3 | Pasar a nurturing largo (no a "Perdido" aún); revisar en 30 días |

### Guiones
**A6 (mismo día):**
```
Hola {Nombre}, notamos que no pudo asistir a su valoración de hoy, no hay problema 🙌
¿La reprogramamos? Tengo espacio {opción 1} y {opción 2}. Dígame cuál le sirve y se la dejo lista.
```
**Día +2 (bajar fricción con virtual):**
```
{Nombre}, si le queda difícil venir, podemos hacer una *valoración virtual* de 15 min con la Dra. para revisar su caso y darle claridad. ¿Le agendo hoy o mañana?
```
**Día +5 (beneficio + cupo):**
```
{Nombre}, esta semana la Dra. tiene espacio para valoraciones. Es el primer paso para {dejar el dolor / recuperar su sonrisa / masticar bien}. ¿Le aparto un cupo? Solo dígame el día.
```

### En el CRM
- Mantener en **"Agenda Cita"** (o sub-etiqueta "Reprogramar"), NO moverlos a Perdido hasta agotar los 3 intentos.
- Si reprograma → crear la cita en Calendarios y activar recordatorios −24h/−2h.

---

## PARTE 4 — PLAN B: Asistieron pero NO iniciaron tratamiento (el plan del dinero)

Este es el segmento más valioso: **ya vinieron, ya confían, ya saben el precio.** Solo hay que resolver la objeción. Casi siempre es una de cuatro.

### Seguimiento base (24–48h después de la valoración)
Enviar el plan por escrito (plantilla A7) y pedir el siguiente paso:
```
Hola {Nombre}, fue un gusto atenderle 😊 Le confirmo el plan de la Dra.:
🦷 {Tratamiento} · Inversión: {monto}
Tenemos varias formas de empezar según lo que le acomode. ¿Le resuelvo dudas y agendamos el inicio? Podemos arrancar {fecha propuesta}.
```

### Manejo de objeciones (sin bajar precio)
| Objeción real | Qué NO hacer | Qué hacer |
|---|---|---|
| **"Está caro / no me alcanza ahora"** | Descontar | Ofrecer el **menú** (Parte 2): alternativa clínica o **empezar por fases**. "No baja el precio total, pero empieza hoy por lo prioritario." |
| **"Lo voy a pensar"** | Dejarlo ir sin fecha | Agendar seguimiento con **fecha concreta** + recordar cupo del mes. Preguntar: "¿qué es lo que le genera dudas, el procedimiento o la inversión?" (destapa la objeción real) |
| **"Tengo que consultarlo con mi esposo/a / familia"** | Esperar pasivo | Ofrecer una **llamada corta incluyendo a quien decide** para resolver sus dudas |
| **"Me da miedo / necesito seguridad"** | Insistir en cerrar | Reforzar garantías, mostrar casos reales, ofrecer empezar por lo menos invasivo |

### Cadencia
| Momento | Acción |
|---|---|
| +24–48h | A7 con el plan + oferta de menú/fases |
| +4 días | Resolver la objeción específica (según lo que dijo en la cita) |
| +8 días | Recordar cupo del mes + caso real de un paciente parecido |
| +15 días | Última oferta del mes (escasez real) antes de pasar a nurturing |

### En el CRM
- Crear etiqueta/fase **"Asistió sin iniciar"** y un workflow dedicado (hoy caen en el limbo).
- Registrar el resultado: inició → **Ganado** + monto; no → **Perdido** + motivo.

---

## PARTE 5 — Orden de ejecución esta semana
1. **Higiene:** marcar Ganado/Perdido con motivo a las ~230 oportunidades (que "abierto" signifique activo).
2. **Público de calidad en Meta:** etiquetar los que iniciaron → exportar → Público Personalizado → Similar 1% → apuntar la campaña ahí + pre-calificar en el copy.
3. **Plan B primero** (asistieron sin iniciar): es el dinero más cercano. Trabajar cada uno con el menú y el manejo de objeciones.
4. **Plan A** (no-show): reprogramar con el guion de baja fricción (valoración virtual).
5. **Menú de tratamientos** cargado en la cabeza de Estefa y de la Dra.: nadie se va con un "no", se va con una alternativa.

**Métrica norte:** de los que asistieron, subir el % que inicia tratamiento (cierre) sin tocar el precio; y que el dashboard por fin muestre Ganados con monto.
