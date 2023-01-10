import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { signIn } from '../models/sign-in.model';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  baseUrl : string = "http://localhost:5000/";

  constructor(private http: HttpClient) { }


  verifySignIn(data: signIn): Observable<any>{
    return this.http.post(this.baseUrl+"verifyLogin", data);
  }

}
