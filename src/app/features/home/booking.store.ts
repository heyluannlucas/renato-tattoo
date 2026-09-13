import { Injectable, signal } from '@angular/core';

import { Work } from '@shared/models/work.model';

/** Liga o portfólio ao formulário: a peça escolhida vira referência do orçamento. */
@Injectable({ providedIn: 'root' })
export class BookingStore {
  readonly reference = signal<Work | null>(null);
}
