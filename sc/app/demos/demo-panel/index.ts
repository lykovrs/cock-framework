import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'demo-panel',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class DemoPanelComponent implements OnInit {
  longTitleText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aspernatur autem distinctio ea esse est exercitationem facilis harum impedit magnam maxime natus necessitatibus, officia quam quos sequi vitae voluptate.';

  sizeTest1= 'normal';
  colorTest1 = 'light';
  iconUrlTest1 = 'sc/svg/delete.svg';

  sizeTest2= 'lg';
  colorTest2 = 'grey';
  iconUrlTest2 = 'sc/svg/indicator.svg';

  sizeTest3= 'normal';
  colorTest3 = 'teal';

  ngOnInit() {
  }
}


