"use client";

import { FormEvent, useState } from "react";
import { Icono } from "./icono";

type Destinatario = "mateo" | "sofia" | "benjamin" | "sala";
type TipoPublicacion = "comida" | "siesta" | "actividad" | "logro" | "animo" | "foto" | "anuncio";

type DatosPublicacion = {
  destinatarios: Destinatario[];
  tipo: TipoPublicacion | "";
  descripcion: string;
};

type ErroresPublicacion = Partial<Record<"destinatarios" | "tipo" | "descripcion", string>>;

type PropiedadesFormulario = {
  onCancelar?: () => void;
  onPublicar?: (datos: DatosPublicacion) => void;
};

const datosIniciales: DatosPublicacion = {
  destinatarios: [],
  tipo: "",
  descripcion: "",
};

const destinatarios = [
  { valor: "mateo", nombre: "Mateo", inicial: "M", fondo: "#a9d9e8", texto: "#1f7a93" },
  { valor: "sofia", nombre: "Sofía", inicial: "S", fondo: "#f4b8cc", texto: "#c44a7a" },
  { valor: "benjamin", nombre: "Benjamín", inicial: "B", fondo: "#b9dec4", texto: "#3e8b62" },
] as const;

const tipos = [
  { valor: "comida", nombre: "Comida", clase: "bg-[#9a7b1e] text-white" },
  { valor: "siesta", nombre: "Siesta", clase: "bg-[#e7dcf6] text-[#7b5fc0]" },
  { valor: "actividad", nombre: "Actividad", clase: "bg-[#2e89a6] text-white" },
  { valor: "logro", nombre: "Logro", clase: "bg-[#cfebd8] text-[#3e9b6c]" },
  { valor: "animo", nombre: "Ánimo", clase: "bg-[#f9d2de] text-[#c56486]" },
  { valor: "foto", nombre: "Foto", clase: "bg-[#fbd8cc] text-[#d9684a]" },
  { valor: "anuncio", nombre: "Anuncio", clase: "bg-[#ccd8f4] text-[#4e72c8]" },
] as const;

function EtiquetaSeccion({ children }: { children: string }) {
  return <div className="mb-2.5 text-xs font-extrabold tracking-[.7px] text-[#94887b]">{children}</div>;
}

