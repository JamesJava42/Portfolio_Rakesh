import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,

  imports: [CommonModule,FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
   contact = {
    name: '',
    email: '',
    message: ''
  };
messageSent: any;

 onSubmit(form: any) {
    const templateParams = {
      from_name: this.contact.name,
      from_email: this.contact.email,
      message: this.contact.message
    };

    emailjs.send('service_rx53h5o', 'template_u6hiy9s', templateParams, 'nBRoXCacUR-jb2uS7')
      .then(() => {
        alert('Message sent!');
        this.contact = { name: '', email: '', message: '' };
        form.reset();
      })
      .catch(err => {
        alert('Failed to send message. Try again.');
        console.error(err);
      });
  }

}
