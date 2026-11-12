import { BarraLateral } from "./componentes/barra-lateral";
import { Icono } from "./componentes/icono";

function Etiqueta({ tipo, children }: { tipo: "logro" | "actividad" | "anuncio"; children: string }) {
  const estilos = { logro: "bg-[#cfebd8] text-[#3e9b6c]", actividad: "bg-[#c7e7f1] text-[#2e89a6]", anuncio: "bg-[#ccd8f4] text-[#4e72c8]" };
  return <div className={`flex items-center gap-[7px] rounded-full px-3 py-1.5 text-xs font-extrabold tracking-[.5px] ${estilos[tipo]}`}><span className="h-2 w-2 rounded-full bg-current" />{children}</div>;
}

function Publicacion({ hora, tipo, nombre, para, texto, reacciones, comentarios, foto = false, anuncio = false }: { hora: string; tipo: "logro" | "actividad" | "anuncio"; nombre: string; para: string; texto: string; reacciones: number; comentarios: number; foto?: boolean; anuncio?: boolean }) {
  return <article className="rounded-[20px] border border-[#ece0d0] bg-[#fffdf9] px-[22px] py-5 shadow-[0_4px_16px_-12px_rgba(120,90,60,.5)]">
    <div className="mb-[14px] flex items-center gap-3">
      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-fredoka text-[17px] font-semibold ${anuncio ? "bg-[#ccd8f4] text-[#4e72c8]" : "bg-[#a9d9e8] text-[#1f7a93]"}`}>{anuncio ? <Icono tipo="megafono" className="h-5 w-5" /> : "M"}</div>
      <div className="min-w-0 flex-1"><div className="font-fredoka text-[16.5px] font-semibold text-[#3f362e]">{nombre}</div><div className="text-[12.5px] text-[#a89a8b]">{hora} · publicado por vos</div></div>
      <Etiqueta tipo={tipo}>{tipo.toUpperCase()}</Etiqueta>
    </div>
    <div className="mb-2.5 text-[12.5px] text-[#a89a8b]">Para: {para}</div>
    <p className="m-0 text-[15.5px] leading-[1.55] text-[#4a4038]">{texto}</p>
    {foto && <div className="mt-[14px] flex h-[200px] flex-col items-center justify-center gap-2 rounded-2xl border-[1.5px] border-dashed border-[#dbcdba] bg-[#f4ece1] text-[#b0a290]"><Icono tipo="imagen" className="h-[30px] w-[30px]" /><span className="text-[13.5px]">Foto · pintando con témperas</span></div>}
    <div className="mt-4 flex items-center gap-[18px] border-t border-[#f0e6d8] pt-[14px] text-sm font-bold">
      <div className="flex items-center gap-[7px] text-[#e0654a]"><Icono tipo="corazon" className="h-[19px] w-[19px]" />{reacciones}</div>
      <div className="flex items-center gap-[7px] text-[#94887b]"><Icono tipo="comentario" className="h-[18px] w-[18px]" />{comentarios}</div>
      <span className="flex-1" /><span className="font-extrabold text-[#c5503a]">Editar</span>
    </div>
  </article>;
}

export default function Home() {
  return <div className="flex h-screen overflow-hidden bg-[#f6ecdf] text-[#3f362e]"><BarraLateral seccionActiva="feed" /><main className="h-screen min-w-0 flex-1 overflow-y-auto"><div className="mx-auto w-full max-w-[760px] px-5 pb-20 pt-[34px] sm:px-10">
    <header className="mb-6"><div className="mb-1 text-[12.5px] font-extrabold tracking-[.8px] text-[#d9583c]">GUARDERÍA · SALA SOLES</div><h1 className="m-0 font-fredoka text-[30px] font-semibold text-[#3f362e]">Buenas, Caro</h1><p className="m-0 mt-[5px] text-[14.5px] text-[#94887b]">12 niños · martes 17 jun</p></header>
    <div className="mb-6 flex items-center gap-[14px] rounded-[18px] border border-[#ece0d0] bg-[#fffdf9] px-[18px] py-[14px] shadow-[0_4px_14px_-10px_rgba(120,90,60,.4)]"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f2937a] font-fredoka text-base font-semibold text-white">C</div><span className="flex-1 text-[15px] text-[#a89a8b]">Compartí un momento…</span><span className="flex h-[38px] w-[38px] items-center justify-center rounded-xl bg-[#fbe3d8] text-[#e0654a]"><Icono tipo="foto" className="h-[19px] w-[19px]" /></span></div>
    <div className="mb-[14px] flex items-center gap-[14px]"><span className="text-[12.5px] font-extrabold tracking-[.8px] text-[#8a7c6d]">PUBLICADO HOY</span><span className="h-px flex-1 bg-[#e7dac8]" /></div>
    <div className="flex flex-col gap-4">
      <Publicacion hora="14:20" tipo="logro" nombre="Mateo" para="familia de Mateo" texto="¡Usó el orinal solito por primera vez! Estaba feliz de contárselo a todos. Un gran paso." reacciones={3} comentarios={1} />
      <Publicacion hora="09:40" tipo="actividad" nombre="Mateo" para="familia de Mateo" texto="Pintamos con témperas esta mañana. Mateo eligió el azul para todo y se concentró un montón mezclando colores." reacciones={5} comentarios={2} foto />
      <Publicacion hora="07:50" tipo="anuncio" nombre="Anuncio general" para="toda la sala" texto="El viernes salimos al parque por la mañana. Recuerden mandar gorra y una botellita de agua." reacciones={8} comentarios={0} anuncio />
    </div>
  </div></main></div>;
}
