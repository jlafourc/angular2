import { Component, OnInit } from '@angular/core';
import {IndividusService} from "../individus.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-individu-ajout',
  templateUrl: './individu-ajout.component.html',
  styles: ['input.ng-invalid.ng-dirty { border: 1px solid red}']
})
export class IndividuAjoutComponent implements OnInit {

  constructor(private individuService: IndividusService, private router: Router) { }

  ngOnInit() {
  }

  ajouter(form: any) {
    console.log(form.value)
    this.individuService.ajouter(form.value.infos.nom, form.value.infos.prenom);
    this.router.navigate(['/individus']);
  }

}
