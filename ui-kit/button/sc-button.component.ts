import { Component, ElementRef, OnInit, Input, ViewChild, ViewEncapsulation, HostBinding, AfterViewInit} from '@angular/core';


@Component({
  selector: '[sc-button]',
  templateUrl: './sc-button.component.html',
  styleUrls: ['./sc-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class]': 'classList'
  }
})
export class ButtonComponent implements OnInit, AfterViewInit {
  @Input() mod: String; // Модификаторы компонента

  private classList: String = null; // Классы кнопки
  // Получаем наблюдаемых детей
  @ViewChild('leftView') leftView: ElementRef;
  @ViewChild('rightView') rightView: ElementRef;

  private isLeft: boolean = true;
  private isIconOnly: boolean = true;
  private isRight: boolean = true;

  constructor() {

  };

  ngAfterViewInit() {
    // Определяем, есть ли дети в трансклюде
    this.isLeft = this.leftView.nativeElement.children.length;
    this.isRight = this.rightView.nativeElement.children.length;
  }

  ngOnInit() {
    // Если нет модификатора оставляем только класс компонента
    this.classList = this.mod ? `sc-button  + sc-button_${this.mod}` : 'sc-button';
  };
};
