import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ViewProductComponent = class ViewProductComponent {
    constructor(router, route, productService) {
        this.router = router;
        this.route = route;
        this.productService = productService;
        this.product = {
            name: '',
            description: '',
            photo: '',
            price: 0
        };
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            const productId = params['id'];
            this.productService.getProductById(productId).subscribe((res) => {
                this.product = res;
            });
        });
    }
};
ViewProductComponent = tslib_1.__decorate([
    Component({
        selector: 'app-view-product',
        templateUrl: './view-product.component.html',
        styleUrls: ['./view-product.component.css']
    })
], ViewProductComponent);
export { ViewProductComponent };
//# sourceMappingURL=view-product.component.js.map