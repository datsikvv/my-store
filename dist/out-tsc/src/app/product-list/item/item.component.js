import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let ItemComponent = class ItemComponent {
    constructor(productService) {
        this.productService = productService;
        this.photo = " ";
        this.name = " ";
        this.price = 0;
        this.productList = [];
        this.selectedProduct = null;
        this.newProduct = {
            name: '',
            price: 0,
            photo: '',
            description: ''
        };
        this.itemData = new EventEmitter();
    }
    ngOnInit() {
        this.productService.getProducts().subscribe((data) => {
            this.productList = data;
        });
    }
    selectProduct(product) {
        this.selectedProduct = product;
    }
    buy(product) {
        this.selectedProduct = product;
        this.itemData.emit(this.selectedProduct);
    }
    getView(product) {
        this.selectedProduct = product;
        // console.log(this.selectedProduct);
    }
};
tslib_1.__decorate([
    Input()
], ItemComponent.prototype, "photo", void 0);
tslib_1.__decorate([
    Input()
], ItemComponent.prototype, "name", void 0);
tslib_1.__decorate([
    Input()
], ItemComponent.prototype, "price", void 0);
tslib_1.__decorate([
    Input()
], ItemComponent.prototype, "productList", void 0);
tslib_1.__decorate([
    Output()
], ItemComponent.prototype, "itemData", void 0);
ItemComponent = tslib_1.__decorate([
    Component({
        selector: 'app-item',
        templateUrl: './item.component.html',
        styleUrls: ['./item.component.css']
    })
], ItemComponent);
export { ItemComponent };
//# sourceMappingURL=item.component.js.map