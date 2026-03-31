'use client';

import React, { useEffect, useRef, CSSProperties } from 'react';

// ─────────────────────────────────────────────────────────────────────
//  Obsidian Void Leviathan — basado en la imagen del logo oficial
//  Cuerpo enrollado/espiral, cabeza de dragón mirando hacia adentro,
//  tentáculos múltiples, apéndice de cuchilla, destellos violeta.
//  LEFT creature faces RIGHT (head at right side of SVG).
//  Right creature = scaleX(-1) mirror.
// ─────────────────────────────────────────────────────────────────────

function LeviathanSVG({ uid }: { uid: string }) {
  // Main body coil path — spiral from neck area, sweeping ≈300° clockwise
  const coilPath =
    'M 235,152 C 208,138 176,130 148,136 C 118,142 92,162 74,192 C 56,222 50,256 58,284 C 66,312 84,336 108,352 C 132,368 160,374 188,366 C 218,358 242,340 255,312 C 268,286 264,256 250,234 C 236,213 215,204 196,204 C 178,204 164,214 160,228';

  return (
    <svg
      viewBox="0 0 330 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        {/* Intense eye glow */}
        <filter id={`eg-${uid}`} x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="8" result="b1" />
          <feGaussianBlur stdDeviation="4" result="b2" in="SourceGraphic" />
          <feMerge>
            <feMergeNode in="b1" /><feMergeNode in="b1" />
            <feMergeNode in="b2" /><feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Ambient body glow */}
        <filter id={`ag-${uid}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="14" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        {/* Edge highlight glow */}
        <filter id={`hg-${uid}`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>

        {/* Eye gradient */}
        <radialGradient id={`eyeg-${uid}`} cx="35%" cy="30%" r="65%">
          <stop offset="0%"   stopColor="#f5d0fe" />
          <stop offset="30%"  stopColor="#e879f9" />
          <stop offset="65%"  stopColor="#a855f7" />
          <stop offset="100%" stopColor="#3b0764" />
        </radialGradient>
        <radialGradient id={`eyeg2-${uid}`} cx="35%" cy="30%" r="65%">
          <stop offset="0%"  stopColor="#e879f9" />
          <stop offset="60%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#2e1065" />
        </radialGradient>
        {/* Body gradient */}
        <linearGradient id={`bodg-${uid}`} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#1a1535" />
          <stop offset="50%"  stopColor="#0c0a1e" />
          <stop offset="100%" stopColor="#05040d" />
        </linearGradient>
        {/* Tentacle gradient */}
        <linearGradient id={`tntg-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#281850" />
          <stop offset="100%" stopColor="#06040e" />
        </linearGradient>
        {/* Glow halo for whole creature */}
        <filter id={`cg-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      {/* ══ WHOLE CREATURE HALO ══ */}
      <g filter={`url(#cg-${uid})`} opacity="0.5">
        <path d={coilPath} stroke="rgba(109,40,217,0.5)" strokeWidth="70" strokeLinecap="round" fill="none" />
      </g>

      {/* ══ TENTACLES — behind main body ══ */}

      {/* T1 upper-left */}
      <path d="M 106,140 C 76,115 42,105 18,114 C 2,121 -4,140 10,152 C 24,164 52,160 72,150"
        stroke={`url(#tntg-${uid})`} strokeWidth="9" strokeLinecap="round" fill="none" />
      <path d="M 106,140 C 76,115 42,105 18,114 C 2,121 -4,140 10,152"
        stroke="rgba(139,92,246,0.28)" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* T2 left */}
      <path d="M 68,222 C 38,210 8,218 -5,238 C -16,256 -6,276 15,278 C 36,280 60,268 70,252"
        stroke={`url(#tntg-${uid})`} strokeWidth="8.5" strokeLinecap="round" fill="none" />
      <path d="M 68,222 C 38,210 8,218 -5,238 C -16,256 -6,276 15,278"
        stroke="rgba(139,92,246,0.22)" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* T3 lower-left */}
      <path d="M 62,285 C 36,305 15,332 14,358 C 13,380 28,396 50,394 C 70,392 85,375 82,356"
        stroke={`url(#tntg-${uid})`} strokeWidth="8" strokeLinecap="round" fill="none" />

      {/* T4 bottom-left */}
      <path d="M 108,360 C 98,390 106,422 122,436 C 136,448 154,448 162,438 C 170,428 168,412 158,405"
        stroke={`url(#tntg-${uid})`} strokeWidth="7.5" strokeLinecap="round" fill="none" />
      <path d="M 108,360 C 98,390 106,422 122,436"
        stroke="rgba(139,92,246,0.22)" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* T5 bottom-center */}
      <path d="M 172,380 C 168,412 178,440 194,452 C 208,462 225,460 230,448 C 236,436 228,420 216,416"
        stroke={`url(#tntg-${uid})`} strokeWidth="7.5" strokeLinecap="round" fill="none" />

      {/* T6 bottom-right */}
      <path d="M 205,372 C 232,392 255,418 258,445 C 261,466 250,480 234,480 C 220,480 208,468 210,454"
        stroke={`url(#tntg-${uid})`} strokeWidth="7" strokeLinecap="round" fill="none" />
      <path d="M 205,372 C 232,392 255,418 258,445"
        stroke="rgba(139,92,246,0.20)" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* T7 right-inner (tail curl) */}
      <path d="M 258,314 C 282,298 295,272 290,250 C 285,230 268,222 252,228"
        stroke={`url(#tntg-${uid})`} strokeWidth="7" strokeLinecap="round" fill="none" />

      {/* ══ MAIN BODY COIL — multiple layers ══ */}

      {/* Layer 0: outer glow shell */}
      <path d={coilPath}
        stroke="rgba(80,42,158,0.85)"
        strokeWidth="68" strokeLinecap="round" fill="none" />
      {/* Layer 1: body fill */}
      <path d={coilPath}
        stroke={`url(#bodg-${uid})`}
        strokeWidth="54" strokeLinecap="round" fill="none" />
      {/* Layer 2: inner dark core */}
      <path d={coilPath}
        stroke="#050310"
        strokeWidth="38" strokeLinecap="round" fill="none" />
      {/* Layer 3: violet spine highlight */}
      <path d={coilPath}
        stroke="rgba(167,139,250,0.38)"
        strokeWidth="1.8" strokeLinecap="round" fill="none"
        filter={`url(#hg-${uid})`} />

      {/* Scale markings along visible body */}
      {[
        'M 210,144 A 11,7 -25 0,1 228,158',
        'M 248,175 A 11,7 -55 0,1 262,198',
        'M 262,222 A 11,7 -82 0,1 264,248',
        'M 258,272 A 11,7 -105 0,1 252,298',
        'M 240,322 A 11,7 -135 0,1 224,342',
        'M 200,364 A 11,7 160 0,1 178,374',
        'M 152,372 A 11,7 138 0,1 132,362',
        'M 108,348 A 11,7 112 0,1 90,326',
        'M 76,298 A 11,7 88 0,1 70,268',
        'M 72,242 A 11,7 64 0,1 82,214',
        'M 96,185 A 11,7 40 0,1 116,165',
        'M 148,146 A 11,7 18 0,1 170,143',
        'M 196,208 A 9,5 15 0,1 210,220',
        'M 196,230 A 9,5 0 0,1 188,244',
      ].map((d, i) => (
        <path key={`sc-${i}`} d={d}
          stroke="rgba(139,92,246,0.25)" strokeWidth="1.4"
          strokeLinecap="round" fill="none" />
      ))}

      {/* ══ BLADE WING (upper-left area, behind head) ══ */}

      {/* Wing glow */}
      <path d="M 216,70 C 205,46 195,20 198,4 C 202,-4 214,1 220,16 C 228,34 230,55 226,72"
        stroke="rgba(109,40,217,0.25)" strokeWidth="18" strokeLinecap="round" fill="none"
        filter={`url(#ag-${uid})`} />
      {/* Wing shell */}
      <path d="M 216,70 C 205,46 195,20 198,4 C 202,-4 214,1 220,16 C 228,34 230,55 226,72"
        stroke="rgba(50,34,100,0.96)" strokeWidth="16" strokeLinecap="round" fill="none" />
      <path d="M 216,70 C 205,46 195,20 198,4 C 202,-4 214,1 220,16 C 228,34 230,55 226,72"
        stroke="#07041a" strokeWidth="9" strokeLinecap="round" fill="none" />
      <path d="M 214,68 C 204,44 194,18 197,5"
        stroke="rgba(192,132,252,0.50)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Secondary blade */}
      <path d="M 228,65 C 236,42 242,16 239,1 C 243,-5 252,2 250,18 C 247,38 240,60 232,72"
        stroke="rgba(50,34,100,0.80)" strokeWidth="12" strokeLinecap="round" fill="none" />
      <path d="M 228,65 C 236,42 242,16 239,1 C 243,-5 252,2 250,18 C 247,38 240,60 232,72"
        stroke="#07041a" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M 230,63 C 237,41 243,17 240,2"
        stroke="rgba(192,132,252,0.38)" strokeWidth="1.2" strokeLinecap="round" fill="none" />

      {/* ══ NECK CONNECTOR ══ */}
      <path d="M 228,148 C 234,138 238,130 238,120 L 264,120 C 264,130 266,140 268,150"
        fill="#0c0820" stroke="rgba(55,36,108,0.8)" strokeWidth="2" />

      {/* ══ HEAD ══ */}

      {/* Cranium ambient glow */}
      <path d="M 238,96 C 248,78 266,68 284,70 C 302,72 314,86 312,104 C 310,120 296,132 278,136 C 260,140 242,134 234,122"
        fill="rgba(55,20,100,0.15)" filter={`url(#ag-${uid})`} />
      {/* Cranium fill */}
      <path d="M 242,98 C 252,80 270,70 288,72 C 306,74 316,89 314,106 C 312,122 298,134 280,137 C 262,140 245,133 237,121"
        fill="#0c0820" stroke="rgba(55,36,108,0.95)" strokeWidth="2.5" />
      {/* Cranium edge */}
      <path d="M 244,96 C 254,79 272,69 290,71 C 308,73 318,88 316,105"
        fill="none" stroke="rgba(139,92,246,0.35)" strokeWidth="1.5" strokeLinecap="round"
        filter={`url(#hg-${uid})`} />

      {/* Upper jaw — shell */}
      <path d="M 242,104 C 256,88 278,80 298,84 C 316,88 326,103 323,120 C 320,134 306,143 288,143"
        fill="none" stroke="rgba(50,34,100,0.96)" strokeWidth="18" strokeLinecap="round" />
      {/* Upper jaw — core */}
      <path d="M 242,104 C 256,88 278,80 298,84 C 316,88 326,103 323,120 C 320,134 306,143 288,143"
        fill="none" stroke="#09061c" strokeWidth="11" strokeLinecap="round" />
      {/* Upper jaw — highlight */}
      <path d="M 244,103 C 258,87 280,79 299,83"
        fill="none" stroke="rgba(167,139,250,0.40)" strokeWidth="1.5" strokeLinecap="round" />

      {/* Lower jaw — shell */}
      <path d="M 244,120 C 258,112 280,110 300,118 C 315,126 322,142 317,158 C 312,172 297,178 280,173"
        fill="none" stroke="rgba(50,34,100,0.96)" strokeWidth="18" strokeLinecap="round" />
      {/* Lower jaw — core */}
      <path d="M 244,120 C 258,112 280,110 300,118 C 315,126 322,142 317,158 C 312,172 297,178 280,173"
        fill="none" stroke="#09061c" strokeWidth="11" strokeLinecap="round" />
      {/* Lower jaw — highlight */}
      <path d="M 246,120 C 260,112 282,109 301,117"
        fill="none" stroke="rgba(167,139,250,0.32)" strokeWidth="1.5" strokeLinecap="round" />

      {/* Mouth void */}
      <path d="M 252,112 C 268,106 290,107 306,116 C 316,124 318,140 313,154 C 300,160 282,160 268,155 C 255,150 246,140 250,128 Z"
        fill="#020110" opacity="0.96" />

      {/* Upper teeth */}
      {[260, 272, 284, 296, 308].map((x, i) => (
        <polygon key={`ut-${i}`}
          points={`${x - 4},105 ${x},123 ${x + 4},105`}
          fill="rgba(225,205,255,0.72)" stroke="rgba(139,92,246,0.42)" strokeWidth="0.6" />
      ))}
      {/* Lower teeth */}
      {[265, 277, 289, 301].map((x, i) => (
        <polygon key={`lt-${i}`}
          points={`${x - 3.5},165 ${x},150 ${x + 3.5},165`}
          fill="rgba(225,205,255,0.62)" stroke="rgba(139,92,246,0.35)" strokeWidth="0.6" />
      ))}

      {/* ══ EYES ══ */}

      {/* Primary eye — outer ambient glow */}
      <ellipse cx="272" cy="88" rx="22" ry="16"
        fill="rgba(168,85,247,0.20)" filter={`url(#eg-${uid})`} />
      {/* Primary eye — iris */}
      <ellipse cx="272" cy="88" rx="15" ry="11"
        fill={`url(#eyeg-${uid})`} filter={`url(#eg-${uid})`} />
      {/* Slit pupil */}
      <ellipse cx="272" cy="88" rx="5.5" ry="9.5" fill="#030110" />
      {/* Iris ring */}
      <ellipse cx="272" cy="88" rx="10" ry="7.5"
        fill="none" stroke="rgba(240,130,255,0.55)" strokeWidth="1" />
      {/* Specular */}
      <ellipse cx="265" cy="82" rx="4.5" ry="3" fill="rgba(255,255,255,0.44)" />
      {/* Glow ring */}
      <ellipse cx="272" cy="88" rx="17" ry="13"
        fill="none" stroke="rgba(232,121,249,0.55)" strokeWidth="1.5"
        filter={`url(#hg-${uid})`} />

      {/* Secondary eye */}
      <ellipse cx="255" cy="75" rx="8" ry="6"
        fill={`url(#eyeg2-${uid})`} filter={`url(#hg-${uid})`} />
      <ellipse cx="255" cy="75" rx="2.8" ry="4" fill="#030110" />
      <ellipse cx="252" cy="73" rx="2.2" ry="1.6" fill="rgba(255,255,255,0.38)" />
      <ellipse cx="255" cy="75" rx="9" ry="7"
        fill="none" stroke="rgba(232,121,249,0.42)" strokeWidth="1"
        filter={`url(#hg-${uid})`} />

      {/* Segmentation ribs on visible body */}
      {[
        'M 222,150 C 212,162 207,176 204,192',
        'M 198,206 C 187,220 180,235 176,250',
        'M 170,268 C 160,284 152,300 148,318',
        'M 144,334 C 136,350 130,365 126,380',
      ].map((d, i) => (
        <path key={`rb-${i}`} d={d}
          stroke="rgba(139,92,246,0.32)" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      ))}
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────
//  Creature configuration
// ─────────────────────────────────────────────────────────────────────
interface CreatureConfig {
  uid:            string;
  parallaxFactor: number;
  floatDur:       string;
  floatDel:       string;
  isFlipped:      boolean;
  position:       CSSProperties;
  width:          number;
  top:            string;
}

