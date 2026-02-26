import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProjectsComponent } from './projects';
import { SeoService } from '../../shared/seo.service';

describe('ProjectsComponent', () => {
  let fixture: ComponentFixture<ProjectsComponent>;

  const seoMock = {
    setSeo: vi.fn(),
  };

  beforeEach(async () => {
    vi.clearAllMocks();

    await TestBed.configureTestingModule({
      imports: [ProjectsComponent, RouterTestingModule],
      providers: [{ provide: SeoService, useValue: seoMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges(); // ngOnInit + render
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render title and meta with projectsCount', () => {
    const el = fixture.nativeElement as HTMLElement;

    expect(el.querySelector('h1')?.textContent?.trim()).toBe('Proyectos');

    const meta = el.querySelector('.projects-meta')?.textContent || '';
    expect(meta).toContain('3 proyectos publicados');
  });

  it('should call SeoService.setSeo on init', () => {
    expect(seoMock.setSeo).toHaveBeenCalledTimes(1);
    expect(seoMock.setSeo).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'Proyectos · Manuel Godoy',
      })
    );
  });

  it('should render one card per project', () => {
    const el = fixture.nativeElement as HTMLElement;
    const cards = el.querySelectorAll('article.project');

    expect(cards.length).toBe(3);

    // titles visibles
    expect(el.textContent).toContain('MagiNails');
    expect(el.textContent).toContain('DIES');
    expect(el.textContent).toContain('Angular Portfolio SPA');
  });

  it('should render highlight badges for highlighted projects', () => {
    const el = fixture.nativeElement as HTMLElement;
    const badges = Array.from(el.querySelectorAll('.badge')).map(b => b.textContent?.trim());

    //  data: MagiNails, DIES y Angular Portfolio SPA tienen highlight
    expect(badges.length).toBe(3);
    expect(badges).toContain('Producto real');
    expect(badges).toContain('Arquitectura moderna');
    expect(badges).toContain('Angular moderno');
  });

  it('should render correct primary link (first link) for each project', () => {
    const el = fixture.nativeElement as HTMLElement;
    const primaryButtons = el.querySelectorAll('article.project .actions a.btn.primary');

    // Cada proyecto tiene al menos 1 link => 3 botones primarios
    expect(primaryButtons.length).toBe(3);

    // Verifica hrefs clave
    const hrefs = Array.from(primaryButtons).map(a => (a as HTMLAnchorElement).getAttribute('href'));

    expect(hrefs).toContain('https://maginails.com');
    expect(hrefs).toContain('https://dies-web.vercel.app/catalog');
    expect(hrefs).toContain('https://github.com/manuelgodoytorrealba/Portfolio');
  });
});