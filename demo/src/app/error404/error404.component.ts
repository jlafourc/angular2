import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  template: `
    <h1>
      La page demandée n'existe pas
    </h1>
  `,
  styles: []
})
export class Error404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
