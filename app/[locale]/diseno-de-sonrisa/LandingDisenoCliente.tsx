'use client';

/*
  Formulario corto de la landing de diseño de sonrisa.

  Por qué 3 campos: el formulario anterior (widget de GHL embebido en un iframe)
  pedía 13, con tres desplegables de búsqueda y términos obligatorios, y la página
  convertía al 5,9 % contra el 21,8 % de /implantes. Cada campo de más cuesta leads.
  Lo demás se pregunta por WhatsApp, que es donde de verdad se atiende.

  Manda al mismo endpoint que el formulario del sitio (`/api/contact`), así el lead
  entra a GoHighLevel con sus etiquetas de origen y el gclid, igual que siempre.
*/

import { useState } from 'react';
import { detectSource, getGclid } from '@/lib/source-tracking';

/*
  La misma lista de indicativos que usa el formulario del sitio
  (`components/sections/ContactSection.tsx`), para que un lead de la landing y uno
  del sitio lleguen a GoHighLevel con el teléfono escrito igual.
*/
const indicativos = [
  { code: '+57', flag: '🇨🇴', label: 'Colombia' },
  { code: '+1', flag: '🇺🇸', label: 'USA / Canadá / Puerto Rico' },
  { code: '+507', flag: '🇵🇦', label: 'Panamá' },
  { code: '+506', flag: '🇨🇷', label: 'Costa Rica' },
  { code: '+34', flag: '🇪🇸', label: 'España' },
  { code: '+52', flag: '🇲🇽', label: 'México' },
  { code: '+58', flag: '🇻🇪', label: 'Venezuela' },
  { code: '+593', flag: '🇪🇨', label: 'Ecuador' },
  { code: '+51', flag: '🇵🇪', label: 'Perú' },
  { code: '+56', flag: '🇨🇱', label: 'Chile' },
  { code: '+54', flag: '🇦🇷', label: 'Argentina' },
  { code: '+1809', flag: '🇩🇴', label: 'Rep. Dominicana' },
];

export default function LandingDisenoCliente() {
  const [indicativo, setIndicativo] = useState('+57');
  const [form, setForm] = useState({ nombre: '', whatsapp: '', mensaje: '' });
  const [estado, setEstado] = useState<'idle' | 'enviando' | 'ok' | 'error'>('idle');

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    setEstado('enviando');
    try {
      const src = detectSource();
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: form.nombre,
          email: '',
          whatsapp: form.whatsapp ? `${indicativo} ${form.whatsapp}` : '',
          tipoConsulta: 'Diseño de Sonrisa',
          mensaje: form.mensaje || 'Quiero que evalúen mi caso de diseño de sonrisa.',
          source: src.code,
          sourceLabel: src.labelEs,
          gclid: getGclid(),
          referer: typeof window !== 'undefined' ? window.location.href : '',
        }),
      });
      setEstado(res.ok ? 'ok' : 'error');
      /*
        24-oct-2026: al enviar bien, se va a la página de gracias, igual que hacía el
        formulario de GHL. Las conversiones de Google Ads y de Meta de esta landing se
        cuentan por la carga de /gracias-diseno-de-sonrisa (restricción de salud: por
        URL, no por evento). Se le pasan los mismos parámetros de la visita (gclid,
        utm) para no perder la atribución. Si la navegación fallara, queda a la vista
        el mensaje de «Listo».
      */
      if (res.ok && typeof window !== 'undefined') {
        window.location.assign('/gracias-diseno-de-sonrisa' + window.location.search);
      }
    } catch {
      setEstado('error');
    }
  }

  if (estado === 'ok') {
    return (
      <div className="rounded-2xl border p-6 text-center" style={{ backgroundColor: '#FFFFFF', borderColor: '#C9A461' }}>
        <p className="text-lg font-semibold mb-2" style={{ color: '#211E18' }}>Listo, ya tenemos tu caso.</p>
        <p className="text-sm" style={{ color: '#5A5449' }}>
          El equipo de la Dra. Carolina te escribe por WhatsApp para decirte qué se puede hacer en tu caso y cuál es el siguiente paso.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={enviar} className="rounded-2xl border p-6 space-y-3" style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA' }}>
      <p className="font-semibold text-base" style={{ color: '#211E18' }}>Cuéntame tu caso en 30 segundos</p>
      <input
        required
        value={form.nombre}
        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
        placeholder="Tu nombre"
        className="w-full rounded-lg border px-4 py-3 text-base"
        style={{ borderColor: '#E8E3DA' }}
      />
      <div className="flex gap-2">
        <select
          value={indicativo}
          onChange={(e) => setIndicativo(e.target.value)}
          aria-label="Indicativo del país"
          className="rounded-lg border px-3 py-3 text-base shrink-0"
          style={{ borderColor: '#E8E3DA', backgroundColor: '#FFFFFF' }}
        >
          {indicativos.map((c) => (
            <option key={c.code + c.label} value={c.code} title={c.label}>
              {c.flag} {c.code}
            </option>
          ))}
        </select>
        <input
          required
          type="tel"
          value={form.whatsapp}
          onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
          placeholder="300 000 0000"
          className="w-full rounded-lg border px-4 py-3 text-base"
          style={{ borderColor: '#E8E3DA' }}
        />
      </div>
      <textarea
        value={form.mensaje}
        onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
        placeholder="¿Qué te gustaría mejorar de tu sonrisa?"
        rows={3}
        className="w-full rounded-lg border px-4 py-3 text-base"
        style={{ borderColor: '#E8E3DA' }}
      />
      <button
        type="submit"
        disabled={estado === 'enviando'}
        className="w-full rounded-xl px-6 py-4 font-semibold text-base transition-all hover:scale-[1.02] disabled:opacity-60"
        style={{ backgroundColor: '#C9A461', color: '#070B14' }}
      >
        {estado === 'enviando' ? 'Enviando…' : 'Quiero que evalúen mi caso'}
      </button>
      {estado === 'error' && (
        <p className="text-sm" style={{ color: '#A33' }}>
          No se pudo enviar. Escríbeme por WhatsApp y lo revisamos de una vez.
        </p>
      )}
      <p className="text-xs" style={{ color: '#77726A' }}>
        Te responde el equipo de la Dra. Carolina Macareno. Tus datos no se comparten con nadie.
      </p>
    </form>
  );
}
