import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'demo-radio',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class DemoRadioComponent implements OnInit {

  testLabel: string = 'Значение';
  warning: string = 'warning';
  attention: string = 'attention';
  testV1: string = 'testV1';
  testV2: string = 'testV2';
  testV3: string = 'testV3';
  testV4: string = 'testV4';
  name1: string = 'name1';
  name2: string = 'name2';
  name3: string = 'name3';
  model: string = 'testV1';

  ngOnInit() {
  }

  private onChangeTest() {
    console.log('test!');
  }
}


