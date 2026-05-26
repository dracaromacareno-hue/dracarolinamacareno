import { Playfair_Display, Inter } from "next/font/google";

/**
 * Font loading is the #1 cause of high LCP on this site (mobile LCP was
 * 3.3s with 17 font files preloading). We keep ONLY the weights actually
 * used above the fold:
 *   - Playfair 400 (body italic in landing copy) + 700 (H1 hero) + italic
 *     400 for the "tu cita" type accent on landings.
 *   - Inter 400 (body) + 500 (UI labels) + 600 (CTAs)
 *
 * This drops total font payload from ~17 files to 6 — measurable LCP
 * improvement on mobile (no image LCP, text is the LCP element).
 *
 * If a page renders a weight not in this list, the browser falls back
 * to the next available weight via swap. Document any new weight added
 * here so we don't silently re-bloat the bundle.
 */
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const fontVariables = `${playfairDisplay.variable} ${inter.variable}`;
