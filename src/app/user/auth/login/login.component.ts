import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/service/auth.service";
import { Router } from "@angular/router";
import { LocalStorageService } from "src/app/core/shared/Storage/localStorage.service";

@Component({
  selector: "login-root",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  token: any;
  user: any;

  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private localStorage: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [
        "",
        [Validators.required, Validators.email, Validators.pattern(".*com$")],
      ],
      password: ["", Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  submit() {
    this.service.login(this.loginForm.getRawValue()).subscribe((res) => {
      if (res["user"]) {
        if (res["user"].isRole === 1) {
          this.router.navigate(["./super_admin/home"]);
        } else if (res["user"].isRole === 2) {
          this.router.navigate(["./market/page-market"]);
        } else if (res["user"].isRole === 3) {
          this.router.navigate(["./user/home"]);
        }
        this.token = res["token"];
        this.user = res["user"];
        this.localStorage.setToken(this.token);
        this.localStorage.setUser(this.user);
      }
    });
  }
}
