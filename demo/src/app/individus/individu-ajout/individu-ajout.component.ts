import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-individu-ajout',
  templateUrl: './individu-ajout.component.html',
  styles: ['input.ng-invalid.ng-dirty { border: 1px solid red}']
})
export class IndividuAjoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ajouter(form: any) {
    console.log(form.value);
  }

}
