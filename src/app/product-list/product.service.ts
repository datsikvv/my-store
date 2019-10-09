import { Injectable } from '@angular/core';
import { Product } from './product-list.component';
import { Observable, of } from 'rxjs';


@Injectable()
export class ProductService {
    public product: Product[] = [
        {name: 'Thai', price: 500, photo: "./assets/img/siam.jpg"},
        {name: 'Asian shorthair', price: 750, photo: "./assets/img/black.jpg"},
        {name: 'Australian smoky', price: 600, photo: "./assets/img/smoky.jpg"},
        {name: 'Burmilla', price: 1000, photo: "./assets/img/burm.jpg"},
        {name: 'Maine Coon', price: 1200, photo: "./assets/img/main.jpg"},
        {name: 'Nibelung', price: 800, photo: "./assets/img/Nibelung.jpg"}
      ];
      
      constructor() { }
      
      public getProducts(): Observable<Product[]> {
        return of(this.product);
      }

};

