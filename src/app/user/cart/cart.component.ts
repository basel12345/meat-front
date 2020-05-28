import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Cart } from "src/app/core/shared/interfaces/cart";
import { CartService } from "src/app/core/service/cart.service";
import Swal from "sweetalert2";

@Component({
  selector: "cart-root",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  Cart: Cart;
  price = [];
  weight = [];
  totalWeight: number;
  totalPrice: number;

  constructor(private route: ActivatedRoute, private service: CartService) {}
  ngOnInit() {
    this.route.data.subscribe((res) => {
      this.Cart = res.Cart["cart"];
    });
    this.calculate();
  }

  calculate() {
    for (const key in this.Cart) {
      if (this.Cart.hasOwnProperty(key)) {
        this.price.push(this.Cart[key].price);
        this.weight.push(this.Cart[key].weight);
      }
    }
    this.price.reduce((pervious: number, value: number) => {
      return (this.totalPrice = pervious + value);
    });
    this.weight.reduce((pervious: number, value: number) => {
      return (this.totalWeight = pervious + value);
    });
  }

  deleteCart(id) {
    this.service.deleteCart(id).subscribe((res) => {
      if (res["sccess"] == true) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: res["message"],
        });
        this.service.getCart().subscribe((res) => {
          this.Cart = res["cart"];
        });
        this.calculate();
      } else if (res["sccess"] == false) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: res["message"],
        });
      }
    });
  }
}
