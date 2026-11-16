"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type Sala = "Soles" | "Lunas";

type DatosFormulario = {
  nombre: string;
  fechaNacimiento: string;
  sala: Sala;
  alergias: string;
  notasMedicas: string;
};

type ErroresFormulario = Partial<Record<"nombre" | "fechaNacimiento" | "sala", string>>;

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

function validarFecha(fecha: string) {
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(fecha)) {
    return "Usá el formato dd/mm/aaaa.";
  }

  const [dia, mes, anio] = fecha.split("/").map(Number);
  const fechaIngresada = new Date(anio, mes - 1, dia);
  const fechaActual = new Date();
  const hoy = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate());
  const fechaValida = fechaIngresada.getFullYear() === anio
    && fechaIngresada.getMonth() === mes - 1
    && fechaIngresada.getDate() === dia;

  if (!fechaValida) {
    return "Ingresá una fecha real.";
  }

  if (fechaIngresada > hoy) {
    return "La fecha no puede ser futura.";
  }

  return "";
}

function formatearFecha(valor: string) {
  const digitos = valor.replace(/\D/g, "").slice(0, 8);
  const partes = [digitos.slice(0, 2), digitos.slice(2, 4), digitos.slice(4, 8)].filter(Boolean);
  return partes.join("/");
}

export function FormularioNino() {
  const router = useRouter();
  const [datos, establecerDatos] = useState(datosIniciales);
  const [errores, establecerErrores] = useState<ErroresFormulario>({});

  function actualizarCampo(campo: keyof DatosFormulario, valor: string) {
    establecerDatos((actuales) => ({ ...actuales, [campo]: valor }));
    if (campo in errores) {
      establecerErrores((actuales) => {
        const nuevosErrores = { ...actuales };
        delete nuevosErrores[campo as keyof ErroresFormulario];
        return nuevosErrores;
      });
    }
  }

  function enviarFormulario(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const nuevosErrores: ErroresFormulario = {};

    if (!datos.nombre.trim()) {
      nuevosErrores.nombre = "Ingresá el nombre completo.";
    }

    if (!datos.fechaNacimiento.trim()) {
      nuevosErrores.fechaNacimiento = "Ingresá la fecha de nacimiento.";
    } else {
      const errorFecha = validarFecha(datos.fechaNacimiento.trim());
      if (errorFecha) {
        nuevosErrores.fechaNacimiento = errorFecha;
      }
    }

    if (!datos.sala) {
      nuevosErrores.sala = "Seleccioná una sala.";
    }

    establecerErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length > 0) {
      return;
    }

    window.alert("Demostración: no se guardó ningún niño.");
    router.push("/kids");
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
            <input name="nombre" value={datos.nombre} onChange={(evento) => actualizarCampo("nombre", evento.target.value)} placeholder="Ej. Martina López" aria-invalid={Boolean(errores.nombre)} className={`${estiloCampo} ${errores.nombre ? "border-[#d9583c]" : ""}`} />
            {errores.nombre && <p className="mb-0 mt-1.5 text-[12.5px] font-bold text-[#d9583c]">{errores.nombre}</p>}
          </div>
          <div className="mb-[18px] grid grid-cols-1 gap-[14px] sm:grid-cols-2">
            <div>
              <EtiquetaCampo>FECHA DE NACIMIENTO</EtiquetaCampo>
              <input name="fechaNacimiento" value={datos.fechaNacimiento} onChange={(evento) => actualizarCampo("fechaNacimiento", formatearFecha(evento.target.value))} placeholder="dd/mm/aaaa" inputMode="numeric" maxLength={10} aria-invalid={Boolean(errores.fechaNacimiento)} className={`${estiloCampo} ${errores.fechaNacimiento ? "border-[#d9583c]" : ""}`} />
              {errores.fechaNacimiento && <p className="mb-0 mt-1.5 text-[12.5px] font-bold text-[#d9583c]">{errores.fechaNacimiento}</p>}
            </div>
            <div>
              <EtiquetaCampo>SALA</EtiquetaCampo>
              <select name="sala" value={datos.sala} onChange={(evento) => actualizarCampo("sala", evento.target.value)} aria-invalid={Boolean(errores.sala)} className={`${estiloCampo} font-bold ${errores.sala ? "border-[#d9583c]" : ""}`}>
                <option value="Soles">Soles</option>
                <option value="Lunas">Lunas</option>
              </select>
              {errores.sala && <p className="mb-0 mt-1.5 text-[12.5px] font-bold text-[#d9583c]">{errores.sala}</p>}
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
