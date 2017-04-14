import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Route } from '@angular/router'

import { AppComponent } from './app.component';
import { IndividusComponent } from './individus/individus.component';
import { IndividusListComponent } from './individus/individus-list/individus-list.component';
import { ROUTES } from './app.routes';
import {IndividusService} from './individus/individus.service';
import { IndividuDetailComponent } from './individus/individu-detail/individu-detail.component';
import { Error404Component } from './error404/error404.component';
import {IndividuDetailGuard} from "./individus/individu-detail.guard";
import { IndividuAjoutComponent } from './individus/individu-ajout/individu-ajout.component';
import { MenuComponent } from './menu/menu.component';




@NgModule({
  declarations: [
    AppComponent,
    IndividusComponent,
    IndividusListComponent,
    IndividuDetailComponent,
    Error404Component,
    IndividuAjoutComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [IndividusService, IndividuDetailGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }


