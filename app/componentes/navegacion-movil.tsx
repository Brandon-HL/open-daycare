import Link from "next/link";
import { Icono } from "./icono";

export function NavegacionMovil({ seccionActiva }: { seccionActiva: "feed" | "ninos" }) {
  const opciones = [
    { texto: "Feed", href: "/", seccion: "feed", icono: "inicio" },
    { texto: "Niños", href: "/kids", seccion: "ninos", icono: "ninos" },
  ] as const;

  return (
    <nav aria-label="Navegación principal" className="flex gap-2 border-b border-[#ece0d0] bg-[#fffdf9] px-5 py-3 lg:hidden">
      {opciones.map(({ texto, href, seccion, icono }) => (
        <Link key={href} href={href} aria-current={seccionActiva === seccion ? "page" : undefined} className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm ${seccionActiva === seccion ? "bg-[#fbe3d8] font-extrabold text-[#d9583c]" : "font-semibold text-[#6e6359]"}`}><Icono tipo={icono} className="h-[18px] w-[18px]" />{texto}</Link>
      ))}
    </nav>
  );
}
