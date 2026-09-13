import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MAIN_NAV, SITE } from '@core/config/site.config';
import { whatsappLink } from '@core/utils/whatsapp';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="footer">
      <div class="container grid">
        <div>
          <p class="brand">Renato <em>Tattoo</em></p>
          <p class="muted">Realismo em preto e cinza em {{ site.location.city }}, {{ site.location.state }}.</p>
        </div>
        <nav aria-label="Rodapé">
          <ul class="links">
            @for (item of nav; track item.fragment) {
              <li><a routerLink="/" [fragment]="item.fragment">{{ item.label }}</a></li>
            }
          </ul>
        </nav>
        <ul class="links">
          <li><a [href]="whatsappHref" target="_blank" rel="noopener">WhatsApp {{ site.whatsapp.display }}</a></li>
          <li><a [href]="site.instagram.url" target="_blank" rel="noopener">Instagram {{ site.instagram.handle }}</a></li>
          <li class="muted">{{ site.location.street }} - {{ site.location.district }}</li>
          <li class="muted">{{ site.hours }}</li>
        </ul>
      </div>
      <p class="container copy">© {{ year }} {{ site.name }}</p>
    </footer>
  `,
  styles: `
    .footer { padding-top: 3.5rem; border-top: 1px solid var(--c-line); font-size: 0.9375rem; }
    .grid { display: grid; gap: 2rem; }
    @media (min-width: 700px) { .grid { grid-template-columns: 1.5fr 1fr 1fr; } }
    .brand { font-family: var(--font-display); font-size: 1.75rem; line-height: 1; margin-bottom: 0.75rem; }
    .brand em { color: var(--c-accent); }
    .muted { color: var(--c-text-muted); }
    .links { display: grid; gap: 0.5rem; }
    .links a { color: var(--c-text-muted); transition: color var(--dur-fast) ease; }
    .links a:hover { color: var(--c-accent); }
    .copy { padding-block: 2rem; margin-top: 2.5rem; border-top: 1px solid var(--c-line); font-size: 0.8125rem; color: var(--c-text-muted); }
  `,
})
export class Footer {
  protected readonly site = SITE;
  protected readonly nav = MAIN_NAV;
  protected readonly whatsappHref = whatsappLink(SITE.whatsapp.defaultMessage);
  protected readonly year = new Date().getFullYear();
}
