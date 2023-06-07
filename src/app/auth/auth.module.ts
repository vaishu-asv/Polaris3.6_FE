import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ,	QuickUiModule,
]
})
export class AuthModule { }
