import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';
import { Observable } from 'rxjs';
import { Currency } from '../currency';


@Component({
  selector: 'currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {
    amountToConvert: number = null;
    amountCalculated: number = null;
    currencyFrom: Currency;
    currencyTo: Currency;
    currencySymbolFrom = 'PLN';
    currencySymbolTo= "EUR";
    currencyRates: object;
    error: boolean = false;
    
    constructor(private currencyService: CurrencyService) {}

    ngOnInit() {
       this.getCurrencyFrom();
       this.getCurrencyTo();
    }

    //Pobieram obiekt dla konkretnej waluty 
    public getCurrencyFrom() {
      this.error = false;
      this.currencyService.getCurrency(this.currencySymbolFrom).subscribe(
        currency => {
          this.currencyFrom = currency;
          this.changedAmount();
        },
        error => {
          this.error = true;
        });
    }

    //Pobieram obiekt dla konkretnej waluty 
    public getCurrencyTo() {
      this.error = false;
      this.currencyService.getCurrency(this.currencySymbolTo).subscribe(currency => 
        {
        this.currencyTo = currency;
        this.changedAmount();
        },
        error => {
          this.error = true;
        });
    }

    changedAmount() {
      if (this.currencyFrom && this.currencyTo) {
        const inEuro = this.amountToConvert * 1/this.currencyFrom.rates[this.currencySymbolFrom];
        this.amountCalculated = inEuro * this.currencyTo.rates[this.currencySymbolTo]
      }
    }
}