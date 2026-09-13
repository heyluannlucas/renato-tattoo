import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MAIN_NAV, SITE } from '@core/config/site.config';
import { whatsappLink } from '@core/utils/whatsapp';
import { Icon } from '@shared/ui/icon/icon';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="footer">
      <div class="container top">
        <a routerLink="/" class="brand">Renato <span>Tattoo</span></a>

        <nav aria-label="Rodapé">
          <ul class="nav">
            @for (item of nav; track item.fragment) {
              <li><a routerLink="/" [fragment]="item.fragment">{{ item.label }}</a></li>
            }
          </ul>
        </nav>

        <div class="social">
          <a [href]="whatsappHref" target="_blank" rel="noopener" aria-label="WhatsApp"><app-icon name="whatsapp" /></a>
          <a [href]="site.instagram.url" target="_blank" rel="noopener" aria-label="Instagram"><app-icon name="instagram" /></a>
        </div>
      </div>

      <p class="container copy">© {{ year }} {{ site.name }} · {{ site.location.street }} - {{ site.location.district }}, {{ site.location.city }}-{{ site.location.state }}</p>
    </footer>
  `,
  styles: `
    .footer { border-top: 1px solid var(--c-line); }
    .top {
      display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1.5rem;
      padding-block: 2.5rem;
    }
    .brand { font-family: var(--font-display); font-size: 1.375rem; font-weight: 600; line-height: 1; }
    .brand span { color: var(--c-gold); font-style: italic; font-weight: 500; }
    .nav { display: flex; flex-wrap: wrap; gap: 0.75rem 2rem; }
    .nav a { font-size: 0.75rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--c-text-muted); transition: color var(--dur-fast) ease; }
    .nav a:hover { color: var(--c-gold-light); }
    .social { display: flex; gap: 0.5rem; }
    .social a {
      display: grid; place-items: center; width: 2.5rem; height: 2.5rem; border: 1px solid var(--c-line); border-radius: 50%;
      font-size: 1.125rem; color: var(--c-text-muted);
      transition: color var(--dur-fast) ease, border-color var(--dur-fast) ease;
    }
    .social a:hover { color: var(--c-gold); border-color: var(--c-gold-line); }
    .copy { padding-block: 1.25rem; border-top: 1px solid var(--c-line); font-size: 0.75rem; text-align: center; color: var(--c-text-muted); }
  `,
})
export class Footer {
  protected readonly site = SITE;
  protected readonly nav = MAIN_NAV;
  protected readonly whatsappHref = whatsappLink(SITE.whatsapp.defaultMessage);
  protected readonly year = new Date().getFullYear();
}
