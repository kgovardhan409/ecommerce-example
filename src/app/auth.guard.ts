import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignInService } from './services/sign-in.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isLoggedIn = false;

  constructor(private signService: SignInService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
   
    console.log(this.signService.getAuthoriation());
    return this.signService.getAuthoriation();
  }
  
}
