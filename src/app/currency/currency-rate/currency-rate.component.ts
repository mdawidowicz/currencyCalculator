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

  constructor(private currencyService: CurrencyService) {
    this. getCurrencyTo();
  }

  ngOnInit() {
  }

      //Pobieram obiekt dla konkretnej waluty 
      public getCurrencyTo() {
        this.currencyService.getCurrency1().subscribe(currency => {
          this.exchangeEates = currency;
        });
      }

}
