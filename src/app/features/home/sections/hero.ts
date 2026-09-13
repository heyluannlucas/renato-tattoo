import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SITE } from '@core/config/site.config';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="hero" aria-labelledby="hero-title">
      <img
        class="hero__bg"
        src="images/work-02.jpg"
        width="900"
        height="1068"
        fetchpriority="high"
        alt=""
      />

      <div class="container hero__content">
        <p class="label hero__in" style="--d: 100ms">Realismo em preto e cinza</p>
        <h1 id="hero-title" class="h1 hero__in" style="--d: 250ms">
          Tatuagens que contam <em>a sua história.</em>
        </h1>
        <p class="lead hero__in" style="--d: 400ms">
          Retratos, arte sacra e composições autorais, criados do zero em estúdio próprio em
          {{ site.location.city }}-{{ site.location.state }}.
        </p>
        <div class="hero__actions hero__in" style="--d: 550ms">
          <a class="btn btn--gold" routerLink="/" fragment="agendar">Agendar horário</a>
          <a class="btn btn--outline" routerLink="/" fragment="trabalhos">Ver trabalhos</a>
        </div>
      </div>

      <a class="hero__scroll" routerLink="/" fragment="trabalhos" aria-label="Rolar para os trabalhos">
        <span></span>
      </a>
    </section>
  `,
  styles: `
    .hero {
      position: relative; display: grid; align-items: center; overflow: hidden;
      min-height: max(34rem, 100svh); padding-block: calc(var(--header-h) + 3rem) 5rem;
    }
    .hero::before {
      content: ''; position: absolute; inset: 0; z-index: 1;
      background:
        linear-gradient(90deg, rgb(11 11 11 / 0.95) 0%, rgb(11 11 11 / 0.75) 45%, rgb(11 11 11 / 0.35) 100%),
        linear-gradient(0deg, var(--c-bg) 0%, transparent 30%);
    }
    @media (max-width: 759px) {
      .hero::before { background: linear-gradient(0deg, var(--c-bg) 10%, rgb(11 11 11 / 0.7) 60%, rgb(11 11 11 / 0.5) 100%); }
      .hero { align-items: end; }
    }
    .hero__bg {
      position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 50% 40%;
      animation: slow-zoom 18s ease-out both;
    }
    @media (min-width: 760px) {
      .hero__bg {
        left: 35%; width: 65%;
        -webkit-mask-image: linear-gradient(90deg, transparent, #000 35%);
        mask-image: linear-gradient(90deg, transparent, #000 35%);
      }
    }

    .hero__content { position: relative; z-index: 2; display: grid; gap: 1.25rem; justify-items: start; }
    .hero__content .h1 { max-width: 34rem; }
    .hero__content .lead { max-width: 30rem; }
    .hero__actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 0.75rem; }

    .hero__in { animation: fade-up 1000ms var(--ease-out) var(--d, 0ms) both; }

    .hero__scroll {
      position: absolute; left: 50%; bottom: 1.5rem; z-index: 2; display: block;
      width: 1px; height: 3rem; overflow: hidden; background: var(--c-line);
    }
    .hero__scroll span {
      position: absolute; inset: 0; background: var(--c-gold);
      animation: scroll-line 2.2s var(--ease-out) infinite;
    }

    @keyframes fade-up { from { opacity: 0; transform: translateY(24px); } }
    @keyframes slow-zoom { from { transform: scale(1.12); opacity: 0; } 20% { opacity: 1; } }
    @keyframes scroll-line { from { transform: translateY(-100%); } to { transform: translateY(100%); } }
  `,
})
export class Hero {
  protected readonly site = SITE;
}
