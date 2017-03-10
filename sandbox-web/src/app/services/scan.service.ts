import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {PRODUCTS} from './product.service';
import {Scan} from '../model/scan';

@Injectable()
export class ScanService {

  private serviceUrl = 'api/scans';

  constructor(private http: Http) {
  }

  getScans(): Promise<Scan[]> {
    return this.http.get(this.serviceUrl).toPromise()
      .then(response => response.json().data as Scan[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Sandbox - an error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
