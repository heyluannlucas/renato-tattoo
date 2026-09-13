import { ProcessStep } from '@shared/models/work.model';

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    title: 'Orçamento',
    description:
      'Você me conta a ideia, envia referências e diz o local do corpo. Eu respondo com valor e disponibilidade, sem compromisso.',
  },
  {
    title: 'Criação',
    description:
      'Desenvolvo uma arte exclusiva, pensada para o formato do seu corpo, e você aprova o desenho antes da sessão.',
  },
  {
    title: 'Sessão e cuidados',
    description:
      'Material 100% descartável e esterilização certificada. Depois, você recebe as orientações e tem acompanhamento até cicatrizar.',
  },
];

export const BOOKING_PLACEMENTS = [
  'Braço',
  'Antebraço',
  'Mão',
  'Ombro',
  'Peito',
  'Costas',
  'Costela',
  'Perna',
  'Pescoço',
  'Outro',
] as const;
