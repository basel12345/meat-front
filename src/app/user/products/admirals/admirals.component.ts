import { Component, OnInit, DoCheck } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../../../core/shared/interfaces/products";

@Component({
  selector: "admirals-root",
  templateUrl: "./admirals.component.html",
  styleUrls: ["./admirals.component.css"],
})
export class AdmiralsComponent implements OnInit, DoCheck {
  specialProduct: Product;
  alphabet: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.route.data.subscribe((res) => {
      this.specialProduct = res.AllAdmirals;
    });
  }

  ngDoCheck() {
    this.route.data.subscribe((res) => {
      if (this.alphabet === true) {
        this.specialProduct = res.AlphabetAdmirals;
      } else {
        this.specialProduct = res.AllAdmirals;
      }
    });
  }

  product(id) {
    this.router.navigate([`/user/product/${id}`]);
  }
}
