// Wrapper de animação de entrada — aplica fade-in-up com delay por índice.

import { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: 0 | 100 | 200 | 300 | 400 | 500 | 700;
  className?: string;
};

export default function Reveal({ children, delay = 0, className = '' }: Props) {
  const opacityDelay = delay ? `animate-delay-${delay}` : '';
  return (
    <div className={`animate-fade-in-up opacity-0 ${opacityDelay} ${className}`}>
      {children}
    </div>
  );
}
