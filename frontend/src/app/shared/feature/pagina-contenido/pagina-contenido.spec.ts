import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PaginaContenido } from './pagina-contenido';
import type { Contenido } from '../../contenido/contenido.model';

describe('PaginaContenido', () => {
  let fixture: ComponentFixture<PaginaContenido>;

  const crear = async (contenido: Contenido) => {
    await TestBed.configureTestingModule({
      imports: [PaginaContenido],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaContenido);
    fixture.componentRef.setInput('contenido', contenido);
    fixture.detectChanges();
  };

  it('muestra el aviso de contenido pendiente cuando la página no tiene bloques', async () => {
    await crear({ titulo: 'Presupuesto', descripcion: 'Información presupuestal.' });

    const host: HTMLElement = fixture.nativeElement;
    expect(host.querySelector('.content-page__title')?.textContent).toContain('Presupuesto');
    expect(host.querySelector('.content-page__pending')).toBeTruthy();
    expect(host.querySelector('.content-page__body')).toBeNull();
  });

  it('renderiza párrafos y listas cuando la página tiene bloques', async () => {
    await crear({
      titulo: 'Admisiones',
      descripcion: 'Proceso de matrícula.',
      bloques: [
        { tipo: 'parrafo', texto: 'Las inscripciones se realizan en la secretaría.' },
        { tipo: 'lista', titulo: 'Requisitos', items: ['Registro civil', 'Certificado de notas'] },
      ],
    });

    const host: HTMLElement = fixture.nativeElement;
    expect(host.querySelector('.content-page__pending')).toBeNull();
    expect(host.querySelector('.content-page__paragraph')?.textContent).toContain('secretaría');
    expect(host.querySelector('.content-page__subtitle')?.textContent).toContain('Requisitos');
    expect(host.querySelectorAll('.content-page__list li').length).toBe(2);
  });
});
