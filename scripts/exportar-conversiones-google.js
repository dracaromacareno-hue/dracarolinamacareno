/**
 * Exporta a Google Ads los pacientes que ASISTIERON A LA CITA viniendo de un
 * anuncio. Se ejecuta en la consola del navegador con GHL abierto.
 *
 * Ver exportar-conversiones-google.md para las instrucciones y los límites.
 *
 * SECTOR SALUD: este script exporta únicamente gclid, fecha y valor. Nunca
 * nombre, teléfono, correo ni tratamiento. Google clasifica odontología como
 * categoría sensible y prohíbe subir datos que permitan inferir una condición
 * de salud. No agregar columnas "para tener más contexto".
 */
(function () {
  const LOCATION = 'z84DlOrVXLL9zuRM5VYV';
  const API = 'https://backend.leadconnectorhq.com';
  const NOMBRE_CONVERSION = 'Cita asistida';
  const MONEDA = 'COP';
  // Etapas que cuentan como "asistió". Si cambian los nombres en GHL, ajustar aquí.
  const ETAPAS_VALIDAS = /asisti|inicio tratamiento|inicia tratamiento|en tratamiento/i;
  // Google rechaza conversiones fuera de la ventana del clic.
  const DIAS_MAXIMO = 90;

  // Captura de las cabeceras internas de GHL. Hay que navegar dentro de la app
  // una vez después de pegar esto, para que se dispare una petición.
  if (!window.__hdr) {
    window.__hdr = {};
    const orig = XMLHttpRequest.prototype.setRequestHeader;
    XMLHttpRequest.prototype.setRequestHeader = function (k, v) {
      const K = String(k).toLowerCase();
      if (['token-id', 'authorization', 'channel', 'source', 'version'].includes(K)) {
        window.__hdr[K] = v;
      }
      return orig.apply(this, arguments);
    };
    console.log('%cListo. Ahora navega a Contactos dentro de GHL y vuelve a ejecutar exportarConversiones()', 'color:#0a7');
  }

  const get = async (ruta) => {
    const r = await fetch(API + ruta, { headers: window.__hdr });
    if (!r.ok) throw new Error(`${r.status} en ${ruta.slice(0, 60)}`);
    return r.json();
  };

  /** Saca el gclid del bloque final que pone el sitio: `| g: <gclid>` */
  const extraerGclid = (texto) => {
    const m = String(texto || '').match(/\|\s*g:\s*([A-Za-z0-9_\-.]{20,})/);
    return m ? m[1] : null;
  };

  window.exportarConversiones = async function () {
    if (!Object.keys(window.__hdr || {}).length) {
      console.error('Sin acceso. Navega a Contactos dentro de GHL y vuelve a ejecutar.');
      return;
    }

    // 1. Oportunidades que llegaron a una etapa de "asistió"
    const pipes = await get(`/opportunities/pipelines?locationId=${LOCATION}`);
    const etapaDe = (pid, sid) => {
      const P = (pipes.pipelines || []).find((x) => x.id === pid);
      const S = P && P.stages.find((s) => s.id === sid);
      return S ? S.name : '';
    };

    let ops = [], pagina = 1;
    while (pagina <= 15) {
      const r = await get(`/opportunities/search?location_id=${LOCATION}&limit=100&page=${pagina}`);
      const lote = r.opportunities || [];
      ops = ops.concat(lote);
      if (lote.length < 100) break;
      pagina++;
    }

    const limite = Date.now() - DIAS_MAXIMO * 864e5;
    const candidatas = ops.filter(
      (o) => ETAPAS_VALIDAS.test(etapaDe(o.pipelineId, o.pipelineStageId))
        && o.contactId
        && new Date(o.updatedAt || 0).getTime() > limite
    );

    console.log(`${candidatas.length} oportunidades en etapa de asistencia, dentro de los ${DIAS_MAXIMO} días.`);

    // 2. Buscar el gclid en el primer mensaje entrante de cada paciente
    const filas = [];
    const sinGclid = [];
    for (const op of candidatas) {
      try {
        const conv = await get(`/conversations/search?locationId=${LOCATION}&contactId=${op.contactId}&limit=5`);
        const ids = (conv.conversations || []).map((c) => c.id);
        let gclid = null;
        for (const id of ids) {
          const msgs = await get(`/conversations/${id}/messages?limit=100`);
          const lista = (msgs.messages && msgs.messages.messages) || msgs.messages || [];
          for (const m of lista) {
            if (m.direction !== 'inbound') continue;
            const g = extraerGclid(m.body);
            if (g) { gclid = g; break; }
          }
          if (gclid) break;
        }
        if (!gclid) { sinGclid.push(op.name); continue; }
        const fecha = new Date(op.updatedAt).toISOString().slice(0, 19).replace('T', ' ');
        filas.push([gclid, NOMBRE_CONVERSION, fecha, op.monetaryValue || 0, MONEDA]);
      } catch (e) {
        console.warn('Sin leer', op.name, String(e).slice(0, 60));
      }
    }

    if (!filas.length) {
      console.log('%cNinguna conversión exportable todavía.', 'color:#c60');
      console.log('Normal si la campaña no ha corrido: el gclid solo existe si el paciente llegó por un anuncio.');
      if (sinGclid.length) console.log(`${sinGclid.length} pacientes en etapa de asistencia sin gclid (llegaron por otro canal, o borraron el final del mensaje).`);
      return;
    }

    // 3. CSV en el formato exacto de Google
    const csv = [
      'Parameters:TimeZone=America/Bogota',
      'Google Click ID,Conversion Name,Conversion Time,Conversion Value,Conversion Currency',
      ...filas.map((f) => f.join(',')),
    ].join('\n');

    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
    a.download = 'cita-asistida-google-ads.csv';
    a.click();

    console.log(`%c${filas.length} conversiones exportadas.`, 'color:#0a7;font-weight:bold');
    console.log(`${sinGclid.length} sin gclid (otro canal, o el paciente borró el final del mensaje).`);
    console.log('Súbelo en Google Ads: Objetivos → Conversiones → Cargas.');
  };

  console.log('%cexportarConversiones() disponible.', 'color:#0a7;font-weight:bold');
})();
