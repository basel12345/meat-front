import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "register-root",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  registerUser: string = "assets/images/Layer 5@2x.png";
  registeMarket: string = "assets/images/shop@2x.png";
  user: boolean = true;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {}

  registerUsers() {
    this.user = true;
  }
  registerMarkets() {
    this.user = false;
  }
}
