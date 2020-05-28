import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MeatsComponent } from "./meats.component";
import { AllMeatsResolver } from "../../../core/resolvers/AllMeats.resolver";
import { AlphabetMeatsResolver } from "../../../core/resolvers/AlphabetMeats.resolver";
import { SheepMeatsResolver } from "../../../core/resolvers/SheepMeats.resolver";
import { FormsModule } from "@angular/forms";
import { BovineMeatsResolver } from "../../../core/resolvers/BovineMeats.resolver";

const routes: Routes = [
  {
    path: "",
    component: MeatsComponent,
    resolve: {
      AllMeats: AllMeatsResolver,
      AlphabetMeats: AlphabetMeatsResolver,
      SheepMeats: SheepMeatsResolver,
      BovineMeats: BovineMeatsResolver,
    },
  },
];

@NgModule({
  declarations: [MeatsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  providers: [
    AllMeatsResolver,
    AlphabetMeatsResolver,
    SheepMeatsResolver,
    BovineMeatsResolver,
  ],
})
export class MeatsModule {}
