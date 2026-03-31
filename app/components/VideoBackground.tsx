// Server component — no hooks, pure HTML
export default function VideoBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -20,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <video
        src="/background.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
}
