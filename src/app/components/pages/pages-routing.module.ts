import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './basics/basics.component';
import { NumbersComponent } from './numbers/numbers.component';
import { UncommonComponent } from './uncommon/uncommon.component';
import { CustomComponent } from './custom/custom.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsComponent
  },
  {
    path: 'numbers',
    component: NumbersComponent
  },
  {
    path: 'uncommon',
    component: UncommonComponent
  },
  {
    path: 'custom',
    component: CustomComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
