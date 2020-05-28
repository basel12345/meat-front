import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AdmiralsComponent } from "./admirals.component";
import { AllAdmiralsResolver } from "../../../core/resolvers/AllAdmirals.resolver";
import { AlphabetAdmiralsResolver } from "../../../core/resolvers/AlphabetAdmirals.resolver";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: "",
    component: AdmiralsComponent,
    resolve: {
      AllAdmirals: AllAdmiralsResolver,
      AlphabetAdmirals: AlphabetAdmiralsResolver,
    },
  },
];

@NgModule({
  declarations: [AdmiralsComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  providers: [AllAdmiralsResolver, AlphabetAdmiralsResolver],
})
export class AdmiralsModule {}
