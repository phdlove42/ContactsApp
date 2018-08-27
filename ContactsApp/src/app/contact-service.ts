import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { MockContacts } from './mock-contact-service';

@Injectable()
export class ContactService {

  contacts: Contact[];

  initContacts(): void {
    const mockContacts = new MockContacts();
    this.contacts = mockContacts.contacts;
  }

  getContacts() {
    if (this.contacts == null || this.contacts.length === 0) {
      this.initContacts();
    }
    return this.contacts;
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  removeContact(contact: Contact): void {
    this.contacts.filter((c) => c !== contact);
  }
}
