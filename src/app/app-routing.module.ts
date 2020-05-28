import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RoleGuardService } from "./core/shared/Guard/authGuard.service";

const routes: Routes = [
  { path: "", redirectTo: "user", pathMatch: "full" },
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then((m) => m.UserModule),
  },
  {
    path: "market",
    loadChildren: () =>
      import("./market/market.module").then((m) => m.MarketModule),
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 2,
    },
  },
  {
    path: "super_admin",
    loadChildren: () =>
      import("./super_admin/super_admin.module").then(
        (m) => m.SuperAdminModule
      ),
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 1,
    },
  },
  { path: "**", redirectTo: "user" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
