import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SITE } from '@core/config/site.config';
import { HideOnError } from '@shared/directives/hide-on-error.directive';
import { Reveal } from '@shared/directives/reveal.directive';
import { Icon } from '@shared/ui/icon/icon';

@Component({
  selector: 'app-about',
  imports: [HideOnError, Reveal, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section" id="sobre" aria-labelledby="about-title">
      <div class="container about">
        <img
          class="about__photo"
          [src]="site.portrait"
          appHideOnError
          width="1086"
          height="1448"
          loading="lazy"
          alt="Renato no seu estúdio de tatuagem em Salgueiro"
          appReveal
        />

        <div class="about__text" appReveal>
          <p class="eyebrow">Sobre mim</p>
          <h2 id="about-title" class="h2">Prazer, eu sou <em>o Renato.</em></h2>
          <p>
            Sou tatuador especializado em realismo em preto e cinza, com estúdio próprio em
            {{ site.location.city }}-{{ site.location.state }}. Retratos de quem a gente ama, arte sacra e braços
            fechados são o que mais sai da minha cadeira.
          </p>
          <p>
            Antes de a agulha tocar a pele, eu já estudei a referência, a luz e o volume da sua peça. Meu compromisso é
            simples: fazer uma tatuagem que você vai ter orgulho de mostrar daqui a vinte anos.
          </p>
          <ul class="about__list">
            <li><app-icon name="shield" /> Material 100% descartável e esterilização certificada</li>
            <li><app-icon name="pen" /> Arte exclusiva, desenhada para o seu corpo</li>
            <li><app-icon name="chat" /> Você fala direto comigo, do orçamento ao pós</li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: `
    .about { display: grid; gap: 2.5rem; align-items: center; }
    @media (min-width: 900px) { .about { grid-template-columns: 0.9fr 1.1fr; gap: 5rem; } .about:has(.about__photo[hidden]) { grid-template-columns: 1fr; } }
    .about__photo {
      width: 100%; height: auto; aspect-ratio: 4 / 5; object-fit: cover; object-position: 50% 30%;
      border-radius: var(--radius); box-shadow: var(--shadow);
    }
    .about__text { display: grid; gap: 1.125rem; }
    .about__text > p:not(.eyebrow) { color: var(--c-text-muted); font-size: 1.0625rem; max-width: 36rem; }
    .about__list { display: grid; gap: 0.75rem; margin-top: 0.75rem; padding-top: 1.5rem; border-top: 1px solid var(--c-line); }
    .about__list li { display: flex; align-items: center; gap: 0.75rem; font-weight: 500; }
    .about__list app-icon { font-size: 1.25rem; color: var(--c-accent); }
  `,
})
export class About {
  protected readonly site = SITE;
}
