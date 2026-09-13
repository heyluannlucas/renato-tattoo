import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="wrap container">
      <h1 class="h1">Página <em>não encontrada.</em></h1>
      <p class="lead">O link pode estar quebrado ou a página saiu do ar.</p>
      <a class="btn btn--gold" routerLink="/">Voltar para o início</a>
    </section>
  `,
  styles: `
    .wrap { display: grid; justify-items: start; align-content: center; gap: 1.5rem; min-height: 80svh; padding-top: var(--header-h); }
  `,
})
export class NotFoundPage {}
