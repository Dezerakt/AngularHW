import { Component, OnInit } from '@angular/core';
import {products} from "../products";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  originProducts = products;
  tempProducts = products;

  constructor() { }

  ngOnInit(): void {
  }

  onProductRemove(id: number){
    this.tempProducts = this.tempProducts.filter(x => x.id !== id);
  }

  sortByBrand(brand: string){
    this.tempProducts = this.originProducts;
    if(brand === 'samsung'){
      this.tempProducts = this.tempProducts.filter(x => x.brand === 'samsung');
    } else {
      this.tempProducts = this.tempProducts.filter(x => x.brand === 'apple');
    }
  }
}
