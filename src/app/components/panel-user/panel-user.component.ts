import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../service/config.service';

@Component({
  selector: 'app-panel-user',
  templateUrl: './panel-user.component.html',
  styleUrls: ['./panel-user.component.css']
})
export class PanelUserComponent implements OnInit {

  constructor(public configS: ConfigService) { }

  ngOnInit() {
  }

  close() {
    this.configS.detachComponent(PanelUserComponent);
  }

  change(value) {
    this.configS.name = value;
  }

}
