import { Component, OnInit } from "@angular/core";

@Component({
  selector: "auth-root",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent implements OnInit {
  loginPage: boolean = false;
  backgroundColor: string = "background:#f64c4c";
  Color: string = "color:#FFFF";
  constructor() {}
  ngOnInit() {}

  login() {
    this.loginPage = true;
  }

  register() {
    this.loginPage = false;
  }
}
