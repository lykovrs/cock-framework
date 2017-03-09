/**
 * Created by dkovalev on 06.03.2017.
 */
import {Component} from '@angular/core';

@Component({
  selector: 'demo-preloader',
  templateUrl: './demo-preloader.component.html',
  styleUrls: ['./demo-preloader.component.scss']
})
export class DemoPreloaderComponent {

  private condition: boolean = false;
  private title: string = 'Тестируем длину этой строки в прелоадере';

  constructor() {
    setTimeout(() => {
      this.condition = true;
    }, 1000);

    setTimeout(() => {
      this.condition = false;
    }, 10000);
  }

}


