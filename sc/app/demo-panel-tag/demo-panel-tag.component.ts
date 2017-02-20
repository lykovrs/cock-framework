import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-panel-tag',
  templateUrl: './demo-panel-tag.component.html',
  styleUrls: ['./demo-panel-tag.component.scss']
})
export class DemoPanelTagComponent implements OnInit {
  public items = []
  constructor() {
    for(let i=0; i < 150; i++) {
      this.items.push({title: `This is ${i} title`})
    }

    console.log(this.items)
  }

  ngOnInit() {
  }

  remove(item) {
    console.log(item);
  }
}
