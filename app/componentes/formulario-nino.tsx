"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type Sala = "Soles" | "Lunas";

type DatosFormulario = {
  nombre: string;
  fechaNacimiento: string;
  sala: Sala;
  alergias: string;
  notasMedicas: string;
};

const datosIniciales: DatosFormulario = {
  nombre: "",
  fechaNacimiento: "",
  sala: "Soles",
  alergias: "",
  notasMedicas: "",
};

function EtiquetaCampo({ children }: { children: string }) {
  return <span className="mb-2 block text-[12px] font-extrabold tracking-[.7px] text-[#94887b]">{children}</span>;
}

const estiloCampo = "w-full rounded-[14px] border-[1.5px] border-[#eadfd0] bg-white px-4 py-[13px] text-[15px] text-[#3f362e] outline-none placeholder:text-[#b6a99b] focus:border-[#f2937a]";

export function FormularioNino() {
  const [datos, establecerDatos] = useState(datosIniciales);

  function actualizarCampo(campo: keyof DatosFormulario, valor: string) {
    establecerDatos((actuales) => ({ ...actuales, [campo]: valor }));
  }

  function enviarFormulario(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
  }

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-start justify-center px-5 py-10 sm:px-6">
      <section className="w-full max-w-[520px] overflow-hidden rounded-[24px] border border-[#ece0d0] bg-[#fbf4ec] shadow-[0_20px_50px_-24px_rgba(63,54,46,.35)]">
        <header className="flex items-center justify-between border-b border-[#ece0d0] px-6 py-5">
          <Link href="/kids" className="text-[15px] font-bold text-[#94887b]">Cancelar</Link>
          <h1 className="m-0 font-fredoka text-[18px] font-semibold text-[#3f362e]">Agregar niño</h1>
          <button type="submit" form="formulario-nino" className="border-0 bg-transparent p-0 text-[15px] font-extrabold text-[#d9583c]">Guardar</button>
        </header>
        <form id="formulario-nino" onSubmit={enviarFormulario} className="p-6">
          <div className="mb-[18px]">
            <EtiquetaCampo>NOMBRE COMPLETO</EtiquetaCampo>
            <input name="nombre" value={datos.nombre} onChange={(evento) => actualizarCampo("nombre", evento.target.value)} placeholder="Ej. Martina López" className={estiloCampo} />
          </div>
          <div className="mb-[18px] grid grid-cols-1 gap-[14px] sm:grid-cols-2">
            <div>
              <EtiquetaCampo>FECHA DE NACIMIENTO</EtiquetaCampo>
              <input name="fechaNacimiento" value={datos.fechaNacimiento} onChange={(evento) => actualizarCampo("fechaNacimiento", evento.target.value)} placeholder="dd/mm/aaaa" inputMode="numeric" className={estiloCampo} />
            </div>
            <div>
              <EtiquetaCampo>SALA</EtiquetaCampo>
              <select name="sala" value={datos.sala} onChange={(evento) => actualizarCampo("sala", evento.target.value)} className={`${estiloCampo} font-bold`}>
                <option value="Soles">Soles</option>
                <option value="Lunas">Lunas</option>
              </select>
            </div>
          </div>
          <div className="mb-[18px]">
            <EtiquetaCampo>ALERGIAS (ETIQUETAS)</EtiquetaCampo>
            <input name="alergias" value={datos.alergias} onChange={(evento) => actualizarCampo("alergias", evento.target.value)} placeholder="Ej. Maní, Lactosa" className={estiloCampo} />
          </div>
          <div>
            <EtiquetaCampo>NOTAS MÉDICAS</EtiquetaCampo>
            <textarea name="notasMedicas" value={datos.notasMedicas} onChange={(evento) => actualizarCampo("notasMedicas", evento.target.value)} placeholder="Indicaciones, medicación, contactos…" className={`${estiloCampo} min-h-[90px] resize-y leading-[1.5]`} />
          </div>
        </form>
      </section>
    </div>
  );
}
