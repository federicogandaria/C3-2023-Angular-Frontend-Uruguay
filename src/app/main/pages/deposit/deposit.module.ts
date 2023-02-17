import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDepositComponent } from './create-deposit/create-deposit/create-deposit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowDepositComponent } from './show-deposit/show-deposit/show-deposit.component';



@NgModule({
  declarations: [
    CreateDepositComponent,
    ShowDepositComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DepositModule { }
