import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinginComponent } from './singin/singin.component';


import { SingOutComponent } from './sing-out/sing-out.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { singupComponent } from './singup/singup.component';
import { MaterialModule } from 'src/app/tools/material/material.module';




@NgModule({
  declarations: [
    SinginComponent,
    singupComponent,
    SingOutComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
