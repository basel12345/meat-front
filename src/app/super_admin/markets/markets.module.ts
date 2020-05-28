import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MarketsComponent } from "./markets.component";
import { AllMarketsResolver } from "src/app/core/resolvers/AllMarkets.resolver";

const routes: Routes = [
  {
    path: "",
    component: MarketsComponent,
    resolve: {
      AllMarkets: AllMarketsResolver,
    },
  },
];
@NgModule({
  declarations: [MarketsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [AllMarketsResolver],
})
export class MarketsModule {}
