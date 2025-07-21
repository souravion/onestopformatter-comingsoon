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
      { name: 'description', content: 'We are launching soon! Stay tuned for amazing tools and features on Onestopformatter.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'Onestopformatter Team' },
      { name: 'keywords', content: 'coming soon, developer tools, json viewer, utilities, productivity, Onestopformatter' },

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

