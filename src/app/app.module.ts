import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product-list/product.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { NavigateComponent } from './navigate/navigate.component';
import { BasketComponent } from './basket/basket.component';
import { ItemComponent } from './product-list/item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewProductComponent } from './product-list/item/view-product/view-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    AddProductComponent,
    HomeComponent,
    NavigateComponent,
    BasketComponent,
    ItemComponent,
    ViewProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'product', component: ProductListComponent},
      {path: 'form', component: AddProductComponent},
      {path: 'home', component: HomeComponent},
      {path: 'view/:id', component: ViewProductComponent}
      // {path: 'test-style', component: TestStyleComponent},
      // {path: 'input', component: InputOutputComponent},
      // {path: 'view', component: BlockHostComponent},
      // {path: 'binding', component: DataBindingComponent}
    ]),
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
