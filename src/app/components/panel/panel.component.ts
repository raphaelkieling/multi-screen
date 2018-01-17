import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../service/config.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(public configS: ConfigService) { }

  ngOnInit() {
  }

  close() {
    this.configS.detachComponent(PanelComponent);
  }

}
