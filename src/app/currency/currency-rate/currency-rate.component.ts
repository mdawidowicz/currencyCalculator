import { Component, OnInit } from '@angular/core';
import { Currency } from '../currency';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-currency-rate',
  templateUrl: './currency-rate.component.html',
  styleUrls: ['./currency-rate.component.css']
})
export class CurrencyRateComponent implements OnInit {


  exchangeEates: Currency;
  rateTitle: String;
  error: boolean;

  constructor(private currencyService: CurrencyService) {
    this. getCurrency();
  }

  ngOnInit() {
    this.error = false;
    this.rateTitle = "";
  }

      //Pobieram obiekt dla konkretnej waluty 
      public getCurrency() {
        this.error = false;
        this.currencyService.getCurrency().subscribe(currency => 
       {
          this.exchangeEates = currency;
          this.rateTitle = "Waluta bazowa EUR -"  + currency.rates["EUR"]  + ".  Kurs na dzień: " + currency.date;
        },
        error => {
          this.error = true;
        });
      }

}
