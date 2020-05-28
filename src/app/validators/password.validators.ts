import { FormGroup, ValidatorFn } from "@angular/forms";

export function validatePassword(
  control1: string,
  control2: string
): ValidatorFn {
  return (formGroup: FormGroup): { [key: string]: boolean } | null => {
    const password = formGroup.controls[control1];
    const confirmPassword = formGroup.controls[control2];
    if (
      password.dirty &&
      confirmPassword.dirty &&
      password.value !== confirmPassword.value
    ) {
      confirmPassword.setErrors({
        wrrongPassword: true,
      });
    }
    return null;
  };
}

// export function validatePassword(
//   formGroup: FormGroup
// ): { [key: string]: boolean } | null {
//   console.log(formGroup);
//   return null;
// }
