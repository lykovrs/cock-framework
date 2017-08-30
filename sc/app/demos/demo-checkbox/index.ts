import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-checkbox',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class DemoCheckboxComponent implements OnInit {

  constructor() { }

  isChecked: boolean = false;
  testLabel: string = 'Значение';
  testName: string = 'testNamestr';
  warning: string = 'warning';
  attention: string = 'attention';
  onDark: string = 'onDark';
  onDarkWarning: string = 'onDarkWarning';
  onDarkAttention: string = 'onDarkAttention';

  ngOnInit() {
  }

  private onChangeTest() {
    console.log('test!');
  }
}
