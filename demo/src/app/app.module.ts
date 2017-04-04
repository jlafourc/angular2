import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Route } from '@angular/router'

import { AppComponent } from './app.component';
import { IndividusComponent } from './individus/individus.component';
import { IndividusListComponent } from './individus/individus-list/individus-list.component';


const ROUTES: Route[] = [
  {
    path: 'individus',
    component: IndividusComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    IndividusComponent,
    IndividusListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


