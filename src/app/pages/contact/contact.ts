import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../shared/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setSeo({
      title: 'Contacto · Manuel Godoy',
      description:
        'Open to Frontend opportunities (Madrid / Remote EU). Contact via email or LinkedIn. Download CV in English or Spanish.',
    });
  }

  links = [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/manuelgodoy1710/', subtitle: 'Perfil profesional actualizado' },
    { label: 'GitHub', url: 'https://github.com/manuelgodoytorrealba', subtitle: 'Repos y proyectos públicos' },
    { label: 'Email', url: 'mailto:manuelgodoytorrealba@icloud.com', subtitle: 'Contacto directo' },
  ];
}