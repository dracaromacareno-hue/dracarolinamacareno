'use client';

import { useState } from 'react';
import AnimatedSection from '../AnimatedSection';
import { track } from '@/lib/analytics';

interface ContactMessages {
  titulo: string;
  subtitulo: string;
  descripcion: string;
  whatsapp: string;
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
  tratamiento: string;
  enviar: string;
  enviando: string;
  exito: string;
  seleccionar: string;
  ubicacion: string;
  horario: string;
  horarioDetalle: string;
  ubicacionDetalle: string;
}

const treatments = [
  'Implantes Dentales',
  'Prótesis Fija Atornillada',
  'Diseño de Sonrisa Cerámico',
  'Rehabilitación Oral Completa',
  'Estética Dental Avanzada',
  'Consulta de Diagnóstico',
];

export default function ContactSection({ messages }: { messages: ContactMessages }) {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tratamiento: '',
    mensaje: '',
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    track.formSubmit(form.tratamiento);
  };

  const waMessage = encodeURIComponent(
    `Hola Dra. Carolina, me interesa agendar una consulta. Mi nombre es ${form.nombre || '...'} y me interesa: ${form.tratamiento || 'información general'}`
  );

  return (
    <section id="contacto" className="py-24 bg-[#0D1321] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(26,82,118,0.1)_0%,_transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A461]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <span className="text-[#C9A461] text-xs font-medium tracking-[0.3em] uppercase mb-3 block">
            {messages.subtitulo}
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#F5F5F0] mb-4"
            style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
          >
            {messages.titulo}
          </h2>
          <p className="text-[#9CA3AF] max-w-xl mx-auto">{messages.descripcion}</p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#C9A461] to-[#E5B866] mx-auto mt-6" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left info panel */}
          <AnimatedSection direction="right" className="lg:col-span-2">
            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/573163975232?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366]/60 rounded-lg p-5 mb-6 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-[#F5F5F0] font-semibold">{messages.whatsapp}</p>
                <p className="text-[#9CA3AF] text-sm">+57 316 397 5232</p>
              </div>
              <svg className="w-5 h-5 text-[#25D366] ml-auto group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Info cards */}
            <div className="space-y-4">
              <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#C9A461] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-[#F5F5F0] font-semibold text-sm mb-1">{messages.ubicacion}</p>
                    <p className="text-[#9CA3AF] text-sm whitespace-pre-line">{messages.ubicacionDetalle}</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#C9A461] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-[#F5F5F0] font-semibold text-sm mb-1">{messages.horario}</p>
                    <p className="text-[#9CA3AF] text-sm whitespace-pre-line">{messages.horarioDetalle}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Google Maps embed */}
            <div className="mt-4 rounded-xl overflow-hidden border border-[#1F2937]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.0775!2d-75.57467!3d6.20396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4682784bed7601%3A0xce87e28e0b7bfff8!2sEdificio+Platinum+Superior!5e0!3m2!1ses!2sco!4v1"
                width="100%"
                height="190"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Dra. Carolina Macareno - Edificio Platinum Superior El Poblado Medellín"
              />
            </div>
            <div className="flex gap-3 mt-3">
              <a
                href="https://maps.google.com/?q=Edificio+Platinum+Superior+El+Poblado+Medellin+Colombia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#111827] hover:bg-[#1F2937] border border-[#1F2937] hover:border-[#C9A461]/40 rounded-lg py-2.5 text-[#D1D5DB] text-xs font-medium transition-all"
              >
                <svg className="w-4 h-4 text-[#C9A461]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Google Maps
              </a>
              <a
                href="https://waze.com/ul?q=Edificio+Platinum+Superior+El+Poblado+Medellin&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#111827] hover:bg-[#1F2937] border border-[#1F2937] hover:border-[#C9A461]/40 rounded-lg py-2.5 text-[#D1D5DB] text-xs font-medium transition-all"
              >
                <svg className="w-4 h-4 text-[#00BAFF]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5zm4.8 8.7c-.1.8-.7 1.4-1.5 1.4-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.5.6 1.5 1.4zm-7.2 0c-.1.8-.7 1.4-1.5 1.4-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.5.6 1.5 1.4zm3.6 5.4c-2.1 0-3.9-1.1-4.9-2.7h9.8c-1 1.6-2.8 2.7-4.9 2.7z"/>
                </svg>
                Waze
              </a>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="left" className="lg:col-span-3">
            <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-7 sm:p-8">
              {sent ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[#C9A461]/10 border border-[#C9A461]/30 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#C9A461]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#F5F5F0] font-semibold text-lg">{messages.exito}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#9CA3AF] text-xs font-medium tracking-wider uppercase mb-2">
                        {messages.nombre}
                      </label>
                      <input
                        type="text"
                        required
                        value={form.nombre}
                        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                        className="w-full bg-[#0D1321] border border-[#1F2937] focus:border-[#C9A461] rounded px-4 py-3 text-[#F5F5F0] text-sm outline-none transition-colors placeholder:text-[#4B5563]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#9CA3AF] text-xs font-medium tracking-wider uppercase mb-2">
                        {messages.email}
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-[#0D1321] border border-[#1F2937] focus:border-[#C9A461] rounded px-4 py-3 text-[#F5F5F0] text-sm outline-none transition-colors placeholder:text-[#4B5563]"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#9CA3AF] text-xs font-medium tracking-wider uppercase mb-2">
                        {messages.telefono}
                      </label>
                      <input
                        type="tel"
                        value={form.telefono}
                        onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                        className="w-full bg-[#0D1321] border border-[#1F2937] focus:border-[#C9A461] rounded px-4 py-3 text-[#F5F5F0] text-sm outline-none transition-colors placeholder:text-[#4B5563]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#9CA3AF] text-xs font-medium tracking-wider uppercase mb-2">
                        {messages.tratamiento}
                      </label>
                      <select
                        value={form.tratamiento}
                        onChange={(e) => setForm({ ...form, tratamiento: e.target.value })}
                        className="w-full bg-[#0D1321] border border-[#1F2937] focus:border-[#C9A461] rounded px-4 py-3 text-[#F5F5F0] text-sm outline-none transition-colors"
                      >
                        <option value="" disabled>{messages.seleccionar}</option>
                        {treatments.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#9CA3AF] text-xs font-medium tracking-wider uppercase mb-2">
                      {messages.mensaje}
                    </label>
                    <textarea
                      rows={4}
                      value={form.mensaje}
                      onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                      className="w-full bg-[#0D1321] border border-[#1F2937] focus:border-[#C9A461] rounded px-4 py-3 text-[#F5F5F0] text-sm outline-none transition-colors resize-none placeholder:text-[#4B5563]"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-[#C9A461] hover:bg-[#E5B866] disabled:opacity-60 text-[#070B14] font-bold py-4 rounded transition-all duration-200 text-sm tracking-wider uppercase hover:scale-[1.01] hover:shadow-lg hover:shadow-[#C9A461]/20"
                  >
                    {sending ? messages.enviando : messages.enviar}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
