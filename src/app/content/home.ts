import { ProcessStep } from '@shared/models/work.model';

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    title: 'Conversa',
    description: 'Você envia a ideia, uma referência e o local do corpo. Eu retorno com uma estimativa, sem compromisso.',
  },
  {
    title: 'Desenho',
    description: 'Crio uma arte exclusiva, estudando luz, volume e o formato do seu corpo.',
  },
  {
    title: 'Sessão',
    description: 'Material 100% descartável, esterilização certificada e acompanhamento até a cicatrização.',
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
