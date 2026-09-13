import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import { SITE } from '@core/config/site.config';
import { WORKS } from '@content/works';
import { Reveal } from '@shared/directives/reveal.directive';
import { Icon } from '@shared/ui/icon/icon';
import { Lightbox } from '@shared/ui/lightbox/lightbox';

@Component({
  selector: 'app-works',
  imports: [Reveal, Icon, Lightbox],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section works" id="trabalhos" aria-labelledby="works-title">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">Trabalhos</p>
          <h2 id="works-title" class="h2">Algumas peças que <em>saíram da minha cadeira</em></h2>
          <p class="lead">Toque em uma foto para ver em tamanho grande.</p>
        </div>

        <ul class="grid">
          @for (work of works(); track work.id; let i = $index) {
            <li class="item" [appReveal]="(i % 3) * 80">
              <button type="button" class="card" (click)="selected.set(i)" [attr.aria-label]="'Ver foto: ' + work.title">
                <img
                  [src]="work.image.src"
                  [width]="work.image.width"
                  [height]="work.image.height"
                  [alt]="work.image.alt"
                  loading="lazy"
                  decoding="async"
                  (error)="hide(work.id)"
                />
                <span class="card__info">
                  <span class="card__title">{{ work.title }}</span>
                  <span class="card__place">{{ work.placement }}</span>
                </span>
              </button>
            </li>
          }
        </ul>

        <a class="more btn btn--ghost" [href]="site.instagram.url" target="_blank" rel="noopener">
          <app-icon name="instagram" /> Mais trabalhos no Instagram
        </a>
      </div>

      <app-lightbox [works]="works()" [(index)]="selected" />
    </section>
  `,
  styles: `
    .works { background: var(--c-surface); }
    .grid { columns: 2 12rem; column-gap: 1rem; }
    @media (min-width: 900px) { .grid { columns: 3; column-gap: 1.25rem; } }
    .item { break-inside: avoid; margin-bottom: 1rem; }
    @media (min-width: 900px) { .item { margin-bottom: 1.25rem; } }
    .card {
      position: relative; display: block; width: 100%; overflow: hidden; text-align: left;
      border-radius: var(--radius-sm); background: var(--c-card); cursor: zoom-in;
    }
    .card img { width: 100%; height: auto; transition: transform 900ms var(--ease-out); }
    .card__info {
      position: absolute; inset: auto 0 0; display: grid; padding: 2.5rem 1rem 0.875rem;
      background: linear-gradient(to top, rgb(0 0 0 / 0.6), transparent); color: #fff;
    }
    .card__title { font-weight: 600; font-size: 0.9375rem; line-height: 1.3; }
    .card__place { font-size: 0.8125rem; opacity: 0.85; }
    @media (hover: hover) { .card:hover img { transform: scale(1.03); } }
    .more { display: flex; width: fit-content; margin: 1.5rem auto 0; }
  `,
})
export class Works {
  protected readonly site = SITE;
  private readonly hidden = signal<ReadonlySet<string>>(new Set());

  protected readonly works = computed(() => WORKS.filter((work) => !this.hidden().has(work.id)));
  protected readonly selected = signal<number | null>(null);

  protected hide(id: string): void {
    this.hidden.update((set) => new Set(set).add(id));
  }
}
