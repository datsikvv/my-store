import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService }  from '../product.service';

export interface Product {
  name: string;
  price: number;
  photo: string;
  description: string;
}


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() public photo:  string = " ";
  @Input() public name:  string = " ";
  @Input() public price:  number = 0;

  @Input() public productList: Array<Product> = [];
  public selectedProduct: Product = null;
  public newProduct: Product = {
    name: '',
    price: 0,
    photo: '',
    description: ''
  };

  @Output() public itemData: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.productList = data;
      }
    );
  }

  public selectProduct(product: Product): void {
    this.selectedProduct = product;
  }
  public buy(product: Product): void {
    this.selectedProduct = product;
    this.itemData.emit(this.selectedProduct);
  }

  public getView(product: Product): void {
    this.selectedProduct = product;
  }

}



