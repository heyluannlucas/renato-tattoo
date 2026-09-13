import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { SITE } from '@core/config/site.config';
import { Reveal } from '@shared/directives/reveal.directive';
import { Icon } from '@shared/ui/icon/icon';

const { location } = SITE;
const fullAddress = `${location.street} - ${location.district}, ${location.city} - ${location.state}, ${location.zip}`;
const query = encodeURIComponent(fullAddress);

@Component({
  selector: 'app-location',
  imports: [Reveal, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section" id="localizacao" aria-labelledby="location-title">
      <div class="container location">
        <div class="info" appReveal>
          <p class="eyebrow">Onde fica</p>
          <h2 id="location-title" class="h2">Vem me visitar <em>no estúdio</em></h2>

          <ul class="details">
            <li>
              <app-icon name="pin" />
              <span>
                <strong>{{ location.street }}</strong><br />
                {{ location.district }}, {{ location.city }} - {{ location.state }}, {{ location.zip }}
              </span>
            </li>
            <li>
              <app-icon name="clock" />
              <span>{{ site.hours }}</span>
            </li>
          </ul>

          <div class="actions">
            <a class="btn btn--primary" [href]="directionsUrl" target="_blank" rel="noopener">
              <app-icon name="arrow-up-right" /> Como chegar
            </a>
            <a class="btn btn--ghost" [href]="wazeUrl" target="_blank" rel="noopener">Abrir no Waze</a>
          </div>
        </div>

        <div class="map" appReveal>
          <iframe
            [src]="embedUrl"
            title="Mapa do estúdio Renato Tattoo"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  `,
  styles: `
    .location { display: grid; gap: 2.5rem; align-items: center; }
    @media (min-width: 900px) { .location { grid-template-columns: 0.9fr 1.1fr; gap: 4rem; } }
    .info { display: grid; gap: 1.25rem; justify-items: start; }
    .details { display: grid; gap: 1rem; margin-top: 0.5rem; }
    .details li { display: flex; gap: 0.875rem; align-items: flex-start; color: var(--c-text-muted); }
    .details strong { color: var(--c-text); font-weight: 600; }
    .details app-icon { margin-top: 0.2rem; font-size: 1.25rem; color: var(--c-accent); }
    .actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 0.75rem; }
    .map {
      overflow: hidden; aspect-ratio: 4 / 3; border-radius: var(--radius);
      background: var(--c-surface); box-shadow: var(--shadow);
    }
    .map iframe { display: block; width: 100%; height: 100%; border: 0; }
  `,
})
export class StudioLocation {
  protected readonly site = SITE;
  protected readonly location = location;
  protected readonly embedUrl = inject(DomSanitizer).bypassSecurityTrustResourceUrl(
    `https://www.google.com/maps?q=${query}&z=16&output=embed`,
  );
  protected readonly directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${query}`;
  protected readonly wazeUrl = `https://waze.com/ul?q=${query}&navigate=yes`;
}
