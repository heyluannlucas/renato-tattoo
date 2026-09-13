import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FAQ } from '@content/home';
import { Icon } from '@shared/ui/icon/icon';

@Component({
  selector: 'app-faq',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section" id="duvidas" aria-labelledby="faq-title">
      <div class="container faq">
        <div class="section-head">
          <p class="eyebrow">Dúvidas</p>
          <h2 id="faq-title" class="h2">Perguntas que <em>sempre me fazem</em></h2>
          <p class="lead">Ficou alguma dúvida? Me chama no cantinho do WhatsApp aqui embaixo.</p>
        </div>

        <div class="list">
          @for (item of items; track item.question; let first = $first) {
            <details class="item" name="faq" [attr.open]="first ? '' : null">
              <summary>
                <span>{{ item.question }}</span>
                <app-icon name="plus" class="item__icon" />
              </summary>
              <p>{{ item.answer }}</p>
            </details>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .faq { display: grid; gap: 1rem; }
    @media (min-width: 900px) { .faq { grid-template-columns: 1fr 1.3fr; gap: 4rem; align-items: start; } }
    .list { display: grid; gap: 0.75rem; }
    .item { border-radius: var(--radius-sm); background: var(--c-card); box-shadow: 0 1px 2px rgb(31 27 23 / 0.05); }
    summary {
      display: flex; align-items: center; justify-content: space-between; gap: 1rem;
      padding: 1.125rem 1.25rem; font-weight: 600; cursor: pointer; list-style: none;
    }
    summary::-webkit-details-marker { display: none; }
    .item__icon { font-size: 1.25rem; color: var(--c-accent); transition: transform var(--dur-base) var(--ease-out); }
    .item[open] .item__icon { transform: rotate(45deg); }
    .item p { padding: 0 1.25rem 1.25rem; color: var(--c-text-muted); }
  `,
})
export class Faq {
  protected readonly items = FAQ;
}
