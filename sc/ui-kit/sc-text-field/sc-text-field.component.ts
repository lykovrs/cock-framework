import { Component, OnInit, ViewChild, ContentChild, Query, TemplateRef, Input, Output, Inject, forwardRef, ElementRef, AfterViewInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import {ScTypeaheadDirective} from 'ui-kit/sc-combobox/sc-typeahead/sc-typeahead.directive';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ScTextFieldComponent),
    multi: true
};

/**
 * Компонент стандартного текстового поля
 */
@Component({
    selector      : 'sc-text-field',
    templateUrl   : './sc-text-field.component.html',
    styleUrls     : ['./sc-text-field.component.scss'],
    providers     : [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class ScTextFieldComponent implements OnInit, ControlValueAccessor, AfterViewInit {
    private _myInput: ElementRef;
    // Получаем поле из вью
    @ViewChild('myInput') set myInput (value: ElementRef) {
        if ( !this._myInput ) {
            this._myInput = value;
        }
    };
    get myInput (): ElementRef {
        return this._myInput;
    }
    private hasCustomInput: boolean = false;

    @ContentChild(ScTypeaheadDirective) set customInput (value: ScTypeaheadDirective) {
        this.hasCustomInput = !!value;
        if ( this.hasCustomInput ) {
            this._myInput = value.getElementRef();
        }
    }

    private isLeft: boolean = true;
    private isRight: boolean = true;
    // Получаем наблюдаемых детей
    @ViewChild('leftView') leftView: ElementRef;
    @ViewChild('rightView') rightView: ElementRef;

    constructor() {}

    ngOnInit() {
        // Если нет модификатора оставляем только класс компонента
        this.modificators = this.mod ? ` sc-text-field_type_${this.mod}` : '';
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.isLeft = !!this.leftView.nativeElement.children.length;
            this.isRight = !!this.rightView.nativeElement.children.length;
        });
    }

    /**
     * Модификаторы компонента
     */
    @Input() mod?: string;
    /**
     * Стандартная блокировка
     */
    @Input() disabled?: boolean;
    /**
     * Стандартная подсказка
     */
    @Input() placeholder?: string = "";

    private modificators:string = "";

    // Внутрення модель данных
    private innerValue: any = '';

    // Для обратных вызовов Control Value Accessor
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    // Флаг для фокуса
    private focusElement: boolean = false;

    //get accessor
    get value(): any {
        return this.innerValue;
    };

    //set accessor устанавливаем значение и вызываем колбэк
    set value(v: any) {
        if (v !== this.innerValue) {
        this.innerValue = v;
        this.onChangeCallback(v);
        }
    }

    /**
     * Очищаем поле
     */
    clearClick() {
        this.value = "";
        this.setFocus();
    }

    /**
     * Меняем состояние при потере фокуса полем
     * @param {[type]} e [description]
     */
    onBlur() {
        this.onTouchedCallback();
        this.focusElement = false;
    }

    /**
     * Меняем состояние при фокусе на поле
     * @param {[type]} e [description]
     */
    onFocus(e): void {
        this.focusElement = true;
    };

    /**
     * Устанавливаем фокус на поле
     */
    setFocus(): void {
        this.myInput.nativeElement.focus();
    };

    /**
     * ControlValueAccessor interface
     * @param  {any}    fn [description]
     */
    writeValue(value: any) {
        if (value !== this.innerValue) {
        this.innerValue = value;
        }
    }

    /**
     * ControlValueAccessor interface
     * @param  {any}    fn [description]
     */
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    /**
     * ControlValueAccessor interface
    * @param  {any}    fn [description]
    */
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

};
