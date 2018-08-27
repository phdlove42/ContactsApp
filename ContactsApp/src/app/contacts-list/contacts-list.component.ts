import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact-service';
import { Contact } from 'src/app/contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contactService: ContactService;
  contacts: Contact[];
  constructor(service: ContactService) {
    this.contactService = service;
   }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
   }
}
