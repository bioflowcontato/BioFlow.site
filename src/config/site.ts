// Configurações da página Studio Lumina — demonstração de cliente fictício.
// Todos os links e dados abaixo são editáveis para personalização futura.

export const studioConfig = {
  // Nome e identidade
  brandName: 'Studio Lumina',
  tagline: 'Fotografia & Conteúdo Visual',
  logoInitials: 'SL',

  // Descrição
  description:
    'Capturamos a essência da sua marca com fotografia profissional e direção de arte contemporânea. Sessõeseditoriais, conteúdo para redes sociais e imagens que comunicam.',

  // Contato — substituir pelo número real do cliente (formato: 55 + DDD + número)
  whatsappNumber: '5553999999999',
  whatsappMessage: 'Olá! Vim pelo Instagram e gostaria de mais informações sobre as sessões do Studio Lumina.',

  // Redes sociais
  instagram: 'https://instagram.com',
  instagramHandle: '@studiolumina',

  // Endereço e horário
  address: 'Rua Marechal Deodoro, 458 — Centro, Rio Grande/RS',
  hours: [
    { day: 'Segunda a Sexta', time: '09h às 19h' },
    { day: 'Sábado', time: '09h às 13h' },
    { day: 'Domingo', time: 'Fechado' },
  ],

  // Serviços com preços fictícios
  services: [
    {
      icon: 'camera',
      title: 'Sessão Editorial',
      description: 'Ensaio completo em estúdio com direção de arte e tratamento de imagem.',
      price: 'R$ 450',
      features: ['2 horas de ensaio', '20 fotos tratadas', 'Mudança de até 3 looks'],
    },
    {
      icon: 'smartphone',
      title: 'Conteúdo para Redes',
      description: 'Pacote mensal de fotos e reels para alimentar suas redes sociais.',
      price: 'R$ 890',
      features: ['12 fotos + 4 reels', 'Direção criativa', 'Edição inclusa'],
    },
    {
      icon: 'users',
      title: 'Ensaio Corporativo',
      description: 'Imagens profissionais para equipe, produtos e identidade da marca.',
      price: 'R$ 1.200',
      features: ['Até 5 colaboradores', 'Uso comercial liberado', 'Entrega em 7 dias'],
    },
    {
      icon: 'image',
      title: 'Tratamento & Retoque',
      description: 'Pós-produção avançada de imagens existentes para um padrão editorial.',
      price: 'R$ 60 / foto',
      features: ['Retoque high-end', 'Correção de cor', 'Entrega digital'],
    },
  ],

  // Galeria — IDs das imagens geradas localmente
  heroImage:
    'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=85&w=1800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  galleryPhotos: [
    {
      id: 'ceremony-kiss',
      title: 'Cerimônia: o primeiro beijo',
      src: 'https://images.unsplash.com/photo-1779475501433-69a3a0b310f8?q=85&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      position: 'center',
    },
    {
      id: 'outdoor-portrait',
      title: 'Ensaio dos noivos ao ar livre',
      src: 'https://plus.unsplash.com/premium_photo-1661348111996-5c36acf85dc6?q=85&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      position: 'center',
    },
    {
      id: 'rings-detail',
      title: 'Troca de alianças',
      src: 'https://images.unsplash.com/photo-1693735455191-98b808a2c4c7?q=85&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      position: 'center',
    },
    {
      id: 'first-dance',
      title: 'Primeira dança',
      src: 'https://images.unsplash.com/flagged/photo-1620830102229-9db5c00d4afc?q=85&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      position: 'center',
    },
    {
      id: 'bride-portrait',
      title: 'Noiva em luz natural',
      src: 'https://plus.unsplash.com/premium_photo-1711132425055-1c289c69b950?q=85&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      position: 'center',
    },
    {
      id: 'decor-details',
      title: 'Buquê e decoração',
      src: 'https://images.unsplash.com/photo-1706741922164-aac132e6dff8?q=85&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      position: 'center',
    },
  ],
};

export const bioflowConfig = {
  brandName: 'BioFlow',
  city: 'Rio Grande, Rio Grande do Sul',
  country: 'Brasil',
  email: 'bioflowcontato@gmail.com',
  whatsappNumber: '5553999999999',
  whatsappMessage: 'Olá! Quero criar uma página de Link na Bio profissional para o meu negócio com a BioFlow.',
  instagram: 'https://instagram.com',
};
