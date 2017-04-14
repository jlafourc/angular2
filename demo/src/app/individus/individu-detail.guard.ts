import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {IndividusService} from './individus.service';

@Injectable()
export class IndividuDetailGuard implements CanActivate {

  constructor(private individuService: IndividusService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const individuExiste: boolean = !!this.individuService.findById(next.params['id']);
      if (!individuExiste) {
        this.router.navigate(['/404']);
      }
      return individuExiste;
  }
}
