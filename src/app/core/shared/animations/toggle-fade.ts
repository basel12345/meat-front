import { trigger, style, transition, animate } from "@angular/animations";

export const toggleFade = trigger("fade", [
  transition(":enter", [
    style({ opacity: 0, transform: "translateX(50px)" }),
    animate("2000ms", style({ opacity: 1, transform: "translateX(0px)" })),
  ]),
]);
