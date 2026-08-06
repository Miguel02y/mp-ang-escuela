import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-dato-estadistico',
  templateUrl: './dato-estadistico.html',
  styleUrl: './dato-estadistico.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatoEstadistico {
  readonly valor = input.required<string>();
  readonly etiqueta = input.required<string>();
}
