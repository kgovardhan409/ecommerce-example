import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignInService } from '../services/sign-in.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent  implements OnInit{

  // signupform ?: FormGroup;

  signupform : FormGroup = this.fb.group(
   {
    FistName: ['', Validators.required],
    LastName: ['', Validators.required],
    emailID: ['', Validators.required],
    password: ['', Validators.required],
    role: ['Admin'],
    enable: [true]
    // enable: [false, Validators.required], this is optional so not required validation
   }

  )

  isSubmitted = false;
  
  constructor(private fb: FormBuilder, private signservice: SignInService){

  }


 ngOnInit(){

 }

 get f(){
  return this.signupform.controls;
 }

 onSubmit(){
    this.isSubmitted = true;
    if(this.signupform?.valid){
      alert("form is submitted");
      console.log(this.signupform.value)
    } else {
      alert("not submitted");
    }
 }
  
}
