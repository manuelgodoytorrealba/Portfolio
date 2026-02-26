import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ShellComponent } from './shell';

describe('ShellComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ShellComponent,
        RouterTestingModule, // ✅ provee ActivatedRoute/Router/etc
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ShellComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render top nav links and outlet', () => {
    const fixture = TestBed.createComponent(ShellComponent);
    fixture.detectChanges();

    const el = fixture.nativeElement as HTMLElement;

    expect(el.querySelector('header.topbar')).not.toBeNull();
    expect(el.querySelector('.logo')?.textContent).toContain('Manuel Godoy');

    const links = Array.from(el.querySelectorAll('nav a')).map(a =>
      a.textContent?.trim()
    );

    expect(links).toContain('Home');
    expect(links).toContain('CV');
    expect(links).toContain('Proyectos');
    expect(links).toContain('Contacto');

    expect(el.querySelector('router-outlet')).not.toBeNull();
  });
});