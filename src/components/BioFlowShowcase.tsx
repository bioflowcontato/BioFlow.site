import { MessageCircle, Sparkles } from 'lucide-react';
import { GalleryImage, StudioMark } from '@/components/Artwork';
import { studioConfig } from '@/config/site';

function optimizedPreviewImage(source: string, width: number, height: number) {
  try {
    const imageUrl = new URL(source);
    if (imageUrl.hostname.endsWith('unsplash.com')) {
      imageUrl.searchParams.set('auto', 'format');
      imageUrl.searchParams.set('fit', 'crop');
      imageUrl.searchParams.set('w', String(width));
      imageUrl.searchParams.set('q', '75');
    } else if (imageUrl.hostname.endsWith('pexels.com')) {
      imageUrl.searchParams.set('auto', 'compress');
      imageUrl.searchParams.set('cs', 'tinysrgb');
      imageUrl.searchParams.set('w', String(width));
      imageUrl.searchParams.set('h', String(height));
      imageUrl.searchParams.set('dpr', '1');
    }
    return imageUrl.toString();
  } catch {
    return source;
  }
}

/** Visual-only device preview for the fictitious Studio Lumina demo. */
export function StudioPhonePreview({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`bioflow-phone relative mx-auto w-full ${compact ? 'max-w-[11rem]' : 'max-w-[15rem]'}`}>
      <div className="bioflow-phone-screen relative isolate overflow-hidden rounded-[1.55rem] bg-[#080808] text-left text-white">
        <div className="relative h-[7.5rem] overflow-hidden sm:h-36">
          <img
            src={optimizedPreviewImage(studioConfig.heroImage, 560, 520)}
            alt="Imagem ilustrativa da página demonstrativa Studio Lumina"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#080808]" />
          <div className="absolute left-3 top-3 flex items-center gap-2">
            <StudioMark initials={studioConfig.logoInitials} className="h-6 w-6 rounded-lg" />
            <span className="text-[7px] uppercase tracking-[0.16em] text-white/75">Projeto demonstrativo</span>
          </div>
          <div className="absolute inset-x-3 bottom-3">
            <p className="text-[7px] uppercase tracking-[0.2em] text-white/55">Tattoo studio</p>
            <p className="font-serif text-base leading-none sm:text-lg">Studio Lumina</p>
          </div>
        </div>
        <div className="px-3 pb-3 pt-1.5">
          <p className="font-serif text-[10px] text-white/80">Sua história. Sua pele. Sua arte.</p>
          <div className="mt-2 grid grid-cols-2 gap-1">
            {studioConfig.specialties.map((style) => (
              <span key={style.title} className="rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-1 text-center text-[6px] uppercase tracking-[0.1em] text-white/65">
                {style.title}
              </span>
            ))}
          </div>
          <div className="mt-2 grid grid-cols-3 gap-1">
            {studioConfig.galleryPhotos.slice(0, 3).map((photo) => (
              <div key={photo.id} className="relative h-10 overflow-hidden rounded-md bg-white/5">
                <GalleryImage
                  id={photo.id}
                  imageUrl={optimizedPreviewImage(photo.src, 280, 280)}
                  imageTitle={`${photo.title} — imagem ilustrativa`}
                  imagePosition={photo.position}
                  className="h-full w-full object-cover opacity-75"
                />
              </div>
            ))}
          </div>
          <div className="mt-2 flex items-center justify-center gap-1 rounded-lg bg-white py-1.5 text-[7px] font-bold uppercase tracking-[0.08em] text-black">
            <MessageCircle aria-hidden="true" className="h-2.5 w-2.5" />
            Experiência personalizada
          </div>
        </div>
      </div>
    </div>
  );
}

export function TraditionalLinksPhone() {
  return (
    <div className="bioflow-phone relative mx-auto w-full max-w-[11rem]">
      <div className="bioflow-phone-screen min-h-[20rem] rounded-[1.55rem] bg-[#f3f4f6] px-3 pb-4 pt-12 text-center text-slate-900">
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-slate-300 text-sm font-semibold text-slate-500">M</div>
        <p className="mt-2 text-[10px] font-semibold">Meu negócio</p>
        <p className="mt-1 text-[7px] text-slate-500">Todos os meus links em um lugar</p>
        <div className="mt-4 space-y-2">
          {['Meu principal link', 'Conheça meus serviços', 'Fale comigo', 'Outras redes'].map((label) => (
            <div key={label} className="rounded-full border border-slate-300 bg-white px-2 py-2 text-[7px] font-medium text-slate-600 shadow-sm">
              {label}
            </div>
          ))}
        </div>
        <p className="mt-4 text-[6px] uppercase tracking-[0.16em] text-slate-400">Lista de links convencional</p>
      </div>
    </div>
  );
}

export function PortfolioPhone() {
  return (
    <div className="bioflow-float relative mx-auto w-full max-w-[15rem]">
      <div className="bioflow-phone relative">
        <div className="bioflow-phone-screen relative isolate overflow-hidden rounded-[1.55rem] bg-[#080808] text-white">
          <div className="relative h-[21rem] overflow-hidden sm:h-[25rem]">
            <img
              src={optimizedPreviewImage(studioConfig.heroImage, 600, 900)}
              alt="Prévia ilustrativa da experiência móvel do Studio Lumina"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-[#080808]" />
            <div className="absolute inset-x-4 top-5 flex items-center gap-2">
              <StudioMark initials={studioConfig.logoInitials} className="h-8 w-8" />
              <div>
                <p className="text-[7px] uppercase tracking-[0.18em] text-white/55">Tattoo studio</p>
                <p className="text-[10px] font-medium">Studio Lumina</p>
              </div>
            </div>
            <div className="absolute inset-x-4 bottom-4">
              <p className="text-[7px] font-semibold uppercase tracking-[0.22em] text-white/60">Projeto demonstrativo fictício</p>
              <h3 className="mt-2 font-serif text-2xl leading-[0.95]">Sua história.<br />Sua pele.<br />Sua arte.</h3>
              <p className="mt-2 text-[8px] leading-relaxed text-white/70">Blackwork · Realismo · Fine Line · Old School</p>
              <div className="mt-3 grid grid-cols-3 gap-1.5">
                {studioConfig.galleryPhotos.slice(0, 3).map((photo) => (
                  <div key={photo.id} className="h-12 overflow-hidden rounded-md border border-white/10 bg-white/5">
                    <GalleryImage id={photo.id} imageUrl={optimizedPreviewImage(photo.src, 320, 260)} imageTitle={`${photo.title} — imagem ilustrativa`} imagePosition={photo.position} className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
              <div aria-hidden="true" className="mt-3 flex min-h-9 items-center justify-center gap-1.5 rounded-full bg-white text-[7px] font-bold uppercase tracking-[0.08em] text-black">
                <Sparkles className="h-3 w-3" /> Uma página feita para a marca
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
