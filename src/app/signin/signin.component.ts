import { Component } from '@angular/core';
import { signIn } from '../models/sign-in.model';
import { SignInService } from '../services/sign-in.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  myform: signIn = {
    email: '',
    password: ''
  }

  constructor(private signService: SignInService){

  }

  myEmail ?: string;

  onSbumit(){

    console.log(this.myform);

    this.signService.verifySignIn(this.myform).subscribe(
      response => {
        alert("welcome to my page");
      },
      error => {
        alert("Not a valid user");
      }
    )
  }

}
