import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "src/app/core/service/products.service";
import Swal from "sweetalert2";

@Component({
  selector: "products-root",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  AllProduct: any;
  constructor(
    private route: ActivatedRoute,
    private service: ProductsService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((res) => {
      this.AllProduct = res.AllProduct;
    });
  }

  delete(id) {
    this.service.deleteProduct(id).subscribe((res) => {
      if (res["sccess"] === true) {
        Swal.fire({
          icon: "success",
          title: res["message"],
        });
        this.service.getAllProduct().subscribe((res) => {
          this.AllProduct = res;
        });
      }
    });
  }
}
