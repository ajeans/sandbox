import {Component, OnInit} from "@angular/core";
import {Product} from "./model/product";
import {Scan} from "./model/scan";
import {ProductService} from "./services/product.service";
import {ScanService} from "./services/scan.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, ScanService]
})
export class AppComponent implements  OnInit {
  title = 'Happy Tri!';
  products : Product[];
  scans : Scan[];
  selectedProduct = null;
  selectedScan = null;

  constructor(private productService: ProductService, private scanService: ScanService) { }

  ngOnInit(): void {
    this.initProducts();
    this.initScans();
  }

  initProducts(): void {
    this.productService.getProducts().then(products => {
      this.products = products;
      this.selectedProduct = this.products[0];
    });
  }

  initScans(): void {
    this.scanService.getScans().then(scans => {
      this.scans = scans;
      this.selectedScan = this.scans[0];
    });
  }

  onProductSelect(product: Product): void {
    this.selectedProduct = product;
  }

  onScanSelect(scan: Scan): void {
    this.selectedScan = scan;
  }
}
