import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment as env } from "../../../environments/environment.prod";
@Injectable({
  providedIn: "root",
})
export class ProductsService {
  user: any;
  Product: Object;
  constructor(private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  // all products
  getAllProduct() {
    return this.http.get(`${env.url}/products/getAllProduct`);
  }

  // chickens
  getAllChickens() {
    return this.http.get(`${env.url}/products/getAllChickens`);
  }

  // Alphabet of chicks
  getAlphabetChickens() {
    return this.http.get(`${env.url}/products/getAlphabeticalChickens`);
  }

  // meats
  getAllMeats() {
    return this.http.get(`${env.url}/products/getAllMeats`);
  }

  // Alphabet of meats
  getAlphabetMeats() {
    return this.http.get(`${env.url}/products/getAlphabeticalMeats`);
  }

  // sheep meats
  getSheepMeats() {
    return this.http.get(`${env.url}/products/getSheepMeats`);
  }

  // bovine meats
  getBovineMeats() {
    return this.http.get(`${env.url}/products/getBovineMeats`);
  }

  // admirals
  getAllAdmirals() {
    return this.http.get(`${env.url}/products/getAllAdmirals`);
  }

  // Alphabet of admirals
  getAlphabetAdmirals() {
    return this.http.get(`${env.url}/products/getAlphabeticalAdmirals`);
  }

  // specific product
  getSpecificProduct(id) {
    return this.http.get(`${env.url}/products/getSpecificProduct/${id}`);
  }

  // adding product
  addProduct(Product) {
    console.log(this.user._id);
    return this.http.post(
      `${env.url}/products/addProduct/${this.user._id}`,
      Product
    );
  }

  // updating product
  editProduct(id, name, price, type, meatType, weight, description) {
    if (type === "meat") {
      this.Product = {
        name,
        price,
        type,
        meatType,
        weight,
        description,
      };
    } else {
      this.Product = {
        name,
        price,
        type,
        weight,
        description,
      };
    }
    return this.http.put(
      `${env.url}/products/UpdateProduct/${id}`,
      this.Product
    );
  }

  // delete Product by id product
  deleteProduct(id) {
    return this.http.delete(`${env.url}/products/deleteProduct/${id}`);
  }
}
