import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CdkMenuBar } from '@angular/cdk/menu';
import type { ElementoNavegacion } from '../elementos-navegacion';
import { ItemMenuNavegacion } from './item-menu-navegacion/item-menu-navegacion';

@Component({
  selector: 'app-menu-navegacion',
  imports: [CdkMenuBar, ItemMenuNavegacion],
  templateUrl: './menu-navegacion.html',
  styleUrl: './menu-navegacion.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuNavegacion {
  readonly elementos = input.required<readonly ElementoNavegacion[]>();
}
