import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrl: './basics.component.css'
})
export class BasicsComponent {
  public textToTransform: string = 'Hello World';
  public customDate: Date = new Date();
  public lowerCaseWord: string = '';
  public upperCaseWord: string = '';
  public titleCaseWord: string = '';

  constructor() { };

  setWords(e: Event) {
    const target = e.target as HTMLInputElement;

    if (target.name === 'lowerCaseWord') {
      this.lowerCaseWord = target.value;
    } else if (target.name === 'upperCaseWord') {
      this.upperCaseWord = target.value;
    } else if (target.name === 'titleCaseWord') {
      this.titleCaseWord = target.value;
    }
  }
}
