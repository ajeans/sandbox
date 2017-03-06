import {Component, OnInit} from "@angular/core";
import {Product} from "./model/product";
import {Scan} from "./model/scan";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'Happy Tri!';
  //selectedProduct = null;
  //selectedScan = null;

  constructor() { }

  ngOnInit(): void {
    // Nothing yet
  }

  /*
  onProductSelect(product: Product): void {
    this.selectedProduct = product;
  }

  onScanSelect(scan: Scan): void {
    this.selectedScan = scan;
  }
  */
}
