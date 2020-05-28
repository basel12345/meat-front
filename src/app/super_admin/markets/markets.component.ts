import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "markets-root",
  templateUrl: "./markets.component.html",
  styleUrls: ["./markets.component.css"],
})
export class MarketsComponent implements OnInit {
  AllMarkets: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((res) => {
      this.AllMarkets = res.AllMarkets;
    });
  }
}
