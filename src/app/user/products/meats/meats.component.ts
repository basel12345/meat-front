import { Component, OnInit, DoCheck } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../../../core/shared/interfaces/products";
import { fadeIn } from "../../../core/shared/animations/fade-in";
import { toggleFade } from "../../../core/shared/animations/toggle-fade";

@Component({
  selector: "meats-root",
  templateUrl: "./meats.component.html",
  styleUrls: ["./meats.component.css"],
  animations: [fadeIn, toggleFade],
})
export class MeatsComponent implements OnInit, DoCheck {
  specialProduct: Product;
  alphabet: boolean = false;
  sheep: boolean = false;
  bovine: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.route.data.subscribe((res) => {
      this.specialProduct = res.AllMeats;
    });
  }

  ngDoCheck() {
    this.route.data.subscribe((res) => {
      if (this.alphabet == true) {
        this.specialProduct = res.AlphabetMeats;
      } else if (this.sheep == true) {
        this.specialProduct = res.SheepMeats;
      } else if (this.bovine == true) {
        this.specialProduct = res.BovineMeats;
      } else {
        this.specialProduct = res.AllMeats;
      }
    });
  }

  product(id) {
    this.router.navigate([`/user/product/${id}`]);
  }
}
