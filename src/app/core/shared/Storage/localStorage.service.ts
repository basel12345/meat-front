import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap } from "rxjs/internal/operators";
import { throwError } from "rxjs/internal/observable/throwError";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  constructor(private http: HttpClient) {}

  setToken(token) {
    localStorage.setItem("token", JSON.stringify(token));
  }

  setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
}
