import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { newDepositModel } from '../../models/new-deposit.model';
import { AccountInterface } from 'src/app/interfaces/Account.interface';

@Injectable({
  providedIn: 'root'
})
export class DepositService {

  constructor(private readonly httpClient:HttpClient) { }

  usuario! : AccountInterface

  createDeposit(deposit:newDepositModel){
                      //POR MEDIO DE ESTE METODO HTTP    CONECTAR AQUI,   ENVIAR AQUI
    return this.httpClient.post('http://localhost:3000/deposit/newDeposit', deposit.getData());

    //SI FUERA GET VA SIN FUNCION PORQUE SOLO VA A TRAER INFORMACION
    //return this.httpClient.delete('http://localhost:3000/deposit/15618948941);
    //return this.httpClient.put('http://localhost:3000/deposit/create', deposit.getData());
    //return this.httpClient.patch('http://localhost:3000/deposit/create', deposit.getData());

  }

showDeposit(deposit:newDepositModel){
  return this.httpClient.get('http://localhost:3000/deposit/:id');

}




getDataAccount(){


  const account = localStorage.getItem('customer');
this.usuario = account ? JSON.parse(account) : null

this.httpClient.get(`http://localhost:3000/deposit/${this.usuario?.customer.id}`).subscribe(
  data => {
    console.log(data)
return data
  },
  error => {
    console.error(error);
  }
);

localStorage.setItem('customer', JSON.stringify(this.usuario))

return this.usuario

}

ngOnInit() {
  this.getDataAccount();
}



}
