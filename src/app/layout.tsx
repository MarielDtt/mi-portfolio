import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
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
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

