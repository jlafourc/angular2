import {Route} from '@angular/router';
import {IndividusComponent} from './individus/individus.component';
import {IndividuDetailComponent} from './individus/individu-detail/individu-detail.component';
import {Error404Component} from './error404/error404.component';
import {IndividuDetailGuard} from './individus/individu-detail.guard';
import {IndividuAjoutComponent} from './individus/individu-ajout/individu-ajout.component';
export const ROUTES: Route[] = [
  {
    path: 'individus',
    component: IndividusComponent
  },
  {
    path: 'individu-detail/:id',
    component: IndividuDetailComponent,
    canActivate: [IndividuDetailGuard]
  },
  {
    path: 'individu-ajout',
    component: IndividuAjoutComponent
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '',
    pathMatch: 'prefix', //default
    redirectTo: 'individus'
  }
];
