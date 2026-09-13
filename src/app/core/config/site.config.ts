export const SITE = {
  name: 'Renato Tattoo',
  tagline: 'Realismo em preto e cinza',
  url: 'https://renatotattoo.com.br',
  location: {
    city: 'Salgueiro',
    state: 'PE',
    street: 'R. Poe. Levino Neto, 1264',
    district: 'Riachinho',
    zip: '56000-000',
  },
  hours: 'Terça a sábado, com hora marcada',
  whatsapp: {
    phone: '5587988269624',
    display: '(87) 98826-9624',
    defaultMessage: 'Oi, Renato! Vim pelo site e quero fazer uma tattoo.',
  },
  instagram: {
    handle: '@renato_tattoo',
    url: 'https://www.instagram.com/renato_tattoo/',
    followers: '+8 mil',
  },
  portrait: 'images/renato.jpg',
  ogImage: 'images/work-03.jpg',
} as const;

export interface NavItem {
  label: string;
  fragment: string;
}

export const MAIN_NAV: readonly NavItem[] = [
  { label: 'Trabalhos', fragment: 'trabalhos' },
  { label: 'Sobre', fragment: 'sobre' },
  { label: 'Processo', fragment: 'processo' },
  { label: 'Contato', fragment: 'agendar' },
];
