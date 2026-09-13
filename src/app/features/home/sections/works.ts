import { ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';

import { SITE } from '@core/config/site.config';
import { WORKS } from '@content/works';
import { BookingStore } from '@features/home/booking.store';
import { Reveal } from '@shared/directives/reveal.directive';
import { Work } from '@shared/models/work.model';
import { Icon } from '@shared/ui/icon/icon';
import { Lightbox } from '@shared/ui/lightbox/lightbox';

@Component({
  selector: 'app-works',
  imports: [Reveal, Icon, Lightbox],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section" id="trabalhos" aria-labelledby="works-title">
      <div class="container">
        <div class="section-head section-head--center" appReveal>
          <p class="label">Portfólio</p>
          <h2 id="works-title" class="h2">Trabalhos <em>recentes</em></h2>
          <span class="divider"></span>
        </div>

        <ul class="grid">
          @for (work of works(); track work.id; let i = $index) {
            <li [appReveal]="(i % 3) * 120" [class.is-wide]="i === 0 && works().length % 2 === 1"
              [class.is-tall]="i < (3 - (works().length % 3)) % 3">
              <button type="button" class="card" (click)="selected.set(i)" [attr.aria-label]="'Ampliar: ' + work.title">
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
                  <span class="card__meta">{{ work.placement }}</span>
                </span>
              </button>
            </li>
          }
        </ul>

        <div class="more" appReveal>
          <a class="btn btn--outline" [href]="site.instagram.url" target="_blank" rel="noopener">
            <app-icon name="instagram" /> Mais no Instagram
          </a>
        </div>
      </div>

      <app-lightbox [works]="works()" [(index)]="selected" (request)="requestSimilar($event)" />
    </section>
  `,
  styles: `
    .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; }
    @media (min-width: 860px) { .grid { grid-template-columns: repeat(3, 1fr); gap: 0.875rem; } }
    @media (max-width: 859px) { .is-wide { grid-column: 1 / -1; } .is-wide .card { aspect-ratio: 1; } }
    @media (min-width: 860px) { .is-tall { grid-row: span 2; } .is-tall .card { aspect-ratio: auto; height: 100%; } }

    .card {
      position: relative; display: block; width: 100%; overflow: hidden; aspect-ratio: 4 / 5;
      border-radius: var(--radius); background: var(--c-card); cursor: zoom-in; text-align: left;
    }
    .card::after {
      content: ''; position: absolute; inset: 0; border: 1px solid var(--c-gold); border-radius: inherit;
      opacity: 0; transition: opacity var(--dur-base) ease;
    }
    .card img {
      width: 100%; height: 100%; object-fit: cover;
      filter: grayscale(0.25) brightness(0.9);
      transition: transform 1200ms var(--ease-out), filter var(--dur-base) ease;
    }
    .card__info {
      position: absolute; inset: auto 0 0; display: grid; padding: 3rem 1rem 1rem;
      background: linear-gradient(to top, rgb(0 0 0 / 0.8), transparent);
      opacity: 0; transform: translateY(10px);
      transition: opacity var(--dur-base) ease, transform var(--dur-base) var(--ease-out);
    }
    .card__title { font-family: var(--font-display); font-size: 1.25rem; font-weight: 500; line-height: 1.2; }
    .card__meta { font-size: 0.6875rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--c-gold); }

    @media (hover: hover) {
      .card:hover img { transform: scale(1.06); filter: none; }
      .card:hover::after { opacity: 0.6; }
      .card:hover .card__info { opacity: 1; transform: none; }
    }
    @media (hover: none) { .card__info { opacity: 1; transform: none; } .card img { filter: none; } }

    .more { display: flex; justify-content: center; margin-top: 2.5rem; }
  `,
})
export class Works {
  protected readonly site = SITE;

  private readonly booking = inject(BookingStore);
  private readonly scroller = inject(ViewportScroller);
  private readonly hidden = signal<ReadonlySet<string>>(new Set());

  protected readonly works = computed(() => WORKS.filter((work) => !this.hidden().has(work.id)));
  protected readonly selected = signal<number | null>(null);

  protected hide(id: string): void {
    this.hidden.update((set) => new Set(set).add(id));
  }

  protected requestSimilar(work: Work): void {
    this.booking.reference.set(work);
    setTimeout(() => this.scroller.scrollToAnchor('agendar'), 80);
  }
}
