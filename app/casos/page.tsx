'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BarChart3 } from 'lucide-react';
import DarkBackground from '../components/DarkBackground';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function CasosPage() {
  const containerRef  = useRef<HTMLDivElement>(null);
  const headerRef     = useRef<HTMLDivElement>(null);
  const narrativeRef  = useRef<HTMLDivElement>(null);
  const mockupRef     = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // ── Header entrance ───────────────────────────────────────────────
    gsap.from(headerRef.current!.children, {
      autoAlpha: 0, y: 30, stagger: 0.14, duration: 0.75, ease: 'power3.out',
    });

    // ── Caso narrative — slide in from left ───────────────────────────
    gsap.from(narrativeRef.current, {
      autoAlpha: 0, x: -45, duration: 0.90, ease: 'power2.out',
      scrollTrigger: {
        trigger: narrativeRef.current,
        start: 'top 82%',
        toggleActions: 'play none none reset',
      },
    });

    // ── Mockup — slide in from right ─────────────────────────────────
    gsap.from(mockupRef.current, {
      autoAlpha: 0, x: 45, duration: 0.90, ease: 'power2.out',
      scrollTrigger: {
        trigger: mockupRef.current,
        start: 'top 82%',
        toggleActions: 'play none none reset',
      },
    });

    // ── Próximos casos grid ───────────────────────────────────────────
    ScrollTrigger.batch('.caso-placeholder', {
      onEnter: batch => gsap.from(batch, {
        autoAlpha: 0, y: 24, stagger: 0.10, duration: 0.65, ease: 'power2.out', overwrite: true,
      }),
      start: 'top 88%',
      once: true,
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen text-neutral-200 font-sans antialiased overflow-x-hidden">
      <DarkBackground />

      {/* ── PAGE HEADER ── */}
      <div ref={headerRef} className="pt-40 pb-12 px-6 text-center relative z-10">
        <p className="text-[10px] text-violet-400 font-black uppercase tracking-[0.3em] italic mb-4">
          Obsidian Void
        </p>
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic uppercase mb-6">
          Casos de Estudio
        </h1>
        <p className="text-neutral-500 max-w-xl mx-auto text-base italic font-medium leading-relaxed">
          Implementaciones reales. Resultados concretos. Negocios que pasaron del caos operativo al control total.
        </p>
        <div className="mt-10 mx-auto w-px h-16 bg-gradient-to-b from-violet-500/40 to-transparent" />
      </div>

      {/* ════════════════════════════════════════════
           CASO 1: GUAPECANES
          ════════════════════════════════════════════ */}
      <section className="py-20 px-6 max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left — case narrative */}
          <div ref={narrativeRef} className="relative">
            <div className="inline-flex bg-violet-500/15 text-violet-400 px-4 py-1.5 rounded-md text-[10px] font-black tracking-widest mb-8 border border-violet-500/20 uppercase italic">
              Paquete: Movilidad y Control
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-none italic uppercase">
              Caso Real:<br />Guapecanes
            </h2>

            <div className="space-y-8 text-neutral-400 leading-relaxed text-sm md:text-base">
              <p className="italic font-medium text-neutral-300 border-l-2 border-violet-500/30 pl-6">
                Guapecanes (Pet Shop &amp; Grooming) enfrentaba una parálisis operativa por el uso de cuadernos físicos y la falta de registro trazable de deudas.
              </p>
              <p className="italic">
                El desafío central era gestionar un inventario híbrido:{' '}
                <span className="text-white font-bold">stock propio + consignación de terceros</span>. El dueño buscaba eliminar la fatiga cognitiva de recordar deudas y turnos manuales.
              </p>

              {/* Result card */}
              <div className="p-8 bg-neutral-900/60 backdrop-blur-sm border border-white/5 border-l-4 border-l-violet-500 rounded-r-2xl space-y-6 relative group overflow-hidden shadow-2xl hover:bg-neutral-900/80 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/5 blur-3xl -z-10 group-hover:bg-violet-600/10 transition-colors" />
                <p className="italic text-neutral-200 text-base leading-relaxed font-bold tracking-tight">
                  &ldquo;Automatizamos la lógica transaccional de pagos parciales a proveedores y creamos una agenda inteligente que neutralizó los errores de cruce de turnos en peluquería, garantizando que cada peso sea trazable.&rdquo;
                </p>
                <div className="flex gap-10 pt-4">
                  <div className="flex flex-col items-center group-hover:scale-110 transition-transform">
                    <span className="text-white font-black text-3xl italic tracking-tighter">95%</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-violet-500 mt-2 italic">Error Eliminado</span>
                  </div>
                  <div className="flex flex-col items-center group-hover:scale-110 transition-transform">
                    <span className="text-white font-black text-3xl italic tracking-tighter font-mono uppercase">PWA</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-violet-500 mt-2 italic">Acceso Remoto</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — app mockup preview */}
          <div ref={mockupRef} className="relative group">
            <div className="absolute inset-0 bg-violet-600/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative aspect-[4/3] bg-[#07070f] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] p-6 flex flex-col gap-6 group-hover:border-violet-500/35 transition-all duration-500">
              {/* Window chrome */}
              <div className="h-4 flex items-center justify-between px-2 border-b border-white/5 pb-6">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                </div>
                <div className="w-32 h-1.5 bg-neutral-800 rounded-full" />
              </div>
              {/* UI layout */}
              <div className="grid grid-cols-12 gap-6 flex-grow">
                <div className="col-span-3 bg-neutral-950/50 rounded-2xl p-4 space-y-4 border border-white/5 shadow-inner">
                  <div className="w-full h-8 bg-violet-600/20 rounded-xl border border-violet-500/20" />
                  <div className="space-y-2">
                    <div className="w-full h-1.5 bg-neutral-800 rounded-full opacity-50" />
                    <div className="w-2/3 h-1.5 bg-neutral-800 rounded-full opacity-50" />
                  </div>
                </div>
                <div className="col-span-9 space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="aspect-video bg-neutral-950/50 rounded-3xl border border-white/5 flex items-end p-4 shadow-inner">
                      <div className="w-full h-1.5 bg-violet-500/30 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.3)]" />
                    </div>
                    <div className="aspect-video bg-violet-600/10 rounded-3xl border border-violet-500/30" />
                    <div className="aspect-video bg-neutral-950/50 rounded-3xl border border-white/5" />
                  </div>
                  <div className="h-full bg-neutral-950/80 rounded-[2rem] border border-white/5 relative flex items-center justify-center p-8 shadow-inner overflow-hidden">
                    <BarChart3 className="text-violet-600/10 animate-pulse" size={48} />
                    <div className="absolute inset-x-6 top-10 bottom-6 bg-[repeating-linear-gradient(90deg,transparent,transparent_24px,rgba(139,92,246,0.02)_25px)]" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60 pointer-events-none rounded-[2.5rem]" />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-black tracking-[0.5em] text-white/20 whitespace-nowrap italic select-none uppercase">
                Obsidian Core // ERP Preview
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
           PRÓXIMOS CASOS
          ════════════════════════════════════════════ */}
      <section className="py-20 px-6 max-w-6xl mx-auto relative z-10 border-t border-white/5">
        <h3 className="text-sm font-black text-neutral-700 uppercase tracking-widest italic mb-12">
          Próximos casos
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {['Caso II — Próximamente', 'Caso III — Próximamente', 'Caso IV — Próximamente'].map((label, i) => (
            <div
              key={i}
              className="caso-placeholder aspect-video rounded-2xl border border-white/4 bg-[#07070f] flex items-center justify-center"
            >
              <p className="text-[11px] font-black uppercase tracking-widest text-neutral-800 italic">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER MINI ── */}
      <div className="border-t border-white/5 py-16 text-center relative z-10 pb-24">
        <a
          href="mailto:obsidianvoidstudio@gmail.com"
          className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-neutral-600 hover:text-violet-400 transition-colors italic"
        >
          ¿Querés ser el próximo caso? Escribinos →
        </a>
      </div>
    </div>
  );
}
