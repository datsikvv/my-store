import { Component, OnInit } from '@angular/core';
import { Product } from '../product-list/item/item.component';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public newProduct:  Product = {
    name: '',
    price: 0,
    photo: '',
    description: ''
  };


  constructor() { }

  ngOnInit() {
  }
  public addProduct(name: HTMLInputElement, price: HTMLInputElement, photo: HTMLInputElement): void {
    console.log(this.newProduct);
    console.log(name.value);
    console.log(price.value);
    console.log(photo.value);
  }


}
