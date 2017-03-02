import { Injectable } from '@angular/core';
import {Product} from "../model/product";

export const PRODUCTS: Product[] = [
  { code: "001", name: "Coca cola 33cl", description: "Canette de Coca-Cola, 33cl..."  },
  { code: "002", name: "Coca cola 50cl", description: "Mini bouteille de Coca-Cola, 50cl..."  }
];

@Injectable()
export class ProductService {

  getProducts(): Promise<Product[]> {
    //return Promise.resolve(PRODUCTS);
    return new Promise(resolve => {
      setTimeout(() => resolve(PRODUCTS), 1000);
    });
  }
}
