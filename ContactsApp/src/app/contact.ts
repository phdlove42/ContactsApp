export class Contact {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  company: string;
  github: string;
  profileImage: any;

  constructor(Id, FirstName, LastName, Address, Company, Github, ProfileImage) {
    this.id = Id;
    this.firstName = FirstName;
    this.lastName = LastName;
    this.address = Address;
    this.company = Company;
    this.github = Github;
    this.profileImage = ProfileImage;

  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
