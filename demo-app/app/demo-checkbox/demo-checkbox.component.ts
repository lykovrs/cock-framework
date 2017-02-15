import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-checkbox',
  templateUrl: './demo-checkbox.component.html',
  styleUrls: ['./demo-checkbox.component.scss']
})
export class DemoCheckboxComponent implements OnInit {

  constructor() { }

  isChecked: boolean = false;
  testLabel: string = 'Значение';
  testName: string = 'testNamestr';
  warning: string = 'warning';
  attention: string = 'attention';

  ngOnInit() {
  }

  private onChangeTest() {
    console.log('test!');
  }
}
