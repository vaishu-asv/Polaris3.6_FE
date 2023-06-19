import { AuthenticationGuard } from './guards/authentication.guard';
import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';


@NgModule({
  providers: [
    AuthenticationGuard
  ],
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule
  ,	QuickUiModule,
]
})
export class SharedModule { }
