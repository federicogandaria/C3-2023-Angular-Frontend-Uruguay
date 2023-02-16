import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent {

  myForm!: FormGroup;

constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {

  this.myForm = this.formBuilder.group({
    name: '',
    email: '',
  });
}


public email:string = "";
public password:string = "";


ngOnInit() {
  this.myForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
}

login(email: string, password: string) {
  this.doLogin(email, password);
}

doLogin(email: string, password: string) {
  this.authService.post('http://localhost:3000/security/singin', {
    email: email,
    password: password
  }).subscribe(res => {
    const token = res.token;
    this.saveToken(token);
  }, error => {
    console.error('Incorrecto');
  });
}

saveToken(token: string) {
  const decoded: {} = jwtDecode(token);
  console.log(decoded);
  if (token && typeof token === 'string') {
    localStorage.setItem('token', token);
    localStorage.setItem('customer', JSON.stringify(decoded));
  } else {
    console.error('Token inválido');
  }
}





  formLogin = this.formBuilder.group({
    username: [''],
    password: [''],
  });



}

