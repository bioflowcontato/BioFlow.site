// BioFlow Demo — aplicação principal.
// Apresenta a página demonstrativa do Studio Lumina (cliente fictício) e uma seção
// institucional separada da BioFlow. Alternância por navegação no topo.

import { useState } from 'react';
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import AmbientBackground from '@/components/AmbientBackground';
import StudioPage from '@/pages/StudioPage';
import BioFlowPage from '@/pages/BioFlowPage';

type View = 'studio' | 'bioflow';

function App() {
  const [view, setView] = useState<View>('bioflow');

  const goToBioFlow = () => {
    setView('bioflow');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const goToStudio = () => {
    setView('studio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AmbientBackground theme={view} />

      {/* Barra de navegação superior */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-navy-900/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <button
            onClick={() => setView('bioflow')}
            className="group flex items-center gap-2.5"
            aria-label="BioFlow — página principal"
          >
            <img
              src="/bioflow-logo.png"
              alt="BioFlow"
              className="h-9 w-9 rounded-xl object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-display text-sm font-bold tracking-wide text-white">
              BioFlow<span className="text-cyan-400">.</span>
            </span>
          </button>

          {view === 'bioflow' ? (
            <button
              onClick={goToStudio}
              className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-slate-100 transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/15 hover:glow-cyan"
            >
              <Sparkles className="h-4 w-4 text-cyan-400" />
              Ver página demonstrativa
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          ) : (
            <button
              onClick={goToBioFlow}
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10 hover:glow-cyan"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
              Conheça a BioFlow
            </button>
          )}
        </div>
      </header>

      {/* Conteúdo */}
      <div key={view} className={`animate-fade-in ${view === 'studio' ? 'bg-[#080808]' : ''}`}>
        {view === 'studio' ? <StudioPage /> : <BioFlowPage onViewDemo={goToStudio} />}
      </div>
    </div>
  );
}

export default App;
