import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SITE } from '@core/config/site.config';
import { whatsappLink } from '@core/utils/whatsapp';
import { HideOnError } from '@shared/directives/hide-on-error.directive';
import { Icon } from '@shared/ui/icon/icon';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, Icon, HideOnError],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="hero container" aria-labelledby="hero-title">
      <div class="hero__copy">
        <p class="eyebrow">Tatuador em {{ site.location.city }}, {{ site.location.state }}</p>
        <h1 id="hero-title" class="h1">Tatuagens realistas que contam <em>a sua história.</em></h1>
        <p class="lead">
          Sou o Renato. Transformo retratos, fé e memórias em peças de realismo em preto e cinza — feitas com calma e
          cuidado, do primeiro desenho até a cicatrização.
        </p>
        <div class="hero__actions">
          <a class="btn btn--whatsapp" [href]="whatsappHref" target="_blank" rel="noopener">
            <app-icon name="whatsapp" /> Pedir orçamento
          </a>
          <a class="btn btn--ghost" routerLink="/" fragment="trabalhos">Ver trabalhos</a>
        </div>
        <ul class="hero__trust">
          <li><strong>{{ site.instagram.followers }}</strong> seguidores</li>
          <li><strong>Estúdio</strong> próprio</li>
          <li><strong>100%</strong> descartável</li>
        </ul>
      </div>

      <div class="hero__media">
        <img
          class="hero__main"
          src="/images/manga-jesus-leao.jpg"
          appHideOnError=".hero__media"
          width="1430"
          height="1600"
          fetchpriority="high"
          alt="Braço fechado em realismo: rosto de Jesus com coroa de espinhos e leão"
        />
        <figure class="hero__card">
          <img
            src="/images/retrato-bebe.jpg"
            appHideOnError=".hero__card"
            width="1200"
            height="1600"
            alt="Retrato realista de uma criança sorrindo tatuado no braço"
          />
          <figcaption>Retratos de quem você ama</figcaption>
        </figure>
      </div>
    </section>
  `,
  styles: `
    .hero {
      display: grid; gap: 3rem; align-items: center;
      padding-block: clamp(2rem, 5vw, 4.5rem) var(--space-section);
    }
    @media (min-width: 900px) { .hero { grid-template-columns: 1.05fr 1fr; gap: 4rem; } .hero:has(.hero__media[hidden]) { grid-template-columns: 1fr; } }
    .hero__copy { display: grid; gap: 1.5rem; justify-items: start; }
    .hero__copy .lead { max-width: 34rem; }
    .hero__actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 0.5rem; }
    .hero__trust {
      display: flex; flex-wrap: wrap; gap: 0.5rem 1.5rem; margin-top: 0.75rem;
      font-size: 0.875rem; color: var(--c-text-muted);
    }
    .hero__trust strong { color: var(--c-text); font-weight: 600; }

    .hero__media { position: relative; padding: 0 0 2.5rem 0; }
    @media (min-width: 900px) { .hero__media { padding: 0 0 3rem 3rem; } }
    .hero__main {
      width: 100%; height: auto; aspect-ratio: 4 / 4.4; object-fit: cover; object-position: 50% 20%;
      border-radius: var(--radius); box-shadow: var(--shadow);
      animation: rise 900ms var(--ease-out) both;
    }
    .hero__card {
      position: absolute; left: -0.5rem; bottom: 0; width: 42%;
      padding: 0.5rem 0.5rem 0.75rem; border-radius: var(--radius-sm);
      background: var(--c-card); box-shadow: var(--shadow);
      animation: rise 900ms var(--ease-out) 200ms both;
    }
    @media (min-width: 900px) { .hero__card { left: 0; width: 40%; } }
    .hero__card img { width: 100%; height: auto; aspect-ratio: 1; object-fit: cover; object-position: 50% 45%; border-radius: 6px; }
    .hero__card figcaption { margin-top: 0.5rem; font-size: 0.8125rem; font-weight: 500; text-align: center; }
    @keyframes rise { from { opacity: 0; transform: translateY(16px); } }
  `,
})
export class Hero {
  protected readonly site = SITE;
  protected readonly whatsappHref = whatsappLink(SITE.whatsapp.defaultMessage);
}
