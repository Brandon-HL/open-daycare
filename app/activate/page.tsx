import Link from "next/link";
import { Icono } from "../componentes/icono";

function Campo({ etiqueta, tipo = "text", clase = "" }: { etiqueta: string; tipo?: string; clase?: string }) {
  return <label className="block">
    <span className="mb-2 block text-xs font-extrabold tracking-[.7px] text-[#94887b]">{etiqueta}</span>
    <input type={tipo} className={`w-full rounded-[14px] border-[1.5px] border-[#eadfd0] bg-white px-4 py-3.5 text-[15px] text-[#3f362e] outline-none focus:border-[#f2937a] ${clase}`} />
  </label>;
}

export default function ActivatePage() {
  return <main className="flex min-h-screen items-center justify-center bg-[#fbf4ec] px-5 py-10 text-[#3f362e] sm:px-10">
    <div className="w-full max-w-[440px]">
      <div className="mb-[22px] flex h-[58px] w-[58px] items-center justify-center rounded-[18px] bg-gradient-to-br from-[#f8c3a8] to-[#f2937a] text-white shadow-[0_12px_26px_-10px_rgba(238,129,100,.65)]"><Icono tipo="sol" className="h-[30px] w-[30px]" /></div>
      <h1 className="m-0 mb-2 font-fredoka text-[32px] font-semibold leading-[1.15] text-[#3f362e]">Bienvenida a OpenDayCare</h1>
      <p className="m-0 mb-[26px] text-[15.5px] leading-[1.55] text-[#94887b]">Te invitaron a seguir el día de tu hijo. Creá tu contraseña para activar la cuenta.</p>

      <div className="mb-[22px] flex items-center gap-3.5 rounded-2xl border-[1.5px] border-[#eadfd0] bg-white px-4 py-3.5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#a9d9e8] font-fredoka text-[19px] font-semibold text-[#1f7a93]">M</div>
        <div><div className="text-[13px] text-[#94887b]">Te invitaron a seguir a</div><div className="font-fredoka text-[17px] font-semibold text-[#3f362e]">Mateo · Sala Soles</div></div>
      </div>

      <div className="space-y-[18px]">
        <Campo etiqueta="CÓDIGO DE INVITACIÓN" clase="font-fredoka text-lg font-bold tracking-[3px]" />
        <Campo etiqueta="EMAIL" tipo="email" />
        <Campo etiqueta="CREAR CONTRASEÑA" tipo="password" clase="border-[#f2a78e]" />
      </div>

      <div className="mb-6 mt-[18px] flex items-start gap-3 rounded-[14px] bg-[#fbf1d6] px-4 py-3.5">
        <span className="mt-px flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#5fb97e] text-white"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg></span>
        <span className="text-sm leading-[1.45] text-[#8a7234]">Autorizo a la guardería a tomar y compartir fotos de mi hijo dentro de la app.</span>
      </div>

      <Link href="/" className="block w-full rounded-[15px] bg-gradient-to-b from-[#f4977e] to-[#ee8164] px-4 py-[15px] text-center text-base font-extrabold text-white shadow-[0_10px_22px_-8px_rgba(238,129,100,.7)]">Activar mi cuenta</Link>
      <p className="m-0 mt-[22px] text-center text-[14.5px] text-[#94887b]">¿Ya tenés cuenta? <Link href="/login" className="font-extrabold text-[#c5503a]">Iniciar sesión</Link></p>
    </div>
  </main>;
}
