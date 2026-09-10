import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import type { ElementoNavegacion } from '../../elementos-navegacion';

@Component({
  selector: 'app-item-menu-navegacion',
  imports: [
    CdkMenu,
    CdkMenuItem,
    CdkMenuTrigger,
    RouterLink,
    RouterLinkActive,
    ItemMenuNavegacion,
  ],
  templateUrl: './item-menu-navegacion.html',
  styleUrl: './item-menu-navegacion.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemMenuNavegacion {
  readonly elemento = input.required<ElementoNavegacion>();
  readonly profundidad = input(0);
}
