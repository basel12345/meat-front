import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SuperAdminComponent } from "./super_admin.component";
import { NavbarComponent } from "./navbar/navbar.component";

const routes: Routes = [
  {
    path: "",
    component: SuperAdminComponent,
    children: [
      { path: "", redirectTo: "dashboad", pathMatch: "full" },
      {
        path: "dashboad",
        loadChildren: () =>
          import("./dashboad/dashboad.module").then((m) => m.DashboardModule),
      },
      {
        path: "products",
        loadChildren: () =>
          import("./products/products.module").then((m) => m.ProductsModule),
      },
      {
        path: "markets",
        loadChildren: () =>
          import("./markets/markets.module").then((m) => m.MarketsModule),
      },
      {
        path: "visitors",
        loadChildren: () =>
          import("./visitors/visitors.module").then((m) => m.VisitorsModule),
      },
      { path: "**", redirectTo: "dashboad" },
    ],
  },
];

@NgModule({
  declarations: [SuperAdminComponent, NavbarComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [],
})
export class SuperAdminModule {}
