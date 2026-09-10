export const RUTA_INICIO = '/';

/**
 * Fuente única de verdad de las rutas del sitio. El router y los enlaces se
 * derivan de aquí, de modo que no puede existir un enlace hacia una ruta que
 * el router no resuelva.
 */
export const RUTAS_CONTENIDO = {
  misionVision: '/institucion/mision-vision',
  pei: '/institucion/pei',
  historia: '/institucion/historia',
  horizonteInstitucional: '/institucion/horizonte',

  rectoria: '/gestiones/directiva/rectoria',
  consejoAcademico: '/gestiones/directiva/consejo-academico',
  consejoDirectivo: '/gestiones/directiva/consejo-directivo',
  consejoDePadres: '/gestiones/directiva/consejo-de-padres',
  comiteConvivencia: '/gestiones/directiva/comite-convivencia',
  personero: '/gestiones/directiva/personero',
  representanteEstudiantes: '/gestiones/directiva/representante-estudiantes',
  representanteGrupos: '/gestiones/directiva/representante-grupos',
  formatosDirectiva: '/gestiones/directiva/formatos',

  planDeEstudios: '/gestiones/academica/plan-de-estudios',
  calendarioAcademico: '/gestiones/academica/calendario',
  evaluacionInstitucional: '/gestiones/academica/evaluacion',

  escuelaDePadres: '/gestiones/comunidad/escuela-de-padres',
  proyectosTransversales: '/gestiones/comunidad/proyectos',
  bienestarEstudiantil: '/gestiones/comunidad/bienestar',

  presupuesto: '/gestiones/financiera/presupuesto',
  contratacion: '/gestiones/financiera/contratacion',
  recursosFisicos: '/gestiones/financiera/recursos-fisicos',

  admisiones: '/admisiones',
  orientacionEscolar: '/orientacion-escolar',
  cronograma: '/cronograma',
  contacto: '/contacto',
} as const;

export type RutaContenido = (typeof RUTAS_CONTENIDO)[keyof typeof RUTAS_CONTENIDO];

export const URL_PLATAFORMA = 'https://sinai.net.co/';

export const NOMBRE_INSTITUCION = 'Centro Educativo Rural Peñalisa';
