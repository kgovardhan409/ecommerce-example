import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { BrandsComponent } from './brands/brands.component';
import {CartComponent} from './cart/cart.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cart', component: CartComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'sign-in',component:SigninComponent},
  {path: 'favourites', component:FavouritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }