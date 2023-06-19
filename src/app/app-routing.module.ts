import { AuthenticationGuard } from './shared/guards/authentication.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule),canActivate: [AuthenticationGuard]},

  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule),canActivate: [AuthenticationGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
