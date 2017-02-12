import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cock-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() mod: String;
  @Input() disabled: String;
}
