import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SITE } from '@core/config/site.config';
import { whatsappLink } from '@core/utils/whatsapp';
import { Icon } from '@shared/ui/icon/icon';

@Component({
  selector: 'app-cta',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="container cta-wrap" aria-labelledby="cta-title">
      <div class="cta">
        <h2 id="cta-title" class="h2">Vamos tirar sua ideia <em>do papel?</em></h2>
        <p>
          Me manda uma mensagem com a sua ideia e uma foto de referência. Eu atendo em {{ site.location.city }},
          {{ site.hours.toLowerCase() }}.
        </p>
        <div class="actions">
          <a class="btn btn--whatsapp" [href]="whatsappHref" target="_blank" rel="noopener">
            <app-icon name="whatsapp" /> Chamar no WhatsApp
          </a>
          <a class="btn btn--light" [href]="site.instagram.url" target="_blank" rel="noopener">
            <app-icon name="instagram" /> {{ site.instagram.handle }}
          </a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .cta-wrap { padding-bottom: var(--space-section); }
    .cta {
      display: grid; justify-items: center; gap: 1.25rem; text-align: center;
      padding: clamp(2.5rem, 6vw, 4.5rem) clamp(1.5rem, 5vw, 4rem);
      border-radius: calc(var(--radius) * 1.5);
      background: var(--c-dark); color: #fff;
    }
    .cta .h2 em { color: #e0a47f; }
    .cta p { max-width: 34rem; color: rgb(255 255 255 / 0.75); }
    .actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-top: 0.5rem; }
  `,
})
export class Cta {
  protected readonly site = SITE;
  protected readonly whatsappHref = whatsappLink(SITE.whatsapp.defaultMessage);
}
