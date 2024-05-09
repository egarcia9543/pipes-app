import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  public menuItems: MenuItem[] = [
    {
      label: 'Pipes de Angular',
      icon: 'pi pi-filter',
      items: [
        {
          label: 'Textos y Fechas',
          icon: 'pi pi-align-left',
          routerLink: '/'
        },
        {
          label: 'Números',
          icon: 'pi pi-dollar',
          routerLink: 'numbers'
        },
        {
          label: 'No comunes',
          icon: 'pi pi-table',
          routerLink: 'uncommon'
        }
      ]
    },
    {
      label: 'Pipes personalizados',
      icon: 'pi pi-cog',

    }
  ]
}
