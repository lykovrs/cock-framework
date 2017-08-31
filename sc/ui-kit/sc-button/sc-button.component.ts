import { Component, OnInit, Input, ContentChildren, QueryList, ViewEncapsulation } from '@angular/core';
import {ScSvgIconComponent} from 'ui-kit/sc-svg-icon/sc-svg-icon.component';

@Component({
  selector: '[sc-button]',
  templateUrl: './sc-button.component.html',
  styleUrls: ['./sc-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class]': 'classes'
  }
})
export class ScButtonComponent implements OnInit {

    @Input() mod: String = null; // Модификаторы компонента
    @Input() size: string = null; // Размер кнопки

    private classList: string[] = []; // Классы кнопки
    private classes: string;

    @ContentChildren(ScSvgIconComponent) set svgIcons (list: QueryList<ScSvgIconComponent>) {
        list.forEach((svgIcon: ScSvgIconComponent) => {
            (<HTMLElement>svgIcon.element.nativeElement).classList.add('sc-button__icon');
        });
    };

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
    }

};

