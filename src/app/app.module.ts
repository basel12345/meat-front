import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./user/footer/footer.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RoleGuardService } from "./core/shared/Guard/authGuard.service";
import { HttpClientModule } from "@angular/common/http";
import { Interceptors } from "./core/shared/interceptors";
@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [RoleGuardService, Interceptors],
  bootstrap: [AppComponent],
})
export class AppModule {}
