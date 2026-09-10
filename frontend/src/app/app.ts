import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Encabezado } from './layout/encabezado/encabezado';
import { PiePagina } from './layout/pie-pagina/pie-pagina';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Encabezado, PiePagina],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
