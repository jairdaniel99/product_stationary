import { Component } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'product_stationary';
  products;
  // service instance is injected into the constructor
  constructor(service: ProductsService) {
    this.products = service.getProducts();
  }
}
