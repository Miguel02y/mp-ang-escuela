export type BloqueContenido =
  | { readonly tipo: 'parrafo'; readonly texto: string }
  | { readonly tipo: 'lista'; readonly titulo?: string; readonly items: readonly string[] };

export interface Contenido {
  readonly titulo: string;
  readonly descripcion: string;
  /** Sin bloques, la página se muestra como pendiente de publicación. */
  readonly bloques?: readonly BloqueContenido[];
}
