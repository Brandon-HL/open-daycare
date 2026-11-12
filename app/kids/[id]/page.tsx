import { notFound } from "next/navigation";
import { BarraLateral } from "../../componentes/barra-lateral";
import { PerfilNino } from "../../componentes/perfil-nino";
import { ninos } from "../../datos/ninos";

export function generateStaticParams() {
  return ninos.map((nino) => ({ id: String(nino.id) }));
}

export default async function PaginaPerfilNino({ params }: PageProps<"/kids/[id]">) {
  const { id } = await params;
  const nino = ninos.find((registro) => String(registro.id) === id);

  if (!nino) {
    notFound();
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#f6ecdf] text-[#3f362e]">
      <BarraLateral seccionActiva="ninos" />
      <PerfilNino nino={nino} />
    </div>
  );
}
