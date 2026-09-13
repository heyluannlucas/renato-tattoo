import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PROCESS_STEPS } from '@content/home';
import { Reveal } from '@shared/directives/reveal.directive';

@Component({
  selector: 'app-process',
  imports: [Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section process" id="como-funciona" aria-labelledby="process-title">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">Como funciona</p>
          <h2 id="process-title" class="h2">Da ideia à tattoo <em>em três passos</em></h2>
        </div>

        <ol class="steps">
          @for (step of steps; track step.title; let i = $index) {
            <li class="step" [appReveal]="i * 90">
              <span class="step__num">{{ i + 1 }}</span>
              <h3 class="step__title">{{ step.title }}</h3>
              <p class="step__text">{{ step.description }}</p>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: `
    .process { background: var(--c-surface); }
    .steps { display: grid; gap: 1rem; }
    @media (min-width: 900px) { .steps { grid-template-columns: repeat(3, 1fr); gap: 1.25rem; } }
    .step { display: grid; align-content: start; gap: 0.75rem; padding: 1.75rem; border-radius: var(--radius); background: var(--c-card); }
    .step__num {
      display: grid; place-items: center; width: 2.5rem; height: 2.5rem; margin-bottom: 0.5rem;
      border-radius: 50%; background: var(--c-accent); color: #fff; font-weight: 600;
    }
    .step__title { font-family: var(--font-display); font-weight: 400; font-size: 1.625rem; line-height: 1.15; }
    .step__text { color: var(--c-text-muted); }
  `,
})
export class Process {
  protected readonly steps = PROCESS_STEPS;
}
