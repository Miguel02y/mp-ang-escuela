import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-encabezado-seccion',
  templateUrl: './encabezado-seccion.html',
  styleUrl: './encabezado-seccion.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EncabezadoSeccion {
  readonly textoSuperior = input<string>();
  readonly titulo = input.required<string>();
  readonly descripcion = input<string>();
  readonly alineacion = input<'inicio' | 'centro'>('inicio');
}
