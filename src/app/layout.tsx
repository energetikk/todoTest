import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Список задач",
  description: "Планирование и тайм-менеджмент - ключ к успеху",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col bg-zinc-900 w-full items-center p-8 pb-20 gap-16 sm:p-20`}
      >
        <h1 className='text-white text-2xl font-bold'>Список задач:</h1>
        {children}
      </body>
    </html>
  );
}
