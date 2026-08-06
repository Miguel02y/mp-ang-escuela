import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EncabezadoSeccion } from '../../../../shared/ui/encabezado-seccion/encabezado-seccion';

@Component({
  selector: 'app-quienes-somos',
  imports: [NgOptimizedImage, RouterLink, EncabezadoSeccion],
  templateUrl: './quienes-somos.html',
  styleUrl: './quienes-somos.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuienesSomos {}
