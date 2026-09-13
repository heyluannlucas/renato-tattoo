import { Routes } from '@angular/router';

import { PageSeo } from '@core/seo/seo.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@features/home/home.page').then((m) => m.HomePage),
    data: {
      seo: {
        description:
          'Renato Tattoo: tatuagens realistas em preto e cinza em Salgueiro-PE. Arte exclusiva, estúdio próprio e orçamento pelo WhatsApp.',
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
