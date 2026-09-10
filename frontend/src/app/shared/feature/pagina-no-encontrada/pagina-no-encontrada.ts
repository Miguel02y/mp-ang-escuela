import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RUTA_INICIO, RUTAS_CONTENIDO } from '../../../rutas';

@Component({
  selector: 'app-pagina-no-encontrada',
  imports: [RouterLink],
  templateUrl: './pagina-no-encontrada.html',
  styleUrl: './pagina-no-encontrada.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginaNoEncontrada {
  protected readonly rutaInicio = RUTA_INICIO;
  protected readonly sugerencias = [
    { etiqueta: 'Admisiones', ruta: RUTAS_CONTENIDO.admisiones },
    { etiqueta: 'Cronograma 2026', ruta: RUTAS_CONTENIDO.cronograma },
    { etiqueta: 'Contáctenos', ruta: RUTAS_CONTENIDO.contacto },
  ] as const;
}
