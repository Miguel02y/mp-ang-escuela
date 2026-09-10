import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/inicio/inicio.routes').then((m) => m.INICIO_ROUTES),
  },
];
