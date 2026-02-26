import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home';
import { SeoService } from '../../shared/seo.service';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;

  const seoMock = {
    setSeo: vi.fn(),
  };

  beforeEach(async () => {
    // ✅ Limpia llamadas entre tests 
    vi.clearAllMocks();

    await TestBed.configureTestingModule({
      imports: [HomeComponent, RouterTestingModule],
      providers: [{ provide: SeoService, useValue: seoMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges(); // ngOnInit + render
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render main h1 title', () => {
    const el = fixture.nativeElement as HTMLElement;
    const h1 = el.querySelector('h1');

    expect(h1).not.toBeNull();

    const text = h1!.textContent!.replace(/\s+/g, ' ').trim();
    expect(text).toContain('Frontend Engineer');
    expect(text).toContain('React, Svelte & Angular');
  });

  it('should call SeoService.setSeo on init', () => {
    expect(seoMock.setSeo).toHaveBeenCalledTimes(1);
    expect(seoMock.setSeo).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'Manuel Godoy · Frontend Engineer',
      })
    );
  });

  it('should render featured projects from array', () => {
    const el = fixture.nativeElement as HTMLElement;
    const cards = el.querySelectorAll('.featureCard');

    expect(cards.length).toBe(2);
    expect(el.textContent).toContain('MagiNails');
    expect(el.textContent).toContain('DIES');
  });
});