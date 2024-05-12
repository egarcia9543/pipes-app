import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon',
  templateUrl: './uncommon.component.html',
  styleUrl: './uncommon.component.css'
})
export class UncommonComponent {
  //i18n Select
  public name: string = 'Arnold';
  public gender: 'male' | 'female' = 'male'
  public invitationMap = {
    'male': 'Conocerlo',
    'female': 'Conocerla'
  }

  changeClient():void {
    this.name = 'Alice';
    this.gender = 'female';
  }

  //i18n Plural
  public clients: string[] = ['Arnold', 'Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Helen', 'Ivan'];
  public clientsMap = {
    '=0': 'No hay clientes',
    '=1': 'Un cliente',
    'other': '# clientes'
  }

  deleteClient():void {
    this.clients.pop();
  };


  //Key-Value Pipe
  public person = {
    name: 'Arnold',
    age: 25,
    address: '1234 Main St'
  }

  //ASYNC Pipe
  public myObservableTimer = interval(2000);

  public promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data has arrived')
    }, 3000);
  });
}
