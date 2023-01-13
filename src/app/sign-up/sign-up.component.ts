import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
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
    firstName: ['', Validators.required],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    matchingPassword: ['', Validators.required],
    role: ['Admin'],
   }

  )

  isSubmitted = false;
  
  constructor(private fb: FormBuilder, private signInService: SignInService,
    private router: Router
    ){

  }


 ngOnInit(){

 }

 get f(){
  return this.signupform.controls;
 }

 onSubmit(){
    this.isSubmitted = true;
    if(this.signupform?.valid){
      this.signInService.signUp(this.signupform.value).subscribe(
        response => {
          if(response.success){
            alert("Registered Succeffully, please login with yout maild ID and password");
            // this.router.navigateByUrl('/sign-up');
            this.router.navigate(['sign-in']);
          } else {
            alert("Something went wrong,Please try again")
          }
        },
        error => {
          console.log(error);
          alert(error.message);
        }
      );
      console.log(this.signupform.value)
    } else {
      alert("not submitted");
    }
 }
  
}
