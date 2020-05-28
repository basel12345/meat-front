import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  DoCheck,
  AfterViewChecked,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Markets } from "src/app/core/shared/interfaces/markets";
import { popUp } from "src/app/core/shared/animations/popeup";
import { MarketsService } from "src/app/core/service/markets.service";
import { SettingsComponent } from "./settings/settings.component";

@Component({
  selector: "page-market-root",
  templateUrl: "./page-market.component.html",
  styleUrls: ["./page-market.component.css"],
  animations: [popUp],
})
export class PageMarketComponent implements OnInit {
  @ViewChild(SettingsComponent) mySettingsComponent: SettingsComponent;
  Market: Markets;
  add: boolean = false;
  settings: boolean = false;
  edit: boolean = false;
  productId: string;
  constructor(private route: ActivatedRoute, private service: MarketsService) {}

  ngOnInit() {
    this.route.data.subscribe((res) => {
      this.Market = res.MarketByUserId;
      this.Market._id = res.MarketByUserId._id;
      this.Market.username = res.MarketByUserId.username;
      this.Market.email = res.MarketByUserId.email;
      this.Market.description = res.MarketByUserId.description;
      this.Market.cover = res.MarketByUserId.cover;
      this.Market.logo = res.MarketByUserId.logo;
      this.Market.product = res.MarketByUserId.product;
    });
  }

  popUp() {
    this.add = !this.add;
  }

  getAllProducts() {
    this.service.getMarketByUserId().subscribe((res) => {
      this.Market.product = res["product"];
    });
  }

  setting(id) {
    this.productId = id;
    this.settings = !this.settings;
  }

  closePopAdding(event) {
    this.add = event;
    this.getAllProducts();
  }

  closePopSettings(event) {
    this.settings = event;
    this.getAllProducts();
  }

  closePopEdit(event) {
    this.edit = event;
    this.getAllProducts();
  }

  openEdit($event) {
    this.settings = !$event;
    this.edit = $event;
  }
}
