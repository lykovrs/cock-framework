import { Component, OnInit, Input, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit } from '@angular/core';

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

  private isLeft: boolean = true;
  private isRight: boolean = true;
  @ViewChild('leftView') leftView: ElementRef;
  @ViewChild('rightView') rightView: ElementRef;
  /*
  @ViewChild('leftView') set leftView(value: ElementRef) {
    this.isLeft = value && !!value.nativeElement.children.length;
  }

  @ViewChild('rightView') set rightView(value: ElementRef) {
    this.isRight = value && !!value.nativeElement.children.length;
  }
  */

  constructor() {}

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

  ngAfterViewInit() {
    setTimeout(() => {
      this.isLeft = !!this.leftView.nativeElement.children.length;
      this.isRight = !!this.rightView.nativeElement.children.length;
    });
  }
};

