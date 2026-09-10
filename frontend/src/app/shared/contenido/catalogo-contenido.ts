import { RUTAS_CONTENIDO, type RutaContenido } from '../../rutas';
import type { Contenido } from './contenido.model';

/**
 * Contenido de cada página del sitio. El tipo `Record<RutaContenido, ...>`
 * obliga a que toda ruta declarada en el menú tenga su entrada aquí.
 *
 * Para publicar una página basta con agregarle `bloques`; mientras no los
 * tenga se muestra como pendiente de publicación.
 */
export const CATALOGO_CONTENIDO: Readonly<Record<RutaContenido, Contenido>> = {
  [RUTAS_CONTENIDO.misionVision]: {
    titulo: 'Misión y Visión',
    descripcion: 'Propósito institucional y horizonte al que aspira la comunidad educativa.',
  },
  [RUTAS_CONTENIDO.pei]: {
    titulo: 'Proyecto Educativo Institucional (PEI)',
    descripcion: 'Documento que orienta el modelo pedagógico y la gestión de la institución.',
  },
  [RUTAS_CONTENIDO.historia]: {
    titulo: 'Historia',
    descripcion: 'Recorrido de la institución y su vínculo con la vereda Peñalisa.',
  },
  [RUTAS_CONTENIDO.horizonteInstitucional]: {
    titulo: 'Horizonte institucional',
    descripcion: 'Principios, valores y perfil del estudiante que forma la institución.',
  },

  [RUTAS_CONTENIDO.rectoria]: {
    titulo: 'Rectoría',
    descripcion: 'Dirección de la institución y canales de comunicación con la rectoría.',
  },
  [RUTAS_CONTENIDO.consejoAcademico]: {
    titulo: 'Consejo Académico',
    descripcion: 'Instancia que orienta el currículo y el seguimiento académico.',
  },
  [RUTAS_CONTENIDO.consejoDirectivo]: {
    titulo: 'Consejo Directivo',
    descripcion: 'Máxima instancia de participación en la dirección de la institución.',
  },
  [RUTAS_CONTENIDO.consejoDePadres]: {
    titulo: 'Consejo de Padres',
    descripcion: 'Representación de las familias en la vida institucional.',
  },
  [RUTAS_CONTENIDO.comiteConvivencia]: {
    titulo: 'Comité de convivencia escolar',
    descripcion: 'Instancia encargada de promover la convivencia y la ruta de atención.',
  },
  [RUTAS_CONTENIDO.personero]: {
    titulo: 'Personero o personera estudiantil',
    descripcion: 'Estudiante encargado de promover y defender los derechos del estudiantado.',
  },
  [RUTAS_CONTENIDO.representanteEstudiantes]: {
    titulo: 'Representante de estudiantes',
    descripcion: 'Vocería del estudiantado ante las instancias institucionales.',
  },
  [RUTAS_CONTENIDO.representanteGrupos]: {
    titulo: 'Representantes de grupo',
    descripcion: 'Estudiantes que representan a cada grupo ante la institución.',
  },
  [RUTAS_CONTENIDO.formatosDirectiva]: {
    titulo: 'Formatos de gestión directiva',
    descripcion: 'Formatos institucionales disponibles para la comunidad educativa.',
  },

  [RUTAS_CONTENIDO.planDeEstudios]: {
    titulo: 'Plan de estudios',
    descripcion: 'Áreas, intensidad horaria y organización académica por grados.',
  },
  [RUTAS_CONTENIDO.calendarioAcademico]: {
    titulo: 'Calendario académico',
    descripcion: 'Periodos académicos y fechas institucionales del año lectivo.',
  },
  [RUTAS_CONTENIDO.evaluacionInstitucional]: {
    titulo: 'Evaluación institucional',
    descripcion: 'Criterios de evaluación y seguimiento a los procesos institucionales.',
  },

  [RUTAS_CONTENIDO.escuelaDePadres]: {
    titulo: 'Escuela de padres',
    descripcion: 'Espacios de formación y acompañamiento para las familias.',
  },
  [RUTAS_CONTENIDO.proyectosTransversales]: {
    titulo: 'Proyectos transversales',
    descripcion: 'Proyectos pedagógicos que atraviesan las áreas del plan de estudios.',
  },
  [RUTAS_CONTENIDO.bienestarEstudiantil]: {
    titulo: 'Bienestar estudiantil',
    descripcion: 'Programas de apoyo y bienestar para el estudiantado.',
  },

  [RUTAS_CONTENIDO.presupuesto]: {
    titulo: 'Presupuesto',
    descripcion: 'Información presupuestal de la institución.',
  },
  [RUTAS_CONTENIDO.contratacion]: {
    titulo: 'Contratación',
    descripcion: 'Procesos de contratación de la institución.',
  },
  [RUTAS_CONTENIDO.recursosFisicos]: {
    titulo: 'Recursos físicos',
    descripcion: 'Sedes, aulas y recursos con los que cuenta la institución.',
  },

  [RUTAS_CONTENIDO.admisiones]: {
    titulo: 'Admisiones',
    descripcion: 'Proceso, requisitos y fechas de matrícula.',
  },
  [RUTAS_CONTENIDO.orientacionEscolar]: {
    titulo: 'Orientación Escolar',
    descripcion: 'Acompañamiento psicosocial para estudiantes y familias.',
  },
  [RUTAS_CONTENIDO.cronograma]: {
    titulo: 'Cronograma 2026',
    descripcion: 'Fechas clave del calendario académico y las actividades institucionales.',
  },
  [RUTAS_CONTENIDO.contacto]: {
    titulo: 'Contáctenos',
    descripcion: 'Canales de comunicación con la institución.',
  },
};
