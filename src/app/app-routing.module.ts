import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './main/pages/customer/new-customer/new-customer/customer.component';
import { singupComponent } from './main/pages/login/singup/singup.component';
import { SingOutComponent } from './main/pages/login/sing-out/sing-out.component';
import { LoginGuard } from './main/guards/guard.guard';
import { HelpComponent } from './main/pages/help/help.component';
import { CreateDepositComponent } from './main/pages/deposit/create-deposit/create-deposit/create-deposit.component';
import { SinginComponent } from './main/pages/login/singin/singin.component';
import { CreateAccountComponent } from './main/pages/account/create-account-type/create-account.component';


const routes: Routes = [
  { path: 'singup', component: singupComponent, },
  {path: "singin", component: SinginComponent},
  {path: "createaccount", component: CreateAccountComponent, canActivate: [LoginGuard]},
  {path: "createdeposit", component:CreateDepositComponent, canActivate: [LoginGuard]},
  {path: "help", component: HelpComponent},
  {path: "salir", component: SingOutComponent},
  { path: 'customer', component: CustomerComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
