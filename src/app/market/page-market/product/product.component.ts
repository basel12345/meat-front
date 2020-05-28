import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProductsService } from "src/app/core/service/products.service";

@Component({
  selector: "product-root",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  productForm: FormGroup;
  appearInput: boolean = false;
  @Input() MarketId: string;
  @Output() add = new EventEmitter<boolean>();
  Types = [
    { value: "meat", id: "1" },
    { value: "admirals", id: "2" },
    { value: "chicken", id: "3" },
  ];

  MeatType = [
    { value: "بقري", id: "1" },
    { value: "غنم", id: "2" },
  ];
  constructor(private sevice: ProductsService, private fb: FormBuilder) {}
  ngOnInit() {
    this.productForm = this.fb.group({
      name: ["", Validators.required],
      price: ["", Validators.required],
      image: ["", Validators.required],
      type: ["", Validators.required],
      meatType: [null, Validators.required],
      weight: ["", Validators.required],
      description: ["", Validators.required],
    });
    this.setMeatTypeValidators();
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
        this.appearInput = false;
      }

      meatType.updateValueAndValidity();
    });
  }

  imageHandler(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.productForm.patchValue({
        image: file,
      });
    }
  }

  close() {
    this.add.emit(false);
  }

  onSubmit() {
    const formData = new FormData();

    if (this.productForm.get("type").value === "meat") {
      formData.append("name", this.productForm.get("name").value);
      formData.append("price", this.productForm.get("price").value);
      formData.append("image", this.productForm.get("image").value);
      formData.append("type", this.productForm.get("type").value);
      formData.append("meatType", this.productForm.get("meatType").value);
      formData.append("weight", this.productForm.get("weight").value);
      formData.append("description", this.productForm.get("description").value);
    } else {
      formData.append("name", this.productForm.get("name").value);
      formData.append("price", this.productForm.get("price").value);
      formData.append("image", this.productForm.get("image").value);
      formData.append("type", this.productForm.get("type").value);
      formData.append("weight", this.productForm.get("weight").value);
      formData.append("description", this.productForm.get("description").value);
    }
    this.sevice.addProduct(formData).subscribe((res) => {
      console.log(res);
      if (res["status"] == true) {
        this.add.emit(false);
      }
    });
  }
}
