import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepositService } from 'src/app/main/services/deposit-service/deposit.service';

import { DepositModule } from '../../deposit.module';





@Component({
  selector: 'app-show-deposit',
  templateUrl: './show-deposit.component.html',
  styleUrls: ['./show-deposit.component.scss']
})
export class ShowDepositComponent {
  depositForm: FormGroup;
  obtenerDeposito: DepositModule


  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private depositService: DepositService,
    private depositModule:DepositModule

  ) {
    this.depositForm = this.formBuilder.group({
      accountId: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.obtenerDeposito = this.depositService.getDataAccount();
  }

    const deposit = {
      accountId: this.depositForm.value.accountId,
      amount: this.depositForm.value.amount
    };

  //   this.depositService.createDeposit(deposit).subscribe({
  //     next: (data) => { console.log(data) },
  //     error: (err) => { console.error(err) },
  //     complete: () => { console.info("completo") }
  //   });
  // }
  }}
