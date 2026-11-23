// Fundo ambiente com orbes de gradiente e grid sutil — reutilizado em todas as telas.

type AmbientBackgroundProps = {
  theme?: 'bioflow' | 'studio';
};

export default function AmbientBackground({ theme = 'bioflow' }: AmbientBackgroundProps) {
  if (theme === 'studio') {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden bg-[#f4efe7]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(194,161,104,0.16),transparent_34%),radial-gradient(circle_at_90%_70%,rgba(224,210,184,0.42),transparent_38%)]" />
        <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(45,38,29,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(45,38,29,0.08)_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-navy-900">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(34,211,238,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.4) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />
      <div className="absolute -top-32 -left-32 h-[40rem] w-[40rem] rounded-full bg-electric-600/20 blur-[120px] animate-glow-pulse" />
      <div className="absolute top-1/3 -right-40 h-[38rem] w-[38rem] rounded-full bg-violet-600/20 blur-[120px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute -bottom-40 left-1/4 h-[36rem] w-[36rem] rounded-full bg-cyan-500/15 blur-[120px] animate-glow-pulse" style={{ animationDelay: '3s' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-900/80" />
    </div>
  );
}
