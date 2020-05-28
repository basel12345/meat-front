import { Component, OnInit } from "@angular/core";

@Component({
  selector: "home-root",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor() {}
  firstImage: string = "assets/images/meat-black-tray-label-beef-topside-2.png";

  background: string = "assets/images/Path 122.png";
  logoCar: string = "assets/images/Group 185.png";

  specialMarkets = [
    { name: "متجر اللحوم", image: "assets/images/Group 210.png" },
    { name: "متاجر العثيم", image: "assets/images/Group 210.png" },
    { name: "لولو هايبر ماركت", image: "assets/images/Group 210.png" },
    { name: "متاجر العثيم", image: "assets/images/Group 210.png" },
  ];

  specialProduct = [
    {
      name: "متجر اللحوم",
      image: "assets/images/NoPath.png",
      seller: "assets/images/Path 17.png",
    },
    {
      name: "متاجر العثيم",
      image: "assets/images/NoPath - Copy (18).png",
      seller: "assets/images/Path 17.png",
    },
    {
      name: "لولو هايبر ماركت",
      image: "assets/images/NoPath - Copy (11).png",
      seller: "assets/images/Path 17.png",
    },
    {
      name: "متاجر العثيم",
      image: "assets/images/NoPath - Copy (2).png",
      seller: "assets/images/Path 17.png",
    },
  ];

  ngOnInit() {}
}
