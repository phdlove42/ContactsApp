import { Component, OnInit } from '@angular/core';
import { CONTACTS } from '../mock-contacts';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts = CONTACTS;
  constructor() {}

  ngOnInit() {}
}
