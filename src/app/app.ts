import { ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Footer } from '@core/layout/footer/footer';
import { Header } from '@core/layout/header/header';
import { WhatsappWidget } from '@core/layout/whatsapp-widget/whatsapp-widget';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, WhatsappWidget],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-header />
    <main>
      <router-outlet />
    </main>
    <app-footer />
    <app-whatsapp-widget />
  `,
})
export class App {
  constructor() {
    inject(ViewportScroller).setOffset([0, 80]);
  }
}
