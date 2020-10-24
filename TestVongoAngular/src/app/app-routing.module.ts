import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthguardGuard} from './authguard.guard';


const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), canActivate : [AuthguardGuard] },
  { path: '**', redirectTo: 'auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
