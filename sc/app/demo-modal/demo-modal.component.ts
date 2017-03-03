import { Component } from '@angular/core';
import { ScModalService } from '../../ui-kit/sc-modal/sc-modal.service';
import { NgbdModalContent } from './demo-modal-content.component';

@Component({
  selector: 'demo-modal',
  templateUrl: './demo-modal.component.html',
  styleUrls: ['./demo-modal.component.scss']
})
export class DemoModalComponent {

  constructor(private scModalService: ScModalService) { }

  /**
   * Тестируем открытие модального окна со своим компонентом
   */
  testCustomOpen() {
    this.scModalService.open({component: NgbdModalContent});
  }

  /**
   * Тестируем открытие модального окна со стандартным компонентом
   */
  testOpenDefault() {
    this.scModalService.open();
  }

  /**
   * Тестируем открытие модального окна со стандартным компонентом, но с передачей параметров
   */
  testOpenDefaultWithParam() {
    this.scModalService.open({params: {
      title: 'test',
      dismissCallback: (e) => {console.log(e, 'dismiss')},
      closeCallback: (e) => {console.log(e, 'close')}
    }});
  }

}
