import { Component, OnInit } from '@angular/core';
import {Scan} from "../model/scan";
import {ScanService} from "../services/scan.service";

@Component({
  selector: 'app-scans',
  templateUrl: 'scans.component.html',
  styleUrls: ['scans.component.css'],
  providers: [ScanService]
})
export class ScansComponent implements OnInit {

  scans : Scan[];
  selectedScan = null;

  constructor(private scanService: ScanService) { }

  ngOnInit(): void {
    this.initScans();
  }

  initScans(): void {
    this.scanService.getScans().then(scans => {
      this.scans = scans;
      this.selectedScan = this.scans[0];
    });
  }

  onScanSelect(scan: Scan): void {
    this.selectedScan = scan;
  }

}
