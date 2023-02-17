import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword,signInWithPopup, GoogleAuthProvider} from '@angular/fire/auth';
import { AccountInterface } from '../../interfaces/Account.interface';



import { CustomerInterface } from '../../interfaces/Customer.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private auth:Auth) { }

register({email, password}: any){
  return createUserWithEmailAndPassword(this.auth, email, password);
}


loginWithGoogle(){
  return signInWithPopup(this.auth, new GoogleAuthProvider());
}

  get(url: string){
    return this.http.get<AccountInterface>(url)
}
post(url: string, data:{}){
  return this.http.post<CustomerInterface>(url, data)
}

}
