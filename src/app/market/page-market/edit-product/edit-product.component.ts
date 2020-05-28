import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProductsService } from "src/app/core/service/products.service";

@Component({
  selector: "edit-product-root",
  templateUrl: "./edit-product.component.html",
  styleUrls: ["./edit-product.component.css"],
})
export class EditProductComponent implements OnInit {
  productForm: FormGroup;
  appearInput: boolean = false;
  @Input() id: string;
  @Output() close = new EventEmitter<boolean>();
  Types = [
    { value: "meat", id: "1" },
    { value: "admirals", id: "2" },
    { value: "chicken", id: "3" },
  ];

  MeatType = [
    { value: "بقري", id: "1" },
    { value: "غنم", id: "2" },
  ];
  constructor(private service: ProductsService, private fb: FormBuilder) {}
  ngOnInit() {
    this.productForm = this.fb.group({
      name: ["", Validators.required],
      price: ["", Validators.required],
      type: ["", Validators.required],
      meatType: [null, Validators.required],
      weight: ["", Validators.required],
      description: ["", Validators.required],
    });
    this.getProduct();
    this.setMeatTypeValidators();
  }

  getProduct() {
    this.service.getSpecificProduct(this.id).subscribe((res) => {
      this.productForm.patchValue(res);
    });
  }

  get f() {
    return this.productForm.controls;
  }

  setMeatTypeValidators() {
    const meatType = this.productForm.get("meatType");

    this.productForm.get("type").valueChanges.subscribe((type) => {
      if (type === "meat") {
        this.appearInput = true;
        meatType.setValidators([Validators.required]);
      }

      if (type === "admirals" || type === "chicken") {
        meatType.setValidators(null);
        meatType.reset();
        this.appearInput = false;
      }

      meatType.updateValueAndValidity();
    });
  }

  closed() {
    this.close.emit(false);
  }

  onSubmit() {
    this.service
      .editProduct(
        this.id,
        this.productForm.get("name").value,
        this.productForm.get("price").value,
        this.productForm.get("type").value,
        this.productForm.get("meatType").value,
        this.productForm.get("weight").value,
        this.productForm.get("description").value
      )
      .subscribe((res) => {
        if (res["status"] == true) {
          this.close.emit(false);
        }
      });
  }
}
