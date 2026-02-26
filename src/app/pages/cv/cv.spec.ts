import { TestBed, ComponentFixture } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CvComponent } from './cv';
import { SeoService } from '../../shared/seo.service';

describe('CvComponent', () => {
  let fixture: ComponentFixture<CvComponent>;

  const seoMock = {
    setSeo: vi.fn(),
  };

  beforeEach(async () => {
    vi.clearAllMocks();

    await TestBed.configureTestingModule({
      imports: [CvComponent],
      providers: [
        provideRouter([]), // RouterTestingModule está deprecated
        { provide: SeoService, useValue: seoMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CvComponent);
    fixture.detectChanges(); // ngOnInit + render
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should call SeoService.setSeo on init', () => {
    expect(seoMock.setSeo).toHaveBeenCalledTimes(1);
    expect(seoMock.setSeo).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'CV · Manuel Godoy',
      })
    );
  });

  it('should render header name and subtitle', () => {
    const el = fixture.nativeElement as HTMLElement;

    expect(el.querySelector('h1')?.textContent?.trim()).toBe('Manuel Godoy');
    expect(el.querySelector('.subtitle')?.textContent).toContain('Frontend Engineer');
  });

  it('should render summary list items', () => {
    const el = fixture.nativeElement as HTMLElement;
    const items = el.querySelectorAll('ul.summary li');

    expect(items.length).toBe(fixture.componentInstance.header.summary.length);

    // checks por contenido clave (menos frágil)
    expect(el.textContent).toContain('Iberia.com');
    expect(el.textContent).toContain('performance');
    expect(el.textContent).toContain('Docker');
  });

  it('should render highlights and skills', () => {
    const el = fixture.nativeElement as HTMLElement;

    // Highlights
    const kpis = el.querySelectorAll('.kpis .kpi');
    expect(kpis.length).toBe(fixture.componentInstance.highlights.length);
    expect(el.textContent).toContain('4+ años');
    expect(el.textContent).toContain('React + Angular');

    // ✅ Skills: seleccionar SOLO la card cuyo h2 es "Skills" para no contar tags de experiencia
    const gridCards = Array.from(el.querySelectorAll('.grid .card'));
    const skillsCard = gridCards.find(
      card => card.querySelector('h2')?.textContent?.trim() === 'Skills'
    );
    expect(skillsCard).toBeTruthy();

    const skillChips = skillsCard!.querySelectorAll('.chips .chip');
    expect(skillChips.length).toBe(fixture.componentInstance.skills.length);

    expect(skillsCard!.textContent).toContain('TypeScript');
    expect(skillsCard!.textContent).toContain('Angular');
    expect(skillsCard!.textContent).toContain('Docker');
  });

  it('should render experience items', () => {
    const el = fixture.nativeElement as HTMLElement;

    const items = el.querySelectorAll('.timeline .item');
    expect(items.length).toBe(fixture.componentInstance.experience.length);

    // contenido clave
    expect(el.textContent).toContain('Globant');
    expect(el.textContent).toContain('Freelance Frontend Developer');
    expect(el.textContent).toContain('Aug 2023 — Aug 2025');
  });

  it('should render CTA buttons with routerLink', () => {
    const el = fixture.nativeElement as HTMLElement;

    const projectsBtn = el.querySelector('a.btn.primary[routerlink="/projects"]');
    const contactBtn = el.querySelector('a.btn[routerlink="/contact"]');

    // En tests, Angular normaliza atributos; si esto falla, lo hacemos con DebugElement.
    expect(projectsBtn).not.toBeNull();
    expect(contactBtn).not.toBeNull();
  });
});