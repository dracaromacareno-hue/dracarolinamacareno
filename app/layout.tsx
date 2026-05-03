import type { Metadata } from "next";
import "./globals.css";

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
