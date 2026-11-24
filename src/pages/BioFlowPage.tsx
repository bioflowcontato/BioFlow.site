// Seção institucional da BioFlow — apresentação da agência, separada da demo do cliente.
// Visual premium, tecnológico, com identidade azul elétrico, ciano e roxo.

import { useEffect, useRef } from 'react';
import { ArrowRight, Check, Instagram, Mail, MapPin, MessageCircle, PenTool, Rocket, Scissors, Sparkles, Stethoscope, Store, Target, Wrench, Zap, Layers } from 'lucide-react';
import ActionButton from '@/components/ActionButton';
import ScrollReveal from '@/components/ScrollReveal';
import { PortfolioPhone, StudioPhonePreview, TraditionalLinksPhone } from '@/components/BioFlowShowcase';
import { bioflowConfig } from '@/config/site';
import { buildWhatsappLink } from '@/utils/whatsapp';

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
  'Design personalizado para o seu negócio',
  'Identidade visual exclusiva e alinhada à sua marca',
  'Integração com WhatsApp e redes sociais',
  'Apresentação de serviços e produtos',
  'Experiência responsiva em celular e computador',
  'Navegação rápida e intuitiva',
  'Atualizações futuras disponíveis mediante contratação',
];

const businessTypes = [
  { icon: Scissors, label: 'Barbearias' },
  { icon: PenTool, label: 'Estúdios de tatuagem' },
  { icon: Sparkles, label: 'Profissionais de beleza' },
  { icon: Stethoscope, label: 'Clínicas e consultórios' },
  { icon: Store, label: 'Lojas e comércios' },
  { icon: Wrench, label: 'Oficinas e prestadores de serviços' },
];

const processSteps = [
  { title: 'Conhecemos seu negócio.', text: 'Entendemos sua marca, seus serviços e o que você quer apresentar.' },
  { title: 'Criamos sua experiência digital.', text: 'Organizamos conteúdo e visual em uma página feita para sua identidade.' },
  { title: 'Você visualiza e aprova.', text: 'Apresentamos a proposta para você revisar antes de ela ganhar vida.' },
  { title: 'Sua página ganha vida.', text: 'Com a aprovação, sua presença digital fica pronta para ser compartilhada.' },
];

type BioFlowPageProps = {
  onViewDemo: () => void;
};

