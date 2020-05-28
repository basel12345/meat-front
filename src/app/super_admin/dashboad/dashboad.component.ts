import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MarketsService } from "src/app/core/service/markets.service";

@Component({
  selector: "pdashboad-root",
  templateUrl: "./dashboad.component.html",
  styleUrls: ["./dashboad.component.css"],
})
export class DashboardComponent implements OnInit {
  AllMeats: any;
  AllAdmirals: any;
  Chickens: any;
  AllMarkets: any;
  AllUsers: any;
  single: any[];
  multi: any[];

  view: any[] = [600, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = "Product";
  showYAxisLabel = true;
  yAxisLabel = "Count";

  colorScheme = {
    domain: ["rgb(168, 56, 93)", "rgb(122, 163, 229)", "rgb(162, 126, 168)"],
  };

  users: any[];
  viewUsers: any[] = [600, 400];

  // options
  gradientUser: boolean = true;
  showLegendUser: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = "below";

  colorSchemeUser = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"],
  };
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((res) => {
      this.AllMeats = res.AllMeats;
      this.AllAdmirals = res.AllAdmirals;
      this.Chickens = res.Chickens;
      this.AllMarkets = res.AllMarkets;
      this.AllUsers = res.AllUsers;
    });
    var single = [
      {
        name: "Meats",
        value: this.AllMeats.length,
      },
      {
        name: "Admirals",
        value: this.AllAdmirals.length,
      },
      {
        name: "Chickens",
        value: this.Chickens.length,
      },
    ];

    var users = [
      {
        name: "Users",
        value: this.AllUsers.length,
      },
      {
        name: "Markets",
        value: this.AllMarkets.length,
      },
    ];

    Object.assign(this, { single });
    Object.assign(this, { users });
  }
  onSelect(event) {
    console.log(event);
  }
}
