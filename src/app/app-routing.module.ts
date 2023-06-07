import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'modules', loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule)},

  { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule)},

  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},

  { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule)},

  { path: 'share', loadChildren: () => import('./share/share.module').then(m => m.ShareModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
