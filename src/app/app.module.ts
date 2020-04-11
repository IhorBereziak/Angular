import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeUk from '@angular/common/locales/uk';

import {AppComponent } from './app.component';
import {CardComponent} from './Card/card.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms';

registerLocaleData(localeUk, 'uk');
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
