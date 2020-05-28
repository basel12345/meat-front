import { Component, OnInit, DoCheck } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "navbar-root",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit, DoCheck {
  logo = "assets/images/logo.png";
  token: string;
  constructor(private router: Router) {}

  ngOnInit() {}

  ngDoCheck() {
    this.token = localStorage.getItem("token");
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(["../auth"]);
  }

  logIn() {
    this.router.navigate(["../auth"]);
  }
}
