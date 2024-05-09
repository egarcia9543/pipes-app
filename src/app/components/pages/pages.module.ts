import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { BasicsComponent } from './basics/basics.component';
import { UncommonComponent } from './uncommon/uncommon.component';
import { NumbersComponent } from './numbers/numbers.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    BasicsComponent,
    UncommonComponent,
    NumbersComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PrimeNgModule
  ]
})
export class PagesModule { }
