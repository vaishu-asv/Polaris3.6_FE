import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { CreatewhatifComponent } from './createwhatif/createwhatif.component';


@NgModule({
  declarations: [
    CreatewhatifComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule
  ,	QuickUiModule,
]
})
export class ShareModule { }
