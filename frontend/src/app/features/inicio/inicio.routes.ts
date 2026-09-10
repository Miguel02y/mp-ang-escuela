import { Routes } from '@angular/router';
import { NOMBRE_INSTITUCION } from '../../rutas';

export const INICIO_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./feature/pagina-inicio/pagina-inicio').then((m) => m.PaginaInicio),
    title: `${NOMBRE_INSTITUCION} · Transformando futuro`,
  },
];
