import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: 'img[appHideOnError]',
  host: { '(error)': 'onError()' },
})
export class HideOnError {
  readonly appHideOnError = input('');

  private readonly img = inject<ElementRef<HTMLImageElement>>(ElementRef).nativeElement;

  protected onError(): void {
    const selector = this.appHideOnError();
    const target = (selector && this.img.closest<HTMLElement>(selector)) || this.img;
    target.hidden = true;
  }
}
