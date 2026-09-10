import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RUTA_INICIO } from '../../../rutas';
import type { Contenido } from '../../contenido/contenido.model';

@Component({
  selector: 'app-pagina-contenido',
  imports: [RouterLink],
  templateUrl: './pagina-contenido.html',
  styleUrl: './pagina-contenido.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginaContenido {
  /** Lo enlaza el router desde `data.contenido` vía `withComponentInputBinding()`. */
  readonly contenido = input.required<Contenido>();

  protected readonly rutaInicio = RUTA_INICIO;
}
