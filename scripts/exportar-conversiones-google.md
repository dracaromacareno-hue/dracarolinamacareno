# Exportar "Cita asistida" a Google Ads

Genera el archivo que Google pide para importar conversiones sin conexión: los
pacientes que **asistieron a la cita** viniendo de un anuncio.

## Por qué existe

Google, por su cuenta, solo sabe que alguien hizo clic y escribió por WhatsApp.
No sabe cuáles de esos se convirtieron en pacientes. Al devolverle esa
información, deja de optimizar por clics baratos y empieza a optimizar por
pacientes reales.

## Antes de usarlo

1. La conversión **"Cita asistida"** debe existir en Google Ads con
   origen *Importar desde los clics*. Ya existe; hay que activarla.
2. El `gclid` viaja en el primer mensaje de WhatsApp del paciente, en el bloque
   final, con el formato `| g: <gclid>`. Lo pone el sitio automáticamente desde
   el 4-ago-2026. Los pacientes anteriores no lo tienen.

## Cómo se usa

1. Abre GHL en Chrome, con sesión iniciada.
2. Abre la consola del navegador (**Cmd + Option + J**).
3. Pega el contenido de `exportar-conversiones-google.js` y dale Enter.
4. Navega a Contactos dentro de GHL para que capture el acceso.
5. Vuelve a la consola y ejecuta `exportarConversiones()`.
6. Se descarga un CSV.

En Google Ads: **Objetivos → Conversiones → Cargas** → subir el archivo.

## Reglas que respeta, por ser sector salud

- Solo exporta `gclid`, fecha y valor. **Nada del paciente**: ni nombre, ni
  teléfono, ni correo, ni tratamiento.
- El nombre de la conversión es "Cita asistida", sin mencionar procedimientos.

Esto no es opinión: Google clasifica odontología como categoría sensible y
prohíbe subir datos que permitan inferir una condición de salud.

## Límites conocidos

- **Google solo acepta conversiones dentro de la ventana del clic** (90 días).
  Más viejas se rechazan.
- Si el paciente reescribió el mensaje y borró el bloque final, no hay `gclid` y
  ese caso no se puede exportar. Se recupera la mayoría, no todos.
- **Hacen falta 15 conversiones en 30 días** para que la puja inteligente
  aprenda. Con el volumen actual eso toma meses. No esperes efecto inmediato.
