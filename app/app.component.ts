import { Component } from '@angular/core';
import {CounterComponent} from './counter.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>Angular2 - Events</h1>
    <div class="app">
      <counter [counterValue]="myValue" (counterChange)="myValueChange($event);"></counter>
    </div>
  `,
  directives: [CounterComponent]
})
export class AppComponent { 
  public myValue:number = 2;
  myValueChange(event) {
    console.log(event);
  }
}