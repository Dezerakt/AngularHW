import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Products} from "../products";
import { NgForm } from "@angular/forms";
import {Brands} from "../products";


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})

export class ProductFormComponent implements OnInit {
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  newProduct = {
    id: Date.now(),
    image: "https://images-eu.ssl-images-amazon.com/images/I/71AvQd3VzqL._AC._SR360,460.jpg",
    name: "",
    description: "",
    price: 300,
    brand: Brands.apple,
  }

  addProduct(form: NgForm) {
    console.log(form);
    // let name = form.controls["name"].value;
    let pr:Products = {id: Date.now(), price: this.newProduct.price, description: this.newProduct.description, name: this.newProduct.name, image: this.newProduct.image, brand: this.newProduct.brand}
    this.add.emit(pr);
    // this.products.push({id: Date.now(), price: this.newProduct.price, description: this.newProduct.description, name: this.newProduct.name, image: this.newProduct.image});
  }

  onChange() {
    // this.name = e.target.value;
    console.log(this.newProduct.name);
  }

  models = Object.keys(Brands);

}
