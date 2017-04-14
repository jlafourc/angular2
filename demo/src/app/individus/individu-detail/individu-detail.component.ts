import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IndividusService} from "../individus.service";
import {Individu} from "../individu";

@Component({
  selector: 'app-individu-detail',
  templateUrl: './individu-detail.component.html',
  styleUrls: ['./individu-detail.component.css']
})
export class IndividuDetailComponent implements OnInit {

  individu: Individu;

  constructor(public route: ActivatedRoute, public individuService: IndividusService) {
  }

  ngOnInit() {
    this.individu = this.individuService.findById(this.route.snapshot.params['id']);

  }

}