export function FormularioPublicacion({ onCancelar, onPublicar }: PropiedadesFormulario) {
  const [datos, establecerDatos] = useState(datosIniciales);
  const [errores, establecerErrores] = useState<ErroresPublicacion>({});

  function actualizarError(campo: keyof ErroresPublicacion) {
    if (!(campo in errores)) {
      return;
    }

    establecerErrores((actuales) => {
      const nuevosErrores = { ...actuales };
      delete nuevosErrores[campo];
      return nuevosErrores;
    });
  }

  function alternarDestinatario(destinatario: Destinatario) {
    establecerDatos((actuales) => {
      const seleccionados: Destinatario[] = destinatario === "sala"
        ? actuales.destinatarios.includes("sala") ? [] : ["sala"]
        : actuales.destinatarios.includes(destinatario)
          ? actuales.destinatarios.filter((actual) => actual !== destinatario)
          : [...actuales.destinatarios.filter((actual) => actual !== "sala"), destinatario];

      return { ...actuales, destinatarios: seleccionados };
    });
    actualizarError("destinatarios");
  }

  function seleccionarTipo(tipo: TipoPublicacion) {
    establecerDatos((actuales) => ({ ...actuales, tipo }));
    actualizarError("tipo");
  }

  function actualizarDescripcion(descripcion: string) {
    establecerDatos((actuales) => ({ ...actuales, descripcion }));
    actualizarError("descripcion");
  }

  function enviarFormulario(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const nuevosErrores: ErroresPublicacion = {};

    if (datos.destinatarios.length === 0) {
      nuevosErrores.destinatarios = "Seleccioná al menos un destinatario.";
    }

    if (!datos.tipo) {
      nuevosErrores.tipo = "Seleccioná un tipo de publicación.";
    }

    if (!datos.descripcion.trim()) {
      nuevosErrores.descripcion = "Escribí una descripción.";
    }

    establecerErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      onPublicar?.(datos);
    }
  }

  return (
    <section className="w-full max-w-[580px] overflow-hidden rounded-[24px] border border-[#ece0d0] bg-[#fbf4ec] text-[#3f362e] shadow-[0_20px_50px_-24px_rgba(63,54,46,.35)]">
      <header className="flex items-center justify-between border-b border-[#ece0d0] px-6 py-5">
        <button type="button" onClick={onCancelar} className="border-0 bg-transparent p-0 text-[15px] font-bold text-[#94887b]">Cancelar</button>
        <h1 className="m-0 font-fredoka text-lg font-semibold">Nueva publicación</h1>
        <button type="submit" form="formulario-publicacion" className="border-0 bg-transparent p-0 text-[15px] font-extrabold text-[#d9583c]">Publicar</button>
      </header>

      <form id="formulario-publicacion" onSubmit={enviarFormulario} className="p-6">
        <div className="mb-[22px]">
          <EtiquetaSeccion>PARA</EtiquetaSeccion>
          <div className="flex flex-wrap gap-[9px]">
            {destinatarios.map((destinatario) => {
              const seleccionado = datos.destinatarios.includes(destinatario.valor);
              return <button key={destinatario.valor} type="button" onClick={() => alternarDestinatario(destinatario.valor)} aria-pressed={seleccionado} className={`flex items-center gap-2 rounded-full border-[1.5px] px-1.5 py-1.5 pr-3.5 text-sm font-bold ${seleccionado ? "border-[#3f362e] bg-[#3f362e] text-white" : "border-[#ece0d0] bg-[#fffdf9] text-[#6e6359]"}`}>
                <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full font-fredoka text-[13px] font-semibold" style={{ backgroundColor: destinatario.fondo, color: destinatario.texto }}>{destinatario.inicial}</span>
                {destinatario.nombre}
              </button>;
            })}
            <button type="button" onClick={() => alternarDestinatario("sala")} aria-pressed={datos.destinatarios.includes("sala")} className={`rounded-full border-[1.5px] px-4 py-1.5 text-sm font-bold ${datos.destinatarios.includes("sala") ? "border-[#3f362e] bg-[#3f362e] text-white" : "border-[#ece0d0] bg-[#fffdf9] text-[#6e6359]"}`}>Toda la sala</button>
          </div>
          {errores.destinatarios && <p className="mb-0 mt-2 text-xs font-bold text-[#d9583c]">{errores.destinatarios}</p>}
        </div>

        <div className="mb-[22px]">
          <EtiquetaSeccion>TIPO</EtiquetaSeccion>
          <div className="flex flex-wrap gap-[9px]">
            {tipos.map((tipo) => <button key={tipo.valor} type="button" onClick={() => seleccionarTipo(tipo.valor)} aria-pressed={datos.tipo === tipo.valor} className={`rounded-full border-2 px-4 py-1.5 text-[13.5px] font-extrabold ${tipo.clase} ${datos.tipo === tipo.valor ? "border-[#3f362e]" : "border-transparent"}`}>{tipo.nombre}</button>)}
          </div>
          {errores.tipo && <p className="mb-0 mt-2 text-xs font-bold text-[#d9583c]">{errores.tipo}</p>}
        </div>

        <div className="mb-[22px]">
          <EtiquetaSeccion>DESCRIPCIÓN</EtiquetaSeccion>
          <textarea value={datos.descripcion} onChange={(evento) => actualizarDescripcion(evento.target.value)} placeholder="Contá cómo le fue hoy…" aria-invalid={Boolean(errores.descripcion)} className={`min-h-[120px] w-full resize-y rounded-[14px] border-[1.5px] bg-white px-4 py-3.5 text-[15px] leading-[1.5] text-[#3f362e] outline-none placeholder:text-[#b6a99b] ${errores.descripcion ? "border-[#d9583c]" : "border-[#eadfd0] focus:border-[#f2937a]"}`} />
          {errores.descripcion && <p className="mb-0 mt-2 text-xs font-bold text-[#d9583c]">{errores.descripcion}</p>}
        </div>

        <div>
          <EtiquetaSeccion>FOTOS</EtiquetaSeccion>
          <div className="flex gap-3">
            <div className="flex h-24 w-24 items-center justify-center rounded-[14px] border border-[#ece0d0] bg-[#f4ece1] text-[#cbb89f]"><Icono tipo="imagen" className="h-[26px] w-[26px]" /></div>
            <div className="flex h-24 w-24 flex-col items-center justify-center gap-1.5 rounded-[14px] border-[1.5px] border-dashed border-[#dbcdba] bg-[#f4ece1] text-[#b0a290]"><Icono tipo="plus" className="h-[22px] w-[22px] text-[#c5503a]" /><span className="text-xs">Agregar</span></div>
          </div>
        </div>
      </form>
    </section>
  );
}
