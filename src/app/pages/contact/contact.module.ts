import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactSaveComponent } from './contact-save/contact-save.component';
import {ContactRoutingModule} from './contact-routing.module';
import {NgZorroAntdModule, NzEmptyModule, NzTableModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {LoadingComponent} from "../../share/loading/loading.component";



@NgModule({
  declarations: [ContactListComponent, ContactEditComponent, ContactSaveComponent, LoadingComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    NzEmptyModule,
    NzTableModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ]
})
export class ContactModule { }
