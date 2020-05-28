import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../../../core/shared/interfaces/products";
import { CartService } from "src/app/core/service/cart.service";
import Swal from "sweetalert2";

@Component({
  selector: "product-root",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  Product: Product;
  numbers: number = 0;
  constructor(private route: ActivatedRoute, private service: CartService) {}
  ngOnInit() {
    this.route.data.subscribe((res) => {
      this.Product = res.SpecificProduct;
    });
  }
  counter(count) {
    if (count === "increas") {
      this.numbers = this.numbers + 1;
    } else if (count === "decreas" && this.numbers > 0) {
      this.numbers = this.numbers - 1;
    }
  }

  submit() {
    this.service
      .addCart(
        this.Product.name,
        this.numbers,
        this.Product.price,
        this.Product.image
      )
      .subscribe((res) => {
        if (res["status"] === true) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: res["message"],
          });
        } else if (res["status"] === false) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: res["message"],
          });
        }
      });
  }
}
