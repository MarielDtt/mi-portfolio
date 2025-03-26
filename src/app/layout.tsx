import type { Metadata } from "next";
import "./globals.css";

import { Lilita_One, Poppins } from 'next/font/google';

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
      <body className={`${poppins.variable} ${lilita.variable} antialiased`}>

        {children}
      </body>
    </html>
  );
}

