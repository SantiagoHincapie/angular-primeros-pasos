import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.components.html',
})
export class CounterComponent {
  public counter: number = 0;

  suma = () => {
    this.counter += 1;
  };
  resta(): void {
    //value = this.counter;
    //this.counter = value - 1;
    this.counter -= 1;
  }
  reset(): void {
    this.counter = 10;
  }
}
