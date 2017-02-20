import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'demo-panel',
  templateUrl: './demo-panel.component.html',
  styleUrls: ['./demo-panel.component.scss']
})
export class DemoPanelComponent implements OnInit {

  titleTest1 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aspernatur autem distinctio ea esse est exercitationem facilis harum impedit magnam maxime natus necessitatibus, officia quam quos sequi vitae voluptate.';
  sizeTest1= 'normal';
  colorTest1 = 'light';
  iconUrlTest1 = 'svg/delete.svg';

  titleTest2 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aspernatur autem distinctio ea esse est exercitationem facilis harum impedit magnam maxime natus necessitatibus, officia quam quos sequi vitae voluptate.';
  sizeTest2= 'normal';
  colorTest2 = 'grey';
  iconUrlTest2 = 'svg/indicator.svg';

  titleTest3 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aspernatur autem distinctio ea esse est exercitationem facilis harum impedit magnam maxime natus necessitatibus, officia quam quos sequi vitae voluptate.';
  sizeTest3= 'normal';
  colorTest3 = 'teal';

  ngOnInit() {
  }
}


