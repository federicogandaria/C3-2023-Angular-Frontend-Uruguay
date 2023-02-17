import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDepositComponent } from './create-deposit/create-deposit/create-deposit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateDepositComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DepositModule { }
