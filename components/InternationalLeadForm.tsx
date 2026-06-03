'use client';

import { useState } from 'react';
import Link from 'next/link';
import { track } from '@/lib/analytics';
import { detectSource } from '@/lib/source-tracking';

type Locale = 'es' | 'en';

const COUNTRY_CODES = [
  { code: '+1', flag: '🇺🇸', label: 'USA / Canada' },
  { code: '+57', flag: '🇨🇴', label: 'Colombia' },
  { code: '+507', flag: '🇵🇦', label: 'Panama' },
  { code: '+1809', flag: '🇩🇴', label: 'Dom. Rep.' },
  { code: '+1787', flag: '🇵🇷', label: 'Puerto Rico' },
  { code: '+34', flag: '🇪🇸', label: 'España' },
  { code: '+56', flag: '🇨🇱', label: 'Chile' },
  { code: '+52', flag: '🇲🇽', label: 'México' },
  { code: '+44', flag: '🇬🇧', label: 'United Kingdom' },
];

const TREATMENTS: Record<Locale, { value: string; label: string }[]> = {
  en: [
    { value: 'Free Virtual Consultation', label: 'Free 30-min virtual consultation' },
    { value: 'Single Dental Implant', label: 'Single dental implant' },
    { value: 'All-on-4 / All-on-6', label: 'All-on-4 / All-on-6 (full arch)' },
    { value: 'Zygomatic Implants', label: 'Zygomatic implants (severe bone loss)' },
    { value: 'Full Mouth Rehabilitation', label: 'Full-mouth rehabilitation' },
    { value: 'Smile Design / Veneers', label: 'Smile design / veneers' },
    { value: 'Zirconia Crowns', label: 'Zirconia crowns' },
    { value: 'International General Inquiry', label: 'Not sure yet — general inquiry' },
  ],
  es: [
    { value: 'Videoconsulta Gratis', label: 'Videoconsulta gratis (30 min)' },
    { value: 'Implante Individual', label: 'Implante individual' },
    { value: 'All-on-4 / All-on-6', label: 'All-on-4 / All-on-6 (boca completa)' },
    { value: 'Implantes Cigomáticos', label: 'Implantes cigomáticos (pérdida ósea)' },
    { value: 'Rehabilitación Oral Completa', label: 'Rehabilitación oral completa' },
    { value: 'Diseño de Sonrisa / Carillas', label: 'Diseño de sonrisa / carillas' },
    { value: 'Coronas de Zirconio', label: 'Coronas de zirconio' },
    { value: 'Consulta Internacional General', label: 'No estoy seguro — consulta general' },
  ],
};

const T = {
  en: {
    kicker: 'Get your written quote — no commitment',
    title: 'Request your free quote by email',
    subtitle: 'Dr. Carolina personally replies within hours. English & Spanish.',
    nameLabel: 'Full name *',
    namePlaceholder: 'Your full name',
    emailLabel: 'Email *',
    emailPlaceholder: 'you@email.com',
    waLabel: 'WhatsApp / phone',
    waPlaceholder: '555 123 4567',
    treatmentLabel: 'What are you interested in?',
    treatmentDefault: 'Select a treatment',
    messageLabel: 'Tell Dr. Carolina about your case (optional)',
    messagePlaceholder: 'Your current dental situation, what other dentists have told you, your country, what you would like to achieve — anything that helps.',
    consentBefore: 'I agree to the ',
    consentLink: 'Privacy Policy',
    consentAfter: ' so Dr. Carolina can contact me about my dental case. *',
    submit: 'Get my free quote',
    submitting: 'Sending…',
    successTitle: 'Thank you — your request was sent.',
    successBody: 'Dr. Carolina personally replies within hours. Check your inbox (and the spam folder, just in case).',
    errorPrefix: 'Error',
    privacy: 'Your information is private. Never shared with third parties.',
    privacyHref: '/en/privacy-policy',
  },
  es: {
    kicker: 'Recibe tu presupuesto escrito — sin compromiso',
    title: 'Solicita tu presupuesto gratis por email',
    subtitle: 'La Dra. Carolina te responde personalmente en horas. Español e inglés.',
    nameLabel: 'Nombre completo *',
    namePlaceholder: 'Tu nombre completo',
    emailLabel: 'Email *',
    emailPlaceholder: 'tu@email.com',
    waLabel: 'WhatsApp / teléfono',
    waPlaceholder: '300 000 0000',
    treatmentLabel: '¿En qué estás interesado?',
    treatmentDefault: 'Selecciona un tratamiento',
    messageLabel: 'Cuéntale a la Dra. Carolina sobre tu caso (opcional)',
    messagePlaceholder: 'Tu situación dental actual, qué te han dicho otros odontólogos, tu país, qué quisieras lograr — lo que ayude.',
    consentBefore: 'Autorizo el tratamiento de mis datos por la Dra. Carolina Macareno según la ',
    consentLink: 'Política de Privacidad',
    consentAfter: ' (Ley 1581 de 2012). *',
    submit: 'Recibir mi presupuesto',
    submitting: 'Enviando…',
    successTitle: 'Gracias — tu solicitud fue enviada.',
    successBody: 'La Dra. Carolina te responde personalmente en horas. Revisa tu correo (y la carpeta de spam por si acaso).',
    errorPrefix: 'Error',
    privacy: 'Tus datos son privados. Nunca compartidos con terceros.',
    privacyHref: '/privacy-policy',
  },
};

