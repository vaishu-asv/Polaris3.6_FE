import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { CreateWhatIfAnalysisComponent } from './create-what-if-analysis/create-what-if-analysis.component';
import { CreateBaseComponent } from './create-base/create-base.component';


@NgModule({
  declarations: [
    CreateWhatIfAnalysisComponent,
    CreateBaseComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ,	QuickUiModule,
]
})
export class ModulesModule { }
