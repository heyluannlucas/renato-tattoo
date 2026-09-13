import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MAIN_NAV } from '@core/config/site.config';
import { Icon } from '@shared/ui/icon/icon';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.is-solid]': 'scrolled() || menuOpen()',
    '(window:scroll)': 'onScroll()',
    '(document:keydown.escape)': 'menuOpen.set(false)',
  },
  template: `
    <header class="header container">
      <a routerLink="/" class="brand" aria-label="Renato Tattoo, início" (click)="menuOpen.set(false)">
        Renato <span>Tattoo</span>
      </a>

      <nav id="main-nav" class="nav" [class.is-open]="menuOpen()" aria-label="Navegação principal">
        <ul>
          @for (item of nav; track item.fragment) {
            <li>
              <a routerLink="/" [fragment]="item.fragment" (click)="menuOpen.set(false)">{{ item.label }}</a>
            </li>
          }
        </ul>
      </nav>

      <div class="end">
        <a class="btn btn--gold btn--sm" routerLink="/" fragment="agendar" (click)="menuOpen.set(false)">Agendar</a>
        <button
          type="button"
          class="menu-btn"
          aria-controls="main-nav"
          [attr.aria-expanded]="menuOpen()"
          [attr.aria-label]="menuOpen() ? 'Fechar menu' : 'Abrir menu'"
          (click)="menuOpen.update((open) => !open)"
        >
          <app-icon [name]="menuOpen() ? 'close' : 'menu'" />
        </button>
      </div>
    </header>
  `,
  styles: `
    :host {
      position: fixed; inset: 0 0 auto; z-index: 50; display: block;
      border-bottom: 1px solid transparent;
      transition: background-color var(--dur-base) ease, border-color var(--dur-base) ease;
      animation: header-in 800ms var(--ease-out) both;
    }
    :host(.is-solid) {
      background: rgb(11 11 11 / 0.88); border-color: var(--c-line);
      backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
    }
    @keyframes header-in { from { opacity: 0; transform: translateY(-100%); } }

    .header { display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; height: var(--header-h); }
    .brand {
      font-family: var(--font-display); font-size: 1.375rem; font-weight: 600; line-height: 1;
      letter-spacing: 0.02em; white-space: nowrap;
    }
    .brand span { color: var(--c-gold); font-style: italic; font-weight: 500; }
    .end { display: flex; align-items: center; gap: 0.5rem; }
    .menu-btn { display: grid; place-items: center; width: 2.5rem; height: 2.5rem; font-size: 1.375rem; }

    .nav {
      position: absolute; top: 100%; left: 0; right: 0;
      visibility: hidden; opacity: 0; transform: translateY(-8px);
      background: var(--c-bg); border-bottom: 1px solid var(--c-line);
      transition: opacity var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out), visibility var(--dur-base);
    }
    .nav.is-open { visibility: visible; opacity: 1; transform: none; }
    .nav ul { display: grid; padding: 0.5rem var(--gutter) 1.25rem; }
    .nav a {
      display: block; padding: 0.875rem 0; border-bottom: 1px solid var(--c-line);
      font-size: 0.8125rem; letter-spacing: 0.16em; text-transform: uppercase;
    }

    @media (min-width: 860px) {
      .menu-btn { display: none; }
      .nav { position: static; visibility: visible; opacity: 1; transform: none; background: none; border: 0; }
      .nav ul { display: flex; gap: 2.25rem; padding: 0; }
      .nav a {
        position: relative; padding: 0.25rem 0; border: 0; font-size: 0.75rem; color: var(--c-text-muted);
        transition: color var(--dur-fast) ease;
      }
      .nav a::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: -2px; height: 1px;
        background: var(--c-gold); transform: scaleX(0); transform-origin: left;
        transition: transform var(--dur-base) var(--ease-out);
      }
      .nav a:hover { color: var(--c-text); }
      .nav a:hover::after { transform: scaleX(1); }
    }
  `,
})
export class Header {
  protected readonly nav = MAIN_NAV;
  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }
}
