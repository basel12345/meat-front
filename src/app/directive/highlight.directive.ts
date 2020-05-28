import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  Input,
} from "@angular/core";

@Directive({
  selector: "[appHighLight]",
})
export class HighLightDirective {
  @Input("appHighLight") color: string;
  @HostListener("mouseover") onMouseOver() {
    this.highLight(this.color || "red");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highLight("blue");
  }
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // this.el.nativeElement.style.backgroundColor = "green";
    // this.renderer.setStyle(el.nativeElement, "backgroundColor", "green");
  }

  highLight(color: string) {
    this.renderer.setStyle(this.el.nativeElement, "backgroundColor", color);
  }
}
