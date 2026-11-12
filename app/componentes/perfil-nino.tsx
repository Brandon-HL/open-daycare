import Link from "next/link";
import type { Nino, Padre } from "../datos/ninos";
import { Icono } from "./icono";

function FilaDato({ titulo, valor }: { titulo: string; valor: string }) {
  return <div className="flex justify-between gap-3 border-b border-[#f0e6d8] px-[18px] py-[15px] last:border-b-0"><span className="text-[14.5px] text-[#94887b]">{titulo}</span><span className="text-right text-[14.5px] font-extrabold text-[#3f362e]">{valor}</span></div>;
}

function PadreVinculado({ padre, indice }: { padre: Padre; indice: number }) {
  const activo = padre.estado === "activa";

  return (
    <div className="flex items-center gap-3">
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-fredoka text-base font-semibold text-white ${indice % 2 === 0 ? "bg-[#c9b6e8]" : "bg-[#a9c7e8]"}`}>{padre.nombre[0]}</div>
      <div className="min-w-0 flex-1"><div className="text-[14.5px] font-extrabold text-[#3f362e]">{padre.nombre}</div><div className="text-[12.5px] text-[#a89a8b]">{padre.vinculo} · {padre.estado}</div></div>
      <span className={`shrink-0 rounded-full px-[9px] py-1 text-[10.5px] font-extrabold ${activo ? "bg-[#cfebd8] text-[#3e9b6c]" : "bg-[#f7e7a6] text-[#9a7b1e]"}`}>{activo ? "ACTIVA" : "PENDIENTE"}</span>
    </div>
  );
}

export function PerfilNino({ nino }: { nino: Nino }) {
  return (
      <main className="h-screen min-w-0 flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-[820px] px-5 pb-20 pt-[34px] sm:px-10">
          <Link href="/kids" className="mb-5 flex items-center gap-[7px] text-sm font-bold text-[#94887b]"><svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>Volver a Niños</Link>
          <div className="flex flex-wrap items-start gap-[26px]">
            <div className="flex min-w-[300px] flex-1 flex-col gap-[18px]">
              <header className="flex items-center gap-[18px]">
                <div className="flex h-[84px] w-[84px] shrink-0 items-center justify-center rounded-full font-fredoka text-[34px] font-semibold" style={{ backgroundColor: nino.colorAvatar, color: nino.colorInicial }}>{nino.inicial}</div>
                <div className="min-w-0 flex-1"><h1 className="m-0 font-fredoka text-[28px] font-semibold text-[#3f362e]">{nino.nombre}</h1><p className="m-0 mt-[3px] text-[15px] text-[#94887b]">{nino.edad} · Sala {nino.sala}</p></div>
                <span className="rounded-xl border-[1.5px] border-[#ece0d0] bg-[#fffdf9] px-4 py-[9px] text-sm font-bold text-[#6e6359]">Editar</span>
              </header>
              {nino.alerta && (
                <div className="flex gap-[14px] rounded-2xl bg-[#fbdad6] px-[18px] py-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] bg-[#f4a8a0]"><svg className="h-[22px] w-[22px] text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /><path d="M12 9v4M12 17h.01" /></svg></div>
                  <div><div className="mb-0.5 text-[15px] font-extrabold text-[#c5413a]">Alergias y notas</div><div className="text-[14.5px] leading-[1.5] text-[#b25249]">{nino.alerta.descripcion}</div></div>
                </div>
              )}
              <div className="overflow-hidden rounded-2xl border border-[#ece0d0] bg-[#fffdf9]">
                <FilaDato titulo="Fecha de nacimiento" valor={nino.fechaNacimiento} />
                <FilaDato titulo="Sala" valor={nino.sala} />
                <FilaDato titulo="Ingreso" valor={nino.ingreso} />
              </div>
            </div>
            <div className="flex w-[300px] shrink-0 flex-col gap-[14px]">
              <span className="flex w-full items-center justify-center gap-[9px] rounded-[14px] bg-[#3f362e] p-[13px] text-[15px] font-extrabold text-white"><Icono tipo="sol" className="h-[18px] w-[18px]" />Resumen del día</span>
              <section className="rounded-2xl border border-[#ece0d0] bg-[#fffdf9] px-[18px] py-4">
                <h2 className="mb-[14px] mt-0 text-[12.5px] font-extrabold tracking-[.8px] text-[#8a7c6d]">PADRES VINCULADOS</h2>
                <div className="flex flex-col gap-[14px]">
                  {nino.padres.map((padre, indice) => <PadreVinculado key={padre.nombre} padre={padre} indice={indice} />)}
                  {nino.padres.length === 0 && <p className="m-0 text-sm text-[#a89a8b]">Sin padres vinculados</p>}
                  <div className="flex items-center gap-3 pt-2"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[1.5px] border-dashed border-[#d8cbba] text-[#b0a290]"><Icono tipo="plus" className="h-[18px] w-[18px]" /></span><span className="text-[14.5px] font-extrabold text-[#c5503a]">Vincular otro padre</span></div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
  );
}
