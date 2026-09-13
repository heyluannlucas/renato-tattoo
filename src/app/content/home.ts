import { FaqItem, ProcessStep } from '@shared/models/work.model';

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    title: 'Você me conta a ideia',
    description:
      'Me chama no WhatsApp com a sua ideia, uma foto de referência e o lugar do corpo. Eu analiso e te passo uma estimativa, sem compromisso.',
  },
  {
    title: 'Eu crio o desenho',
    description:
      'Estudo a referência, a luz e o volume, e desenho uma arte só sua, pensada para o formato do seu corpo.',
  },
  {
    title: 'Sessão e cuidados',
    description:
      'Uso material 100% descartável e esterilização certificada. No fim, você leva um guia de cuidados e segue falando comigo durante a cicatrização.',
  },
];

export const FAQ: readonly FaqItem[] = [
  {
    question: 'Quanto custa uma tatuagem?',
    answer:
      'Depende do tamanho, do nível de detalhe e da região do corpo. Me manda uma referência e onde você quer tatuar que eu te passo uma estimativa rapidinho, sem compromisso.',
  },
  {
    question: 'Preciso levar a arte pronta?',
    answer:
      'Não precisa. Você pode trazer uma referência e eu desenvolvo a arte a partir dela, ou me dar liberdade para criar do zero, pensando no seu estilo e na área escolhida.',
  },
  {
    question: 'Quanto tempo leva para cicatrizar?',
    answer:
      'A cicatrização visível leva de 15 a 21 dias, e a pele termina de se regenerar em até 2 meses. Te entrego um guia de cuidados e fico disponível no WhatsApp para qualquer dúvida.',
  },
  {
    question: 'Dói muito?',
    answer:
      'Varia de pessoa para pessoa e conforme a região — áreas com mais osso ou pele fina incomodam mais. A maioria dos meus clientes descreve como um desconforto bem suportável.',
  },
];
