import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepositService } from 'src/app/main/services/deposit-service/deposit.service';
import { OnInit } from '@angular/core';
import { DepositModule } from '../../deposit.module';
import { DepositInterface} from'../../../../interfaces/Deposit.interface';




@Component({
  selector: 'app-show-deposit',
  templateUrl: './show-deposit.component.html',
  styleUrls: ['./show-deposit.component.scss']
})
export class ShowDepositComponent implements OnInit {
  depositForm: FormGroup;
  obtenerDeposito!: DepositInterface[]
  obtenerDeposit!: DepositInterface[]


  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private depositService: DepositService,
    private depositModule:DepositModule,

  ) {
    this.depositForm = this.formBuilder.group({
      accountId: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.depositService.getDataAccount();

    const listaDEpositos = localStorage.getItem('lista')
    this.obtenerDeposit = listaDEpositos?  JSON.parse(listaDEpositos) :
    console.log(this.obtenerDeposit[0])
    this.depositService.getTDeposit().subscribe((account) => {
      this.obtenerDeposit = account;
    })

  }



  //   this.depositService.createDeposit(deposit).subscribe({
  //     next: (data) => { console.log(data) },
  //     error: (err) => { console.error(err) },
  //     complete: () => { console.info("completo") }
  //   });
  // }
  }

