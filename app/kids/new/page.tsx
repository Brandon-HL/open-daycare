import Link from "next/link";
import { BarraLateral } from "../../componentes/barra-lateral";
import { NavegacionMovil } from "../../componentes/navegacion-movil";

export default function PaginaNuevoNino() {
  return (
    <div className="flex min-h-screen bg-[#f6ecdf] text-[#3f362e]">
      <BarraLateral seccionActiva="ninos" />
      <main className="min-w-0 flex-1">
        <NavegacionMovil seccionActiva="ninos" />
        <div className="flex min-h-[calc(100vh-64px)] items-start justify-center px-5 py-10 sm:px-6">
          <section className="w-full max-w-[520px] overflow-hidden rounded-[24px] border border-[#ece0d0] bg-[#fbf4ec] shadow-[0_20px_50px_-24px_rgba(63,54,46,.35)]">
            <header className="flex items-center justify-between border-b border-[#ece0d0] px-6 py-5">
              <Link href="/kids" className="text-[15px] font-bold text-[#94887b]">Cancelar</Link>
              <h1 className="m-0 font-fredoka text-[18px] font-semibold text-[#3f362e]">Agregar niño</h1>
              <span className="text-[15px] font-extrabold text-[#d9583c]">Guardar</span>
            </header>
            <div className="p-6">
              <p className="m-0 text-sm text-[#94887b]">Completa los datos del niño.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
