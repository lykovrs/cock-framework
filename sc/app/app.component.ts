import { Component, OnInit } from '@angular/core';
import { appRoutes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Solit-clouds framework works!';

  constructor(
  ) {
    appRoutes.map(route => {
      if(route.path.length) {
        this.menu[0].menuItems.push({
          name: route.path,
          url: '/' + route.path,
          isAvailable: true,
          disabled: false
        })
      }
    })
  }

  ngOnInit() {
  }

  private menu = [{
    name: "Компоненты",
    isAvailable: true,
    url: "#",

    menuItems: []
  }]
}
