import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ProductsComponent } from "./products.component";
import { AllProductResolver } from "src/app/core/resolvers/AllProduct.resolver";

const routes: Routes = [
  {
    path: "",
    component: ProductsComponent,
    resolve: {
      AllProduct: AllProductResolver,
    },
  },
];
@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [AllProductResolver],
})
export class ProductsModule {}
