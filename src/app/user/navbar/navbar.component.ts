import { Component, OnInit, DoCheck } from "@angular/core";
import { Router } from "@angular/router";
import { SearchService } from "src/app/core/service/search.service";

@Component({
  selector: "navbar-root",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit, DoCheck {
  logo = "assets/images/logo.png";
  token: string;
  user: any;
  products: any;
  market: any;
  response: Object;
  search: boolean;
  role: any;
  constructor(private router: Router, private service: SearchService) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  ngDoCheck() {
    this.token = localStorage.getItem("token");
    if (this.user) {
      this.role = this.user["isRole"];
    }
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(["../auth"]);
  }

  logIn() {
    this.router.navigate(["../auth"]);
  }

  Search(event) {
    this.service.Search(event.target.value).subscribe((res) => {
      this.response = res;
      this.products = res["products"];
      this.market = res["market"];
    });
  }

  product(id) {
    this.router.navigate([`/user/product/${id}`]);
    this.response = null;
  }

  markets(id) {
    this.router.navigate([`/user/market/${id}`]);
    this.response = null;
  }
}
