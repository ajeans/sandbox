import { Component } from '@angular/core';
import {Product} from "./product/product.component";

const PRODUCTS: Product[] = [
  { code: "001", name: "Coca cola 33cl"  },
  { code: "002", name: "Coca cola 50cl"  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my app works!';
  products = PRODUCTS
}
