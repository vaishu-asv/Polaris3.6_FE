import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NotesComponent } from './notes/notes.component';
import { CommentsComponent } from './comments/comments.component';
import { ShareComponent } from './share/share.component';
import { ActualDataDashBoardComponent } from './actual-data-dash-board/actual-data-dash-board.component';
import { BaseLineListFinalComponent } from './base-line-list-final/base-line-list-final.component';
import { BaselineCreationOrComponent } from './baseline-creation-or/baseline-creation-or.component';


@NgModule({
  declarations: [
    NotesComponent,
    CommentsComponent,
    ShareComponent,
    ActualDataDashBoardComponent,
    BaseLineListFinalComponent,
    BaselineCreationOrComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ,	QuickUiModule,
]
})
export class CoreModule { }
