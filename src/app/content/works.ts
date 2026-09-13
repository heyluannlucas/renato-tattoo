import { Work, WorkCategory } from '@shared/models/work.model';

export const WORK_CATEGORIES: Readonly<Record<WorkCategory, string>> = {
  retrato: 'Retratos',
  sacra: 'Arte sacra',
  composicao: 'Composições',
};

export const WORKS: readonly Work[] = [
  {
    id: 'manga-jesus-leao',
    title: 'Jesus e Leão de Judá',
    category: 'sacra',
    placement: 'Braço fechado',
    image: {
      src: 'images/manga-jesus-leao.jpg',
      width: 1430,
      height: 1600,
      alt: 'Braço fechado em realismo preto e cinza: rosto de Jesus com coroa de espinhos, Jesus caminhando sobre as águas e leão',
    },
  },
  {
    id: 'retrato-bebe',
    title: 'Retrato de criança',
    category: 'retrato',
    placement: 'Braço',
    image: {
      src: 'images/retrato-bebe.jpg',
      width: 1200,
      height: 1600,
      alt: 'Retrato realista de uma criança sorrindo tatuado no braço, recém-feito',
    },
  },
  {
    id: 'leao-de-juda',
    title: 'Cristo e leão',
    category: 'sacra',
    placement: 'Costas',
    image: {
      src: 'images/work-03.jpg',
      width: 900,
      height: 1115,
      alt: 'Tatuagem realista nas costas: rosto de Cristo com coroa de espinhos fundido a um leão',
    },
  },
  {
    id: 'olho-aguia-relogio',
    title: 'Olho, águia e tempo',
    category: 'composicao',
    placement: 'Antebraço',
    image: {
      src: 'images/work-01.jpg',
      width: 900,
      height: 1111,
      alt: 'Tatuagem realista no antebraço: olho, águia e relógio com números romanos',
    },
  },
  {
    id: 'tigre-e-olhar',
    title: 'Tigre e olhar',
    category: 'composicao',
    placement: 'Antebraço',
    image: {
      src: 'images/work-02.jpg',
      width: 900,
      height: 1068,
      alt: 'Tatuagem realista no antebraço: olho de tigre sobre um olhar feminino',
    },
  },
  {
    id: 'perfil-masculino',
    title: 'Retrato masculino',
    category: 'retrato',
    placement: 'Antebraço',
    image: {
      src: 'images/work-06.jpg',
      width: 900,
      height: 1089,
      alt: 'Retrato realista de perfil masculino no antebraço',
    },
  },
  {
    id: 'anjo-e-calvario',
    title: 'Anjo e Calvário',
    category: 'sacra',
    placement: 'Antebraço',
    image: {
      src: 'images/work-05.jpg',
      width: 900,
      height: 1204,
      alt: 'Tatuagem no antebraço: anjo em raios de luz sobre as três cruzes do Calvário',
    },
  },
];
