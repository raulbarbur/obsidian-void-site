'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DarkBackground from '../components/DarkBackground';
import { GmailLink } from '@/components/ui/gmail-link';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ── Obsidian Void brand mark (hexagon gem with lightning cracks) ──────
function ObsidianGem({ size = 64 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <filter id="gem-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="gem-face" cx="38%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#1e1040" />
          <stop offset="60%" stopColor="#0a0618" />
          <stop offset="100%" stopColor="#020108" />
        </radialGradient>
      </defs>

      <polygon
        points="40,4 72,22 72,58 40,76 8,58 8,22"
        fill="none"
        stroke="rgba(139,92,246,0.35)"
        strokeWidth="1"
        filter="url(#gem-glow)"
      />
      <polygon
        points="40,7 69,24 69,57 40,74 11,57 11,24"
        fill="url(#gem-face)"
        stroke="rgba(109,40,217,0.70)"
        strokeWidth="1.5"
      />
      <path
        d="M 40 15 L 35 32 L 42 32 L 36 55"
        stroke="rgba(167,139,250,0.70)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#gem-glow)"
      />
      <path
        d="M 50 20 L 47 36 L 53 36 L 50 50"
        stroke="rgba(139,92,246,0.45)"
        strokeWidth="0.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon
        points="40,14 55,26 55,42 40,52 25,42 25,26"
        fill="none"
        stroke="rgba(192,132,252,0.18)"
        strokeWidth="0.8"
      />
      <path d="M 25,26 L 40,14 L 55,26 L 40,30 Z" fill="rgba(139,92,246,0.10)" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────

const part1Steps = [
  { i: 'I',   t: 'Diagnóstico Situacional',                    d: 'Analizamos el problema real de tu negocio. Si no tenemos la capacidad técnica de resolverlo con excelencia, no tomamos el caso.' },
  { i: 'II',  t: 'Propuesta de Paquetes — Protocolo Void',     d: 'Ofrecemos alcances y limitaciones definidas. Sin sorpresas. Plazos de entrega estrictos en base a la solución elegida.', anchor: true },
  { i: 'III', t: 'Contrato y Blindaje Legal',                  d: 'Cada proyecto se rige por un contrato legal. Iniciamos el desarrollo tras la firma y la confirmación del depósito inicial.' },
  { i: 'IV',  t: 'Flexibilidad Controlada',                    d: 'No empezamos sin confirmación de propuesta. Si el alcance cambia durante la producción, el precio se ajusta proporcionalmente.' },
];

const part2Steps = [
  { i: '01', t: 'Solicitud de Diagnóstico',       d: 'El cliente solicita un diagnóstico sin compromiso mediante el botón de la página. Se le proporciona nuestro contacto para iniciar la comunicación.' },
  { i: '02', t: 'Coordinación de la Reunión',     d: 'Agendamos una sesión para conectarnos con el cliente, ya sea mediante una llamada o comunicación por escrito, según su preferencia. El objetivo es entender su negocio, problemas principales y necesidades reales.' },
  { i: '03', t: 'Exploración Guiada',             d: 'Escuchamos atentamente al cliente, identificando procesos y puntos críticos. Resolvemos todas sus dudas sobre el sistema y nuestra metodología.' },
  { i: '04', t: 'Configuración del Paquete Inicial', d: 'Armamos una propuesta de sistema recomendado basada en la información del cliente. Se ajustan funcionalidades bajo criterios expertos para garantizar la adaptación al negocio.' },
  { i: '05', t: 'Presupuesto y Reflexión',        d: 'Entregamos un presupuesto transparente y detallado. El cliente puede revisarlo y consultar dudas adicionales por correo, sin presión para una aceptación inmediata.' },
];

export default function ProtocolPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef    = useRef<HTMLDivElement>(null);
  const gemRef       = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // ── Header entrance ───────────────────────────────────────────────
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from(gemRef.current,    { autoAlpha: 0, scale: 0.7, duration: 0.65 })
      .from(headerRef.current!.querySelectorAll('h1, p'), {
        autoAlpha: 0, y: 28, stagger: 0.15, duration: 0.70,
      }, '-=0.30')
      .from(headerRef.current!.querySelector('.scroll-line'), {
        autoAlpha: 0, scaleY: 0, transformOrigin: 'top center', duration: 0.50,
      }, '-=0.20');

    // ── Part 1 steps — slide in from left ────────────────────────────
    gsap.utils.toArray<HTMLElement>('.protocol-step-1').forEach((el, i) => {
      gsap.from(el, {
        autoAlpha: 0, x: -40, duration: 0.80,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 84%',
          toggleActions: 'play none none reset',
        },
        delay: i * 0.05,
      });
    });

    // ── Part 2 steps — slide in from right ───────────────────────────
    gsap.utils.toArray<HTMLElement>('.protocol-step-2').forEach((el, i) => {
      gsap.from(el, {
        autoAlpha: 0, x: 40, duration: 0.80,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 84%',
          toggleActions: 'play none none reset',
        },
        delay: i * 0.05,
      });
    });

    // ── Divider pill ─────────────────────────────────────────────────
    gsap.from('.protocol-divider', {
      autoAlpha: 0, scaleX: 0.4, duration: 0.80, ease: 'power2.out',
      scrollTrigger: { trigger: '.protocol-divider', start: 'top 90%', once: true },
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen text-neutral-200 font-sans antialiased overflow-x-hidden">
      <DarkBackground />

      {/* ── PAGE HEADER ── */}
      <div ref={headerRef} className="pt-40 pb-20 px-6 text-center relative z-10">
        <div ref={gemRef} className="inline-flex items-center justify-center mb-6">
          <ObsidianGem size={72} />
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic uppercase mb-6">
          Protocolo Obsidian
        </h1>
        <p className="text-neutral-500 max-w-xl mx-auto text-base italic font-medium leading-relaxed">
          Un proceso de ingeniería diseñado para garantizar resultados predecibles, contratos blindados y software que resuelve el problema real.
        </p>
        <div className="scroll-line mt-10 mx-auto w-px h-16 bg-gradient-to-b from-violet-500/40 to-transparent" />
      </div>

      {/* ════════════════════════════════════════════
           PARTE 1 — Estilo violeta (base)
          ════════════════════════════════════════════ */}
      <section className="py-16 px-6 max-w-4xl mx-auto relative z-10">

        <div className="flex items-center gap-4 mb-20">
          <ObsidianGem size={32} />
          <div>
            <p className="text-[10px] text-violet-400 font-black uppercase tracking-[0.3em] italic">Protocolo Obsidian</p>
            <p className="text-neutral-600 text-[10px] uppercase tracking-widest font-bold">Fundamentos</p>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-violet-500/30 to-transparent ml-4" />
        </div>

        <div className="space-y-28">
          {part1Steps.map((step) => (
            <div
              key={step.i}
              className="protocol-step-1 flex flex-row gap-5 md:gap-20 items-start group relative"
            >
              <span className="text-[4rem] md:text-[9rem] font-black text-neutral-900 group-hover:text-violet-500/12 transition-all duration-1000 select-none leading-none tracking-tighter italic shrink-0">
                {step.i}
              </span>
              <div className="pt-2 md:pt-8 relative z-10">
                <h4 className="text-white font-black text-xl mb-4 tracking-tight group-hover:text-violet-300 transition-colors uppercase italic border-b border-white/5 pb-2">
                  {step.anchor ? (
                    <a href="#protocolo-void" className="hover:text-violet-400 underline underline-offset-4 decoration-violet-500/40 transition-colors">
                      {step.t}
                    </a>
                  ) : step.t}
                </h4>
                <p className="text-neutral-500 text-base leading-relaxed max-w-2xl border-l-2 border-white/5 pl-8 group-hover:border-violet-500/35 transition-all duration-700 italic font-medium">
                  {step.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════
           DIVIDER
          ════════════════════════════════════════════ */}
      <div className="protocol-divider max-w-4xl mx-auto px-6 py-20 relative z-10">
        <div className="relative flex items-center gap-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
          <div className="flex items-center gap-3 bg-black border border-violet-500/25 px-6 py-3 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400/70 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-300/80 italic">
              Protocolo Void
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400/70 animate-pulse" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
        </div>
      </div>

      {/* ════════════════════════════════════════════
           PARTE 2 — Protocolo Void
          ════════════════════════════════════════════ */}
      <section id="protocolo-void" className="py-16 px-6 max-w-4xl mx-auto relative z-10 pb-40">

        <div className="flex items-center gap-4 mb-20">
          <ObsidianGem size={32} />
          <div>
            <p className="text-[10px] text-violet-400 font-black uppercase tracking-[0.3em] italic">Protocolo Void</p>
            <p className="text-neutral-600 text-[10px] uppercase tracking-widest font-bold">Proceso de Trabajo</p>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-violet-500/30 to-transparent ml-4" />
        </div>

        <div className="space-y-28">
          {part2Steps.map((step) => (
            <div
              key={step.i}
              className="protocol-step-2 flex flex-row gap-5 md:gap-20 items-start group relative"
            >
              <span className="text-[4rem] md:text-[9rem] font-black text-neutral-900 group-hover:text-violet-500/12 transition-all duration-1000 select-none leading-none tracking-tighter italic shrink-0">
                {step.i}
              </span>
              <div className="pt-2 md:pt-8 relative z-10">
                <h4 className="text-white font-black text-xl mb-4 tracking-tight group-hover:text-violet-300 transition-colors uppercase italic border-b border-white/5 pb-2">
                  {step.t}
                </h4>
                <p className="text-neutral-500 text-base leading-relaxed max-w-2xl border-l-2 border-white/5 pl-8 group-hover:border-violet-500/35 transition-all duration-700 italic font-medium group-hover:text-neutral-400">
                  {step.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER MINI ── */}
      <div className="border-t border-white/5 py-16 text-center relative z-10">
        <GmailLink
          className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-neutral-600 hover:text-violet-400 transition-colors italic"
        >
          ¿Preguntas sobre el protocolo? Escribinos →
        </GmailLink>
      </div>
    </div>
  );
}
