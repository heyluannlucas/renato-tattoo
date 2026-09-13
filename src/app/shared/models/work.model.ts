export interface ImageAsset {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export type WorkCategory = 'retrato' | 'sacra' | 'composicao';

export interface Work {
  id: string;
  title: string;
  category: WorkCategory;
  placement: string;
  image: ImageAsset;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}
