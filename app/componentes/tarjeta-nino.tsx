import Link from "next/link";
import type { Nino } from "../datos/ninos";

export function TarjetaNino({ nino }: { nino: Nino }) {
  const cantidadPadres = nino.padres.length;
  const textoPadres = cantidadPadres === 0
    ? "sin padres vinculados"
    : `${cantidadPadres} ${cantidadPadres === 1 ? "padre vinculado" : "padres vinculados"}`;

  return (
    <Link href={`/kids/${nino.id}`} className="flex min-w-0 items-center gap-[14px] rounded-[18px] border border-[#ece0d0] bg-[#fffdf9] p-4 shadow-[0_4px_14px_-12px_rgba(120,90,60,.5)] transition duration-150 hover:-translate-y-0.5 hover:border-[#f2a78e]">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-fredoka text-[19px] font-semibold" style={{ backgroundColor: nino.colorAvatar, color: nino.colorInicial }}>{nino.inicial}</div>
      <div className="min-w-0 flex-1">
        <div className="font-fredoka text-base font-semibold text-[#3f362e]">{nino.nombre}</div>
        <div className="text-[13px] text-[#a89a8b]">{nino.edad} · {textoPadres}</div>
      </div>
      {nino.alerta ? (
        <span className="shrink-0 rounded-full bg-[#fbd8cc] px-[9px] py-[5px] text-[11px] font-extrabold text-[#d9684a]">{nino.alerta.etiqueta}</span>
      ) : cantidadPadres === 0 ? (
        <span className="shrink-0 rounded-full bg-[#f9d2de] px-[9px] py-[5px] text-[11px] font-extrabold text-[#c56486]">VINCULAR</span>
      ) : (
        <svg className="h-[18px] w-[18px] shrink-0 text-[#cbb89f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
      )}
    </Link>
  );
}
