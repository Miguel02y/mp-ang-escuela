import { ChangeDetectionStrategy, Component, effect, input, model } from '@angular/core';
import { CdkTrapFocus } from '@angular/cdk/a11y';
import type { ElementoNavegacion } from '../elementos-navegacion';
import { ItemMenuMovil } from './item-menu-movil/item-menu-movil';

@Component({
  selector: 'app-menu-movil',
  imports: [CdkTrapFocus, ItemMenuMovil],
  templateUrl: './menu-movil.html',
  styleUrl: './menu-movil.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuMovil {
  readonly elementos = input.required<readonly ElementoNavegacion[]>();
  readonly abierto = model(false);

  constructor() {
    effect(() => {
      document.body.style.overflow = this.abierto() ? 'hidden' : '';
    });
  }

  cerrar(): void {
    this.abierto.set(false);
  }
}
