import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent {
  public name: string = 'iron man';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  get heroeDescription(): string {
    return `${this.name} - ${this.age}`;
  }
  changeHeroe(heroe: string): void {
    this.name = heroe;
  }

  changeAge(n: number): void {
    this.age = n;
  }
  resetForm(): void {
    this.name = 'iron man';
    this.age = 45;
  }
}
