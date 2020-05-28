import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { tap } from "rxjs/operators";
import { LocalStorageService } from "../Storage/localStorage.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private service: LocalStorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let modifiedReq;
    let token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      let reqOptions = {
        headers: req.headers.set("x-auth-token", `${token}`),
      };
      modifiedReq = req.clone(reqOptions);
    } else {
      modifiedReq = req.clone();
    }

    return next.handle(modifiedReq).pipe(
      tap((err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 400) {
            this.router.navigate(["../../auth"]);
          }
        }
      })
    );
  }
}