const CREATURES: CreatureConfig[] = [
  {
    uid:            'L',
    parallaxFactor: 0.30,
    floatDur:       '7s',
    floatDel:       '0s',
    isFlipped:      false,
    position:       { left: '-8%' },
    width:          420,
    top:            '3%',
  },
  {
    uid:            'R',
    parallaxFactor: 0.24,
    floatDur:       '8.5s',
    floatDel:       '2s',
    isFlipped:      true,
    position:       { right: '-8%' },
    width:          390,
    top:            '0%',
  },
];

// ─────────────────────────────────────────────────────────────────────
//  IMPORTANT: 3-level div nesting to avoid transform conflict:
//    outer div   → receives translateY from scroll handler (parallax)
//    middle div  → scaleX(-1) flip for right creature (never changes)
//    inner div   → creature-float CSS animation
// ─────────────────────────────────────────────────────────────────────

export default function Creatures() {
  const outerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      CREATURES.forEach((c, i) => {
        const el = outerRefs.current[i];
        if (!el) return;
        el.style.transform = `translateY(${y * c.parallaxFactor}px)`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Trigger once on mount
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {CREATURES.map((c, i) => (
        /* OUTER — parallax container, no animation */
        <div
          key={c.uid}
          ref={(el) => { outerRefs.current[i] = el; }}
          style={{
            position: 'fixed',
            ...c.position,
            top:    c.top,
            width:  c.width,
            aspectRatio: '330 / 440',
            zIndex: -10,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          {/* MIDDLE — flip transform (static) */}
          <div style={{
            width: '100%',
            height: '100%',
            transform: c.isFlipped ? 'scaleX(-1)' : 'none',
            filter: 'drop-shadow(0 0 48px rgba(109,40,217,0.22))',
          }}>
            {/* INNER — floating animation (CSS, no conflict with parallax) */}
            <div style={{
              width: '100%',
              height: '100%',
              animation: `creature-float ${c.floatDur} ${c.floatDel} ease-in-out infinite`,
            }}>
              <LeviathanSVG uid={c.uid} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
