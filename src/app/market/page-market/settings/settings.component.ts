import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ProductsService } from "src/app/core/service/products.service";

@Component({
  selector: "settings-root",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"],
})
export class SettingsComponent implements OnInit {
  @Input() id: string;
  @Output() close = new EventEmitter<boolean>();
  @Output() edit = new EventEmitter<boolean>();
  constructor(private sevice: ProductsService) {}
  ngOnInit() {}

  delete() {
    this.sevice.deleteProduct(this.id).subscribe((res) => {
      if (res["sccess"] == true) {
        this.close.emit(false);
      }
    });
  }

  edits() {
    this.edit.emit(true);
  }
}
