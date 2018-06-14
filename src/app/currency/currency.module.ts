import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { CurrencyService } from './services/currency.service';
import { FormsModule } from '@angular/forms'
import { CurrencyRateComponent } from './currency-rate/currency-rate.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
  CurrencyListComponent,
  CurrencyRateComponent],
  providers: [ 
    CurrencyService
  ], 
  exports:[
     CurrencyListComponent,
     CurrencyRateComponent
  ]
})
export class CurrencyModule { }
