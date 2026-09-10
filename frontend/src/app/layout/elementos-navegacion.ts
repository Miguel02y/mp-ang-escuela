export interface ElementoNavegacion {
  readonly etiqueta: string;
  readonly ruta?: string;
  readonly urlExterna?: string;
  readonly hijos?: readonly ElementoNavegacion[];
}

export const ELEMENTOS_NAVEGACION: readonly ElementoNavegacion[] = [
  { etiqueta: 'Inicio', ruta: '/' },
  {
    etiqueta: 'La Institución',
    hijos: [
      { etiqueta: 'Misión y Visión', ruta: '/institucion/mision-vision' },
      { etiqueta: 'PEI', ruta: '/institucion/pei' },
      { etiqueta: 'Historia', ruta: '/institucion/historia' },
      { etiqueta: 'Horizonte institucional', ruta: '/institucion/horizonte' },
    ],
  },
  {
    etiqueta: 'Gestiones',
    hijos: [
      {
        etiqueta: 'Directiva',
        hijos: [
          { etiqueta: 'Rectoría', ruta: '/gestiones/directiva/rectoria' },
          { etiqueta: 'Consejo Académico', ruta: '/gestiones/directiva/consejo-academico' },
          { etiqueta: 'Consejo Directivo', ruta: '/gestiones/directiva/consejo-directivo' },
          { etiqueta: 'Consejo de Padres', ruta: '/gestiones/directiva/consejo-de-padres' },
          {
            etiqueta: 'Comité de convivencia escolar',
            ruta: '/gestiones/directiva/comite-convivencia',
          },
          { etiqueta: 'Personero/a', ruta: '/gestiones/directiva/personero' },
          {
            etiqueta: 'Representante de estudiantes',
            ruta: '/gestiones/directiva/representante-estudiantes',
          },
          {
            etiqueta: 'Representante de grupos',
            ruta: '/gestiones/directiva/representante-grupos',
          },
          { etiqueta: 'Formatos (FD)', ruta: '/gestiones/directiva/formatos' },
        ],
      },
      {
        etiqueta: 'Académica',
        hijos: [
          { etiqueta: 'Plan de estudios', ruta: '/gestiones/academica/plan-de-estudios' },
          { etiqueta: 'Calendario académico', ruta: '/gestiones/academica/calendario' },
          { etiqueta: 'Evaluación institucional', ruta: '/gestiones/academica/evaluacion' },
        ],
      },
      {
        etiqueta: 'Comunidad',
        hijos: [
          { etiqueta: 'Escuela de padres', ruta: '/gestiones/comunidad/escuela-de-padres' },
          { etiqueta: 'Proyectos transversales', ruta: '/gestiones/comunidad/proyectos' },
          { etiqueta: 'Bienestar estudiantil', ruta: '/gestiones/comunidad/bienestar' },
        ],
      },
      {
        etiqueta: 'Financiera y Administrativa',
        hijos: [
          { etiqueta: 'Presupuesto', ruta: '/gestiones/financiera/presupuesto' },
          { etiqueta: 'Contratación', ruta: '/gestiones/financiera/contratacion' },
          { etiqueta: 'Recursos físicos', ruta: '/gestiones/financiera/recursos-fisicos' },
        ],
      },
    ],
  },
  { etiqueta: 'Admisiones', ruta: '/admisiones' },
  { etiqueta: 'Orientación Escolar', ruta: '/orientacion-escolar' },
  { etiqueta: 'Cronograma 2026', ruta: '/cronograma' },
  { etiqueta: 'Plataforma', urlExterna: 'https://sinai.net.co/' },
  { etiqueta: 'Contáctenos', ruta: '/contacto' },
] as const;
