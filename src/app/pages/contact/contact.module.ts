import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactSaveComponent } from './contact-save/contact-save.component';
import {ContactRoutingModule} from './contact-routing.module';
import {NgZorroAntdModule, NzEmptyModule, NzTableModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [ContactListComponent, ContactEditComponent, ContactSaveComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    NzEmptyModule,
    NzTableModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
