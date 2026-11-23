// Ilustrações SVG vetoradas para o projeto demonstrativo Studio Lumina.
// A identidade do Studio usa tons editoriais próprios, sem a paleta da BioFlow.

const gradientId = 'studio-gold-grad';

function Defs() {
  return (
    <defs>
      <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#d8bd87" />
        <stop offset="52%" stopColor="#b18a4d" />
        <stop offset="100%" stopColor="#7c6035" />
      </linearGradient>
      <linearGradient id="studio-dark-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#3b3429" />
        <stop offset="100%" stopColor="#171512" />
      </linearGradient>
    </defs>
  );
}

// Foto de apresentação da empresa — retrato editorial estilizado
export function StudioPortrait({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 500" className={className} role="img" aria-label="Apresentação Studio Lumina">
      <Defs />
      <rect width="400" height="500" rx="24" fill="url(#studio-dark-grad)" />
      {/* Halo */}
      <circle cx="200" cy="200" r="120" fill="url(#studio-gold-grad)" opacity="0.18" />
      {/* Câmera estilizada */}
      <g transform="translate(200 210)">
        <rect x="-70" y="-44" width="140" height="92" rx="14" fill="url(#studio-gold-grad)" opacity="0.25" />
        <rect x="-70" y="-44" width="140" height="92" rx="14" fill="none" stroke="url(#studio-gold-grad)" strokeWidth="2" />
        <rect x="-44" y="-58" width="40" height="18" rx="6" fill="none" stroke="url(#studio-gold-grad)" strokeWidth="2" />
        <circle cx="0" cy="2" r="28" fill="none" stroke="url(#studio-gold-grad)" strokeWidth="3" />
        <circle cx="0" cy="2" r="16" fill="url(#studio-gold-grad)" opacity="0.5" />
        <circle cx="40" cy="-30" r="4" fill="#e5c98f" />
      </g>
      {/* Linhas decorativas */}
      <g stroke="url(#studio-gold-grad)" strokeWidth="1.5" opacity="0.4">
        <line x1="40" y1="360" x2="120" y2="360" />
        <line x1="40" y1="376" x2="160" y2="376" />
        <line x1="40" y1="392" x2="100" y2="392" />
      </g>
      <text x="40" y="340" fill="#fffdf8" fontSize="22" fontWeight="700" fontFamily="Space Grotesk, sans-serif">
        Studio Lumina
      </text>
      <text x="40" y="450" fill="#d8cdbb" fontSize="13" fontFamily="Inter, sans-serif">
        Fotografia &amp; Conteúdo Visual
      </text>
    </svg>
  );
}

type GalleryArt = { id: string; title: string; kind: 'portrait' | 'product' | 'fashion' | 'event' | 'nature' | 'urban' };

const arts: Record<GalleryArt['kind'], (g: string) => JSX.Element> = {
  portrait: (g) => (
    <>
      <circle cx="60" cy="56" r="26" fill={`url(#${g})`} opacity="0.7" />
      <path d="M24 100 q36 -30 72 0 v20 h-72 z" fill={`url(#${g})`} opacity="0.4" />
    </>
  ),
  product: (g) => (
    <>
      <rect x="34" y="44" width="52" height="52" rx="10" fill="none" stroke={`url(#${g})`} strokeWidth="3" />
      <rect x="48" y="58" width="24" height="24" rx="6" fill={`url(#${g})`} opacity="0.6" />
    </>
  ),
  fashion: (g) => (
    <>
      <path d="M60 30 l16 24 -16 12 -16 -12 z" fill={`url(#${g})`} opacity="0.6" />
      <line x1="60" y1="66" x2="60" y2="96" stroke={`url(#${g})`} strokeWidth="3" />
    </>
  ),
  event: (g) => (
    <>
      <circle cx="60" cy="56" r="14" fill={`url(#${g})`} />
      <g stroke={`url(#${g})`} strokeWidth="2" opacity="0.7">
        <line x1="60" y1="30" x2="60" y2="40" />
        <line x1="60" y1="72" x2="60" y2="82" />
        <line x1="34" y1="56" x2="44" y2="56" />
        <line x1="76" y1="56" x2="86" y2="56" />
      </g>
    </>
  ),
  nature: (g) => (
    <>
      <path d="M60 92 q-30 -20 -10 -50 q10 18 10 0 q10 18 10 0 q20 30 -10 50 z" fill={`url(#${g})`} opacity="0.5" />
      <line x1="60" y1="92" x2="60" y2="30" stroke={`url(#${g})`} strokeWidth="2" opacity="0.6" />
    </>
  ),
  urban: (g) => (
    <>
      <rect x="34" y="50" width="18" height="44" fill={`url(#${g})`} opacity="0.6" />
      <rect x="56" y="38" width="14" height="56" fill={`url(#${g})`} opacity="0.8" />
      <rect x="74" y="58" width="12" height="36" fill={`url(#${g})`} opacity="0.4" />
    </>
  ),
};

