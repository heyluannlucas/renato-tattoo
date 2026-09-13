import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  signal,
  viewChild,
} from '@angular/core';

import { SITE } from '@core/config/site.config';
import { whatsappLink } from '@core/utils/whatsapp';
import { HideOnError } from '@shared/directives/hide-on-error.directive';
import { Icon } from '@shared/ui/icon/icon';

const TEASER_DISMISSED_KEY = 'wa-teaser-dismissed';

@Component({
  selector: 'app-whatsapp-widget',
  imports: [Icon, HideOnError],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './whatsapp-widget.html',
  styleUrl: './whatsapp-widget.scss',
  host: { '(document:keydown.escape)': 'close()' },
})
export class WhatsappWidget {
  protected readonly site = SITE;
  protected readonly quickReplies = ['Quero um orçamento', 'Tenho uma dúvida', 'Quais horários você tem?'];

  protected readonly open = signal(false);
  protected readonly teaser = signal(false);
  protected readonly message = signal('');

  private readonly input = viewChild<ElementRef<HTMLTextAreaElement>>('input');

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (readStorage(TEASER_DISMISSED_KEY)) return;
      const timer = setTimeout(() => this.teaser.set(!this.open()), 6000);
      destroyRef.onDestroy(() => clearTimeout(timer));
    });
  }

  protected toggle(): void {
    this.open() ? this.close() : this.show();
  }

  protected show(): void {
    this.open.set(true);
    this.dismissTeaser();
    setTimeout(() => this.input()?.nativeElement.focus(), 50);
  }

  protected close(): void {
    this.open.set(false);
  }

  protected dismissTeaser(): void {
    this.teaser.set(false);
    writeStorage(TEASER_DISMISSED_KEY, '1');
  }

  protected pick(reply: string): void {
    this.message.set(reply);
    this.input()?.nativeElement.focus();
  }

  protected onInput(event: Event): void {
    this.message.set((event.target as HTMLTextAreaElement).value);
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.send();
    }
  }

  protected send(): void {
    const text = this.message().trim();
    const full = text ? `Oi, Renato! ${text}` : SITE.whatsapp.defaultMessage;
    window.open(whatsappLink(full), '_blank', 'noopener');
    this.message.set('');
    this.close();
  }
}

function readStorage(key: string): string | null {
  try {
    return sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string): void {
  try {
    sessionStorage.setItem(key, value);
  } catch {
  }
}
