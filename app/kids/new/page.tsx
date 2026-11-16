import { BarraLateral } from "../../componentes/barra-lateral";
import { FormularioNino } from "../../componentes/formulario-nino";
import { NavegacionMovil } from "../../componentes/navegacion-movil";

export default function PaginaNuevoNino() {
  return (
    <div className="flex min-h-screen bg-[#f6ecdf] text-[#3f362e]">
      <BarraLateral seccionActiva="ninos" />
      <main className="min-w-0 flex-1">
        <NavegacionMovil seccionActiva="ninos" />
        <FormularioNino />
      </main>
    </div>
  );
}
