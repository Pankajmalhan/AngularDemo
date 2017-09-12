import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[Unless]'
})
export class UnlessDirective {

  @Input() set Unless(condtiom:boolean){
    if(!condtiom){
      this.vcRef.createEmbeddedView(this.templateRef)
    }
    else
      {
  
        this.vcRef.clear();
      }
  }
  constructor(private templateRef:TemplateRef<any>, private vcRef:ViewContainerRef) {

   }
}
