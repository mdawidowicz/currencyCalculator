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


    amountToConverted: number;
    amountCalculated: number;
    currencyFrom: Currency;
    currencyTo: Currency;
    currencFrom = 'PLN';
    currencTo= "EUR";
    currencyRates: object;

    
    constructor(private currencyService: CurrencyService) {}

    ngOnInit() {
       this.getCurrencyFrom();
    }

    //Pobieram obiekt dla konkretnej waluty 
    public getCurrencyFrom() {
      console.log("Wszedłem do getCurrencyFrom")
      this.currencyService.getCurrency1(this.currencFrom).subscribe(currency => {
      console.log("konkretna waluta=", currency);
      this.currencyFrom = currency;
       this.currencyRates = currency.rates;
      });
    }


    //Pobieram obiekt dla konkretnej waluty 
    public getCurrencyTo() {
      this.currencyService.getCurrency1(this.currencTo).subscribe(currency => {
      console.log("konkretna waluta=", currency);
      this.currencyTo = currency;
      });
    }
}
