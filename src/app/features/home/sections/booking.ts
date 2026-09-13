import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { BOOKING_PLACEMENTS } from '@content/home';
import { SITE } from '@core/config/site.config';
import { whatsappLink } from '@core/utils/whatsapp';
import { BookingStore } from '@features/home/booking.store';
import { Reveal } from '@shared/directives/reveal.directive';
import { Icon } from '@shared/ui/icon/icon';

const { location } = SITE;
const address = `${location.street} - ${location.district}, ${location.city} - ${location.state}`;
const query = encodeURIComponent(`${address}, ${location.zip}`);

@Component({
  selector: 'app-booking',
  imports: [Icon, Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section booking-wrap" id="agendar" aria-labelledby="booking-title">
      <div class="container booking">
        <div class="info" appReveal>
          <p class="label">Contato</p>
          <h2 id="booking-title" class="h2">Vamos criar <em>a sua tatuagem?</em></h2>
          <span class="divider"></span>
          <p class="lead">
            Preencha o formulário e a mensagem chega pronta no meu WhatsApp. Se tiver fotos de referência, é só
            enviar na conversa.
          </p>

          <ul class="contacts">
            <li>
              <app-icon name="whatsapp" />
              <a [href]="directHref" target="_blank" rel="noopener">{{ site.whatsapp.display }}</a>
            </li>
            <li>
              <app-icon name="instagram" />
              <a [href]="site.instagram.url" target="_blank" rel="noopener">{{ site.instagram.handle }}</a>
            </li>
          </ul>
        </div>

        <form class="form" novalidate (submit)="send($event)" [appReveal]="150">
          <div class="field">
            <label for="bk-name">Nome</label>
            <input id="bk-name" autocomplete="name" [value]="name()" (input)="name.set(value($event))" />
          </div>

          <div class="field">
            <label for="bk-placement">Local do corpo</label>
            <select id="bk-placement" [value]="placement()" (change)="placement.set(value($event))">
              <option value="">Selecione</option>
              @for (option of placements; track option) {
                <option [value]="option">{{ option }}</option>
              }
            </select>
          </div>

          @if (booking.reference(); as reference) {
            <div class="reference">
              <img [src]="reference.image.src" alt="" width="44" height="55" />
              <p>Referência: <strong>{{ reference.title }}</strong></p>
              <button type="button" aria-label="Remover referência" (click)="booking.reference.set(null)">
                <app-icon name="close" />
              </button>
            </div>
          }

          <div class="field">
            <label for="bk-idea">Sua ideia</label>
            <textarea
              id="bk-idea"
              rows="4"
              placeholder="Ex.: samurai no antebraço, com fundo em fumaça"
              [value]="idea()"
              (input)="idea.set(value($event))"
            ></textarea>
          </div>

          @if (showError() && !valid()) {
            <p class="error" role="alert">Informe seu nome e descreva a sua ideia para continuar.</p>
          }

          <button type="submit" class="btn btn--gold btn--block">
            <app-icon name="whatsapp" /> Pedir orçamento
          </button>
          <p class="note">Sem compromisso. Respondo com valor e horários disponíveis.</p>
        </form>
      </div>

      <div class="container">
        <div class="location" appReveal>
          <div class="location__info">
            <p class="label">Endereço do estúdio</p>
            <p class="location__street">{{ site.location.street }}</p>
            <p class="location__city">
              {{ site.location.district }}, {{ site.location.city }} - {{ site.location.state }} · CEP {{ site.location.zip }}
            </p>
            <p class="location__hours"><app-icon name="clock" /> {{ site.hours }}</p>
            <div class="location__actions">
              <a class="btn btn--gold btn--sm" [href]="directionsUrl" target="_blank" rel="noopener">
                <app-icon name="pin" /> Como chegar
              </a>
              <a class="btn btn--outline btn--sm" [href]="wazeUrl" target="_blank" rel="noopener">Waze</a>
            </div>
          </div>
          <div class="location__map">
            <iframe
              [src]="embedUrl"
              title="Mapa do estúdio Renato Tattoo"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .booking-wrap { background: var(--c-surface); }
    .booking { display: grid; gap: 3rem; }
    @media (min-width: 860px) { .booking { grid-template-columns: 1fr 1fr; gap: clamp(3rem, 6vw, 5rem); align-items: center; } }

    .info { display: grid; gap: 1rem; justify-items: start; }
    .info .lead { max-width: 28rem; }
    .contacts { display: grid; gap: 0.875rem; margin-top: 1rem; }
    .contacts li { display: flex; align-items: center; gap: 0.875rem; color: var(--c-text-muted); }
    .contacts app-icon { font-size: 1.125rem; color: var(--c-gold); }
    .contacts a { transition: color var(--dur-fast) ease; }
    .contacts a:hover { color: var(--c-gold-light); }

    .form {
      display: grid; gap: 1.25rem; padding: clamp(1.5rem, 4vw, 2.25rem);
      border: 1px solid var(--c-gold-line); border-radius: var(--radius); background: var(--c-bg);
    }
    .field { display: grid; gap: 0.5rem; }
    .field label { font-size: 0.6875rem; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase; color: var(--c-text-muted); }
    input, select, textarea {
      width: 100%; min-height: 2.875rem; padding: 0.625rem 0;
      border: 0; border-bottom: 1px solid var(--c-line); border-radius: 0;
      background: transparent; font-size: 0.9375rem;
      transition: border-color var(--dur-base) ease;
    }
    select option { background: var(--c-card); }
    textarea { resize: vertical; min-height: 5.5rem; }
    input:focus-visible, select:focus-visible, textarea:focus-visible { outline: none; border-color: var(--c-gold); }
    ::placeholder { color: rgb(156 150 141 / 0.6); }

    .reference { display: flex; align-items: center; gap: 0.875rem; font-size: 0.875rem; color: var(--c-text-muted); }
    .reference img { width: 2.75rem; height: 3.4rem; object-fit: cover; border-radius: 2px; }
    .reference p { flex: 1; }
    .reference strong { color: var(--c-text); font-weight: 500; }
    .reference button { display: grid; place-items: center; width: 2rem; height: 2rem; color: var(--c-text-muted); }
    .reference button:hover { color: var(--c-gold); }

    .error { font-size: 0.8125rem; color: #e09a86; }
    .note { font-size: 0.75rem; text-align: center; color: var(--c-text-muted); }

    .location {
      display: grid; margin-top: clamp(3rem, 6vw, 4.5rem); overflow: hidden;
      border: 1px solid var(--c-line); border-radius: var(--radius); background: var(--c-bg);
    }
    @media (min-width: 860px) { .location { grid-template-columns: 1fr 1.4fr; } }
    .location__info { display: grid; align-content: center; gap: 0.5rem; padding: clamp(1.75rem, 4vw, 2.75rem); }
    .location__street { margin-top: 0.5rem; font-family: var(--font-display); font-size: 1.625rem; font-weight: 500; line-height: 1.2; }
    .location__city { color: var(--c-text-muted); }
    .location__hours { display: flex; align-items: center; gap: 0.5rem; margin-top: 0.5rem; font-size: 0.875rem; color: var(--c-text-muted); }
    .location__hours app-icon { color: var(--c-gold); }
    .location__actions { display: flex; flex-wrap: wrap; gap: 0.625rem; margin-top: 1.25rem; }
    .location__map { min-height: 18rem; background: var(--c-card); }
    .location__map iframe { display: block; width: 100%; height: 100%; min-height: 18rem; border: 0; filter: grayscale(1) invert(0.92) contrast(0.85); }
    .btn--block { margin-top: 0.5rem; }
  `,
})
export class Booking {
  protected readonly site = SITE;
  protected readonly placements = BOOKING_PLACEMENTS;
  protected readonly booking = inject(BookingStore);
  protected readonly directHref = whatsappLink(SITE.whatsapp.defaultMessage);
  protected readonly directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${query}`;
  protected readonly wazeUrl = `https://waze.com/ul?q=${query}&navigate=yes`;
  protected readonly embedUrl = inject(DomSanitizer).bypassSecurityTrustResourceUrl(
    `https://www.google.com/maps?q=${query}&z=16&output=embed`,
  );

  protected readonly name = signal('');
  protected readonly placement = signal('');
  protected readonly idea = signal('');
  protected readonly showError = signal(false);

  protected readonly valid = computed(() => !!this.name().trim() && !!this.idea().trim());

  protected readonly message = computed(() => {
    const details: [string, string | undefined][] = [
      ['Nome', this.name().trim()],
      ['Local', this.placement()],
      ['Referência do portfólio', this.booking.reference()?.title],
      ['Ideia', this.idea().trim()],
    ];
    const lines = details.filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`);
    return ['Olá, Renato! Vim pelo site e gostaria de um orçamento.', '', ...lines].join('\n');
  });

  protected value(event: Event): string {
    return (event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement).value;
  }

  protected send(event: Event): void {
    event.preventDefault();
    if (!this.valid()) {
      this.showError.set(true);
      document.getElementById(this.name().trim() ? 'bk-idea' : 'bk-name')?.focus();
      return;
    }
    this.showError.set(false);
    window.open(whatsappLink(this.message()), '_blank', 'noopener');
  }
}
