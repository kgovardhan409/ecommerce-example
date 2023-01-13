import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { signIn } from '../models/sign-in.model';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  baseUrl : string = "http://localhost:5000/";

  isLoggedIN = false;

  signState = new BehaviorSubject('signout');

  sign$ = this.signState.asObservable();

  constructor(private http: HttpClient) { }


  verifySignIn(data: signIn): Observable<any>{
    return this.http.post(this.baseUrl+"verifyLogin", data);
  }

  signUp(data: any): Observable<any>{
    return this.http.post(this.baseUrl+"register", data);
  }

  setAuthorization(signIn: boolean){
    this.isLoggedIN = signIn;
    
    signIn ? this.signState.next('signin') : this.signState.next('singout')
    
  }

  getAuthoriation(){
    return this.isLoggedIN;
  }

  getSignInState(){
    return this.sign$;
  }

  message(data: any): Observable<any>{
    return this.http.post(this.baseUrl+"register", data);
  }

}
