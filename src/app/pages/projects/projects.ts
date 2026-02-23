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
      subtitle: 'Sneaker catalog / e-commerce',
      highlight: 'Stack moderno',
      description:
        'Catálogo e-commerce con backend en Supabase y despliegue en Vercel. Enfoque en UI moderna, autenticación y estructura escalable.',
      stack: ['SvelteKit', 'TypeScript', 'Supabase', 'Vercel'],
      links: [
        { label: 'GitHub', url: '#' },
      ],
    },
  ];
}