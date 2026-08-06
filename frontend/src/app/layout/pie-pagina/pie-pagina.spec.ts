import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PiePagina } from './pie-pagina';

describe('PiePagina', () => {
  let fixture: ComponentFixture<PiePagina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiePagina],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PiePagina);
    fixture.detectChanges();
  });

  it('shows the current year in the legal line', () => {
    const legal: HTMLElement = fixture.nativeElement.querySelector('.site-footer__legal');
    expect(legal.textContent).toContain(String(new Date().getFullYear()));
  });
});
