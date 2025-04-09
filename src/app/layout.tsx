import type { Metadata } from "next";
import "./globals.css";

import { Lilita_One, Poppins, Special_Elite } from 'next/font/google';
import { Toaster } from 'sonner';

const poppins = Poppins({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const lilita = Lilita_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lilita',
});

const special = Special_Elite({
  weight: '400', // El peso es 400 según tu CSS
  subsets: ['latin'],
  variable: '--font-special-elite', // Asigna una variable CSS
});

export const metadata: Metadata = {
  title: "MarielDtt",
  description: "Porfolio de Mariel Druetta",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} ${lilita.variable} ${special.variable} antialiased`}>

        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}

