import { Directive ,ElementRef ,HostListener} from '@angular/core';

@Directive({
  selector: '[RedColor]'
})
export class RedColorDirective {

  constructor(el: ElementRef) {
  el.nativeElement.style.color = "red";
 }

 @HostListener('mouseover') onHover() {
   window.alert("hover");
 }

}
