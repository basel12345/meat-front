import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MarketComponent } from "./market.component";
import { NavbarComponent } from "./navbar/navbar.component";

const routes: Routes = [
  {
    path: "",
    component: MarketComponent,
    children: [
      { path: "", redirectTo: "page-market", pathMatch: "full" },
      {
        path: "page-market",
        loadChildren: () =>
          import("./page-market/page-market.module").then(
            (m) => m.PageMarketModule
          ),
      },
      { path: "**", redirectTo: "page-market" },
    ],
  },
];

@NgModule({
  declarations: [MarketComponent, NavbarComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [],
})
export class MarketModule {}
