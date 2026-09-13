import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { SITE } from '@core/config/site.config';

export interface PageSeo {
  title?: string;
  description: string;
  image?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  init(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        const seo = this.deepestChild(this.router.routerState.snapshot.root).data['seo'] as PageSeo | undefined;
        if (seo) this.apply(seo, event.urlAfterRedirects);
      });
  }

  apply(seo: PageSeo, path: string): void {
    const title = seo.title
      ? `${seo.title} · ${SITE.name}`
      : `${SITE.name} — ${SITE.tagline} em ${SITE.location.city}-${SITE.location.state}`;
    const url = SITE.url + path.split(/[?#]/)[0];
    const image = `${SITE.url}/${seo.image ?? SITE.ogImage}`;

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: seo.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.setCanonical(url);
  }

  private setCanonical(url: string): void {
    let link = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private deepestChild(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    return route.firstChild ? this.deepestChild(route.firstChild) : route;
  }
}
