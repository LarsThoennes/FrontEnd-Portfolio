import { HttpClient } from '@angular/common/http';
import { Component, Input, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterSectionComponent } from '../../shared/Componets/footer-section/footer-section.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-section',
  standalone: true,
  imports: [RouterModule, FormsModule, FooterSectionComponent, CommonModule],
  templateUrl: './email-section.component.html',
  styleUrl: './email-section.component.scss'
})
export class EmailSectionComponent{
  @Input() linkTarget: string = '';

  http = inject(HttpClient);


  contactData = {
    name: "",
    email: "",
    message: "",
    privacyPolice: false,
  }

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

  sendMessage() {
    const emailSection = document.querySelector('#emailForm')!;
    const sendEmail = document.querySelector('#emailSentContainer')!;
    const email = document.querySelector('#email')!;
    const span = document.querySelector('#span')!;
    emailSection.classList.add('d-none');
    email.classList.add('d-none');
    span.classList.add('d-none');
    sendEmail.classList.remove('d-none');
    sendEmail.classList.add('email-sent-container');
  }

  inputInformation(id: string) {
    const name = 'name';
    const email = 'email';
    const message = 'message';
    const checkbox = 'checkbox';

    const nameInformation = document.querySelector('#nameInformationContainer')!;
    const emailInformation = document.querySelector('#emailInformationContainer')!;
    const messageInformation = document.querySelector('#messageInformationContainer')!;
    const checkboxInformation = document.querySelector('#checkboxInformationContainer')!;

    nameInformation.classList.add('d-none');
    emailInformation.classList.add('d-none');
    messageInformation.classList.add('d-none');
    checkboxInformation.classList.add('d-none');

    if(id == name) {
      nameInformation.classList.remove('d-none')
      nameInformation.classList.add('information-container');

      setTimeout(() => {
        nameInformation.classList.add('d-none');
        nameInformation.classList.remove('information-container');
      }, 6000);
    }

    if(id == email) {
      emailInformation.classList.remove('d-none');
      emailInformation.classList.add('information-container');

      setTimeout(() => {
       emailInformation.classList.add('d-none');
       emailInformation.classList.remove('information-container');
      }, 6000);
    }

     if(id == message) {
       messageInformation.classList.remove('d-none')
       messageInformation.classList.add('information-container');

      setTimeout(() => {
         messageInformation.classList.add('d-none');
         messageInformation.classList.remove('information-container');
      }, 6000);
     }

     if(id == checkbox) {
      checkboxInformation.classList.remove('d-none')
      checkboxInformation.classList.add('information-container');

      setTimeout(() => {
        checkboxInformation.classList.add('d-none');
        checkboxInformation.classList.remove('information-container');
      }, 6000);
    }
    }
  }
