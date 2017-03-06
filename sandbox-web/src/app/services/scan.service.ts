import { Injectable } from '@angular/core';
import {PRODUCTS} from "./product.service";
import {Scan} from "../model/scan";

const SCANS: Scan[] = [
  { product: PRODUCTS[0], date: new Date('02/24/2017 19:25:00')  },
  { product: PRODUCTS[0], date: new Date('02/21/2017 11:29:00')  },
  { product: PRODUCTS[1], date: new Date('01/31/2017 23:15:00')  }
];

@Injectable()
export class ScanService {

  getScans(): Promise<Scan[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(SCANS), 2000);
    });
  }

}
