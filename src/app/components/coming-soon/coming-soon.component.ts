import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-coming-soon',
  imports: [],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss'
})
export class ComingSoonComponent {
constructor(private titleService: Title, private metaService: Meta) {}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
   this.titleService.setTitle('Coming Soon | Onestopformatter.dev');

   this.metaService.addTags([
      { name: 'description', content: 'We are launching soon! Stay tuned for amazing tools and features on Onestopformatter.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'Onestopformatter Team' },
      { name: 'keywords', content: 'coming soon, developer tools, json viewer, utilities, productivity, Onestopformatter' },

    ]);
  }

}

