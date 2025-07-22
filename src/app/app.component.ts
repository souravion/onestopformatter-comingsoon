import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComingSoonComponent } from "./components/coming-soon/coming-soon.component";
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [ComingSoonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private doc: Document,
    public titleService: Title, private metaService: Meta
  ){
    
  }
  title = 'onestopformatter.dev';

  ngOnInit(): void {
    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "DevConvert",
      "url": "https://devconvert.com",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "All",
      "description": "Convert JSON to Dart, JSON Viewer, XML to JSON, and more developer tools online for free."
    });
    this.renderer.appendChild(this.doc.head, script);

    
    this.titleService.setTitle('Coming Soon | DevConvert – Smart JSON & Data Tools');

    this.metaService.addTags([
      { name: 'description', content: 'We’re building DevConvert — a suite of smart, developer-focused tools like JSON to TypeScript, viewers, beautifiers, and converters. Be the first to explore it!' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Coming Soon | DevConvert – Smart JSON & Data Tools' },
      { property: 'og:description', content: 'We’re building DevConvert — a suite of smart, developer-focused tools like JSON to TypeScript, viewers, beautifiers, and converters. Be the first to explore it!' },
      { property: 'og:image', content: 'https://yourdomain.com/assets/coming-soon-preview.png' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://yourdomain.com/' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Coming Soon | DevConvert – Smart JSON & Data Tools' },
      { name: 'twitter:description', content: 'We’re building DevConvert — a suite of smart, developer-focused tools like JSON to TypeScript, viewers, beautifiers, and converters. Be the first to explore it!' },
      { name: 'twitter:image', content: 'https://yourdomain.com/assets/coming-soon-preview.png' }
    ]);
  }

}
