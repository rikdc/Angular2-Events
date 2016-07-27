import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <button (click)="increment()">+</button> <strong>{{counterValue}}</strong> <button (click)="decrement()">-</button>
  `
})
export class CounterComponent {
  @Input() counterValue = 0;
  @Output() counterChange = new EventEmitter();
  increment() {
    this.counterValue++;
    this.counterChange.emit({
      value: this.counterValue
    })
  }
  decrement() {
    this.counterValue--;
    this.counterChange.emit({
      value: this.counterValue
    })
  }
}