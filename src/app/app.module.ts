import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { PanelComponent, PanelUserComponent } from './components';
import { ViewDirective } from './directive/view.directive';
import { ConfigService } from './service/config.service';

const panels = [
  PanelComponent,
  PanelUserComponent
]

@NgModule({
  declarations: [
    AppComponent,
    ViewDirective,
    ...panels
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    ...panels
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
