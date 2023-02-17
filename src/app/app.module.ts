import { NgModule } from '@angular/core';
import {HttpClientModule} from  '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { MaterialModule } from './material/material.module';
import { AccountModule } from './account/account.module';
import { CustomerModule } from './customer/customer.module';
import { DepositModule } from './deposit/deposit.module';
import { TransferModule } from './transfer/transfer.module';
import { AuthService } from './login/services/auth.service';
import { AccountService } from './account/service/account.service';
import { DepositService } from './deposit/service/deposit.service';
import { TransferService } from './transfer/service/transfer.service';
import { CustomerService } from './customer/service/customer.service';
import { MyNavComponent } from './shared/my-nav/my-nav.component';



import { MyTableComponent } from './my-table/my-table.component';

import { HelpComponent } from './help/help.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoginModule } from './login/login-module.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { SharedModule } from './shared/shared.module';
import { MyFooterComponent } from './shared/my-footer/my-footer/my-footer.component';





@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyTableComponent,
    HelpComponent,
    MyFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    MaterialModule,
    SharedModule,
    LoginModule,
    AccountModule,
    CustomerModule,
    DepositModule,
    TransferModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [AuthService,AccountService,DepositService,TransferService,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
