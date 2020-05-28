import { trigger, transition, style, animate } from "@angular/animations";

export const fadeIn = trigger("fadeIn", [
  transition(":enter", [
    style({ opacity: 0, width: "20%" }),
    animate("1500ms", style({ opacity: 1, width: "100%" })),
  ]),
]);
