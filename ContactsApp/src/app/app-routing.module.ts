import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactAddComponent } from './contact-add/contact-add.component';

const appRoutes: Routes = [
  {
    path: 'contacts',
    component: ContactsListComponent,
    data: { title: 'Contacts' }
  },
  {
    path: 'contacts/create',
    component: ContactAddComponent,
    data: { title: 'Create Contact' }
  },
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
