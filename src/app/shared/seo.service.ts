import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

type SeoConfig = {
  title: string;
  description: string;
  url?: string;     // opcional
  image?: string;   // opcional
};

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(private title: Title, private meta: Meta) {}

  setSeo(config: SeoConfig) {
    const image = config.image ?? '/og/og-image.jpg';

    this.title.setTitle(config.title);

    // Standard
    this.meta.updateTag({ name: 'description', content: config.description });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: image });

    // Twitter
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    // Opcional: url canónica (cuando tengas dominio)
    if (config.url) {
      this.meta.updateTag({ property: 'og:url', content: config.url });
    }
  }
}