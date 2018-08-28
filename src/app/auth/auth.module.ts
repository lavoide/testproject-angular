import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {AuthRouterModule} from './auth-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRouterModule
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
