import {Component, OnInit, Input} from '@angular/core';
import {Scan} from '../model/scan';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent {
  @Input()
  scan: Scan;
}
