import { Component } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {

  items: any[] = [];

  constructor(private itemService: ItemService){

  }

  ngOnInit(){
    this.itemService.getItems().subscribe((resp) => {
      this.items = resp.products;
      console.log(this.items)
    })
  }

}
