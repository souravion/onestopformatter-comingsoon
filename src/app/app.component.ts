import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComingSoonComponent } from "./components/coming-soon/coming-soon.component";

@Component({
  selector: 'app-root',
  imports: [ComingSoonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'onestopformatter.dev';
}
