import { Component, ElementRef, OnInit, Input, ViewChild, ViewEncapsulation, HostBinding, AfterViewInit } from '@angular/core';


@Component({
  selector: '[sc-button]',
  templateUrl: './sc-button.component.html',
  styleUrls: ['./sc-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class]': 'classes'
  }
})
export class ScButtonComponent implements OnInit, AfterViewInit {

  @Input() mod: String = null; // Модификаторы компонента
  @Input() size: string = null; // Размер кнопки 


  private classList: string[] = []; // Классы кнопки
  // Получаем наблюдаемых детей
  private classes: string;

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
    // Если нет модификатора или указателья размера кнопки оставляем только класс компонента
    this.classList[0] = `sc-button`;

    if (this.mod) {
      this.classList.push(`sc-button_${this.mod}`);
    }
    if (this.size) {
      this.classList.push(`sc-button_${this.size}`);
    }

    this.classes = this.classList.join(' ');
  };
};

