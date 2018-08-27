import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact-service';
import { Contact } from 'src/app/contact';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent {
  contactService: any;

  constructor(
    service: ContactService,
    private router: Router,
    private route: ActivatedRoute) {
    this.contactService = service;
   }

  onSubmit() {
    // const test = new Contact();
    // this.contactService.addContact(test);
    this.router.navigate(['/contacts'])
    .then(() => {
      console.log('yup');
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
