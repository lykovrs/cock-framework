import { Directive, Component, TemplateRef, Input, Output, ContentChild, EventEmitter, OnInit, AfterViewInit } from '@angular/core';

export enum ColorType {
    teal='teal',
    light='light',
    grey='grey'
}

export enum SizeType {
    normal='normal',
    lg='lg'
}

export interface ScPanelIconClickEvent {
    iconUrl: string
}

@Component({
    selector    : 'sc-panel',
    templateUrl : 'sc-panel.component.html',
    styleUrls   : ['sc-panel.component.scss']
})

export class ScPanelComponent implements OnInit, AfterViewInit {

    @Input() iconUrl: string;
    @Input() title: string;
    @Input() colorType: ColorType; // Цветовая схема панели
    @Input() sizeType: SizeType; // Размер панели
    @Output() iconClicked = new EventEmitter<ScPanelIconClickEvent>();

    ColorType = ColorType;
    SizeType = SizeType;

    constructor() {}

    ngOnInit() {
        this.initPanel();
    }

    ngAfterViewInit() {}

    /**
     * Получаем iconUrl
     * @returns {string}
     */
    private getIconUrl(): string {
        return this.iconUrl;
    }

    /**
     * Задаем iconUrl
     * @returns {ScPanelComponent}
     */
    private setIronUrl(iconUrl: string): ScPanelComponent {
        this.iconUrl = iconUrl;
        return this;
    }

    /**
     * Инициализируем панель
     * @returns {ScPanelComponent}
     */
    initPanel(): ScPanelComponent {
        this.initColor().initSize();
        return this;
    }

    /**
     * Инициализируем цветовую схему панели
     */
    initColor(): ScPanelComponent {
        !this.getColorType() && this.setColorType(ColorType.teal);
        return this;
    }

    /**
     * Инициализируем размер панели
     */
    initSize(): ScPanelComponent {
        !this.getSizeType() && this.setSizeType(SizeType.normal);
        return this;
    }

    /**
     * Получаем цветовое оформление панели
     * @returns {ColorType}
     */
    getColorType(): ColorType {
        return this.colorType;
    }

    /**
     * Задаем цветовое оформление панели
     * @param colorType
     * @returns {ScPanelComponent}
     */
    setColorType(colorType: ColorType): ScPanelComponent {
        this.colorType = colorType;
        return this;
    }

    /**
     * Получаем размер кнопки
     * @returns {SizeType}
     */
    getSizeType(): SizeType {
        return this.sizeType;
    }

    /**
     * Задаем размер панели
     * @param sizeType
     * @returns {ScPanelComponent}
     */
    setSizeType(sizeType: SizeType): ScPanelComponent {
        this.sizeType = sizeType;
        return this;
    }

    clickIcon() {
        this.iconClicked.emit({
            iconUrl: this.iconUrl
        });
    }
}
