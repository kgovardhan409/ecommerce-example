import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  apiUrl : string = "https://dummyjson.com/carts";

  constructor(private http: HttpClient) { }

  // cartData(data: CartService): Observable<any>{
  //   return this.http.post('https://dummyjson.com/carts', data)
  // }
  getData(): Observable<any>{
    return this.http.get(this.apiUrl);
  }
}
