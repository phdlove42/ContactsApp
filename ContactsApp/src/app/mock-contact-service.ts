import { Contact } from './contact';

export class MockContacts {
  contacts: Contact[] = [];
  constructor() {
    const contact1 = new Contact();
    contact1.id = 1;
    contact1.firstName = 'foo';
    contact1.lastName = 'bar';
    contact1.address = '1234 Street st';
    contact1.company = 'Kore Wireless';
    contact1.github = 'idk';
    contact1.profileImage = 'idk';

    const contact2 = new Contact();
    contact2.id = 2;
    contact2.firstName = 'foo';
    contact2.lastName = 'bar';
    contact2.address = '1234 Street st';
    contact2.company = 'Kore Wireless';
    contact2.github = 'idk';
    contact2.profileImage = 'idk';

    const contact3 = new Contact();
    contact3.id = 3;
    contact3.firstName = 'foo';
    contact3.lastName = 'bar';
    contact3.address = '1234 Street st';
    contact3.company = 'Kore Wireless';
    contact3.github = 'idk';
    contact3.profileImage = 'idk';

    const contact4 = new Contact();
    contact4.id = 4;
    contact4.firstName = 'foo';
    contact4.lastName = 'bar';
    contact4.address = '1234 Street st';
    contact4.company = 'Kore Wireless';
    contact4.github = 'idk';
    contact4.profileImage = 'idk';

    const contact5 = new Contact();
    contact5.id = 5;
    contact5.firstName = 'foo';
    contact5.lastName = 'bar';
    contact5.address = '1234 Street st';
    contact5.company = 'Kore Wireless';
    contact5.github = 'idk';
    contact5.profileImage = 'idk';

    const contact6 = new Contact();
    contact6.id = 6;
    contact6.firstName = 'foo';
    contact6.lastName = 'bar';
    contact6.address = '1234 Street st';
    contact6.company = 'Kore Wireless';
    contact6.github = 'idk';
    contact6.profileImage = 'idk';

    const contact7 = new Contact();
    contact7.id = 7;
    contact7.firstName = 'foo';
    contact7.lastName = 'bar';
    contact7.address = '1234 Street st';
    contact7.company = 'Kore Wireless';
    contact7.github = 'idk';
    contact7.profileImage = 'idk';

    const contact8 = new Contact();
    contact8.id = 8;
    contact8.firstName = 'foo';
    contact8.lastName = 'bar';
    contact8.address = '1234 Street st';
    contact8.company = 'Kore Wireless';
    contact8.github = 'idk';
    contact8.profileImage = 'idk';

    const contact9 = new Contact();
    contact9.id = 9;
    contact9.firstName = 'foo';
    contact9.lastName = 'bar';
    contact9.address = '1234 Street st';
    contact9.company = 'Kore Wireless';
    contact9.github = 'idk';
    contact9.profileImage = 'idk';

    const contact10 = new Contact();
    contact10.id = 10;
    contact10.firstName = 'foo';
    contact10.lastName = 'bar';
    contact10.address = '1234 Street st';
    contact10.company = 'Kore Wireless';
    contact10.github = 'idk';
    contact10.profileImage = 'idk';

    this.contacts.push(contact1);
    this.contacts.push(contact2);
    this.contacts.push(contact3);
    this.contacts.push(contact4);
    this.contacts.push(contact5);
    this.contacts.push(contact6);
    this.contacts.push(contact7);
    this.contacts.push(contact8);
    this.contacts.push(contact9);
    this.contacts.push(contact10);
  }
}
