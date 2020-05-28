import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { RegisterUserComponent } from "./register/register_user/register_user.component";
import { RegisterMarketComponent } from "./register/register_market/register_market.component";

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
  },
];

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    RegisterUserComponent,
    RegisterMarketComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  providers: [],
})
export class UsersModule {}
