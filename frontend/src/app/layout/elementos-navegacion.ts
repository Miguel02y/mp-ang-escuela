import { RUTA_INICIO, RUTAS_CONTENIDO, URL_PLATAFORMA } from '../rutas';

export interface ElementoNavegacion {
  readonly etiqueta: string;
  readonly ruta?: string;
  readonly urlExterna?: string;
  readonly hijos?: readonly ElementoNavegacion[];
}

export const ELEMENTOS_NAVEGACION: readonly ElementoNavegacion[] = [
  { etiqueta: 'Inicio', ruta: RUTA_INICIO },
  {
    etiqueta: 'La Institución',
    hijos: [
      { etiqueta: 'Misión y Visión', ruta: RUTAS_CONTENIDO.misionVision },
      { etiqueta: 'PEI', ruta: RUTAS_CONTENIDO.pei },
      { etiqueta: 'Historia', ruta: RUTAS_CONTENIDO.historia },
      { etiqueta: 'Horizonte institucional', ruta: RUTAS_CONTENIDO.horizonteInstitucional },
    ],
  },
  {
    etiqueta: 'Gestiones',
    hijos: [
      {
        etiqueta: 'Directiva',
        hijos: [
          { etiqueta: 'Rectoría', ruta: RUTAS_CONTENIDO.rectoria },
          { etiqueta: 'Consejo Académico', ruta: RUTAS_CONTENIDO.consejoAcademico },
          { etiqueta: 'Consejo Directivo', ruta: RUTAS_CONTENIDO.consejoDirectivo },
          { etiqueta: 'Consejo de Padres', ruta: RUTAS_CONTENIDO.consejoDePadres },
          {
            etiqueta: 'Comité de convivencia escolar',
            ruta: RUTAS_CONTENIDO.comiteConvivencia,
          },
          { etiqueta: 'Personero/a', ruta: RUTAS_CONTENIDO.personero },
          {
            etiqueta: 'Representante de estudiantes',
            ruta: RUTAS_CONTENIDO.representanteEstudiantes,
          },
          {
            etiqueta: 'Representante de grupos',
            ruta: RUTAS_CONTENIDO.representanteGrupos,
          },
          { etiqueta: 'Formatos (FD)', ruta: RUTAS_CONTENIDO.formatosDirectiva },
        ],
      },
      {
        etiqueta: 'Académica',
        hijos: [
          { etiqueta: 'Plan de estudios', ruta: RUTAS_CONTENIDO.planDeEstudios },
          { etiqueta: 'Calendario académico', ruta: RUTAS_CONTENIDO.calendarioAcademico },
          { etiqueta: 'Evaluación institucional', ruta: RUTAS_CONTENIDO.evaluacionInstitucional },
        ],
      },
      {
        etiqueta: 'Comunidad',
        hijos: [
          { etiqueta: 'Escuela de padres', ruta: RUTAS_CONTENIDO.escuelaDePadres },
          { etiqueta: 'Proyectos transversales', ruta: RUTAS_CONTENIDO.proyectosTransversales },
          { etiqueta: 'Bienestar estudiantil', ruta: RUTAS_CONTENIDO.bienestarEstudiantil },
        ],
      },
      {
        etiqueta: 'Financiera y Administrativa',
        hijos: [
          { etiqueta: 'Presupuesto', ruta: RUTAS_CONTENIDO.presupuesto },
          { etiqueta: 'Contratación', ruta: RUTAS_CONTENIDO.contratacion },
          { etiqueta: 'Recursos físicos', ruta: RUTAS_CONTENIDO.recursosFisicos },
        ],
      },
    ],
  },
  { etiqueta: 'Admisiones', ruta: RUTAS_CONTENIDO.admisiones },
  { etiqueta: 'Orientación Escolar', ruta: RUTAS_CONTENIDO.orientacionEscolar },
  { etiqueta: 'Cronograma 2026', ruta: RUTAS_CONTENIDO.cronograma },
  { etiqueta: 'Plataforma', urlExterna: URL_PLATAFORMA },
  { etiqueta: 'Contáctenos', ruta: RUTAS_CONTENIDO.contacto },
] as const;
