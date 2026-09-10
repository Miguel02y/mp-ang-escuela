import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pie-pagina',
  imports: [RouterLink],
  templateUrl: './pie-pagina.html',
  styleUrl: './pie-pagina.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PiePagina {
  protected readonly anioActual = new Date().getFullYear();
}
