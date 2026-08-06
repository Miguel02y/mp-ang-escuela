import { Routes } from '@angular/router';

export const INICIO_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./feature/pagina-inicio/pagina-inicio').then((m) => m.PaginaInicio),
  },
];
