import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type ProjectLink = { label: string; url: string };
type Project = {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
  highlight?: string; // “Impact”, “SEO”, “Booking”, etc.
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
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
        'Aplicación web moderna construida con SvelteKit enfocada en catálogo tipo e-commerce. Implementa autenticación, rutas protegidas y arquitectura modular preparada para despliegue en producción.',
      stack: [
        'SvelteKit',
        'TypeScript',
        'Supabase',
        'SSR',
        'Docker',
        'Kubernetes',
        'Vercel'
      ],
      links: [
        {
          label: 'Live',
          url: 'https://dies-web.vercel.app/catalog'
        },
        {
          label: 'GitHub',
          url: 'https://github.com/manuelgodoytorrealba/dies-web'
        }
      ],
    },
    {
  title: 'Angular Portfolio SPA',
  subtitle: 'Standalone + SSR Architecture',
  highlight: 'Angular moderno',
  description:
    'SPA desarrollada con Angular standalone components y routing lazy-loaded. Arquitectura modular con layout shell, separación por páginas y estructura preparada para SSR e hidratación.',
  stack: [
    'Angular',
    'TypeScript',
    'Standalone Components',
    'Lazy Loading',
    'Routing',
    'SSR',
    'SCSS'
  ],
  links: [
    {
      label: 'GitHub',
      url: 'https://github.com/manuelgodoytorrealba/Portfolio'
    }
  ]
}
  ];
}