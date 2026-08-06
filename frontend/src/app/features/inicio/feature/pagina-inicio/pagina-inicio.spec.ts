import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, DeferBlockState, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PaginaInicio } from './pagina-inicio';

describe('PaginaInicio', () => {
  let fixture: ComponentFixture<PaginaInicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaInicio],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaInicio);
    fixture.detectChanges();
  });

  it('renders the sections that are eager (portada, accesos rápidos, quiénes somos)', () => {
    const host: HTMLElement = fixture.nativeElement;
    expect(host.querySelector('app-portada')).toBeTruthy();
    expect(host.querySelector('app-accesos-rapidos')).toBeTruthy();
    expect(host.querySelector('app-quienes-somos')).toBeTruthy();
  });

  it('renders the deferred stats and news sections once triggered', async () => {
    const deferBlocks = await fixture.getDeferBlocks();
    for (const block of deferBlocks) {
      await block.render(DeferBlockState.Complete);
    }
    fixture.detectChanges();

    const host: HTMLElement = fixture.nativeElement;
    expect(host.querySelector('app-cifras-institucionales')).toBeTruthy();
    expect(host.querySelector('app-noticias-destacadas')).toBeTruthy();
  });
});
