import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { CurrencyService } from './services/currency.service';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
  CurrencyListComponent],
  providers: [ 
    CurrencyService
  ], 
  exports:[
     CurrencyListComponent
  ]
})
export class CurrencyModule { }
