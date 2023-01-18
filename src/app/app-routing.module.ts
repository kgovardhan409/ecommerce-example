import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  {path: '', component: SigninComponent},
  {path: 'home', 
    loadChildren: () => import('./item/item.module').then(m => m.ItemModule)
},
  {path:'sign-up',component:SignUpComponent},
  {path:'sign-in',component:SigninComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }