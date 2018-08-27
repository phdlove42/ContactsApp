export class Contact {
  id = 0;
  firstName = '';
  lastName = '';
  address = '';
  company = '';
  github = '';
  profileImage: any = '';
  constructor() {}

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
