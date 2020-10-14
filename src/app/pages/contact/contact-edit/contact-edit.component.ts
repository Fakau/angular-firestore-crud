import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../contact.service';
import {IContact} from '../../../share/contact.model';

interface IAlertModel {
  type: string;
  message: string;
}
@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  alert: IAlertModel;
  validateForm!: FormGroup;
  contact: IContact;
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.service.update(this.validateForm.value).then(resp => {
      this.onShowList();
    }, error => {
      //
    });
  }

  constructor(private fb: FormBuilder,
              private router: Router,
              private actRoute: ActivatedRoute,
              private service: ContactService) {}

  ngOnInit(): void {
    this.contact = this.service.getContactToUpate(this.actRoute.snapshot.paramMap.get('id'));
    if(this.contact === null) {
      this.onShowList();
    }
    this.validateForm = this.fb.group({
      id: [this.contact.id],
      name: [this.contact.name, [Validators.required]],
      email: [this.contact.email, [Validators.email, Validators.required]],
      phoneNumber: [this.contact.phoneNumber, [Validators.required]]
    });
  }
  onShowList() {
    this.router.navigate(['contact']);
  }
  toast(type, message) {
    this.alert = new class implements IAlertModel {
      message: string;
      type: string;
    }
    setTimeout(() => {
      this.closeAlert();
    }, 3500);
  }
  closeAlert(){
    this.alert = null;
  }

}
