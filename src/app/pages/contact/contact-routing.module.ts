import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactEditComponent} from './contact-edit/contact-edit.component';
import {ContactSaveComponent} from './contact-save/contact-save.component';
import {ContactService} from './contact.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  { path: '', component: ContactListComponent },
  { path: 'edit/:id', component: ContactEditComponent },
  { path: 'new', component: ContactSaveComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [ContactService]
})
export class ContactRoutingModule { }
