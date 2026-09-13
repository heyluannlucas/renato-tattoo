import { DestroyRef, Directive, ElementRef, afterNextRender, inject, input } from '@angular/core';

@Directive({ selector: '[appReveal]' })
export class Reveal {
  readonly delay = input(0, { alias: 'appReveal', transform: (value: unknown) => Number(value) || 0 });

  constructor() {
    const element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
      const alreadyInView = element.getBoundingClientRect().top < window.innerHeight * 0.92;
      if (reducedMotion || alreadyInView || !('IntersectionObserver' in window)) return;

      element.style.setProperty('--reveal-delay', `${this.delay()}ms`);
      element.classList.add('reveal');

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          element.classList.add('is-visible');
          observer.disconnect();
        },
        { rootMargin: '0px 0px -8% 0px' },
      );
      observer.observe(element);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
