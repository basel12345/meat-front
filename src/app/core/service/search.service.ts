import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment as env } from "../../../environments/environment.prod";
@Injectable({
  providedIn: "root",
})
export class SearchService {
  constructor(private http: HttpClient) {}

  Search(value) {
    return this.http.get(`${env.url}/search/`, {
      params: { name: value },
    });
  }
}
