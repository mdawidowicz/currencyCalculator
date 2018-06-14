import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CurrencyListComponent } from '../currency/currency-list/currency-list.component';
import { CurrencyModule } from '../currency/currency.module';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyService } from '../currency/services/currency.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CurrencyModule,
    FormsModule
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
