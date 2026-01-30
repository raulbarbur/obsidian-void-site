import React from 'react';
import { ArrowRight, Box, Layers, Zap, ExternalLink, Github, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-indigo-500/30">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter text-white">
            OBSIDIAN<span className="text-neutral-500">VOID</span>
          </div>
          <Link 
            href="mailto:hola@obsidianvoid.com" 
            className="text-sm font-medium hover:text-white transition-colors"
          >
            Contacto
          </Link>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-start justify-center min-h-[80vh]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Disponible para nuevos proyectos
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
          Ingeniería de software <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">
            para negocios que escalan.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed">
          En <strong>Obsidian Void</strong>, transformamos procesos manuales y hojas de cálculo en arquitecturas web sólidas. Diseñamos herramientas a medida para proteger tu operación y tu dinero.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link 
            href="#project"
            className="group px-6 py-3 bg-white text-neutral-950 font-semibold rounded-lg hover:bg-neutral-200 transition-all flex items-center justify-center gap-2"
          >
            Ver Caso de Estudio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="mailto:hola@obsidianvoid.com"
            className="px-6 py-3 border border-neutral-800 text-neutral-300 font-medium rounded-lg hover:bg-neutral-900 transition-colors flex items-center justify-center"
          >
            Hablemos
          </Link>
        </div>
      </section>

      {/* --- VALUE PROPOSITION --- */}
      <section className="py-20 bg-neutral-900/50 border-y border-neutral-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {/* Pilar 1 */}
          <div className="space-y-4">
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center text-indigo-400">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white">Arquitectura Sólida</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              No usamos plantillas frágiles. Construimos sobre Next.js y bases de datos robustas (SQL) pensadas para durar años, no meses.
            </p>
          </div>
          {/* Pilar 2 */}
          <div className="space-y-4">
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center text-indigo-400">
              <Box className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white">Diseño Operativo</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Interfaces crudas y funcionales. Priorizamos la velocidad de carga y la claridad de datos para el uso intensivo diario.
            </p>
          </div>
          {/* Pilar 3 */}
          <div className="space-y-4">
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center text-indigo-400">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white">Propiedad Total</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              El código es 100% tuyo. Sin tarifas mensuales ocultas ni dependencia tecnológica eterna. Entregamos las llaves del reino.
            </p>
          </div>
        </div>
      </section>

      {/* --- FEATURED PROJECT (GUAPECANES) --- */}
      <section id="project" className="py-32 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col gap-2 mb-12">
          <span className="text-indigo-400 font-semibold tracking-wider text-sm uppercase">Caso de Estudio Seleccionado</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Guapecanes ERP & POS</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center bg-neutral-900/30 border border-neutral-800 rounded-2xl p-8 md:p-12 hover:border-neutral-700 transition-colors">
          
          {/* Left: Info */}
          <div className="space-y-6">
            <p className="text-lg text-neutral-300 leading-relaxed">
              Sistema integral de gestión para una empresa de retail y servicios (Pet Shop & Grooming). 
              Unificamos ventas, control de stock y agenda en una sola plataforma.
            </p>
            
            <ul className="space-y-3 text-neutral-400">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></span>
                <span><strong>Zero Conflicts:</strong> Algoritmo de agenda que impide la superposición de turnos.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></span>
                <span><strong>Consignación Automática:</strong> Cálculo de deudas a proveedores en tiempo real.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></span>
                <span><strong>Role-Based Access:</strong> Seguridad financiera con roles de Staff y Admin.</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 pt-4">
              {['Next.js 14', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind', 'Server Actions'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs font-mono rounded border border-neutral-700">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <a 
                href="https://guapecanes-erp.vercel.app" // REEMPLAZAR CON TU URL REAL
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white font-medium hover:text-indigo-400 transition-colors"
              >
                Ver Demo en Vivo <ExternalLink className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/TU-USUARIO/guapecanes-erp" // REEMPLAZAR CON TU GITHUB
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-400 font-medium hover:text-white transition-colors"
              >
                Ver Código <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Visual (Placeholder) */}
          <div className="relative aspect-video bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 group shadow-2xl">
            {/* 
              TU TAREA: Reemplazar este div con una etiqueta <Image /> de Next.js 
              que muestre una captura real del Dashboard de Guapecanes.
            */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-900 text-neutral-500 gap-4">
               {/* Simulación visual simple si no hay imagen aun */}
               <div className="w-3/4 h-3/4 bg-neutral-800 rounded border border-neutral-700 flex flex-col p-4 gap-3 opacity-50 group-hover:opacity-100 transition-opacity">
                  <div className="w-1/3 h-4 bg-neutral-700 rounded"></div>
                  <div className="flex gap-4">
                    <div className="w-1/2 h-32 bg-neutral-700 rounded"></div>
                    <div className="w-1/2 h-32 bg-neutral-700 rounded"></div>
                  </div>
               </div>
               <span className="text-xs uppercase tracking-widest font-semibold text-neutral-600">Preview del Sistema</span>
            </div>
          </div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">¿Tenés un proceso complejo?</h2>
          <p className="text-neutral-400 mb-8">
            Analicemos tu caso. Sin compromisos de venta, solo estrategia técnica para ordenar tu negocio.
          </p>
          <a 
            href="mailto:hola@obsidianvoid.com" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-950 font-bold rounded-lg hover:bg-neutral-200 transition-colors"
          >
            <Mail className="w-4 h-4" />
            hola@obsidianvoid.com
          </a>
          <div className="mt-12 text-sm text-neutral-600">
            © {new Date().getFullYear()} Obsidian Void. Software Engineering.
          </div>
        </div>
      </footer>
    </div>
  );
}