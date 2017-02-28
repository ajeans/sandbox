import { Component, OnInit } from '@angular/core';
import {Product} from "../product/product.component";

export class Scan {
  product: Product;
  date: Date;
}

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})

export class ScanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
