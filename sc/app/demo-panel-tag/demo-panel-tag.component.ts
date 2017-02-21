import { Component } from '@angular/core';

@Component({
  selector: 'demo-panel-tag',
  templateUrl: './demo-panel-tag.component.html',
  styleUrls: ['./demo-panel-tag.component.scss']
})
export class DemoPanelTagComponent {
  public items = []
  constructor() {
    for(let i=0; i < 150; i++) {
      this.items.push({title: `This is ${i} title`})
    }

  }

  showItem(item) {
    console.log(item)
  }

  removeItem(item) {
    alert("Вы удалили таг " + item.title);
  }
}
