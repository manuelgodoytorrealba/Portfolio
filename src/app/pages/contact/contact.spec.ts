import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactComponent } from './contact';
import { SeoService } from '../../shared/seo.service';

describe('ContactComponent', () => {
  let fixture: ComponentFixture<ContactComponent>;

  const seoMock = {
    setSeo: vi.fn(),
  };

  beforeEach(async () => {
    vi.clearAllMocks();

    await TestBed.configureTestingModule({
      imports: [ContactComponent, RouterTestingModule],
      providers: [{ provide: SeoService, useValue: seoMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges(); // ngOnInit + render
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render main title', () => {
    const el = fixture.nativeElement as HTMLElement;
    const h1 = el.querySelector('h1');

    expect(h1).not.toBeNull();
    expect(h1!.textContent?.trim()).toBe('Contacto');
  });

  it('should call SeoService.setSeo on init', () => {
    expect(seoMock.setSeo).toHaveBeenCalledTimes(1);
    expect(seoMock.setSeo).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'Contacto · Manuel Godoy',
      })
    );
  });

  it('should render 3 contact cards from links array', () => {
    const el = fixture.nativeElement as HTMLElement;
    const cards = el.querySelectorAll('.contact-card');

    expect(cards.length).toBe(3);

    // títulos
    expect(el.textContent).toContain('LinkedIn');
    expect(el.textContent).toContain('GitHub');
    expect(el.textContent).toContain('Email');
  });

  it('should render download CV buttons with correct href', () => {
    const el = fixture.nativeElement as HTMLElement;

    const en = el.querySelector('a[href="/cv/Manuel_Godoy_CV_EN.pdf"][download]');
    const es = el.querySelector('a[href="/cv/Manuel_Godoy_CV_ES.pdf"][download]');

    expect(en).not.toBeNull();
    expect(es).not.toBeNull();
  });
});