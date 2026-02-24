import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../shared/seo.service';

type ProjectLink = { label: string; url: string };
type FeaturedProject = {
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setSeo({
      title: 'Manuel Godoy · Frontend Engineer',
      description:
        'Angular · React · Svelte · TypeScript. Enterprise (Globant · Iberia) + real-world projects.',
    });
  }

  featuredProjects: FeaturedProject[] = [
    {
      title: 'MagiNails',
      description: 'Booking flow + WhatsApp. Enfocado en performance y SEO local.',
      tags: ['Booking', 'SEO', 'UI'],
      links: [
        { label: 'Live', url: 'https://maginails.com' },
        { label: 'GitHub', url: 'https://github.com/manuelgodoytorrealba/MagiNails' },
      ],
    },
    {
      title: 'DIES',
      description: 'Catálogo e-commerce con Supabase + despliegue moderno + panel admin.',
      tags: ['SvelteKit', 'Supabase', 'Vercel'],
      links: [
        { label: 'Live', url: 'https://dies-web.vercel.app/catalog' },
        { label: 'GitHub', url: 'https://github.com/manuelgodoytorrealba/dies-web' },
      ],
    },
  ];
}