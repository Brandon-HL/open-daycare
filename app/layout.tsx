import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const fredoka = Fredoka({ variable: "--font-fredoka", subsets: ["latin"] });
const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OpenDayCare · Sala Soles",
  description: "Feed de la Sala Soles de OpenDayCare",
};

export default function RootLayout({ children, modal }: LayoutProps<"/"> & { modal: ReactNode }) {
  return <html lang="es" className={`${fredoka.variable} ${nunito.variable}`}><body>{children}{modal}</body></html>;
}
