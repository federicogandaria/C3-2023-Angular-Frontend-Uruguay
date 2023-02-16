import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountInterface } from '../../interface/account.interface';

@Component({
  selector: 'app-new-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(private http: HttpClient ){}


  usuario! : AccountInterface


  ngOnInit() {
    this.getDataAccount();
  }

  getDataAccount(){


    const account = localStorage.getItem('customer');
  this.usuario = account ? JSON.parse(account) : null

  this.http.get(`http://localhost:3000/account/${this.usuario?.accountUser.customer.id}`).subscribe(
    data => {
      console.log(data)
      this.usuario = data as AccountInterface;
    },
    error => {
      console.error(error);
    }
  );

  localStorage.setItem('customer', JSON.stringify(this.usuario))


 return this.usuario

}
}

