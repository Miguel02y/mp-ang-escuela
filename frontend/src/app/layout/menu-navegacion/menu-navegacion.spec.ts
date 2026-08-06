import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { MenuNavegacion } from './menu-navegacion';
import type { ElementoNavegacion } from '../elementos-navegacion';

describe('MenuNavegacion', () => {
  let fixture: ComponentFixture<MenuNavegacion>;
  const elementos: ElementoNavegacion[] = [
    { etiqueta: 'Inicio', ruta: '/' },
    {
      etiqueta: 'La Institución',
      hijos: [{ etiqueta: 'Misión y Visión', ruta: '/institucion/mision-vision' }],
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuNavegacion],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuNavegacion);
    fixture.componentRef.setInput('elementos', elementos);
    fixture.detectChanges();
  });

  it('renders one entry per top-level item', () => {
    const links = fixture.nativeElement.querySelectorAll('.nav-link');
    expect(links.length).toBe(2);
  });

  it('opens the submenu on click and marks the trigger as expanded', () => {
    const trigger: HTMLButtonElement = fixture.nativeElement.querySelector(
      '.nav-link--trigger',
    );

    expect(trigger.getAttribute('aria-expanded')).toBe('false');

    trigger.click();
    fixture.detectChanges();

    expect(trigger.getAttribute('aria-expanded')).toBe('true');
    expect(document.querySelector('.nav-submenu')).toBeTruthy();

    trigger.click();
    fixture.detectChanges();

    expect(trigger.getAttribute('aria-expanded')).toBe('false');
  });

  it('renders the children of the submenu once opened', () => {
    const trigger: HTMLButtonElement = fixture.nativeElement.querySelector(
      '.nav-link--trigger',
    );

    trigger.click();
    fixture.detectChanges();

    const submenu = document.querySelector('.nav-submenu');
    expect(submenu?.textContent).toContain('Misión y Visión');
  });
});