export default function InternationalLeadForm({ locale }: { locale: Locale }) {
  const t = T[locale];
  const treatments = TREATMENTS[locale];
  const defaultCode = locale === 'en' ? '+1' : '+57';

  const [form, setForm] = useState({
    nombre: '',
    email: '',
    countryCode: defaultCode,
    whatsapp: '',
    tipoConsulta: '',
    mensaje: '',
  });
  const [consent, setConsent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      const src = detectSource();
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: form.nombre,
          email: form.email,
          whatsapp: form.whatsapp ? `${form.countryCode} ${form.whatsapp}` : '',
          empresa: locale === 'en' ? 'International landing (EN)' : 'Landing internacional (ES)',
          tipoConsulta: form.tipoConsulta,
          mensaje: form.mensaje,
          source: src.code,
          sourceLabel: src.labelEs,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail?.message || data.error || `HTTP ${res.status}`);
      }

      setSent(true);
      track.formSubmit(form.tipoConsulta || 'international_landing');
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Unknown error';
      setError(`${t.errorPrefix}: ${msg}`);
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    'w-full bg-[#0D1321] border border-[#1F2937] focus:border-[#C9A461] rounded px-4 py-3 text-[#F5F5F0] text-sm outline-none transition-colors placeholder:text-[#4B5563]';
  const labelClass = 'block text-[#9CA3AF] text-xs font-medium tracking-wider uppercase mb-2';

  return (
    <section
      id="lead-form"
      className="px-4 sm:px-6 py-16 bg-[#0D1321] border-y border-[#1F2937] scroll-mt-24"
    >
      <div className="max-w-2xl mx-auto">
        <p className="text-[#C9A461] text-xs font-medium tracking-widest uppercase text-center mb-3">
          {t.kicker}
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-3"
          style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
        >
          {t.title}
        </h2>
        <p className="text-[#9CA3AF] text-center mb-10">{t.subtitle}</p>

        <div className="bg-[#111827] border border-[#1F2937] rounded-xl p-6 sm:p-8">
          {sent ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#C9A461]/10 border border-[#C9A461]/30 flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-[#C9A461]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-[#F5F5F0] font-semibold text-lg mb-2">{t.successTitle}</p>
              <p className="text-[#9CA3AF] text-sm">{t.successBody}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>{t.nameLabel}</label>
                  <input
                    type="text"
                    required
                    placeholder={t.namePlaceholder}
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>{t.emailLabel}</label>
                  <input
                    type="email"
                    required
                    placeholder={t.emailPlaceholder}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>{t.waLabel}</label>
                <div className="flex gap-2">
                  <select
                    value={form.countryCode}
                    onChange={(e) => setForm({ ...form, countryCode: e.target.value })}
                    className="bg-[#0D1321] border border-[#1F2937] focus:border-[#C9A461] rounded px-2 py-3 text-[#F5F5F0] text-sm outline-none transition-colors w-32 flex-shrink-0"
                    aria-label="Country code"
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code + c.label} value={c.code}>
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    placeholder={t.waPlaceholder}
                    value={form.whatsapp}
                    onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>{t.treatmentLabel}</label>
                <select
                  value={form.tipoConsulta}
                  onChange={(e) => setForm({ ...form, tipoConsulta: e.target.value })}
                  className={inputClass}
                >
                  <option value="" disabled>
                    {t.treatmentDefault}
                  </option>
                  {treatments.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClass}>{t.messageLabel}</label>
                <textarea
                  rows={3}
                  placeholder={t.messagePlaceholder}
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input
                  id="intl-consent"
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 flex-shrink-0 accent-[#C9A461] cursor-pointer"
                />
                <label htmlFor="intl-consent" className="text-[#9CA3AF] text-xs leading-relaxed cursor-pointer">
                  {t.consentBefore}
                  <Link
                    href={t.privacyHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9A461] hover:underline"
                  >
                    {t.consentLink}
                  </Link>
                  {t.consentAfter}
                </label>
              </div>

              {error && (
                <p className="text-red-400 text-xs bg-red-400/10 border border-red-400/20 rounded px-4 py-3">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={sending || !consent}
                className="w-full bg-[#C9A461] hover:bg-[#E5B866] disabled:opacity-60 disabled:cursor-not-allowed text-[#070B14] font-bold py-4 rounded transition-all duration-200 text-sm tracking-wider uppercase hover:scale-[1.01] hover:shadow-lg hover:shadow-[#C9A461]/20"
              >
                {sending ? t.submitting : t.submit}
              </button>

              <p className="text-[#4B5563] text-xs text-center">🔒 {t.privacy}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
