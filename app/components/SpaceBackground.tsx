// Server component — no JS needed, pure CSS/SVG

// Deterministic star field using golden-ratio spiral distribution
function generateStars(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: (i * 137.508) % 100,
    y: (i * 73.137) % 100,
    r: i % 11 === 0 ? 1.9 : i % 7 === 0 ? 1.5 : i % 4 === 0 ? 1.1 : 0.65,
    dur: 2.5 + ((i * 0.618) % 4.5),
    del: (i * 0.314) % 7,
    isBright: i % 13 === 0,
    color: i % 5 === 0 ? 'rgba(180,160,255,0.9)' : i % 8 === 0 ? 'rgba(160,200,255,0.9)' : 'white',
  }));
}

const stars = generateStars(280);

export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -20 }}>

      {/* ── BASE VOID ── */}
      <div className="absolute inset-0" style={{ background: '#03030c' }} />

      {/* ── NEBULA: blue streak top-right (matches logo background) ── */}
      <div
        className="absolute"
        style={{
          top: '-8%',
          right: '-12%',
          width: '65%',
          height: '55%',
          background:
            'radial-gradient(ellipse 80% 60% at 70% 30%, rgba(29,78,216,0.18) 0%, rgba(55,48,163,0.10) 40%, transparent 75%)',
          transform: 'rotate(-15deg)',
        }}
      />

      {/* ── NEBULA: deep purple left-center ── */}
      <div
        className="absolute"
        style={{
          top: '5%',
          left: '-15%',
          width: '60%',
          height: '70%',
          background:
            'radial-gradient(ellipse 70% 80% at 40% 50%, rgba(109,40,217,0.18) 0%, rgba(76,29,149,0.08) 50%, transparent 80%)',
        }}
      />

      {/* ── NEBULA: faint magenta mid-right ── */}
      <div
        className="absolute"
        style={{
          top: '20%',
          right: '0%',
          width: '45%',
          height: '50%',
          background:
            'radial-gradient(ellipse at 60% 40%, rgba(168,85,247,0.07) 0%, transparent 65%)',
        }}
      />

      {/* ── NEBULA: bottom glow ── */}
      <div
        className="absolute bottom-0 left-0 w-full h-[35%]"
        style={{
          background:
            'radial-gradient(ellipse 80% 100% at 40% 100%, rgba(109,40,217,0.10) 0%, transparent 70%)',
        }}
      />

      {/* ── DEEP VOID: dark center ── */}
      <div
        className="absolute"
        style={{
          top: '15%',
          left: '20%',
          width: '60%',
          height: '70%',
          background:
            'radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0.7) 0%, transparent 70%)',
        }}
      />

      {/* ── STAR FIELD ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="bright-star-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="50%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Main star field */}
        {stars.map((s) => (
          <circle
            key={s.id}
            cx={`${s.x}%`}
            cy={`${s.y}%`}
            r={s.r}
            fill={s.isBright ? 'url(#bright-star-grad)' : s.color}
            style={{
              animation: `twinkle ${s.dur}s ${s.del}s ease-in-out infinite`,
              opacity: s.isBright ? 0.85 : 0.22,
            }}
          />
        ))}

        {/* Hand-placed hero stars — larger, prominent */}
        {[
          { cx: '8%',  cy: '7%',  r: 2.4, dur: 3.2, del: 0   },
          { cx: '22%', cy: '4%',  r: 1.8, dur: 4.1, del: 1.2 },
          { cx: '54%', cy: '2%',  r: 2.0, dur: 2.8, del: 0.5 },
          { cx: '78%', cy: '5%',  r: 2.2, dur: 3.8, del: 2.1 },
          { cx: '92%', cy: '10%', r: 2.5, dur: 3.0, del: 0.8 },
          { cx: '96%', cy: '30%', r: 1.9, dur: 4.5, del: 1.5 },
          { cx: '3%',  cy: '42%', r: 2.1, dur: 3.6, del: 0.3 },
          { cx: '65%', cy: '68%', r: 1.7, dur: 4.0, del: 2.8 },
          { cx: '38%', cy: '85%', r: 2.0, dur: 3.3, del: 1.0 },
          { cx: '88%', cy: '80%', r: 1.6, dur: 4.8, del: 3.2 },
          { cx: '14%', cy: '92%', r: 1.8, dur: 3.5, del: 0.9 },
        ].map((s, i) => (
          <circle
            key={`hero-star-${i}`}
            cx={s.cx}
            cy={s.cy}
            r={s.r}
            fill="url(#bright-star-grad)"
            style={{
              animation: `twinkle ${s.dur}s ${s.del}s ease-in-out infinite`,
              opacity: 0.92,
            }}
          />
        ))}
      </svg>

      {/* ── GRAIN ── */}
      <div
        className="absolute inset-0 mix-blend-overlay"
        style={{
          backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
          opacity: 0.06,
        }}
      />
    </div>
  );
}
