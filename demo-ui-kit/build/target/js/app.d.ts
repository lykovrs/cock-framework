/// <reference path="../../ui-kit/libs/tsd.d.ts" />
/**
 * @module UiKit
 */
declare module UiKit {
    module Kpi {
        class KpiModule {
            static ANGULAR_MODULE_NAME: string;
            private static module;
            private static _contentURL;
            private static _componentPrefix;
            static getModule(): ng.IModule;
            static contentURL(url?: string): string;
            static componentPrefix(prefix?: string): string;
        }
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        module KpiButton {
            /**
             * Директива кнопки
             *
             * @class ScButtonDirective
             */
            function ScButtonDirective(): {
                restrict: string;
                replace: boolean;
                transclude: boolean;
                templateUrl: string;
                link: (scope: any, element: any) => void;
            };
        }
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        module KpiIcon {
            /**
             * Директива иконок
             *
             * @class ScIconDirective
             * @directive sc-icon
             */
            function ScIcon(): {
                restrict: string;
                transclude: boolean;
                replace: boolean;
                templateUrl: string;
                scope: {
                    type: string;
                    size: string;
                };
                link: (scope: any, element: any, attrs: any) => void;
            };
        }
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Директива визуального компонента "Панель".
         * Пример использования:
         * &lt;panel title="Заголовок панели" class="custom-panel-class" icon="custom-icon-class"&gt;[Содержимое панели]&lt;/panel&gt;
         * @class Panel
         * @directive sc-panel
         */
        function ScPanelHeaderDirective($parse: any): {
            restrict: string;
            replace: boolean;
            transclude: boolean;
            scope: {
                icon: string;
                text: string;
            };
            templateUrl: string;
            link: (scope: any, element: any, attrs: any) => void;
        };
    }
}
/**
 * Created by dkovalev on 16.03.2017.
 */
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Интерфейс группы
         */
        interface IScAccordionGroup extends ng.IScope {
            heading?: any;
            isOpen?: boolean;
            isDisabled?: boolean;
            openClass?: string;
            panelClass?: string;
        }
    }
}
/**
 * @module Core
 */
declare module UiKit {
    module Kpi {
        /**
         * ScAccordion
         * @class ScAccordion
         */
        class ScAccordionController {
            $scope: any;
            groups: any[];
            static $inject: string[];
            constructor($scope: any);
            /**
             * Закрываем группы, отличные от текущего, по которому совершен клик
             * @param openGroup
             * @returns {UiKit.Kpi.ScAccordionController}
             */
            closeOthers(openGroup: UiKit.Kpi.IScAccordionGroup): ScAccordionController;
            /**
             * Добавляем группу
             * @param groupScope
             * @returns {UiKit.Kpi.ScAccordionController}
             */
            addGroup(groupScope: UiKit.Kpi.IScAccordionGroup): ScAccordionController;
            /**
             * Удаляем группу
             * @param groupScope
             * @returns {UiKit.Kpi.ScAccordionController}
             */
            removeGroup(groupScope: UiKit.Kpi.IScAccordionGroup): ScAccordionController;
        }
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    module Kpi {
        /**
         * Контроллер ScAccordionGroupController
         * @class ScAccordionGroupController
         */
        class ScAccordionGroupController {
            $scope: any;
            static $inject: string[];
            constructor($scope: any);
            /**
             * Задаем заголовок
             * @param element
             */
            setHeading(element: any): ScAccordionGroupController;
            /**
             * Проверяем, является ли тип переменной объектом
             * @param element
             * @returns {boolean}
             */
            isTypeofObject(element: any): boolean;
        }
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Директива scAccordionGroup
         * @class ScAccordionGroupDirective
         */
        function ScAccordionGroupDirective(): {
            restrict: string;
            require: string;
            templateUrl: (element: any, attrs: any) => any;
            controller: string;
            transclude: boolean;
            scope: {
                heading: string;
                isOpen: string;
                isDisabled: string;
                openClass: string;
                panelClass: string;
            };
            link: (scope: any, element: any, attrs: any, scAccordionCtrl: any) => void;
        };
    }
}
/**
 * Created by dkovalev on 15.03.2017.
 */
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Директива scAccordionHeading
         * @class ScAccordionHeadingDirective
         */
        function ScAccordionHeadingDirective(): {
            restrict: string;
            replace: boolean;
            transclude: boolean;
            template: string;
            require: string;
            link: (scope: any, element: any, attr: any, accordionGroupCtrl: any, transclude: any) => void;
        };
    }
}
/**
 * Created by dkovalev on 15.03.2017.
 */
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Контроллер ScAccordionTranscludeController
         * @class ScAccordionTranscludeController
         */
        class ScAccordionTranscludeController {
            $scope: any;
            static $inject: string[];
            constructor($scope: any);
        }
    }
}
/**
 * Created by dkovalev on 15.03.2017.
 */
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * Sc
     */
    module Kpi {
        /**
         * Директива scAccordionTransclude
         * @class ScAccordionHeadingDirective
         */
        function ScAccordionTranscludeDirective(): {
            require: string;
            link: (scope: any, element: any, attr: any, controller: any) => void;
        };
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Директива scAccordion
         * @class ScTextareaDirective
         */
        function ScAccordionDirective(): {
            restrict: string;
            templateUrl: (element: any, attrs: any) => any;
            controller: string;
            transclude: boolean;
            scope: {
                closeOthers: string;
            };
        };
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * ScTextArea
         * @class ScTextArea
         */
        class ScTextareaController {
            $scope: any;
            static $inject: string[];
            constructor($scope: any);
            /**
             * Событие focus
             */
            onFocus(): void;
            /**
             * Событие blur
             */
            onBlur(): void;
        }
    }
}
/**
 * @module Core
 */
