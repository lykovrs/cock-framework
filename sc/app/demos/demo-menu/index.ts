import { Component, OnInit} from '@angular/core';
import {IScMenu} from 'ui-kit/sc-menu/sc-menu-item/sc-menu-item.interface';

import {testMenuData} from './test-menu-data';

@Component({
  selector: 'demo-menu',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class DemoMenuComponent implements OnInit {

  private demoMenuItems: Array<IScMenu> = [];

  constructor() {}
  ngOnInit() {
    this.demoMenuItems = testMenuData
  }
}

