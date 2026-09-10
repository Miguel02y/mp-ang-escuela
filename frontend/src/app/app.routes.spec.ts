import { routes } from './app.routes';
import { ELEMENTOS_NAVEGACION, type ElementoNavegacion } from './layout/elementos-navegacion';
import { RUTA_INICIO } from './rutas';

const recolectarRutas = (elementos: readonly ElementoNavegacion[]): string[] =>
  elementos.flatMap((elemento) => [
    ...(elemento.ruta ? [elemento.ruta] : []),
    ...(elemento.hijos ? recolectarRutas(elemento.hijos) : []),
  ]);

describe('routes', () => {
  const rutasDeclaradas = new Set(routes.map((ruta) => `/${ruta.path}`));

  it('resuelve todas las rutas enlazadas desde el menú de navegación', () => {
    const rutasDelMenu = recolectarRutas(ELEMENTOS_NAVEGACION).filter(
      (ruta) => ruta !== RUTA_INICIO,
    );

    expect(rutasDelMenu.length).toBeGreaterThan(0);

    const sinResolver = rutasDelMenu.filter((ruta) => !rutasDeclaradas.has(ruta));
    expect(sinResolver).toEqual([]);
  });

  it('expone una ruta comodín para las direcciones no encontradas', () => {
    expect(routes.at(-1)?.path).toBe('**');
  });
});
