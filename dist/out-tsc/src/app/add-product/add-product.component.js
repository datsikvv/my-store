import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AddProductComponent = class AddProductComponent {
    constructor() {
        this.newProduct = {
            name: '',
            price: 0,
            photo: '',
            description: ''
        };
    }
    ngOnInit() {
    }
    addProduct(name, price, photo) {
        console.log(this.newProduct);
        console.log(name.value);
        console.log(price.value);
        console.log(photo.value);
    }
};
AddProductComponent = tslib_1.__decorate([
    Component({
        selector: 'app-add-product',
        templateUrl: './add-product.component.html',
        styleUrls: ['./add-product.component.css']
    })
], AddProductComponent);
export { AddProductComponent };
//# sourceMappingURL=add-product.component.js.map