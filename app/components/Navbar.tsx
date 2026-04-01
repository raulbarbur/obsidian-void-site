'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/protocolo', label: 'Protocolo' },
  { href: '/casos', label: 'Casos' },
  { href: '/nosotros', label: 'Nosotros' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/5 px-6 h-16 flex items-center justify-between">
      <Link
        href="/"
        className="text-xl font-black tracking-widest text-white uppercase italic group cursor-pointer flex items-center gap-2.5"
      >
        {/* Logo image — place logo.png in /public/ */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt=""
          aria-hidden="true"
          className="w-7 h-7 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]"
        />
        <div className="flex items-center ml-0.5 whitespace-pre">
          <span className="group-hover:text-violet-500 transition-colors duration-500">OBSIDIAN </span>
          <span className="text-violet-500 group-hover:text-white transition-colors duration-500">VOID</span>
        </div>
      </Link>

      <div className="hidden md:flex items-center gap-10">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`text-[11px] font-black uppercase tracking-widest transition-colors duration-300 relative group pb-0.5 ${
              pathname === href ? 'text-white' : 'text-neutral-500 hover:text-neutral-200'
            }`}
          >
            {label}
            <span
              className={`absolute -bottom-0.5 left-0 h-px bg-violet-500 transition-all duration-300 ${
                pathname === href ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </Link>
        ))}
      </div>

      <a
        href="mailto:obsidianvoidstudio@gmail.com"
        className="relative group overflow-hidden bg-white text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl"
      >
        <span className="relative z-10 font-bold italic">Solicitar Diagnóstico</span>
        <div className="absolute inset-0 bg-violet-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
      </a>
    </nav>
  );
}
