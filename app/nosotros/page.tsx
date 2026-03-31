'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DarkBackground from '../components/DarkBackground';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ── Hover bio content ─────────────────────────────────────────────────
const bunnyBio = [
  'Analiza negocios como sistemas.',
  'No se enfoca en acciones aisladas, sino en entender cómo fluye el negocio, dónde se pierde valor y qué está impidiendo que crezca.',
  'Parte de una premisa simple: sin información clara y sin automatización, todo termina dependiendo del esfuerzo y de momentos de suerte, y eso no se sostiene en el tiempo.',
  'Su trabajo es diagnosticar, ordenar y diseñar estructuras que permitan crecer con más claridad, control y previsibilidad.',
  'Tiene un pensamiento analítico y sistémico: desarma los problemas en partes, entiende cómo se conectan y detecta dónde está el verdadero bloqueo, no solo el síntoma.',
  'No se queda en lo superficial. Va a la raíz del problema y prioriza lo que realmente impacta en el resultado.',
  'Busca que las empresas accedan a herramientas que no compliquen su operación, sino que la simplifiquen y les den una ventaja real en el mercado.',
  'Quiere que sus clientes se esfuercen, pero con un mapa claro de qué hacer y por qué, no a ciegas.',
];

const voidBio = [
  'Convierte el análisis en sistemas reales.',
  'Toma lo que ya fue entendido y definido, y lo transforma en soluciones técnicas aplicables en el día a día.',
  'Su enfoque es estructurado y preciso, con una base fuerte en buenas prácticas de desarrollo. Cada componente está pensado para ser consistente, escalable y bien integrado.',
  'Mientras Obsidian Bunny analiza el negocio como un sistema, Void Light se encarga de materializar ese sistema.',
  'Tiene un pensamiento analítico y resolutivo: entiende el problema y rápidamente propone cómo resolverlo desde lo técnico.',
  'Se enfoca en construir soluciones claras, funcionales y estables, evitando errores, retrabajos y herramientas que dejan de funcionar con el tiempo.',
  'Comparte la misma visión con Obsidian Bunny: muchos negocios se estancan no por falta de esfuerzo, sino por no tener las herramientas adecuadas. Por eso, las soluciones que crea se adaptan al negocio, sin obligarlo a cambiar su forma de operar para encajar en ellas.',
  'Por eso, cada entrega está pensada para ser completa, fácil de usar y lista para integrarse al negocio sin fricción.',
];

