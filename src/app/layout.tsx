import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jorge Negrelli - Desenvolvedor Full Stack",
  description: "Desenvolvedor Full Stack especializado em Java e JavaScript. Estudante de Engenharia de Software na UniCesumar, criador de soluções digitais para pequenos comércios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
