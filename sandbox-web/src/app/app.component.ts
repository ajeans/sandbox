import {Component} from "@angular/core";
import {Product} from "./product/product";
import {Scan} from "./scan/scan";
import {ProductService} from "./services/product.service";
import {ScanService} from "./services/scan.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, ScanService]
})
export class AppComponent {
  title = 'Happy Tri!';
  products : Product[];
  scans : Scan[];
  selectedProduct = null;
  selectedScan = null;

  constructor(private productService: ProductService, private scanService: ScanService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.selectedProduct = this.products[0];
    this.scans = this.scanService.getScans();
    this.selectedScan = this.scans[0];
  }


  onProductSelect(product: Product): void {
    this.selectedProduct = product;
  }

  onScanSelect(scan: Scan): void {
    this.selectedScan = scan;
  }
}
