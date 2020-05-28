import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Markets } from "src/app/core/shared/interfaces/markets";
import { MarketsService } from "src/app/core/service/markets.service";

@Component({
  selector: "market-root",
  templateUrl: "./market.component.html",
  styleUrls: ["./market.component.css"],
})
export class MarketComponent implements OnInit {
  Market: Markets;
  constructor(private route: ActivatedRoute, private service: MarketsService) {}

  ngOnInit() {
    this.route.data.subscribe((res) => {
      this.Market = res.MarketById;
      this.Market._id = res.MarketById._id;
      this.Market.username = res.MarketById.username;
      this.Market.email = res.MarketById.email;
      this.Market.description = res.MarketById.description;
      this.Market.cover = res.MarketById.cover;
      this.Market.logo = res.MarketById.logo;
      this.Market.product = res.MarketById.product;
    });
  }
}
