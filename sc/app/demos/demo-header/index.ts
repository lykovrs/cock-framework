import {Component, OnInit} from '@angular/core';

import {IScMenu} from 'ui-kit/sc-menu/sc-menu-item/sc-menu-item.interface';
import {IScProfile} from "ui-kit/sc-page-header/sc-page-header/sc-page-header.interface";

import {testMenuData} from '../demo-menu/test-menu-data';

@Component({
    selector: 'demo-header',
    templateUrl: './index.html'
})
export class DemoHeader implements OnInit {

  private menu: Array<IScMenu> = null;
  private profile: IScProfile = null;

  constructor() {}
  ngOnInit() {
    this.menu = testMenuData;
    this.profile = {
      fullName: "Сергеев Иван Иванович",
      shortName: "Сергеев И.И.",
      lpuName: 'ГБУЗ г. Москвы "Городская поликлиника № 175 ДЗМ"',
      // avatar: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSNi-OzcvVngGTge23EkjIVecDnZOUUFvyuEozHI-0-5DG73RLmZg",
      role: "Врач",
      contractName: "Медицинский регистратор",
      avialibleResourceName: 'тестовое имя ресурса',
      onClickChangeProfile: function (e) { return alert(e); },
      onClickExit: function (e) { return alert(e); },
      onClickSendProblem: function (e) { return alert(e); },
      onClickSettings: function (e) { return alert(e); }
    };
  }
}

