import { Component, OnInit, Input } from '@angular/core';
import {IndividusService} from "./individus.service";
import {Individu} from "./individu";

@Component({
  selector: 'app-individus',
  templateUrl: './individus.component.html',
  styles: []
})
export class IndividusComponent implements OnInit {

  individus: Individu[];

  constructor(public individusService: IndividusService) { }

  ngOnInit() {
    this.individus = this.individusService.findAllIndividus();
    console.log(this.individus);
  }

}
