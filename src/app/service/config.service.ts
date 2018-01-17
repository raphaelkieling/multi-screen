import { ViewDirective } from './../directive/view.directive';
import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { ViewRef } from '@angular/core/src/linker/view_ref';
import { ComponentRef } from '@angular/core';

@Injectable()
export class ConfigService {

  windows: ComponentRef<any>[] = [];
  name:string = '';

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  appendComponentToBody(component: any, viewChild: ViewDirective) {
    this.detachComponent(component);

    const componentRef = this.componentFactoryResolver.resolveComponentFactory(component);
    const view = viewChild.viewContainerRef;

    const viewRef = view.createComponent(componentRef);
    this.windows.push(viewRef);
  }

  detachComponent(component) {
    this.windows.map((window: ComponentRef<any>) => {
      if (component === window.componentType) {
        window.destroy();
      }
    });
  }
}
