// Seção institucional da BioFlow — apresentação da agência, separada da demo do cliente.
// Visual premium, tecnológico, com identidade azul elétrico, ciano e roxo.

import { MessageCircle, Instagram, Mail, MapPin, Zap, Target, Layers, Rocket, Check, ArrowRight } from 'lucide-react';
import ActionButton, { buildWhatsappLink } from '@/components/ActionButton';
import Reveal from '@/components/Reveal';
import { bioflowConfig } from '@/config/site';

const mission = {
  icon: Target,
  title: 'Nossa missão',
  text: 'Ajudar empresas a apresentarem seus serviços de maneira profissional e facilitar o contato direto com seus clientes pelo WhatsApp.',
};

const pillars = [
  {
    icon: Zap,
    title: 'Páginas que convertem',
    text: 'Cada página é construída para transformar visitantes do Instagram em conversas reais no WhatsApp.',
  },
  {
    icon: Layers,
    title: 'Identidade única',
    text: 'Design personalizado que reflete a essência de cada negócio — sem templates genéricos.',
  },
  {
    icon: Rocket,
    title: 'Pronto para crescer',
    text: 'Estrutura rápida, responsiva e otimizada para celular — onde seu público já está.',
  },
];

const deliverables = [
  'Página de Link na Bio personalizada',
  'Botão de WhatsApp com mensagem pré-configurada',
  'Integração com Instagram e redes sociais',
  'Seções de serviços, galeria e contato',
  'Design responsivo para celular e desktop',
  'Edição fácil de links, textos e preços',
];

type BioFlowPageProps = {
  onViewDemo: () => void;
};

export default function BioFlowPage({ onViewDemo }: BioFlowPageProps) {
  const whatsappLink = buildWhatsappLink(bioflowConfig.whatsappNumber, bioflowConfig.whatsappMessage);

  return (
    <main className="mx-auto w-full max-w-5xl px-5 pb-28 pt-12">
      {/* Hero */}
      <Reveal delay={0} className="flex flex-col items-center text-center">
        <img
          src="/Logo_futurista_neon_BioFlow.png"
          alt="Logo BioFlow"
          className="h-28 w-28 rounded-3xl object-cover shadow-2xl shadow-electric-600/30 animate-float"
        />
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Marca principal · {bioflowConfig.city}
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-gradient sm:text-5xl md:text-6xl">
          BioFlow cria sua presença online
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
          A BioFlow cria exclusivamente páginas personalizadas de Link na Bio para pequenos negócios e
          profissionais. Transformamos seu perfil do Instagram em um portal profissional que
          apresenta seus serviços e direciona clientes direto para o seu WhatsApp.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:w-80">
          <ActionButton href={whatsappLink} external variant="primary" icon={<MessageCircle className="h-5 w-5" />}>
            Quero minha página com a BioFlow
          </ActionButton>
          <button
            onClick={onViewDemo}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.08]"
          >
            Ver um exemplo de página criada
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </Reveal>

      <Reveal delay={300} className="mt-10">
        <div className="rounded-2xl border border-violet-400/20 bg-violet-500/[0.08] px-5 py-4 text-center">
          <p className="text-sm font-medium text-slate-200">
            O Studio Lumina abaixo é um <span className="text-cyan-300">projeto demonstrativo fictício</span> criado pela BioFlow para mostrar como sua página pode funcionar.
          </p>
        </div>
      </Reveal>

      {/* Faixa de cobertura */}
      <Reveal delay={200} className="mt-10">
        <div className="gradient-border flex flex-wrap items-center justify-center gap-2 rounded-2xl bg-white/[0.03] px-5 py-4 text-center">
          <MapPin className="h-5 w-5 text-cyan-400" />
          <span className="text-sm font-medium text-slate-300">
            Atendemos empresas em <span className="text-white">Rio Grande</span>,{' '}
            <span className="text-white">região sul</span> e de <span className="text-white">todo o Brasil</span>.
          </span>
        </div>
      </Reveal>

      {/* Missão */}
      <Reveal delay={0} className="mt-16">
        <div className="gradient-border overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800/60 to-navy-700/40 p-8 sm:p-12">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/25 to-violet-500/25 ring-1 ring-white/10">
              <mission.icon className="h-8 w-8 text-cyan-400" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">{mission.title}</h2>
              <p className="mt-3 text-lg leading-relaxed text-slate-300">{mission.text}</p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Pilares */}
      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={((i % 3) * 100) as 0 | 100 | 200}>
            <article className="gradient-border group h-full rounded-2xl bg-white/[0.03] p-6 transition-all duration-300 hover:bg-white/[0.06] hover:glow-cyan">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
                <p.icon className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.text}</p>
            </article>
          </Reveal>
        ))}
      </div>

      {/* O que entregamos */}
      <Reveal delay={0} className="mt-16">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-gradient">O que entregamos</h2>
          <p className="mt-3 text-slate-400">Tudo o que sua página precisa para funcionar como uma vitrine profissional.</p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {deliverables.map((d, i) => (
            <div
              key={d}
              className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3.5 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/25 to-violet-500/25 ring-1 ring-white/10">
                <Check className="h-4 w-4 text-cyan-400" />
              </span>
              <span className="text-sm font-medium text-slate-200">{d}</span>
            </div>
          ))}
        </div>
      </Reveal>

      {/* CTA final */}
      <Reveal delay={0} className="mt-16">
        <div className="gradient-border relative overflow-hidden rounded-3xl bg-gradient-to-br from-electric-600/20 via-navy-800/40 to-violet-600/20 p-8 text-center sm:p-12">
          <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
          <h2 className="relative font-display text-3xl font-bold text-white sm:text-4xl">
            Pronto para profissionalizar sua presença online?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-slate-300">
            Fale com a BioFlow e crie uma página de Link na Bio que transforma seguidores em clientes.
          </p>
          <div className="relative mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ActionButton href={whatsappLink} external variant="primary" icon={<MessageCircle className="h-5 w-5" />}>
              Falar com a BioFlow
            </ActionButton>
            <ActionButton
              href={bioflowConfig.instagram}
              external
              variant="secondary"
              icon={<Instagram className="h-5 w-5" />}
            >
              @bioflow
            </ActionButton>
          </div>
        </div>
      </Reveal>

      {/* Contato institucional */}
      <Reveal delay={200} className="mt-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-cyan-400" /> {bioflowConfig.email}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-violet-400" /> {bioflowConfig.city}, {bioflowConfig.country}
            </span>
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} BioFlow · {bioflowConfig.city} · {bioflowConfig.country}
          </p>
        </div>
      </Reveal>
    </main>
  );
}
