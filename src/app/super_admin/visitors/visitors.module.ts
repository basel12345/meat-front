import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { VisitorsComponent } from "./visitors.component";
import { AllUsersResolver } from "src/app/core/resolvers/AllUsers.resolver";

const routes: Routes = [
  {
    path: "",
    component: VisitorsComponent,
    resolve: {
      AllUsers: AllUsersResolver,
    },
  },
];
@NgModule({
  declarations: [VisitorsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [AllUsersResolver],
})
export class VisitorsModule {}
