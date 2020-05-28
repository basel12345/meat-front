import { Injectable } from "@angular/core";

import { Resolve } from "@angular/router";
import { MarketsService } from "../service/markets.service";

@Injectable()
export class MarketByUserIdResolver implements Resolve<any> {
  constructor(private marketsService: MarketsService) {}

  resolve() {
    return this.marketsService.getMarketByUserId();
  }
}
