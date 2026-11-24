// Configurações da página Studio Lumina — demonstração de cliente fictício.
// Todos os links e dados abaixo são editáveis para personalização futura.

export const studioConfig = {
  // Nome e identidade
  brandName: 'Studio Lumina',
  tagline: 'Tattoo studio · projeto conceitual',
  logoInitials: 'SL',

  // Descrição
  description: 'Blackwork, Realismo, Fine Line e Old School.',

  // Contato temporário da BioFlow para apresentar este modelo de site
  whatsappNumber: '5553981565080',
  whatsappMessage:
    'Olá! Vi o projeto demonstrativo do Studio Lumina e gostaria de saber mais sobre a criação de um site para meu negócio.',

  specialties: [
    {
      title: 'Blackwork',
      description: 'Composições em tinta preta, com contraste marcante.',
    },
    {
      title: 'Realismo',
      description: 'Luz, sombra e detalhes em composições realistas.',
    },
    {
      title: 'Fine Line',
      description: 'Traços delicados e linhas de precisão.',
    },
    {
      title: 'Old School',
      description: 'Contornos definidos e referências tradicionais.',
    },
  ],

  // Fotografias ilustrativas externas para a demonstração
  heroImage:
    'https://images.unsplash.com/photo-1761276297686-f507ca9fe8b6?auto=format&fit=crop&w=2000&q=88',
  heroImageAlt: 'Tatuador trabalhando em uma tatuagem no braço de um cliente',
  galleryPhotos: [
    {
      id: 'blackwork',
      title: 'Blackwork',
      description: 'Contraste profundo e tinta preta.',
      src: 'https://images.unsplash.com/photo-1640202430303-a71359ade259?auto=format&fit=crop&w=1100&q=85',
      position: 'center 40%',
    },
    {
      id: 'realismo',
      title: 'Realismo',
      description: 'Luz e detalhe em preto e cinza.',
      src: 'https://images.unsplash.com/photo-1645384816403-bf9913531c0d?auto=format&fit=crop&w=1100&q=85',
      position: 'center 35%',
    },
    {
      id: 'fine-line',
      title: 'Fine Line',
      description: 'Linhas finas e desenho delicado.',
      src: 'https://images.unsplash.com/photo-1651692883249-ed36b3523419?auto=format&fit=crop&w=1100&q=85',
      position: 'center 40%',
    },
    {
      id: 'old-school',
      title: 'Old School',
      description: 'Referências tradicionais em tinta.',
      src: 'https://images.pexels.com/photos/8182253/pexels-photo-8182253.jpeg?auto=compress&dpr=1&h=750&w=1260',
      position: 'center 40%',
    },
  ],
  priceExamples: [
    { specialty: 'Blackwork', examplePrice: 'R$ 350' },
    { specialty: 'Realismo', examplePrice: 'R$ 600' },
    { specialty: 'Fine Line', examplePrice: 'R$ 250' },
    { specialty: 'Old School', examplePrice: 'R$ 300' },
  ],
};

export const bioflowConfig = {
  brandName: 'BioFlow',
  city: 'Rio Grande, Rio Grande do Sul',
  country: 'Brasil',
  email: 'bioflowcontato@gmail.com',
  whatsappNumber: '5553981565080',
  whatsappMessage: 'Olá! Conheci a BioFlow e gostaria de saber mais sobre os serviços de criação de mini sites.',
  instagram: 'https://www.instagram.com/bioflowrg/',
  instagramHandle: '@bioflowrg',
};
