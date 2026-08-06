import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import type { ElementoNavegacion } from '../../elementos-navegacion';

@Component({
  selector: 'app-item-menu-movil',
  imports: [RouterLink, RouterLinkActive, ItemMenuMovil],
  templateUrl: './item-menu-movil.html',
  styleUrl: './item-menu-movil.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemMenuMovil {
  readonly elemento = input.required<ElementoNavegacion>();
  readonly profundidad = input(0);
  readonly enlaceActivado = output<void>();
}
