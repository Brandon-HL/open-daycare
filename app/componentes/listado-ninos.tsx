"use client";

import { useState } from "react";
import type { Nino } from "../datos/ninos";
import { TarjetaNino } from "./tarjeta-nino";

function normalizar(texto: string) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("es");
}

export function ListadoNinos({ ninos }: { ninos: Nino[] }) {
  const [busqueda, establecerBusqueda] = useState("");
  const ninosVisibles = ninos.filter((nino) => normalizar(nino.nombre).includes(normalizar(busqueda.trim())));

  return (
    <>
      <label className="mb-[22px] flex items-center gap-[11px] rounded-[14px] border border-[#ece0d0] bg-[#fffdf9] px-4 py-3">
        <svg className="h-[18px] w-[18px] shrink-0 text-[#b0a290]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
        <input type="search" aria-label="Buscar niño" placeholder="Buscar niño…" value={busqueda} onChange={(evento) => establecerBusqueda(evento.target.value)} className="min-w-0 flex-1 border-0 bg-transparent text-[15px] text-[#3f362e] outline-none placeholder:text-[#b6a99b]" />
      </label>
      <div className="mb-[14px] flex items-center gap-3"><span className="text-[12.5px] font-extrabold tracking-[.8px] text-[#3f362e]">SALA SOLES</span><span className="text-[13px] text-[#a89a8b]">{ninosVisibles.length} {ninosVisibles.length === 1 ? "niño" : "niños"}</span><span className="h-px flex-1 bg-[#e7dac8]" /></div>
      {ninosVisibles.length > 0 ? (
        <div className="grid grid-cols-1 gap-[14px] md:grid-cols-2">
          {ninosVisibles.map((nino) => <TarjetaNino key={nino.id} nino={nino} />)}
        </div>
      ) : (
        <div className="rounded-[18px] border border-[#ece0d0] bg-[#fffdf9] p-8 text-center text-[#94887b]">No se encontraron niños con ese nombre.</div>
      )}
    </>
  );
}
