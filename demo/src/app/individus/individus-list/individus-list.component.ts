import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'individus-list',
  templateUrl: './individus-list.component.html',
  styles: []
})
export class IndividusListComponent implements OnInit {

  @Input() individus: any[];

  constructor() { }

  ngOnInit() {
  }

}
