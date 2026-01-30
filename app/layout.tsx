import type { Metadata } from "next";
import { Inter } from "next/font/google"; // O "Geist" si usaste la version mas nueva
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Obsidian Void | Software Engineering",
  description: "Desarrollo de software a medida para negocios que escalan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}