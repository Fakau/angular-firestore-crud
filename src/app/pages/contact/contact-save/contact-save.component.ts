import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

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
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  constructor(private fb: FormBuilder,
              private router: Router) {}

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
