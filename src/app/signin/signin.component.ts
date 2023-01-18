import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { signIn } from '../models/sign-in.model';
import { SignInService } from '../services/sign-in.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  myform: signIn = {
    username: '',
    password: ''
  }

  signIn = false;

  errors: any;

  constructor(private signService: SignInService,
    private router: Router
    ){

  }

  myEmail ?: string;

  onSbumit(){

    console.log(this.myform);

    this.signService.verifySignIn(this.myform).subscribe(
      response => {
          alert("welcome to my page");
          this.signService.setAuthorization(true);
          this.router.navigate(['home']);
          console.log(response);
          this.signIn = true;
      },
      error => {
        this.signService.setAuthorization(false);
          alert(error.message);
          console.log(error);
      }
    )
  }

}
