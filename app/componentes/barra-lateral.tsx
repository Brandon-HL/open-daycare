import Link from "next/link";
import { Icono } from "./icono";

export function BarraLateral({ seccionActiva }: { seccionActiva: "feed" | "ninos" }) {
  const opciones = [
    { icono: "inicio", texto: "Feed", href: "/", seccion: "feed" },
    { icono: "ninos", texto: "Niños", href: "/kids", seccion: "ninos" },
    { icono: "aviso", texto: "Avisos" },
    { icono: "usuario", texto: "Mi cuenta" },
  ] as const;

  return (
    <aside className="hidden h-screen w-[248px] shrink-0 flex-col border-r border-[#ece0d0] bg-[#fffdf9] px-4 py-6 lg:flex">
      <div className="flex items-center gap-[11px] px-2 pb-[22px] pt-1">
        <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#f8c3a8] to-[#f2937a] text-white"><Icono tipo="sol" className="h-[21px] w-[21px]" /></div>
        <div><div className="font-fredoka text-[17px] font-semibold leading-none text-[#3f362e]">OpenDayCare</div><div className="mt-0.5 text-[11.5px] text-[#a89a8b]">Sala Soles</div></div>
      </div>
      <div className="mb-[18px] flex w-full items-center justify-center gap-2 rounded-[14px] bg-gradient-to-b from-[#f4977e] to-[#ee8164] px-3 py-3 text-[14.5px] font-extrabold text-white shadow-[0_8px_18px_-8px_rgba(238,129,100,.75)]"><Icono tipo="plus" className="h-[17px] w-[17px]" />Nueva publicación</div>
      <nav className="flex flex-1 flex-col gap-1">
        {opciones.map(({ icono, texto, ...opcion }) => {
          const estaActiva = "seccion" in opcion && opcion.seccion === seccionActiva;
          const clases = `flex items-center gap-3 rounded-xl px-3 py-[11px] text-[14.5px] ${estaActiva ? "bg-[#fbe3d8] font-extrabold text-[#d9583c]" : "font-semibold text-[#6e6359]"}`;
          const contenido = <><Icono tipo={icono} className="h-[19px] w-[19px]" />{texto}</>;

          return "href" in opcion
            ? <Link key={texto} href={opcion.href} aria-current={estaActiva ? "page" : undefined} className={clases}>{contenido}</Link>
            : <div key={texto} className={clases}>{contenido}</div>;
        })}
      </nav>
      <div className="mt-[10px] border-t border-[#ece0d0] pt-[14px]"><div className="flex items-center gap-[11px] px-2 py-1">
        <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#f2937a] font-fredoka text-base font-semibold text-white">C</div>
        <div className="min-w-0 flex-1"><div className="text-sm font-extrabold text-[#3f362e]">Caro Giménez</div><div className="text-xs text-[#a89a8b]">Maestra · Soles</div></div>
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#f6ecdf] text-[#94887b]"><Icono tipo="salir" className="h-4 w-4" /></div>
      </div></div>
    </aside>
  );
}
