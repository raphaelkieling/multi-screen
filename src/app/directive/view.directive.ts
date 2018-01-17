import { Directive } from '@angular/core';
import { ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appView]'
})
export class ViewDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
