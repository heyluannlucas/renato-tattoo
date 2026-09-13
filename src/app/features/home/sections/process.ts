import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PROCESS_STEPS } from '@content/home';
import { Reveal } from '@shared/directives/reveal.directive';

@Component({
  selector: 'app-process',
  imports: [Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section" id="processo" aria-labelledby="process-title">
      <div class="container">
        <div class="section-head section-head--center" appReveal>
          <p class="label">Processo</p>
          <h2 id="process-title" class="h2">Da ideia <em>à cicatrização</em></h2>
          <span class="divider"></span>
        </div>

        <ol class="steps">
          @for (step of steps; track step.title; let i = $index) {
            <li class="step" [appReveal]="i * 150">
              <span class="step__num">0{{ i + 1 }}</span>
              <h3 class="step__title">{{ step.title }}</h3>
              <p class="step__text">{{ step.description }}</p>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: `
    .steps { display: grid; gap: 1rem; }
    @media (min-width: 860px) { .steps { grid-template-columns: repeat(3, 1fr); gap: 1.25rem; } }
    .step {
      position: relative; display: grid; gap: 0.625rem; justify-items: center; text-align: center;
      padding: 2.25rem 1.75rem; border: 1px solid var(--c-line); border-radius: var(--radius);
      transition: border-color var(--dur-base) ease, transform var(--dur-base) var(--ease-out);
    }
    .step:hover { border-color: var(--c-gold-line); transform: translateY(-4px); }
    .step__num { font-family: var(--font-display); font-size: 2.25rem; font-weight: 500; line-height: 1; color: var(--c-gold); }
    .step__title { margin-top: 0.25rem; font-size: 0.8125rem; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; }
    .step__text { max-width: 20rem; font-size: 0.875rem; color: var(--c-text-muted); }
  `,
})
export class Process {
  protected readonly steps = PROCESS_STEPS;
}
