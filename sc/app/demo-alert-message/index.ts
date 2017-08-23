/**
 * Created by dkovalev on 06.03.2017.
 */
import {Component, AfterViewInit} from '@angular/core';
import { ScAlertService } from '../../ui-kit/sc-alert/sc-alert.service';

@Component({
  selector: 'demo-alert-message',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class DemoAlertMessageComponent implements AfterViewInit {

  constructor(private scAlertService: ScAlertService) {}

  ngAfterViewInit() {
    this.scAlertService.success('success');

    setTimeout(() => {
      this.scAlertService.show('Alert с заголовком. Указываем время закрытия 3000 мс.', 'info', {
        title: 'Заголовок 1',
        lifeTime: 3000
      });
    }, 2000);

    setTimeout(() => {
      this.scAlertService.show(['Закроюсь только при нажатии на любую из', 'кнопок сообщения.'], 'warning', {
        buttons: [
          {title: 'Название 1 кнопки', cb: () => console.log('Закрылся при нажатии на 1 кнопку')},
          {title: 'Название 2 кнопки', cb: () => console.log('Закрылся при нажатии на 2 кнопку')}
        ],
        autoClose: false
      });
    }, 3000);

    setTimeout(() => {
      this.scAlertService.show('Alert с заголовком', 'danger', {
        title: 'Заголовок 2'
      });
    }, 4000);

    setTimeout(() => {
      this.scAlertService.show(['Добавляем кнопки', ' Предусмотрена&nbsp;<a href="#">ссылка</a>'], 'success', {
        buttons: [{title: 'Название кнопки'}]
      });
    }, 5000);

    setTimeout(() => {
      this.scAlertService.success('success');
    }, 6000);

    setTimeout(() => {
      this.scAlertService.danger('danger');
    }, 6000);

    setTimeout(() => {
      this.scAlertService.warning('warning');
    }, 6000);
  }
}
