import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../shared/seo.service';

type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  bullets: string[];
  tags: string[];
};

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cv.html',
  styleUrl: './cv.scss',
})
export class CvComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setSeo({
      title: 'CV · Manuel Godoy',
      description:
        'Frontend Engineer focused on UI architecture, design systems, performance and production-ready delivery. Enterprise experience (Globant · Iberia).',
    });
  }

  header = {
    title: 'CV',
    name: 'Manuel Godoy',
    subtitle: 'Frontend Engineer · React / Angular · TypeScript · UI Focus',
    summary: [
      'Experiencia en producto high-traffic (Iberia.com) con Design Systems y Storybook.',
      'Fuerte foco en performance, calidad (testing) y UI escalable.',
      'Construcción y despliegue de proyectos propios (self-hosting, Docker, Nginx).',
    ],
  };

  highlights = [
    { label: '4+ años', value: 'Experiencia frontend' },
    { label: 'React + Angular', value: 'Stack principal' },
    { label: 'Design Systems', value: 'Storybook / UI components' },
    { label: 'Infra', value: 'Docker · Nginx · Cloudflare' },
  ];

  skills = [
    'TypeScript', 'JavaScript', 'Angular', 'React',
    'HTML', 'SCSS/CSS', 'RxJS',
    'Storybook', 'Design Systems',
    'Testing', 'Git', 'CI/CD',
    'Docker', 'Nginx', 'REST APIs',
  ];

  experience: Experience[] = [
    {
      role: 'Junior Web UI Developer',
      company: 'Globant · Cliente Iberia Airlines',
      period: 'Aug 2023 — Aug 2025',
      location: 'Madrid / Remote',
      bullets: [
        'Contribución a módulos de booking y ancillaries con impacto en revenue.',
        'Trabajo con Design System interno y Storybook en entorno Agile.',
        'Mejoras de UI, mantenimiento y evolutivos con TypeScript/React/Angular.',
      ],
      tags: ['React', 'Angular', 'TypeScript', 'Storybook', 'Agile', 'Testing'],
    },
    {
      role: 'Freelance Frontend Developer',
      company: 'Proyectos propios y clientes',
      period: '2021 — 2023',
      location: 'Madrid',
      bullets: [
        'Landing pages y frontends para negocios reales.',
        'Automatizaciones e integraciones (WhatsApp, formularios, etc.).',
        'Despliegue y mantenimiento (Nginx, Docker, Cloudflare).',
      ],
      tags: ['Frontend', 'UI', 'SEO', 'Docker', 'Nginx'],
    },
  ];
}