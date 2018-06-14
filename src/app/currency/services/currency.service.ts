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
    this.getPostsObs();
  }

  currency: Currency;

private postsObs = new BehaviorSubject<Array<Currency>>([]);
posts$ = this.postsObs.asObservable();


/**Pobieramy wszystkie posty ten zwraca jesona */
getPostsObs() {
  return  this.http.get<Array<Currency>>(this.apiUrl).subscribe(
      posts => {
      this.postsObs.next(posts);
    },
     err => {
     console.log(err);
  }
  );
}


    public getCurrencys(query?: string): Observable<Array<Currency>> {
      return this.http.get<Array<Currency>>(this.apiUrl);
    }

    public getCurrency(query?: string): Observable<any> {
      if (query){
        return this.http.get(`${this.apiUrl}&symbols=${query}`);
      }
      return this.http.get<Currency>(this.apiUrl);
    }


    public getCurrency1(query?: string): Observable<Currency> {
      if (query){
        console.log("Pobieram rekord dla waluty=:" + query)
        const param= new HttpParams().set('symbols', query);
        return this.http.get(this.apiUrl, {params: param})
      }
      return this.http.get<Currency>(this.apiUrl);
    }

}
