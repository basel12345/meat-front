import { Component, OnInit, DoCheck } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Markets } from "../../core/shared/interfaces/markets";
import { fadeTop } from "../../core/shared/animations/fade-top";

@Component({
  selector: "markets-root",
  templateUrl: "./markets.component.html",
  styleUrls: ["./markets.component.css"],
  animations: [fadeTop],
})
export class MarketsComponent implements OnInit, DoCheck {
  constructor(private route: ActivatedRoute, private router: Router) {}
  specialMarkets: Markets;
  alphabet: boolean = false;
  ngOnInit() {
    this.route.data.subscribe((res) => {
      this.specialMarkets = res.AllMarkets;
    });
  }
  ngDoCheck() {
    this.route.data.subscribe((res) => {
      if (this.alphabet == true) {
        this.specialMarkets = res.AlphabetMarkets;
      } else {
        this.specialMarkets = res.AllMarkets;
      }
    });
  }

  market(id) {
    this.router.navigate([`./user/markets/market/${id}`]);
  }
}
