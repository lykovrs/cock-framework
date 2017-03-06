/**
 * Modules
 */
import { Component } from '@angular/core';

/**
 * Services
 */
import { ScModalService } from '../../ui-kit/sc-modal/sc-modal.service';

/**
 * Demo компонент, который отправляем в модальное окно
 */
import { DemoModalContent } from './demo-modal-content.component';

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

    this.scModalService.open({component: DemoModalContent}).then((e) => {
      console.log('ok', e)
    }, (e) => {
      console.log('close', e);
    });
  }

  /**
   * Тестируем открытие модального окна со своим компонентом, но с передачей параметров
   */
  testCustomOpenParams() {
    this.scModalService.open({
      component: DemoModalContent,
      params: {
        title: 'test',
      },
      options: {windowClass: 'dark-modal'}
    }).then((e) => {
      console.log('ok', e)
    }, (e) => {
      console.log('close', e);
    });
  }

}
