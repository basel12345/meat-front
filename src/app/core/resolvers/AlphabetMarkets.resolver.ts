import { Injectable } from "@angular/core";

import { Resolve } from "@angular/router";
import { MarketsService } from "../service/markets.service";

@Injectable()
export class AlphabetMarketsResolver implements Resolve<any> {
  constructor(private marketsService: MarketsService) {}

  resolve() {
    return this.marketsService.getAlphabetMarkets();
  }
}
