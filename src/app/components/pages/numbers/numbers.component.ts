import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.css'
})
export class NumbersComponent {
  public sales: number = 123456.789;
  public percentage: number = 0.482;
  public number: number = 8;
}
