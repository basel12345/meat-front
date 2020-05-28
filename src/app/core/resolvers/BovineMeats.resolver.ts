import { Injectable } from "@angular/core";

import { Resolve } from "@angular/router";
import { ProductsService } from "../service/products.service";

@Injectable()
export class BovineMeatsResolver implements Resolve<any> {
  constructor(private productsService: ProductsService) {}

  resolve() {
    return this.productsService.getBovineMeats();
  }
}
