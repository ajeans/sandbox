import { Injectable } from '@angular/core';
import {PRODUCTS} from "./product.service";
import {Scan} from "../model/scan";

const SCANS: Scan[] = [
  { product: PRODUCTS[0], date: new Date()  },
  { product: PRODUCTS[0], date: new Date()  },
  { product: PRODUCTS[1], date: new Date()  }
];

@Injectable()
export class ScanService {

  getScans(): Promise<Scan[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(SCANS), 5000);
    });
  }

}
