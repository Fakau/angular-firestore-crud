import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ContactService} from '../contact.service';

interface IAlertModel {
  type: string;
  message: string;
}
@Component({
  selector: 'app-contact-save',
  templateUrl: './contact-save.component.html',
  styleUrls: ['./contact-save.component.css']
})
export class ContactSaveComponent implements OnInit {
  alert: IAlertModel;
  validateForm!: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.service.create(this.validateForm.value).then(resp => {
      this.toast('success',  'success');
      this.validateForm.reset();
      this.onShowList();
    }, error => {
      this.toast('Success Tips',  'Success Tips');
    });
  }
  constructor(private fb: FormBuilder,
              private router: Router,
              private service: ContactService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      phoneNumber: [null, [Validators.required]]
    });
  }
  onShowList(){
    this.router.navigate(['contact']);
  }
  toast(type, message) {
    // tslint:disable-next-line:new-parens
    this.alert = new class implements IAlertModel {
      message: string;
      type: string;
    };
    setTimeout(() => {
      this.closeAlert();
    }, 3500);
  }
  closeAlert(){
    this.alert = null;
  }
}

