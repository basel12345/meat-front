import { Injectable } from "@angular/core";

import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { MarketsService } from "../service/markets.service";

@Injectable()
export class MarketByIdResolver implements Resolve<any> {
  constructor(private marketsService: MarketsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    let id = route.params.id;
    return this.marketsService.getMarketById(id);
  }
}
