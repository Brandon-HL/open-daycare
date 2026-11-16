"use client";

import { useState } from "react";

type Parentesco = "Mamá" | "Papá" | "Tutor/a";

type DatosVinculacion = {
  nombre: string;
  email: string;
  parentesco: Parentesco;
};

export function FormularioVinculacionPadre({ nombreNino }: { nombreNino: string }) {
  const [datos, establecerDatos] = useState<DatosVinculacion>({ nombre: "", email: "", parentesco: "Mamá" });

  function actualizarDato(campo: keyof DatosVinculacion, valor: string) {
    establecerDatos((actuales) => ({ ...actuales, [campo]: valor } as DatosVinculacion));
  }

  return (
    <section className="overflow-hidden rounded-[24px] border border-[#ece0d0] bg-[#fbf4ec] shadow-[0_20px_50px_-24px_rgba(63,54,46,.35)]">
      <header className="flex items-center justify-between border-b border-[#ece0d0] px-6 py-5">
        <div><h1 className="m-0 font-fredoka text-[18px] font-semibold text-[#3f362e]">Vincular padre</h1><p className="m-0 text-[13px] text-[#a89a8b]">a {nombreNino}</p></div>
        <button type="button" aria-label="Cerrar" className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] border-0 bg-[#f0e6d8] text-[#94887b]" disabled><svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="m18 6-12 12M6 6l12 12" /></svg></button>
      </header>
      <form className="p-[22px] sm:px-[26px]">
        <div className="mb-5 flex gap-[11px] rounded-[14px] bg-[#e3ecfb] p-[13px_16px]">
          <svg className="mt-px h-5 w-5 shrink-0 text-[#4e72c8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
          <span className="text-[13.5px] leading-[1.45] text-[#3f5694]">Le enviaremos un correo con un código para que active su cuenta. Solo verá el feed de {nombreNino}.</span>
        </div>
        <label className="mb-[18px] block"><span className="mb-2 block text-xs font-extrabold tracking-[.7px] text-[#94887b]">NOMBRE DEL PADRE/MADRE</span><input value={datos.nombre} onChange={(evento) => actualizarDato("nombre", evento.target.value)} placeholder="Ej. Diego Fernández" className="w-full rounded-[14px] border-[1.5px] border-[#eadfd0] bg-white px-4 py-[13px] text-[15px] text-[#3f362e] outline-none placeholder:text-[#b6a99b] focus:border-[#f2937a]" /></label>
        <label className="mb-[18px] block"><span className="mb-2 block text-xs font-extrabold tracking-[.7px] text-[#94887b]">EMAIL</span><input type="email" value={datos.email} onChange={(evento) => actualizarDato("email", evento.target.value)} placeholder="correo@ejemplo.com" className="w-full rounded-[14px] border-[1.5px] border-[#eadfd0] bg-white px-4 py-[13px] text-[15px] text-[#3f362e] outline-none placeholder:text-[#b6a99b] focus:border-[#f2937a]" /></label>
        <fieldset className="mb-5 border-0 p-0"><legend className="mb-2.5 block text-xs font-extrabold tracking-[.7px] text-[#94887b]">PARENTESCO</legend><div className="flex gap-[9px]">{(["Mamá", "Papá", "Tutor/a"] as Parentesco[]).map((parentesco) => <button key={parentesco} type="button" onClick={() => actualizarDato("parentesco", parentesco)} className={`flex-1 rounded-full border-[1.5px] px-2 py-[11px] text-sm font-extrabold ${datos.parentesco === parentesco ? "border-[#9fb8ec] bg-[#ccd8f4] text-[#4e72c8]" : "border-[#ece0d0] bg-[#fffdf9] text-[#6e6359]"}`}>{parentesco}</button>)}</div></fieldset>
        <div className="mb-5 rounded-2xl border-[1.5px] border-dashed border-[#e6d08a] bg-[#fbf1d6] p-[18px] text-center"><div className="mb-2 text-xs font-extrabold tracking-[.7px] text-[#a88526]">CÓDIGO DE INVITACIÓN</div><div className="font-fredoka text-[34px] font-semibold tracking-[7px] text-[#8a7234]">7K4P9</div><div className="mt-1.5 text-[13px] text-[#a88526]">Vence en 7 días</div></div>
        <button type="button" disabled className="flex w-full items-center justify-center gap-[9px] rounded-[14px] border-0 bg-gradient-to-b from-[#f4977e] to-[#ee8164] p-[14px] text-[15.5px] font-extrabold text-white shadow-[0_10px_22px_-8px_rgba(238,129,100,.7)]"><svg className="h-[19px] w-[19px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4z" /><path d="M22 2 11 13" /></svg>Enviar invitación</button>
      </form>
    </section>
  );
}
