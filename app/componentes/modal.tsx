"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

export function Modal({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[#3f362e]/35 px-4 py-10 sm:px-6">
      <button type="button" aria-label="Cerrar modal" className="absolute inset-0 cursor-default" onClick={() => router.back()} />
      <div role="dialog" aria-modal="true" className="relative z-10 w-full max-w-[480px]">
        {children}
      </div>
    </div>
  );
}
