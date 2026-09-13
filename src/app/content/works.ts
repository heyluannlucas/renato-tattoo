import { Work, WorkCategory } from '@shared/models/work.model';

export const WORK_CATEGORIES: Readonly<Record<WorkCategory, string>> = {
  retrato: 'Retratos',
  sacra: 'Arte sacra',
  composicao: 'Composições',
};

export const WORKS: readonly Work[] = [
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
    id: 'tigre-ombro',
    title: 'Tigre',
    category: 'composicao',
    placement: 'Ombro',
    image: {
      src: 'images/tigre-ombro.jpg',
      width: 1080,
      height: 1050,
      alt: 'Tatuagem realista no ombro: tigre de olhos âmbar com flor vermelha e folhagens',
    },
  },
  {
    id: 'zeus-braco',
    title: 'Zeus',
    category: 'composicao',
    placement: 'Braço',
    image: {
      src: 'images/zeus-braco.jpg',
      width: 1440,
      height: 1454,
      alt: 'Tatuagem realista no braço: rosto de Zeus com barba e navio em mar revolto',
    },
  },
  {
    id: 'relogio-familia',
    title: 'O tempo e a família',
    category: 'retrato',
    placement: 'Antebraço',
    image: {
      src: 'images/relogio-familia.jpg',
      width: 1401,
      height: 1600,
      alt: 'Tatuagem no antebraço: relógio com números romanos, pássaros e silhueta de pai e filho na praia',
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
    id: 'rosto-feminino',
    title: 'Rosto feminino',
    category: 'retrato',
    placement: 'Antebraço',
    image: {
      src: 'images/rosto-feminino.jpg',
      width: 1600,
      height: 1600,
      alt: 'Tatuagem realista no antebraço: rosto feminino com detalhes em vermelho e flores',
    },
  },
  {
    id: 'anjo-calvario',
    title: 'Pomba e Calvário',
    category: 'sacra',
    placement: 'Antebraço',
    image: {
      src: 'images/anjo-calvario.jpg',
      width: 1440,
      height: 1440,
      alt: 'Tatuagem no antebraço: pomba entre nuvens, mãos da Criação e três cruzes com a palavra Yeshua',
    },
  },
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
];
