import { Component, Input } from '@angular/core';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-square',
  template: ` 
    <button *ngIf="value == null" nbButton hero status="primary"> <p>{{ value }}</p> </button>
    <button *ngIf="value == 'X'" nbButton hero status="success"> <p>{{ value }}</p> </button>
    <button *ngIf="value == 'O'" nbButton hero status="danger"> <p>{{ value }}</p> </button>
  `,
  styles: [
    'button{ height: 195px; width:195px; align: center;}',
    'p{color: black;font-size: 75px}'
  ]
})
export class SquareComponent {
  constructor() { }
  
  @Input() value: string;

}

