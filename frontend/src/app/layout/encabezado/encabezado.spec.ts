import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Encabezado } from './encabezado';

describe('Encabezado', () => {
  let fixture: ComponentFixture<Encabezado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Encabezado],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Encabezado);
    fixture.detectChanges();
  });

  it('creates the header', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('shows the institution name in the brand', () => {
    const brand: HTMLElement = fixture.nativeElement.querySelector('.navbar__brand-name');
    expect(brand.textContent).toContain('Centro Educativo Rural Peñalisa');
  });

  it('opens the mobile drawer when the hamburger button is clicked', () => {
    const toggle: HTMLButtonElement = fixture.nativeElement.querySelector('.navbar__toggle');
    toggle.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.mobile-nav')).toBeTruthy();
  });
});