declare module UiKit {
    /**
     * Sc
     */
    module Kpi {
        /**
         * Директива кнопки
         *
         * @class ScTextareaDirective
         */
        function ScTextareaDirective(): {
            replace: boolean;
            restrict: string;
            templateUrl: string;
            controller: string;
            scope: {
                model: string;
                name: string;
                placeholder: string;
                onChange: string;
                disabled: string;
                required: string;
                resize: string;
                maxLength: string;
            };
            link: (scope: any) => void;
        };
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Директива Сплит-кнопки
         *
         * @class ScButtonSplit
         * @directive sc-button-split
         */
        function ScButtonSplitDirective(): {
            restrict: string;
            transclude: boolean;
            replace: boolean;
            templateUrl: string;
            scope: {
                text: string;
                ngDisabled: string;
            };
        };
    }
}
/**
 * @module Core
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Интерфейс Чекбокса
         */
        interface ICheckbox {
            model: string;
            label?: string;
            name?: string;
            disabled?: boolean;
            onChange?: () => void;
            indeterminate?: boolean;
            mods?: string;
        }
        interface ICheckboxIndeterminate {
            displayed: number;
            total: number;
        }
        /**
         * Чекбокс
         * @class Checkbox
         */
        class Checkbox implements UiKit.Kpi.ICheckbox {
            model: string;
            label: string;
            name: string;
            disabled: boolean;
            onChange: () => void;
            indeterminate: boolean;
            constructor(model: string, label?: string, name?: string, disabled?: boolean, onChange?: () => void, indeterminate?: boolean);
        }
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        interface ICheckboxScope extends ICheckbox, ng.IScope {
        }
        /**
         * Директива для кастомизации чекбокса
         * @class ScCheckbox
         * @directive sc-checkbox
         */
        function ScCheckboxDirective(): any;
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        interface IRadioScope extends ng.IScope {
            name: string;
            model: any;
            attrs: any;
            value: any;
            initial?: boolean;
            isChecked(): any;
            onChange?: () => void;
        }
        /**
         * Директива Radio button
         * @class Radio
         * @directive sc-radio
         */
        function ScRadioDirective(): {
            restrict: string;
            replace: boolean;
            templateUrl: string;
            transclude: boolean;
            scope: {
                name: string;
                model: string;
                value: string;
                initial: string;
                id: string;
                onChange: string;
            };
            link: (scope: IRadioScope, element: JQuery, attrs: any) => void;
        };
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        interface IDateFieldScope {
            model?: Moment;
            options: IDateField;
            datepickerOptions: {
                formatYear: string;
                showWeeks: boolean;
                startingDay: number;
            };
            date: string;
            mask: string;
            defaultsDateString: string;
            isCleared: boolean;
            $watch: any;
            $apply: any;
            $on: any;
            todayDisabled?: boolean;
            updateDirection: (event?: string) => void;
            getDayClass: any;
        }
        class ScDateFieldController {
            private $scope;
            private $element;
            private $attrs;
            private $log;
            private stopWatch;
            private id;
            /**
             * Опции по умолчанию
             * @type {{minDate: Moment, maxDate: Moment, selectedDate: null, format: string, showWeeks: boolean, disabled: boolean, opened: boolean, showIcon: boolean}}
             */
            private defaultOptions;
            constructor($scope: IDateFieldScope, $element: any, $attrs: any, $log: any);
            private onFocusOut();
            private disableEntry();
            private updateDefaults();
            /**
             * Метод для открытия календаря
             * @method open
             */
            private open($event);
            /**
             * Метод для закрытия календаря
             * @method close
             */
            private close($event);
        }
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Директива смены месяца для календаря
         * @class ChangeMonthDirective
         */
        function ChangeMonthDirective(): any;
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Директива маски текстового поля
         * @class DateFieldMaskDirective
         * @directive mask
         */
        function DateFieldMaskDirective(): any;
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Интерфейс функции обратного вызова для установки кастомного стилевого решения ячейки календаря
         * Принимает дату ячейки, возвращает имя класса или пустую строку.
         * @interface СustomClassCallback
         */
        interface СustomClassCallback {
            (date: Date): string;
        }
        /**
         * Интерфейс опций поля даты
         * @interface IDateField
         */
        interface IDateField {
            minDate?: Date;
            maxDate?: Date;
            selectedDate?: Date;
            placeholder?: string;
            format?: string;
            disabled?: boolean;
            showWeeks?: boolean;
            opened?: boolean;
            showIcon?: boolean;
            customClass?: СustomClassCallback;
            appendToBody?: boolean;
            disableEntry?: boolean;
            isValid?: boolean;
            invalidDate?: Moment;
            filledDate?: any;
            clearInvalidDate?: boolean;
            defaults?: {
                day?: number;
                month?: number;
                year?: number;
            };
        }
        /**
         * Директива выбора даты
         * @class DateFieldDirective
         * @directive date-field
         */
        function ScDateFieldDirective($document: ng.IDocumentService): any;
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        class ScDatePeriodController {
            private $scope;
            $timeout: ng.ITimeoutService;
            private $element;
            private $attrs;
            private stopWatch;
            private initStartDateFieldDefaults;
            private initEndDateFieldDefaults;
            private initLockedPeriod;
            /**
             * Опции по умолчанию
             * @type {{isLock: boolean}}
             */
            private defaultOptions;
            static $inject: string[];
            constructor($scope: any, $timeout: ng.ITimeoutService, $element: any, $attrs: any);
            private updateDefaults(changedField, date);
            /**
             * Колбек смены периода
             * @param {number} newPeriod
             * @param {number} oldPeriod
             */
            private callbackChangePeriod(newPeriod, oldPeriod?);
            /**
             * Метод для расчёта и обновления периода
             * @method onUpdateDateFields
             */
            private onUpdateDateFields();
            /**
             * Метод для расчёта и обновления периода
             * @method updatePeriod
             */
            private updatePeriod();
            private checkOnUpdateFields();
        }
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Интерфейс опций периода
         * @interface IDatePeriod
         */
        interface IDatePeriod {
            startDateField?: IDateField;
            endDateField?: IDateField;
            disabled?: boolean;
            period?: any;
            title?: string;
            error?: string;
            isLock?: boolean;
            startTooltip?: string;
            endTooltip?: string;
        }
        /**
         * Директива периода
         * @class DatePeriodDirective
         * @directive date-period
         */
        function ScDatePeriodDirective(): any;
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        enum EScDateSpinnerMethod {
            ADD,
            SUBTRUCT,
        }
        interface IScDateSpinnerScope extends ng.IScope {
            options?: IDateSpinner;
            btnPrevDisabled?: boolean;
            btnNextDisabled?: boolean;
        }
        class ScDateSpinnerController {
            private $scope;
            private selectedDate;
            private minDate;
            private maxDate;
            static $inject: string[];
            constructor($scope: IScDateSpinnerScope);
            /**
             * Метод смещения даты
             * @method shiftDay
             */
            private shiftDay(dir);
        }
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Интерфейс опций поля даты с кнопками навигации
         * @interface IDateSpinner
         */
        interface IDateSpinner extends IDateField {
            tooltip?: string;
        }
        /**
         * Директива выбора даты с кнопками навигации
         * @class DateSpinnerDirective
         * @directive date-spinner
         */
        function ScDateSpinnerDirective(): any;
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        module KpiTextField {
            /**
             * Директива текстового поля
             *
             * @class ScTextFieldDirective
             */
            function ScTextFieldDirective(): {
                restrict: string;
                replace: boolean;
                transclude: boolean;
                scope: {};
                templateUrl: string;
                link: (scope: any, element: any, attrs: any) => void;
            };
        }
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Контроллер директивы панели тэгов
         *
         * @class ScPaginationController
         */
        class ScPanelTagController {
            protected $scope: any;
            static $inject: string[];
            counterTags: number;
            constructor($scope: any);
            setCounterTags: (item: number) => void;
        }
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Директива тэга
         *
         * @class ScButtonDirective
         */
        function ScTagDirective(): {
            restrict: string;
            replace: boolean;
            transclude: boolean;
            require: string;
            templateUrl: string;
            scope: {
                icon: string;
                onRemove: string;
                disabled: string;
            };
            link: (scope: any, element: any, attrs: any, ctrl: any) => void;
        };
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Директива панели тэгов
         *
         * @class ScPanelTagDirective
         */
        function ScPanelTagDirective(): {
            restrict: string;
            replace: boolean;
            transclude: boolean;
            templateUrl: string;
            controller: string;
            scope: {};
        };
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        interface FooterControllerScope extends ng.IScope {
            viewModel: ScFooterController;
        }
        /**
         * контроллер директивы footer
         * @class FooterController
         * @controller FooterController
         */
        class ScFooterController {
            private $scope;
            private $state;
            constructor($scope: FooterControllerScope, $state: any);
        }
    }
}
/**
 * @module UiKit
 */
