'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GmailLink } from '@/components/ui/gmail-link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/protocolo', label: 'Protocolo' },
  { href: '/casos', label: 'Casos' },
  { href: '/nosotros', label: 'Nosotros' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevenir scroll de la página cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/5 px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-black tracking-widest text-white uppercase italic group cursor-pointer flex items-center gap-2.5"
        >
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

        {/* ── DESKTOP NAVIGATION ── */}
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

        {/* ── DESKTOP CTA ── */}
        <GmailLink
          className="hidden md:flex relative group overflow-hidden bg-white text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl"
        >
          <span className="relative z-10 font-bold italic">Solicitar Diagnóstico</span>
          <div className="absolute inset-0 bg-violet-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        </GmailLink>

        {/* ── MOBILE HAMBURGER BUTTON ── */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-neutral-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* ── MOBILE DRAWER NAVIGATION ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-black border-l border-white/5 z-[70] p-6 flex flex-col md:hidden shadow-2xl shadow-black overflow-y-auto"
            >
              <div className="flex items-start justify-between mb-12">
                <div className="flex items-center gap-2 mt-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo.png" alt="" className="w-8 h-8 object-contain opacity-90 drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
                  <div className="flex items-center ml-0.5 whitespace-pre text-[15px] sm:text-lg font-black tracking-widest italic uppercase">
                    <span className="text-white">OBSIDIAN </span>
                    <span className="text-violet-500">VOID</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-500 hover:text-white transition-colors p-2 -mr-2"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-8 flex-1 pl-2">
                {links.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`text-xl font-semibold uppercase tracking-widest italic ${
                      pathname === href ? 'text-white' : 'text-neutral-500 hover:text-violet-400'
                    } transition-colors duration-300`}
                  >
                    {label}
                  </Link>
                ))}
              </div>

              {/* CTA en Drawer */}
              <div className="mt-12 pb-8">
                <GmailLink
                  className="relative group overflow-hidden bg-white text-black px-6 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-xl block text-center"
                >
                  <span className="relative z-10 font-bold italic">Solicitar Diagnóstico</span>
                  <div className="absolute inset-0 bg-violet-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </GmailLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
