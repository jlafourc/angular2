import { Component, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'individus-list',
  templateUrl: './individus-list.component.html',
  styles: []
})
export class IndividusListComponent implements OnInit {

  @Input() individus: any[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoDetail(id: string) {
    this.router.navigate(['/individu-detail', id]);
  }

}
