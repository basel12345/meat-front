import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ProductComponent } from "./product.component";
import { SpecificProductResolver } from "src/app/core/resolvers/SpecificProduct.resolver";

const routes: Routes = [
  {
    path: "",
    component: ProductComponent,
    resolve: {
      SpecificProduct: SpecificProductResolver,
    },
  },
];

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  providers: [SpecificProductResolver],
})
export class ProductModule {}
