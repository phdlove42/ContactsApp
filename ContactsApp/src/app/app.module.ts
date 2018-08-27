import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsEditComponent } from './contacts-edit/contacts-edit.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact-service';

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    ContactsEditComponent,
    ContactsDetailComponent,
    PageNotFoundComponent,
    ContactAddComponent,
    ContactComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule {}
