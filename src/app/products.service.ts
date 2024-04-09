import { Injectable } from '@angular/core';
import { products } from '../shared/products';

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  getProducts() {
    return products;
  }
}
