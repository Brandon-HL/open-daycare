import Link from "next/link";
import { Icono } from "../componentes/icono";

function Campo({ etiqueta, tipo = "text", marcador }: { etiqueta: string; tipo?: string; marcador?: string }) {
  return <label className="block">
    <span className="mb-2 block text-xs font-extrabold tracking-[.7px] text-[#94887b]">{etiqueta}</span>
    <input type={tipo} placeholder={marcador} className="w-full rounded-[14px] border-[1.5px] border-[#eadfd0] bg-white px-4 py-3.5 text-[15px] text-[#3f362e] outline-none placeholder:text-[#b6a99b] focus:border-[#f2937a]" />
  </label>;
}

export default function LoginPage() {
  return <main className="grid min-h-screen bg-[#fbf4ec] text-[#3f362e] lg:grid-cols-[1.05fr_1fr]">
    <section className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-[#f6a98e] via-[#f2937a] to-[#ec7e62] px-[60px] py-14 text-white lg:flex">
      <div className="absolute -right-[120px] -top-[140px] h-[420px] w-[420px] rounded-full bg-white/[.12]" />
      <div className="absolute -bottom-[110px] -left-20 h-[300px] w-[300px] rounded-full bg-white/[.10]" />

      <div className="relative flex items-center gap-[13px]">
        <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[14px] bg-white/[.22]"><Icono tipo="sol" className="h-[26px] w-[26px]" /></div>
        <span className="font-fredoka text-[21px] font-semibold tracking-[.5px]">OpenDayCare</span>
      </div>

      <div className="relative">
        <h1 className="m-0 mb-[18px] font-fredoka text-[42px] font-semibold leading-[1.12]">El día de cada niño,<br />compartido con su familia.</h1>
        <p className="m-0 max-w-[430px] text-[17px] leading-[1.6] text-white/[.92]">Publicá momentos, gestioná las salas y mantené a las familias cerca, desde un solo lugar.</p>
      </div>

      <div className="relative text-sm text-white/[.9]">🌿 Guardería Sala Soles</div>
    </section>

    <section className="flex min-h-screen items-center justify-center px-6 py-10 sm:px-10">
      <div className="w-full max-w-[392px]">
        <div className="mb-8 flex items-center gap-3 lg:hidden">
          <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-gradient-to-br from-[#f8c3a8] to-[#f2937a] text-white shadow-[0_10px_22px_-8px_rgba(238,129,100,.7)]"><Icono tipo="sol" className="h-6 w-6" /></div>
          <span className="font-fredoka text-[21px] font-semibold text-[#3f362e]">OpenDayCare</span>
        </div>

        <h2 className="m-0 mb-1.5 font-fredoka text-[30px] font-semibold text-[#3f362e]">Iniciar sesión</h2>
        <p className="m-0 mb-7 text-[15px] text-[#94887b]">Ingresá para ver el día de hoy.</p>

        <div className="space-y-[18px]">
          <Campo etiqueta="EMAIL" tipo="email" />
          <Campo etiqueta="CONTRASEÑA" tipo="password" marcador="••••••••" />
        </div>

        <div className="mb-5 mt-2.5 text-right"><span className="text-[13.5px] font-bold text-[#c5503a]">¿Olvidaste tu contraseña?</span></div>

        <Link href="/" className="block w-full rounded-[15px] bg-gradient-to-b from-[#f4977e] to-[#ee8164] px-4 py-[15px] text-center text-base font-extrabold text-white shadow-[0_10px_22px_-8px_rgba(238,129,100,.7)]">Iniciar sesión</Link>

        <p className="m-0 mt-6 text-center text-[14.5px] text-[#94887b]">¿Te invitó la guardería? <Link href="/activate" className="font-extrabold text-[#c5503a]">Activá tu cuenta</Link></p>
      </div>
    </section>
  </main>;
}
