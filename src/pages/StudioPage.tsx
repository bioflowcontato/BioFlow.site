// Página demonstrativa do Studio Lumina — cliente fictício criado pela BioFlow.
// Layout de "Link na Bio" otimizado para mobile, com seções de serviços, galeria e contato.

import { Camera, Smartphone, Users, Image as ImageIcon, MessageCircle, Instagram, MapPin, Clock, Check } from 'lucide-react';
import ActionButton, { buildWhatsappLink } from '@/components/ActionButton';
import Reveal from '@/components/Reveal';
import { GalleryImage, StudioMark } from '@/components/Artwork';
import { studioConfig } from '@/config/site';

const serviceIcons: Record<string, typeof Camera> = {
  camera: Camera,
  smartphone: Smartphone,
  users: Users,
  image: ImageIcon,
};

export default function StudioPage() {
  const whatsappLink = buildWhatsappLink(studioConfig.whatsappNumber, studioConfig.whatsappMessage);

  return (
    <main className="mx-auto w-full max-w-md px-5 pb-24 pt-8 sm:max-w-lg">
      <Reveal delay={0}>
        <div className="mb-8 rounded-2xl border border-[#b99b68]/45 bg-[#fffdf8]/65 px-4 py-3 text-center shadow-sm shadow-[#8b7352]/10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8b6b3d]">Projeto demonstrativo fictício</p>
          <p className="mt-1 text-xs leading-relaxed text-[#675c4d]">
            Studio Lumina é um exemplo de página Link na Bio desenvolvido pela BioFlow.
          </p>
        </div>
      </Reveal>

      {/* Logo + Nome */}
      <div className="flex flex-col items-center text-center">
        <StudioMark initials={studioConfig.logoInitials} className="h-16 w-16 animate-lumina-reveal opacity-0" />
        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-[#201c17] sm:text-4xl">
          {studioConfig.brandName}
        </h1>
        <p className="mt-1 text-sm font-medium uppercase tracking-[0.2em] text-[#8b6b3d]">
          {studioConfig.tagline}
        </p>
      </div>

      {/* Fotografia principal */}
      <Reveal delay={100} className="mt-8">
        <figure className="group overflow-hidden rounded-3xl border border-[#b99b68]/45 bg-[#201c17] shadow-xl shadow-[#8b7352]/15">
          <img
            src={studioConfig.heroImage}
            alt="Noivos caminhando juntos em um cenário natural durante o casamento"
            className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:aspect-[16/12]"
            loading="eager"
          />
          <figcaption className="border-t border-[#b99b68]/25 bg-[#201c17] px-5 py-3 text-center text-xs tracking-[0.12em] text-[#d8cdbb]">
            Histórias reais, imagens para sempre
          </figcaption>
        </figure>
      </Reveal>

      {/* Descrição */}
      <Reveal delay={200} className="mt-6">
        <p className="text-center text-[15px] leading-relaxed text-[#675c4d]">
          {studioConfig.description}
        </p>
      </Reveal>

      {/* Botões principais */}
      <Reveal delay={300} className="mt-8 space-y-3">
        <ActionButton href={whatsappLink} external variant="studio-primary" icon={<MessageCircle className="h-5 w-5" />}>
          Fale pelo WhatsApp
        </ActionButton>
        <ActionButton
          href={studioConfig.instagram}
          external
          variant="studio-secondary"
          icon={<Instagram className="h-5 w-5" />}
        >
          {studioConfig.instagramHandle}
        </ActionButton>
      </Reveal>

      {/* Separador */}
      <div className="my-10 flex items-center gap-4">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b99b68]/45 to-transparent" />
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8b6b3d]">Serviços</span>
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b99b68]/45 to-transparent" />
      </div>

      {/* Lista de serviços */}
      <div className="space-y-4">
        {studioConfig.services.map((service, i) => {
          const Icon = serviceIcons[service.icon] ?? Camera;
          return (
            <Reveal key={service.title} delay={((i % 3) * 100) as 0 | 100 | 200}>
              <article className="group rounded-2xl border border-[#b99b68]/30 bg-[#fffdf8]/70 p-5 shadow-sm shadow-[#8b7352]/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#a68551] hover:bg-[#fffdf8]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e8dcc7] ring-1 ring-[#b99b68]/35 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-[#8b6b3d]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-lg font-semibold text-[#201c17]">{service.title}</h3>
                      <span className="shrink-0 rounded-full bg-[#e8dcc7] px-3 py-1 text-sm font-bold text-[#76582e] ring-1 ring-[#b99b68]/45">
                        {service.price}
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-[#756a5b]">{service.description}</p>
                    <ul className="mt-3 space-y-1.5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-[#53493c]">
                          <Check className="h-4 w-4 shrink-0 text-[#a68551]" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* Separador */}
      <div className="my-10 flex items-center gap-4">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b99b68]/45 to-transparent" />
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8b6b3d]">Galeria</span>
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b99b68]/45 to-transparent" />
      </div>

      {/* Galeria */}
      <Reveal delay={0}>
        <div className="grid grid-cols-3 gap-3">
          {studioConfig.galleryPhotos.map((photo, i) => (
            <figure
              key={photo.id}
              className="group aspect-square overflow-hidden rounded-2xl border border-[#b99b68]/35 bg-[#201c17] opacity-0 animate-fade-in-up transition-all duration-300 hover:scale-[1.04] hover:shadow-lg hover:shadow-[#8b7352]/20"
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: 'forwards' }}
            >
              <GalleryImage
                id={photo.id}
                imageUrl={photo.src}
                imageTitle={photo.title}
                imagePosition={photo.position}
                className="h-full w-full transition-transform duration-700 group-hover:scale-110"
              />
            </figure>
          ))}
        </div>
      </Reveal>

      {/* Separador */}
      <div className="my-10 flex items-center gap-4">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b99b68]/45 to-transparent" />
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8b6b3d]">Visite-nos</span>
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b99b68]/45 to-transparent" />
      </div>

      {/* Endereço e horário */}
      <Reveal delay={0}>
        <div className="rounded-2xl border border-[#b99b68]/30 bg-[#fffdf8]/70 p-5 shadow-sm shadow-[#8b7352]/10">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8dcc7] ring-1 ring-[#b99b68]/35">
              <MapPin className="h-5 w-5 text-[#8b6b3d]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#201c17]">Endereço</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#756a5b]">{studioConfig.address}</p>
            </div>
          </div>

          <div className="my-5 h-px bg-[#b99b68]/25" />

          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8dcc7] ring-1 ring-[#b99b68]/35">
              <Clock className="h-5 w-5 text-[#8b6b3d]" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#201c17]">Horário de atendimento</h3>
              <ul className="mt-2 space-y-1.5">
                {studioConfig.hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between text-sm">
                    <span className="text-[#756a5b]">{h.day}</span>
                    <span className="font-medium text-[#3b3429]">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>

      {/* CTA final */}
      <Reveal delay={200} className="mt-8">
        <ActionButton href={whatsappLink} external variant="studio-primary" icon={<MessageCircle className="h-5 w-5" />}>
          Agendar pelo WhatsApp
        </ActionButton>
      </Reveal>

      {/* Rodapé do cliente */}
      <p className="mt-10 text-center text-xs text-[#8b806f]">
        © {new Date().getFullYear()} {studioConfig.brandName}. Todos os direitos reservados.
      </p>
    </main>
  );
}