/**
 * директива обновления времени
 * @class ScClock
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Директива отображения времени
         * @directive sc-clock
         */
        function ScClockDirective($interval: any, dateFilter: any): any;
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        interface IFooterScope extends ng.IScope {
            showHelp: {
                callback: () => void;
                text: string;
            };
        }
        /**
         * Директива визуального компонента "footer".
         * @class FooterDirective
         * @directive FooterDirective
         */
        function ScFooterDirective(): {
            restrict: string;
            replace: boolean;
            scope: {
                showHelp: string;
            };
            controller: string;
            templateUrl: string;
            link: (scope: IFooterScope, element: any, attrs: any, controller: ScFooterController) => void;
        };
    }
}
/**
 * @module Utils
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Интерфейс для одного элемента innerData
         */
        interface IScComboboxInnerDataElement {
            formatValue: Array<any>;
            value: any;
            dataType: string;
            selected: boolean;
            index: number;
            id: string;
            filtered: boolean;
            group: string;
        }
        class ScComboboxInnerDataElement {
            private formatValue;
            private value;
            private keys;
            private dataType;
            private selected;
            private index;
            private id;
            private filtered;
            private group;
            private pageNumber;
            private pagesCount;
            private filteredIndex;
            static GROUP_ALL: string;
            constructor(data: any, valueFormatter: IScComboboxValueFormatter);
            /**
             * Задаем внутренние данные
             * @param data
             * @param valueFormatter
             * @returns {UiKit.Kpi.IScComboboxInnerDataElement}
             */
            setInnerData(data: any, valueFormatter: IScComboboxValueFormatter): ScComboboxInnerDataElement;
            /**
             * Получаем formatValue
             * @returns {any}
             */
            getFormatValue(): any;
            /**
             * Задаем formatValue
             * @param data
             * @param valueFormatter
             * @returns {UiKit.Kpi.ScComboboxInnerDataElement}
             */
            setFormatValue(data: any, valueFormatter: IScComboboxValueFormatter): ScComboboxInnerDataElement;
            /**
             * Получаем value
             * @returns {any}
             */
            getValue(): any;
            /**
             * Задаем value
             * @param data
             * @returns {UiKit.Kpi.ScComboboxInnerDataElement}
             */
            setValue(data: any): ScComboboxInnerDataElement;
            /**
             * Задаем dataType
             * @param data
             * @returns {UiKit.Kpi.ScComboboxInnerDataElement}
             */
            setDataTypeElement(data: Array<any>): ScComboboxInnerDataElement;
            /**
             * Получаем dataType
             * @returns {string}
             */
            getDataType(): string;
            /**
             * Задаем dataType
             * @param dataType
             * @returns {UiKit.Kpi.ScComboboxInnerDataElement}
             */
            setDataType(dataType: string): ScComboboxInnerDataElement;
            /**
             * Задаем selected
             * @param selected
             * @returns {UiKit.Kpi.ScComboboxInnerDataElement}
             */
            setSelected(selected: boolean): ScComboboxInnerDataElement;
            /**
             * Получаем selected
             * @returns {boolean}
             */
            getSelected(): boolean;
            /**
             * Задаем index
             * @param index
             * @returns {UiKit.Kpi.ScComboboxInnerDataElement}
             */
            setIndex(index: number): ScComboboxInnerDataElement;
            /**
             * Получаем index
             * @returns {number}
             */
            getIndex(): number;
            /**
             * Задаем id
             * @param index
             * @returns {UiKit.Kpi.ScComboboxInnerDataElement}
             */
            setId(index: number): ScComboboxInnerDataElement;
            /**
             * Получаем id
             * @returns {string}
             */
            getId(): string;
            /**
             * Получаем filtered
             * @param filtered
             * @returns {UiKit.Kpi.ScComboboxInnerDataElement}
             */
            setFiltered(filtered: boolean): ScComboboxInnerDataElement;
            /**
             * Получаем filtered
             * @returns {boolean}
             */
            getFiltered(): boolean;
            /**
             * Задаем group
             * @param group
             * @returns {UiKit.Kpi.ScComboboxInnerDataElement}
             */
            setGroup(group: string): ScComboboxInnerDataElement;
            /**
             * Получаем group
             * @returns {any}
             */
            getGroup(): string;
            /**
             * Задаем pageNumber
             */
            setPageNumber(index: number, pageSize: number): ScComboboxInnerDataElement;
            /**
             * Задаем pagesCount
             * @param dataLength
             * @param pageSize
             * @returns {UiKit.Kpi.ScComboboxInnerDataElement}
             */
            setPagesCount(dataLength: number, pageSize: number): ScComboboxInnerDataElement;
            /**
             * Получаем pagesCount
             * @returns {number}
             */
            getPagesCount(): number;
            /**
             * Получаем filteredIndex
             * @returns {number}
             */
            getFilteredIndex(): number;
            /**
             * Задаем filteredIndex
             * @param filteredIndex
             * @returns {UiKit.Kpi.ScComboboxInnerDataElement}
             */
            setFilteredIndex(filteredIndex: number): ScComboboxInnerDataElement;
        }
    }
}
/**
 * @module Utils
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Интерфейс дополнительных параметров для innerData
         */
        interface IScComboboxInnerDataParams {
            group?: string;
            pageSize?: number;
        }
        /**
         * Класс ScComboboxInnerData
         */
        class ScComboboxInnerData {
            list: any;
            groups: Array<string>;
            pageSize: number;
            constructor(data: Array<any>, valueFormatter: IScComboboxValueFormatter, params: IScComboboxInnerDataParams);
            /**
             * Задаем list
             * @param data
             * @param valueFormatter
             * @param params
             * @returns {UiKit.Kpi.ScComboboxInnerData}
             */
            setList(data: Array<any>, valueFormatter: IScComboboxValueFormatter, params: IScComboboxInnerDataParams): ScComboboxInnerData;
            /**
             * Получаем list
             * @returns {Array<UiKit.Kpi.ScComboboxInnerDataElement>}
             */
            getList(group: string): Array<UiKit.Kpi.ScComboboxInnerDataElement>;
            /**
             * Задаем groups
             * @param group
             * @param data
             * @returns {UiKit.Kpi.ScComboboxInnerData}
             */
            setGroups(group: string, data: Array<any>): ScComboboxInnerData;
            /**
             * Получаем groups
             * @returns {Array<string>}
             */
            getGroups(): Array<string>;
            /**
             * Получаем отфильтрованные значения
             * @param listElement
             * @returns {UiKit.Kpi.ScComboboxInnerDataElement[]}
             */
            getFiltered(listElement: Array<UiKit.Kpi.ScComboboxInnerDataElement>): Array<UiKit.Kpi.ScComboboxInnerDataElement>;
        }
    }
}
/**
 * Created by dkovalev on 29.03.2017.
 */
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Функция, экранирующая спец символы в строке
         * @param searchQuery
         */
        const scComboboxFiltersScreening: (searchQuery: string) => string;
        /**
         * class ScComboboxFilters
         */
        class ScComboboxFilters {
            /**
             * Фильтруем входной массив данных Array<UiKit.Kpi.ScComboboxInnerDataElement>
             * @param innerData - входной набор данных Array<UiKit.Kpi.ScComboboxInnerDataElement>
             * @param inputValue - строка поиска
             * @param searchBy - ключи объекта, для фильтрации
             * @param $parse
             */
            static scComboboxfilterInnerDataByKey(innerData: Array<UiKit.Kpi.ScComboboxInnerDataElement>, inputValue: string, searchBy: IScComboboxValueFormatter, $parse: any): Array<UiKit.Kpi.ScComboboxInnerDataElement>;
            /**
             * Фильтруем список для пагинации
             * @param list
             * @param startIndex
             * @param endIndex
             * @returns {Array<UiKit.Kpi.ScComboboxInnerDataElement>|number|UiKit.Kpi.ScComboboxInnerDataElement[]}
             */
            static scComboboxfilterListByPaginationIndex(list: Array<UiKit.Kpi.ScComboboxInnerDataElement>, startIndex: number, endIndex: number): Array<UiKit.Kpi.ScComboboxInnerDataElement>;
            /**
             * Получаем только отфильтрованные значения
             * @param list
             * @returns {Array<UiKit.Kpi.ScComboboxInnerDataElement>|number|[boolean,boolean,boolean,boolean,boolean]}
             */
            static scComboboxOnlyFiltered(list: Array<UiKit.Kpi.ScComboboxInnerDataElement>): Array<UiKit.Kpi.ScComboboxInnerDataElement>;
            /**
             * Фильтр для маркировки найденных символов в строчке
             * @param input
             * @param extras
             * @returns {any}
             */
            static scComboboxTextFilter: (input: string, extras: string, $sce: any, minLength: number) => any;
        }
    }
}
/**
 * Created by dkovalev on 03.04.2017.
 */
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * HandleKeys enum
         */
        enum HandleKeys {
            DOWN = 40,
            UP = 38,
            ENTER = 13,
        }
    }
}
/**
 * @module Utils
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Интерфейс входных параметров для тегов
         */
        interface IScComboboxTagParams {
            title: string;
            data: UiKit.Kpi.ScComboboxInnerDataElement;
        }
        /**
         * Класс ScComboboxTag
         */
        class ScComboboxTag {
            private title;
            private data;
            constructor(params: IScComboboxTagParams);
            setTitle(title: string): ScComboboxTag;
            getTitle(): string;
            setData(data: UiKit.Kpi.ScComboboxInnerDataElement): ScComboboxTag;
            getData(): UiKit.Kpi.ScComboboxInnerDataElement;
        }
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * Компонент kpi-combobox поддерживает следующие
     * @module Kpi
     */
    module Kpi {
        enum EScComboboxState {
            LOADING,
            LOADED,
        }
        enum EScComboboxSourceType {
            FUNCTION,
            ARRAY,
        }
        type IScComboboxValueFormatter = (any) => Array<string>;
        type IScComboboxInputFormatter = (any) => string;
        type IScComboboxOnSearch = (any) => void;
        type IScComboboxOnSelect = (value?: any) => any;
        type IScComboboxOnChange = (newValue?: any, oldValue?: any) => any;
        type IScComboboxSourcePromise = (inputValue: string) => ng.IPromise<Array<any>>;
        type IScComboboxSourceSimple = Array<any>;
        type IScComboboxScopeGroup = string;
        type IScComboboxScopePagesSize = number;
        interface IScComboboxInnerDataParams {
            group?: IScComboboxScopeGroup;
            pagesSize?: IScComboboxScopePagesSize;
        }
        interface IScComboboxScope extends ng.IScope {
            model?: any;
            source?: IScComboboxSourceSimple | IScComboboxSourcePromise;
            searchBy?: IScComboboxValueFormatter;
            valueFormatter?: IScComboboxValueFormatter;
            multiselect?: boolean;
            inputFormatter?: IScComboboxInputFormatter;
            minLength?: number;
            group?: string;
            list?: any;
            paginator?: boolean;
            pageSize?: number;
            searchDelay?: number;
            mod: EScComboboxMods;
            placeholder: string;
            disabled: boolean;
            onSearch: IScComboboxOnSearch;
            onSelect: IScComboboxOnSelect;
            onChange: IScComboboxOnChange;
            tag: boolean;
            state: EScComboboxState;
        }
        enum EScComboboxMods {
            ATTENTION,
            WARNING,
            DEFAULT,
        }
        /**
         * ScComboboxController
         */
        class ScComboboxController {
            private $scope;
            private $filter;
            private $timeout;
            private $parse;
            private $sce;
            private $q;
            private static MIN_LENGTH;
            private static SEARCH_DELAY;
            static PAGE_SIZE: number;
            private inputValue;
            EMPTY_LIST: string;
            PRELOADER_TITLE: string;
            private innerData;
            private activeGroup;
            private handlePagination;
            private selectedTags;
            private searchInProgress;
            private open;
            private focus;
            private activeIndex;
            private searchOn;
            searchDelayTimeout: any;
            EScComboboxMods: typeof EScComboboxMods;
            EScComboboxState: typeof EScComboboxState;
            EScComboboxSourceType: typeof EScComboboxSourceType;
            isClickTag: boolean;
            private sourceType;
            private lastPromiseCb;
            static $inject: string[];
            constructor($scope: IScComboboxScope, $filter: any, $timeout: ng.ITimeoutService, $parse: any, $sce: any, $q: any);
            /**
             * Инициализируем данные для scCombobox
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            initDatas(): ScComboboxController;
            /**
             * Обновляем данные для scCombobox
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            updateDatas(): ng.IPromise<ScComboboxController>;
            /**
             * Закрытие dropdown
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            close(): ScComboboxController;
            /**
             * Задаем list
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            initScopeList(): ScComboboxController;
            /**
             * Задаем внутренний list
             * @param source
             * @param valueFormatter
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            initComboboxInnerData(source: any, valueFormatter: IScComboboxValueFormatter): ScComboboxController;
            /**
             * Обнволяем внутренний list
             * @param source
             * @param valueFormatter
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            updateComboboxInnerData(source: any, valueFormatter: any): ng.IPromise<ScComboboxController>;
            /**
             * Обновляем innerData, если на вход в параметре source передается callback promise
             * @param source
             * @param valueFormatter
             * @param params
             * @returns {IPromise<UiKit.Kpi.ScComboboxController>}
             */
            private updateComboboxInnerDataPromise(source, valueFormatter, params);
            /**
             * Обновляем innerData, если на вход в параметре source передается статичный массив элементов
             * @param source
             * @param valueFormatter
             * @param params
             */
            private updateComboboxInnerDateSimple(source, valueFormatter, params);
            /**
             * Получаем innerData
             * @returns {Array<UiKit.Kpi.ScComboboxInnerDataElement>}
             */
            getInnerData(): UiKit.Kpi.ScComboboxInnerData;
            /**
             * Событие выбора элемента
             * @param data
             * @param $event
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            onSelectData(data: UiKit.Kpi.ScComboboxInnerDataElement): ScComboboxController;
            /**
             * Выбор элемента, если включен multiselect
             * @param data
             */
            private selectMulti(data);
            /**
             * Изменяем значение выбора элемента в модели
             * @param data
             * @param trueOrFalse
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            private selectMultiToTrueOrFalse(data, trueOrFalse);
            /**
             * Простой выбор элемента
             * @param data
             */
            private selectOne(data);
            /**
             * Выбираем один элемент, если изменилась модель извне
             * @param data
             */
            selectOneLoad(data: UiKit.Kpi.ScComboboxInnerDataElement): void;
            /**
             * Если изначально указана модель, то применяем ее к компоненту
             */
            private initSelectOne();
            /**
             * Если изначально указана модель, то применяем ее к компоненту (для multiselect)
             */
            private initSelectOneMultiselect();
            /**
             * Если изначально указана модель, то применяем ее к компоненту (для простого select)
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            private initSelectOneSimple();
            /**
             * Инициализируем model
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            private initScopeModel();
            /**
             * Инициализация model при multiselect
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            private initMultiselectScopeModel();
            /**
             * Инициализация model при простом выпадающем списке
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            private initSimpleselectScopeModel();
            /**
             * Фильтруем innerData
             * @param list
             * @param inputValue - введенное значение в поле ввода
             * @returns {Array<UiKit.Kpi.ScComboboxInnerDataElement>}
             */
            private filterInnerData(list, inputValue);
            /**
             * Инициализируем searchBy
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            private initScopeSearchBy();
            /**
             * Инициализируем тип source
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            private initSourceType();
            /**
             * Задаем тип source
             * @param type
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            private setTypeSource(type);
            /**
             * Получаем тип source
             * @returns {any}
             */
            private getSourceType();
            /**
             * InputFormatter по умолчанию
             * @returns {string}
             */
            private defaultInputFormatter();
            /**
             * Инициализируем inputFormatter
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            private initScopeInputFormatter();
            /**
             * ValueFormatter по умолчанию
             * @returns {string}
             */
            private defaultValueFormatter();
            /**
             * Инициализируем inputFormatter
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            private initScopeValueFormatter();
            /**
             * Применяем angular фильтры для innerData
             * @param list
             * @param searchBy
             * @param inputValue
             * @returns {Array<UiKit.Kpi.ScComboboxInnerDataElement>}
             */
            private angularFiltersData(list, searchBy, inputValue);
            /**
             * Инициализируем inputValue
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            setInputValue(param: string): ScComboboxController;
            /**
             * Иницицлизируем minLength
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            private initScopeMinLength();
            /**
             * Очистка поля, модели, выбранных элементов, отфильтрованных элементов
             */
            clear(): ScComboboxController;
            /**
             * Инициализируем group
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            private initScopeGroup();
            /**
             * Переключаемся между группами
             * @param group
             */
            onClickGroup(group: string): void;
            /**
             * Инициализируем activeGroup
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            private initActiveGroup();
            /**
             * Проверяем, принадлежит ли группа в данных активной группе
             * @param data
             * @param activeGroup
             * @returns {UiKit.Kpi.ScComboboxInnerDataElement|any|string}
             */
            private isDataActiveGroup(data, activeGroup);
            /**
             * Инициализируем пагинацию
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            private initScopePagination();
            /**
             * Инициализируем handle pagination
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            initHandlePagination(): ScComboboxController;
            /**
             * Создаем новый handle для пагинации
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            private setNewHandlePagination();
            /**
             * Задаем selectedElements
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            private setSelectedTags(param);
            /**
             * Получаем selectedTags
             * @returns {string}
             */
            private getselectedTags();
            /**
             * Задаем количество элементов на странице
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            initScopePageSize(): ScComboboxController;
            /**
             * Проверяем наличие пагинации
             * @returns {boolean}
             */
            isPagination(): boolean;
            /**
             * Задаем focus
             * @param focus
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            private setFocus(focus);
            /**
             * Получаем focus
             * @returns {boolean}
             */
            private getFocus();
            /**
             * Задаем open
             * @param open
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            setOpen(open: boolean): ScComboboxController;
            /**
             * Получаем open
             * @returns {boolean}
             */
            private getOpen();
            /**
             *
             * @param searchInProgress
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            setSearchInProgress(searchInProgress: boolean): ScComboboxController;
            /**
             * Получаем searchInProgress
             * @returns {boolean}
             */
            private getSearchInProgress();
            /**
             * Задаем model
             * @param model
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            private setScopeModel(model);
            /**
             * Получаем отфильтрованные значения
             * @param data
             * @returns {Array}
             */
            getFilteredData(data: Array<UiKit.Kpi.ScComboboxInnerDataElement>): Array<UiKit.Kpi.ScComboboxInnerDataElement>;
            /**
             * Задаем activeIndex
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            setActiveIndex(activeIndex: number): ScComboboxController;
            /**
             * Получаем activeIndex
             * @returns {number}
             */
            private getActiveIndex();
            /**
             * Инициализируем searchDelay
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            private initScopeSearchDelay();
            /**
             * Проверяем наличие отфильтрованных элементов в list
             * @returns {boolean}
             */
            checkIsFilteredListLength(): boolean;
            /**
             * Проверяем наличие элементов в list
             * @returns {boolean}
             */
            checkIsListLength(): boolean;
            /**
             * Инициализируем мод
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            private initMod();
            /**
             * Закрываем выпадающий список
             * @returns {ScComboboxController}
             */
            closeDropDown(): ScComboboxController;
            /**
             * Задаем searchOn
             * @param searchOn
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            private setSearchOn(searchOn);
            /**
             * Получаем searchOn
             * @returns {any}
             */
            private getSearchOn();
            /**
             * Callback при удалении одного из элементов тега
             * @param data
             */
            onDeleteTag(data: UiKit.Kpi.ScComboboxTag): void;
            /**
             * Задаем переменную, сигнализирующую о событии клика по тегу
             * @param isClickTag
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            setIsClickTag(isClickTag: boolean): ScComboboxController;
            /**
             * Получаем переменную, сигнализирующую о событии клика по тегу
             * @returns {boolean}
             */
            getIsClickTag(): boolean;
            /**
             * Инициализация состояния компонента
             * @param state
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            setScopeState(state: EScComboboxState): ScComboboxController;
            /**
             * Инициализируем теги
             */
            private initScopeTag();
            /**
             * Задаем последний актуальный запрос
             */
            private setLastPromiseCb(lastPromiseCb);
            /**
             * Получаем последний актуальный запрос
             * @returns {(lastPromiseCb:any)=>ScComboboxController}
             */
            private getLastPromiseCb();
        }
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    module Utils {
        interface IBaseHandleWatcher<EVENT, EVENT_INFO> {
            event: EVENT;
            cb: (event: EVENT, info: EVENT_INFO) => ng.IPromise<EVENT_INFO> | void;
        }
        class BaseHandle<EVENT, EVENT_INFO> {
            private watchers;
            watch(event: EVENT, cb: (event: EVENT, info: EVENT_INFO) => ng.IPromise<EVENT_INFO> | void): (() => void);
            emit(event: EVENT, info?: EVENT_INFO): ng.IPromise<void>[] | void;
            unwatchAll(): void;
            protected unwatch(event: EVENT, cb: (EVENT, EVENT_INFO) => void): void;
        }
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module UI
     */
    module Kpi {
        /**
         * @module ViewModel
         */
        enum ScPaginationHandleEvent {
            CHANGE_PAGE = 0,
            RESET = 1,
        }
        /**
         * Класс для работы с постраничным просмотром
         *
         * @class Pagination
         */
        class ScPaginationHandle extends UiKit.Utils.BaseHandle<ScPaginationHandleEvent, ScPaginationHandle> {
            protected totalItems: number;
            protected pageInput: boolean;
            protected perPage: number;
            static PER_PAGE_DEFAULT: number;
            protected totalPages: number;
            protected startItemIndex: number;
            protected endItemIndex: number;
            protected currentPageIndex: number;
            protected remainingItems: number;
            protected autoHide: boolean;
            constructor(totalItems: number, pageInput?: boolean, perPage?: number);
            /**
             * Инициализация пагинации
             *
             * @return {App.ViewModel.Pagination}
             */
            reset(): ScPaginationHandle;
            /**
             * Доступность поля ввода страницы
             *
             * @return {boolean}
             */
            isPageInput(): boolean;
            /**
             * Флаг, отвечающий за "скрывание" компонента, если страниц нет
             *
             * @return {boolean}
             */
            setAutoHide(val: boolean): void;
            /**
             * Инициализация значений
             *
             * @return {App.ViewModel.Pagination}
             */
            protected initializeValues(): ScPaginationHandle;
            /**
             * Получение количества элементов на странице
             *
             * @return {number}
             */
            getPerPage(): number;
            /**
             * Установка количества элементов на странице
             *
             * @param {number} value
             * @return {App.ViewModel.Pagination}
             */
            setPerPage(value: number): ScPaginationHandle;
            /**
             * Получение количества страниц
             *
             * @return {number}
             */
            getTotalPages(): number;
            /**
             * Получение количества элементов
             *
             * @return {number}
             */
            getTotalItems(): number;
            /**
             * Установка количества элементов
             *
             * @return {Pagination}
             */
            setTotalItems(totalItems: number): ScPaginationHandle;
            /**
             * Получение индекса текущей страницы
             *
             * @return {number}
             */
            getCurrentPageIndex(): number;
            /**
             * Проверка текущей страницы
             *
             * @param {number} index
             * @return {boolean}
             */
            isCurrentPageIndex(index: number): boolean;
            /**
             * Получение номера текущей страницы
             *
             * @return {number}
             */
            getCurrentPage(): number;
            /**
             * Получение индекса элемента, с которого начинается страница
             *
             * @return {number}
             */
            getStartItemIndex(): number;
            /**
             * Получение индекса последнего элемента текущей страницы
             *
             * @return {number}
             */
            getEndItemIndex(): number;
            /**
             * Получение количества непросмотренных элементов
             *
             * @return {number}
             */
            getRemainingItems(): number;
            /**
             * Проверка возможности перехода на следующую страницу
             *
             * @return {boolean}
             */
            hasNextPage(): boolean;
            /**
             * Проверка возможности перехода на предыдущую страницу
             *
             * @return {boolean}
             */
            hasPrevPage(): boolean;
            /**
             * Переход на следующую страницу
             *
             * @return {App.ViewModel.Pagination}
             */
            nextPage(): ScPaginationHandle;
            /**
             * Переход на предыдущую страницу
             *
             * @return {App.ViewModel.Pagination}
             */
            prevPage(): ScPaginationHandle;
            /**
             * Переход на первую страницу
             *
             * @return {App.ViewModel.Pagination}
             */
            firstPage(): ScPaginationHandle;
            /**
             * Переход на последнюю страницу
             *
             * @return {App.ViewModel.Pagination}
             */
            lastPage(): ScPaginationHandle;
            /**
             * Переход на страницу по индексу
             *
             * @param {number} index
             * @return {App.ViewModel.Pagination}
             */
            setPageByIndex(index: number): ScPaginationHandle;
        }
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module UI
     */
    module Kpi {
        /**
         * ScPagination
         */
        module KpiPagination {
            /**
             * Контроллер директивы панели пагинации
             *
             * @class ScPaginationController
             */
            class ScPaginationController {
                protected $scope: IScPaginationScope;
                static $inject: string[];
                currentPage: number;
                constructor($scope: IScPaginationScope);
            }
        }
    }
}
/**
 * @module Core
 */
declare module UiKit {
    /**
     * @module UI
     */
    module Kpi {
        module KpiPagination {
            interface IScPaginationScope extends ng.IScope {
                handle: UiKit.Kpi.ScPaginationHandle;
            }
            /**
             * Директива панели пагинации
             *
             * @class ScPaginationDirective
             * @directive sc-pagination
             */
            function ScPaginationDirective(): {
                restrict: string;
                templateUrl: string;
                scope: {
                    handle: string;
                };
                controller: string;
            };
        }
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Директива уведомления об ожидании
         * @class ScPreloaderDirective
         * @directive preloader
         */
        function ScPreloaderDirective(): {
            replace: boolean;
            restrict: string;
            templateUrl: string;
            scope: {
                condition: string;
                text: string;
            };
        };
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * ScComboboxDirective
         */
        function ScComboboxDirective($timeout: any, $document: any): {
            restrict: string;
            replace: boolean;
            templateUrl: string;
            transclude: boolean;
            scope: {
                model: string;
                source: string;
                valueFormatter: string;
                inputFormatter: string;
                searchBy: string;
                multiselect: string;
                minLength: string;
                group: string;
                paginator: string;
                searchDelay: string;
                pageSize: string;
                disabled: string;
                placeholder: string;
                mod: string;
                onChange: string;
                onSelect: string;
                onClear: string;
            };
            controller: string;
            link: (scope: any, element: any, attrs: any, controller: any) => void;
        };
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        interface IModalDialogScope extends ng.IScope {
            viewModel: ScModalController;
        }
        /**
         * Контроллер модального окна
         * @class ModalDialogController
         */
        class ScModalController {
            private $scope;
            private $modalInstance;
            private params;
            static $inject: string[];
            constructor($scope: IModalDialogScope, $modalInstance: any, params: any);
            /**
             * Метод закрытия модального окна
             * @method cancel
             */
            cancel(): void;
        }
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        interface IModalDialogButton {
            title: string;
            type: string;
            align: string;
            action: Function;
        }
        interface IModalDialog {
            title: string;
            subtitle: string;
            messages: Array<string>;
            buttons: Array<IModalDialogButton>;
            modalParams: ModalParams;
            successCallback: any;
            dismissCallback: any;
        }
        /**
         * Параметры модального окна
         *
         * @class ModalParams
         */
        class ModalParams {
            constructor(params: any);
        }
        /**
         * Модальное окно
         *
         * @class ModalDialog
         */
        class ScModalService {
            private $modal;
            static $inject: string[];
            constructor($modal: any);
            /**
             * Открытие диалога
             *
             * @method openDialog
             * @param {Core.IModalDialog} params
             * @return ng.IPromise<any>
             */
            private openDialog(params);
            /**
             * Открытие диалога
             *
             * @method openDialog
             * @param {Core.IModalDialog} params
             */
            open(params?: any): any;
        }
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        interface IScMenu {
            name: string;
            url: string;
            action?: Function;
            menuItems?: IScMenu[];
            teaser?: IScMenuTeaser;
            disabled?: boolean;
        }
        /**
         * Меню
         * @class ScMenu
         */
        class ScMenuController {
            private $state;
            $scope: any;
            static $inject: string[];
            constructor($state: ng.ui.IStateService, $scope: any);
            /**
             * Проверка, являются ли элементы меню активными
             * @param items {Core.App.IScMenu[]} - элемент меню
             * @returns {void}
             */
            isActiveScMenuItem(items: IScMenu[]): void;
            /**
             * Проверка, и подсчет тизеров в пунктах меню
             * @param items {Core.App.IScMenu[]} - элемент меню
             * @returns {number}
             */
            refreshTeasers(items?: IScMenu[]): number;
        }
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Директива выпадающего древовидного подмеменю
         * @class ScMenuItemDirective
         * @directive sc-menu-item
         */
        function ScMenuItemDirective($compile: any): {
            restrict: string;
            templateUrl: string;
            replace: boolean;
            transclude: boolean;
            scope: {
                item: string;
            };
            compile: (tElement: any, tAttr: any) => (scope: any, iElement: any, iAttr: any) => void;
        };
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        interface IScMenuScope extends IScMenuTeaser {
            actionOnClick?: (value: IScMenuTeaser) => void;
        }
        interface IScMenuTeaser {
            num?: number;
            text?: string;
            events?: Array<IScMenuTeaserEvent>;
        }
        interface IScMenuTeaserEvent {
            click?: () => void;
        }
        /**
         * Директива выпадающего древовидного подмеменю
         * @class ScMenuTeaserDirective
         * @directive sc-menu-teaser
         */
        function ScMenuTeaserDirective($compile: any): {
            restrict: string;
            templateUrl: string;
            replace: boolean;
            transclude: boolean;
            scope: {
                num: string;
                text: string;
                events: string;
            };
            link: (scope: IScMenuScope, element: JQuery) => void;
        };
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        interface IScMenuScope extends ng.IScope {
            items: IScMenu[];
            controller: ScMenuController;
        }
        /**
         * Директива меню
         * @class ScMenuDirective
         * @directive menu
         */
        function ScMenuDirective(): {
            restrict: string;
            templateUrl: string;
            replace: boolean;
            transclude: boolean;
            controller: string;
            scope: {
                items: string;
            };
            link: (scope: IScMenuScope, elem: any) => void;
        };
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        interface IHeaderScope extends ng.IScope {
            menu: IScMenu[];
            profile: string;
            isActive: any;
            updateActiveElements: () => void;
        }
        /**
         * Класс-контроллер для упавления "шапкой" приложения
         *
         * @class HeaderController
         */
        class ScPageHeaderController {
            private $scope;
            private $state;
            static $inject: string[];
            protected menu: IScMenu[];
            private isShowUserProfile;
            constructor($scope: IHeaderScope, $state: ng.ui.IStateService);
        }
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Контроллер директивы профайла пациента
         * @class PatientBannerController
         */
        class ScUserProfileController {
            constructor();
        }
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        interface UserProfile {
            fullName?: string;
            shortName?: string;
            avialibleResourceName?: string;
            complexResourceName?: string;
            lpuName?: string;
            role?: string;
            contractName?: string;
            avatar?: string;
            onClickHelp?: () => void;
            onClickDuty?: () => void;
            onClickChangeProfile?: () => void;
            onClickChangeResource?: () => void;
            onClickExit?: () => void;
            onClickSendProblem?: () => void;
        }
        /**
         * Директива визуального компонента "Профайл пользователя".
         * @class UserProfileDirective
         * @directive UserProfileDirective
         */
        function ScUserProfileDirective(): {
            restrict: string;
            replace: boolean;
            scope: {
                profile: string;
            };
            controller: string;
            templateUrl: string;
        };
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Директива визуального компонента "Header".
         * @class HeaderDirective
         * @directive HeaderDirective
         */
        function ScPageHeaderDirective(): {
            restrict: string;
            replace: boolean;
            scope: {
                profile: string;
                menu: string;
            };
            controller: string;
            templateUrl: string;
        };
    }
}
/**
 * @module Utils
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Интерфейс для одного элемента innerData
         */
        interface IScTypeaheadInnerDataElement {
            formatValue: Array<any>;
            value: any;
            dataType: string;
            selected: boolean;
            index: number;
            id: string;
            filtered: boolean;
            group: string;
        }
        class ScTypeaheadInnerDataElement {
            private formatValue;
            private value;
            private dataType;
            private selected;
            private index;
            private id;
            private filtered;
            private filteredIndex;
            static GROUP_ALL: string;
            constructor(data: any, valueFormatter: IScTypeaheadValueFormatter);
            /**
             * Задаем внутренние данные
             * @param data
             * @param valueFormatter
             * @returns {UiKit.Kpi.IScTypeaheadValueFormatter}
             */
            setInnerData(data: any, valueFormatter: IScTypeaheadValueFormatter): ScTypeaheadInnerDataElement;
            /**
             * Получаем formatValue
             * @returns {any}
             */
            getFormatValue(): any;
            /**
             * Задаем formatValue
             * @param data
             * @param valueFormatter
             * @returns {UiKit.Kpi.ScTypeaheadInnerDataElement}
             */
            setFormatValue(data: any, valueFormatter: IScTypeaheadValueFormatter): ScTypeaheadInnerDataElement;
            /**
             * Получаем value
             * @returns {any}
             */
            getValue(): any;
            /**
             * Задаем value
             * @param data
             * @returns {UiKit.Kpi.ScTypeaheadInnerDataElement}
             */
            setValue(data: any): ScTypeaheadInnerDataElement;
            /**
             * Задаем dataType
             * @param data
             * @returns {UiKit.Kpi.ScTypeaheadInnerDataElement}
             */
            setDataTypeElement(data: Array<any>): ScTypeaheadInnerDataElement;
            /**
             * Получаем dataType
             * @returns {string}
             */
            getDataType(): string;
            /**
             * Задаем dataType
             * @param dataType
             * @returns {UiKit.Kpi.ScTypeaheadInnerDataElement}
             */
            setDataType(dataType: string): ScTypeaheadInnerDataElement;
            /**
             * Задаем selected
             * @param selected
             * @returns {UiKit.Kpi.ScTypeaheadInnerDataElement}
             */
            setSelected(selected: boolean): ScTypeaheadInnerDataElement;
            /**
             * Получаем selected
             * @returns {boolean}
             */
            getSelected(): boolean;
            /**
             * Задаем index
             * @param index
             * @returns {UiKit.Kpi.ScTypeaheadInnerDataElement}
             */
            setIndex(index: number): ScTypeaheadInnerDataElement;
            /**
             * Получаем index
             * @returns {number}
             */
            getIndex(): number;
            /**
             * Задаем id
             * @param index
             * @returns {UiKit.Kpi.ScTypeaheadInnerDataElement}
             */
            setId(index: number): ScTypeaheadInnerDataElement;
            /**
             * Получаем id
             * @returns {string}
             */
            getId(): string;
            /**
             * Получаем filtered
             * @param filtered
             * @returns {UiKit.Kpi.ScTypeaheadInnerDataElement}
             */
            setFiltered(filtered: boolean): ScTypeaheadInnerDataElement;
            /**
             * Получаем filtered
             * @returns {boolean}
             */
            getFiltered(): boolean;
            /**
             * Получаем filteredIndex
             * @returns {number}
             */
            getFilteredIndex(): number;
            /**
             * Задаем filteredIndex
             * @param filteredIndex
             * @returns {UiKit.Kpi.ScTypeaheadInnerDataElement}
             */
            setFilteredIndex(filteredIndex: number): ScTypeaheadInnerDataElement;
        }
    }
}
/**
 * @module Utils
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Класс ScTypeaheadInnerData
         */
        class ScTypeaheadInnerData {
            list: Array<any>;
            constructor(data: Array<any>, valueFormatter: IScTypeaheadValueFormatter);
            /**
             * Задаем list
             * @param data
             * @param valueFormatter
             * @returns {UiKit.Kpi.ScTypeaheadInnerData}
             */
            setList(data: Array<any>, valueFormatter: IScTypeaheadValueFormatter): ScTypeaheadInnerData;
            /**
             * Получаем list
             * @returns {Array<UiKit.Kpi.ScTypeaheadInnerDataElement>}
             */
            getList(): Array<UiKit.Kpi.ScTypeaheadInnerDataElement>;
            /**
             * Получаем отфильтрованные значения
             * @param listElement
             * @returns {UiKit.Kpi.ScTypeaheadInnerDataElement[]}
             */
            getFiltered(listElement: Array<UiKit.Kpi.ScTypeaheadInnerDataElement>): Array<UiKit.Kpi.ScTypeaheadInnerDataElement>;
        }
    }
}
/**
 * Created by dkovalev on 29.03.2017.
 */
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Функция, экранирующая спец символы в строке
         * @param searchQuery
         */
        const scTypeaheadFiltersScreening: (searchQuery: string) => string;
        /**
         * class ScTypeaheadFilters
         */
        class ScTypeaheadFilters {
            /**
             * Фильтруем входной массив данных Array<UiKit.Kpi.ScTypeaheadInnerDataElement>
             * @param innerData - входной набор данных Array<UiKit.Kpi.ScTypeaheadInnerDataElement>
             * @param inputValue - строка поиска
             * @param keys - ключи объекта, для фильтрации
             * @param $parse
             */
            static scTypeaheadFilterInnerDataByKey(innerData: Array<UiKit.Kpi.ScTypeaheadInnerDataElement>, inputValue: string, keys: Array<string>, $parse: any): Array<UiKit.Kpi.ScTypeaheadInnerDataElement>;
            /**
             * Получаем только отфильтрованные значения
             * @param list
             * @returns {Array<UiKit.Kpi.ScTypeaheadInnerDataElement>|number|[boolean,boolean,boolean,boolean,boolean]}
             */
            static scTypeaheadOnlyFiltered(list: Array<UiKit.Kpi.ScTypeaheadInnerDataElement>): Array<UiKit.Kpi.ScTypeaheadInnerDataElement>;
            /**
             * Фильтр для маркировки найденных символов в строчке
             * @param input
             * @param extras
             * @returns {any}
             */
            static scTypeaheadTextFilter: (input: string, extras: string, $sce: any) => any;
        }
    }
}
/**
 * Created by dkovalev on 03.04.2017.
 */
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * HandleKeys enum
         */
        enum ScTypeaheadHandleKeys {
            DOWN = 40,
            UP = 38,
            ENTER = 13,
        }
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * Компонент kpi-combobox поддерживает следующие
     * @module Kpi
     */
    module Kpi {
        type IScTypeaheadValueFormatter = (any) => Array<string>;
        type IScTypeaheadInputFormatter = (any) => string;
        type IScTypeaheadOnSearch = (any) => void;
        type IScTypeaheadOnSelect = (value?: any) => any;
        type IScTypeaheadOnChange = (newValue?: any, oldValue?: any) => any;
        interface IScTypeaheadScope extends ng.IScope {
            model?: any;
            source?: Array<any>;
            searchBy?: Array<string>;
            valueFormatter?: IScTypeaheadValueFormatter;
            inputFormatter?: IScTypeaheadInputFormatter;
            minLength?: number;
            list?: any;
            pageSize?: number;
            searchDelay?: number;
            mod: EScTypeaheadMods;
            placeholder: string;
            disabled: boolean;
            onSearch: IScTypeaheadOnSearch;
            onSelect: IScTypeaheadOnSelect;
            onChange: IScTypeaheadOnChange;
        }
        enum EScTypeaheadMods {
            ATTENTION,
            WARNING,
            DEFAULT,
        }
        /**
         * ScTypeaheadController
         */
        class ScTypeaheadController {
            private $scope;
            private $filter;
            private $timeout;
            private $parse;
            private $sce;
            private static MIN_LENGTH;
            private static SEARCH_DELAY;
            static PAGE_SIZE: number;
            EMPTY_SEARCH_RESULTS: string;
            EMPTY_LIST: string;
            private innerData;
            private inputValue;
            private selectedElementsInput;
            private searchInProgress;
            private open;
            private focus;
            private activeIndex;
            private searchOn;
            searchDelayTimeout: any;
            EScTypeaheadMods: typeof EScTypeaheadMods;
            static $inject: string[];
            constructor($scope: IScTypeaheadScope, $filter: any, $timeout: ng.ITimeoutService, $parse: any, $sce: any);
            /**
             * Обновляем данные для sctypeahead
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            updateDatas(): ScTypeaheadController;
            /**
             * Закрытие dropdown
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            close(): ScTypeaheadController;
            /**
             * Задаем list
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            initScopeList(): ScTypeaheadController;
            /**
             * Задаем внутренний list
             * @param source
             * @param valueFormatter
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            initComboboxInnerData(source: Array<any>, valueFormatter: any): ScTypeaheadController;
            /**
             * Получаем innerData
             * @returns {Array<UiKit.Kpi.ScTypeaheadInnerDataElement>}
             */
            getInnerData(): UiKit.Kpi.ScTypeaheadInnerData;
            /**
             * Событие выбора элемента
             * @param data
             * @param $event
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            onSelectData(data: UiKit.Kpi.ScTypeaheadInnerDataElement, $event: any): ScTypeaheadController;
            /**
             * Простой выбор элемента
             * @param data
             */
            private selectOne(data);
            /**
             * Выбираем один элемент, если изменилась модель извне
             * @param data
             */
            selectOneLoad(data: UiKit.Kpi.ScTypeaheadInnerDataElement): void;
            /**
             * Если изначально указана модель, то применяем ее к компоненту
             */
            private initSelectOne();
            /**
             * Инициализируем model
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            private initScopeModel();
            /**
             * Фильтруем innerData
             * @param list
             * @param inputValue - введенное значение в поле ввода
             * @returns {Array<UiKit.Kpi.ScTypeaheadInnerDataElement>}
             */
            private filterInnerData(list, inputValue);
            /**
             * Инициализируем searchBy
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            private initScopeSearchBy();
            /**
             * InputFormatter по умолчанию
             * @returns {string}
             */
            private defaultInputFormatter();
            /**
             * Инициализируем inputFormatter
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            private initScopeInputFormatter();
            /**
             * ValueFormatter по умолчанию
             * @returns {string}
             */
            private defaultValueFormatter();
            /**
             * Инициализируем inputFormatter
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            private initScopeValueFormatter();
            /**
             * Применяем angular фильтры для innerData
             * @param list
             * @param keys
             * @param inputValue
             * @returns {Array<UiKit.Kpi.ScTypeaheadInnerDataElement>}
             */
            private angularFiltersData(list, keys, inputValue);
            /**
             * Инициализируем inputValue
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            private setInputValue(param);
            /**
             * Иницицлизируем minLength
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            private initScopeMinLength();
            /**
             * Очистка поля, модели, выбранных элементов, отфильтрованных элементов
             */
            clear(): ScTypeaheadController;
            /**
             * Задаем selectedElements
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            private setSelectedElementsInput(param);
            /**
             * Получаем selectedElementsInput
             * @returns {string}
             */
            private getSelectedElementsInput();
            /**
             * Задаем количество элементов на странице
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            initScopePageSize(): ScTypeaheadController;
            /**
             * Задаем focus
             * @param focus
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            private setFocus(focus);
            /**
             * Получаем focus
             * @returns {boolean}
             */
            private getFocus();
            /**
             * Задаем open
             * @param open
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            setOpen(open: boolean): ScTypeaheadController;
            /**
             * Получаем open
             * @returns {boolean}
             */
            private getOpen();
            /**
             *
             * @param searchInProgress
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            setSearchInProgress(searchInProgress: boolean): ScTypeaheadController;
            /**
             * Получаем searchInProgress
             * @returns {boolean}
             */
            private getSearchInProgress();
            /**
             * Задаем model
             * @param model
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            private setScopeModel(model);
            /**
             * Получаем отфильтрованные значения
             * @param data
             * @returns {Array}
             */
            getFilteredData(data: Array<UiKit.Kpi.ScTypeaheadInnerDataElement>): Array<UiKit.Kpi.ScTypeaheadInnerDataElement>;
            /**
             * Задаем activeIndex
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            private setActiveIndex(activeIndex);
            /**
             * Получаем activeIndex
             * @returns {number}
             */
            private getActiveIndex();
            /**
             * Инициализируем searchDelay
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            private initScopeSearchDelay();
            /**
             * Проверяем наличие отфильтрованных элементов в list
             * @returns {boolean}
             */
            checkIsFilteredListLength(): boolean;
            /**
             * Проверяем наличие элементов в list
             * @returns {boolean}
             */
            checkIsListLength(): boolean;
            /**
             * Инициализируем мод
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            private initMod();
            /**
             * Закрываем выпадающий список
             * @returns {ScTypeaheadController}
             */
            closeDropDown(): ScTypeaheadController;
            /**
             * Задаем searchOn
             * @param searchOn
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            private setSearchOn(searchOn);
            /**
             * Получаем searchOn
             * @returns {any}
             */
            private getSearchOn();
        }
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * ScTypeaheadDirective
         */
        function ScTypeaheadDirective($timeout: any, $document: any): {
            restrict: string;
            replace: boolean;
            templateUrl: string;
            transclude: boolean;
            scope: {
                model: string;
                source: string;
                valueFormatter: string;
                inputFormatter: string;
                searchBy: string;
                minLength: string;
                searchDelay: string;
                pageSize: string;
                disabled: string;
                placeholder: string;
                mod: string;
                onChange: string;
                onSelect: string;
                onClear: string;
            };
            controller: string;
            link: (scope: any, element: any, attrs: any, controller: any) => void;
        };
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Директива переключателя (Да/Нет)
         * class Switch
         * directive sc-switch
         */
        function SwitchDirective(): {
            restrict: string;
            replace: boolean;
            require: string;
            scope: {
                model: string;
                ngDisabled: string;
                onLabel: string;
                offLabel: string;
            };
            templateUrl: string;
            compile: () => {
                pre: (scope: any, elm: any, attr: any) => void;
            };
        };
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        interface INumberScope extends ng.IScope {
            self: ScSpinnerController;
            model: number;
            options: ISpinner;
        }
        /**
         * Контроллер элемента управления увеличения-уменьшения числового значения поля с помощью стрелок "плюс" и "минус"
         * @class SpinnerController
         */
        class ScSpinnerController {
            private $scope;
            static $inject: string[];
            /**
             * Опции по умолчанию
             * @type {{step: number}}
             */
            private defaultOptions;
            constructor($scope: INumberScope);
            /**
             * функция уменьшения-увеличивания значения числового поля
             * @method number
             */
            changeValue(method: number): any;
        }
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        interface ISpinner {
            minValue?: number;
            maxValue?: number;
            step?: number;
            minTooltip?: string;
            maxTooltip?: string;
        }
        /**
         * Директива элемента управления увеличения-уменьшения числового значения поля с помощью стрелок "плюс" и "минус"
         * @class Spinner
         */
        function ScSpinnerDirective(): any;
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        interface IScOverlayMessageOptions {
            title?: string;
            namespace?: string;
            autoClose?: boolean;
            lifeTime?: number;
            buttons?: Array<string>;
        }
        enum ScOverlayMessageType {
            SUCCESS = 0,
            INFO = 1,
            WARNING = 2,
            DANGER = 3,
            ERROR = 4,
        }
        class ScOverlayMessage {
            id: number;
            deferred: ng.IDeferred<any>;
            messages: any[];
            buttons: string[];
            type: ScOverlayMessageType;
            title: string;
            timer: ng.IPromise<any>;
            autoClose: boolean;
            constructor(messages: string | string[], deferred: ng.IDeferred<any>, type?: ScOverlayMessageType, options?: IScOverlayMessageOptions);
        }
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Сервис управляющий оверлейными сообщениями
         *
         * @class OverlayMessagesService
         */
        class OverlayMessagesService {
            private $q;
            private $timeout;
            private $compile;
            private $http;
            private $rootScope;
            private $templateCache;
            /**
             * Признак был ли инициализирован контейнер для сообщений
             * @type {boolean}
             */
            private IsInitialized;
            /**
             * Признак, паузы для скрытия сообщений, при заданном времени жизни
             * @type {boolean}
             */
            private pause;
            static $inject: string[];
            private defaultOptions;
            messages: ScOverlayMessage[];
            constructor($q: ng.IQService, $timeout: ng.ITimeoutService, $compile: any, $http: ng.IHttpService, $rootScope: any, $templateCache: any);
            private getTemplate();
            /**
             * Установка времени жизни уведомления
             * @method setLifeTime
             * @param {number} ms Время жизни уведомления в мс
             */
            setLifeTime(ms: number): void;
            setPause(val: boolean): void;
            /**
             * Очистка хранилища уведомлений
             * @method remove
             */
            clearMessage(): void;
            /**
             * Отображение уведомления
             * @method show
             * @param {any} messages сообщения
             * @param {string} type тип уведомления
             * @param {options} IAlertMessagesOptions настройки уведомления
             * @return
             */
            show(messages: string | string[], type: ScOverlayMessageType, options?: IScOverlayMessageOptions): ng.IPromise<string>;
            /**
             * Метод для отображения уведомления об успешном выполнении операции
             * @method success
             * @param {any} messages Сообщения
             * @param {IAlertMessagesOptions} options Настройки уведомления
             * @return
             */
            success(messages: string | string[], options?: IScOverlayMessageOptions): any;
            /**
             * Метод для отображения информационного уведомления
             * @method info
             * @param {any} messages Сообщения
             * @param {IAlertMessagesOptions} options Настройки уведомления
             * @return
             */
            info(messages: string | string[], options?: IScOverlayMessageOptions): any;
            /**
             * Метод для отображения уведомления-предупреждения
             * @method warning
             * @param {any} messages Сообщения
             * @param {IAlertMessagesOptions} options Настройки уведомления
             * @return
             */
            warning(messages: string | string[], options?: IScOverlayMessageOptions): any;
            /**
             * Метод для отображения уведомления об опасности
             * @method danger
             * @param {any} messages Сообщения
             * @param {IAlertMessagesOptions} options Настройки уведомления
             * @return
             */
            danger(messages: string | string[], options?: IScOverlayMessageOptions): any;
            /**
             * Метод для отображения уведомления об ошибке
             * @method error
             * @param {any} messages Сообщения
             * @param {IAlertMessagesOptions} options Настройки уведомления
             * @return
             */
            error(messages: string | string[], options?: IScOverlayMessageOptions): any;
            /**
             * Удаление сообщения из коллекции
             * @method removeItem
             * @param alertMessage {Core.UI.AlertMessage} - Объект сообщения который нужно удалить
             */
            private removeItem(message);
            /**
             * Калбек при нажатии на кнопки сообщения
             * @param btnTitle {string} - Название нажатой кнопки
             * @param alertMessage {Core.UI.AlertMessage} - Объект сообщения из которого было нажатие
             */
            private callbackButton(btnTitle, message);
        }
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Директива ScGridMain
         * @class Grid
         * @directive sc-grid-main
         */
        function ScGridMainDirective(): {
            restrict: string;
            replace: boolean;
            template: string;
            transclude: boolean;
            scope: {};
        };
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Директива GridCol
         * @class Grid
         * @directive sc-grid-col
         */
        function ScGridHelpCardDirective(): {
            restrict: string;
            replace: boolean;
            template: string;
            transclude: boolean;
            scope: {
                helpCard: string;
            };
        };
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Директива ScGridJobCard
         *
         * @directive sc-grid-col
         */
        function ScGridJobCardDirective(): {
            restrict: string;
            replace: boolean;
            template: string;
            transclude: boolean;
            scope: {
                helpCard: string;
            };
        };
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Директива ScGridCol
         * @class Grid
         * @directive sc-grid-col
         */
        function ScGridColDirective(): {
            restrict: string;
            replace: boolean;
            template: string;
            transclude: boolean;
            scope: {
                current: string;
                all: string;
                sidebar: string;
            };
        };
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
        /**
         * Директива ScGrid
         * @class Grid
         * @directive sc-grid
         */
        function ScGridDirective(): {
            restrict: string;
            replace: boolean;
            template: string;
            transclude: boolean;
            scope: {
                table: string;
            };
        };
    }
}
/**
 * @module UiKit
 */
declare module UiKit {
    /**
     * @module Kpi
     */
    module Kpi {
    }
}
