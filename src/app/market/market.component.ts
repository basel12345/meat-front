import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "market-root",
  templateUrl: "./market.component.html",
})
export class MarketComponent {
  constructor(private router: Router) {}
}
