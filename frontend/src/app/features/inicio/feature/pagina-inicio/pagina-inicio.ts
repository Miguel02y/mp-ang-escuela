import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccesosRapidos } from '../../ui/accesos-rapidos/accesos-rapidos';
import { CifrasInstitucionales } from '../../ui/cifras-institucionales/cifras-institucionales';
import { NoticiasDestacadas } from '../../ui/noticias-destacadas/noticias-destacadas';
import { Portada } from '../../ui/portada/portada';
import { QuienesSomos } from '../../ui/quienes-somos/quienes-somos';

@Component({
  selector: 'app-pagina-inicio',
  imports: [Portada, AccesosRapidos, QuienesSomos, CifrasInstitucionales, NoticiasDestacadas],
  templateUrl: './pagina-inicio.html',
  styleUrl: './pagina-inicio.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginaInicio {}
