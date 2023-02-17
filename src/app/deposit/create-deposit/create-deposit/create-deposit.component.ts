import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { newDepositModel } from 'src/app/models/new-deposit.model';
import { DepositService } from '../../../services2/deposit/deposit.service';
import { DepositModule } from '../../deposit.module';

@Component({
  selector: 'app-create-deposit',
  templateUrl: './create-deposit.component.html',
  styleUrls: ['./create-deposit.component.scss']
})
export class CreateDepositComponent {
  depositForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private depositService: DepositService,
  

  ) {
    this.depositForm = this.formBuilder.group({
      accountId: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.depositForm.invalid) {
      return;
    }

    const deposit = new newDepositModel(
      this.depositForm.value.accountId,
      this.depositForm.value.amount
    );

    this.depositService.createDeposit(deposit).subscribe({
      next: (data) => { console.log(data) },
      error: (err) => { console.error(err) },
      complete: () => { console.info("completo") }
    });
  }
}
