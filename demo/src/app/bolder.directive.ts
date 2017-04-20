import {Directive, ElementRef, OnInit, Inject} from '@angular/core';
import {JQ_TOKEN} from "./app.module";

@Directive({
  selector: '[bolder]'
})
export class BolderDirective implements OnInit {

  ngOnInit(): void {
    this.ref.nativeElement.classList.add('bolder');
    //this.$.click(this.ref.nativeElement, () => { alert('Waaazzzaaa !')});
  }


  constructor(private ref: ElementRef
    //, @Inject(JQ_TOKEN) private $: any
  ) { }



}
