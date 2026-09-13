export interface ImageAsset {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface Work {
  id: string;
  title: string;
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
