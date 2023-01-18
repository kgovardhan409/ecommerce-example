import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrandsComponent } from './brands/brands.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavouritesComponent } from './favourites/favourites.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ExampleInterceptor } from './example.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    
    FooterComponent,
    HeaderComponent,
    BannerComponent,
    SignUpComponent,
    HomeComponent,
    ItemsComponent,
    SigninComponent,
    
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: ExampleInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
