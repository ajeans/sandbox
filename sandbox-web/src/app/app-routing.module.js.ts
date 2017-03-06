import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from "./product/products.component";
import {ProductDetailsComponent} from "./product/product-details.component";
import {ScansComponent} from "./scan/scans.component";

const routes: Routes = [
  {path: '', redirectTo: '/scans', pathMatch: 'full'},
  {path: 'products', component: ProductsComponent},
  {path: 'product/:id', component: ProductDetailsComponent},
  {path: 'scans', component: ScansComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
