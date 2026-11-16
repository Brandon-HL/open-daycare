"use client";

import { useRouter } from "next/navigation";
import { FormularioVinculacionPadre } from "./formulario-vinculacion-padre";
import { Modal } from "./modal";

export function ContenedorModalVinculacion({ nombreNino }: { nombreNino: string }) {
  const router = useRouter();

  return <Modal><FormularioVinculacionPadre nombreNino={nombreNino} alCerrar={() => router.back()} alEnviar={() => router.back()} /></Modal>;
}
