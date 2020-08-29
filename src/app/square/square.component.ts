import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: ` <button> <p> {{ value }} </p> </button>`,
  styles: [
    'button{ height: 200px; width:200px; align: center; font-size: 75px; text-align: center}'
  ]
})
export class SquareComponent {

  constructor() { }
    @Input() value: "X" | "O";
}
