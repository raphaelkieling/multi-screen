import { PanelUserComponent } from './components/panel-user/panel-user.component';
import { ConfigService } from './service/config.service';
import { PanelComponent } from './components/panel/panel.component';
import { ViewDirective } from './directive/view.directive';
import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild(ViewDirective) view: ViewDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private configS: ConfigService
  ) { }

  openPanel() {
    this.configS.appendComponentToBody(PanelComponent, this.view);
  }

  openPanelUser() {
    this.configS.appendComponentToBody(PanelUserComponent, this.view);
  }

  closePanelUser(){
    this.configS.detachComponent(PanelUserComponent);
  }

}
