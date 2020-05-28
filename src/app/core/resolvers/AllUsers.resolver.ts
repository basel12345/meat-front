import { Injectable } from "@angular/core";

import { Resolve } from "@angular/router";
import { AuthService } from "../service/auth.service";

@Injectable()
export class AllUsersResolver implements Resolve<any> {
  constructor(private authService: AuthService) {}

  resolve() {
    return this.authService.getAllUsers();
  }
}
