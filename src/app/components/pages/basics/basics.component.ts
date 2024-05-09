import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrl: './basics.component.css'
})
export class BasicsComponent {
  public textToTransform: string = 'Hello World';
  public customDate: Date = new Date();
}
