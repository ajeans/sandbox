import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product/product-details.component';
import { ScanComponent } from './scan/scan.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailsComponent,
    ScanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
