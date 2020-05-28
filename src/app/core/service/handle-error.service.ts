import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs/internal/observable/throwError";
import Swal from "sweetalert2";

@Injectable({
  providedIn: "root",
})
export class HandleErrorService {
  constructor() {}
  logError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log("Client side Error", error);
    } else {
      Swal.fire({
        icon: "error",
        title: error.error.status,
        text: error.error,
      });
    }
    return throwError(error.statusText);
  }
}
