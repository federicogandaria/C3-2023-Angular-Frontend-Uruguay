//MODULOS:
import { NgModule } from '@angular/core';
import {HttpClientModule} from  '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountModule } from './main/pages/account/account.module';
import { CustomerModule } from './main/pages/customer/customer.module';
import { DepositModule } from './main/pages/deposit/deposit.module';
import { LoginModule } from './main/pages/login/login-module.module';
import { TransferModule } from './main/pages/transfer/transfer.module';
import { MaterialModule } from './tools/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';

//SERVICIOS
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AccountService } from './main/services/account-service/account.service';
import { CustomerService } from './main/services/customer-service/customer.service';
import { DepositService } from './main/services/deposit-service/deposit.service';
import { AuthService } from './main/services/login-service/auth.service';
import { TransferService } from './main/services/transfer-service/transfer.service';


//COMPONENTES
import { AppComponent } from './app.component';
import { MyNavComponent } from './shared/my-nav/my-nav.component';
import { MyFooterComponent } from './shared/my-footer/my-footer/my-footer.component';
import { HelpComponent } from './main/pages/help/help.component';

//FIREBASE
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';


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
