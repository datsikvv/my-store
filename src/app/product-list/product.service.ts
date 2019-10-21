import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './item/item.component';
import { HttpClient } from '@angular/common/http';

 // let descr: string = "The Thai cat or Wichien Maat (Thai: วิเชียรมาศ,  [wí.tɕʰīan.mâːt] (About this soundlisten), RTGS: wichianmat, meaning 'moon diamond') is a newly renamed but old cat breed, related to but distinct from the Western, modern Siamese cat. This natural breed is descended from the landrace of wichianmat cats of Thailand, and as a standardised breed has also been variously called the Old-style, Old-type, Traditional, or Classic Siamese; the Whichian Mat (anglicised from the Thai name); and the Applehead, a nickname that originated as a pejorative used by breeders of the modern-style Siamese. According to The International Cat Association: The Thai is the breed dedicated to preserving the native pointed cat of Thailand in as close to its original form as possible.";

@Injectable()

 export class ProductService {
 /*   public product: Product[] = [
        {name: 'Thai', price: 500, photo: "./assets/img/siam.jpg", description: descr},
        {name: 'Asian shorthair', price: 750, photo: "./assets/img/black.jpg", description: descr},
        {name: 'Australian smoky', price: 600, photo: "./assets/img/smoky.jpg", description: descr},
        {name: 'Burmilla', price: 1000, photo: "./assets/img/burm.jpg", description: descr},
        {name: 'Maine Coon', price: 1200, photo: "./assets/img/main.jpg", description: descr},
        {name: 'Nibelung', price: 800, photo: "./assets/img/Nibelung.jpg", description: descr}
      ];
*/      

product: Product[];

      constructor(private http: HttpClient) { }

      public getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>('http://localhost:3000/products');
      }

      public getProductById(id:number): Observable<any> {
        return this.http.get(`http://localhost:3000/products/${id}`);
      }
 
/*
      public getProducts(): Observable<Product[]> {
        return of(this.product);
      }
*/

      // public setProducts(): Observable<Product[]> {
      //   return of(this.product);
      // }

};

