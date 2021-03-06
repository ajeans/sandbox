import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {MaterialModule} from '@angular/material';
import 'hammerjs';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService}  from './services/in-memory-data.service';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ProductComponent} from './product/product.component';
import {ProductDetailsComponent} from './product/product-details.component';
import {ScanComponent} from './scan/scan.component';
import {ProductsComponent} from './product/products.component';
import {ScansComponent} from './scan/scans.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailsComponent,
    ScanComponent,
    ProductsComponent,
    ScansComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
