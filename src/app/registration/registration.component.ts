import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  userFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.userFormGroup = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,

        ],
      ],
      mobile: this.formBuilder.array([
        formBuilder.control('', [
          Validators.required,
          Validators.pattern('(012||010||011|015)[0=0-9]{11}'),
        ]),
      ]),
      address: this.formBuilder.group({
        city: ['', [Validators.required]],
        postalPostal: ['', [Validators.required]],
        street: ['', [Validators.required]],
      }),
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get fullName() {
    return this.userFormGroup.get('fullName');
  }
  get email() {
    return this.userFormGroup.get('email');
  }
  get mobile() {
    return this.userFormGroup.get('mobile') as FormArray;
  }
  get address() {
    return this.userFormGroup.get('address');
  }
  get password() {
    return this.userFormGroup.get('password');
  }
  get confirmPassword() {
    return this.userFormGroup.get('confirmPassword');
  }

  ngOnInit(): void {}
}
