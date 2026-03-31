// Server component — pure black background with very subtle violet depth gradients
export default function DarkBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -20,
        pointerEvents: 'none',
        background: '#000000',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 55% at 18% 8%, rgba(76,29,149,0.06) 0%, transparent 60%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 55% 45% at 82% 25%, rgba(46,16,101,0.05) 0%, transparent 55%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 65% 35% at 50% 85%, rgba(30,10,80,0.04) 0%, transparent 60%)' }} />
    </div>
  );
}
