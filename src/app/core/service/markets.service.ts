import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment as env } from "../../../environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class MarketsService {
  user: any;
  constructor(private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  // markets
  getAllMarkets() {
    return this.http.get(`${env.url}/auth/getAllMarkets`);
  }

  // Alphabet of markets
  getAlphabetMarkets() {
    return this.http.get(`${env.url}/auth/getAlphabeticalMarkets`);
  }

  // get markets for specific user
  getMarketByUserId() {
    return this.http.get(`${env.url}/auth/getSpecificMarket/${this.user._id}`);
  }

  // get markets by id
  getMarketById(id) {
    return this.http.get(`${env.url}/auth/getSpecificMarket/${id}`);
  }

  // delete market by id
  deleteMarketById(id) {
    return this.http.delete(`${env.url}/auth/user/${id}`);
  }
}
