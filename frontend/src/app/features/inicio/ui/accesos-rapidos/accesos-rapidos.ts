import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface EnlaceRapido {
  readonly icono: string;
  readonly titulo: string;
  readonly descripcion: string;
  readonly ruta: string;
}

@Component({
  selector: 'app-accesos-rapidos',
  imports: [RouterLink],
  templateUrl: './accesos-rapidos.html',
  styleUrl: './accesos-rapidos.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccesosRapidos {
  protected readonly enlaces: readonly EnlaceRapido[] = [
    {
      icono: '📝',
      titulo: 'Admisiones',
      descripcion: 'Conoce el proceso y los requisitos de matrícula para 2026.',
      ruta: '/admisiones',
    },
    {
      icono: '📅',
      titulo: 'Cronograma 2026',
      descripcion: 'Fechas clave del calendario académico y actividades institucionales.',
      ruta: '/cronograma',
    },
    {
      icono: '🧭',
      titulo: 'Orientación Escolar',
      descripcion: 'Acompañamiento psicosocial para estudiantes y familias.',
      ruta: '/orientacion-escolar',
    },
    {
      icono: '☎️',
      titulo: 'Contáctenos',
      descripcion: 'Comunícate con la institución para resolver tus dudas.',
      ruta: '/contacto',
    },
  ];
}
