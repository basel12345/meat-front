import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { PageMarketComponent } from "./page-market.component";
import { MarketByUserIdResolver } from "src/app/core/resolvers/MarketByUserId.resolver";
import { ProductComponent } from "./product/product.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SettingsComponent } from "./settings/settings.component";
import { EditProductComponent } from "./edit-product/edit-product.component";

const routes: Routes = [
  {
    path: "",
    component: PageMarketComponent,
    resolve: {
      MarketByUserId: MarketByUserIdResolver,
    },
  },
];
@NgModule({
  declarations: [
    PageMarketComponent,
    ProductComponent,
    SettingsComponent,
    EditProductComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  providers: [MarketByUserIdResolver],
})
export class PageMarketModule {}
