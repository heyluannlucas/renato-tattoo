import { Work, WorkCategory } from '@shared/models/work.model';

export const WORK_CATEGORIES: Readonly<Record<WorkCategory, string>> = {
  retrato: 'Retratos',
  sacra: 'Arte sacra',
  composicao: 'Composições',
};

export const WORKS: readonly Work[] = [
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
    id: 'guerreiro-fechamento',
    title: 'Guerreiro espartano',
    category: 'composicao',
    placement: 'Braço fechado',
    image: {
      src: 'images/guerreiro-fechamento.jpg',
      width: 1280,
      height: 1600,
      alt: 'Braço fechado em realismo preto e cinza com guerreiro espartano e composição de elementos',
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
    id: 'composicao-antebraco',
    title: 'Composição autoral',
    category: 'composicao',
    placement: 'Antebraço e mão',
    image: {
      src: 'images/composicao-antebraco.jpg',
      width: 1200,
      height: 1600,
      alt: 'Tatuagem realista no antebraço com personagem de cartola, cédulas e caça-níquel',
    },
  },
  {
    id: 'rosto-perna',
    title: 'Rosto em fragmentos',
    category: 'retrato',
    placement: 'Perna',
    image: {
      src: 'images/rosto-perna.jpg',
      width: 1280,
      height: 1600,
      alt: 'Tatuagem realista na perna: rosto masculino envolto em fragmentos de pedra',
    },
  },
  {
    id: 'jesus-braco-fechado',
    title: 'Fé em braço fechado',
    category: 'sacra',
    placement: 'Braço fechado',
    image: {
      src: 'images/jesus-braco-fechado.jpg',
      width: 1400,
      height: 1600,
      alt: 'Braço fechado em realismo: rosto de Jesus com coroa de espinhos e figura em oração',
    },
  },
  {
    id: 'jesus-fechamento',
    title: 'Jesus',
    category: 'sacra',
    placement: 'Braço fechado',
    image: {
      src: 'images/jesus-fechamento.jpg',
      width: 1200,
      height: 1600,
      alt: 'Braço fechado em realismo preto e cinza com rosto de Jesus olhando para o alto',
    },
  },
];
