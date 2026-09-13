import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SITE } from '@core/config/site.config';
import { HideOnError } from '@shared/directives/hide-on-error.directive';
import { Reveal } from '@shared/directives/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [HideOnError, Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section about-wrap" id="sobre" aria-labelledby="about-title">
      <div class="container about">
        <div class="about__media" appReveal>
          <img
            class="about__photo"
            [src]="site.portrait"
            appHideOnError=".about__media"
            width="1086"
            height="1448"
            loading="lazy"
            alt="Renato em seu estúdio de tatuagem em Salgueiro"
          />
        </div>

        <div class="about__text" [appReveal]="150">
          <p class="label">Sobre</p>
          <h2 id="about-title" class="h2">Prazer, <em>eu sou o Renato.</em></h2>
          <span class="divider"></span>
          <p>
            Sou tatuador especializado em realismo em preto e cinza e atendo no meu próprio estúdio, em
            {{ site.location.city }}-{{ site.location.state }}. Faço desde peças no antebraço até braços fechados, sempre
            com arte criada exclusivamente para cada cliente.
          </p>
          <p>
            Antes de começar, estudo a referência, a luz e o volume da peça. Na sessão, trabalho sem pressa. O resultado
            é uma tatuagem com contraste e profundidade, que continua bonita com o passar dos anos.
          </p>

          <dl class="stats">
            <div>
              <dt>{{ site.instagram.followers }}</dt>
              <dd>Seguidores</dd>
            </div>
            <div>
              <dt>100%</dt>
              <dd>Descartável</dd>
            </div>
            <div>
              <dt>Autoral</dt>
              <dd>Arte exclusiva</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  `,
  styles: `
    .about-wrap { background: var(--c-surface); }
    .about { display: grid; gap: 2.5rem; align-items: center; }
    @media (min-width: 860px) {
      .about { grid-template-columns: 0.8fr 1fr; gap: clamp(3rem, 6vw, 5rem); }
      .about:has(.about__media[hidden]) { grid-template-columns: 1fr; }
    }

    .about__media { position: relative; max-width: 26rem; width: 100%; margin-inline: auto; }
    .about__media::before {
      content: ''; position: absolute; inset: 1rem -1rem -1rem 1rem; border: 1px solid var(--c-gold-line); border-radius: var(--radius);
    }
    .about__photo {
      position: relative; width: 100%; height: auto; aspect-ratio: 4 / 5; object-fit: cover; object-position: 50% 30%;
      border-radius: var(--radius);
    }

    .about__text { display: grid; gap: 1rem; justify-items: start; }
    .about__text > p:not(.label) { max-width: 34rem; color: var(--c-text-muted); }

    .stats { display: grid; grid-template-columns: repeat(3, auto); gap: clamp(1.25rem, 4vw, 2.5rem); margin-top: 1rem; }
    .stats dd { white-space: nowrap; }
    .stats dt { font-family: var(--font-display); font-size: 1.75rem; font-weight: 600; line-height: 1; color: var(--c-gold); }
    .stats dd { margin-top: 0.375rem; font-size: 0.6875rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--c-text-muted); }
  `,
})
export class About {
  protected readonly site = SITE;
}
