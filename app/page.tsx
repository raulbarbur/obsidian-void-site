import React from 'react';
import { 
  CheckCircle2, AlertCircle, Laptop, Smartphone, 
  TrendingUp, Zap, Mail, ShieldCheck, ArrowUpRight,
  FileSpreadsheet, ChevronRight, Lock, BarChart3, Sparkles
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-neutral-200 selection:bg-violet-500/40 selection:text-white font-sans antialiased overflow-x-hidden text-shadow-sm">
      
      {/* --- CAPA DE FX ATMOSFÉRICOS --- */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none text-violet-500/5">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-violet-600/10 blur-[140px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-violet-800/5 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* NAVBAR CON LOGO INTERACTIVO */}
      <nav className="fixed w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/5 px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-black tracking-tighter text-white uppercase italic group cursor-default flex items-center">
          <span className="group-hover:text-violet-500 transition-colors duration-500">OBSIDIAN</span>
          <span className="text-violet-500 group-hover:text-white transition-colors duration-500">VOID</span>
        </div>
        <a href="#contacto" className="relative group overflow-hidden bg-white text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl">
          <span className="relative z-10 font-bold italic">Solicitar Diagnóstico</span>
          <div className="absolute inset-0 bg-violet-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-48 pb-32 px-6 max-w-6xl mx-auto relative text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-black uppercase tracking-[0.2em] mb-10 shadow-lg backdrop-blur-sm">
          <Sparkles size={10} className="animate-pulse" />
          Estudio de Ingeniería de Software
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.15] mb-10 tracking-tight max-w-5xl italic">
          Sistema de gestión de procesos internos para comercios con enfoque en <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600 font-black">reducción de errores</span> y <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-neutral-500 font-black tracking-tight">trazabilidad absoluta.</span>
        </h1>
        <p className="text-neutral-500 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 font-medium italic border-l-2 border-violet-500/20 pl-8">
          No somos una agencia creativa. Diseñamos motores de ingeniería que eliminan la carga cognitiva del dueño y centralizan el control de su activo más valioso: la información.
        </p>
        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          <a href="#paquetes" className="group relative px-8 py-4 bg-violet-600 text-white font-black rounded-xl hover:bg-violet-500 transition-all flex items-center gap-2 shadow-2xl shadow-violet-600/20 overflow-hidden">
            <div className="absolute inset-0 bg-white/20 animate-shine -translate-x-full"></div>
            EXPLORAR SOLUCIONES <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* PROBLEMAS QUE ELIMINAMOS */}
      <section className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
        <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-12 border-l-4 border-violet-600 pl-6 italic">Problemas que eliminamos</h2>
        <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
          {[
            { t: "Dependencia de Cuadernos", d: "Sustituimos la fragilidad del papel por una infraestructura digital auditable y eterna." },
            { t: "Nula Trazabilidad", d: "Histórico quirúrgico de cada venta, movimiento de stock y apertura de caja." },
            { t: "Ceguera Financiera", d: "Reportes de ganancia real cada 24hs. Datos concretos para decisiones difíciles." },
            { t: "Desorden de Proveedores", d: "Control automatizado de mercadería en consignación y deudas de terceros." },
            { t: "Dependencia de Memoria", d: "El sistema actúa como el cerebro de tu negocio. No más olvidos en turnos o deudas." },
            { t: "Fugas de Stock", d: "Detección inmediata de faltantes por robo, extravío o errores de registro manual." }
          ].map((item, i) => (
            <div key={i} className="p-10 bg-[#080808] hover:bg-violet-950/[0.1] transition-all duration-500 group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <AlertCircle className="text-violet-900 group-hover:text-violet-500 mb-6 transition-colors" size={24} />
              <h4 className="text-white font-bold mb-3 text-lg tracking-tight group-hover:translate-x-1 transition-transform duration-500">{item.t}</h4>
              <p className="text-neutral-500 text-sm leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEGMENTACIÓN */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center border-b border-white/5 pb-32">
        <div className="bg-neutral-900/40 p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden group shadow-inner">
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/5 blur-[100px] -z-10 group-hover:bg-violet-600/10 transition-colors duration-1000"></div>
          <h3 className="text-violet-500 font-black text-xs uppercase tracking-[0.4em] mb-10 flex items-center gap-3 italic">
            <CheckCircle2 size={18} /> Ideal para:
          </h3>
          <ul className="space-y-6">
            {[
              "Comercios minoristas que necesitan escalar su administración.",
              "Gestores de stock propio y de terceros (Consignación).",
              "Servicios que requieren una agenda inteligente sin errores de cruce.",
              "Dueños cansados de la operatividad manual y el Excel."
            ].map((text, i) => (
              <li key={i} className="flex gap-4 items-start text-neutral-300 group/item">
                <span className="text-violet-500/40 font-black italic text-sm group-hover/item:text-violet-400 transition-colors italic">0{i+1}.</span>
                <p className="text-sm font-semibold tracking-tight leading-relaxed">{text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-12 rounded-[2.5rem] border border-white/5 opacity-40 hover:opacity-100 transition-all duration-1000 flex flex-col justify-center bg-black/20">
          <h3 className="text-neutral-700 font-black text-xs uppercase tracking-[0.4em] mb-10 flex items-center gap-3 italic">
            <AlertCircle size={18} /> No es para:
          </h3>
          <ul className="space-y-6">
            {[
              "Grandes corporaciones con burocracia compleja.",
              "Negocios que no buscan un diagnóstico técnico real.",
              "Dueños que no están dispuestos a digitalizar sus procesos.",
              "Proyectos sin metas de crecimiento definidas."
            ].map((text, i) => (
              <li key={i} className="flex gap-4 text-neutral-600 italic font-medium">
                <ChevronRight size={14} className="mt-1 shrink-0 text-neutral-800" />
                <span className="text-sm">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* METODOLOGÍA OBSIDIAN (VERTICAL + ROMAN NUMERALS MASSIVE) */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
        <h2 className="text-center text-white font-black text-3xl mb-32 tracking-tighter uppercase italic border-b border-white/5 pb-10 inline-block w-full">Metodología Obsidian</h2>
        <div className="space-y-32">
          {[
            { i: "I", t: "Diagnóstico Situacional", d: "Analizamos el problema real de tu negocio. Si no tenemos la capacidad técnica de resolverlo con excelencia, no tomamos el caso." },
            { i: "II", t: "Propuesta de Paquetes", d: "Ofrecemos alcances y limitaciones definidas. Sin sorpresas. Plazos de entrega estricto en base a la solución elegida." },
            { i: "III", t: "Contrato y Blindaje Legal", d: "Cada proyecto se rige por un contrato legal. Iniciamos el desarrollo tras la firma y la confirmación del depósito inicial." },
            { i: "IV", t: "Flexibilidad Controlada", d: "No empezamos sin confirmación de propuesta. Si el alcance cambia durante la producción, el precio se ajusta proporcionalmente." }
          ].map((step, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-8 md:gap-24 items-start group relative">
              <span className="text-[7rem] md:text-[10rem] font-black text-neutral-900 group-hover:text-violet-500/10 transition-all duration-1000 select-none leading-none tracking-tighter italic">
                {step.i}
              </span>
              <div className="pt-2 md:pt-10 relative z-10">
                <h4 className="text-white font-black text-2xl mb-4 tracking-tight group-hover:text-violet-400 transition-colors uppercase italic border-b border-white/5 pb-2">{step.t}</h4>
                <p className="text-neutral-500 text-lg leading-relaxed max-w-2xl border-l-2 border-white/5 pl-8 group-hover:border-violet-500/40 transition-all duration-700 italic font-medium">
                  {step.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PAQUETES */}
      <section id="paquetes" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 items-stretch">
          {/* PAQUETE 1 */}
          <div className="p-10 bg-neutral-900/40 border border-white/5 rounded-3xl flex flex-col group hover:bg-neutral-900/60 transition-all duration-500 shadow-xl">
            <Laptop className="text-neutral-600 mb-8 group-hover:text-violet-400 transition-colors" />
            <h4 className="text-xl font-black text-white mb-2 uppercase italic tracking-tighter">Base Operativa</h4>
            <p className="text-xs text-neutral-500 mb-10 font-medium italic">Digitalización esencial para comercios locales.</p>
            <ul className="space-y-5 mb-12 flex-grow border-t border-white/5 pt-8 font-semibold italic">
              <li className="text-[11px] flex gap-3 text-neutral-400 items-center uppercase tracking-widest"><CheckCircle2 size={16} className="text-violet-500"/> Web App de Escritorio</li>
              <li className="text-[11px] flex gap-3 text-neutral-400 items-center uppercase tracking-widest"><CheckCircle2 size={16} className="text-violet-500"/> Inventario & POS Central</li>
              <li className="text-[11px] flex gap-3 text-neutral-400 items-center uppercase tracking-widest"><CheckCircle2 size={16} className="text-violet-500"/> Reportes de Ganancia Diaria</li>
            </ul>
            <a href="#contacto" className="block w-full py-4 bg-neutral-800 text-white rounded-xl text-center text-[10px] font-black uppercase tracking-widest hover:bg-neutral-700 transition-all shadow-lg shadow-black/40">Consultar</a>
          </div>

          {/* PAQUETE 2 - CASO GUAPECANES */}
          <div className="group relative">
            <div className="transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-violet-600 text-white text-[9px] px-6 py-2 rounded-full font-black tracking-widest shadow-[0_0_30px_rgba(139,92,246,0.3)] whitespace-nowrap italic border border-white/10 animate-pulse uppercase">
                  MÁS POPULAR
                </div>
              </div>
              <div className="p-10 bg-violet-600/5 border-2 border-violet-500 rounded-3xl flex flex-col relative shadow-[0_0_60px_rgba(139,92,246,0.1)] backdrop-blur-sm">
                <Smartphone className="text-violet-400 mb-8" />
                <h4 className="text-xl font-black text-white mb-2 uppercase italic tracking-tighter">Movilidad y Control</h4>
                <p className="text-xs text-violet-200/50 mb-10 font-medium italic leading-relaxed">Control remoto y gestión de servicios híbridos.</p>
                <ul className="space-y-5 mb-12 flex-grow border-t border-violet-500/20 pt-8 text-white font-bold tracking-tight italic uppercase">
                  <li className="text-[11px] flex gap-3 items-center"><CheckCircle2 size={16} className="text-violet-400"/> Web Escritorio + PWA Móvil</li>
                  <li className="text-[11px] flex gap-3 items-center"><CheckCircle2 size={16} className="text-violet-400"/> Gestión de Consignaciones</li>
                  <li className="text-[11px] flex gap-3 items-center"><CheckCircle2 size={16} className="text-violet-400"/> Agenda de Turnos Dinámica</li>
                  <li className="text-[11px] flex gap-3 items-center text-violet-300 font-black"><Zap size={16} className="fill-violet-500 text-violet-500 animate-pulse" /> Trazabilidad de Deudas</li>
                </ul>
                <a href="#contacto" className="block w-full py-4 bg-violet-600 text-white rounded-xl text-center text-[10px] font-black uppercase tracking-[0.2em] hover:bg-violet-500 transition-all shadow-xl shadow-violet-600/30 italic">Seleccionar Plan</a>
              </div>
            </div>
          </div>

          {/* PAQUETE 3 */}
          <div className="p-10 bg-neutral-900/40 border border-white/5 rounded-3xl flex flex-col group hover:bg-neutral-900/60 transition-all duration-500 shadow-xl">
            <TrendingUp className="text-neutral-600 mb-8 group-hover:text-violet-400 transition-colors" />
            <h4 className="text-xl font-black text-white mb-2 uppercase italic tracking-tighter">Enterprise Suite</h4>
            <p className="text-xs text-neutral-500 mb-10 font-medium italic tracking-tight leading-relaxed">Sistemas complejos de alto volumen operativo.</p>
            <ul className="space-y-5 mb-12 flex-grow border-t border-white/5 pt-8 font-semibold italic">
              <li className="text-[11px] flex gap-3 text-violet-400 items-center uppercase tracking-widest"><FileSpreadsheet size={16} /> Importación Masiva Excel</li>
              <li className="text-[11px] flex gap-3 text-neutral-400 items-center uppercase tracking-widest"><CheckCircle2 size={16} className="text-violet-500"/> Sincronización Multi-Sucursal</li>
              <li className="text-[11px] flex gap-3 text-neutral-400 items-center uppercase tracking-widest"><CheckCircle2 size={16} className="text-violet-500"/> Auditoría de Usuarios & Logs</li>
              <li className="text-[11px] flex gap-3 text-neutral-400 items-center uppercase tracking-widest"><Lock size={16} className="text-violet-500" /> Seguridad Avanzada</li>
            </ul>
            <a href="#contacto" className="block w-full py-3 bg-neutral-800 text-white rounded-lg text-center text-[10px] font-black uppercase tracking-widest hover:bg-neutral-700 transition-all shadow-lg shadow-black/40">Consultar</a>
          </div>
        </div>
      </section>

      {/* CASO REAL: GUAPECANES + MOCKUP PREVIEW */}
      <section id="guapecanes" className="py-40 px-6 max-w-6xl mx-auto border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <h2 className="text-5xl font-black text-white mb-10 tracking-tighter leading-none italic uppercase">
              Caso Real:<br/>Guapecanes
            </h2>
            <div className="inline-flex bg-violet-500/20 text-violet-400 px-4 py-1.5 rounded-md text-[10px] font-black tracking-widest mb-10 border border-violet-500/20 uppercase italic">Paquete Seleccionado: Movilidad y Control</div>
            
            <div className="space-y-8 text-neutral-400 leading-relaxed text-sm md:text-base">
              <p className="italic font-medium text-neutral-300 border-l-2 border-violet-500/30 pl-6">
                Guapecanes (Pet Shop & Grooming) enfrentaba una parálisis operativa por el uso de cuadernos físicos y la falta de registro trazable de deudas.
              </p>
              <p className="italic">
                El desafío central era gestionar un inventario híbrido: <span className="text-white font-bold text-base">stock propio + consignación de terceros</span>. El dueño buscaba eliminar la fatiga cognitiva de recordar deudas y turnos manuales.
              </p>
              
              <div className="p-8 bg-neutral-900/60 backdrop-blur-sm border border-white/5 border-l-4 border-l-violet-500 rounded-r-2xl space-y-6 relative group overflow-hidden shadow-2xl transition-all hover:bg-neutral-900/80">
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/5 blur-3xl -z-10 group-hover:bg-violet-600/10 transition-colors"></div>
                <p className="italic text-neutral-200 text-base leading-relaxed font-bold tracking-tight">"Automatizamos la lógica transaccional de pagos parciales a proveedores y creamos una agenda inteligente que neutralizó los errores de cruce de turnos en peluquería, garantizando que cada peso sea trazable."</p>
                <div className="flex gap-10 pt-4">
                   <div className="flex flex-col items-center group-hover:scale-110 transition-transform"><span className="text-white font-black text-3xl italic tracking-tighter">95%</span><span className="text-[10px] uppercase font-bold tracking-widest text-violet-500 mt-2 italic font-bold">Error Eliminado</span></div>
                   <div className="flex flex-col items-center group-hover:scale-110 transition-transform"><span className="text-white font-black text-3xl italic tracking-tighter font-mono tracking-tighter uppercase italic">PWA</span><span className="text-[10px] uppercase font-bold tracking-widest text-violet-500 mt-2 italic font-bold">Acceso Remoto</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* MOCKUP PREVIEW */}
          <div className="relative group">
             <div className="absolute inset-0 bg-violet-600/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
             <div className="relative aspect-[4/3] bg-[#080808] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] p-6 flex flex-col gap-6 group-hover:border-violet-500/40 transition-all duration-500">
                <div className="h-4 flex items-center justify-between px-2 border-b border-white/5 pb-6">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                  </div>
                  <div className="w-32 h-1.5 bg-neutral-800 rounded-full"></div>
                </div>
                <div className="grid grid-cols-12 gap-6 flex-grow">
                  <div className="col-span-3 bg-neutral-950/50 rounded-2xl p-4 space-y-4 border border-white/5 shadow-inner">
                    <div className="w-full h-8 bg-violet-600/20 rounded-xl border border-violet-500/20"></div>
                    <div className="space-y-2">
                      <div className="w-full h-1.5 bg-neutral-800 rounded-full opacity-50"></div>
                      <div className="w-2/3 h-1.5 bg-neutral-800 rounded-full opacity-50"></div>
                    </div>
                  </div>
                  <div className="col-span-9 space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="aspect-video bg-neutral-950/50 rounded-3xl border border-white/5 flex items-end p-4 shadow-inner"><div className="w-full h-1.5 bg-violet-500/30 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.3)]"></div></div>
                      <div className="aspect-video bg-violet-600/10 rounded-3xl border border-violet-500/30"></div>
                      <div className="aspect-video bg-neutral-950/50 rounded-3xl border border-white/5"></div>
                    </div>
                    <div className="h-full bg-neutral-950/80 rounded-[2rem] border border-white/5 relative flex items-center justify-center p-8 shadow-inner overflow-hidden">
                       <BarChart3 className="text-violet-600/10 animate-pulse" size={48} />
                       <div className="absolute inset-x-6 top-10 bottom-6 bg-[repeating-linear-gradient(90deg,transparent,transparent_24px,rgba(139,92,246,0.02)_25px)]"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-black tracking-[0.6em] text-white/20 whitespace-nowrap italic select-none uppercase font-bold italic underline decoration-violet-500/20">Obsidian Core // ERP Preview</div>
             </div>
          </div>
        </div>
      </section>

      {/* FOOTER CON LOGO INTERACTIVO */}
      <footer id="contacto" className="py-48 px-6 text-center bg-black relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-violet-600/5 blur-[160px] rounded-full animate-pulse"></div>
        <div className="relative z-10">
          <h2 className="text-6xl md:text-[8rem] font-black text-white mb-10 tracking-tighter leading-none italic uppercase">
            ¿Digitalizamos <br/> tu éxito?
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto mb-16 text-lg md:text-xl font-medium leading-relaxed italic opacity-80 border-b border-white/5 pb-10">
            "No vendemos código, vendemos orden operativo. El software a medida es la frontera entre un negocio que sobrevive y uno que domina."
          </p>
          <a href="mailto:hola@obsidianvoid.com" className="group relative inline-flex items-center gap-6 bg-white text-black px-14 py-7 rounded-2xl font-black text-xl hover:bg-violet-600 hover:text-white transition-all hover:scale-105 active:scale-95 shadow-2xl overflow-hidden shadow-white/5">
            <Mail size={28} /> <span className="tracking-tight uppercase italic font-bold">obsidianvoidstudio@gmail.com</span>
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-white/20 animate-shine -translate-x-full pointer-events-none"></div>
          </a>
          <div className="mt-32 flex flex-col items-center gap-10">
            {/* LOGO FOOTER INTERACTIVO */}
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