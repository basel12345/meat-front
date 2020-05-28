import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ChickensComponent } from "./chickens.component";
import { ChickensResolver } from "../../../core/resolvers/chickens.resolver";
import { AlphabetChickensResolver } from "../../../core/resolvers/AlphabetChickens.resolver";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: "",
    component: ChickensComponent,
    resolve: {
      Chickens: ChickensResolver,
      AlphabetChickens: AlphabetChickensResolver,
    },
  },
];

@NgModule({
  declarations: [ChickensComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  providers: [ChickensResolver, AlphabetChickensResolver],
})
export class ChickensModule {}
