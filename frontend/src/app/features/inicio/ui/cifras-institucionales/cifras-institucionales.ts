import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DatoEstadistico } from '../../../../shared/ui/dato-estadistico/dato-estadistico';

interface CifraInstitucional {
  readonly valor: string;
  readonly etiqueta: string;
}

@Component({
  selector: 'app-cifras-institucionales',
  imports: [DatoEstadistico],
  templateUrl: './cifras-institucionales.html',
  styleUrl: './cifras-institucionales.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CifrasInstitucionales {
  protected readonly cifras: readonly CifraInstitucional[] = [
    { valor: '+280', etiqueta: 'Estudiantes matriculados' },
    { valor: '18', etiqueta: 'Docentes y directivos' },
    { valor: '9', etiqueta: 'Sedes y grupos rurales' },
    { valor: '25', etiqueta: 'Años transformando futuro' },
  ];
}
