import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { newCustomerModel } from 'src/app/models/new-customer.model';
import { IUsers } from '../../pages/login/interface/customer.interface';



@Injectable({
  providedIn: 'root',
})
export class SingUpService {
  constructor(private readonly httpClient: HttpClient) {}

  createUser(user: newCustomerModel): Observable<IUsers> {
    return this.httpClient.post<IUsers>(
      'http://localhost:3000/security/singup',
      user.getData()
    );
  }

  getAll(): Observable<IUsers> {
    return this.httpClient.get<IUsers>('http://localhost:3000/');
  }
}
