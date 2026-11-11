type IconProps = { className?: string };

function Icono({ tipo, className = "h-5 w-5" }: IconProps & { tipo: "sol" | "plus" | "inicio" | "ninos" | "aviso" | "usuario" | "salir" | "foto" | "corazon" | "comentario" | "megafono" | "imagen" }) {
  const propiedades = { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

  const trazos = {
    sol: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
    plus: <path d="M12 5v14M5 12h14" />,
    inicio: <path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />,
    ninos: <><circle cx="9" cy="7" r="3" /><circle cx="17" cy="9" r="2.4" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 20a5 5 0 0 1 5.5-4.9" /></>,
    aviso: <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0" />,
    usuario: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>,
    salir: <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />,
    foto: <><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></>,
    corazon: <path fill="currentColor" d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />,
    comentario: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />,
    megafono: <path d="m3 11 18-5v12L3 14v-3zM11.6 16.8a3 3 0 1 1-5.8-1.6" />,
    imagen: <><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.6-3.6a2 2 0 0 0-2.8 0L6 21" /></>,
  };

  return <svg {...propiedades}>{trazos[tipo]}</svg>;
}

function BarraLateral() {
  const opciones = [["inicio", "Feed"], ["ninos", "Niños"], ["aviso", "Avisos"], ["usuario", "Mi cuenta"]] as const;

  return (
    <aside className="hidden h-screen w-[248px] shrink-0 flex-col border-r border-[#ece0d0] bg-[#fffdf9] px-4 py-6 lg:flex">
      <div className="flex items-center gap-[11px] px-2 pb-[22px] pt-1">
        <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#f8c3a8] to-[#f2937a] text-white"><Icono tipo="sol" className="h-[21px] w-[21px]" /></div>
        <div><div className="font-fredoka text-[17px] font-semibold leading-none text-[#3f362e]">OpenDayCare</div><div className="mt-0.5 text-[11.5px] text-[#a89a8b]">Sala Soles</div></div>
      </div>
      <div className="mb-[18px] flex w-full items-center justify-center gap-2 rounded-[14px] bg-gradient-to-b from-[#f4977e] to-[#ee8164] px-3 py-3 text-[14.5px] font-extrabold text-white shadow-[0_8px_18px_-8px_rgba(238,129,100,.75)]"><Icono tipo="plus" className="h-[17px] w-[17px]" />Nueva publicación</div>
      <nav className="flex flex-1 flex-col gap-1">
        {opciones.map(([icono, texto], indice) => <div key={texto} className={`flex items-center gap-3 rounded-xl px-3 py-[11px] text-[14.5px] ${indice === 0 ? "bg-[#fbe3d8] font-extrabold text-[#d9583c]" : "font-semibold text-[#6e6359]"}`}><Icono tipo={icono} className="h-[19px] w-[19px]" />{texto}</div>)}
      </nav>
      <div className="mt-[10px] border-t border-[#ece0d0] pt-[14px]"><div className="flex items-center gap-[11px] px-2 py-1">
        <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#f2937a] font-fredoka text-base font-semibold text-white">C</div>
        <div className="min-w-0 flex-1"><div className="text-sm font-extrabold text-[#3f362e]">Caro Giménez</div><div className="text-xs text-[#a89a8b]">Maestra · Soles</div></div>
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#f6ecdf] text-[#94887b]"><Icono tipo="salir" className="h-4 w-4" /></div>
      </div></div>
    </aside>
  );
}

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
  return <div className="flex min-h-screen bg-[#f6ecdf] text-[#3f362e]"><BarraLateral /><main className="min-w-0 flex-1 overflow-y-auto"><div className="mx-auto w-full max-w-[760px] px-5 pb-20 pt-[34px] sm:px-10">
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
