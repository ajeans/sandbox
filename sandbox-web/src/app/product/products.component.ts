import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css'],
  providers: [ProductService]

})
export class ProductsComponent implements OnInit {

  products : Product[];
  selectedProduct = null;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.initProducts();
  }

  initProducts(): void {
    this.productService.getProducts().then(products => {
      this.products = products;
      this.selectedProduct = this.products[0];
    });
  }

  onProductSelect(product: Product): void {
    this.selectedProduct = product;
  }

}
