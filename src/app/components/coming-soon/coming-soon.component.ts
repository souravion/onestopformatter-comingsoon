import { Component, } from '@angular/core';
import { Analytics, logEvent } from '@angular/fire/analytics';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-coming-soon',
  imports: [],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss'
})
export class ComingSoonComponent {
constructor(private toastr: ToastrService,private analytics:Analytics) {}

 ngOnInit(): void {

  }

logClick() {
  const checkboxes = document.querySelectorAll('input[name="role"]') as NodeListOf<HTMLInputElement>;
  const isAnyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

  if (isAnyChecked) {
    logEvent(this.analytics, 'button_click', {
      screen: 'Coming-soon',
      button: 'submit'
    });
    this.toastr.success('Submitted successfully!', 'Success');

    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
  } else {
    this.toastr.error('Please select at least one role.', 'Validation Error');
  }
}


}