const galleryItems: GalleryArt[] = [
  { id: 'g1', title: 'Retrato Editorial', kind: 'portrait' },
  { id: 'g2', title: 'Produto', kind: 'product' },
  { id: 'g3', title: 'Moda', kind: 'fashion' },
  { id: 'g4', title: 'Evento', kind: 'event' },
  { id: 'g5', title: 'Natureza', kind: 'nature' },
  { id: 'g6', title: 'Urbano', kind: 'urban' },
];

export function GalleryImage({
  id,
  className = '',
  imageUrl,
  imageTitle,
  imagePosition = 'center',
}: {
  id: string;
  className?: string;
  imageUrl?: string;
  imageTitle?: string;
  imagePosition?: string;
}) {
  if (imageUrl) {
    return (
      <img
        src={imageUrl}
        alt={imageTitle ?? 'Fotografia do Studio Lumina'}
        className={className}
        style={{ objectFit: 'cover', objectPosition: imagePosition }}
        loading="lazy"
      />
    );
  }

  const item = galleryItems.find((i) => i.id === id);
  if (!item) return null;
  const Art = arts[item.kind];
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label={item.title}>
      <Defs />
      <rect width="120" height="120" rx="16" fill="url(#studio-dark-grad)" />
      <g transform="translate(0 10)">{Art(gradientId)}</g>
    </svg>
  );
}

// Logo BioFlow — marca estilizada
export function BioFlowLogo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Logo BioFlow">
      <defs>
        <linearGradient id="bioflow-g" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="55%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="url(#bioflow-g)" opacity="0.12" />
      <rect width="48" height="48" rx="12" fill="none" stroke="url(#bioflow-g)" strokeWidth="1.5" opacity="0.5" />
      <path
        d="M16 34 V14 h5 a8 8 0 0 1 0 16 h-5 z M21 30 a4 4 0 0 0 0-8 h-2 v8 z"
        fill="url(#bioflow-g)"
      />
      <circle cx="33" cy="17" r="2.4" fill="url(#bioflow-g)" />
      <path d="M31 34 V21 h3 v13 z" fill="url(#bioflow-g)" />
    </svg>
  );
}

// Marca Studio Lumina
export function StudioMark({ initials = 'SL', className = '' }: { initials?: string; className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label={`Logo ${initials}`}>
      <defs>
        <linearGradient id="studio-g" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#e5c98f" />
          <stop offset="100%" stopColor="#8b6b3d" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="url(#studio-g)" opacity="0.15" />
      <rect width="48" height="48" rx="12" fill="none" stroke="url(#studio-g)" strokeWidth="1.5" />
      <text
        x="24"
        y="31"
        textAnchor="middle"
        fontSize="18"
        fontWeight="700"
        fontFamily="Space Grotesk, sans-serif"
        fill="url(#studio-g)"
      >
        {initials}
      </text>
    </svg>
  );
}
