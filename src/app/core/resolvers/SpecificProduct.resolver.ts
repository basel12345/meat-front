import { Injectable } from "@angular/core";

import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { ProductsService } from "../service/products.service";

@Injectable()
export class SpecificProductResolver implements Resolve<any> {
  constructor(private productsService: ProductsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    let id = route.params.id;
    return this.productsService.getSpecificProduct(id);
  }
}
