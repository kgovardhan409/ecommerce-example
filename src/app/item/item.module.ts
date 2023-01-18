import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { CartComponent } from '../cart/cart.component';
import { FavouritesComponent } from '../favourites/favourites.component';
import { HomeComponent } from '../home/home.component';

const routes = [
  {path: '', canActivate: [AuthGuard],
children: [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
  {path: 'favourites', component:FavouritesComponent, canActivate: [AuthGuard]}
]}
]

@NgModule({
  declarations: [
    CartComponent,
    FavouritesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ItemModule { }
