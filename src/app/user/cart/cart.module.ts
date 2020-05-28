import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { CartComponent } from "./cart.component";
import { CartResolver } from "src/app/core/resolvers/Cart.resolver";

const routes: Routes = [
  {
    path: "",
    component: CartComponent,
    resolve: {
      Cart: CartResolver,
    },
  },
];

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [CartResolver],
})
export class CartModule {}
