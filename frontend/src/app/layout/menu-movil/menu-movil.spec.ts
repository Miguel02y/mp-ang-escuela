import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { MenuMovil } from './menu-movil';
import type { ElementoNavegacion } from '../elementos-navegacion';

describe('MenuMovil', () => {
  let fixture: ComponentFixture<MenuMovil>;
  const elementos: ElementoNavegacion[] = [{ etiqueta: 'Inicio', ruta: '/' }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuMovil],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuMovil);
    fixture.componentRef.setInput('elementos', elementos);
  });

  afterEach(() => {
    document.body.style.overflow = '';
  });

  it('does not render the drawer when closed', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.mobile-nav')).toBeNull();
  });

  it('renders the drawer and locks body scroll when open', () => {
    fixture.componentRef.setInput('abierto', true);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.mobile-nav')).toBeTruthy();
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('closes on backdrop click and unlocks scroll', () => {
    fixture.componentRef.setInput('abierto', true);
    fixture.detectChanges();

    const backdrop: HTMLElement = fixture.nativeElement.querySelector('.mobile-nav-backdrop');
    backdrop.click();
    fixture.detectChanges();

    expect(fixture.componentInstance.abierto()).toBeFalse();
    expect(fixture.nativeElement.querySelector('.mobile-nav')).toBeNull();
    expect(document.body.style.overflow).toBe('');
  });

  it('closes on Escape', () => {
    fixture.componentRef.setInput('abierto', true);
    fixture.detectChanges();

    const drawer: HTMLElement = fixture.nativeElement.querySelector('.mobile-nav');
    drawer.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    fixture.detectChanges();

    expect(fixture.componentInstance.abierto()).toBeFalse();
  });
});
