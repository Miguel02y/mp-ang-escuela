import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EncabezadoSeccion } from '../../../../shared/ui/encabezado-seccion/encabezado-seccion';

interface Noticia {
  readonly fecha: string;
  readonly titulo: string;
  readonly resumen: string;
}

@Component({
  selector: 'app-noticias-destacadas',
  imports: [EncabezadoSeccion],
  templateUrl: './noticias-destacadas.html',
  styleUrl: './noticias-destacadas.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoticiasDestacadas {
  protected readonly noticias: readonly Noticia[] = [
    {
      fecha: '15 jul 2026',
      titulo: 'Izada de bandera y celebración de la semana de la identidad campesina',
      resumen:
        'Estudiantes y familias participaron en la muestra folclórica que abrió la semana cultural de la institución.',
    },
    {
      fecha: '02 jul 2026',
      titulo: 'Apertura de inscripciones para el año lectivo 2027',
      resumen:
        'Ya están disponibles los requisitos y fechas para el proceso de matrícula del próximo año escolar.',
    },
    {
      fecha: '20 jun 2026',
      titulo: 'Encuentro deportivo intergrados en la cancha múltiple',
      resumen:
        'La comunidad educativa se reunió para el torneo de fin de semestre en las instalaciones deportivas.',
    },
  ];
}
