import { trigger, transition, style, animate } from "@angular/animations";

export const popUp = trigger("toggle-pop", [
  transition(":enter", [
    style({ opacity: 0 }),
    animate("1000ms", style({ opacity: 1 })),
  ]),
  transition(":leave", [animate("1000ms", style({ opacity: 0 }))]),
]);