export default function NosotrosPage() {
  const containerRef  = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<'bunny' | 'void' | null>(null);
  const headerRef     = useRef<HTMLDivElement>(null);
  const logoRef       = useRef<HTMLDivElement>(null);
  const origenRef     = useRef<HTMLDivElement>(null);
  const womanRef      = useRef<HTMLDivElement>(null);
  const manRef        = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // ── Header entrance ───────────────────────────────────────────────
    gsap.from(headerRef.current!.children, {
      autoAlpha: 0, y: 24, stagger: 0.12, duration: 0.70, ease: 'power3.out',
    });

    // ── Logo ──────────────────────────────────────────────────────────
    gsap.from(logoRef.current, {
      autoAlpha: 0, scale: 0.75, duration: 0.70, ease: 'back.out(1.5)',
      scrollTrigger: { trigger: logoRef.current, start: 'top 85%', once: true },
    });

    // ── Origen text + tech cards ──────────────────────────────────────
    gsap.from(origenRef.current!.querySelectorAll('h2, p'), {
      autoAlpha: 0, y: 28, stagger: 0.10, duration: 0.70, ease: 'power2.out',
      scrollTrigger: { trigger: origenRef.current, start: 'top 82%', once: true },
    });
    ScrollTrigger.batch('.tech-card', {
      onEnter: batch => gsap.from(batch, {
        autoAlpha: 0, y: 24, stagger: 0.12, duration: 0.65, ease: 'power2.out', overwrite: true,
      }),
      start: 'top 88%',
      once: true,
    });

    // ── Silhouettes ───────────────────────────────────────────────────
    gsap.from(womanRef.current, {
      autoAlpha: 0, y: 60, duration: 1.00, ease: 'power3.out',
      scrollTrigger: { trigger: womanRef.current, start: 'top 88%', once: true },
    });
    gsap.from(manRef.current, {
      autoAlpha: 0, y: 60, duration: 1.00, ease: 'power3.out', delay: 0.12,
      scrollTrigger: { trigger: manRef.current, start: 'top 88%', once: true },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen text-neutral-200 font-sans antialiased overflow-x-hidden">
      <DarkBackground />

      {/* ══════════════════════════════════════════
           HEADER
          ══════════════════════════════════════════ */}
      <div ref={headerRef} className="pt-40 pb-8 px-6 text-center relative z-10">
        <p className="text-[10px] text-violet-400 font-black uppercase tracking-[0.3em] italic mb-4">
          Obsidian Void
        </p>
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic uppercase mb-4">
          Acerca de Nosotros
        </h1>
      </div>

      {/* ══════════════════════════════════════════
           SECCIÓN 1 — IDENTIDAD Y POSICIONAMIENTO
          ══════════════════════════════════════════ */}
      <section className="py-20 px-6 max-w-5xl mx-auto relative z-10">

        {/* Logo + divider */}
        <div ref={logoRef} className="flex flex-col items-center mb-16 gap-6">
          <div className="relative w-24 h-24 flex items-center justify-center">
            <div className="absolute inset-0 bg-violet-600/10 blur-[30px] rounded-full" />
            <Image
              src="/logo.png"
              alt="Obsidian Void Logo"
              width={96}
              height={96}
              className="relative z-10 object-contain drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]"
              priority
            />
          </div>
          <div className="text-center">
            <p className="text-[10px] text-violet-500/60 font-black uppercase tracking-[0.4em] italic mb-2">
              Estudio de Ingeniería de Software
            </p>
            <div className="w-px h-12 bg-gradient-to-b from-violet-500/40 to-transparent mx-auto" />
          </div>
        </div>

        <div ref={origenRef}>
          {/* ── Origen ── */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-black text-white italic uppercase tracking-tight mb-8 border-l-4 border-violet-600 pl-6">
              El Origen
            </h2>
            <div className="pl-0 md:pl-10 space-y-6">
              <p className="text-neutral-300 text-base leading-relaxed italic font-medium border-l-2 border-violet-500/25 pl-6">
                Obsidian Void nació de la convicción de que los negocios pequeños y medianos merecen la misma tecnología de control que las grandes corporaciones —sin la burocracia, sin los costos inflados, sin las soluciones genéricas.
              </p>
              <p className="text-neutral-500 text-sm leading-relaxed italic pl-6 border-l-2 border-white/5">
                Fundamos el estudio tras años de ver dueños de comercios operar con cuadernos, hojas de cálculo y memoria humana como únicos sistemas de gestión. La ineficiencia no era por falta de voluntad: era por falta de acceso a ingeniería real.
              </p>
              <p className="text-neutral-500 text-sm leading-relaxed italic border-l-2 border-white/5 pl-6">
                Decidimos construir un modelo diferente: diagnóstico honesto, contratos blindados, entregables concretos. Sin promesas vacías. Sin código descartable. Sin dependencia del proveedor.
              </p>
              <p className="text-neutral-500 text-sm leading-relaxed italic pl-6 border-l-2 border-white/5">
                Cada sistema que desarrollamos es una pieza de ingeniería diseñada para durar, escalar y adaptarse al ritmo real del negocio que lo usa.
              </p>
              <p className="text-neutral-500 text-sm leading-relaxed italic pl-6 border-l-2 border-white/5">
                No somos una agencia creativa ni una consultora genérica. Somos ingenieros que construyen sistemas funcionales, auditables y escalables. Priorizamos arquitecturas que devuelvan al dueño la visibilidad total de su negocio: datos reales, en tiempo real, accesibles desde cualquier dispositivo.
              </p>
              <p className="text-neutral-500 text-sm leading-relaxed italic pl-6 border-l-2 border-white/5">
                Cada línea que escribimos tiene propósito. Nuestros entregables están documentados, son mantenibles y transferibles. El negocio no depende de nosotros para seguir funcionando.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
           DIVIDER + SILUETAS — fondo morado
          ══════════════════════════════════════════ */}
      <div className="relative w-full z-10" style={{ background: 'linear-gradient(to bottom, rgba(60,20,120,0.55) 0%, rgba(80,30,150,0.45) 40%, rgba(40,10,90,0.30) 80%, transparent 100%)' }}>

        {/* Divider pill */}
        <div className="max-w-5xl mx-auto px-6 pt-12">
          <div className="flex items-center gap-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/40 bg-violet-950/60 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400/80 animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-[0.35em] text-violet-300/80 italic">El Equipo</span>
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400/80 animate-pulse" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
          </div>
        </div>

        {/* Siluetas */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-end justify-center gap-8 lg:gap-12">

            {/* ── BIO PANEL (left, shared) ── */}
            <div
              className="w-full lg:w-72 shrink-0 self-center transition-all duration-500 ease-out"
              style={{
                opacity: hovered ? 1 : 0,
                transform: hovered ? 'translateX(0)' : 'translateX(-16px)',
                pointerEvents: hovered ? 'auto' : 'none',
              }}
            >
              <div className="bg-black border border-white/10 rounded-2xl p-6 shadow-2xl shadow-violet-900/20">
                <p className="text-violet-400 font-black text-[10px] uppercase tracking-[0.3em] italic mb-3">
                  {hovered === 'bunny' ? 'Obsidian Bunny — Estratega' : 'Void Light — Desarrollador'}
                </p>
                <div className="space-y-3 max-h-80 overflow-y-auto pr-1 scrollbar-thin">
                  {(hovered === 'bunny' ? bunnyBio : voidBio).map((line, i) => (
                    <p key={i} className={`text-xs leading-relaxed italic ${i === 0 ? 'text-white font-bold' : 'text-neutral-400'}`}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* ── FIGURES ROW ── */}
            <div className="flex flex-row justify-center items-end gap-12 sm:gap-20">

              {/* ── OBSIDIAN BUNNY (mujer) ── */}
              <div
                ref={womanRef}
                className="flex flex-col items-center gap-6 group cursor-default"
                onMouseEnter={() => setHovered('bunny')}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="relative flex items-end justify-center">
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: 'radial-gradient(ellipse 70% 90% at 50% 80%, rgba(139,92,246,0.35) 0%, rgba(109,40,217,0.15) 50%, transparent 75%)',
                      filter: 'blur(24px)',
                      transform: 'scale(1.4)',
                    }}
                  />
                  <div
                    className="relative transition-all duration-700 group-hover:[filter:drop-shadow(0_0_22px_rgba(139,92,246,0.80))_drop-shadow(0_0_50px_rgba(109,40,217,0.45))]"
                    style={{ width: 'clamp(140px, 20vw, 220px)', height: 'clamp(320px, 45vw, 500px)' }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/imagen1femenino.png" alt="Obsidian Bunny" className="block group-hover:hidden w-full h-full object-contain object-bottom" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/imagen2femenino.png" alt="Obsidian Bunny" className="hidden group-hover:block w-full h-full object-contain object-bottom" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-white font-black text-sm uppercase tracking-widest italic transition-colors duration-500 group-hover:text-violet-300">
                    Obsidian Bunny
                  </p>
                  <p className="text-violet-300/60 text-[10px] uppercase tracking-[0.25em] font-bold mt-1 transition-colors duration-500 group-hover:text-violet-300/90">
                    Co-fundadora Estratega
                  </p>
                </div>
              </div>

              {/* ── VOID LIGHT (hombre) ── */}
              <div
                ref={manRef}
                className="flex flex-col items-center gap-6 group cursor-default"
                onMouseEnter={() => setHovered('void')}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="relative flex items-end justify-center">
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: 'radial-gradient(ellipse 70% 90% at 50% 80%, rgba(139,92,246,0.35) 0%, rgba(109,40,217,0.15) 50%, transparent 75%)',
                      filter: 'blur(24px)',
                      transform: 'scale(1.4)',
                    }}
                  />
                  <div
                    className="relative transition-all duration-700 group-hover:[filter:drop-shadow(0_0_22px_rgba(139,92,246,0.80))_drop-shadow(0_0_50px_rgba(109,40,217,0.45))]"
                    style={{ width: 'clamp(120px, 17vw, 190px)', height: 'clamp(320px, 45vw, 500px)' }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/imagen1masculino.png" alt="Void Light" className="block group-hover:hidden w-full h-full object-contain object-bottom" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/imagen2masculino.png" alt="Void Light" className="hidden group-hover:block w-full h-full object-contain object-bottom" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-white font-black text-sm uppercase tracking-widest italic transition-colors duration-500 group-hover:text-violet-300">
                    Void Light
                  </p>
                  <p className="text-violet-300/60 text-[10px] uppercase tracking-[0.25em] font-bold mt-1 transition-colors duration-500 group-hover:text-violet-300/90">
                    Co-Fundador Desarrollador
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>

      {/* ══════════════════════════════════════════
           CTA FOOTER
          ══════════════════════════════════════════ */}
      <section className="py-28 px-6 text-center relative z-10 border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-violet-600/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-black text-white italic uppercase tracking-tighter mb-8">
            ¿Hablamos?
          </h3>
          <a
            href="mailto:obsidianvoidstudio@gmail.com"
            className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-xl font-black text-sm hover:bg-violet-600 hover:text-white transition-all hover:scale-105 active:scale-95 shadow-2xl italic uppercase tracking-wide"
          >
            obsidianvoidstudio@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}
