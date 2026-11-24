// Botões reutilizáveis com estados de hover e brilho.

import { type ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'studio-primary' | 'studio-secondary';
  icon?: ReactNode;
  external?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function ActionButton({
  href,
  children,
  variant = 'primary',
  icon,
  external,
  className = '',
  onClick,
}: Props) {
  const focusRing = variant.startsWith('studio-')
    ? 'focus-visible:ring-white/80 focus-visible:ring-offset-[#080808]'
    : 'focus-visible:ring-cyan-400/70 focus-visible:ring-offset-navy-900';
  const base =
    `group relative inline-flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 text-base font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${focusRing}`;

  const variants = {
    primary:
      'text-white bg-gradient-to-r from-cyan-500 via-electric-500 to-violet-500 bg-[length:200%_100%] hover:bg-[position:100%_0] hover:scale-[1.02] glow-electric shadow-lg shadow-electric-600/30',
    secondary:
      'text-slate-100 glass hover:bg-white/10 hover:border-cyan-400/40 hover:scale-[1.02] hover:glow-cyan',
    ghost:
      'text-slate-300 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5',
    'studio-primary':
      'text-[#080808] bg-[#f3f3f3] border border-[#f3f3f3] hover:bg-white hover:scale-[1.02] shadow-lg shadow-black/30',
    'studio-secondary':
      'text-white bg-white/[0.04] border border-white/20 hover:bg-white/10 hover:border-white/50 hover:scale-[1.02]',
  };

  return (
    <a
      href={href}
      onClick={onClick}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {icon && <span className="shrink-0 transition-transform duration-300 group-hover:scale-110">{icon}</span>}
      <span>{children}</span>
    </a>
  );
}
