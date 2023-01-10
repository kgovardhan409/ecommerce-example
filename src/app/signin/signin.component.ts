import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  myform = {
    myEmail: '',
    password: true
  }

  myEmail ?: string;

  onSbumit(){

    console.log(this.myform);
  }

}
