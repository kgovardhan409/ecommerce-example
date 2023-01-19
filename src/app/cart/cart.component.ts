import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  price1:number = 154 ;
  price2:number = 9;

  dummydata:any = [];
  constructor(private cartService: CartService){

  }

  ngOnInit() {
    this.cartService.getData()
      .subscribe(response => {
        this.dummydata = response;
        console.log(this.dummydata["carts"]);
      });
}
}
