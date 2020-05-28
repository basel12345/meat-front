import { Component, OnInit, DoCheck } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../../../core/shared/interfaces/products";
import { toggleFade } from "../../../core/shared/animations/toggle-fade";
@Component({
  selector: "chickens-root",
  templateUrl: "./chickens.component.html",
  styleUrls: ["./chickens.component.css"],
  animations: [toggleFade],
})
export class ChickensComponent implements OnInit, DoCheck {
  product: Product;
  alphabet: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.data.subscribe((res) => {
      this.product = res.Chickens;
    });
  }
  ngDoCheck(): void {
    this.route.data.subscribe((res) => {
      if (this.alphabet === true) {
        this.product = res.AlphabetChickens;
      } else {
        this.product = res.Chickens;
      }
    });
  }

  products(id) {
    this.router.navigate([`/user/product/${id}`]);
  }
}
