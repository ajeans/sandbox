import {Component, OnInit} from '@angular/core';
import {Params, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {Product} from '../model/product';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: 'product-details.component.html',
  styleUrls: ['product-details.component.css'],
  providers: [ProductService]
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
     this.route.params
     .switchMap((params: Params) => this.productService.getProduct(params['id']))
     .subscribe(product => this.product = product);
  }
}
