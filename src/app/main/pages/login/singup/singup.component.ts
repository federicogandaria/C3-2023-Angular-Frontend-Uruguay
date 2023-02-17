import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { Router } from '@angular/router';
import { newCustomerModel } from 'src/app/models/new-customer.model';

import { SingUpService } from '../../../services/login-service/singup.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss'],
})
export class singupComponent  implements OnInit {
  documentTypeId: string;
  document: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  myForm!: FormGroup;

  constructor(private readonly  singUpService:SingUpService , private router: Router,
    private fb: FormBuilder) {

    this.documentTypeId = '';
    this.document = '';
    this.fullName = '';
    this.email = '';
    this.phone = '';
    this.password = '';
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      document: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  sendData(): void {
    const user = new newCustomerModel(
      this.documentTypeId,
    this.myForm.value.document,
    this.myForm.value.fullName,
    this.myForm.value.email,
    this.myForm.value.phone,
    this.myForm.value.password
    );
console.log(user)
    this.singUpService.createUser(user).subscribe({
      next: token => {
        localStorage.setItem('token', "tokentest");

      },
      error: err => console.error(err),
      complete: () => {
        this.router.navigate(['**']);
      },
    });
  }
}
