import { Component, OnInit} from '@angular/core';
import {IScMenu} from 'ui-kit/sc-menu/sc-menu-item/sc-menu-item.interface';
import {ITeaser, TeaserTypes} from 'ui-kit/sc-teaser/sc-teaser.interface';

import {testMenuData} from './test-menu-data';

@Component({
  selector: 'demo-menu',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
  moduleId : 'ScTeaserModule',
})
export class DemoMenuComponent implements OnInit {

  private demoMenuItems: Array<IScMenu> = [];
  private teasers: Array<ITeaser> = [];

  constructor() {}
  ngOnInit() {
    this.demoMenuItems = testMenuData;
    let arr = [5, 25, 365, 1032];
    for(let i in TeaserTypes) {
      if(Number.isInteger(parseInt(i))) {
        for (let j in arr) {
          this.teasers.push({
            num: arr[j],
            type: TeaserTypes[i]
          });
        }
      }
    }
  }
}
