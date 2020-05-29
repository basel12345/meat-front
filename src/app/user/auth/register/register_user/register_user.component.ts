import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { validatePassword } from "src/app/validators/password.validators";
import { AuthService } from "src/app/core/service/auth.service";
import { Router } from "@angular/router";
import { LocalStorageService } from "src/app/core/shared/Storage/localStorage.service";

@Component({
  selector: "register-user",
  templateUrl: "./register_user.component.html",
  styleUrls: ["./register_user.component.css"],
})
export class RegisterUserComponent implements OnInit {
  registerUserForm: FormGroup;
  token: any;
  user: any;
  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private localStorage: LocalStorageService,
    private router: Router
  ) {}
  ngOnInit() {
    this.registerUserForm = this.fb.group(
      {
        username: ["", Validators.required],
        email: [
          "",
          [Validators.required, Validators.email, Validators.pattern(".*com$")],
        ],
        password: ["", Validators.required],
        confirmPassword: ["", [Validators.required]],
        address: ["", Validators.required],
        isRole: [3, Validators.required],
      },
      validatePassword("password", "confirmPassword")
    );
  }

  get f() {
    return this.registerUserForm.controls;
  }

  submit() {
    this.service
      .registerUser(this.registerUserForm.getRawValue())
      .subscribe((res) => {
        if (res["status"] === true) {
          this.token = res["token"];
          this.user = res["user"];
          this.localStorage.setToken(this.token);
          this.localStorage.setUser(this.user);
          this.router.navigate(["./user/home"]);
        }
      });
  }
}
