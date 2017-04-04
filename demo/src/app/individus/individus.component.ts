import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-individus',
  templateUrl: './individus.component.html',
  styles: []
})
export class IndividusComponent implements OnInit {
  individus = [
    { nom: "Doe" },
    { nom: "Foo" }
  ]

  constructor() { }

  ngOnInit() {
  }

}
