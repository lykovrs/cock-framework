import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sc-tag',
  templateUrl: './sc-tag.component.html',
  styleUrls: ['./sc-tag.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ScTagComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  remove(e) {
    console.log(e)
  }
}
