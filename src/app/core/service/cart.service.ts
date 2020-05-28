import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment as env } from "../../../environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class CartService {
  user: any;
  constructor(private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  // get cart for specific user
  getCart() {
    return this.http.get(`${env.url}/auth/getSpecificUser/${this.user._id}`);
  }

  // adding in  cart
  addCart(name, weight, price, image) {
    let cart = {
      name,
      weight,
      price,
      image,
    };
    if (this.user) {
      return this.http.post(`${env.url}/cart/addCart/${this.user._id}`, cart);
    }
  }

  // delete Cart
  deleteCart(id) {
    return this.http.delete(`${env.url}/cart/deleteCart/${id}`);
  }
}
