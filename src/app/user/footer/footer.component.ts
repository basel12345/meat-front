import { Component, OnInit } from "@angular/core";

@Component({
  selector: "footer-root",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  logo = "assets/images/logo.png";
  constructor() {}

  ngOnInit() {}
}
