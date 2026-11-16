"use client";

import { useRouter } from "next/navigation";
import { FormularioPublicacion } from "./formulario-publicacion";
import { Modal } from "./modal";

export function ContenedorModalPublicacion() {
  const router = useRouter();

  function publicar() {
    window.alert("Demostración: no se guardó ninguna publicación.");
    router.back();
  }

  return <Modal><FormularioPublicacion onCancelar={() => router.back()} onPublicar={publicar} /></Modal>;
}
