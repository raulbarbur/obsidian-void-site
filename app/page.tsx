'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  CheckCircle2, AlertCircle, ChevronRight,
  Zap, Shield, Database, BarChart3, Package, Clock,
  Search, List, Globe, Brain, MessageSquare, DollarSign,
  TrendingUp,
} from 'lucide-react';
import DarkBackground from './components/DarkBackground';
import { FloatingPaths } from './components/BackgroundPaths';
import { FeatureCard } from '@/components/ui/modern-feature-grid';
import { GmailLink } from '@/components/ui/gmail-link';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ── Hero title — animated letter by letter ────────────────────────────
const HERO_TITLE = "Respondés mensajes, subís contenido… y aún así no escala. No es casualidad.";

function AnimatedTitle() {
  const words = HERO_TITLE.split(" ");
  return (
    <h1 className="text-3xl md:text-[2.8rem] lg:text-[3.4rem] font-black leading-[1.15] mb-10 tracking-tight italic overflow-hidden">
      {words.map((word, wi) => (
        <span key={wi} className="inline-block mr-[0.3em] last:mr-0">
          {word.split("").map((letter, li) => (
            <motion.span
              key={`${wi}-${li}`}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: wi * 0.08 + li * 0.025,
                type: "spring",
                stiffness: 150,
                damping: 25,
              }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-violet-500/80"
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  );
}

// ── Data ──────────────────────────────────────────────────────────────
const problems = [
  { t: 'No sabés por qué perdés clientes', d: 'Sin datos del recorrido del cliente, cada abandono es un misterio sin respuesta.' },
  { t: 'Tu inventario está desordenado', d: 'Stock mal registrado significa faltantes inesperados, exceso de mercadería y pérdida de margen.' },
  { t: 'No tenés forma de mostrar tu catálogo', d: 'Tus productos existen, pero si no tienen visibilidad clara, no generan ventas.' },
  { t: 'Depende todo de tu memoria', d: 'Turnos, deudas, stock: cuando el negocio vive en tu cabeza, el límite de crecimiento sos vos.' },
  { t: 'Tus mensajes y publicaciones no venden', d: 'Sin copy estructurado ni automatización, el esfuerzo en contenido no convierte en clientes.' },
  { t: 'No contestás rápido a consultas', d: 'Un lead que espera más de 5 minutos tiene 10 veces menos probabilidades de cerrar.' },
  { t: 'Cobros demorados o pagos perdidos', d: 'Facturación manual y seguimiento informal hacen que el dinero se escape entre los dedos.' },
  { t: 'No sabés qué producto vende más', d: 'Sin análisis de rendimiento, tomás decisiones de compra y stock a ciegas.' },
  { t: 'Perdés horas haciendo siempre lo mismo', d: 'Tareas repetitivas que podrían automatizarse consumen tiempo que deberías dedicar a crecer.' },
  { t: 'Datos de clientes en cualquier lado', d: 'WhatsApp, papel, planilla y memoria: un CRM disperso que no sirve cuando más lo necesitás.' },
  { t: 'Tu página de ventas no convierte', d: 'Visitas que llegan y se van. El diseño y el copy de tu página no están optimizados para vender.' },
  { t: 'Tus clientes no tienen buena experiencia', d: 'Procesos lentos, respuestas tardías y falta de seguimiento alejan clientes que podrías retener.' },
  { t: 'No sabés cuánto vas a vender', d: 'Sin proyección financiera, no podés planificar, invertir ni escalar con confianza.' },
];

const solutions = [
  { icon: Search, t: 'Diagnóstico del recorrido del cliente', d: 'Identificamos dónde se pierden clientes y cómo retenerlos.' },
  { icon: Package, t: 'Organización de inventario', d: 'Controlás tu stock en tiempo real y evitás faltantes o exceso.' },
  { icon: Globe, t: 'Catálogo digital', d: 'Mostrá tus productos de forma clara y accesible para todos.' },
  { icon: Database, t: 'Centralización de procesos', d: 'Todo en un solo lugar, para que el negocio funcione sin depender solo de vos.' },
  { icon: MessageSquare, t: 'Optimización de mensajes y contenido', d: 'Mejoramos textos y publicaciones para generar más ventas.' },
  { icon: Zap, t: 'Respuestas rápidas y seguimiento de leads', d: 'CRM y automatización para que ningún cliente se enfríe.' },
  { icon: DollarSign, t: 'Automatización de cobros', d: 'Facturación y pagos controlados automáticamente para no perder dinero.' },
  { icon: BarChart3, t: 'Análisis de productos más vendidos', d: 'Dashboards que muestran qué funciona y qué no, para tomar decisiones claras.' },
  { icon: Clock, t: 'Automatización de tareas repetitivas', d: 'El software hace lo que siempre repetís, liberando tu tiempo para crecer.' },
  { icon: Brain, t: 'Centralización de datos de clientes', d: 'Toda la información de clientes en un solo lugar, fácil de acceder.' },
  { icon: List, t: 'Optimización de tu página de ventas', d: 'Diseño, copy y estructura para convertir más visitas en clientes.' },
  { icon: Shield, t: 'Mejora de la experiencia del cliente', d: 'Procesos y herramientas que facilitan la interacción y aumentan la satisfacción.' },
  { icon: TrendingUp, t: 'Predicción de ingresos', d: 'Dashboards financieros que muestran cómo va tu negocio y qué esperar.' },
];

const idealPara = [
  'Dueños de pymes o emprendimientos que quieren que su negocio crezca sin depender solo de ellos.',
  'Profesionales que quieren mejorar sus ventas, procesos y presencia digital.',
  'Negocios que buscan automatizar tareas repetitivas y organizar datos, inventario y leads.',
  'Quienes quieren que su comunicación y página de ventas realmente conviertan.',
];

const noEsPara = [
  'Negocios que no quieren cambiar procesos o invertir en organización y automatización.',
  'Personas que esperan resultados sin análisis ni estrategia.',
  'Quienes prefieren depender únicamente de su memoria y tareas manuales para operar el negocio.',
  'Negocios que no están dispuestos a priorizar lo que realmente impacta en resultados y crecimiento.',
];

// ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // ── Badge + subtítulo + botones — entrada con GSAP ────────────────
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.8 });
    tl.from(badgeRef.current, { autoAlpha: 0, y: -16, duration: 0.55 })
      .from(subtitleRef.current, { autoAlpha: 0, x: -28, duration: 0.70 }, '-=0.20')
      .from(Array.from(ctaRef.current!.children), {
        autoAlpha: 0, y: 18, stagger: 0.14, duration: 0.55,
      }, '-=0.35')
      .from(scrollRef.current, { autoAlpha: 0, duration: 0.45 }, '-=0.20');

    // ── Pre-hide elements to prevent flashes and fix load state ──
    gsap.set('.problem-card, .solution-card', { autoAlpha: 0, y: 34 });

    // ── Problem cards — scroll batch ──────────────────────────────────
    ScrollTrigger.batch('.problem-card', {
      onEnter: batch => gsap.to(batch, {
        autoAlpha: 1, y: 0, stagger: 0.07, duration: 0.65,
        ease: 'power2.out', overwrite: true,
      }),
      start: 'top 88%',
      once: true,
    });

    // ── Solution cards — scroll batch ─────────────────────────────────
    ScrollTrigger.batch('.solution-card', {
      onEnter: batch => gsap.to(batch, {
        autoAlpha: 1, y: 0, stagger: 0.07, duration: 0.65,
        ease: 'power2.out', overwrite: true,
      }),
      start: 'top 88%',
      once: true,
    });

    // ── Ideal para / No es para ───────────────────────────────────────
    gsap.from('.ideal-col', {
      autoAlpha: 0, x: -36, duration: 0.90, ease: 'power2.out',
      scrollTrigger: { trigger: '.ideal-col', start: 'top 84%', once: true },
    });
    gsap.from('.noespara-col', {
      autoAlpha: 0, x: 36, duration: 0.90, ease: 'power2.out',
      scrollTrigger: { trigger: '.noespara-col', start: 'top 84%', once: true },
    });

    // ── Footer CTA ────────────────────────────────────────────────────
    gsap.from('.footer-cta', {
      autoAlpha: 0, y: 50, duration: 1.1, ease: 'power3.out',
      scrollTrigger: { trigger: '.footer-cta', start: 'top 88%', once: true },
    });

  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="min-h-screen text-neutral-200 selection:bg-violet-500/40 selection:text-white font-sans antialiased overflow-x-hidden"
    >
      <DarkBackground />

      {/* ══════════════════════════════════════════════
           HERO
          ══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center pt-16 px-6 overflow-hidden">

        {/* Animated paths overlay */}
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />

        <div className="relative z-10 max-w-5xl mx-auto text-center md:text-left">

          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-black uppercase tracking-[0.18em] mb-8 shadow-lg backdrop-blur-sm"
          >
            Consultoría e Ingeniería de Sistemas de Venta y Automatización
          </div>

          {/* Letter-by-letter animated title */}
          <AnimatedTitle />

          <p
            ref={subtitleRef}
            className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 font-medium italic border-l-2 border-violet-500/25 pl-8"
          >
            No es falta de esfuerzo. Es que tu negocio no está diseñado para convertir.
          </p>

          <div ref={ctaRef} className="flex flex-wrap gap-6 justify-center md:justify-start">
            <a
              href="/protocolo"
              className="group relative px-8 py-4 bg-violet-600 text-white font-black rounded-xl hover:bg-violet-500 transition-all flex items-center gap-2 shadow-2xl shadow-violet-600/25 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/15 animate-shine -translate-x-full pointer-events-none" />
              VER PROTOCOLO
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/casos"
              className="group px-8 py-4 border border-white/10 text-neutral-300 font-black rounded-xl hover:border-violet-500/40 hover:text-white transition-all flex items-center gap-2 backdrop-blur-sm"
            >
              CASOS REALES
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform opacity-50 group-hover:opacity-100" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          ref={scrollRef}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-neutral-500">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-violet-500 to-transparent" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
           PROBLEMAS
          ══════════════════════════════════════════════ */}
      <section className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5 relative z-10">

        {/* Preámbulo */}
        <div className="mb-14 max-w-3xl">
          <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-6 border-l-4 border-violet-600 pl-6 italic">
            Si tenés uno o más de estos problemas, aunque no lo veas, estás perdiendo más ventas de las que pensás.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((item, i) => (
            <FeatureCard
              key={i}
              Icon={AlertCircle}
              title={item.t}
              description={item.d}
              className={i === problems.length - 1 ? ' md:col-span-2 lg:col-span-2 lg:col-start-2' : ''}
            />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
           SOLUCIONES
          ══════════════════════════════════════════════ */}
      <section className="py-24 px-6 max-w-6xl mx-auto relative z-10">
        <div className="mb-14">
          <h2 className="text-2xl font-black text-white uppercase tracking-tighter border-l-4 border-violet-600 pl-6 italic mb-3">
            Lo que construimos
          </h2>
          <p className="pl-6 border-l-2 border-white/5 text-neutral-400 text-sm italic font-medium">
            Algunas de nuestras soluciones:
          </p>
        </div>

        <div className="border border-violet-500/10 rounded-3xl overflow-hidden divide-y divide-violet-500/5">
          {solutions.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="solution-card group px-8 py-5 flex items-start gap-5 hover:bg-violet-950/[0.12] transition-all duration-300 cursor-default relative"
              >
                {/* Left accent line on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-violet-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                {/* Icon */}
                <Icon
                  className="text-violet-800 group-hover:text-violet-400 transition-colors duration-300 mt-0.5 shrink-0"
                  size={16}
                />

                {/* Title + expandable description */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-neutral-200 font-bold text-sm tracking-tight group-hover:text-violet-200 transition-colors duration-300">
                    {item.t}
                  </h4>
                  <div className="max-h-0 group-hover:max-h-16 overflow-hidden transition-all duration-300 ease-in-out">
                    <p className="text-neutral-600 text-xs leading-relaxed italic pt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100">
                      {item.d}
                    </p>
                  </div>
                </div>

                {/* Checkmark */}
                <CheckCircle2
                  className="text-violet-900/40 group-hover:text-violet-500/70 transition-colors duration-300 mt-0.5 shrink-0"
                  size={14}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
           IDEAL PARA / NO ES PARA
          ══════════════════════════════════════════════ */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start border-b border-white/5 pb-32 relative z-10">

        {/* ── IDEAL PARA ── */}
        <div className="ideal-col bg-neutral-900/50 p-12 rounded-[2.5rem] border border-violet-500/20 relative overflow-hidden group shadow-inner shadow-violet-900/10 hover:border-violet-500/40 transition-all duration-700">
          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/8 blur-[100px] -z-10 group-hover:bg-violet-600/14 transition-colors duration-1000 rounded-full" />
          <h3 className="text-violet-400 font-black text-xs uppercase tracking-[0.4em] mb-10 flex items-center gap-3 italic">
            <CheckCircle2 size={16} className="text-violet-500" />
            Ideal para:
          </h3>
          <ul className="space-y-6">
            {idealPara.map((text, i) => (
              <li key={i} className="flex gap-4 items-start text-neutral-300 group/item cursor-default">
                <span className="text-violet-500/50 font-black italic text-sm group-hover/item:text-violet-400 transition-colors shrink-0 mt-0.5">
                  0{i + 1}.
                </span>
                <p className="text-sm font-semibold tracking-tight leading-relaxed group-hover/item:text-white group-hover/item:translate-x-1 transition-all duration-200">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* ── NO ES PARA ── */}
        <div className="noespara-col group p-12 rounded-[2.5rem] border border-white/5 transition-all duration-700 flex flex-col justify-center bg-black/30">
          <div className="text-neutral-800 group-hover:text-neutral-200 transition-colors duration-[800ms] ease-out">
            <h3 className="font-black text-xs uppercase tracking-[0.4em] mb-10 flex items-center gap-3 italic">
              <AlertCircle size={16} />
              No es para:
            </h3>
            <ul className="space-y-6">
              {noEsPara.map((text, i) => (
                <li key={i} className="flex gap-4 italic font-medium">
                  <ChevronRight size={14} className="mt-1 shrink-0 opacity-50 group-hover:opacity-100 transition-opacity duration-[800ms]" />
                  <span className="text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
           FOOTER
          ══════════════════════════════════════════════ */}
      <footer
        id="contacto"
        className="py-48 px-6 text-center bg-black relative overflow-hidden border-t border-white/5 z-10"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-violet-600/6 blur-[160px] rounded-full animate-pulse" />
        <div className="footer-cta relative z-10">
          <h2 className="text-5xl md:text-[7rem] font-black text-white mb-10 tracking-tighter leading-none italic uppercase">
            ¿Digitalizamos <br /> tu negocio?
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto mb-16 text-lg font-medium leading-relaxed italic opacity-80 border-b border-white/5 pb-10">
            &ldquo;No vendemos código, vendemos resultados. El software a medida es la frontera entre un negocio que sobrevive y uno que domina.&rdquo;
          </p>

          {/* Logo with breathing glow */}
          <div className="flex flex-col items-center gap-5 mb-16 mt-8">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-64 h-64 bg-violet-600/20 blur-[70px] rounded-full animate-pulse" />
              <div className="absolute w-40 h-40 bg-violet-500/15 blur-[40px] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="Obsidian Void"
                className="relative z-10 w-40 h-40 object-contain drop-shadow-[0_0_32px_rgba(139,92,246,0.6)]"
              />
            </div>
            <p className="text-neutral-300 font-black italic text-sm tracking-[0.15em] uppercase mt-4">
              Orden en el caos. Poder en tus manos.
            </p>
          </div>

          <GmailLink
            className="group relative inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-2xl font-black text-lg hover:bg-violet-600 hover:text-white transition-all hover:scale-105 active:scale-95 shadow-2xl overflow-hidden shadow-white/5"
          >
            <span className="tracking-tight uppercase italic font-bold">obsidianvoidstudio@gmail.com</span>
            <div className="absolute inset-0 bg-white/20 animate-shine -translate-x-full pointer-events-none" />
          </GmailLink>
          <div className="mt-32 flex flex-col items-center gap-8">
            <div className="text-lg font-black tracking-[0.4em] text-white uppercase italic group cursor-default">
              <span className="group-hover:text-violet-500 transition-colors duration-500">OBSIDIAN</span>
              <span className="text-violet-500 group-hover:text-white transition-colors duration-500 tracking-tighter">VOID</span>
            </div>
            <p className="text-[10px] text-neutral-800 font-mono tracking-[0.6em] uppercase select-none italic font-black">
              Software Engineering // 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
