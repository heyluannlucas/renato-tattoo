import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MAIN_NAV, SITE } from '@core/config/site.config';
import { whatsappLink } from '@core/utils/whatsapp';
import { Icon } from '@shared/ui/icon/icon';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.is-scrolled]': 'scrolled()',
    '(window:scroll)': 'onScroll()',
  },
  template: `
    <header class="header container">
      <a routerLink="/" class="brand" aria-label="Renato Tattoo — início">Renato <em>Tattoo</em></a>

      <nav class="nav" aria-label="Navegação principal">
        <ul>
          @for (item of nav; track item.fragment) {
            <li><a routerLink="/" [fragment]="item.fragment">{{ item.label }}</a></li>
          }
        </ul>
      </nav>

      <a class="btn btn--whatsapp btn--sm" [href]="whatsappHref" target="_blank" rel="noopener">
        <app-icon name="whatsapp" /> Agendar
      </a>
    </header>
  `,
  styles: `
    :host {
      position: sticky; top: 0; z-index: 50; display: block;
      background: var(--c-bg);
      transition: box-shadow var(--dur-base) ease;
    }
    :host(.is-scrolled) { box-shadow: 0 1px 0 var(--c-line); }
    .header { display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; height: var(--header-h); }
    .brand { font-family: var(--font-display); font-size: 1.625rem; line-height: 1; white-space: nowrap; }
    .brand em { color: var(--c-accent); }
    .nav { display: none; }
    .nav ul { display: flex; gap: 2rem; }
    .nav a { font-size: 0.9375rem; font-weight: 500; color: var(--c-text-muted); transition: color var(--dur-fast) ease; }
    .nav a:hover { color: var(--c-text); }
    @media (min-width: 900px) { .nav { display: block; } }
  `,
})
export class Header {
  protected readonly nav = MAIN_NAV;
  protected readonly whatsappHref = whatsappLink(SITE.whatsapp.defaultMessage);
  protected readonly scrolled = signal(false);

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }
}
