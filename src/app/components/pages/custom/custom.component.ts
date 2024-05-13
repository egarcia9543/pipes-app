import { Component } from '@angular/core';
import { Color, Hero } from '../../../interfaces/hero.interface';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.css'
})
export class CustomComponent {
  public isUpper: boolean = false;
  public sortOption: keyof Hero | '' = '';

  public heroes: Hero[] = [
    { name: 'Antman', canFly: false, color: Color.red},
    { name: 'Superman', canFly: true, color: Color.blue },
    { name: 'Batman', canFly: false, color: Color.black },
    { name: 'Spiderman', canFly: false, color: Color.red},
    { name: 'Thor', canFly: true, color: Color.blue },
  ]

  public toggleCase(): void {
    this.isUpper = !this.isUpper;
  }

  public switchSortOption(option: keyof Hero): void {
    this.sortOption = option;
  }
}