export default function BioFlowPage({ onViewDemo }: BioFlowPageProps) {
  const heroRef = useRef<HTMLElement>(null);
  const heroLightRef = useRef<HTMLDivElement>(null);
  const whatsappLink = buildWhatsappLink(bioflowConfig.whatsappNumber, bioflowConfig.whatsappMessage);
  const floatingWhatsappLink = buildWhatsappLink(
    bioflowConfig.whatsappNumber,
    'Olá! Conheci a BioFlow e gostaria de saber mais sobre os mini sites personalizados.',
  );

  useEffect(() => {
    const hero = heroRef.current;
    const light = heroLightRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!hero || !light || reducedMotion.matches) return;
    const heroElement = hero;
    const lightElement = light;

    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) window.addEventListener('scroll', updateLight, { passive: true });
      else window.removeEventListener('scroll', updateLight);
    }, { threshold: 0 });

    function updateLight() {
      if (reducedMotion.matches || frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const offset = Math.max(-18, Math.min(18, -heroElement.getBoundingClientRect().top * 0.035));
        lightElement.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    }

    observer.observe(hero);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateLight);
      reducedMotion.removeEventListener('change', updateLight);
      if (frame) window.cancelAnimationFrame(frame);
      lightElement.style.transform = '';
    };
  }, []);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-32 pt-7 sm:px-6 sm:pt-10 lg:px-8">
      {/* Hero */}
      <ScrollReveal>
        <section ref={heroRef} className="bioflow-hero relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-navy-900/55 px-5 py-7 shadow-2xl shadow-electric-950/30 sm:rounded-[2.5rem] sm:px-9 sm:py-10 lg:px-12 lg:py-14">
          <div ref={heroLightRef} aria-hidden="true" className="bioflow-hero-light pointer-events-none absolute -right-20 top-0 -z-10 h-72 w-72 rounded-full bg-violet-500/25 blur-[100px] sm:h-96 sm:w-96" />
          <div aria-hidden="true" className="bioflow-hero-orbit pointer-events-none absolute -bottom-36 -left-24 -z-10 h-72 w-72 rounded-full border border-cyan-300/10 sm:h-96 sm:w-96" />
          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <div className="relative z-10 text-center lg:text-left">
              <div className="flex flex-col items-center gap-3 lg:items-start sm:flex-row sm:justify-center lg:justify-start">
                <img src="/bioflow-logo.png" alt="Logo original da BioFlow" className="h-14 w-14 rounded-2xl object-cover shadow-xl shadow-electric-600/25 sm:h-16 sm:w-16" />
                <div className="self-center">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-300 sm:text-xs">Marca principal · {bioflowConfig.city}</p>
                  <p className="mt-1 font-display text-sm font-semibold text-white sm:text-base">BioFlow — Sua bio, muito além de um link.</p>
                </div>
              </div>
              <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400 sm:text-xs">Uma presença digital feita para o seu negócio</p>
              <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight text-gradient sm:text-5xl md:text-6xl">
                Transforme sua bio em uma vitrine que vende.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-slate-200 sm:text-lg lg:mx-0">
                Seu Instagram desperta interesse. A BioFlow transforma esse interesse em oportunidades de negócio.
              </p>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base lg:mx-0">
                Criamos páginas personalizadas que valorizam sua marca, apresentam seus serviços e aproximam você dos seus clientes.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:mx-auto sm:max-w-xl sm:flex-row lg:mx-0">
                <ActionButton href={whatsappLink} external variant="primary" icon={<MessageCircle aria-hidden="true" className="h-5 w-5" />}>
                  Quero minha página personalizada
                </ActionButton>
                <a href="#portfolio" className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/45 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                  Explore nosso portfólio <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
              <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.13em] text-slate-500 sm:text-xs">Páginas personalizadas de Link na Bio · atendimento em todo o Brasil</p>
            </div>
            <div className="relative mx-auto w-full max-w-[17rem] lg:max-w-[18rem]">
              <div aria-hidden="true" className="bioflow-device-glow absolute inset-8 -z-10 rounded-full bg-gradient-to-br from-cyan-400/25 via-electric-500/20 to-violet-500/30 blur-3xl" />
              <StudioPhonePreview compact />
              <p className="mt-3 text-center text-[9px] uppercase tracking-[0.17em] text-slate-500">Prévia de projeto demonstrativo fictício</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal className="mt-5">
        <div className="rounded-2xl border border-violet-400/20 bg-violet-500/[0.07] px-4 py-3 text-center sm:px-5 sm:py-4">
          <p className="text-sm font-medium text-slate-200">
            O Studio Lumina é um <span className="text-cyan-300">projeto demonstrativo fictício</span> criado para apresentar, na prática, uma página personalizada.
          </p>
        </div>
      </ScrollReveal>

      {/* Faixa de cobertura */}
      <ScrollReveal className="mt-5">
        <div className="gradient-border flex flex-wrap items-center justify-center gap-2 rounded-2xl bg-white/[0.03] px-5 py-4 text-center">
          <MapPin className="h-5 w-5 text-cyan-400" />
          <span className="text-sm font-medium text-slate-300">
            Atendemos empresas em <span className="text-white">Rio Grande</span>,{' '}
            <span className="text-white">região sul</span> e de <span className="text-white">todo o Brasil</span>.
          </span>
        </div>
      </ScrollReveal>

      {/* Comparação de experiência */}
      <ScrollReveal className="mt-16 sm:mt-24">
        <section aria-labelledby="comparison-title" className="bioflow-section-panel relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-navy-800/50 to-navy-900/40 px-4 py-7 sm:rounded-[2.5rem] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[90px]" />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-300 sm:text-xs">A diferença está na experiência</p>
            <h2 id="comparison-title" className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Seu negócio merece mais do que uma lista de links.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">Compare uma lista simples com uma página pensada para apresentar a personalidade e os serviços de uma marca.</p>
          </div>
          <div className="relative mt-9 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-8 lg:gap-16">
            <article className="bioflow-comparison-card rounded-2xl border border-white/[0.07] bg-black/20 p-2.5 text-center sm:rounded-3xl sm:p-5">
              <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:mb-5 sm:text-xs">Bio tradicional</p>
              <TraditionalLinksPhone />
              <p className="mx-auto mt-3 max-w-[16rem] text-[10px] leading-relaxed text-slate-500 sm:mt-4 sm:text-xs">Links genéricos, com pouco espaço para expressar a identidade da marca.</p>
            </article>
            <article className="bioflow-comparison-card bioflow-comparison-featured rounded-2xl border border-cyan-300/20 bg-gradient-to-b from-cyan-400/[0.07] to-violet-500/[0.04] p-2.5 text-center sm:rounded-3xl sm:p-5">
              <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-cyan-200 sm:mb-5 sm:text-xs">Experiência BioFlow</p>
              <StudioPhonePreview compact />
              <p className="mx-auto mt-3 max-w-[16rem] text-[10px] leading-relaxed text-slate-300 sm:mt-4 sm:text-xs">Visual sob medida, apresentação de serviços e caminhos claros para contato.</p>
            </article>
          </div>
        </section>
      </ScrollReveal>

      {/* Portfólio demonstrativo */}
      <ScrollReveal delayMs={100} className="mt-16 sm:mt-24">
        <section id="portfolio" aria-labelledby="portfolio-title" className="bioflow-portfolio relative scroll-mt-24 overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-[#081a3b]/90 via-navy-900/85 to-violet-950/40 px-5 py-8 sm:rounded-[2.5rem] sm:px-10 sm:py-12 lg:px-14">
          <div aria-hidden="true" className="bioflow-portfolio-glow pointer-events-none absolute -right-16 top-1/4 h-72 w-72 rounded-full bg-cyan-400/15 blur-[100px]" />
          <div className="relative grid items-center gap-9 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
            <div className="max-w-xl text-center lg:text-left">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-300 sm:text-xs">Portfólio interativo</p>
              <h2 id="portfolio-title" className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">Não imagine. <span className="text-gradient">Experimente.</span></h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">Explore na prática como podemos transformar a presença digital de um negócio.</p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.12em] text-slate-400 sm:text-[10px]">
                Projeto fictício para demonstração do portfólio BioFlow
              </div>
              <div className="mt-6 flex justify-center lg:justify-start">
                <button type="button" onClick={onViewDemo} className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-electric-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-electric-700/25 transition duration-300 hover:-translate-y-0.5 hover:shadow-cyan-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900">
                  Explorar experiência <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[17rem] sm:max-w-[18rem]">
              <div aria-hidden="true" className="bioflow-device-glow absolute inset-8 -z-10 rounded-full bg-gradient-to-br from-cyan-400/30 via-electric-500/20 to-violet-500/30 blur-3xl" />
              <PortfolioPhone />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Negócios atendidos */}
      <ScrollReveal className="mt-16 sm:mt-24">
        <section aria-labelledby="business-title">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-300 sm:text-xs">Feita para diferentes rotinas</p>
            <h2 id="business-title" className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Cada negócio é único. Sua presença digital também deveria ser.</h2>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-9 sm:grid-cols-3 sm:gap-4">
            {businessTypes.map(({ icon: Icon, label }) => (
              <article key={label} className="bioflow-business-card group flex min-h-[6.5rem] items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-3.5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.05] sm:min-h-24 sm:gap-4 sm:rounded-3xl sm:p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/15 to-violet-500/20 text-cyan-300 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12">
                  <Icon aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <h3 className="text-xs font-semibold leading-snug text-slate-100 sm:text-sm">{label}</h3>
              </article>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Processo */}
      <ScrollReveal className="mt-16 sm:mt-24">
        <section aria-labelledby="process-title" className="rounded-[2rem] border border-white/[0.07] bg-white/[0.02] px-4 py-7 sm:rounded-[2.5rem] sm:px-8 sm:py-10 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-300 sm:text-xs">Simples do começo ao fim</p>
            <h2 id="process-title" className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Como funciona</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">Você conhece o seu negócio. Nós cuidamos da construção digital junto com você.</p>
          </div>
          <ol className="bioflow-process-track relative mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {processSteps.map((step, index) => (
              <li key={step.title} className="bioflow-process-step relative rounded-2xl border border-white/[0.07] bg-navy-900/65 p-4 sm:rounded-3xl sm:p-5">
                <span className="font-display text-3xl font-bold text-gradient-violet">0{index + 1}</span>
                <h3 className="mt-3 text-sm font-semibold leading-snug text-white sm:text-base">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:text-sm">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-center text-xs text-slate-500">Você não precisa entender de tecnologia — explicamos cada etapa em linguagem simples.</p>
        </section>
      </ScrollReveal>

      {/* Missão */}
      <ScrollReveal className="mt-16">
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
      </ScrollReveal>

      {/* Pilares */}
      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {pillars.map((p, i) => (
          <ScrollReveal key={p.title} delayMs={(i % 3) * 100}>
            <article className="gradient-border group h-full rounded-2xl bg-white/[0.03] p-6 transition-all duration-300 hover:bg-white/[0.06] hover:glow-cyan">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
                <p.icon className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.text}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>

      {/* Fundador */}
      <ScrollReveal delayMs={100} className="mt-16 sm:mt-20">
        <section className="gradient-border relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800/75 via-navy-900/90 to-violet-950/40 p-5 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-20 top-1/4 -z-10 h-64 w-64 rounded-full bg-violet-500/15 blur-[100px]" />
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <figure className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-violet-400/20 bg-navy-800 shadow-2xl shadow-violet-950/30 sm:rounded-3xl lg:max-w-none">
              <img
                src="/andrew-xavier-founder.png"
                alt="Andrew Xavier, fundador da BioFlow"
                className="h-[25rem] w-full object-cover object-[center_12%] sm:h-[31rem] lg:h-[34rem]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-900/45 via-transparent to-violet-950/10" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy-900/45 to-transparent" />
            </figure>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-300 sm:text-xs">
                Quem está por trás da BioFlow
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
                Prazer, sou <span className="text-gradient">Andrew Xavier.</span>
              </h2>
              <p className="mt-3 inline-flex items-center rounded-full border border-violet-400/25 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-200">
                Fundador da BioFlow
              </p>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                <p>
                  Tenho 25 anos e sou apaixonado por tecnologia, inovação e tudo que envolve transformar ideias em realidade.
                  Sou casado, pai de dois filhos e acredito que a busca constante por conhecimento e evolução nos permite construir novas oportunidades.
                </p>
                <p>
                  Tenho um perfil comunicativo: gosto de conhecer pessoas, trocar experiências e entender os desafios de cada negócio.
                </p>
                <p>
                  A BioFlow nasceu da vontade de unir tecnologia e criatividade para ajudar empresas e profissionais a construírem uma presença digital mais moderna, organizada e profissional.
                </p>
              </div>

              <blockquote className="mt-7 border-l-2 border-violet-400 pl-4 font-display text-lg font-semibold leading-relaxed text-white sm:mt-8 sm:pl-5 sm:text-xl">
                <span className="text-gradient-violet">Mais do que criar páginas, quero ajudar negócios a mostrarem seu verdadeiro potencial.</span>
              </blockquote>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* O que entregamos */}
      <ScrollReveal className="mt-16">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-gradient">O que entregamos</h2>
          <p className="mt-3 text-slate-400">Tudo o que sua página precisa para funcionar como uma vitrine profissional.</p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {deliverables.map((d) => (
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
      </ScrollReveal>

      {/* CTA final */}
      <ScrollReveal className="mt-16">
        <div className="gradient-border relative overflow-hidden rounded-3xl bg-gradient-to-br from-electric-600/20 via-navy-800/40 to-violet-600/20 p-8 text-center sm:p-12">
          <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
          <h2 className="relative font-display text-3xl font-bold text-white sm:text-4xl">
            Seu negócio já tem potencial. Está na hora de mostrar isso ao mundo.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-slate-300">
            Transforme sua presença digital em uma experiência que valoriza sua marca e aproxima você dos seus clientes.
          </p>
          <div className="relative mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ActionButton href={whatsappLink} external variant="primary" icon={<MessageCircle className="h-5 w-5" />}>
              Vamos criar minha página?
            </ActionButton>
            <ActionButton
              href={bioflowConfig.instagram}
              external
              variant="secondary"
              icon={<Instagram className="h-5 w-5" />}
            >
              {bioflowConfig.instagramHandle}
            </ActionButton>
          </div>
        </div>
      </ScrollReveal>

      {/* Contato institucional */}
      <ScrollReveal delayMs={200} className="mt-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-cyan-400" />
              <a href={`mailto:${bioflowConfig.email}`} className="transition-colors hover:text-cyan-300">
                {bioflowConfig.email}
              </a>
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-violet-400" /> {bioflowConfig.city}, {bioflowConfig.country}
            </span>
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} BioFlow · {bioflowConfig.city} · {bioflowConfig.country}
          </p>
        </div>
      </ScrollReveal>

      <div className="bioflow-whatsapp-float fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] right-2 z-[60] flex items-center gap-2.5 sm:bottom-6 sm:right-6 sm:gap-3">
        <span className="hidden rounded-full border border-cyan-300/20 bg-navy-800/90 px-3.5 py-2 text-xs font-medium text-slate-100 shadow-lg shadow-electric-900/30 backdrop-blur-xl sm:inline-flex sm:px-4 sm:py-2.5 sm:text-sm">
          Vamos conversar?
        </span>
        <a
          href={floatingWhatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar com a BioFlow pelo WhatsApp"
          title="Conversar com a BioFlow pelo WhatsApp"
          className="bioflow-whatsapp-button group flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-cyan-500 via-electric-500 to-violet-600 text-white shadow-xl shadow-electric-700/30 outline-none transition-[transform,border-color,box-shadow] duration-300 ease-out active:scale-95 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 sm:h-16 sm:w-16 motion-safe:animate-fade-in-up motion-reduce:animate-none"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 transition-transform duration-300 group-active:scale-95 sm:h-8 sm:w-8">
            <path
              fill="currentColor"
              d="M20.52 3.48A11.82 11.82 0 0 0 12.1 0C5.58 0 .27 5.3.27 11.84c0 2.08.54 4.1 1.58 5.9L.16 24l6.4-1.68a11.9 11.9 0 0 0 5.53 1.37h.01c6.53 0 11.84-5.31 11.84-11.84 0-3.17-1.23-6.15-3.42-8.37ZM12.1 21.67h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.8 1 .99-3.7-.24-.38a9.82 9.82 0 1 1 8.44 4.66Zm5.39-7.36c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.23-.65.08-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.94-2.24-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.06 1.03-1.06 2.51s1.08 2.91 1.23 3.11c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.63.73.23 1.39.2 1.91.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z"
            />
          </svg>
        </a>
      </div>
    </main>
  );
}
