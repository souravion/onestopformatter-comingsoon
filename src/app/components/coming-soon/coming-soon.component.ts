import { Component, inject } from '@angular/core';
import { Analytics, logEvent } from '@angular/fire/analytics';
import { Meta, Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-coming-soon',
  imports: [],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss'
})
export class ComingSoonComponent {
constructor(private toastr: ToastrService,private analytics:Analytics, private titleService: Title, private metaService: Meta) {}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
   this.titleService.setTitle('Coming Soon | Onestopformatter.dev');

this.metaService.addTags([
  { property: 'og:title', content: 'Coming Soon | Onestopformatter.dev' },
  { property: 'og:description', content: 'We are launching soon!' },
  { property: 'og:url', content: 'https://onestopformatter.dev' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: 'Coming Soon | Onestopformatter.dev' },
  { name: 'twitter:description', content: 'We are launching soon!' },
]);

  }
logClick() {
  console.log("logClick")
    const checkboxes = document.querySelectorAll('input[name="role"]') as NodeListOf<HTMLInputElement>;
     console.log("checkboxes",checkboxes)
    const isAnyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
     console.log("isAnyChecked",isAnyChecked)
    if (isAnyChecked) {
      //At least one selected — proceed
      logEvent(this.analytics, 'button_click', {
      screen: 'Coming-soon',
      button: 'submit'
    });
    } else {
      this.toastr.error('Please select at least one role.', 'Validation Error');
    }
  }

}

