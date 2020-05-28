import { Component, DoCheck } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "user-root",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements DoCheck {
  user: any;
  role: number;
  constructor(private router: Router) {}
  ngDoCheck() {
    this.user = JSON.parse(localStorage.getItem("user"));
    if (this.user) {
      this.role = this.user["isRole"];
    }
  }
  cart() {
    this.router.navigate(["./user/cart"]);
  }
}
