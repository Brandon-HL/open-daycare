import { BarraLateral } from "../componentes/barra-lateral";
import { Icono } from "../componentes/icono";
import { ListadoNinos } from "../componentes/listado-ninos";
import { NavegacionMovil } from "../componentes/navegacion-movil";
import { ninos } from "../datos/ninos";

export default function PaginaNinos() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f6ecdf] text-[#3f362e]">
      <BarraLateral seccionActiva="ninos" />
      <main className="h-screen min-w-0 flex-1 overflow-y-auto">
        <NavegacionMovil seccionActiva="ninos" />
        <div className="mx-auto w-full max-w-[880px] px-5 pb-20 pt-[34px] sm:px-10">
          <header className="mb-[22px] flex flex-wrap items-end justify-between gap-4">
            <div><div className="mb-1 text-[12.5px] font-extrabold tracking-[.8px] text-[#d9583c]">GESTIÓN</div><h1 className="m-0 font-fredoka text-[30px] font-semibold text-[#3f362e]">Niños</h1></div>
            <span className="flex shrink-0 items-center gap-2 rounded-[14px] bg-gradient-to-b from-[#f4977e] to-[#ee8164] px-[18px] py-[11px] text-[14.5px] font-extrabold text-white shadow-[0_8px_18px_-8px_rgba(238,129,100,.7)]"><Icono tipo="plus" className="h-[17px] w-[17px]" />Agregar niño</span>
          </header>
          <ListadoNinos ninos={ninos} />
        </div>
      </main>
    </div>
  );
}
