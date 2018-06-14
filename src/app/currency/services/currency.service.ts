import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Currency } from '../currency';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = "http://data.fixer.io/api/latest?access_key=5de759e54eb383d7973b92251eb522f5";

  // private apiUrl = "http://data.fixer.io/api/latest?access_key=5de759e54eb383d7973b92251eb522f5&format=1";
  // private apiUrl = "http://data.fixer.io/api/latest?access_key=5de759e54eb383d7973b92251eb522f5&symbols=PLN";

  constructor(private http: HttpClient) {
  }

  currency: Currency;

    public getCurrency(query?: string): Observable<Currency> {
      if (query){
        console.log("Pobieram rekord dla waluty=:" + query)
        const param= new HttpParams().set('symbols', query);
        return this.http.get(this.apiUrl, {params: param})
      }
      return this.http.get<Currency>(this.apiUrl);
    }

}
