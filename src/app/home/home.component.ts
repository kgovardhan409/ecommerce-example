import { Component } from '@angular/core';
import { SignInService } from '../services/sign-in.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
   

  constructor(private signInServer: SignInService){}

  ngOnInit(){
    this.signInServer.getSignInState().subscribe(
      resp => {
        console.log(resp)
        const ele = document.getElementById("signIN");
        ele?.setAttribute('hidden', 'hidden');
      }
    )
  }

}
