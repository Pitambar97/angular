import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appOverlayProduct]'
})
export class OverlayProductDirective {

  constructor(private el:ElementRef) { }
  @HostListener('mouseover') onmouseover(){
    this.el.nativeElement.style.position='absolute';
    this.el.nativeElement.style.top='0';
    this.el.nativeElement.style.bottom='0';
    this.el.nativeElement.style.left='0';
    this.el.nativeElement.style.right='0';
    this.el.nativeElement.style.height='100%';
    this.el.nativeElement.style.width='100%';
    this.el.nativeElement.style.opacity='1';
    this.el.nativeElement.style.transition='.5s ease';
    this.el.nativeElement.style.backgroundColor='rgba(67,68,68,0.7)';
   }
   @HostListener('mouseleave') onmouseleave(){
    this.el.nativeElement.style.backgroundColor='transparent';
   }
}
