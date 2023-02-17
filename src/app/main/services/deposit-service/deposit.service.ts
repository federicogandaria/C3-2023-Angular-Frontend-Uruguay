import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DepositInterface} from'../../interfaces/Deposit.interface';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { newDepositModel } from 'src/app/models/new-deposit.model';
import { AccountInterface } from '../../../main/pages/account/interface/account.interface';

@Injectable({
  providedIn: 'root'
})
export class DepositService {

  constructor(private readonly httpClient:HttpClient) { }

  usuario! : AccountInterface
  datos!: DepositInterface[]
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


// Obtener la cuenta de usuario desde el almacenamiento local
const account = localStorage.getItem('customer');
this.usuario = account ? JSON.parse(account) : null;
console.log(this.usuario);

// Realizar una solicitud GET a la API con el ID de la cuenta de usuario
this.httpClient.get(`http://localhost:3000/deposit/${this.usuario.accountUser.customer.id}`).subscribe(
  (data: any) => {
    console.log(data);
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

    // Guardar los datos obtenidos en una variable
    this.datos = data;
    this.setDeposit(this.datos)

    // Guardar los datos obtenidos en el almacenamiento local
    localStorage.setItem('lista', JSON.stringify(this.datos));
  },
  (error: any) => {
    console.error(error);
  }
);

// Devolver los datos obtenidos
return this.datos;


}

ngOnInit() {
  this.getDataAccount();
}

private Deposit: BehaviorSubject<DepositInterface[]> = new BehaviorSubject<DepositInterface[]>([]);

setDeposit(Deposit: DepositInterface[]) {
  this.Deposit.next(Deposit);
}

getTDeposit() {
  return this.Deposit.asObservable();
}

}
