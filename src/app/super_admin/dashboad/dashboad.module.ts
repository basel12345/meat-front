import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboad.component";
import { AllMeatsResolver } from "src/app/core/resolvers/AllMeats.resolver";
import { AllAdmiralsResolver } from "src/app/core/resolvers/AllAdmirals.resolver";
import { ChickensResolver } from "src/app/core/resolvers/chickens.resolver";
import { AllMarketsResolver } from "src/app/core/resolvers/AllMarkets.resolver";
import { AllUsersResolver } from "src/app/core/resolvers/AllUsers.resolver";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    resolve: {
      AllMeats: AllMeatsResolver,
      AllAdmirals: AllAdmiralsResolver,
      Chickens: ChickensResolver,
      AllMarkets: AllMarketsResolver,
      AllUsers: AllUsersResolver,
    },
  },
];
@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, NgxChartsModule, RouterModule.forChild(routes)],
  providers: [
    AllMeatsResolver,
    AllAdmiralsResolver,
    ChickensResolver,
    AllMarketsResolver,
    AllUsersResolver,
  ],
})
export class DashboardModule {}
