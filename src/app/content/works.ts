import { Work, WorkCategory } from '@shared/models/work.model';

export const WORK_CATEGORIES: Readonly<Record<WorkCategory, string>> = {
  retrato: 'Retratos',
  sacra: 'Arte sacra',
  composicao: 'Composições',
};

/** Trabalhos de 2025 e 2026, variando o local do corpo. */
export const WORKS: readonly Work[] = [
  {
    id: 'jesus-fechamento',
    title: 'Jesus e Leão de Judá',
    category: 'sacra',
    placement: 'Braço fechado',
    image: {
      src: 'images/jesus-fechamento.jpg',
      width: 1207,
      height: 1600,
      alt: 'Braço fechado em realismo preto e cinza: rosto de Jesus olhando para o alto, travessia e leão',
    },
  },
  {
    id: 'bulldog-coxa',
    title: 'Bulldog Hustle',
    category: 'composicao',
    placement: 'Coxa',
    image: {
      src: 'images/bulldog-coxa.jpg',
      width: 1280,
      height: 1600,
      alt: 'Tatuagem na coxa: bulldog de óculos com charuto e a palavra Hustle',
    },
  },
  {
    id: 'samurai-antebraco',
    title: 'Samurai',
    category: 'composicao',
    placement: 'Antebraço',
    image: {
      src: 'images/samurai-antebraco.jpg',
      width: 1200,
      height: 1600,
      alt: 'Tatuagem realista no antebraço: samurai com armadura e símbolo yin-yang',
    },
  },
  {
    id: 'zeus-braco',
    title: 'Zeus',
    category: 'composicao',
    placement: 'Ombro e braço',
    image: {
      src: 'images/zeus-braco.jpg',
      width: 1440,
      height: 1454,
      alt: 'Tatuagem realista no ombro e braço: rosto de Zeus com barba e navio em mar revolto',
    },
  },
  {
    id: 'rosto-panturrilha',
    title: 'Rosto em fragmentos',
    category: 'retrato',
    placement: 'Panturrilha',
    image: {
      src: 'images/rosto-panturrilha.jpg',
      width: 1280,
      height: 1600,
      alt: 'Tatuagem realista na panturrilha: rosto masculino envolto em fragmentos de pedra',
    },
  },
  {
    id: 'jesus-antebraco',
    title: 'Jesus e Calvário',
    category: 'sacra',
    placement: 'Antebraço',
    image: {
      src: 'images/jesus-antebraco.jpg',
      width: 1275,
      height: 1600,
      alt: 'Tatuagem realista no antebraço: rosto de Jesus com coroa de espinhos sobre as três cruzes do Calvário',
    },
  },
  {
    id: 'leao-fechamento',
    title: 'Leão',
    category: 'composicao',
    placement: 'Braço fechado',
    image: {
      src: 'images/leao-fechamento.jpg',
      width: 1440,
      height: 1486,
      alt: 'Braço fechado em realismo: leão rugindo, árvore ao pôr do sol e composição até o antebraço',
    },
  },
  {
    id: 'batman-antebraco',
    title: 'Batman',
    category: 'composicao',
    placement: 'Antebraço',
    image: {
      src: 'images/batman-antebraco.jpg',
      width: 1280,
      height: 1600,
      alt: 'Tatuagem realista no antebraço: rosto do Batman com símbolo do morcego e silhueta na cidade',
    },
  },
  {
    id: 'composicao-mao',
    title: 'Composição autoral',
    category: 'composicao',
    placement: 'Antebraço e mão',
    image: {
      src: 'images/composicao-mao.jpg',
      width: 1200,
      height: 1600,
      alt: 'Tatuagem realista no antebraço e na mão com personagem de cartola, cédulas e caça-níquel',
    },
  },
];
