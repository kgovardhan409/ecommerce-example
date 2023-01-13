import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignInService } from '../services/sign-in.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  signInState ?: string;

  constructor(private router: Router, private signINservicer: SignInService){
  }

  ngOnInit(){
    if(this.signINservicer.getAuthoriation()){
      this.signInState = 'signin';
    } else {
      this.signInState = 'signout';
    }
  }

  signout(){
    alert("sign out successfully!");
    this.signINservicer.setAuthorization(false);
    this.signInState = 'signout';
    this.router.navigate(['sign-in']);
  }


}
