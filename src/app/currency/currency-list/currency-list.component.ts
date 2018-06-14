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
    
    constructor(private currencyService: CurrencyService) {}

    ngOnInit() {
       this.getCurrencyFrom();
       this.getCurrencyTo();
    }

    //Pobieram obiekt dla konkretnej waluty 
    public getCurrencyFrom() {
      // console.log("Wszedłem do getCurrencyFrom")
      this.currencyService.getCurrency1(this.currencySymbolFrom).subscribe(
        currency => {
          this.currencyFrom = currency;
          this.changedAmount();
        },
        error => {
          // obsługa error'a
        });
    }

    //Pobieram obiekt dla konkretnej waluty 
    public getCurrencyTo() {
      this.currencyService.getCurrency1(this.currencySymbolTo).subscribe(currency => {
        // console.log("konkretna waluta=", currency);
        this.currencyTo = currency;
        this.changedAmount();
      });
    }

    changedAmount() {
      if (this.currencyFrom && this.currencyTo) {
        const inEuro = this.amountToConvert * 1/this.currencyFrom.rates[this.currencySymbolFrom];
        this.amountCalculated = inEuro * this.currencyTo.rates[this.currencySymbolTo]
      }
    }
}