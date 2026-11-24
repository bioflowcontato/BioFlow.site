// Página demonstrativa do Studio Lumina — cliente fictício criado pela BioFlow.
// Layout de "Link na Bio" otimizado para mobile, com seções de serviços, galeria e contato.

import { useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Check, Heart, Lightbulb, PencilRuler, X } from 'lucide-react';
import ActionButton from '@/components/ActionButton';
import Reveal from '@/components/Reveal';
import ScrollReveal from '@/components/ScrollReveal';
import ScrollWords from '@/components/ScrollWords';
import { GalleryImage, StudioMark } from '@/components/Artwork';
import StudioBackgroundVideo from '@/components/StudioBackgroundVideo';
import { studioConfig } from '@/config/site';
import { buildWhatsappLink } from '@/utils/whatsapp';

export default function StudioPage() {
  const whatsappLink = buildWhatsappLink(studioConfig.whatsappNumber, studioConfig.whatsappMessage);
  const quoteDialogRef = useRef<HTMLDialogElement>(null);
  const [quoteStyle, setQuoteStyle] = useState('');
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  const openQuoteDialog = (specialty = '') => {
    setQuoteStyle(specialty);
    setQuoteSubmitted(false);
    quoteDialogRef.current?.showModal();
  };

  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-5 sm:px-6 sm:pt-8 lg:px-8">
      <ScrollReveal className="mb-4 flex justify-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white/65 backdrop-blur-sm sm:text-[11px]">
          <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
          Tattoo studio · projeto demonstrativo
        </div>
      </ScrollReveal>

      <section className="studio-hero group relative isolate flex min-h-[690px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#080808] shadow-2xl shadow-black/50 sm:min-h-[760px] sm:rounded-[2.25rem] lg:min-h-[min(860px,90svh)]">
          <StudioBackgroundVideo
            src="https://www.pexels.com/download/video/29771145/"
            poster={studioConfig.heroImage}
            alt={studioConfig.heroImageAlt}
            loading="eager"
            videoClassName="object-[62%_center] grayscale-[0.4] contrast-[1.18] brightness-[0.62]"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/15 via-black/20 to-black/95" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/30 to-black/5" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_38%,rgba(255,255,255,0.13),transparent_38%)] mix-blend-screen" />

          <div className="flex w-full flex-col justify-between p-5 sm:p-10 lg:p-14">
            <div className="studio-hero-enter flex items-center gap-3">
              <StudioMark initials={studioConfig.logoInitials} className="h-11 w-11 opacity-90 sm:h-12 sm:w-12" />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55">{studioConfig.tagline}</p>
                <p className="mt-1 text-xs text-white/75">Tinta · forma · expressão</p>
              </div>
            </div>

            <div className="studio-hero-enter studio-hero-enter-delay max-w-3xl pb-4 sm:pb-6">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/60 sm:text-xs">
                Uma experiência feita para a sua história
              </p>
              <h1 className="font-serif text-[3.1rem] font-medium leading-[0.88] tracking-[-0.055em] text-white sm:text-7xl lg:text-8xl">
                STUDIO<br />
                <span className="text-white/75">LUMINA.</span>
              </h1>
              <p className="mt-5 font-serif text-xl tracking-wide text-white sm:mt-6 sm:text-2xl">
                Sua história. Sua pele. Sua arte.
              </p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">
                {studioConfig.description} Cada projeto começa com uma ideia que merece ganhar forma.
              </p>
              <div className="mt-7 flex max-w-sm flex-col gap-3 sm:mt-8 sm:flex-row">
                <button
                  type="button"
                  onClick={() => openQuoteDialog()}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:text-sm"
                >
                  Quero minha próxima tattoo
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <a
                  href="#estilos"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-black/25 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:border-white/70 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:text-sm"
                >
                  Explorar estilos
                  <ArrowDown className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-5 text-[9px] uppercase tracking-[0.18em] text-white/55 sm:text-[10px]">
                {studioConfig.specialties.map((specialty) => specialty.title).join(' · ')}
              </p>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 right-0 hidden p-8 text-right text-[10px] uppercase tracking-[0.3em] text-white/40 sm:block lg:p-12">
            Tattoo<br />
            Portfolio Study
          </div>
      </section>

      <section className="relative mt-20 overflow-hidden border-y border-white/[0.07] bg-[#050505] py-20 sm:mt-28 sm:py-28 lg:py-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.045),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-2 sm:px-4">
          <Reveal>
            <div className="mb-12 sm:mb-16 lg:mb-20">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/40 sm:text-xs">
                Tinta · forma · expressão
              </p>
              <h2 className="mt-4 max-w-4xl font-serif text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-white sm:text-7xl lg:text-8xl">
                A arte por trás <span className="text-white/45">da tinta.</span>
              </h2>
            </div>
          </Reveal>

          <div className="space-y-11 sm:space-y-14 lg:ml-[16.666%] lg:space-y-16">
            <ScrollWords
              text="A pele é uma tela. A tinta, uma forma de expressão."
              className="max-w-4xl font-serif text-3xl font-medium leading-[1.16] tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl"
            />
            <ScrollWords
              text="No Studio Lumina, cada traço nasce de uma ideia, cada sombra constrói profundidade e cada composição carrega uma identidade própria."
              className="max-w-3xl border-l border-white/20 pl-4 text-lg leading-relaxed text-white/65 sm:pl-6 sm:text-2xl sm:leading-relaxed"
            />
            <ScrollWords
              text="Do contraste intenso do Blackwork à delicadeza do Fine Line, acreditamos que uma tatuagem precisa ir além da estética. Ela precisa transmitir personalidade."
              className="max-w-3xl border-l border-white/20 pl-4 text-lg leading-relaxed text-white/65 sm:pl-6 sm:text-2xl sm:leading-relaxed"
            />
            <ScrollWords
              text="Nosso conceito é unir técnica, criatividade e atenção aos detalhes para transformar referências em arte."
              className="max-w-3xl border-l border-white/20 pl-4 text-lg leading-relaxed text-white/65 sm:pl-6 sm:text-2xl sm:leading-relaxed"
            />
          </div>
        </div>
      </section>

      <Reveal delay={100} className="mt-16 sm:mt-24">
        <div id="estilos" className="mb-7 scroll-mt-8 flex items-end justify-between gap-4 sm:mb-9">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45 sm:text-xs">Estilos em foco</p>
            <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
              Quatro linguagens.<br className="sm:hidden" /> Uma tela autoral.
            </h2>
          </div>
          <span className="hidden pb-1 text-xs uppercase tracking-[0.2em] text-white/35 sm:block">01 — 04</span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {studioConfig.galleryPhotos.map((photo, index) => (
            <Reveal key={photo.id} delay={((index % 3) * 100) as 0 | 100 | 200}>
              <figure className="group relative isolate aspect-[0.78] overflow-hidden rounded-2xl border border-white/10 bg-[#111] sm:rounded-3xl">
                <GalleryImage
                  id={photo.id}
                  imageUrl={photo.src}
                  imageTitle={`${photo.title} — imagem ilustrativa`}
                  imagePosition={photo.position}
                  className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 -z-10"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0.06) 30%, rgba(0,0,0,0.82) 100%)',
                    backdropFilter: photo.id === 'old-school' ? 'saturate(0.82)' : 'grayscale(0.82)',
                  }}
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5">
                  <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-white/55 sm:text-[10px]">
                    0{index + 1} / 04
                  </span>
                  <h3 className="mt-1.5 font-serif text-xl font-medium text-white sm:mt-2 sm:text-2xl">{photo.title}</h3>
                  <p className="mt-1 text-[11px] leading-relaxed text-white/65 sm:text-xs">{photo.description}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <ScrollReveal className="mt-16 sm:mt-24">
        <section className="relative isolate overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#080808] sm:rounded-[2.25rem]">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_20%,rgba(255,255,255,0.11),transparent_42%),linear-gradient(110deg,#050505_20%,rgba(5,5,5,0.72)_65%,rgba(5,5,5,0.25))]" />
          <div className="grid min-h-[420px] items-end sm:min-h-[500px] lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-2xl p-6 sm:p-10 lg:p-14">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50 sm:text-xs">A vontade de marcar o que importa</p>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                Não é apenas tinta. <span className="text-white/55">É uma parte de quem você é.</span>
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/65 sm:text-base">
                Uma lembrança, uma ideia, um símbolo. Cada escolha pode carregar um significado que acompanha você.
              </p>
              <p className="mt-3 max-w-lg text-xs leading-relaxed text-white/40">
                Imagem ilustrativa: esta página apresenta um conceito fictício e não representa trabalhos de um estúdio real.
              </p>
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full lg:static lg:h-full">
              <StudioBackgroundVideo
                src="https://www.pexels.com/download/video/34324893/"
                poster="https://images.unsplash.com/photo-1667994181140-18acea52c614?auto=format&fit=crop&fm=jpg&q=80&w=1200"
                alt="Fotografia ilustrativa em preto e branco de uma sessão de tatuagem"
                videoClassName="grayscale contrast-125 brightness-75 [mask-image:linear-gradient(to_top,black_20%,transparent_100%)] lg:[mask-image:linear-gradient(to_left,black_20%,transparent_100%)]"
              />
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal className="mt-16 sm:mt-24">
        <section aria-labelledby="atendimento-title" className="relative">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45 sm:text-xs">Da ideia à pele</p>
            <h2 id="atendimento-title" className="mt-2 font-serif text-3xl font-medium text-white sm:text-5xl">Uma jornada em três etapas.</h2>
          </div>
          <ol className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            {[
              { title: 'Compartilhe sua ideia.', detail: 'Comece pelas referências, símbolos ou histórias que inspiram você.', Icon: Lightbulb },
              { title: 'Transforme sua inspiração em arte.', detail: 'A composição ganha forma a partir do conceito que você imaginou.', Icon: PencilRuler },
              { title: 'Eternize sua história na pele.', detail: 'Uma expressão pessoal, pensada para acompanhar você.', Icon: Heart },
            ].map(({ title, detail, Icon }, index) => (
              <li key={title} className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.045] sm:rounded-3xl sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl text-white/30">0{index + 1}</span>
                  <Icon aria-hidden="true" className="h-5 w-5 text-white/60 transition-colors group-hover:text-white" />
                </div>
                <h3 className="mt-8 font-serif text-xl font-medium leading-snug text-white sm:text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{detail}</p>
              </li>
            ))}
          </ol>
        </section>
      </ScrollReveal>

      <Reveal delay={100} className="mt-16 sm:mt-24">
        <section className="rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-5 sm:rounded-[2.25rem] sm:p-8 lg:p-10">
          <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45 sm:text-xs">
                Amostra visual
              </p>
              <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl">
                Valores demonstrativos
              </h2>
            </div>
            <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/65 sm:text-[10px]">
              Valores fictícios · não são preços reais
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {studioConfig.priceExamples.map((item, index) => (
              // Os valores e descrições vêm da configuração demonstrativa do Studio Lumina.
              <article
                key={item.specialty}
                tabIndex={0}
                className="studio-price-card group rounded-2xl border border-white/[0.09] bg-black/35 p-4 outline-none transition-[transform,border-color,background-color,box-shadow] duration-300 ease-out active:-translate-y-0.5 active:border-violet-400/60 active:bg-violet-950/20 active:shadow-[0_0_22px_rgba(139,92,246,0.12)] focus-visible:-translate-y-0.5 focus-visible:border-violet-400/60 focus-visible:bg-violet-950/20 focus-visible:shadow-[0_0_22px_rgba(139,92,246,0.12)] sm:rounded-3xl sm:p-5 lg:p-6"
              >
                <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/40 sm:text-[10px]">
                  Exemplo 0{index + 1}
                </p>
                <h3 className="mt-2 font-serif text-xl font-medium text-white sm:text-2xl">{item.specialty}</h3>
                <p className="mt-1 min-h-10 text-xs leading-relaxed text-white/50 sm:text-sm">
                  {studioConfig.specialties.find((specialty) => specialty.title === item.specialty)?.description}
                </p>
                <div className="mt-4 border-t border-white/10 pt-3 sm:mt-5 sm:pt-4">
                  <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/45 sm:text-[10px]">
                    Preço ilustrativo
                  </p>
                  <p className="studio-price-value mt-1 font-sans text-3xl font-semibold leading-none tracking-[-0.04em] text-white transition-[color,text-shadow] duration-300 group-active:text-violet-200 group-active:[text-shadow:0_0_18px_rgba(167,139,250,0.48)] group-focus-visible:text-violet-200 group-focus-visible:[text-shadow:0_0_18px_rgba(167,139,250,0.48)] sm:text-4xl lg:text-[2.75rem]">
                    {item.examplePrice}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openQuoteDialog(item.specialty)}
                  className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/20 px-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/80 transition hover:border-white/60 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:text-xs"
                >
                  Simular orçamento <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </button>
              </article>
            ))}
          </div>

          <p className="mt-5 text-xs leading-relaxed text-white/40">
            Os valores acima foram criados apenas para demonstrar a apresentação visual desta página fictícia.
            Não correspondem a preços de um estúdio real.
          </p>
        </section>
      </Reveal>

      <Reveal delay={200} className="mt-16 sm:mt-24">
        <section className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] px-6 py-8 text-center sm:rounded-[2.25rem] sm:px-12 sm:py-12">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-white/[0.07] blur-[90px]" />
          <p className="relative text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45 sm:text-xs">Toda história começa com uma ideia</p>
          <h2 className="relative mx-auto mt-3 max-w-3xl font-serif text-4xl font-medium leading-tight text-white sm:text-6xl lg:text-7xl">
            A próxima obra de arte pode estar na sua pele.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
            Imagine sua ideia ganhando forma. O primeiro passo é contar o que ela significa para você.
          </p>
          <div className="relative mx-auto mt-7 max-w-sm">
            <button type="button" onClick={() => openQuoteDialog()} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-black transition hover:-translate-y-0.5 hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:text-sm">
              Vamos criar minha tattoo? <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
          <p className="relative mt-5 text-[9px] uppercase tracking-[0.17em] text-white/40 sm:text-[10px]">Studio Lumina Tattoo · projeto demonstrativo fictício</p>
        </section>
      </Reveal>

      <Reveal delay={100} className="mt-6">
        <section className="rounded-2xl border border-white/[0.07] bg-black/20 px-5 py-5 text-center sm:flex sm:items-center sm:justify-between sm:gap-6 sm:px-7 sm:text-left">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/40">Uma demonstração BioFlow</p>
            <p className="mt-1 text-xs leading-relaxed text-white/55">Uma experiência digital conceitual para um estúdio de tatuagem.</p>
          </div>
          <div className="relative mx-auto mt-4 w-full max-w-xs sm:mx-0 sm:mt-0 sm:w-auto sm:shrink-0">
            <ActionButton
              href={whatsappLink}
              external
              variant="studio-secondary"
              icon={<ArrowUpRight className="h-5 w-5" />}
            >
              Quero um site como este
            </ActionButton>
          </div>
        </section>
      </Reveal>

      <footer className="mt-9 flex flex-col items-center gap-2 text-center text-[10px] uppercase tracking-[0.18em] text-white/35 sm:mt-12 sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} {studioConfig.brandName}</span>
        <span className="inline-flex items-center gap-1.5">
          Conceito visual desenvolvido por BioFlow
          <ArrowUpRight className="h-3 w-3" />
        </span>
      </footer>

      <dialog ref={quoteDialogRef} aria-labelledby="quote-title" onClick={(event) => { if (event.target === event.currentTarget) quoteDialogRef.current?.close(); }} className="studio-quote-dialog m-auto w-[calc(100%-2rem)] max-w-lg rounded-3xl border border-white/15 bg-[#0b0b0b] p-0 text-white shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-sm">
        <div className="relative p-6 sm:p-8">
          <button type="button" onClick={() => quoteDialogRef.current?.close()} aria-label="Fechar simulação" className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/65 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
            <X aria-hidden="true" className="h-4 w-4" />
          </button>
          {quoteSubmitted ? (
            <div role="status" aria-live="polite" className="py-6 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10"><Check aria-hidden="true" className="h-5 w-5" /></span>
              <h2 id="quote-title" className="mt-5 font-serif text-3xl">Ideia anotada.</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/60">Esta é apenas uma simulação demonstrativa. Nenhuma informação foi enviada ou armazenada.</p>
              <button type="button" onClick={() => quoteDialogRef.current?.close()} className="mt-6 min-h-11 rounded-full border border-white/25 px-5 text-xs font-semibold uppercase tracking-wider hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Fechar</button>
            </div>
          ) : (
            <form onSubmit={(event) => { event.preventDefault(); setQuoteSubmitted(true); }}>
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/45">Simulação de atendimento</p>
              <h2 id="quote-title" className="mt-2 pr-10 font-serif text-3xl font-medium">Conte sua ideia.</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/55">Explore a experiência de pedir um orçamento. Este formulário não envia nem salva dados.</p>
              <label htmlFor="quote-style" className="mt-6 block text-xs font-medium text-white/75">Estilo de interesse</label>
              <select id="quote-style" value={quoteStyle} onChange={(event) => setQuoteStyle(event.target.value)} className="mt-2 min-h-12 w-full rounded-xl border border-white/15 bg-[#151515] px-3 text-sm text-white focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20">
                <option value="">Escolha um estilo</option>
                {studioConfig.specialties.map(({ title }) => <option key={title} value={title}>{title}</option>)}
              </select>
              <label htmlFor="quote-idea" className="mt-4 block text-xs font-medium text-white/75">Sua ideia (opcional)</label>
              <textarea id="quote-idea" rows={3} maxLength={280} placeholder="Descreva brevemente o conceito que imaginou..." className="mt-2 w-full resize-y rounded-xl border border-white/15 bg-[#151515] px-3 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" />
              <p className="mt-2 text-[10px] leading-relaxed text-white/40">Projeto fictício: nenhum pedido real será recebido.</p>
              <button type="submit" className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-xs font-semibold uppercase tracking-wider text-black transition hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">Ver confirmação demonstrativa <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></button>
            </form>
          )}
        </div>
      </dialog>
    </main>
  );
}
