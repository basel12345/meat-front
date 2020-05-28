import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RoleGuardService } from "../core/shared/Guard/authGuard.service";
import { UserComponent } from "./user.component";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";

const routes: Routes = [
  {
    path: "",
    component: UserComponent,
    children: [
      { path: "", redirectTo: "auth", pathMatch: "full" },
      {
        path: "home",
        loadChildren: () =>
          import("./home/home.module").then((m) => m.HomegModule),
      },
      {
        path: "markets",
        loadChildren: () =>
          import("./markets/markets.module").then((m) => m.MarketsModule),
      },
      {
        path: "admirals",
        loadChildren: () =>
          import("./products/admirals/admirals.module").then(
            (m) => m.AdmiralsModule
          ),
      },
      {
        path: "chickens",
        loadChildren: () =>
          import("./products/chickens/chickens.module").then(
            (m) => m.ChickensModule
          ),
      },
      {
        path: "meats",
        loadChildren: () =>
          import("./products/meats/meats.module").then((m) => m.MeatsModule),
      },
      {
        path: "auth",
        loadChildren: () =>
          import("./auth/auth.module").then((m) => m.UsersModule),
      },
      {
        path: "product/:id",
        loadChildren: () =>
          import("./products/product/product.module").then(
            (m) => m.ProductModule
          ),
        canActivate: [RoleGuardService],
        data: {
          expectedRole: 3,
        },
      },
      {
        path: "cart",
        loadChildren: () =>
          import("./cart/cart.module").then((m) => m.CartModule),
      },
      { path: "**", redirectTo: "auth" },
    ],
  },
];

@NgModule({
  declarations: [UserComponent, NavbarComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [RoleGuardService],
})
export class UserModule {}
