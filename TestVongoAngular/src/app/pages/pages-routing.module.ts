import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AjouterDonneeComponent} from './page/ajouter-donnee/ajouter-donnee.component';
import {PageComponent} from './page/page.component';
import {ListeDonneeComponent} from './page/liste-donnee/liste-donnee.component';
import {ModifierDonneeComponent} from './page/modifier-donnee/modifier-donnee.component';


const routes: Routes = [{
  path: '', component: PageComponent, children: [
    {path: 'liste', component: ListeDonneeComponent },
    {path: 'ajouter', component: AjouterDonneeComponent },
    {path: 'modifier', component: ModifierDonneeComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
