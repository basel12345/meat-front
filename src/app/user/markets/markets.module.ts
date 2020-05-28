import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MarketsComponent } from "./markets.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AllMarketsResolver } from "../../core/resolvers/AllMarkets.resolver";
import { AlphabetMarketsResolver } from "../../core/resolvers/AlphabetMarkets.resolver";
import { MarketComponent } from "./market/market.component";
import { MarketByIdResolver } from "src/app/core/resolvers/MarketById.resolver";

const routes: Routes = [
  {
    path: "",
    component: MarketsComponent,
    resolve: {
      AllMarkets: AllMarketsResolver,
      AlphabetMarkets: AlphabetMarketsResolver,
    },
  },
  {
    path: "market/:id",
    component: MarketComponent,
    resolve: {
      MarketById: MarketByIdResolver,
    },
  },
];

@NgModule({
  declarations: [MarketsComponent, MarketComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  providers: [AllMarketsResolver, AlphabetMarketsResolver, MarketByIdResolver],
})
export class MarketsModule {}
