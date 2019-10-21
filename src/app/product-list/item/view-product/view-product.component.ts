
import { Component, OnInit } from '@angular/core';
import { Product } from '../item.component';
import { ProductService } from '../../product.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  private product: Product = {
    name: 'Cat name',
    description: 'bla bla bla',
    photo: '',
    price: 0
  };


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
    ) {
    
   }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const productId = params['id'];

      this.productService.getProductById(productId).subscribe((res: any) => {
        this.product = res;
      });
    });
   }

   public goBack(): void {
    this.router.navigate(['/product']);
   }

}