import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
// let descr: string = "The Thai cat or Wichien Maat (Thai: วิเชียรมาศ,  [wí.tɕʰīan.mâːt] (About this soundlisten), RTGS: wichianmat, meaning 'moon diamond') is a newly renamed but old cat breed, related to but distinct from the Western, modern Siamese cat. This natural breed is descended from the landrace of wichianmat cats of Thailand, and as a standardised breed has also been variously called the Old-style, Old-type, Traditional, or Classic Siamese; the Whichian Mat (anglicised from the Thai name); and the Applehead, a nickname that originated as a pejorative used by breeders of the modern-style Siamese. According to The International Cat Association: The Thai is the breed dedicated to preserving the native pointed cat of Thailand in as close to its original form as possible.";
let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
    }
    getProducts() {
        return this.http.get('http://localhost:3000/products');
    }
    getProductById(id) {
        return this.http.get('http://localhost:3000/products/${id}');
    }
};
ProductService = tslib_1.__decorate([
    Injectable()
], ProductService);
export { ProductService };
;
//# sourceMappingURL=product.service.js.map