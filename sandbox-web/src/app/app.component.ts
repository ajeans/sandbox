import {Component} from "@angular/core";
import {Product} from "./product/product";
import {Scan} from "./scan/scan";

const PRODUCTS: Product[] = [
  { code: "001", name: "Coca cola 33cl", description: "Canette de Coca-Cola, 33cl..."  },
  { code: "002", name: "Coca cola 50cl", description: "Mini bouteille de Coca-Cola, 50cl..."  }
];

const SCANS: Scan[] = [
  { product: PRODUCTS[0], date: new Date()  },
  { product: PRODUCTS[0], date: new Date()  },
  { product: PRODUCTS[1], date: new Date()  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Happy Tri!';
  products = PRODUCTS
  scans = SCANS
  selectedProduct = PRODUCTS[0]
  selectedScan = SCANS[0]

  onProductSelect(product: Product): void {
    this.selectedProduct = product;
  }

  onScanSelect(scan: Scan): void {
    this.selectedScan = scan;
  }
}
