import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: ` <button nbButton hero status="primary"> <p>{{ value }}</p> </button>`,
  styles: [
    'button{ height: 195px; width:195px; align: center;}',
    'p{color: black;font-size: 75px}'
  ]
})
export class SquareComponent {

  constructor() { }
    @Input() value: string;
}
