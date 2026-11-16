import { notFound } from "next/navigation";
import { BarraLateral } from "../../../componentes/barra-lateral";
import { FormularioVinculacionPadre } from "../../../componentes/formulario-vinculacion-padre";
import { NavegacionMovil } from "../../../componentes/navegacion-movil";
import { ninos } from "../../../datos/ninos";

export function generateStaticParams() {
  return ninos.map((nino) => ({ id: String(nino.id) }));
}

export default async function PaginaVincularPadre({ params }: PageProps<"/kids/[id]/link-parent">) {
  const { id } = await params;
  const nino = ninos.find((registro) => String(registro.id) === id);

  if (!nino) {
    notFound();
  }

  return (
    <div className="flex min-h-screen bg-[#f6ecdf] text-[#3f362e]">
      <BarraLateral seccionActiva="ninos" />
      <main className="min-w-0 flex-1">
        <NavegacionMovil seccionActiva="ninos" />
        <div className="flex min-h-[calc(100vh-64px)] items-start justify-center px-5 py-10 sm:px-6">
          <FormularioVinculacionPadre nombreNino={nino.nombre} rutaRetorno={`/kids/${nino.id}`} />
        </div>
      </main>
    </div>
  );
}
