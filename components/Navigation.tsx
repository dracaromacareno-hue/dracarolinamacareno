'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { track } from '@/lib/analytics';

interface NavProps {
  locale: string;
  messages: {
    inicio: string;
    sobreMi: string;
    servicios: string;
    libros: string;
    casosClinicosLabel: string;
    blog: string;
    contacto: string;
    agendaCita: string;
  };
}

const WA_NUMBER = '573163975232';

export default function Navigation({ locale, messages }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isEs = locale === 'es';
  const waMsg = encodeURIComponent(
    isEs
      ? 'Hola Dra. Carolina 🌐 Llegué desde su sitio web y me gustaría agendar una cita.'
      : 'Hi Dr. Carolina 🌐 I came from your website and I would like to book an appointment.'
  );
  const waHref = `https://wa.me/${WA_NUMBER}?text=${waMsg}`;

  const navLinks = [
    { href: '/', label: messages.inicio },
    { href: '/sobre-mi', label: messages.sobreMi },
    { href: '/#servicios', label: messages.servicios },
    { href: isEs ? '/dental-tourism-colombia' : '/en/dental-tourism-colombia', label: isEs ? 'Turismo Dental' : 'Dental Tourism', isAbsolute: true },
    { href: '/libros', label: messages.libros },
    { href: '/casos-clinicos', label: messages.casosClinicosLabel },
    { href: '/blog', label: messages.blog },
    { href: '/contacto', label: messages.contacto },
  ];

  const localePath = (path: string) => {
    if (locale === 'es') return path;
    return `/en${path}`;
  };

  const getOtherLocale = () => {
    const currentPath = pathname;
    if (isEs) {
      return `/en${currentPath === '/' ? '' : currentPath}`;
    } else {
      return currentPath.replace(/^\/en/, '') || '/';
    }
  };

  const isActive = (href: string) => {
    const fullHref = localePath(href);
    if (href === '/') return pathname === fullHref || pathname === '/en';
    return pathname.startsWith(fullHref.split('#')[0]);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070B14]/95 backdrop-blur-md border-b border-[#1F2937]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href={localePath('/')}
            className="group opacity-90 hover:opacity-100 transition-opacity"
          >
            <Image
              src="/images/logo-dark.png"
              alt="Dra. Carolina Macareno"
              width={160}
              height={87}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href.startsWith('#') || link.isAbsolute ? link.href : localePath(link.href)}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-sm ${
                  isActive(link.href)
                    ? 'text-[#C9A461]'
                    : 'text-[#9CA3AF] hover:text-[#F5F5F0]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: lang switcher + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language switcher */}
            <Link
              href={getOtherLocale()}
              className="text-xs font-medium tracking-widest text-[#9CA3AF] hover:text-[#C9A461] transition-colors border border-[#1F2937] px-3 py-1.5 rounded"
            >
              {isEs ? 'EN' : 'ES'}
            </Link>
            {/* CTA — WhatsApp direct (1-click conversion, May 2026 fix) */}
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track.cta('nav_desktop_whatsapp')}
              className="inline-flex items-center gap-1.5 bg-[#C9A461] hover:bg-[#E5B866] text-[#070B14] font-semibold text-sm px-5 py-2.5 rounded transition-all duration-200 tracking-wide"
            >
              <svg viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M16.001 3C9.376 3 4.001 8.375 4.001 15c0 2.117.555 4.176 1.61 5.99L4 29l8.18-1.586A11.94 11.94 0 0 0 16 27c6.625 0 12-5.375 12-12S22.625 3 16.001 3zm0 21.6a9.61 9.61 0 0 1-4.89-1.337l-.35-.207-4.86.94.97-4.74-.227-.36A9.6 9.6 0 1 1 25.6 15c0 5.302-4.298 9.6-9.599 9.6zm5.255-7.187c-.288-.144-1.705-.84-1.97-.938-.265-.097-.458-.144-.65.144-.193.289-.745.938-.913 1.13-.169.193-.337.217-.625.072-.288-.144-1.214-.448-2.313-1.428-.855-.762-1.432-1.704-1.6-1.992-.169-.289-.018-.444.126-.588.13-.13.288-.337.433-.506.144-.169.193-.289.289-.482.096-.193.048-.361-.024-.506-.072-.144-.65-1.568-.89-2.146-.235-.564-.474-.487-.65-.495l-.554-.01a1.07 1.07 0 0 0-.769.361c-.265.289-1.01.987-1.01 2.41 0 1.422 1.034 2.795 1.178 2.988.144.193 2.03 3.1 4.92 4.347.687.297 1.222.475 1.64.608.689.219 1.314.188 1.808.114.552-.082 1.706-.697 1.946-1.371.24-.674.24-1.252.169-1.371-.073-.121-.265-.193-.553-.337z" />
              </svg>
              {messages.agendaCita}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 z-50 relative"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-[#C9A461] transition-colors"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-[#C9A461]"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-[#C9A461] transition-colors"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0D1321] border-t border-[#1F2937] overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href.startsWith('#') || link.isAbsolute ? link.href : localePath(link.href)}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 text-base font-medium transition-colors rounded ${
                    isActive(link.href)
                      ? 'text-[#C9A461] bg-[#C9A461]/10'
                      : 'text-[#9CA3AF] hover:text-[#F5F5F0] hover:bg-[#1F2937]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-[#1F2937] flex items-center gap-3">
                <Link
                  href={getOtherLocale()}
                  onClick={() => setMobileOpen(false)}
                  className="text-xs font-medium tracking-widest text-[#9CA3AF] hover:text-[#C9A461] border border-[#1F2937] px-3 py-2 rounded"
                >
                  {isEs ? 'EN' : 'ES'}
                </Link>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    track.cta('nav_mobile_whatsapp');
                    setMobileOpen(false);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#C9A461] hover:bg-[#E5B866] text-[#070B14] font-semibold text-sm py-2.5 rounded text-center"
                >
                  <svg viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                    <path d="M16.001 3C9.376 3 4.001 8.375 4.001 15c0 2.117.555 4.176 1.61 5.99L4 29l8.18-1.586A11.94 11.94 0 0 0 16 27c6.625 0 12-5.375 12-12S22.625 3 16.001 3zm0 21.6a9.61 9.61 0 0 1-4.89-1.337l-.35-.207-4.86.94.97-4.74-.227-.36A9.6 9.6 0 1 1 25.6 15c0 5.302-4.298 9.6-9.599 9.6zm5.255-7.187c-.288-.144-1.705-.84-1.97-.938-.265-.097-.458-.144-.65.144-.193.289-.745.938-.913 1.13-.169.193-.337.217-.625.072-.288-.144-1.214-.448-2.313-1.428-.855-.762-1.432-1.704-1.6-1.992-.169-.289-.018-.444.126-.588.13-.13.288-.337.433-.506.144-.169.193-.289.289-.482.096-.193.048-.361-.024-.506-.072-.144-.65-1.568-.89-2.146-.235-.564-.474-.487-.65-.495l-.554-.01a1.07 1.07 0 0 0-.769.361c-.265.289-1.01.987-1.01 2.41 0 1.422 1.034 2.795 1.178 2.988.144.193 2.03 3.1 4.92 4.347.687.297 1.222.475 1.64.608.689.219 1.314.188 1.808.114.552-.082 1.706-.697 1.946-1.371.24-.674.24-1.252.169-1.371-.073-.121-.265-.193-.553-.337z" />
                  </svg>
                  {messages.agendaCita}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
