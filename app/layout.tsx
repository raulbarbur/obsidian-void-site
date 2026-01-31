import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google"; // Importamos las fuentes
import "./globals.css";

// 1. Configuramos la fuente principal (Inter es muy limpia para lectura)
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", // Creamos una variable CSS
});

// 2. Configuramos una fuente secundaria para títulos (Opcional, da mucha personalidad)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Obsidian Void | Software Engineering",
  description: "Ingeniería de software a medida para negocios que escalan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      {/* 3. Aplicamos las variables de las fuentes al body */}
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-neutral-950 text-neutral-200 antialiased`}>
        {children}
      </body>
    </html>
  );
}