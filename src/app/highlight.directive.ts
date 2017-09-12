import { log } from 'util';

import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input, Renderer, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit {

@Input('color') defaultColor:string;
  constructor(private elementRef:ElementRef, private renderer: Renderer2) { 

    // this.elementRef.nativeElement.style.backgroundColor='green';
    // this.renderer.setElementStyle(this.elementRef.nativeElement,'color','red');
  }
ngOnInit() {
    //this.renderer.setAttribute(this.elementRef.nativeElement, '[yearRange]', '1900:2100');
  }
   ngAfterViewInit() {
    // Component views are initialized
    this.c_colorrr=this.defaultColor;
  }

  @HostListener('copy',['$event']) copy($event){
      this.c_colorrr= "blue"; 
     $event.preventDefault();
  }
  @HostListener('cut',['$event']) cut($event){
    $event.preventDefault();
  }
  @HostListener('paste',['$event']) paste($event){
    $event.preventDefault();
  }
    
   @HostBinding('style.color') c_colorrr = this.defaultColor; 
}
