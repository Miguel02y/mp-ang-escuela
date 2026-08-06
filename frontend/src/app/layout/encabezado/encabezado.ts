import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ELEMENTOS_NAVEGACION } from '../elementos-navegacion';
import { MenuNavegacion } from '../menu-navegacion/menu-navegacion';
import { MenuMovil } from '../menu-movil/menu-movil';

@Component({
  selector: 'app-encabezado',
  imports: [RouterLink, NgOptimizedImage, MenuNavegacion, MenuMovil],
  templateUrl: './encabezado.html',
  styleUrl: './encabezado.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Encabezado {
  protected readonly elementosNavegacion = ELEMENTOS_NAVEGACION;
  protected readonly menuMovilAbierto = signal(false);
}
