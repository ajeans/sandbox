import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product/product-details.component';
import { ScanComponent } from './scan/scan.component';
import { ProductsComponent } from './product/products.component';
import { ScansComponent } from './scan/scans.component';

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
    RouterModule.forRoot([
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'product/:id',
        component: ProductDetailsComponent
      },
      {
        path: 'scans',
        component: ScansComponent
      },
      {
        path: '',
        redirectTo: '/scans',
        pathMatch: 'full'
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
