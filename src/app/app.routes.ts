import { Routes } from '@angular/router';

import { PageSeo } from '@core/seo/seo.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@features/home/home.page').then((m) => m.HomePage),
    data: {
      seo: {
        description:
          'Sou o Renato, tatuador de realismo em preto e cinza em Salgueiro-PE. Retratos, arte sacra e braços fechados. Peça seu orçamento pelo WhatsApp.',
      } satisfies PageSeo,
    },
  },
  {
    path: '**',
    loadComponent: () => import('@features/not-found/not-found.page').then((m) => m.NotFoundPage),
    data: {
      seo: { title: 'Página não encontrada', description: 'Esta página não existe.' } satisfies PageSeo,
    },
  },
];
