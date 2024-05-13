import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { BasicsComponent } from './basics/basics.component';
import { UncommonComponent } from './uncommon/uncommon.component';
import { NumbersComponent } from './numbers/numbers.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { CustomComponent } from './custom/custom.component';
import { CanFlyPipe } from '../../pipes/canfly.pipe';
import { SortByPipe } from '../../pipes/sortBy.pipe';


@NgModule({
  declarations: [
    BasicsComponent,
    UncommonComponent,
    NumbersComponent,
    ToggleCasePipe,
    CanFlyPipe,
    SortByPipe,
    CustomComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PrimeNgModule
  ]
})
export class PagesModule { }
