import { notFound } from "next/navigation";
import { ContenedorModalVinculacion } from "../../../../componentes/contenedor-modal-vinculacion";
import { ninos } from "../../../../datos/ninos";

export function generateStaticParams() {
  return ninos.map((nino) => ({ id: String(nino.id) }));
}

export default async function ModalVincularPadre({ params }: PageProps<"/kids/[id]/link-parent">) {
  const { id } = await params;
  const nino = ninos.find((registro) => String(registro.id) === id);

  if (!nino) {
    notFound();
  }

  return <ContenedorModalVinculacion nombreNino={nino.nombre} />;
}
