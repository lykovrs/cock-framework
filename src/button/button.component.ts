import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cock-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {


  constructor() {

  }

  ngOnInit() {
  }

  next(event) {
    console.log(event)
    this.clickButton.emit(event);
  }

  @Input() mod: String;
  @Input() disabled: String;
  @Output() clickButton = new EventEmitter();
}
