import { ChangeDetectionStrategy, Component } from '@angular/core';

import { About } from './sections/about';
import { Cta } from './sections/cta';
import { Faq } from './sections/faq';
import { Hero } from './sections/hero';
import { StudioLocation } from './sections/location';
import { Process } from './sections/process';
import { Works } from './sections/works';

@Component({
  selector: 'app-home-page',
  imports: [Hero, Works, About, Process, Faq, StudioLocation, Cta],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-hero />
    <app-works />
    <app-about />
    <app-process />
    <app-faq />
    <app-location />
    <app-cta />
  `,
})
export class HomePage {}
