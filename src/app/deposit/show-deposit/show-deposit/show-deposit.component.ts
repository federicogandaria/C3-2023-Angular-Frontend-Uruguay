import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DepositInterface } from '../../../interfaces/Deposit.interface';

@Component({
  selector: 'app-show-deposit',
  templateUrl: './show-deposit.component.html',
  styleUrls: ['./show-deposit.component.scss']
})
export class ShowDepositComponent {

  constructor(private http: HttpClient ){}

  deposito! : DepositInterface

  ngOnInit() {
    this.getDataDeposit();
  }

  getDataDeposit(){


    const depo = localStorage.getItem('customer');
  this.deposito = depo? JSON.parse(depo) : null

  this.http.get(`http://localhost:3000/deposit/c6a3c8d8-08db-47c5-84e6-042e08e9b4de`).subscribe(
    data => {
      console.log(data)
      this.deposito = data as DepositInterface;
    },
    error => {
      console.error(error);
    }
  );

  localStorage.setItem('customer', JSON.stringify(this.deposito))


 return this.deposito

}

}
