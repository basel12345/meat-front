import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { validatePassword } from "src/app/validators/password.validators";
import { AuthService } from "src/app/core/service/auth.service";
import { LocalStorageService } from "src/app/core/shared/Storage/localStorage.service";

@Component({
  selector: "register-market",
  templateUrl: "./register_market.component.html",
  styleUrls: ["./register_market.component.css"],
})
export class RegisterMarketComponent implements OnInit {
  firstStepForm: FormGroup;
  secondStepForm: FormGroup;
  thirdStepForm: FormGroup;
  stepOne: boolean = true;
  stepthird: boolean = true;
  token: any;
  user: any;
  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private localStorage: LocalStorageService,
    private router: Router
  ) {}
  ngOnInit() {
    this.firstStepForm = this.fb.group(
      {
        name: ["", Validators.required],
        email: [
          "",
          [Validators.required, Validators.email, Validators.pattern(".*com$")],
        ],
        password: ["", Validators.required],
        confirmPassword: ["", [Validators.required]],
        accountNumber: ["", Validators.required],
        iban: ["", Validators.required],
      },
      validatePassword("password", "confirmPassword")
    );
    this.secondStepForm = this.fb.group({
      statusCard: ["", Validators.required],
      commercialRegister: ["", Validators.required],
      taxCertificate: ["", Validators.required],
      menu: ["", Validators.required],
      logo: ["", Validators.required],
      cover: ["", Validators.required],
      description: ["", Validators.required],
      isRole: [2, Validators.required],
    });
  }

  get f() {
    return this.firstStepForm.controls;
  }

  get f2() {
    return this.secondStepForm.controls;
  }

  submit() {
    this.stepOne = false;
  }

  statusCardChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.secondStepForm.patchValue({
        statusCard: file,
      });
    }
  }

  commercialRegisterChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.secondStepForm.patchValue({
        commercialRegister: file,
      });
    }
  }

  taxCertificateChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.secondStepForm.patchValue({
        taxCertificate: file,
      });
    }
  }

  menuChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.secondStepForm.patchValue({
        menu: file,
      });
    }
  }

  logoChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.secondStepForm.patchValue({
        logo: file,
      });
    }
  }

  coverChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.secondStepForm.patchValue({
        cover: file,
      });
    }
  }

  submit2() {
    const formData = new FormData();
    formData.append("username", this.firstStepForm.get("name").value);
    formData.append("email", this.firstStepForm.get("email").value);
    formData.append("password", this.firstStepForm.get("password").value);
    formData.append(
      "confirmPassword",
      this.firstStepForm.get("confirmPassword").value
    );
    formData.append(
      "numberAccount",
      this.firstStepForm.get("accountNumber").value
    );
    formData.append("IBAN", this.firstStepForm.get("iban").value);
    formData.append("ownersCard", this.secondStepForm.get("statusCard").value);
    formData.append(
      "commercialRegister",
      this.secondStepForm.get("commercialRegister").value
    );
    formData.append(
      "taxCertificate",
      this.secondStepForm.get("taxCertificate").value
    );
    formData.append("menu", this.secondStepForm.get("menu").value);
    formData.append("logo", this.secondStepForm.get("logo").value);
    formData.append("cover", this.secondStepForm.get("cover").value);
    formData.append(
      "description",
      this.secondStepForm.get("description").value
    );
    formData.append("isRole", this.secondStepForm.get("isRole").value);
    this.service.registerMarket(formData).subscribe((res) => {
      if (res["status"] === true) {
        this.token = res["token"];
        this.user = res["user"];
        this.localStorage.setToken(this.token);
        this.localStorage.setUser(this.user);
        this.router.navigate(["../../../../market"]);
      }
    });
  }
}
