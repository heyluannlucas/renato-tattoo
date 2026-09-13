import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  ElementRef,
  computed,
  effect,
  inject,
  input,
  model,
  output,
  viewChild,
} from '@angular/core';

import { Work } from '@shared/models/work.model';
import { Icon } from '@shared/ui/icon/icon';

@Component({
  selector: 'app-lightbox',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './lightbox.html',
  styleUrl: './lightbox.scss',
})
export class Lightbox {
  readonly works = input.required<readonly Work[]>();
  readonly index = model<number | null>(null);
  readonly request = output<Work>();

  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  private readonly document = inject(DOCUMENT);
  private pointerStartX: number | null = null;

  protected readonly current = computed(() => {
    const i = this.index();
    return i === null ? null : (this.works()[i] ?? null);
  });
  protected readonly total = computed(() => this.works().length);

  constructor() {
    effect(() => {
      const dialog = this.dialog().nativeElement;
      const shouldOpen = this.current() !== null;
      if (shouldOpen && !dialog.open) dialog.showModal?.();
      if (!shouldOpen && dialog.open) dialog.close();
      this.document.body.classList.toggle('no-scroll', shouldOpen);
    });
  }

  protected step(delta: number): void {
    const i = this.index();
    if (i === null) return;
    const total = this.total();
    this.index.set((i + delta + total) % total);
  }

  protected requestWork(work: Work): void {
    this.close();
    this.request.emit(work);
  }

  protected close(): void {
    this.index.set(null);
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') this.step(1);
    if (event.key === 'ArrowLeft') this.step(-1);
  }

  protected onStageClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) this.close();
  }

  protected onPointerDown(event: PointerEvent): void {
    this.pointerStartX = event.clientX;
  }

  protected onPointerUp(event: PointerEvent): void {
    if (this.pointerStartX === null) return;
    const deltaX = event.clientX - this.pointerStartX;
    this.pointerStartX = null;
    if (Math.abs(deltaX) > 50) this.step(deltaX < 0 ? 1 : -1);
  }

  protected pad(value: number): string {
    return String(value).padStart(2, '0');
  }
}
