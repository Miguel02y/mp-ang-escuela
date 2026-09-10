import { Routes } from '@angular/router';
import { NOMBRE_INSTITUCION, RUTAS_CONTENIDO } from './rutas';
import { CATALOGO_CONTENIDO } from './shared/contenido/catalogo-contenido';

/**
 * Se generan a partir de RUTAS_CONTENIDO, la misma fuente que alimenta el menú
 * y los enlaces: así ningún enlace del sitio puede quedar sin ruta que lo resuelva.
 */
const rutasContenido: Routes = Object.values(RUTAS_CONTENIDO).map((ruta) => ({
  path: ruta.slice(1),
  loadComponent: () =>
    import('./shared/feature/pagina-contenido/pagina-contenido').then((m) => m.PaginaContenido),
  data: { contenido: CATALOGO_CONTENIDO[ruta] },
  title: `${CATALOGO_CONTENIDO[ruta].titulo} · ${NOMBRE_INSTITUCION}`,
}));

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/inicio/inicio.routes').then((m) => m.INICIO_ROUTES),
  },
  ...rutasContenido,
  {
    path: '**',
    loadComponent: () =>
      import('./shared/feature/pagina-no-encontrada/pagina-no-encontrada').then(
        (m) => m.PaginaNoEncontrada,
      ),
    title: `Página no encontrada · ${NOMBRE_INSTITUCION}`,
  },
];
