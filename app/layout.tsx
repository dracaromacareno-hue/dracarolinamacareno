import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const fontVariables = `${playfairDisplay.variable} ${inter.variable}`;

export const metadata: Metadata = {
  title: "Dra. Carolina Macareno | Rehabilitadora Oral Medellín",
  description: "Especialista en rehabilitación oral, implantes dentales y diseño de sonrisa en El Poblado, Medellín. Más de 17 años de experiencia y 3,500+ pacientes transformados.",
  metadataBase: new URL("https://dracarolinamacareno.com"),
};

// This layout is intentionally minimal — the [locale] layout handles html/body
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children as React.ReactElement;
}
