import { trigger, transition, style, animate } from "@angular/animations";

export const fadeTop = trigger("top", [
  transition(":enter", [
    style({ opacity: 0, transform: "translatey(-50px)" }),
    animate("2000ms", style({ opacity: 1, transform: "translatey(0)" })),
  ]),
]);
