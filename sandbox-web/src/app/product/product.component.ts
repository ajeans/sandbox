import { Component, OnInit } from '@angular/core';

export class Product {
  code: string;
  name: string;
}

const PRODUCTS: Product[] = [
  { code: "001", name: "Coca cola 33cl"  },
  { code: "002", name: "Coca cola 50cl"  }
];

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
