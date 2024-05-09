import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { MoleculesModule } from './components/molecules/molecules.module';
import LocaleFrCa from '@angular/common/locales/fr-CA';
import LocaleEsCo from '@angular/common/locales/es-CO';
import { registerLocaleData } from '@angular/common';

registerLocaleData(LocaleEsCo);
registerLocaleData(LocaleFrCa);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    MoleculesModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-CO'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
