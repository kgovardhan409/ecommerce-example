import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent  implements OnInit{

  // signupform ?: FormGroup;
  signupform : FormGroup = this.fb.group(
   {
    username: ['', Validators.required]
   }

  )
  
  constructor(private fb: FormBuilder){

  }


 ngOnInit(){

 }

 get f(){
  return this.signupform.controls;
 }
  
}
