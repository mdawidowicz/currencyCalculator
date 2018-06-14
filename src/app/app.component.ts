import { Component } from '@angular/core';
import { CurrencyService } from './currency/services/currency.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplikacja zaliczeniowa';

    //Dostarcz mi uangularer service
    constructor(private currencyService: CurrencyService) {}
}
