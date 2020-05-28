import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/core/service/auth.service";
import Swal from "sweetalert2";

@Component({
  selector: "visitors-root",
  templateUrl: "./visitors.component.html",
  styleUrls: ["./visitors.component.css"],
})
export class VisitorsComponent implements OnInit {
  AllUsers: any;
  constructor(private route: ActivatedRoute, private service: AuthService) {}

  ngOnInit() {
    this.route.data.subscribe((res) => {
      this.AllUsers = res.AllUsers;
    });
  }

  delete(id) {
    this.service.deleteUserById(id).subscribe((res) => {
      if (res["sccess"] === true) {
        Swal.fire({
          icon: "success",
          title: res["message"],
        });
        this.service.getAllUsers().subscribe((res) => {
          this.AllUsers = res;
        });
      }
    });
  }
}
