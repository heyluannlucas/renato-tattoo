import { ChangeDetectionStrategy, Component } from '@angular/core';

import { About } from './sections/about';
import { Booking } from './sections/booking';
import { Hero } from './sections/hero';
import { Process } from './sections/process';
import { Works } from './sections/works';

@Component({
  selector: 'app-home-page',
  imports: [Hero, Works, About, Process, Booking],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-hero />
    <app-works />
    <app-about />
    <app-process />
    <app-booking />
  `,
})
export class HomePage {}
