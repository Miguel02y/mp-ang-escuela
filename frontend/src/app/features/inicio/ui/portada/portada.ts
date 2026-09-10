import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RUTAS_CONTENIDO } from '../../../../rutas';

@Component({
  selector: 'app-portada',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './portada.html',
  styleUrl: './portada.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Portada {
  protected readonly rutas = RUTAS_CONTENIDO;
}
