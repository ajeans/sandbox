import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Scan} from '../model/scan';
import {PRODUCTS} from './product.service';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let scans: Scan[] = [
      {product: PRODUCTS[0], date: new Date('02/24/2017 19:25:00')},
      {product: PRODUCTS[0], date: new Date('02/21/2017 11:29:00')},
      {product: PRODUCTS[1], date: new Date('01/31/2017 23:15:00')}
    ];
    return {scans};
  }
}
