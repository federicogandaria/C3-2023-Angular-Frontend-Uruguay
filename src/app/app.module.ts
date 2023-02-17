import { NgModule } from '@angular/core';
import {HttpClientModule} from  '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




//MODULOS:
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { AccountModule } from './account/account.module';
import { CustomerModule } from './customer/customer.module';
import { TransferModule } from './transfer/transfer.module';
import { DepositModule } from './deposit/deposit.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { LoginModule } from './login/login-module.module';


//SERVICIOS
import { TransferService } from './transfer/service/transfer.service';
import { DepositService } from './services/deposit-service/deposit.service';
import { CustomerService } from './services/customer-service/customer.service';
import { AccountService } from './services/account-service/account.service';
import { AuthService } from './services/login-service/auth.service';


//COMPONENTES
import { AppComponent } from './app.component';
import { MyNavComponent } from './shared/my-nav/my-nav.component';
import { HelpComponent } from './help/help.component';
import { MyFooterComponent } from './shared/my-footer/my-footer/my-footer.component';


import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';





@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
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
