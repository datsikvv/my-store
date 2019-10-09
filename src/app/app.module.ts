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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    AddProductComponent,
    HomeComponent,
    NavigateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'product', component: ProductListComponent},
      {path: 'form', component: AddProductComponent},
      {path: 'home', component: HomeComponent}
      // {path: 'test-style', component: TestStyleComponent},
      // {path: 'input', component: InputOutputComponent},
      // {path: 'view', component: BlockHostComponent},
      // {path: 'binding', component: DataBindingComponent}
    ]),
    FormsModule 
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
