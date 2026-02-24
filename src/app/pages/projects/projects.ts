import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../shared/seo.service';

type ProjectLink = { label: string; url: string };
type Project = {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
  highlight?: string;
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setSeo({
      title: 'Proyectos · Manuel Godoy',
      description:
        'Selected work: MagiNails (booking + WhatsApp), DIES (SvelteKit + Supabase + admin dashboard), Angular Portfolio SPA (standalone + SSR).',
    });
  }

  projects: Project[] = [
    {
      title: 'MagiNails',
      subtitle: 'Booking system + WhatsApp flow',
      highlight: 'Producto real',
      description:
        'Sistema de reservas con flujo por pasos, disponibilidad y generación automática de mensaje para WhatsApp. Enfocado en SEO local y performance.',
      stack: ['JavaScript', 'HTML', 'CSS'],
      links: [
        { label: 'Live', url: 'https://maginails.com' },
        { label: 'GitHub', url: 'https://github.com/manuelgodoytorrealba/MagiNails' },
      ],
    },
    {
      title: 'DIES',
      subtitle: 'Sneaker Catalog Platform',
      highlight: 'Arquitectura moderna',
      description:
        'Plataforma construida con SvelteKit + Supabase con autenticación y SSR. Incluye panel admin para subir/editar productos y dashboard básico para estadísticas de leads.',
      stack: ['SvelteKit', 'TypeScript', 'Supabase', 'SSR', 'Docker', 'Kubernetes', 'Vercel'],
      links: [
        { label: 'Live', url: 'https://dies-web.vercel.app/catalog' },
        { label: 'GitHub', url: 'https://github.com/manuelgodoytorrealba/dies-web' },
      ],
    },
    {
      title: 'Angular Portfolio SPA',
      subtitle: 'Standalone + SSR Architecture',
      highlight: 'Angular moderno',
      description:
        'SPA con componentes standalone y routing lazy-loaded. Arquitectura modular con layout shell, páginas separadas y configuración preparada para SSR e hidratación.',
      stack: ['Angular', 'TypeScript', 'Standalone Components', 'Lazy Loading', 'Routing', 'SSR', 'SCSS'],
      links: [{ label: 'GitHub', url: 'https://github.com/manuelgodoytorrealba/Portfolio' }],
    },
  ];

  get projectsCount(): number {
    return this.projects.length;
  }
}