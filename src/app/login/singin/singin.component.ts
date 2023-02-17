import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { AuthService } from '../../services/login-service/auth.service';
import { UserCredential } from 'firebase/auth';


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent {

  myForm!: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }


  login() {
    const email = this.myForm.value.email;
    const password = this.myForm.value.password;
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


  async onClick() {
    const userCredential: UserCredential = await this.authService.loginWithGoogle();
    const token: string = await userCredential.user?.getIdToken() ?? '';
    this.saveToken(token);
    console.log(token);
    this.router.navigate(['customer']);
  }

}


