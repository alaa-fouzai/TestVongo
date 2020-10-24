import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PageComponent } from './page/page.component';
import {AjouterDonneeComponent} from './page/ajouter-donnee/ajouter-donnee.component';
import { ListeDonneeComponent } from './page/liste-donnee/liste-donnee.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ModifierDonneeComponent } from './page/modifier-donnee/modifier-donnee.component';


@NgModule({
  declarations: [AjouterDonneeComponent, PageComponent, ListeDonneeComponent, ModifierDonneeComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
