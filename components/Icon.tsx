/**
 * Sistema de iconos del sitio (agosto 2026).
 *
 * POR QUE EXISTE
 * El sitio usaba emojis (🦷 ✈️ 💰 …) como iconos en tarjetas y listas. Un emoji
 * no lo dibuja la pagina: lo dibuja la fuente del sistema operativo del
 * visitante. Eso significa que el mismo icono se ve distinto en un iPhone, en un
 * Android y en Windows, que nunca respeta el dorado de la marca ni el grosor de
 * linea del resto del diseno, y que en una pagina de salud resta seriedad justo
 * donde se explica un procedimiento.
 *
 * COMO SE USA
 *   import Icon from '@/components/Icon';
 *   <Icon name="tooth" />
 *
 * Todos comparten la misma reja de 24x24 y el mismo grosor de trazo (1.6), asi
 * que se ven como un conjunto y no como iconos sueltos de sitios distintos.
 * Heredan el color del contenedor via `currentColor`, de modo que basta con
 * poner el dorado en el elemento padre.
 *
 * Si falta un nombre, cae en un rombo dorado neutro en vez de romper la pagina.
 * Añadir uno nuevo es agregar una entrada a PATHS: no hace falta tocar nada mas.
 */
import type { SVGProps } from 'react';

const PATHS: Record<string, string> = {
  // Clinicos
  tooth: 'M12 3c-1.8 0-2.6.7-4 .7S5.4 3.2 4.4 4.4C3.2 5.9 3.4 8.3 4 10.4c.6 2 .8 3.4 1 5.2.2 1.7.5 3.4 1.7 3.4 1.4 0 1.6-2 1.9-3.7.3-1.5.6-2.6 1.4-2.6.8 0 1.1 1.1 1.4 2.6.3 1.7.5 3.7 1.9 3.7 1.2 0 1.5-1.7 1.7-3.4.2-1.8.4-3.2 1-5.2.6-2.1.8-4.5-.4-6-1-1.2-2.2-.7-3.6-.7S13.8 3 12 3z',
  bone: 'M5.5 10.5 13 3l1.5 1.5M18.5 13.5 11 21l-1.5-1.5M4 7a2.5 2.5 0 1 1 3-3 2.5 2.5 0 1 1 3 3l-3 3-3-3zM20 17a2.5 2.5 0 1 1-3 3 2.5 2.5 0 1 1-3-3l3-3 3 3z',
  stethoscope: 'M6 3v5a4 4 0 0 0 8 0V3M6 3H4m2 0h2m6 0h2m-2 0h-2m-2 9v3a5 5 0 0 0 10 0v-2M19 11a2 2 0 1 1 0 4 2 2 0 0 1 0-4z',
  scan: 'M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
  pill: 'M10.5 3.5a5 5 0 0 1 7 7l-7 7a5 5 0 0 1-7-7zM7 7l10 10',

  // Confianza y servicio
  shieldCheck: 'M12 3 4 6v6c0 4.5 3.2 8.3 8 9 4.8-.7 8-4.5 8-9V6zM9 12l2 2 4-4',
  handshake: 'M12 6.5 9.8 4.8a2 2 0 0 0-2.6.2L3 9v6l3 3 2-2M12 6.5l2.2-1.7a2 2 0 0 1 2.6.2L21 9v6l-3 3-2-2M8 16l2.5 2.5a1.5 1.5 0 0 0 2.1 0M12 6.5 9 9.5a1.5 1.5 0 0 0 0 2.1l.4.4a1.5 1.5 0 0 0 2.1 0L14 9.5',
  award: 'M12 3a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zM8.5 13 7 21l5-2.5L17 21l-1.5-8',
  chat: 'M20 12a7 7 0 0 1-9.9 6.4L4 20l1.6-6.1A7 7 0 1 1 20 12z',
  clipboard: 'M9 4h6v3H9zM9 5.5H7a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6.5a1 1 0 0 0-1-1h-2M9 12h6M9 16h4',
  target: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 4.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zM12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2z',

  // Estetica
  sparkle: 'M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7zM18.5 15.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z',
  diamond: 'M6 3h12l3 5.5-9 12.5L3 8.5zM3 8.5h18M9 3l-1.5 5.5L12 21M15 3l1.5 5.5L12 21',
  palette: 'M12 3a9 9 0 0 0 0 18 2 2 0 0 0 1.6-3.2 2 2 0 0 1 1.6-3.2H18a3 3 0 0 0 3-3A9 9 0 0 0 12 3zM7.5 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm2-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
  ruler: 'M3 15 15 3l6 6L9 21zM7 11l2 2M11 7l2 2M9.5 16.5l2 2',
  mirror: 'M12 3a5 5 0 0 0-5 5v3a5 5 0 0 0 10 0V8a5 5 0 0 0-5-5zM12 16v5M9 21h6',

  // Tecnologia
  monitor: 'M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM9 20h6M12 16v4',
  camera: 'M4 7h3l1.5-2h7L17 7h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zM12 9.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z',
  phone: 'M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM11 18h2',
  bolt: 'M13 3 5 13.5h5.5L11 21l8-10.5h-5.5z',
  gear: 'M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM19.4 14a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1v.3a2 2 0 1 1-4 0v-.2a1.6 1.6 0 0 0-2.8-1.1l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 4.5 13H4a2 2 0 1 1 0-4h.2A1.6 1.6 0 0 0 5.3 6.2l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 11 4.5V4a2 2 0 1 1 4 0v.2a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0 1.1 2.7H22a2 2 0 1 1 0 4h-.2a1.6 1.6 0 0 0-1.4 1z',
  refresh: 'M20 12a8 8 0 1 1-2.6-5.9M20 4v5h-5',

  // Viaje y lugar
  plane: 'M10.5 3.5a1.5 1.5 0 0 1 3 0V9l7 4v2.5l-7-2v4l2 1.7V21l-3.5-1L8.5 21v-1.8l2-1.7v-4l-7 2V13l7-4z',
  building: 'M4 21V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v15M15 10h4a1 1 0 0 1 1 1v10M3 21h18M8 9h3M8 13h3M8 17h3',
  globe: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z',
  pin: 'M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11zM12 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z',
  sun: 'M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4',

  // Negocio
  money: 'M3 7h18a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zM12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM6 10v4M18 10v4',
  calendar: 'M4 6h16a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM3 11h18M8 3v4M16 3v4',
  book: 'M5 4h11a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2zM19 20a2 2 0 0 0-2-2M9 8h6M9 12h4',
  lock: 'M6 11h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1zM8 11V7a4 4 0 1 1 8 0v4M12 15v2',
  lightbulb: 'M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.8 1 .8 1.6v.5h5.4v-.5c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3z',
  check: 'M4 12.5 9 17.5 20 6.5',
  x: 'M6 6l12 12M18 6L6 18',
  dot: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
};

const NEUTRO = 'M12 4l8 8-8 8-8-8z';

export type IconName = keyof typeof PATHS;

export default function Icon({
  name,
  className = 'w-6 h-6',
  ...rest
}: { name: string; className?: string } & Omit<SVGProps<SVGSVGElement>, 'name'>) {
  const d = PATHS[name] ?? NEUTRO;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path d={d} />
    </svg>
  );
}
