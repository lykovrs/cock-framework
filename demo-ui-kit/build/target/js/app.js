var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    var Kpi;
    (function (Kpi) {
        var KpiModule = (function () {
            function KpiModule() {
            }
            KpiModule.getModule = function () {
                var defaultModules = [
                    'ngSanitize',
                    'angular-momentjs',
                    'ui.bootstrap',
                    'ui.mask'
                ];
                return KpiModule.module = KpiModule.module ? KpiModule.module : angular.module(KpiModule.ANGULAR_MODULE_NAME, defaultModules, function ($controllerProvider) {
                });
            };
            KpiModule.contentURL = function (url) {
                if (url === void 0) { url = null; }
                if (url === null)
                    return KpiModule._contentURL;
                KpiModule._contentURL = url;
                return KpiModule._contentURL;
            };
            KpiModule.componentPrefix = function (prefix) {
                if (prefix === void 0) { prefix = null; }
                if (prefix === null)
                    return KpiModule._componentPrefix;
                KpiModule._componentPrefix = prefix;
                return KpiModule._componentPrefix;
            };
            return KpiModule;
        }());
        KpiModule.ANGULAR_MODULE_NAME = "ui-kit-kpi";
        KpiModule.module = null;
        KpiModule._contentURL = 'ui-kit/kpi';
        KpiModule._componentPrefix = 'sc';
        Kpi.KpiModule = KpiModule;
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        var KpiButton;
        (function (KpiButton) {
            /**
             * Директива кнопки
             *
             * @class ScButtonDirective
             */
            function ScButtonDirective() {
                return {
                    restrict: 'E',
                    replace: true,
                    transclude: true,
                    templateUrl: Kpi.KpiModule.contentURL() + '/sc-button/sc-button.html',
                    link: function (scope, element) { }
                };
            }
            KpiButton.ScButtonDirective = ScButtonDirective;
            Kpi.KpiModule.getModule().directive('scButton', [ScButtonDirective]);
        })(KpiButton = Kpi.KpiButton || (Kpi.KpiButton = {}));
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        var KpiIcon;
        (function (KpiIcon) {
            /**
             * Директива иконок
             *
             * @class ScIconDirective
             * @directive sc-icon
             */
            function ScIcon() {
                return {
                    restrict: 'E',
                    transclude: false,
                    replace: true,
                    templateUrl: Kpi.KpiModule.contentURL() + '/sc-icon/sc-icon.html',
                    scope: {
                        type: "@",
                        size: "@?"
                    },
                    link: function (scope, element, attrs) {
                        if (scope.size)
                            scope.sizeIcon = 'sc-icon_size_' + scope.size;
                    }
                };
            }
            KpiIcon.ScIcon = ScIcon;
            Kpi.KpiModule.getModule().directive('scIcon', [ScIcon]);
        })(KpiIcon = Kpi.KpiIcon || (Kpi.KpiIcon = {}));
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/// <reference path="../sc-icon/ScIconDirective.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива визуального компонента "Панель".
         * Пример использования:
         * &lt;panel title="Заголовок панели" class="custom-panel-class" icon="custom-icon-class"&gt;[Содержимое панели]&lt;/panel&gt;
         * @class Panel
         * @directive sc-panel
         */
        function ScPanelHeaderDirective($parse) {
            return {
                restrict: 'EA',
                replace: true,
                transclude: true,
                scope: {
                    icon: '@?',
                    text: '@?'
                },
                templateUrl: Kpi.KpiModule.contentURL() + '/sc-panel-header/sc-panel-header.html',
                link: function (scope, element, attrs) {
                }
            };
        }
        Kpi.ScPanelHeaderDirective = ScPanelHeaderDirective;
        Kpi.KpiModule.getModule().directive('scPanelHeader', ['$parse', ScPanelHeaderDirective]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="sc-accordion-group/ScAccordionGroupInterfaces.ts" />
/**
 * @module Core
 */
var UiKit;
(function (UiKit) {
    var Kpi;
    (function (Kpi) {
        /**
         * ScAccordion
         * @class ScAccordion
         */
        var ScAccordionController = (function () {
            function ScAccordionController($scope) {
                this.$scope = $scope;
                this.groups = []; //Набор всех групп
            }
            /**
             * Закрываем группы, отличные от текущего, по которому совершен клик
             * @param openGroup
             * @returns {UiKit.Kpi.ScAccordionController}
             */
            ScAccordionController.prototype.closeOthers = function (openGroup) {
                this.$scope.closeOthers &&
                    this.groups.forEach(function (group) {
                        group !== openGroup && (group.isOpen = false);
                    });
                return this;
            };
            ;
            /**
             * Добавляем группу
             * @param groupScope
             * @returns {UiKit.Kpi.ScAccordionController}
             */
            ScAccordionController.prototype.addGroup = function (groupScope) {
                var _this = this;
                this.groups.push(groupScope);
                groupScope.$on('$destroy', function () {
                    _this.removeGroup(groupScope);
                });
                return this;
            };
            ;
            /**
             * Удаляем группу
             * @param groupScope
             * @returns {UiKit.Kpi.ScAccordionController}
             */
            ScAccordionController.prototype.removeGroup = function (groupScope) {
                var index = this.groups.indexOf(groupScope);
                index !== -1 && this.groups.splice(index, 1);
                return this;
            };
            ;
            return ScAccordionController;
        }());
        ScAccordionController.$inject = [
            '$scope'
        ];
        Kpi.ScAccordionController = ScAccordionController;
        Kpi.KpiModule.getModule().controller('ScAccordionController', UiKit.Kpi.ScAccordionController);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    var Kpi;
    (function (Kpi) {
        /**
         * Контроллер ScAccordionGroupController
         * @class ScAccordionGroupController
         */
        var ScAccordionGroupController = (function () {
            function ScAccordionGroupController($scope) {
                this.$scope = $scope;
            }
            /**
             * Задаем заголовок
             * @param element
             */
            ScAccordionGroupController.prototype.setHeading = function (element) {
                var _this = this;
                setTimeout(function () { return _this.$scope.heading = element; }, 0);
                return this;
            };
            ;
            /**
             * Проверяем, является ли тип переменной объектом
             * @param element
             * @returns {boolean}
             */
            ScAccordionGroupController.prototype.isTypeofObject = function (element) {
                return typeof element === 'object';
            };
            return ScAccordionGroupController;
        }());
        ScAccordionGroupController.$inject = [
            '$scope',
        ];
        Kpi.ScAccordionGroupController = ScAccordionGroupController;
        Kpi.KpiModule.getModule().controller('ScAccordionGroupController', UiKit.Kpi.ScAccordionGroupController);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../../KpiModule.ts" />
/// <reference path="ScAccordionGroupController.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива scAccordionGroup
         * @class ScAccordionGroupDirective
         */
        function ScAccordionGroupDirective() {
            return {
                restrict: 'E',
                require: '^scAccordion',
                templateUrl: function (element, attrs) {
                    return attrs.templateUrl
                        || Kpi.KpiModule.contentURL() + '/sc-accordion/sc-accordion-group/sc-accordion-group.html';
                },
                controller: 'ScAccordionGroupController',
                transclude: true,
                scope: {
                    heading: '@?',
                    isOpen: '=?',
                    isDisabled: '=?',
                    openClass: '@?',
                    panelClass: '@?'
                },
                link: function (scope, element, attrs, scAccordionCtrl) {
                    scAccordionCtrl.addGroup(scope);
                    scope.$watch('isOpen', function (value) {
                        value && scAccordionCtrl.closeOthers(scope);
                    });
                    scope.toggleOpen = function ($event) {
                        !scope.isDisabled && (!$event || $event.which === 32) && (scope.isOpen = !scope.isOpen);
                    };
                }
            };
        }
        Kpi.ScAccordionGroupDirective = ScAccordionGroupDirective;
        Kpi.KpiModule.getModule().directive('scAccordionGroup', [UiKit.Kpi.ScAccordionGroupDirective]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/**
 * Created by dkovalev on 15.03.2017.
 */
/**
 * Created by dkovalev on 15.03.2017.
 */
/// <reference path="../../KpiModule.ts" />
/// <reference path="ScAccordionHeadingController.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива scAccordionHeading
         * @class ScAccordionHeadingDirective
         */
        function ScAccordionHeadingDirective() {
            return {
                restrict: 'EA',
                replace: true,
                transclude: true,
                template: '',
                require: '^scAccordionGroup',
                link: function (scope, element, attr, accordionGroupCtrl, transclude) {
                    //Задаем heading посредством вызова метода setHeading из ScAccordionGroupController
                    //Делаем transclude
                    accordionGroupCtrl.setHeading(transclude(scope, function () { }));
                }
            };
        }
        Kpi.ScAccordionHeadingDirective = ScAccordionHeadingDirective;
        Kpi.KpiModule.getModule().directive('scAccordionHeading', [UiKit.Kpi.ScAccordionHeadingDirective]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/**
 * Created by dkovalev on 15.03.2017.
 */
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Контроллер ScAccordionTranscludeController
         * @class ScAccordionTranscludeController
         */
        var ScAccordionTranscludeController = (function () {
            function ScAccordionTranscludeController($scope) {
                this.$scope = $scope;
            }
            return ScAccordionTranscludeController;
        }());
        ScAccordionTranscludeController.$inject = [
            '$scope',
        ];
        Kpi.ScAccordionTranscludeController = ScAccordionTranscludeController;
        Kpi.KpiModule.getModule().controller('ScAccordionTranscludeController', UiKit.Kpi.ScAccordionTranscludeController);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/**
 * Created by dkovalev on 15.03.2017.
 */
/// <reference path="../../KpiModule.ts" />
/// <reference path="ScAccordionTranscludeController.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * Sc
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива scAccordionTransclude
         * @class ScAccordionHeadingDirective
         */
        function ScAccordionTranscludeDirective() {
            return {
                require: '^scAccordionGroup',
                link: function (scope, element, attr, controller) {
                    scope.$watch(function () { return controller.$scope[attr.scAccordionTransclude]; }, function (heading) {
                        var headingSpan = heading && controller.isTypeofObject(heading)
                            ? element.find('.sc-panel-span')
                            : null;
                        headingSpan && headingSpan.html('').append(heading);
                    });
                }
            };
        }
        Kpi.ScAccordionTranscludeDirective = ScAccordionTranscludeDirective;
        Kpi.KpiModule.getModule().directive('scAccordionTransclude', [UiKit.Kpi.ScAccordionTranscludeDirective]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/// <reference path="ScAccordionController.ts" />
/// <reference path="sc-accordion-group/ScAccordionGroupDirective.ts" />
/// <reference path="sc-accordion-heading/ScAccordionHeadingDirective.ts" />
/// <reference path="sc-accordion-transclude/ScAccordionTranscludeDirective.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива scAccordion
         * @class ScTextareaDirective
         */
        function ScAccordionDirective() {
            return {
                restrict: 'EA',
                templateUrl: function (element, attrs) { return attrs.templateUrl
                    || Kpi.KpiModule.contentURL() + '/sc-accordion/sc-accordion.html'; },
                controller: 'ScAccordionController',
                transclude: true,
                scope: {
                    closeOthers: '=?'
                }
            };
        }
        Kpi.ScAccordionDirective = ScAccordionDirective;
        Kpi.KpiModule.getModule().directive('scAccordion', [UiKit.Kpi.ScAccordionDirective]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * ScTextArea
         * @class ScTextArea
         */
        var ScTextareaController = (function () {
            function ScTextareaController($scope) {
                this.$scope = $scope;
            }
            /**
             * Событие focus
             */
            ScTextareaController.prototype.onFocus = function () {
                this.$scope.focus = true;
            };
            /**
             * Событие blur
             */
            ScTextareaController.prototype.onBlur = function () {
                this.$scope.focus = false;
            };
            return ScTextareaController;
        }());
        ScTextareaController.$inject = [
            '$scope',
        ];
        Kpi.ScTextareaController = ScTextareaController;
        Kpi.KpiModule.getModule().controller('ScTextareaController', UiKit.Kpi.ScTextareaController);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/// <reference path="ScTextareaController.ts" />
/**
 * @module Core
 */
var UiKit;
(function (UiKit) {
    /**
     * Sc
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива кнопки
         *
         * @class ScTextareaDirective
         */
        function ScTextareaDirective() {
            return {
                replace: true,
                restrict: 'E',
                templateUrl: Kpi.KpiModule.contentURL() + '/sc-textarea/sc-textarea.html',
                controller: 'ScTextareaController as controller',
                scope: {
                    model: '=',
                    name: '@?',
                    placeholder: '=?',
                    onChange: '&?',
                    disabled: '=?',
                    required: '=?',
                    resize: '=?',
                    maxLength: '=?'
                },
                link: function (scope) {
                }
            };
        }
        Kpi.ScTextareaDirective = ScTextareaDirective;
        Kpi.KpiModule.getModule().directive('scTextarea', [UiKit.Kpi.ScTextareaDirective]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../sc-button/ScButtonDirective.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива Сплит-кнопки
         *
         * @class ScButtonSplit
         * @directive sc-button-split
         */
        function ScButtonSplitDirective() {
            return {
                restrict: 'E',
                transclude: true,
                replace: true,
                templateUrl: Kpi.KpiModule.contentURL() + '/sc-button-split/sc-button-split.html',
                scope: {
                    text: "@?",
                    ngDisabled: '='
                }
            };
        }
        Kpi.ScButtonSplitDirective = ScButtonSplitDirective;
        Kpi.KpiModule.getModule().directive('scButtonSplit', [ScButtonSplitDirective]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
//// <reference path="../../libs/tsd.d.ts" />/
/**
 * @module Core
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Чекбокс
         * @class Checkbox
         */
        var Checkbox = (function () {
            function Checkbox(model, label, name, disabled, onChange, indeterminate) {
                this.model = model;
                this.label = label;
                this.name = name;
                this.disabled = disabled;
                this.onChange = onChange;
                this.indeterminate = indeterminate;
            }
            return Checkbox;
        }());
        Kpi.Checkbox = Checkbox;
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/// <reference path="ScCheckbox.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива для кастомизации чекбокса
         * @class ScCheckbox
         * @directive sc-checkbox
         */
        function ScCheckboxDirective() {
            return {
                restrict: 'EA',
                replace: 'true',
                templateUrl: Kpi.KpiModule.contentURL() + '/sc-checkbox/sc-checkbox.html',
                require: '^ngModel',
                scope: {
                    model: '=ngModel',
                    label: '@',
                    name: '@',
                    onChange: '=?ngChange',
                    disabled: '=?ngDisabled',
                    indeterminate: '='
                },
                link: function (scope, element, attrs, ngCtrl) {
                    scope.$watch('indeterminate', function (value) { return element.find('input').prop('indeterminate', !!value); });
                }
            };
        }
        Kpi.ScCheckboxDirective = ScCheckboxDirective;
        Kpi.KpiModule.getModule().directive('scCheckbox', [ScCheckboxDirective]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива Radio button
         * @class Radio
         * @directive sc-radio
         */
        function ScRadioDirective() {
            return {
                restrict: 'EA',
                replace: true,
                templateUrl: Kpi.KpiModule.contentURL() + '/sc-radio/sc-radio.html',
                transclude: true,
                scope: {
                    name: '@',
                    model: '=ngModel',
                    value: '=',
                    initial: '=',
                    id: '=',
                    onChange: '&?ngChange'
                },
                link: function (scope, element, attrs) {
                    var $radio = element.find('input[type=radio]');
                    scope.attrs = attrs;
                    scope.isChecked = function () {
                        var radio = $radio[0];
                        if (radio) {
                            return radio.checked;
                        }
                    };
                    if (scope.initial) {
                        scope.model = scope.initial;
                    }
                }
            };
        }
        Kpi.ScRadioDirective = ScRadioDirective;
        Kpi.KpiModule.getModule().directive('scRadio', [ScRadioDirective]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        'use strict';
        var ScDateFieldController = (function () {
            function ScDateFieldController($scope, $element, $attrs, $log) {
                var _this = this;
                this.$scope = $scope;
                this.$element = $element;
                this.$attrs = $attrs;
                this.$log = $log;
                this.stopWatch = false;
                this.id = null;
                /**
                 * Опции по умолчанию
                 * @type {{minDate: Moment, maxDate: Moment, selectedDate: null, format: string, showWeeks: boolean, disabled: boolean, opened: boolean, showIcon: boolean}}
                 */
                this.defaultOptions = {
                    minDate: new Date("1900-01-01"),
                    maxDate: new Date("3000-01-01"),
                    selectedDate: null,
                    showWeeks: false,
                    disabled: false,
                    opened: false,
                    showIcon: true,
                    format: 'DD MMMM YYYY, dd',
                    appendToBody: false,
                    disableEntry: true,
                    isValid: true,
                    invalidDate: null,
                    clearInvalidDate: true
                };
                this.id = 'date-field-' + new Date().getTime();
                var $field = this.$element.find(".input");
                // Генерим id для отлавливания события ухода фокуса
                $element.attr('id', this.id);
                //if ($scope.model){ $scope.options.selectedDate = $scope.model.toDate(); }
                // Применяем опции
                $scope.options = angular.extend({}, this.defaultOptions, $scope.options);
                // Опции календаря
                $scope.datepickerOptions = {
                    formatYear: 'yyyy',
                    showWeeks: $scope.options.showWeeks,
                    startingDay: 1
                };
                $scope.$watch('options.selectedDate', function (date) {
                    if (_this.stopWatch) {
                        _this.stopWatch = false;
                        return;
                    }
                    if (date) {
                        _this.$scope.options.isValid = true;
                        _this.$scope.options.invalidDate = null;
                        $scope.date = moment(date).format($scope.options.format);
                        if (!$scope.options.disableEntry) {
                            _this.stopWatch = true;
                            $scope.options.filledDate = moment(date);
                        }
                        if (angular.isDefined($scope.model)) {
                            _this.$scope.model = moment(date);
                        }
                    }
                    else if ($scope.options.disableEntry) {
                        $scope.date = null;
                    }
                    /**
                     * Если модель, содержащая дату директивы, очищена, то удаляем внутреннее состояние даты плагина
                     * datepicker (строку, содержащую дату)
                     */
                    if (!$scope.options.selectedDate) {
                        $scope.date = null;
                    }
                });
                angular.isDefined($scope.model) && $scope.$watch('model', function (date) {
                    $scope.date = date ? moment(date).format($scope.options.format) : null;
                    if (!_this.stopWatch) {
                        $scope.options.selectedDate = date || null;
                        _this.stopWatch = true;
                    }
                });
                $scope.$watch('options.defaults', function (newValue, oldValue) {
                    if (newValue === oldValue) {
                        return;
                    }
                    _this.updateDefaults();
                });
                $scope.getDayClass = function (date) {
                    var day = date.getDay(), customClass = $scope.options.customClass && $scope.options.customClass(date);
                    if (!customClass)
                        customClass = "";
                    if (day === 0) {
                        customClass += " text-holiday";
                    }
                    return customClass;
                };
                if ($scope.options.disableEntry) {
                    this.disableEntry();
                }
                else {
                    // Ручной ввод доступен только для формата D, DD, MM, YYYY
                    if ($scope.options.format.match(/Mo|MMM|MMMM|Do|DDD|DDDo|DDDD|d/)) {
                        $log.info('DateField: Ручной ввод доступен только для форматов D, DD, MM, YYYY');
                        this.disableEntry();
                    }
                    else {
                        // Устанавливаем маску по формату
                        $scope.mask = $scope.options.format;
                        // После того, как поле заполнено, применяем дату
                        $scope.$watch('isCleared', function (isCleared, oldValue) {
                            if (isCleared === oldValue)
                                return;
                            if (isCleared) {
                                $scope.options.isValid = true;
                                $scope.options.invalidDate = null;
                                $scope.options.filledDate = false;
                            }
                        });
                        // После того, как поле заполнено, применяем дату
                        $scope.$watch('options.filledDate', function (filledDate, oldFilledDate) {
                            if (_this.stopWatch) {
                                _this.stopWatch = false;
                                return;
                            }
                            if (filledDate === oldFilledDate) {
                                return;
                            }
                            if (filledDate) {
                                var minDate = moment($scope.options.minDate);
                                var maxDate = moment($scope.options.maxDate);
                                _this.$scope.isCleared = false;
                                // Для корректной проверки дат, сбрасываем значения: часов, минут, секунд, милисекунд
                                filledDate.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
                                minDate.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
                                maxDate.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
                                // Проверяем, чтобы дата была в пределах minDate и maxDate
                                if (filledDate.isAfter(maxDate) || filledDate.isBefore(minDate)) {
                                    $scope.options.isValid = false;
                                    $scope.options.selectedDate = null;
                                    // Сохраняем невалидную дату и сбрасываем filledDate
                                    _this.stopWatch = true;
                                    $scope.options.invalidDate = filledDate;
                                    $scope.options.filledDate = false;
                                }
                                else {
                                    _this.$scope.options.isValid = true;
                                    $scope.options.invalidDate = null;
                                    _this.stopWatch = true;
                                    $scope.options.selectedDate = filledDate.toDate();
                                    if (angular.isDefined($scope.model)) {
                                        _this.$scope.model = filledDate;
                                    }
                                }
                            }
                            else {
                                $scope.options.selectedDate = null;
                                if (angular.isDefined(_this.$scope.model)) {
                                    _this.$scope.model = null;
                                }
                            }
                        }, false);
                        $field.bind('blur', function () {
                            _this.onFocusOut();
                        });
                        $(document).on('click.dateFieldCloseClick', function (event) {
                            if ($(event.target).closest("#" + _this.id).length)
                                return;
                            _this.onFocusOut();
                        });
                        if ($scope.options.defaults) {
                            this.updateDefaults();
                        }
                    }
                }
                $scope.$on("$destroy", function () {
                    _this.$element.off("click");
                    $(document).off("click.dateFieldCloseClick");
                });
            }
            ScDateFieldController.prototype.onFocusOut = function () {
                var _this = this;
                if (!this.$scope.options.selectedDate && this.$scope.options.clearInvalidDate) {
                    this.$scope.$apply(function () {
                        _this.$scope.date = null;
                        _this.$scope.options.invalidDate = null;
                        _this.$scope.options.isValid = true;
                        //this.$scope.options.opened = false;
                    });
                }
            };
            ScDateFieldController.prototype.disableEntry = function () {
                var _this = this;
                var $field = this.$element.find(".input");
                this.$scope.options.disableEntry = true;
                $field.attr('readonly', 'true');
                $field.attr('tabindex', -1);
                $field.on('click', function (e) {
                    _this.$scope.$apply(function () {
                        _this.open(e);
                    });
                });
            };
            ScDateFieldController.prototype.updateDefaults = function () {
                var _this = this;
                var replaceMap = {
                    year: /Y/gim,
                    month: /M/gim,
                    day: /D/gim
                };
                var format = this.$scope.options.format;
                _.each(replaceMap, function (value, key) {
                    if (!_this.$scope.options.defaults[key]) {
                        format = format.replace(replaceMap[key], '_');
                    }
                });
                this.$scope.defaultsDateString = moment(this.$scope.options.defaults).format(format);
            };
            /**
             * Метод для открытия календаря
             * @method open
             */
            ScDateFieldController.prototype.open = function ($event) {
                var _this = this;
                $event.preventDefault();
                // Позволяем выделять дату в инпут-боксе, не открывая календарь
                if ($event.currentTarget.selectionStart != $event.currentTarget.selectionEnd) {
                    return;
                }
                setTimeout(function () {
                    if (!_this.$scope.options.disabled) {
                        _this.$scope.$apply(function () {
                            _this.$scope.options.opened = true;
                            // Обновляем положение положение календаря
                            _this.$scope.updateDirection();
                        });
                    }
                });
                // Блокируем кнопку "Сегодня" если минимальная дата больше текущей
                this.$scope.todayDisabled = this.$scope.options.minDate.getTime() > Date.now();
            };
            /**
             * Метод для закрытия календаря
             * @method close
             */
            ScDateFieldController.prototype.close = function ($event) {
                $event.preventDefault();
                this.$scope.options.opened = false;
            };
            return ScDateFieldController;
        }());
        Kpi.ScDateFieldController = ScDateFieldController;
        Kpi.KpiModule.getModule().controller('ScDateFieldController', ScDateFieldController);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива смены месяца для календаря
         * @class ChangeMonthDirective
         */
        function ChangeMonthDirective() {
            return {
                link: function (scope, element) {
                    var changeMonth = {
                        'января': 'январь',
                        'февраля': 'февраль',
                        'марта': 'март',
                        'апреля': 'апрель',
                        'мая': 'май',
                        'июня': 'июнь',
                        'июля': 'июль',
                        'августа': 'август',
                        'сентября': 'сентябрь',
                        'октября': 'октябрь',
                        'ноября': 'ноябрь',
                        'декабря': 'декабрь',
                        '01': '1',
                        '02': '2',
                        '03': '3',
                        '04': '4',
                        '05': '5',
                        '06': '6',
                        '07': '7',
                        '08': '8',
                        '09': '9'
                    };
                    element[0].addEventListener('DOMSubtreeModified', function (ev) {
                        var twoDate = ev.target.textContent.split(' ');
                        if (twoDate.length > 1) {
                            if (changeMonth[twoDate[0]]) {
                                twoDate[0] = changeMonth[twoDate[0]];
                                ev.target.textContent = twoDate.join(' ');
                            }
                        }
                        else {
                            if (changeMonth[ev.target.textContent]) {
                                ev.target.textContent = changeMonth[ev.target.textContent];
                            }
                        }
                    }, false);
                }
            };
        }
        Kpi.ChangeMonthDirective = ChangeMonthDirective;
        Kpi.KpiModule.getModule().directive('changeMonth', ChangeMonthDirective);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
// переопределяем шаблон бутстрапа template/datepicker/day.html
angular.module('template/datepicker/day.html', []).run(['$templateCache', function ($templateCache) {
        $templateCache.put('template/datepicker/day.html', "<table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n        <thead>\n          <tr>\n          <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\">\n          <i class=\"icon icon-chevron-left\"></i></button></th>\n            <th colspan=\"{{5 + showWeeks}}\">\n              <button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-sm\" ng-click=\"toggleMode()\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n            <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"icon icon-chevron-right\"></i></button></th>\n          </tr>\n          <tr>\n            <th ng-show=\"showWeeks\" class=\"text-center\"></th>\n           <th ng-repeat=\"label in labels track by $index\" class=\"text-center\"><small aria-label=\"{{label.full}}\">{{label.abbr}}</small></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr ng-repeat=\"row in rows track by $index\">\n            <td ng-show=\"showWeeks\" class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td>\n                <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\">\n                <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default btn-sm \" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{'text-muted': dt.secondary, 'text-info': dt.current }\" class=\"{{dt.customClass}}\">{{dt.label}}</span></button>\n            </td>\n          </tr>\n        </tbody>\n        </table>");
    }]);
angular.module("template/datepicker/popup.html", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("template/datepicker/popup.html", "<ul class=\"dropdown-menu a-calendar\" ng-if=\"isOpen\" style=\"display: block\" ng-style=\"{top: position.top+'px', left: position.left+'px'}\" ng-keydown=\"keydown($event)\"  ng-click=\"$event.stopPropagation()\">\n            <li ng-transclude></li>\n            <li ng-if=\"showButtonBar\">\n              \n                <button type=\"button\" \n                        class=\"sc-datepicker__btn\" \n                        ng-click=\"select('today')\" \n                        ng-disabled=\"$parent.$parent.$parent.todayDisabled\">{{ getText('current') }}</button>\n\n                <!--<button type=\"button\" \n                        class=\"sc-datepicker__btn\" \n                        ng-click=\"parent.$parent.$parent.selectMonth($event)\",\n                        ng-disabled=\"$parent.$parent.$parent.todayDisabled\">\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u043C\u0435\u0441\u044F\u0446</button>\n\n                <button type=\"button\" \n                    class=\"sc-datepicker__btn\" \n                    ng-click=\"$parent.$parent.$parent.select('year')\" \n                    ng-disabled=\"$parent.$parent.$parent.todayDisabled\">\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0433\u043E\u0434</button>\n\n                <button type=\"button\" class=\"btn btn-sm btn-danger\" ng-click=\"select(null)\">{{ getText('clear') }}</button>-->\n              \n                <!--<button type=\"button\" class=\"sc-datepicker__btn\" ng-click=\"close()\">{{ getText('close') }}</button>-->\n            </li>\n         </ul>\n        ");
    }]);
angular.module("template/datepicker/month.html", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("template/datepicker/month.html", "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n\t\t<thead>\n\t\t  <tr>\n\t\t    <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"icon icon-chevron-left\"></i></button></th>\n\t\t    <th><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n\t\t    <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"icon icon-chevron-right\"></i></button></th>\n\t\t  </tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t  <tr ng-repeat=\"row in rows track by $index\">\n\t\t    <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{::dt.uid}}\" ng-class=\"::dt.customClass\">\n\t\t      <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled && !$parent.$parent.$parent.$parent.options.ignoreDisabledInMonthMode\" tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n\t\t    </td>\n\t\t  </tr>\n\t\t</tbody>\n\t\t</table>");
    }]);
angular.module("template/datepicker/year.html", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("template/datepicker/year.html", "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n\t\t<thead>\n\t\t  <tr>\n\t\t    <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"icon icon-chevron-left\"></i></button></th>\n\t\t    <th colspan=\"3\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n\t\t    <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"icon icon-chevron-right\"></i></button></th>\n\t\t  </tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t  <tr ng-repeat=\"row in rows track by $index\">\n\t\t    <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{::dt.uid}}\" ng-class=\"::dt.customClass\">\n\t\t      <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled && !$parent.$parent.$parent.$parent.options.ignoreDisabledInMonthMode\" tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n\t\t    </td>\n\t\t  </tr>\n\t\t</tbody>\n\t\t</table>");
    }]);
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        'use strict';
        var DateFieldMaskDirectiveClass = (function () {
            function DateFieldMaskDirectiveClass(scope, element, attrs, controller) {
                var _this = this;
                this.scope = scope;
                this.element = element;
                this.attrs = attrs;
                this.controller = controller;
                this.mask = this.attrs.dateFieldMask;
                this.maskArr = this.mask.split('');
                this.maskMap = {};
                this.maxPos = 0;
                this.minPos = 0;
                this.caretPosition = 0;
                this.previousCaretPosition = 0;
                this.oldDateMap = null;
                this.selectionLength = 0;
                this.oldDateValue = '';
                this.isDeletion = null;
                this.isEntry = null;
                this.lastSelectedDate = null;
                this.maskValidators = {
                    'DD': function (value) {
                        var isChanged = false;
                        var date = +value;
                        if (date > 31) {
                            isChanged = true;
                            date = 31;
                        }
                        else if (date < 1) {
                            date = 1;
                            isChanged = true;
                        }
                        return {
                            changed: isChanged,
                            value: date
                        };
                    },
                    'MM': function (value) {
                        var isChanged = false;
                        var months = +value;
                        if (months > 12) {
                            isChanged = true;
                            // В момент, отсчёт месяцев идёт с 0
                            months = 11;
                        }
                        else if (months < 1) {
                            isChanged = true;
                        }
                        return {
                            changed: isChanged,
                            value: months
                        };
                    }
                };
                if (this.mask) {
                    var lastFormatCode = null;
                    var fullFormatCode = null;
                    var formatCodeStart = 0;
                    var formatCodeEnd = 0;
                    // Делаем разметку по маске, для валидации
                    _.each(this.mask, function (value, key) {
                        if (value.match(/D|d|M|Y/)) {
                            if (value !== lastFormatCode) {
                                lastFormatCode = value;
                                fullFormatCode = value;
                                formatCodeStart = key;
                            }
                            else {
                                fullFormatCode += value;
                                formatCodeEnd = key;
                            }
                        }
                        else {
                            _this.addMaskMap(lastFormatCode, fullFormatCode, formatCodeStart, formatCodeEnd);
                        }
                    });
                    this.addMaskMap(lastFormatCode, fullFormatCode, formatCodeStart, formatCodeEnd);
                    // Вычисляем максимально допустимую позицию каретки
                    for (var i = this.mask.length - 1; i > 0; i--) {
                        if (this.mask[i].match(/D|d|M|Y/)) {
                            this.maxPos = i + 1;
                            break;
                        }
                    }
                    // Биндим эвенты
                    element.bind('input keyup click focus', function (e) { return _this.eventHandler(e); });
                }
            }
            /**
             * Добавление маппинга для формата
             * @param formatCode - символ форматирования (например D)
             * @param fullFormatCode - полный блок ворматирования (например DD для 01 число)
             * @param formatCodeStart - индекс начала блока в маске
             * @param formatCodeEnd - индекс конца блока в маске
             */
            DateFieldMaskDirectiveClass.prototype.addMaskMap = function (formatCode, fullFormatCode, formatCodeStart, formatCodeEnd) {
                this.maskMap[formatCode] = {
                    format: fullFormatCode,
                    startPosition: formatCodeStart,
                    endPosition: formatCodeEnd,
                    validate: this.maskValidators[fullFormatCode] || null,
                    type: { 'D': 'day', 'M': 'month', 'Y': 'year' }[formatCode]
                };
            };
            DateFieldMaskDirectiveClass.prototype.eventHandler = function (e) {
                var e = e || {};
                var value = this.element.val();
                var eventWhich = e.which;
                var eventType = e.type;
                var dateMap = value.split('');
                //var selectionLenOld = this.selectionLength || 0;
                var isKeyDelete = eventWhich === 46;
                var isTabKey = eventWhich === 9;
                this.caretPosition = this.getCaretPosition(this.element[0]);
                if (eventType === 'click') {
                    // Если нет значения, устанавливаем в поле маску
                    if (!this.scope.options.selectedDate && !value) {
                        var mask = '';
                        if (this.scope.defaultsDateString) {
                            mask = this.scope.defaultsDateString;
                            // Если по умолчанию задана дата целиком, применяем
                            if (mask.indexOf('_') === -1) {
                                this.oldDateMap = mask.split('');
                                this.adjustMaskedValue(this.caretPosition);
                            }
                        }
                        else {
                            mask = this.mask.replace(/D|M|Y|d/g, '_');
                        }
                        this.element.val(mask);
                        this.controller.$setViewValue(mask);
                        this.setCaretPosition(this.element[0], 0);
                        // Сбрасываем предыдущий мапинг значения
                        this.oldDateMap = null;
                    }
                    if (!this.oldDateMap || this.lastSelectedDate !== this.scope.options.selectedDate) {
                        this.oldDateValue = this.element.val();
                        this.oldDateMap = this.oldDateValue.split('');
                        this.lastSelectedDate = this.scope.options.selectedDate;
                    }
                    // Устанавливаем каретку на первый незаполненый символ
                    if (dateMap[this.caretPosition - 1] && dateMap[this.caretPosition - 1].indexOf('_') !== -1) {
                        for (var pos = this.caretPosition - 1; pos >= this.minPos; pos--) {
                            if (dateMap[pos].indexOf('_') === -1) {
                                this.caretPosition = pos + 1;
                                this.setCaretPosition(this.element[0], this.caretPosition);
                                break;
                            }
                            if (pos === this.minPos) {
                                this.caretPosition = pos;
                                this.setCaretPosition(this.element[0], this.caretPosition);
                            }
                        }
                    }
                    this.setPreviousCaretPosition(this.caretPosition);
                }
                var oldValue = this.oldDateValue;
                // Если зажаты shift или ctrl ничего не делаем
                if (eventWhich === 16 || eventWhich === 91) {
                    return;
                }
                this.isEntry = (dateMap.length + this.selectionLength) > this.mask.length;
                // При удалени true
                //this.isDeletion = (value.length < oldValue.length) || (selectionLenOld && value.length === oldValue.length - selectionLenOld);
                this.isDeletion = (value.length < oldValue.length) && !this.isEntry;
                if (eventType === 'keyup') {
                    // При удалении кнопкой delete смещаем корретку
                    if (isKeyDelete) {
                        this.setCaretPosition(this.element[0], this.caretPosition + 1);
                    }
                    if (isTabKey) {
                        this.setCaretPosition(this.element[0], this.caretPosition);
                    }
                    this.setPreviousCaretPosition(this.caretPosition);
                }
                if (eventType === 'input') {
                    // Если курсор находится за пределами маски, отменяем изменения
                    if (this.caretPosition > this.maxPos) {
                        this.revertChanges();
                        return;
                    }
                    var char = dateMap[this.caretPosition - 1];
                    // Удаление
                    if (this.isDeletion) {
                        for (var currentPos = this.caretPosition; currentPos >= 0; currentPos--) {
                            if (this.maskArr[currentPos].match(/D|d|M|Y/)) {
                                // Если выбрана область, удаляем
                                if (this.selectionLength) {
                                    for (var i = currentPos; i < currentPos + this.selectionLength; i++) {
                                        if (this.maskArr[i].match(/D|d|M|Y/)) {
                                            this.oldDateMap[i] = '_';
                                        }
                                    }
                                }
                                else {
                                    this.oldDateMap[currentPos] = '_';
                                }
                                this.adjustMaskedValue(currentPos);
                                break;
                            }
                        }
                    }
                    else {
                        // Допустимы только числа
                        if (!char.match(/[0-9]/)) {
                            this.revertChanges();
                            return;
                        }
                        var charPosition = this.previousCaretPosition;
                        for (var currentPos = this.previousCaretPosition; currentPos < this.maxPos && currentPos < this.caretPosition; currentPos++) {
                            char = dateMap[charPosition];
                            if (!this.maskArr[currentPos].match(/D|d|M|Y/)) {
                                if (char === this.maskArr[currentPos]) {
                                    this.oldDateMap[currentPos] = char;
                                    this.adjustMaskedValue(currentPos + 1, false);
                                    charPosition = currentPos + 1;
                                }
                                else {
                                    this.caretPosition++;
                                }
                            }
                            else {
                                this.oldDateMap[currentPos] = char;
                                // При выделении
                                if (this.selectionLength > 0 && this.isEntry) {
                                    for (var i = currentPos + 1; i < currentPos + this.selectionLength; i++) {
                                        if (this.maskArr[i].match(/D|d|M|Y/)) {
                                            this.oldDateMap[i] = '_';
                                        }
                                    }
                                }
                                // Получаем разметку для валидирования данного формата
                                var maskChar = this.maskArr[currentPos];
                                var map = this.maskMap[maskChar];
                                if (map) {
                                    // Получаем строку по полному блоку формата
                                    var testValue = this.oldDateMap.join('').substring(+map.startPosition, +map.endPosition + 1);
                                    // Если блок заполнен и есть для него валидация, валидируем
                                    if (testValue.indexOf('_') === -1 && map.validate) {
                                        var validatedValue = map.validate(testValue);
                                        // Если в ходе валидации было измененро значение, переписываем на скоректированное
                                        if (validatedValue.changed) {
                                            var properties = {};
                                            properties[map.type] = validatedValue.value;
                                            validatedValue = moment(properties).format(map.format).split('');
                                            for (var i = map.startPosition; i < map.endPosition + 1; i++) {
                                                this.oldDateMap[i] = validatedValue.shift();
                                            }
                                        }
                                    }
                                }
                                this.adjustMaskedValue(currentPos + 1, false);
                                charPosition = currentPos + 1;
                            }
                        }
                        this.caretPosition = currentPos;
                    }
                    this.setPreviousCaretPosition(this.caretPosition);
                }
                if (eventType === 'focus') {
                    this.element.click();
                }
                this.selectionLength = this.getSelectionLength(this.element[0]);
            };
            /**
             * Применяет обработаное значение к полю и устанавливает положение каретки
             * @param position
             * @param setCaretPosition: boolean Устанавливать ли значение положения каретки
             */
            DateFieldMaskDirectiveClass.prototype.adjustMaskedValue = function (position, setCaretPosition) {
                if (setCaretPosition === void 0) { setCaretPosition = true; }
                var maskedValue = this.oldDateMap.join('');
                // Проверяем, все ли символы введены
                if (maskedValue.indexOf('_') === -1) {
                    // Получаем значение дня, месяца и года
                    var day = +maskedValue.substring(this.maskMap['D'].startPosition, this.maskMap['D'].endPosition + 1);
                    var month = +maskedValue.substring(this.maskMap['M'].startPosition, this.maskMap['M'].endPosition + 1) - 1;
                    var year = +maskedValue.substring(this.maskMap['Y'].startPosition, this.maskMap['Y'].endPosition + 1);
                    // После заполнения всей даты, проверяем на валидность число месяца
                    var endOfMonth = moment({ day: 1, month: month, year: year });
                    // Если указано недопустимое число, корректируем
                    var endOfMonthDate = endOfMonth.daysInMonth();
                    if (day > endOfMonthDate) {
                        day = endOfMonthDate;
                        endOfMonth.date(day);
                        var changedDay = endOfMonth.format(this.maskMap['D'].format).split('');
                        for (var i = this.maskMap['D'].startPosition; i < this.maskMap['D'].endPosition + 1; i++) {
                            this.oldDateMap[i] = changedDay.shift();
                        }
                        maskedValue = this.oldDateMap.join('');
                    }
                    this.scope.options.filledDate = moment({ day: day, month: month, year: year });
                }
                else {
                    var oldDateMapValue = this.oldDateMap.join('');
                    if (!oldDateMapValue.match(/[0-9]/)) {
                        this.scope.isCleared = true;
                    }
                    this.scope.options.filledDate = false;
                }
                this.oldDateValue = maskedValue;
                this.element.val(maskedValue);
                this.controller.$setViewValue(maskedValue);
                this.element.val(maskedValue);
                this.setCaretPosition(this.element[0], position);
                if (setCaretPosition) {
                    this.caretPosition = position;
                }
            };
            /**
             * Получает положение каретки
             * @param input
             * @returns {number}
             */
            DateFieldMaskDirectiveClass.prototype.getCaretPosition = function (input) {
                var caretPos = 0;
                var doc = document;
                if (doc.selection) {
                    input.focus();
                    var selection = doc.selection.createRange();
                    selection.moveStart('character', -input.value.length);
                    caretPos = selection.text.length;
                }
                else if (input.selectionStart || input.selectionStart == '0') {
                    caretPos = input.selectionStart;
                }
                return caretPos;
            };
            /**
             * Устанавливает положение каретки
             * @param input
             * @param pos
             */
            DateFieldMaskDirectiveClass.prototype.setCaretPosition = function (input, pos) {
                if (!input)
                    return 0;
                if (input.offsetWidth === 0 || input.offsetHeight === 0) {
                    return;
                }
                if (input.setSelectionRange) {
                    input.focus();
                    input.setSelectionRange(pos, pos);
                }
                else if (input.createTextRange) {
                    var range = input.createTextRange();
                    range.collapse(true);
                    range.moveEnd('character', pos);
                    range.moveStart('character', pos);
                    range.select();
                }
            };
            /**
             * Устанавливает значение предыдущего положения каретки
             * @param pos
             */
            DateFieldMaskDirectiveClass.prototype.setPreviousCaretPosition = function (pos) {
                this.previousCaretPosition = pos;
            };
            /**
             * Получает размер выделения
             * @param input
             * @returns {number}
             */
            DateFieldMaskDirectiveClass.prototype.getSelectionLength = function (input) {
                var document = document;
                if (!input) {
                    return 0;
                }
                if (input.selectionStart !== undefined) {
                    return (input.selectionEnd - input.selectionStart);
                }
                if (document.selection) {
                    return (document.selection.createRange().text.length);
                }
                return 0;
            };
            /**
             * Отменяет все изменения и устанавливает значение до ввода
             */
            DateFieldMaskDirectiveClass.prototype.revertChanges = function () {
                var value = this.oldDateMap.join('');
                this.element.val(value);
                this.controller.$setViewValue(value);
                this.setCaretPosition(this.element[0], this.caretPosition - 1);
                this.setPreviousCaretPosition(this.caretPosition);
            };
            return DateFieldMaskDirectiveClass;
        }());
        /**
         * Директива маски текстового поля
         * @class DateFieldMaskDirective
         * @directive mask
         */
        function DateFieldMaskDirective() {
            return {
                require: 'ngModel',
                restrict: 'A',
                compile: function maskCompilingFunction() {
                    return function maskLinkingFunction(scope, element, attrs, controller) {
                        new DateFieldMaskDirectiveClass(scope, element, attrs, controller);
                    };
                }
            };
        }
        Kpi.DateFieldMaskDirective = DateFieldMaskDirective;
        Kpi.KpiModule.getModule().directive('dateFieldMask', DateFieldMaskDirective);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="ScDateFieldController.ts" />
/// <reference path="ScChangeMonthDirective.ts" />
/// <reference path="ScDatepicker.ts" />
/// <reference path="ScDateFieldMaskDirective.ts" />
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива выбора даты
         * @class DateFieldDirective
         * @directive date-field
         */
        function ScDateFieldDirective($document) {
            return {
                restrict: 'EA',
                templateUrl: Kpi.KpiModule.contentURL() + '/sc-date-field/sc-date-field.html',
                replace: true,
                scope: {
                    model: '=?ngModel',
                    options: '=dateFieldOptions' //IDateField
                },
                controller: 'ScDateFieldController as controller',
                link: function (scope, element) {
                    var $container = element;
                    var timeout = null;
                    /**
                     * Установка оптимального положения календаря (вверх/вниз)
                     * @param event {string} - при каком действии была вызвана функция (open, resize)
                     */
                    scope.updateDirection = function (event) {
                        if (event === void 0) { event = 'open'; }
                        setTimeout(function () {
                            scope.$apply(function () {
                                if (!scope.options.opened)
                                    return;
                                var $datePicker = $container.find(".dropdown-menu");
                                // Получение popup-календаря если он прикреплен к body
                                if ($datePicker.length < 1) {
                                    $datePicker = $document.find('.a-calendar:not([style="display: none;"])');
                                }
                                // Скрываем только при открытии
                                if (event === 'open') {
                                    $datePicker.addClass("invisible");
                                }
                                $container.find(".a-calendar").addClass("top-direction");
                                var windowHeight = $(window).height();
                                var fieldHeight = $container.height();
                                var calendarHeight = fieldHeight + $datePicker.height();
                                var datePickerBottom = $datePicker.get(0).getBoundingClientRect().bottom;
                                if (datePickerBottom + calendarHeight < windowHeight) {
                                    $container.find(".a-calendar").removeClass("top-direction");
                                }
                                var uiViewWidth = $("body").width();
                                var calendarWidth = $datePicker.width();
                                var datePickerRight = $datePicker.get(0).getBoundingClientRect().right;
                                if (datePickerRight > uiViewWidth) {
                                    $container.find(".a-calendar").css('left', uiViewWidth - datePickerRight);
                                }
                                $datePicker.removeClass("invisible");
                            });
                        });
                    };
                    // При ресайзе обновляем положение календаря
                    $(window).on('resize.datefieldUpDirection', function ($event) {
                        clearTimeout(timeout);
                        timeout = setTimeout(function () {
                            scope.updateDirection('resize');
                        }, 300);
                    });
                    /**
                     * Callback при destroy scope
                     */
                    var offDestroy = function () {
                        $container.off("click");
                        $(window).off('resize.datefieldUpDirection');
                    };
                    scope.$on('$destroy', offDestroy);
                }
            };
        }
        Kpi.ScDateFieldDirective = ScDateFieldDirective;
        Kpi.KpiModule.getModule().directive('scDateField', [
            '$document',
            ScDateFieldDirective
        ]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        'use strict';
        var ScDatePeriodController = (function () {
            function ScDatePeriodController($scope, $timeout, $element, $attrs) {
                var _this = this;
                this.$scope = $scope;
                this.$timeout = $timeout;
                this.$element = $element;
                this.$attrs = $attrs;
                this.stopWatch = false;
                this.initStartDateFieldDefaults = null;
                this.initEndDateFieldDefaults = null;
                this.initLockedPeriod = null;
                /**
                 * Опции по умолчанию
                 * @type {{isLock: boolean}}
                 */
                this.defaultOptions = {
                    isLock: true
                };
                // Применяем опции
                $scope.options = angular.extend({}, this.defaultOptions, $scope.options);
                // Сохраняем значение периода если надо
                if ($scope.options.isLock && $scope.options.period) {
                    this.initLockedPeriod = $scope.options.period;
                    this.stopWatch = true;
                    $scope.options.period = null;
                    if ($scope.options.startDateField.selectedDate || $scope.options.endDateField.selectedDate) {
                        this.onUpdateDateFields();
                    }
                }
                this.$timeout(function () {
                    // Сохраняем первичные установки по умолчанию и значение периода если надо
                    _this.initStartDateFieldDefaults = $scope.options.startDateField.defaults;
                    _this.initEndDateFieldDefaults = $scope.options.endDateField.defaults;
                    // Устанавливаем вотчер для отслеживания смены даты календаря "с"
                    $scope.$watch('options.startDateField.selectedDate', function (newDate, oldDate) {
                        if (!_this.initLockedPeriod && newDate) {
                            // Устанавливаем у календаря "по" minDate равную дате календаря "с"
                            $scope.options.endDateField.minDate = newDate;
                        }
                        if (newDate === oldDate)
                            return;
                        _this.checkOnUpdateFields();
                        if (!newDate) {
                            $scope.options.endDateField.minDate = null;
                            $scope.options.period = null;
                            // Если поле "по" невалидное, пробуем применить сохранёную дату с учётом изменений даты "с"
                            if (!$scope.options.endDateField.clearInvalidDate) {
                                $scope.options.endDateField.filledDate = $scope.options.endDateField.invalidDate;
                            }
                            return;
                        }
                        if (_this.stopWatch) {
                            _this.stopWatch = false;
                            return;
                        }
                        var selectedDate = moment(newDate);
                        if (_this.initLockedPeriod) {
                            _this.stopWatch = true;
                            _this.$scope.options.endDateField.selectedDate = selectedDate.add(+_this.initLockedPeriod - 1, 'days').toDate();
                        }
                        _this.updateDefaults('startDateField', selectedDate);
                        _this.onUpdateDateFields();
                        // Если поле "по" невалидное, пробуем применить сохранёную дату с учётом изменений даты "с"
                        if (!$scope.options.endDateField.clearInvalidDate) {
                            $scope.options.endDateField.filledDate = $scope.options.endDateField.invalidDate;
                        }
                    });
                    // Устанавливаем вотчер для отслеживания смены даты календаря "по"
                    $scope.$watch('options.endDateField.selectedDate', function (newDate, oldDate) {
                        if (!_this.initLockedPeriod && newDate) {
                            // Устанавливаем у календаря "с" maxDate равную дате календаря "по"
                            $scope.options.startDateField.maxDate = newDate;
                        }
                        if (newDate === oldDate)
                            return;
                        _this.checkOnUpdateFields();
                        if (!newDate) {
                            $scope.options.period = null;
                            // Если поле "с" невалидное, пробуем применить сохранёную дату с учётом изменений даты "по"
                            if (!$scope.options.startDateField.clearInvalidDate) {
                                $scope.options.startDateField.filledDate = $scope.options.startDateField.invalidDate;
                            }
                            return;
                        }
                        if (_this.stopWatch) {
                            _this.stopWatch = false;
                            return;
                        }
                        var selectedDate = moment(newDate);
                        if (_this.initLockedPeriod) {
                            _this.stopWatch = true;
                            _this.$scope.options.startDateField.selectedDate = selectedDate.subtract(+_this.initLockedPeriod - 1, 'days').toDate();
                        }
                        _this.updateDefaults('endDateField', selectedDate);
                        _this.onUpdateDateFields();
                        // Если поле "с" невалидное, пробуем применить сохранёную дату с учётом изменений даты "по"
                        if (!$scope.options.startDateField.clearInvalidDate) {
                            $scope.options.startDateField.filledDate = $scope.options.startDateField.invalidDate;
                        }
                    });
                    $scope.$watch('options.period', function (newPeriod, oldPeriod) { return _this.callbackChangePeriod(newPeriod, oldPeriod); });
                    $scope.$watch('options.endDateField.isValid', function (isValid) {
                        if (!isValid) {
                            var startDateFieldDate = moment($scope.options.startDateField.selectedDate);
                            var endDateFieldDate = moment($scope.options.endDateField.invalidDate);
                            startDateFieldDate.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
                            endDateFieldDate.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
                            if (endDateFieldDate.diff(startDateFieldDate, 'days') < 0 || endDateFieldDate.isAfter(new Date())) {
                                $scope.options.error = 'Ошибка ввода дат, дата завершения периода не может быть раньше его начала.';
                                $scope.options.endDateField.clearInvalidDate = false;
                            }
                        }
                        else {
                            $scope.options.error = '';
                            $scope.options.endDateField.clearInvalidDate = true;
                        }
                    });
                    $scope.$watch('options.startDateField.isValid', function (isValid) {
                        if (!isValid) {
                            var endDateFieldDate = moment($scope.options.endDateField.selectedDate);
                            var startDateFieldDate = moment($scope.options.startDateField.invalidDate);
                            endDateFieldDate.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
                            startDateFieldDate.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
                            if (startDateFieldDate.diff(endDateFieldDate, 'days') > 0 || startDateFieldDate.isAfter(new Date())) {
                                $scope.options.error = 'Ошибка ввода дат, дата начала периода не может быть позже его завершения.';
                                $scope.options.startDateField.clearInvalidDate = false;
                            }
                        }
                        else {
                            $scope.options.error = '';
                            $scope.options.startDateField.clearInvalidDate = true;
                        }
                    });
                    // Устанавливаем вотчер для отслеживания disabled
                    $scope.$watch('options.disabled', function (disabled) {
                        $scope.options.startDateField.disabled = disabled;
                        $scope.options.endDateField.disabled = disabled;
                    });
                }, 0);
            }
            ScDatePeriodController.prototype.updateDefaults = function (changedField, date) {
                if (!this.$scope.options[changedField]) {
                    return;
                }
                var newDefaults = {};
                var testDate = moment(date);
                if (changedField === 'startDateField' && this.initEndDateFieldDefaults && this.initEndDateFieldDefaults.year) {
                    var defaults = this.initEndDateFieldDefaults;
                    var defaultDate = moment(defaults);
                    if (defaultDate.isBefore(testDate)) {
                        _.each(defaults, function (value, key) {
                            var value = testDate.get(key === 'day' ? 'date' : key);
                            newDefaults[key] = (defaults[key] < value) ? value : defaults[key];
                        });
                        this.$scope.options.endDateField.defaults = newDefaults;
                    }
                    else {
                        this.$scope.options.endDateField.defaults = defaults;
                    }
                }
                else if (this.initStartDateFieldDefaults && this.initStartDateFieldDefaults.year) {
                    var defaults = this.initStartDateFieldDefaults;
                    var defaultDate = moment(defaults);
                    if (defaultDate.isAfter(testDate)) {
                        _.each(defaults, function (value, key) {
                            var value = testDate.get(key === 'day' ? 'date' : key);
                            newDefaults[key] = (defaults[key] > value) ? value : defaults[key];
                        });
                        this.$scope.options.startDateField.defaults = newDefaults;
                    }
                    else {
                        this.$scope.options.startDateField.defaults = defaults;
                    }
                }
            };
            /**
             * Колбек смены периода
             * @param {number} newPeriod
             * @param {number} oldPeriod
             */
            ScDatePeriodController.prototype.callbackChangePeriod = function (newPeriod, oldPeriod) {
                if (oldPeriod === void 0) { oldPeriod = null; }
                var $scope = this.$scope;
                if (this.stopWatch) {
                    this.stopWatch = false;
                    return;
                }
                if (newPeriod) {
                    if ($scope.options.isLock) {
                        this.initLockedPeriod = +newPeriod;
                    }
                    if ($scope.options.startDateField.selectedDate) {
                        var startDate = moment($scope.options.startDateField.selectedDate);
                        this.stopWatch = true;
                        $scope.options.endDateField.selectedDate = startDate.add(+newPeriod - 1, 'days').toDate();
                    }
                    else {
                        var endDate = moment($scope.options.endDateField.selectedDate);
                        this.stopWatch = true;
                        $scope.options.startDateField.selectedDate = endDate.subtract(+newPeriod - 1, 'days').toDate();
                    }
                    this.onUpdateDateFields();
                }
            };
            /**
             * Метод для расчёта и обновления периода
             * @method onUpdateDateFields
             */
            ScDatePeriodController.prototype.onUpdateDateFields = function () {
                var $scope = this.$scope;
                if (this.initLockedPeriod) {
                    // Проверяем, указана ли начальная дата, если нет, устанавливаем
                    if (!$scope.options.startDateField.selectedDate) {
                        var endDate = moment($scope.options.endDateField.selectedDate);
                        this.stopWatch = true;
                        $scope.options.startDateField.selectedDate = endDate.subtract(this.initLockedPeriod - 1, 'days').toDate();
                    }
                    else if (!$scope.options.endDateField.selectedDate) {
                        var startDate = moment($scope.options.startDateField.selectedDate);
                        this.stopWatch = true;
                        $scope.options.endDateField.selectedDate = startDate.add(this.initLockedPeriod - 1, 'days').toDate();
                    }
                    this.updatePeriod();
                }
                else if ($scope.options.startDateField.selectedDate && $scope.options.endDateField.selectedDate) {
                    this.updatePeriod();
                }
            };
            /**
             * Метод для расчёта и обновления периода
             * @method updatePeriod
             */
            ScDatePeriodController.prototype.updatePeriod = function () {
                var _this = this;
                this.$timeout(function () {
                    var startDate = moment(_this.$scope.options.startDateField.selectedDate);
                    var range = moment(_this.$scope.options.endDateField.selectedDate)
                        .diff(startDate, 'days', true);
                    var newPeriod = Math.ceil(range) + 1;
                    if (_this.$scope.options.period !== newPeriod) {
                        _this.stopWatch = true;
                        _this.$scope.options.period = newPeriod;
                        // Для установленного периода, сбрасываем ограничения дат
                        if (newPeriod && _this.initLockedPeriod) {
                            _this.$scope.options.startDateField.maxDate = null;
                            _this.$scope.options.endDateField.minDate = null;
                        }
                    }
                }, 0);
            };
            ScDatePeriodController.prototype.checkOnUpdateFields = function () {
                // Если обе даты периода не заполнены
                if (!this.$scope.options.startDateField.selectedDate && !this.$scope.options.endDateField.selectedDate
                    && !(this.$scope.options.startDateField.invalidDate || this.$scope.options.endDateField.invalidDate)) {
                    // Сбрасываем min max ограничения дат, если нет значения у обоих календарей
                    this.$scope.options.startDateField.maxDate = null;
                    this.$scope.options.endDateField.minDate = null;
                    // Сбрасываем defaults
                    this.$scope.options.endDateField.defaults = this.initEndDateFieldDefaults;
                    this.$scope.options.startDateField.defaults = this.initStartDateFieldDefaults;
                }
            };
            return ScDatePeriodController;
        }());
        ScDatePeriodController.$inject = ['$scope', '$timeout'];
        Kpi.ScDatePeriodController = ScDatePeriodController;
        Kpi.KpiModule.getModule().controller('ScDatePeriodController', ScDatePeriodController);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="ScDatePeriodController.ts" />
/// <reference path="../sc-date-field/ScDateFieldDirective.ts" />
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        'use strict';
        /**
         * Директива периода
         * @class DatePeriodDirective
         * @directive date-period
         */
        function ScDatePeriodDirective() {
            return {
                restrict: 'EA',
                templateUrl: Kpi.KpiModule.contentURL() + '/sc-date-period/sc-date-period.html',
                replace: true,
                scope: {
                    options: '=datePeriodOptions' //IDatePeriod
                },
                controller: 'ScDatePeriodController as controller'
            };
        }
        Kpi.ScDatePeriodDirective = ScDatePeriodDirective;
        Kpi.KpiModule.getModule().directive('scDatePeriod', ScDatePeriodDirective);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        'use strict';
        var EScDateSpinnerMethod;
        (function (EScDateSpinnerMethod) {
            EScDateSpinnerMethod[EScDateSpinnerMethod["ADD"] = 'add'] = "ADD";
            EScDateSpinnerMethod[EScDateSpinnerMethod["SUBTRUCT"] = 'subtract'] = "SUBTRUCT";
        })(EScDateSpinnerMethod = Kpi.EScDateSpinnerMethod || (Kpi.EScDateSpinnerMethod = {}));
        var ScDateSpinnerController = (function () {
            function ScDateSpinnerController($scope) {
                var _this = this;
                this.$scope = $scope;
                this.selectedDate = null;
                this.minDate = null;
                this.maxDate = null;
                this.$scope.$watchCollection(function () { return _this.$scope.options; }, function (newCollection) {
                    if (newCollection.selectedDate && newCollection.minDate && newCollection.maxDate) {
                        _this.selectedDate = moment(newCollection.selectedDate).startOf('day');
                        _this.minDate = moment(newCollection.minDate).startOf('day');
                        _this.maxDate = moment(newCollection.maxDate).startOf('day');
                        _this.$scope.btnPrevDisabled = _this.$scope.options && _this.$scope.options.minDate
                            ? _this.selectedDate.isSame(_this.minDate)
                            : false;
                        _this.$scope.btnNextDisabled = _this.$scope.options && _this.$scope.options.maxDate
                            ? _this.selectedDate.isSame(_this.maxDate)
                            : false;
                    }
                    _this.$scope.options.showIcon = false;
                });
            }
            /**
             * Метод смещения даты
             * @method shiftDay
             */
            ScDateSpinnerController.prototype.shiftDay = function (dir) {
                if (!this.$scope.options.disabled) {
                    this.selectedDate = moment(this.$scope.options.selectedDate).startOf('day');
                    this.minDate = moment(this.$scope.options.minDate).startOf('day');
                    this.maxDate = moment(this.$scope.options.maxDate).startOf('day');
                    this.selectedDate[dir > 0 ? EScDateSpinnerMethod.ADD : EScDateSpinnerMethod.SUBTRUCT](1, 'days');
                    // Блокируем кнопки если надо
                    this.$scope.btnNextDisabled = this.selectedDate.isSame(this.maxDate);
                    this.$scope.btnPrevDisabled = this.selectedDate.isSame(this.minDate);
                    // Перезаписываем дату в настройках
                    this.$scope.options.selectedDate = this.selectedDate.toDate();
                }
            };
            return ScDateSpinnerController;
        }());
        ScDateSpinnerController.$inject = ['$scope'];
        Kpi.ScDateSpinnerController = ScDateSpinnerController;
        Kpi.KpiModule.getModule().controller('ScDateSpinnerController', ScDateSpinnerController);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="ScDateSpinnerController.ts" />
/// <reference path="../sc-date-field/ScDateFieldDirective.ts" />
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        'use strict';
        /**
         * Директива выбора даты с кнопками навигации
         * @class DateSpinnerDirective
         * @directive date-spinner
         */
        function ScDateSpinnerDirective() {
            return {
                restrict: 'EA',
                templateUrl: Kpi.KpiModule.contentURL() + '/sc-date-spinner/sc-date-spinner.html',
                replace: true,
                scope: {
                    options: '=dateSpinnerOptions' //IDateSpinner
                },
                controller: 'ScDateSpinnerController as controller'
            };
        }
        Kpi.ScDateSpinnerDirective = ScDateSpinnerDirective;
        Kpi.KpiModule.getModule().directive('scDateSpinner', ScDateSpinnerDirective);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        var KpiTextField;
        (function (KpiTextField) {
            /**
             * Директива текстового поля
             *
             * @class ScTextFieldDirective
             */
            function ScTextFieldDirective() {
                return {
                    restrict: 'E',
                    replace: true,
                    transclude: true,
                    scope: {},
                    templateUrl: Kpi.KpiModule.contentURL() + '/sc-text-field/sc-text-field.html',
                    link: function (scope, element, attrs) {
                        scope.focusElement = false;
                        var labelElement = element.find('.sc-text-field__inner');
                        var inputElement = element.find('input');
                        inputElement.focus(function () {
                            labelElement.addClass('focus');
                        });
                        inputElement.blur(function () {
                            labelElement.removeClass('focus');
                        });
                        /**
                         * Callback при destroy scope
                         */
                        var offDestroy = function () {
                            inputElement.off();
                        };
                        scope.$on('$destroy', offDestroy);
                    }
                };
            }
            KpiTextField.ScTextFieldDirective = ScTextFieldDirective;
            Kpi.KpiModule.getModule().directive('scTextField', [ScTextFieldDirective]);
        })(KpiTextField = Kpi.KpiTextField || (Kpi.KpiTextField = {}));
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="ScPanelTagDirective.ts" />
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Контроллер директивы панели тэгов
         *
         * @class ScPaginationController
         */
        var ScPanelTagController = (function () {
            function ScPanelTagController($scope) {
                var _this = this;
                this.$scope = $scope;
                this.setCounterTags = function (item) {
                    _this.counterTags += item;
                };
                this.counterTags = 0;
            }
            return ScPanelTagController;
        }());
        ScPanelTagController.$inject = [
            '$scope'
        ];
        Kpi.ScPanelTagController = ScPanelTagController;
        Kpi.KpiModule.getModule().controller('ScPanelTagController', ScPanelTagController);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива тэга
         *
         * @class ScButtonDirective
         */
        function ScTagDirective() {
            return {
                restrict: 'E',
                replace: true,
                transclude: true,
                require: '^scPanelTag',
                templateUrl: Kpi.KpiModule.contentURL() + '/sc-panel-tag/sc-tag.html',
                scope: {
                    icon: '@',
                    onRemove: '&',
                    disabled: '=ngDisabled'
                },
                link: function (scope, element, attrs, ctrl) {
                    if (scope.onRemove) {
                        var onRemove = scope.onRemove;
                        scope.onRemove = function ($event) {
                            onRemove({ $index: element.index() });
                            $event.stopPropagation();
                            ctrl.setCounterTags(-1);
                        };
                    }
                    ctrl.setCounterTags(1);
                }
            };
        }
        Kpi.ScTagDirective = ScTagDirective;
        Kpi.KpiModule.getModule().directive('scTag', [ScTagDirective]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="ScPanelTagController.ts" />
/// <reference path="ScTagDirective.ts" />
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива панели тэгов
         *
         * @class ScPanelTagDirective
         */
        function ScPanelTagDirective() {
            return {
                restrict: 'E',
                replace: true,
                transclude: true,
                templateUrl: Kpi.KpiModule.contentURL() + '/sc-panel-tag/sc-panel-tag.html',
                controller: "ScPanelTagController as controller",
                scope: {}
            };
        }
        Kpi.ScPanelTagDirective = ScPanelTagDirective;
        Kpi.KpiModule.getModule().directive('scPanelTag', [ScPanelTagDirective]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * контроллер директивы footer
         * @class FooterController
         * @controller FooterController
         */
        var ScFooterController = (function () {
            function ScFooterController($scope, $state) {
                this.$scope = $scope;
                this.$state = $state;
            }
            return ScFooterController;
        }());
        Kpi.ScFooterController = ScFooterController;
        Kpi.KpiModule.getModule().controller('ScFooterController', ScFooterController);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
/**
 * директива обновления времени
 * @class ScClock
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива отображения времени
         * @directive sc-clock
         */
        function ScClockDirective($interval, dateFilter) {
            return {
                restrict: 'A',
                link: function (scope, element) {
                    var format, timeoutId;
                    function updateTime() {
                        scope.timeNow = new Date();
                    }
                    element.on('$destroy', function () {
                        $interval.cancel(timeoutId);
                    });
                    timeoutId = $interval(function () {
                        updateTime();
                        scope.$digest();
                    }, 1000, 0, false);
                }
            };
        }
        Kpi.ScClockDirective = ScClockDirective;
        Kpi.KpiModule.getModule().directive('scClock', ['$interval', 'dateFilter', ScClockDirective]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="ScFooterController.ts" />
/// <reference path="ScClockDirective.ts" />
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива визуального компонента "footer".
         * @class FooterDirective
         * @directive FooterDirective
         */
        function ScFooterDirective() {
            return {
                restrict: 'EA',
                replace: true,
                scope: {
                    showHelp: "=?"
                },
                controller: 'ScFooterController as controller',
                templateUrl: Kpi.KpiModule.contentURL() + '/sc-page-footer/sc-page-footer.html',
                link: function (scope, element, attrs, controller) {
                }
            };
        }
        Kpi.ScFooterDirective = ScFooterDirective;
        Kpi.KpiModule.getModule().directive('scPageFooter', [ScFooterDirective]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/**
 * @module Utils
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        var ScComboboxInnerDataElement = (function () {
            function ScComboboxInnerDataElement(data, valueFormatter) {
                this.setInnerData(data, valueFormatter);
            }
            /**
             * Задаем внутренние данные
             * @param data
             * @param valueFormatter
             * @returns {UiKit.Kpi.IScComboboxInnerDataElement}
             */
            ScComboboxInnerDataElement.prototype.setInnerData = function (data, valueFormatter) {
                this.setFormatValue(data, valueFormatter)
                    .setValue(data)
                    .setDataTypeElement(data)
                    .setSelected(false)
                    .setFiltered(true)
                    .setGroup(ScComboboxInnerDataElement.GROUP_ALL);
                return this;
            };
            /**
             * Получаем formatValue
             * @returns {any}
             */
            ScComboboxInnerDataElement.prototype.getFormatValue = function () {
                return this.formatValue;
            };
            /**
             * Задаем formatValue
             * @param data
             * @param valueFormatter
             * @returns {UiKit.Kpi.ScComboboxInnerDataElement}
             */
            ScComboboxInnerDataElement.prototype.setFormatValue = function (data, valueFormatter) {
                this.formatValue = valueFormatter ? valueFormatter(angular.copy(data)) : angular.copy(data);
                return this;
            };
            /**
             * Получаем value
             * @returns {any}
             */
            ScComboboxInnerDataElement.prototype.getValue = function () {
                return this.value;
            };
            /**
             * Задаем value
             * @param data
             * @returns {UiKit.Kpi.ScComboboxInnerDataElement}
             */
            ScComboboxInnerDataElement.prototype.setValue = function (data) {
                this.value = angular.copy(data);
                return this;
            };
            /**
             * Задаем dataType
             * @param data
             * @returns {UiKit.Kpi.ScComboboxInnerDataElement}
             */
            ScComboboxInnerDataElement.prototype.setDataTypeElement = function (data) {
                typeof data === 'string' || typeof data === 'number' || typeof data === 'boolean'
                    ? this.setDataType('string')
                    : this.setDataType('object');
                return this;
            };
            /**
             * Получаем dataType
             * @returns {string}
             */
            ScComboboxInnerDataElement.prototype.getDataType = function () {
                return this.dataType;
            };
            /**
             * Задаем dataType
             * @param dataType
             * @returns {UiKit.Kpi.ScComboboxInnerDataElement}
             */
            ScComboboxInnerDataElement.prototype.setDataType = function (dataType) {
                this.dataType = dataType;
                return this;
            };
            /**
             * Задаем selected
             * @param selected
             * @returns {UiKit.Kpi.ScComboboxInnerDataElement}
             */
            ScComboboxInnerDataElement.prototype.setSelected = function (selected) {
                this.selected = selected;
                return this;
            };
            /**
             * Получаем selected
             * @returns {boolean}
             */
            ScComboboxInnerDataElement.prototype.getSelected = function () {
                return this.selected;
            };
            /**
             * Задаем index
             * @param index
             * @returns {UiKit.Kpi.ScComboboxInnerDataElement}
             */
            ScComboboxInnerDataElement.prototype.setIndex = function (index) {
                this.index = index;
                return this;
            };
            /**
             * Получаем index
             * @returns {number}
             */
            ScComboboxInnerDataElement.prototype.getIndex = function () {
                return this.index;
            };
            /**
             * Задаем id
             * @param index
             * @returns {UiKit.Kpi.ScComboboxInnerDataElement}
             */
            ScComboboxInnerDataElement.prototype.setId = function (index) {
                this.id = "sc-combobox-element-" + index;
                return this;
            };
            /**
             * Получаем id
             * @returns {string}
             */
            ScComboboxInnerDataElement.prototype.getId = function () {
                return this.id;
            };
            /**
             * Получаем filtered
             * @param filtered
             * @returns {UiKit.Kpi.ScComboboxInnerDataElement}
             */
            ScComboboxInnerDataElement.prototype.setFiltered = function (filtered) {
                this.filtered = filtered;
                return this;
            };
            /**
             * Получаем filtered
             * @returns {boolean}
             */
            ScComboboxInnerDataElement.prototype.getFiltered = function () {
                return this.filtered;
            };
            /**
             * Задаем group
             * @param group
             * @returns {UiKit.Kpi.ScComboboxInnerDataElement}
             */
            ScComboboxInnerDataElement.prototype.setGroup = function (group) {
                this.group = group ? group : ScComboboxInnerDataElement.GROUP_ALL;
                return this;
            };
            /**
             * Получаем group
             * @returns {any}
             */
            ScComboboxInnerDataElement.prototype.getGroup = function () {
                return this.group;
            };
            /**
             * Задаем pageNumber
             */
            ScComboboxInnerDataElement.prototype.setPageNumber = function (index, pageSize) {
                this.pageNumber = pageSize / index;
                return this;
            };
            /**
             * Задаем pagesCount
             * @param dataLength
             * @param pageSize
             * @returns {UiKit.Kpi.ScComboboxInnerDataElement}
             */
            ScComboboxInnerDataElement.prototype.setPagesCount = function (dataLength, pageSize) {
                this.pagesCount = Math.ceil(dataLength / pageSize);
                return this;
            };
            /**
             * Получаем pagesCount
             * @returns {number}
             */
            ScComboboxInnerDataElement.prototype.getPagesCount = function () {
                return this.pagesCount;
            };
            /**
             * Получаем filteredIndex
             * @returns {number}
             */
            ScComboboxInnerDataElement.prototype.getFilteredIndex = function () {
                return this.filteredIndex;
            };
            /**
             * Задаем filteredIndex
             * @param filteredIndex
             * @returns {UiKit.Kpi.ScComboboxInnerDataElement}
             */
            ScComboboxInnerDataElement.prototype.setFilteredIndex = function (filteredIndex) {
                this.filteredIndex = filteredIndex;
                return this;
            };
            return ScComboboxInnerDataElement;
        }());
        ScComboboxInnerDataElement.GROUP_ALL = 'Все'; //Константа группы по умолчанию
        Kpi.ScComboboxInnerDataElement = ScComboboxInnerDataElement;
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="ScComboboxInnerDataElement.ts" />
/**
 * @module Utils
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Класс ScComboboxInnerData
         */
        var ScComboboxInnerData = (function () {
            function ScComboboxInnerData(data, valueFormatter, params) {
                this.list = {}; //Набор сгруппированных элементов. Если флаг group не стоит, то будет объект с ключом, который задается в UiKit.Kpi.ScComboboxInnerDataElement.GROUP_ALL
                this.groups = []; //Массив полей, по которым будет происходить группировка
                this.setGroups(params.group, data)
                    .setList(data, valueFormatter, params);
            }
            /**
             * Задаем list
             * @param data
             * @param valueFormatter
             * @param params
             * @returns {UiKit.Kpi.ScComboboxInnerData}
             */
            ScComboboxInnerData.prototype.setList = function (data, valueFormatter, params) {
                var _this = this;
                //Даннй ключ из UiKit.Kpi.ScComboboxInnerDataElement.GROUP_ALL в list присутствует всегда.
                this.list[UiKit.Kpi.ScComboboxInnerDataElement.GROUP_ALL] = angular.copy(data)
                    .map(function (el, index) {
                    return new UiKit.Kpi.ScComboboxInnerDataElement(el, valueFormatter)
                        .setId(index)
                        .setGroup(UiKit.Kpi.ScComboboxInnerDataElement.GROUP_ALL)
                        .setIndex(index);
                });
                this.groups && this.groups.length && this.groups.forEach(function (group) {
                    if (group !== UiKit.Kpi.ScComboboxInnerDataElement.GROUP_ALL) {
                        _this.list[group] = angular.copy(_this.list[UiKit.Kpi.ScComboboxInnerDataElement.GROUP_ALL])
                            .filter(function (d) { return d.getValue()[params.group] === group; })
                            .map(function (el, index) {
                            return el.setGroup(el[params.group])
                                .setIndex(index)
                                .setGroup(group);
                        });
                    }
                });
                return this;
            };
            /**
             * Получаем list
             * @returns {Array<UiKit.Kpi.ScComboboxInnerDataElement>}
             */
            ScComboboxInnerData.prototype.getList = function (group) {
                return this.list[group];
            };
            /**
             * Задаем groups
             * @param group
             * @param data
             * @returns {UiKit.Kpi.ScComboboxInnerData}
             */
            ScComboboxInnerData.prototype.setGroups = function (group, data) {
                var _this = this;
                if (!group)
                    return this;
                data.forEach(function (d) {
                    d && d[group] && (_this.groups.push(d[group]));
                });
                //Собираем массив групп, где первым элементом будет строка из UiKit.Kpi.ScComboboxInnerDataElement.GROUP_ALL
                this.groups = this.groups && this.groups.length ? [UiKit.Kpi.ScComboboxInnerDataElement.GROUP_ALL].concat(_.uniq(this.groups)) : [];
                return this;
            };
            /**
             * Получаем groups
             * @returns {Array<string>}
             */
            ScComboboxInnerData.prototype.getGroups = function () {
                return this.groups;
            };
            /**
             * Получаем отфильтрованные значения
             * @param listElement
             * @returns {UiKit.Kpi.ScComboboxInnerDataElement[]}
             */
            ScComboboxInnerData.prototype.getFiltered = function (listElement) {
                return listElement.filter(function (d) { return d.getFiltered(); });
            };
            return ScComboboxInnerData;
        }());
        Kpi.ScComboboxInnerData = ScComboboxInnerData;
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/**
 * Created by dkovalev on 29.03.2017.
 */
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Функция, экранирующая спец символы в строке
         * @param searchQuery
         */
        Kpi.scComboboxFiltersScreening = function (searchQuery) {
            //Экранируем специальные символы
            return searchQuery
                ? searchQuery
                    .split('')
                    .reduce(function (acc, el) {
                    return el === '.'
                        || el === '('
                        || el === ')'
                        || el === '['
                        || el === ']'
                        || el === '^'
                        || el === '$'
                        || el === '|'
                        || el === '?'
                        || el === '+'
                        || el === '\\'
                        || el === '$'
                        || el === '*'
                        ? acc + ("\\" + el)
                        : acc + el;
                }, '')
                : '';
        };
        /**
         * class ScComboboxFilters
         */
        var ScComboboxFilters = (function () {
            function ScComboboxFilters() {
            }
            /**
             * Фильтруем входной массив данных Array<UiKit.Kpi.ScComboboxInnerDataElement>
             * @param innerData - входной набор данных Array<UiKit.Kpi.ScComboboxInnerDataElement>
             * @param inputValue - строка поиска
             * @param searchBy - ключи объекта, для фильтрации
             * @param $parse
             */
            ScComboboxFilters.scComboboxfilterInnerDataByKey = function (innerData, inputValue, searchBy, $parse) {
                //Приводим строку поиска к нормальному виду
                inputValue = inputValue ? ('' + inputValue).toLowerCase().trim() : '';
                /**
                 * Поиск в строке
                 * @param innerDataElement
                 * @param inputValue
                 */
                var searchInString = function (innerDataElement, inputValue) {
                    return !!~innerDataElement.getValue().toLowerCase().indexOf(inputValue)
                        ? innerDataElement.setFiltered(true)
                        : innerDataElement.setFiltered(false);
                };
                /**
                 * Поиск в объекте
                 * @param innerDataElement
                 * @param inputValue
                 * @param searchBy
                 */
                var searchInObject = function (innerDataElement, inputValue, searchBy) {
                    return searchBy(innerDataElement.getValue()).some(function (key) { return !!~key.toLowerCase().indexOf(inputValue); })
                        ? innerDataElement.setFiltered(true)
                        : innerDataElement.setFiltered(false);
                };
                return innerData.map(function (innerDataElement) {
                    return innerDataElement.getDataType() === 'string'
                        ? searchInString(innerDataElement, inputValue)
                        : searchInObject(innerDataElement, inputValue, searchBy);
                });
            };
            /**
             * Фильтруем список для пагинации
             * @param list
             * @param startIndex
             * @param endIndex
             * @returns {Array<UiKit.Kpi.ScComboboxInnerDataElement>|number|UiKit.Kpi.ScComboboxInnerDataElement[]}
             */
            ScComboboxFilters.scComboboxfilterListByPaginationIndex = function (list, startIndex, endIndex) {
                return list && list.length ? list.slice(startIndex, endIndex) : [];
            };
            /**
             * Получаем только отфильтрованные значения
             * @param list
             * @returns {Array<UiKit.Kpi.ScComboboxInnerDataElement>|number|[boolean,boolean,boolean,boolean,boolean]}
             */
            ScComboboxFilters.scComboboxOnlyFiltered = function (list) {
                return list && list.length ? list.filter(function (d) { return d.getFiltered(); }) : [];
            };
            return ScComboboxFilters;
        }());
        /**
         * Фильтр для маркировки найденных символов в строчке
         * @param input
         * @param extras
         * @returns {any}
         */
        ScComboboxFilters.scComboboxTextFilter = function (input, extras, $sce, minLength) {
            var MarkString = function (match) {
                return "<span class=\"sc-combobox-highlight\">" + match + "</span>";
            };
            //Если не введено нужно кол-во символов
            if (extras.length < minLength || extras.length === 0) {
                return $sce.trustAsHtml(input);
            }
            if (extras.length > 0) {
                extras = UiKit.Kpi.scComboboxFiltersScreening(extras);
                var extrasRegExp = new RegExp(extras, 'gi');
                var parsed = input.replace(extrasRegExp, MarkString);
                return $sce.trustAsHtml(parsed);
            }
        };
        Kpi.ScComboboxFilters = ScComboboxFilters;
        Kpi.KpiModule.getModule()
            .filter('scComboboxfilterInnerDataByKey', [function () { return ScComboboxFilters.scComboboxfilterInnerDataByKey; }])
            .filter('scComboboxfilterListByPaginationIndex', [function () { return ScComboboxFilters.scComboboxfilterListByPaginationIndex; }])
            .filter('scComboboxOnlyFiltered', [function () { return ScComboboxFilters.scComboboxOnlyFiltered; }])
            .filter('scComboboxTextFilter', [function () { return ScComboboxFilters.scComboboxTextFilter; }]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/**
 * Created by dkovalev on 03.04.2017.
 */
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * HandleKeys enum
         */
        var HandleKeys;
        (function (HandleKeys) {
            HandleKeys[HandleKeys["DOWN"] = 40] = "DOWN";
            HandleKeys[HandleKeys["UP"] = 38] = "UP";
            HandleKeys[HandleKeys["ENTER"] = 13] = "ENTER";
        })(HandleKeys = Kpi.HandleKeys || (Kpi.HandleKeys = {}));
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/**
 * @module Utils
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Класс ScComboboxTag
         */
        var ScComboboxTag = (function () {
            function ScComboboxTag(params) {
                this.title = ''; //Отображаемый текст тега
                this.setTitle(params.title)
                    .setData(params.data);
            }
            ScComboboxTag.prototype.setTitle = function (title) {
                this.title = title;
                return this;
            };
            ScComboboxTag.prototype.getTitle = function () {
                return this.title;
            };
            ScComboboxTag.prototype.setData = function (data) {
                this.data = data;
                return this;
            };
            ScComboboxTag.prototype.getData = function () {
                return this.data;
            };
            return ScComboboxTag;
        }());
        Kpi.ScComboboxTag = ScComboboxTag;
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="ScComboboxInnerData.ts" />
/// <reference path="ScComboboxFilters.ts" />
/// <reference path="ScComboboxKeyboard.ts" />
/// <reference path="ScComboboxTag.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * Компонент kpi-combobox поддерживает следующие
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        var EScComboboxState;
        (function (EScComboboxState) {
            EScComboboxState[EScComboboxState["LOADING"] = 'LOADING'] = "LOADING";
            EScComboboxState[EScComboboxState["LOADED"] = 'LOADED'] = "LOADED";
        })(EScComboboxState = Kpi.EScComboboxState || (Kpi.EScComboboxState = {}));
        var EScComboboxSourceType;
        (function (EScComboboxSourceType) {
            EScComboboxSourceType[EScComboboxSourceType["FUNCTION"] = 'FUNCTION'] = "FUNCTION";
            EScComboboxSourceType[EScComboboxSourceType["ARRAY"] = 'ARRAY'] = "ARRAY";
        })(EScComboboxSourceType = Kpi.EScComboboxSourceType || (Kpi.EScComboboxSourceType = {}));
        var EScComboboxMods;
        (function (EScComboboxMods) {
            EScComboboxMods[EScComboboxMods["ATTENTION"] = 'attention'] = "ATTENTION";
            EScComboboxMods[EScComboboxMods["WARNING"] = 'warning'] = "WARNING";
            EScComboboxMods[EScComboboxMods["DEFAULT"] = 'default'] = "DEFAULT";
        })(EScComboboxMods = Kpi.EScComboboxMods || (Kpi.EScComboboxMods = {}));
        /**
         * ScComboboxController
         */
        var ScComboboxController = (function () {
            function ScComboboxController($scope, $filter, $timeout, $parse, $sce, $q) {
                this.$scope = $scope;
                this.$filter = $filter;
                this.$timeout = $timeout;
                this.$parse = $parse;
                this.$sce = $sce;
                this.$q = $q;
                //Сообщение при отсутствие входные данных
                this.EMPTY_LIST = 'Поиск не дал результатов. Уточните введенные данные и повторите попытку.';
                //Сообщение при подгрузке данных
                this.PRELOADER_TITLE = 'Загружаем...';
                //Активная группа
                this.activeGroup = '';
                //Находимся ли мы сейчас в поле ввода
                this.searchInProgress = false;
                //Открыт/закрыт dropdown
                this.open = false;
                //Фокус в поле ввода
                this.focus = false;
                //Индекс активного элемента
                this.activeIndex = 0;
                //Храним таймаут для поиска
                this.searchDelayTimeout = null;
                //Моды
                this.EScComboboxMods = EScComboboxMods;
                this.EScComboboxState = EScComboboxState;
                this.EScComboboxSourceType = EScComboboxSourceType;
                //Совершен ли по тегу
                this.isClickTag = false;
                this.initDatas();
            }
            /**
             * Инициализируем данные для scCombobox
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.initDatas = function () {
                this.initScopeModel()
                    .initSourceType()
                    .initScopeTag()
                    .initScopeSearchDelay()
                    .initScopeValueFormatter()
                    .initScopePageSize()
                    .initScopeGroup()
                    .initActiveGroup()
                    .initScopePagination()
                    .initComboboxInnerData(this.$scope.source, this.$scope.valueFormatter)
                    .initScopeSearchBy()
                    .initScopeList()
                    .initScopeInputFormatter()
                    .initScopeMinLength()
                    .setInputValue('')
                    .initHandlePagination()
                    .setSelectedTags([])
                    .initMod()
                    .initSelectOne()
                    .setScopeState(EScComboboxState.LOADED);
                return this;
            };
            /**
             * Обновляем данные для scCombobox
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.updateDatas = function () {
                return this.initScopeModel()
                    .initScopeSearchDelay()
                    .initScopeValueFormatter()
                    .initActiveGroup()
                    .initScopePagination()
                    .updateComboboxInnerData(this.$scope.source, this.$scope.valueFormatter);
            };
            /**
             * Закрытие dropdown
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.close = function () {
                this.open = false;
                return this;
            };
            /**
             * Задаем list
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.initScopeList = function () {
                this.$scope.list = this.searchOn
                    ? this.filterInnerData(this.getInnerData().getList(this.activeGroup), this.inputValue)
                    : this.getInnerData().getList(this.activeGroup);
                return this;
            };
            /**
             * Задаем внутренний list
             * @param source
             * @param valueFormatter
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.initComboboxInnerData = function (source, valueFormatter) {
                var params = { group: this.$scope.group, pagesSize: this.$scope.pageSize };
                if (this.getSourceType() === EScComboboxSourceType.FUNCTION) {
                    this.innerData = new UiKit.Kpi.ScComboboxInnerData([], valueFormatter, params);
                }
                else {
                    this.innerData = new UiKit.Kpi.ScComboboxInnerData(source ? source : [], valueFormatter, params);
                }
                return this;
            };
            /**
             * Обнволяем внутренний list
             * @param source
             * @param valueFormatter
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.updateComboboxInnerData = function (source, valueFormatter) {
                var params = { group: this.$scope.group, pagesSize: this.$scope.pageSize };
                if (this.getSourceType() === EScComboboxSourceType.FUNCTION) {
                    return this.updateComboboxInnerDataPromise(source, valueFormatter, params);
                }
                else {
                    return this.updateComboboxInnerDateSimple(source, valueFormatter, params);
                }
            };
            /**
             * Обновляем innerData, если на вход в параметре source передается callback promise
             * @param source
             * @param valueFormatter
             * @param params
             * @returns {IPromise<UiKit.Kpi.ScComboboxController>}
             */
            ScComboboxController.prototype.updateComboboxInnerDataPromise = function (source, valueFormatter, params) {
                var _this = this;
                if (this.inputValue && this.inputValue.length >= this.$scope.minLength) {
                    var cb_1 = source(this.inputValue);
                    this.setLastPromiseCb(cb_1)
                        .setScopeState(EScComboboxState.LOADING);
                    return this.lastPromiseCb.then(function (sourceResponse) {
                        if (_this.getLastPromiseCb() === cb_1) {
                            _this.innerData = new UiKit.Kpi.ScComboboxInnerData(sourceResponse ? sourceResponse : [], valueFormatter, params);
                            _this.initScopeList()
                                .initHandlePagination()
                                .setSelectedTags([])
                                .initSelectOne()
                                .setScopeState(EScComboboxState.LOADED);
                            return _this;
                        }
                        return _this;
                    });
                }
                else {
                    var defer = this.$q.defer();
                    this.innerData = new UiKit.Kpi.ScComboboxInnerData([], valueFormatter, params);
                    defer.resolve(this);
                    this.initScopeList()
                        .initHandlePagination()
                        .setSelectedTags([])
                        .initSelectOne()
                        .setScopeState(EScComboboxState.LOADED);
                    return defer.promise;
                }
            };
            /**
             * Обновляем innerData, если на вход в параметре source передается статичный массив элементов
             * @param source
             * @param valueFormatter
             * @param params
             */
            ScComboboxController.prototype.updateComboboxInnerDateSimple = function (source, valueFormatter, params) {
                var defer = this.$q.defer();
                this.innerData = new UiKit.Kpi.ScComboboxInnerData(source ? source : [], valueFormatter, params);
                defer.resolve(this);
                return defer.promise;
            };
            /**
             * Получаем innerData
             * @returns {Array<UiKit.Kpi.ScComboboxInnerDataElement>}
             */
            ScComboboxController.prototype.getInnerData = function () {
                return this.innerData;
            };
            /**
             * Событие выбора элемента
             * @param data
             * @param $event
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.onSelectData = function (data) {
                if (!data)
                    return;
                var selectedData = angular.copy(data);
                this.$scope.multiselect ? this.selectMulti(selectedData) : this.selectOne(selectedData);
                return this;
            };
            /**
             * Выбор элемента, если включен multiselect
             * @param data
             */
            ScComboboxController.prototype.selectMulti = function (data) {
                var _this = this;
                data.getSelected() ? this.selectMultiToTrueOrFalse(data, false) : this.selectMultiToTrueOrFalse(data, true);
                //Возвращаем в модель выбранные данные
                this.$scope.model = angular.copy(this.getInnerData().getList(UiKit.Kpi.ScComboboxInnerDataElement.GROUP_ALL))
                    .filter(function (d) { return d.getSelected(); })
                    .map(function (d) { return d.getValue(); });
                //Заполняем текстовое поле отформатированными данными
                this.setSelectedTags(angular.copy(this.getInnerData().getList(UiKit.Kpi.ScComboboxInnerDataElement.GROUP_ALL))
                    .filter(function (d) { return d.getSelected(); })
                    .map(function (d) { return new UiKit.Kpi.ScComboboxTag({ title: _this.$scope.inputFormatter(d.getValue()), data: d }); }));
            };
            /**
             * Изменяем значение выбора элемента в модели
             * @param data
             * @param trueOrFalse
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.selectMultiToTrueOrFalse = function (data, trueOrFalse) {
                this.getInnerData()
                    .getList(UiKit.Kpi.ScComboboxInnerDataElement.GROUP_ALL)
                    .forEach(function (d) {
                    return d.getId() === data.getId()
                        ? d.setSelected(trueOrFalse)
                        : d;
                });
                this.$scope.group
                    && this.getInnerData().getList(data.getValue()[this.$scope.group])
                    && this.getInnerData()
                        .getList(data.getValue()[this.$scope.group])
                        .forEach(function (d) {
                        return d.getId() === data.getId()
                            ? d.setSelected(trueOrFalse)
                            : d;
                    });
                this.initScopeList();
                return this;
            };
            /**
             * Простой выбор элемента
             * @param data
             */
            ScComboboxController.prototype.selectOne = function (data) {
                this.$scope.model = angular.copy(data.getValue());
                this.setSelectedTags([new UiKit.Kpi.ScComboboxTag({ title: this.$scope.inputFormatter(angular.copy(this.$scope.model)), data: data })])
                    .setOpen(false)
                    .setSearchInProgress(false)
                    .setFocus(false);
            };
            /**
             * Выбираем один элемент, если изменилась модель извне
             * @param data
             */
            ScComboboxController.prototype.selectOneLoad = function (data) {
                this.setSelectedTags([new UiKit.Kpi.ScComboboxTag({ title: this.$scope.inputFormatter(angular.copy(data).getValue()), data: data })])
                    .setOpen(false)
                    .setSearchInProgress(false);
            };
            /**
             * Если изначально указана модель, то применяем ее к компоненту
             */
            ScComboboxController.prototype.initSelectOne = function () {
                this.$scope.multiselect ? this.initSelectOneMultiselect() : this.initSelectOneSimple();
                return this;
            };
            ;
            /**
             * Если изначально указана модель, то применяем ее к компоненту (для multiselect)
             */
            ScComboboxController.prototype.initSelectOneMultiselect = function () {
                //TODO доделать логику
                return this;
            };
            /**
             * Если изначально указана модель, то применяем ее к компоненту (для простого select)
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.initSelectOneSimple = function () {
                this.$scope.model
                    ? this.selectOneLoad(new UiKit.Kpi.ScComboboxInnerDataElement(angular.copy(this.$scope.model), this.$scope.valueFormatter))
                    : null;
                return this;
            };
            /**
             * Инициализируем model
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.initScopeModel = function () {
                this.$scope.multiselect ? this.initMultiselectScopeModel() : this.initSimpleselectScopeModel();
                return this;
            };
            /**
             * Инициализация model при multiselect
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.initMultiselectScopeModel = function () {
                this.$scope.model = this.$scope.model && this.$scope.model.length ? this.$scope.model : [];
                return this;
            };
            /**
             * Инициализация model при простом выпадающем списке
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.initSimpleselectScopeModel = function () {
                if (this.$scope.model) {
                    this.$scope.model = Array.isArray(this.$scope.model) ? null : this.$scope.model;
                }
                else {
                    this.$scope.model = null;
                }
                return this;
            };
            /**
             * Фильтруем innerData
             * @param list
             * @param inputValue - введенное значение в поле ввода
             * @returns {Array<UiKit.Kpi.ScComboboxInnerDataElement>}
             */
            ScComboboxController.prototype.filterInnerData = function (list, inputValue) {
                var index = 0;
                return this.angularFiltersData(list, this.$scope.searchBy, inputValue)
                    .map(function (data) { return data.getFiltered() ? data.setFilteredIndex(index++) : data.setFilteredIndex(null); });
            };
            /**
             * Инициализируем searchBy
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.initScopeSearchBy = function () {
                //Если на вход в source передается callback, то поиск по всем полям, которые есть в valueFormatter чтобы не скрывал лишнее
                if (this.getSourceType() === EScComboboxSourceType.FUNCTION) {
                    this.$scope.searchBy = this.$scope.valueFormatter;
                    this.setSearchOn(true);
                    return this;
                }
                if (this.$scope.searchBy && typeof this.$scope.searchBy === 'function') {
                    this.setSearchOn(true);
                }
                else {
                    this.$scope.searchBy = null;
                    this.setSearchOn(false);
                }
                return this;
            };
            /**
             * Инициализируем тип source
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.initSourceType = function () {
                if (typeof this.$scope.source === 'function') {
                    this.setTypeSource(EScComboboxSourceType.FUNCTION);
                }
                else {
                    this.setTypeSource(EScComboboxSourceType.ARRAY);
                }
                return this;
            };
            /**
             * Задаем тип source
             * @param type
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.setTypeSource = function (type) {
                this.sourceType = type;
                return this;
            };
            /**
             * Получаем тип source
             * @returns {any}
             */
            ScComboboxController.prototype.getSourceType = function () {
                return this.sourceType;
            };
            /**
             * InputFormatter по умолчанию
             * @returns {string}
             */
            ScComboboxController.prototype.defaultInputFormatter = function () {
                return function (param) { return param; };
            };
            /**
             * Инициализируем inputFormatter
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.initScopeInputFormatter = function () {
                this.$scope.inputFormatter = this.$scope.inputFormatter && typeof this.$scope.inputFormatter === 'function'
                    ? this.$scope.inputFormatter
                    : this.defaultInputFormatter();
                return this;
            };
            /**
             * ValueFormatter по умолчанию
             * @returns {string}
             */
            ScComboboxController.prototype.defaultValueFormatter = function () {
                return function (param) { return [param]; };
            };
            /**
             * Инициализируем inputFormatter
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.initScopeValueFormatter = function () {
                this.$scope.valueFormatter = this.$scope.valueFormatter && typeof this.$scope.valueFormatter === 'function'
                    ? this.$scope.valueFormatter
                    : this.defaultValueFormatter();
                return this;
            };
            /**
             * Применяем angular фильтры для innerData
             * @param list
             * @param searchBy
             * @param inputValue
             * @returns {Array<UiKit.Kpi.ScComboboxInnerDataElement>}
             */
            ScComboboxController.prototype.angularFiltersData = function (list, searchBy, inputValue) {
                list = inputValue && this.inputValue.length >= this.$scope.minLength
                    ? this.$filter('scComboboxfilterInnerDataByKey')(list, inputValue, searchBy, this.$parse)
                    : this.getInnerData()
                        .getList(this.activeGroup)
                        .map(function (d) { return d.setFiltered(true); });
                return list;
            };
            /**
             * Инициализируем inputValue
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.setInputValue = function (param) {
                this.inputValue = param;
                return this;
            };
            /**
             * Иницицлизируем minLength
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.initScopeMinLength = function () {
                this.$scope.minLength = angular.isDefined(this.$scope.minLength)
                    ? this.$scope.minLength
                    : ScComboboxController.MIN_LENGTH;
                return this;
            };
            /**
             * Очистка поля, модели, выбранных элементов, отфильтрованных элементов
             */
            ScComboboxController.prototype.clear = function () {
                this.setScopeModel(this.$scope.multiselect ? [] : null)
                    .setActiveIndex(0)
                    .initComboboxInnerData(this.$scope.source, this.$scope.valueFormatter)
                    .setInputValue('')
                    .initScopeList()
                    .initHandlePagination()
                    .setSelectedTags([]);
                return this;
            };
            /**
             * Инициализируем group
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.initScopeGroup = function () {
                this.$scope.group = angular.isDefined(this.$scope.group) ? this.$scope.group : '';
                return this;
            };
            /**
             * Переключаемся между группами
             * @param group
             */
            ScComboboxController.prototype.onClickGroup = function (group) {
                this.activeGroup = group;
                this.initScopeList()
                    .initHandlePagination()
                    .setActiveIndex(0);
            };
            /**
             * Инициализируем activeGroup
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.initActiveGroup = function () {
                this.activeGroup = UiKit.Kpi.ScComboboxInnerDataElement.GROUP_ALL;
                return this;
            };
            /**
             * Проверяем, принадлежит ли группа в данных активной группе
             * @param data
             * @param activeGroup
             * @returns {UiKit.Kpi.ScComboboxInnerDataElement|any|string}
             */
            ScComboboxController.prototype.isDataActiveGroup = function (data, activeGroup) {
                return this.$scope.group
                    ? data && data.getValue() && data.getGroup() && data.getValue()[data.getGroup()] === activeGroup
                    : true;
            };
            /**
             * Инициализируем пагинацию
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.initScopePagination = function () {
                this.$scope.paginator = angular.isDefined(this.$scope.paginator)
                    ? this.$scope.paginator
                    : null;
                return this;
            };
            /**
             * Инициализируем handle pagination
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.initHandlePagination = function () {
                if (!this.$scope.paginator)
                    return this;
                this.setNewHandlePagination();
                return this;
            };
            /**
             * Создаем новый handle для пагинации
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.setNewHandlePagination = function () {
                this.handlePagination = new UiKit.Kpi.ScPaginationHandle(this.getInnerData().getList(this.activeGroup).filter(function (d) { return d.getFiltered(); }).length, false, this.$scope.pageSize);
                return this;
            };
            /**
             * Задаем selectedElements
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.setSelectedTags = function (param) {
                this.selectedTags = param || [];
                return this;
            };
            /**
             * Получаем selectedTags
             * @returns {string}
             */
            ScComboboxController.prototype.getselectedTags = function () {
                return this.selectedTags;
            };
            /**
             * Задаем количество элементов на странице
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.initScopePageSize = function () {
                this.$scope.pageSize = this.$scope.pageSize
                    ? this.$scope.pageSize
                    : ScComboboxController.PAGE_SIZE;
                return this;
            };
            /**
             * Проверяем наличие пагинации
             * @returns {boolean}
             */
            ScComboboxController.prototype.isPagination = function () {
                return this.$scope.paginator && this.$scope.list.length > this.$scope.pageSize;
            };
            /**
             * Задаем focus
             * @param focus
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.setFocus = function (focus) {
                this.focus = focus;
                return this;
            };
            /**
             * Получаем focus
             * @returns {boolean}
             */
            ScComboboxController.prototype.getFocus = function () {
                return this.focus;
            };
            /**
             * Задаем open
             * @param open
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.setOpen = function (open) {
                this.open = open;
                return this;
            };
            /**
             * Получаем open
             * @returns {boolean}
             */
            ScComboboxController.prototype.getOpen = function () {
                return this.open;
            };
            /**
             *
             * @param searchInProgress
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.setSearchInProgress = function (searchInProgress) {
                this.searchInProgress = searchInProgress;
                return this;
            };
            /**
             * Получаем searchInProgress
             * @returns {boolean}
             */
            ScComboboxController.prototype.getSearchInProgress = function () {
                return this.searchInProgress;
            };
            /**
             * Задаем model
             * @param model
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.setScopeModel = function (model) {
                this.$scope.model = model;
                return this;
            };
            /**
             * Получаем отфильтрованные значения
             * @param data
             * @returns {Array}
             */
            ScComboboxController.prototype.getFilteredData = function (data) {
                return data.reduce(function (acc, d) { return d.getFiltered() ? acc.concat(angular.copy(d)) : acc; }, []);
            };
            /**
             * Задаем activeIndex
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.setActiveIndex = function (activeIndex) {
                this.activeIndex = activeIndex;
                return this;
            };
            /**
             * Получаем activeIndex
             * @returns {number}
             */
            ScComboboxController.prototype.getActiveIndex = function () {
                return this.activeIndex;
            };
            /**
             * Инициализируем searchDelay
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.initScopeSearchDelay = function () {
                this.$scope.searchDelay = this.$scope.searchDelay
                    ? this.$scope.searchDelay
                    : ScComboboxController.SEARCH_DELAY;
                return this;
            };
            /**
             * Проверяем наличие отфильтрованных элементов в list
             * @returns {boolean}
             */
            ScComboboxController.prototype.checkIsFilteredListLength = function () {
                return !!this.$scope.list.filter(function (d) { return d.getFiltered(); }).length;
            };
            /**
             * Проверяем наличие элементов в list
             * @returns {boolean}
             */
            ScComboboxController.prototype.checkIsListLength = function () {
                return !!this.$scope.list.filter(function (d) { return d.getValue(); }).length;
            };
            /**
             * Инициализируем мод
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.initMod = function () {
                this.$scope.mod = this.$scope.mod ? this.$scope.mod : EScComboboxMods.DEFAULT;
                return this;
            };
            /**
             * Закрываем выпадающий список
             * @returns {ScComboboxController}
             */
            ScComboboxController.prototype.closeDropDown = function () {
                //Закрываем выпадающий списк исходя из включенного/отключенного текстового поиска
                if (this.searchOn) {
                    return this.selectedTags && this.selectedTags.length || this.inputValue
                        ? this.setOpen(false).setSearchInProgress(false).setFocus(false)
                        : this.setOpen(false).setSearchInProgress(true).setFocus(false);
                }
                else {
                    return this.setOpen(false).setSearchInProgress(false).setFocus(false);
                }
            };
            /**
             * Задаем searchOn
             * @param searchOn
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.setSearchOn = function (searchOn) {
                this.searchOn = searchOn;
                return this;
            };
            /**
             * Получаем searchOn
             * @returns {any}
             */
            ScComboboxController.prototype.getSearchOn = function () {
                return this.searchOn;
            };
            /**
             * Callback при удалении одного из элементов тега
             * @param data
             */
            ScComboboxController.prototype.onDeleteTag = function (data) {
                var _this = this;
                this.setIsClickTag(true)
                    .selectMultiToTrueOrFalse(data.getData(), false);
                this.$scope.model = angular.copy(this.getInnerData().getList(UiKit.Kpi.ScComboboxInnerDataElement.GROUP_ALL))
                    .filter(function (d) { return d.getSelected(); })
                    .map(function (d) { return d.getValue(); });
                //Заполняем текстовое поле отформатированными данными
                this.setSelectedTags(angular.copy(this.getInnerData().getList(UiKit.Kpi.ScComboboxInnerDataElement.GROUP_ALL))
                    .filter(function (d) { return d.getSelected(); })
                    .map(function (d) { return new UiKit.Kpi.ScComboboxTag({ title: _this.$scope.inputFormatter(d.getValue()), data: d }); }));
            };
            /**
             * Задаем переменную, сигнализирующую о событии клика по тегу
             * @param isClickTag
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.setIsClickTag = function (isClickTag) {
                this.isClickTag = isClickTag;
                return this;
            };
            /**
             * Получаем переменную, сигнализирующую о событии клика по тегу
             * @returns {boolean}
             */
            ScComboboxController.prototype.getIsClickTag = function () {
                return this.isClickTag;
            };
            /**
             * Инициализация состояния компонента
             * @param state
             * @returns {UiKit.Kpi.ScComboboxController}
             */
            ScComboboxController.prototype.setScopeState = function (state) {
                this.$scope.state = state;
                return this;
            };
            /**
             * Инициализируем теги
             */
            ScComboboxController.prototype.initScopeTag = function () {
                //По требованиям к копмоненту оставил для multiselect теги как обязательный параметр, а для простого ввода тегов не должно быть
                this.$scope.tag = this.$scope.multiselect;
                return this;
            };
            /**
             * Задаем последний актуальный запрос
             */
            ScComboboxController.prototype.setLastPromiseCb = function (lastPromiseCb) {
                this.lastPromiseCb = lastPromiseCb;
                return this;
            };
            /**
             * Получаем последний актуальный запрос
             * @returns {(lastPromiseCb:any)=>ScComboboxController}
             */
            ScComboboxController.prototype.getLastPromiseCb = function () {
                return this.lastPromiseCb;
            };
            return ScComboboxController;
        }());
        //Константа количества минимального набора символов, чтобы начать поиск (берется по умолчанию, если не задано)
        ScComboboxController.MIN_LENGTH = 0;
        //Константа задержки перед поиском (берется по умолчанию, если не задано)
        ScComboboxController.SEARCH_DELAY = 300;
        //Константа количества элементов на странице (берется по умолчанию, если не задано)
        ScComboboxController.PAGE_SIZE = 5;
        ScComboboxController.$inject = [
            '$scope',
            '$filter',
            '$timeout',
            '$parse',
            '$sce',
            '$q'
        ];
        Kpi.ScComboboxController = ScComboboxController;
        Kpi.KpiModule.getModule().controller('ScComboboxController', UiKit.Kpi.ScComboboxController);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    var Utils;
    (function (Utils) {
        var BaseHandle = (function () {
            function BaseHandle() {
                this.watchers = [];
            }
            BaseHandle.prototype.watch = function (event, cb) {
                var _this = this;
                this.watchers.push({
                    event: event,
                    cb: cb
                });
                return function () {
                    _this.unwatch(event, cb);
                };
            };
            BaseHandle.prototype.emit = function (event, info) {
                if (info === void 0) { info = null; }
                var promises = [];
                this.watchers.forEach(function (watcher) {
                    if (watcher.event === event) {
                        var p = watcher.cb(event, info);
                        if (p) {
                            promises.push(p);
                        }
                    }
                });
                return promises;
            };
            BaseHandle.prototype.unwatchAll = function () {
                this.watchers.length = 0;
            };
            BaseHandle.prototype.unwatch = function (event, cb) {
                var index = -1;
                this.watchers.forEach(function (w, i) {
                    if (w.event == event && w.cb.toString() == cb.toString()) {
                        index = i;
                    }
                });
                if (index != -1) {
                    this.watchers.splice(index, 1);
                }
            };
            return BaseHandle;
        }());
        Utils.BaseHandle = BaseHandle;
    })(Utils = UiKit.Utils || (UiKit.Utils = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../../utils/BaseHandle.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module UI
     */
    var Kpi;
    (function (Kpi) {
        /**
         * @module ViewModel
         */
        var ScPaginationHandleEvent;
        (function (ScPaginationHandleEvent) {
            ScPaginationHandleEvent[ScPaginationHandleEvent["CHANGE_PAGE"] = 0] = "CHANGE_PAGE";
            ScPaginationHandleEvent[ScPaginationHandleEvent["RESET"] = 1] = "RESET";
        })(ScPaginationHandleEvent = Kpi.ScPaginationHandleEvent || (Kpi.ScPaginationHandleEvent = {}));
        /**
         * Класс для работы с постраничным просмотром
         *
         * @class Pagination
         */
        var ScPaginationHandle = (function (_super) {
            __extends(ScPaginationHandle, _super);
            function ScPaginationHandle(totalItems, pageInput, // ввод в текстовое поле
                perPage) {
                if (pageInput === void 0) { pageInput = false; }
                if (perPage === void 0) { perPage = ScPaginationHandle.PER_PAGE_DEFAULT; }
                var _this = _super.call(this) || this;
                _this.totalItems = totalItems;
                _this.pageInput = pageInput;
                _this.perPage = perPage;
                _this.totalPages = 0;
                _this.startItemIndex = 0;
                _this.endItemIndex = 0;
                _this.currentPageIndex = 0;
                _this.remainingItems = 0;
                _this.autoHide = false;
                _this.reset();
                return _this;
            }
            /**
             * Инициализация пагинации
             *
             * @return {App.ViewModel.Pagination}
             */
            ScPaginationHandle.prototype.reset = function () {
                if (!this.perPage) {
                    this.perPage = ScPaginationHandle.PER_PAGE_DEFAULT;
                }
                this.totalPages = Math.ceil(this.totalItems / this.perPage);
                if (this.totalPages > 0 && this.currentPageIndex > this.totalPages - 1) {
                    this.currentPageIndex = this.totalPages - 1;
                }
                this.initializeValues();
                this.currentPageIndex = 0;
                this.emit(ScPaginationHandleEvent.RESET, this);
                return this;
            };
            /**
             * Доступность поля ввода страницы
             *
             * @return {boolean}
             */
            ScPaginationHandle.prototype.isPageInput = function () {
                return this.pageInput;
            };
            /**
             * Флаг, отвечающий за "скрывание" компонента, если страниц нет
             *
             * @return {boolean}
             */
            ScPaginationHandle.prototype.setAutoHide = function (val) {
                this.autoHide = val;
            };
            /**
             * Инициализация значений
             *
             * @return {App.ViewModel.Pagination}
             */
            ScPaginationHandle.prototype.initializeValues = function () {
                this.startItemIndex = this.perPage * this.currentPageIndex;
                this.endItemIndex = (this.startItemIndex + this.perPage) > this.totalItems ? this.totalItems : this.startItemIndex + this.perPage;
                this.remainingItems = this.totalItems - this.endItemIndex;
                return this;
            };
            /**
             * Получение количества элементов на странице
             *
             * @return {number}
             */
            ScPaginationHandle.prototype.getPerPage = function () {
                return this.perPage;
            };
            /**
             * Установка количества элементов на странице
             *
             * @param {number} value
             * @return {App.ViewModel.Pagination}
             */
            ScPaginationHandle.prototype.setPerPage = function (value) {
                this.perPage = value;
                return this.reset();
            };
            /**
             * Получение количества страниц
             *
             * @return {number}
             */
            ScPaginationHandle.prototype.getTotalPages = function () {
                return this.totalPages;
            };
            /**
             * Получение количества элементов
             *
             * @return {number}
             */
            ScPaginationHandle.prototype.getTotalItems = function () {
                return this.totalItems;
            };
            /**
             * Установка количества элементов
             *
             * @return {Pagination}
             */
            ScPaginationHandle.prototype.setTotalItems = function (totalItems) {
                this.totalItems = totalItems || 0;
                return this.reset();
            };
            /**
             * Получение индекса текущей страницы
             *
             * @return {number}
             */
            ScPaginationHandle.prototype.getCurrentPageIndex = function () {
                return this.currentPageIndex;
            };
            /**
             * Проверка текущей страницы
             *
             * @param {number} index
             * @return {boolean}
             */
            ScPaginationHandle.prototype.isCurrentPageIndex = function (index) {
                return index === this.currentPageIndex;
            };
            /**
             * Получение номера текущей страницы
             *
             * @return {number}
             */
            ScPaginationHandle.prototype.getCurrentPage = function () {
                return this.currentPageIndex + 1;
            };
            /**
             * Получение индекса элемента, с которого начинается страница
             *
             * @return {number}
             */
            ScPaginationHandle.prototype.getStartItemIndex = function () {
                return this.startItemIndex;
            };
            /**
             * Получение индекса последнего элемента текущей страницы
             *
             * @return {number}
             */
            ScPaginationHandle.prototype.getEndItemIndex = function () {
                return this.endItemIndex;
            };
            /**
             * Получение количества непросмотренных элементов
             *
             * @return {number}
             */
            ScPaginationHandle.prototype.getRemainingItems = function () {
                return this.remainingItems;
            };
            /**
             * Проверка возможности перехода на следующую страницу
             *
             * @return {boolean}
             */
            ScPaginationHandle.prototype.hasNextPage = function () {
                return this.currentPageIndex + 1 < this.totalPages;
            };
            /**
             * Проверка возможности перехода на предыдущую страницу
             *
             * @return {boolean}
             */
            ScPaginationHandle.prototype.hasPrevPage = function () {
                return this.currentPageIndex > 0;
            };
            /**
             * Переход на следующую страницу
             *
             * @return {App.ViewModel.Pagination}
             */
            ScPaginationHandle.prototype.nextPage = function () {
                return this.setPageByIndex(this.currentPageIndex + 1);
            };
            /**
             * Переход на предыдущую страницу
             *
             * @return {App.ViewModel.Pagination}
             */
            ScPaginationHandle.prototype.prevPage = function () {
                return this.setPageByIndex(this.currentPageIndex - 1);
            };
            /**
             * Переход на первую страницу
             *
             * @return {App.ViewModel.Pagination}
             */
            ScPaginationHandle.prototype.firstPage = function () {
                return this.setPageByIndex(0);
            };
            /**
             * Переход на последнюю страницу
             *
             * @return {App.ViewModel.Pagination}
             */
            ScPaginationHandle.prototype.lastPage = function () {
                return this.setPageByIndex(this.totalPages - 1);
            };
            /**
             * Переход на страницу по индексу
             *
             * @param {number} index
             * @return {App.ViewModel.Pagination}
             */
            ScPaginationHandle.prototype.setPageByIndex = function (index) {
                if (index >= 0 && index < this.totalPages) {
                    this.currentPageIndex = index;
                    this.initializeValues();
                    this.emit(ScPaginationHandleEvent.CHANGE_PAGE, this);
                }
                return this;
            };
            return ScPaginationHandle;
        }(UiKit.Utils.BaseHandle));
        ScPaginationHandle.PER_PAGE_DEFAULT = 20;
        Kpi.ScPaginationHandle = ScPaginationHandle;
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="ScPaginationHandle.ts" />
/// <reference path="ScPaginationDirective.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module UI
     */
    var Kpi;
    (function (Kpi) {
        /**
         * ScPagination
         */
        var KpiPagination;
        (function (KpiPagination) {
            /**
             * Контроллер директивы панели пагинации
             *
             * @class ScPaginationController
             */
            var ScPaginationController = (function () {
                function ScPaginationController($scope) {
                    var _this = this;
                    this.$scope = $scope;
                    this.currentPage = 0;
                    if (this.$scope.handle.isPageInput()) {
                        this.$scope.$watch('handle.currentPageIndex', function (currentPageIndex) { return (_this.currentPage != (currentPageIndex + 1)) && (_this.currentPage = currentPageIndex + 1); });
                        this.$scope.$watch('controller.currentPage', function (currentPage) {
                            if (currentPage && currentPage < _this.$scope.handle.getTotalPages())
                                (currentPage != _this.$scope.handle.getCurrentPage()) && _this.$scope.handle.setPageByIndex(currentPage - 1);
                        });
                    }
                    /*this.$scope.handle.watch(ScPaginationHandleEvent.RESET,(info:UiKit.Kpi.ScPaginationHandle)=> {
                        this.currentPage = info.getCurrentPage();
                    })*/
                }
                return ScPaginationController;
            }());
            ScPaginationController.$inject = [
                '$scope'
            ];
            KpiPagination.ScPaginationController = ScPaginationController;
            Kpi.KpiModule.getModule().controller('ScPaginationController', ScPaginationController);
        })(KpiPagination = Kpi.KpiPagination || (Kpi.KpiPagination = {}));
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="ScPaginationController.ts" />
/// <reference path="ScPaginationHandle.ts" />
/// <reference path="../KpiModule.ts" />
/**
 * @module Core
 */
var UiKit;
(function (UiKit) {
    /**
     * @module UI
     */
    var Kpi;
    (function (Kpi) {
        var KpiPagination;
        (function (KpiPagination) {
            /**
             * Директива панели пагинации
             *
             * @class ScPaginationDirective
             * @directive sc-pagination
             */
            function ScPaginationDirective() {
                return {
                    restrict: 'EA',
                    templateUrl: Kpi.KpiModule.contentURL() + '/sc-pagination/sc-pagination.html',
                    scope: {
                        handle: '='
                    },
                    controller: 'ScPaginationController as controller'
                };
            }
            KpiPagination.ScPaginationDirective = ScPaginationDirective;
            Kpi.KpiModule.getModule().directive('scPagination', [ScPaginationDirective]);
        })(KpiPagination = Kpi.KpiPagination || (Kpi.KpiPagination = {}));
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        'use strict';
        /**
         * Директива уведомления об ожидании
         * @class ScPreloaderDirective
         * @directive preloader
         */
        function ScPreloaderDirective() {
            return {
                replace: true,
                restrict: 'EA',
                templateUrl: Kpi.KpiModule.contentURL() + '/sc-preloader/sc-preloader.html',
                scope: {
                    condition: '=?',
                    text: '=?'
                }
            };
        }
        Kpi.ScPreloaderDirective = ScPreloaderDirective;
        Kpi.KpiModule.getModule().directive('scPreloader', [UiKit.Kpi.ScPreloaderDirective]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/// <reference path="ScComboboxController.ts" />
/// <reference path="../sc-panel-tag/ScPanelTagDirective.ts" />
/// <reference path="../sc-pagination/ScPaginationDirective.ts" />
/// <reference path="../sc-preloader/ScPreloaderDirective.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * ScComboboxDirective
         */
        function ScComboboxDirective($timeout, $document) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: Kpi.KpiModule.contentURL() + '/sc-combobox/sc-combobox.html',
                transclude: true,
                scope: {
                    model: '=?ngModel',
                    source: '=?',
                    valueFormatter: '=?',
                    inputFormatter: '=?',
                    searchBy: '=?',
                    multiselect: '=?',
                    minLength: '=?',
                    group: '=?',
                    paginator: '=?',
                    searchDelay: '=?',
                    pageSize: '=?',
                    disabled: '=?ngDisabled',
                    placeholder: '=?',
                    mod: '=?',
                    onChange: '&?',
                    onSelect: '&?',
                    onClear: '&?'
                },
                controller: 'ScComboboxController as controller',
                link: function (scope, element, attrs, controller) {
                    /**
                     * Задаем размеры контейнеру элементов в выпадающем списке
                     */
                    var initPageHeight = function () {
                        if (scope.paginator)
                            return $timeout(function () { });
                        return $timeout(function () {
                            var li = element.find('[data-sc-combobox-item]')[0], ul = element.find('[data-sc-combobox-list]')[0];
                            li && ul && ul.style.setProperty('max-height', li.clientHeight * scope.pageSize + 'px', 'important');
                        });
                    };
                    /**
                     * Watcher на обновление source
                     * При обновлении входных данных (массива всех значений), вызываем update компонента
                     */
                    var datasWatcher = scope.$watchCollection('source', function () {
                        controller.updateDatas();
                    });
                    /**
                     * Watcher на изменение model
                     * @type {any|Function}
                     */
                    var modalWatcher = scope.$watch('model', function (newValue, oldValue) {
                        //Обновляем combobox, если очищена модель
                        scope.multiselect
                            ? updateMultiselectCombobox(newValue, oldValue)
                            : updateCombobox(newValue, oldValue);
                        //Вызываем callback onChange, если он указан в атрибуте компонента
                        scope.onChange && typeof scope.onChange === 'function' && scope.onChange();
                    });
                    /**
                     * Обновляем комбобокс, если указан атрибут multiselect
                     * @param newValue
                     * @param oldValue
                     */
                    var updateMultiselectCombobox = function (newValue, oldValue) {
                        if (!newValue && !oldValue || (newValue && !newValue.length && oldValue && !oldValue.length))
                            return;
                        if (!newValue.length && newValue != oldValue) {
                            controller.updateDatas();
                        }
                    };
                    /**
                     * Обновляем комбобокс, если НЕ указан атрибут multiselect
                     * @param newValue
                     * @param oldValue
                     */
                    var updateCombobox = function (newValue, oldValue) {
                        if (!newValue && !oldValue)
                            return;
                        //При обновлении компонента, если приходит пустая модель
                        if (!newValue && !_.isEqual(newValue, oldValue)) {
                            controller.updateDatas();
                        }
                        //При задании модели изначально при инициализации компонента, чтобы подцепить выбранное значение
                        if (newValue && !_.isEqual(newValue, oldValue)) {
                            controller.selectOneLoad(new UiKit.Kpi.ScComboboxInnerDataElement(newValue, scope.valueFormatter));
                        }
                    };
                    /**
                     * Задаем focus
                     */
                    scope.focus = function () {
                        controller.getSearchOn() && controller.setFocus(true).setSearchInProgress(true);
                        $timeout(function () { return element.find('[data-sc-combobox-input]').focus(); }, 100);
                    };
                    /**
                     * Динамически расщитываем ширину поля ввода
                     * для корреткного отображения с тегами
                     */
                    //  TODO: доделать ресайз
                    scope.updateField = function () {
                        $timeout(function () {
                            var tags = element.find('.sc-tag');
                            var textField = element.find('[data-sc-combobox-field]')[0];
                            if (tags.length) {
                                var lastTag = tags[tags.length - 1];
                                textField.style.left = lastTag.offsetLeft + lastTag.offsetWidth + "px";
                                textField.style.top = lastTag.offsetTop - 8 + "px";
                                textField.style.position = 'absolute';
                                if (textField.offsetWidth < 100) {
                                    textField.style.left = "0px";
                                    textField.style.top = lastTag.offsetTop + lastTag.offsetHeight + "px";
                                    textField.style.position = 'static';
                                }
                            }
                            else {
                                textField.style.position = 'absolute';
                                textField.style.left = "0px";
                                textField.style.top = "0px";
                            }
                        });
                    };
                    /**
                     * Активируем combobox)
                     */
                    scope.activate = function () {
                        if (scope.disabled)
                            return;
                        //Если не мультиселект, то в поле ввода выводим значение выбранного элемента
                        if (!scope.multiselect && controller.selectedTags && controller.selectedTags.length) {
                            controller.setInputValue('')
                                .setActiveIndex(0)
                                .initScopeList()
                                .initHandlePagination()
                                .setInputValue(controller.selectedTags[0].getTitle());
                        }
                        $timeout(function () {
                            controller.setOpen(true);
                            scope.focus();
                            initPageHeight();
                        });
                    };
                    /**
                     * Выбор значения
                     * @param data
                     * @param $event
                     */
                    scope.onSelectData = function (data, $event) {
                        if (scope.disabled)
                            return;
                        $event.preventDefault();
                        controller.onSelectData(data).setSearchInProgress(false);
                        scope.onSelect && typeof scope.onSelect === 'function' && scope.onSelect();
                        scope.multiselect && scope.focus();
                        scope.updateField();
                    };
                    /**
                     * Событие клика по тегу
                     * @param data
                     */
                    scope.onDeleteTag = function (data) {
                        controller.onDeleteTag(data);
                        scope.multiselect && scope.focus();
                        scope.updateField();
                    };
                    /**
                     * Событие поиска элемента
                     * @param $event
                     */
                    scope.onSearch = function ($event) {
                        !controller.getOpen() && controller.setOpen(true);
                        initPageHeight().then(function () { return handleDropDown($event); });
                    };
                    /**
                     * Скролим до элемента в списке по тегу
                     */
                    scope.scrollToElementByTag = function (tagElemeng) {
                        var index = tagElemeng.getData().getFilteredIndex() || tagElemeng.getData().getIndex();
                        scope.scrollToElementByIndex(index);
                    };
                    /**
                     * Переход к элементу при нажатии на тег, если присутствуте пагинация
                     * @param tagElemeng
                     */
                    scope.scrollToElementByTagForPaginator = function (tagElemeng) {
                        var index = tagElemeng.getData().getFilteredIndex() || tagElemeng.getData().getIndex();
                        controller.handlePagination.setPageByIndex(Math.ceil((index + 1) / scope.pageSize) - 1);
                        scope.scrollToElementByIndex(index);
                    };
                    /**
                     * Скролл до элемента
                     * @param index
                     */
                    scope.scrollToElementByIndex = function (index) {
                        !controller.getOpen() && controller.setOpen(true);
                        $timeout(function () {
                            var lis = element.find('[data-sc-combobox-item]'), liHeight = lis.first().height(), ul = element.find('[data-sc-combobox-list]')[0], $ul = $(ul);
                            $ul.scrollTop(liHeight * index);
                        }, 100);
                    };
                    /**
                     * Переходим к элементу при нажатию на тег
                     * @param tagElemeng
                     */
                    scope.goToElementByTag = function (tagElemeng) {
                        scope.paginator
                            ? scope.scrollToElementByTagForPaginator(tagElemeng)
                            : scope.scrollToElementByTag(tagElemeng);
                    };
                    /**
                     * Очистка значений
                     */
                    scope.clear = function ($event) {
                        if (scope.disabled)
                            return;
                        $event.stopPropagation();
                        //Если есть callback на очистку модели, то сначала дергаем его, затем либо чистим модель,
                        //если пришел resolve, либо ничего не делаем, если пришел reject
                        if (scope.onClear && typeof scope.onClear === 'function') {
                            scope.disabled = true;
                            scope.onClear()
                                .then(function () {
                                scope.disabled = false;
                                controller.clear().setSearchInProgress(false);
                                scope.focus();
                            })["catch"](function () {
                                scope.disabled = false;
                                console.info('Отмена очистки модели.');
                            });
                        }
                        else {
                            controller.clear().setSearchInProgress(false);
                            scope.focus();
                        }
                        scope.updateField();
                    };
                    /**
                     * Событие клика по кнопке выпадающего списка
                     */
                    scope.toggleActivate = function () {
                        //Если событе клика по тегу, то не выходим
                        if (scope.tag && controller.getIsClickTag()) {
                            controller.setFocus(false);
                            return;
                        }
                        if (scope.disabled)
                            return;
                        controller.getOpen()
                            ? controller.closeDropDown()
                            : scope.activate();
                    };
                    /**
                     * Callback при нажатии клавиши
                     * @param $event
                     * @returns {UiKit.Kpi.ScComboboxController}
                     */
                    var handleDropDown = function ($event) {
                        var key = $event.which, currentIndex = controller.getActiveIndex(), prevIndex = currentIndex - 1, nextIndex = currentIndex + 1, filteredLength = controller.getFilteredData(scope.list).length;
                        switch (key) {
                            case UiKit.Kpi.HandleKeys.DOWN:
                                nextIndex + 1 <= filteredLength && controller.setActiveIndex(nextIndex);
                                scope.paginator
                                    ? updatePaginationPage(UiKit.Kpi.HandleKeys.DOWN)
                                    : updateDropDownScroll(UiKit.Kpi.HandleKeys.DOWN);
                                break;
                            case UiKit.Kpi.HandleKeys.UP:
                                prevIndex >= 0 && controller.setActiveIndex(prevIndex);
                                scope.paginator
                                    ? updatePaginationPage(UiKit.Kpi.HandleKeys.UP)
                                    : updateDropDownScroll(UiKit.Kpi.HandleKeys.UP);
                                break;
                            case UiKit.Kpi.HandleKeys.ENTER:
                                controller.onSelectData(controller.getFilteredData(scope.list)[controller.getActiveIndex()], $event);
                                break;
                            default:
                                controller.searchDelayTimeout && $timeout.cancel(controller.searchDelayTimeout);
                                //Если в качестве source передан промис
                                if (typeof scope.source === 'function') {
                                    controller.searchDelayTimeout = $timeout(function () {
                                        scope.state = Kpi.EScComboboxState.LOADING;
                                        controller.updateDatas()
                                            .then(function () {
                                            controller.setActiveIndex(0).initScopeList().initHandlePagination();
                                        })["finally"](function () {
                                            scope.state = Kpi.EScComboboxState.LOADED;
                                        });
                                    }, scope.searchDelay);
                                }
                                else {
                                    controller.searchDelayTimeout = $timeout(function () { return controller.setActiveIndex(0).initScopeList().initHandlePagination(); }, scope.searchDelay);
                                }
                                break;
                        }
                    };
                    /**
                     * Обновляем скролл
                     * @param key
                     */
                    var updateDropDownScroll = function (key) {
                        var currentIndex = controller.getActiveIndex(), nextIndex = currentIndex + 1, filteredLength = controller.getFilteredData(scope.list).length;
                        //Dom elements
                        var lis = element.find('[data-sc-combobox-item]'), li = lis[currentIndex], ul = element.find('[data-sc-combobox-list]')[0], liHeight = lis.first().height(), ulOffsetTop = ul.offsetTop, $ul = $(ul), currentLiTop = li.offsetTop - ulOffsetTop;
                        switch (key) {
                            case UiKit.Kpi.HandleKeys.DOWN:
                                if (currentIndex === 0) {
                                    $ul.scrollTop(0);
                                }
                                else if (li.offsetTop + liHeight > ul.scrollTop + ul.clientHeight) {
                                    $ul.scrollTop(liHeight * nextIndex - liHeight * scope.pageSize);
                                }
                                break;
                            case UiKit.Kpi.HandleKeys.UP:
                                if (currentIndex === filteredLength - 1) {
                                    $ul.scrollTop(liHeight * (nextIndex));
                                }
                                else if (currentLiTop < ul.scrollTop || currentLiTop > ul.scrollTop + ul.clientHeight) {
                                    $ul.scrollTop(liHeight * currentIndex);
                                }
                                break;
                            default:
                                break;
                        }
                    };
                    /**
                     * Обновляем pagination
                     * @param key
                     */
                    var updatePaginationPage = function (key) {
                        var currentIndex = controller.getActiveIndex(), pageActiveIndex = Math.floor(currentIndex / controller.handlePagination.getPerPage()) + 1;
                        switch (key) {
                            case UiKit.Kpi.HandleKeys.DOWN:
                                if (pageActiveIndex > controller.handlePagination.getCurrentPageIndex() + 1 && controller.handlePagination.hasNextPage()) {
                                    controller.handlePagination.nextPage();
                                }
                                break;
                            case UiKit.Kpi.HandleKeys.UP:
                                if (pageActiveIndex < controller.handlePagination.getCurrentPageIndex() + 1 && controller.handlePagination.hasPrevPage()) {
                                    controller.handlePagination.prevPage();
                                }
                                break;
                            default:
                                break;
                        }
                    };
                    /**
                     * Callback при клике на $document
                     * @param e
                     */
                    var onDocumentClick = function (e) {
                        //Если есть теги и клик по совершен по тегу, тоже выходим.
                        if (scope.tag && controller.getIsClickTag()) {
                            controller.setFocus(false).setIsClickTag(false);
                            return;
                        }
                        //Если не комбобокс не открыт, выходим
                        if (!controller.getOpen())
                            return;
                        var targetController = angular.element(e.target).controller('scCombobox');
                        //Смотрим, тот ли scCombobox
                        if (targetController !== controller) {
                            scope.$apply(function () {
                                controller.closeDropDown();
                            });
                        }
                    };
                    /**
                     * Callback при destroy scope
                     */
                    var offDestroy = function () {
                        $document.off('click', onDocumentClick);
                        datasWatcher();
                        modalWatcher();
                        $timeout.cancel(controller.searchDelayTimeout);
                    };
                    $document.on('click', onDocumentClick);
                    scope.$on('$destroy', offDestroy);
                }
            };
        }
        Kpi.ScComboboxDirective = ScComboboxDirective;
        Kpi.KpiModule.getModule().directive('scCombobox', ['$timeout', '$document', UiKit.Kpi.ScComboboxDirective]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        'use strict';
        /**
         * Контроллер модального окна
         * @class ModalDialogController
         */
        var ScModalController = (function () {
            function ScModalController($scope, $modalInstance, params) {
                this.$scope = $scope;
                this.$modalInstance = $modalInstance;
                this.params = params;
                this.$scope.viewModel = this;
            }
            /**
             * Метод закрытия модального окна
             * @method cancel
             */
            ScModalController.prototype.cancel = function () {
                this.$modalInstance.dismiss();
            };
            return ScModalController;
        }());
        ScModalController.$inject = [
            '$scope',
            '$modalInstance',
            'params'
        ];
        Kpi.ScModalController = ScModalController;
        Kpi.KpiModule.getModule().controller('ScModalController', ScModalController);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="ScModalController.ts" />
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        'use strict';
        /**
         * Параметры модального окна
         *
         * @class ModalParams
         */
        var ModalParams = (function () {
            function ModalParams(params) {
                var modalParams = params.modalParams || {};
                if (!params.modalParams || !params.modalParams.templateUrl) {
                    modalParams.templateUrl = Kpi.KpiModule.contentURL() + '/sc-modal/sc-modal.html';
                }
                if (!params.modalParams || !params.modalParams.controller) {
                    modalParams.controller = 'ScModalController as controller';
                }
                if (!params.modalParams || !params.modalParams.backdrop) {
                    modalParams.backdrop = 'static';
                }
                modalParams.resolve = {
                    params: function () {
                        return params;
                    }
                };
                return modalParams;
            }
            return ModalParams;
        }());
        Kpi.ModalParams = ModalParams;
        /**
         * Модальное окно
         *
         * @class ModalDialog
         */
        var ScModalService = (function () {
            function ScModalService($modal) {
                this.$modal = $modal;
            }
            /**
             * Открытие диалога
             *
             * @method openDialog
             * @param {Core.IModalDialog} params
             * @return ng.IPromise<any>
             */
            ScModalService.prototype.openDialog = function (params) {
                var modalParams = new ModalParams(params);
                var modalInstance = this.$modal.open(modalParams);
                if (params.successCallback) {
                    modalInstance.result.then(params.successCallback, params.dismissCallback);
                }
                return modalInstance;
            };
            /**
             * Открытие диалога
             *
             * @method openDialog
             * @param {Core.IModalDialog} params
             */
            ScModalService.prototype.open = function (params) {
                return this.openDialog(params || {});
            };
            return ScModalService;
        }());
        ScModalService.$inject = ['$modal'];
        Kpi.ScModalService = ScModalService;
        Kpi.KpiModule.getModule().service('ScModalService', ScModalService);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Меню
         * @class ScMenu
         */
        var ScMenuController = (function () {
            function ScMenuController($state, $scope) {
                this.$state = $state;
                this.$scope = $scope;
            }
            /**
             * Проверка, являются ли элементы меню активными
             * @param items {Core.App.IScMenu[]} - элемент меню
             * @returns {void}
             */
            ScMenuController.prototype.isActiveScMenuItem = function (items) {
                var context = this;
                function getItem(items) {
                    if (items === void 0) { items = []; }
                    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                        var menuItem = items_1[_i];
                        if (menuItem.url) {
                            var itemUrl = menuItem.url.match(/[^\/].*?(?=\?|$)/g);
                            var currentUrl = context.$state.current.url.match(/[^\/].*?(?=\?|$)/g);
                            if (itemUrl && itemUrl[0] && currentUrl && currentUrl[0]) {
                                menuItem.isActive = (itemUrl[0] === currentUrl[0]);
                            }
                        }
                        if (menuItem.menuItems) {
                            menuItem.isActive = getItem(menuItem.menuItems) || menuItem.isActive;
                        }
                    }
                    return items.some(function (i) { return i.isActive; });
                }
                getItem(items);
            };
            /**
             * Проверка, и подсчет тизеров в пунктах меню
             * @param items {Core.App.IScMenu[]} - элемент меню
             * @returns {number}
             */
            ScMenuController.prototype.refreshTeasers = function (items) {
                if (items === void 0) { items = []; }
                var sum = 0;
                for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
                    var menuItem = items_2[_i];
                    if ('teaser' in menuItem) {
                        menuItem.teaser && (sum += menuItem.teaser.num);
                    }
                    else {
                        // Убрал в рамках задачи https://jira.dzm.lanit.ru/browse/EMIASIEFR-1104, чтобы не очишались события.
                        // menuItem.teaser = {num: 0};
                    }
                    if (menuItem.menuItems) {
                        sum = this.refreshTeasers(menuItem.menuItems);
                        menuItem.teaser && (menuItem.teaser.num = sum);
                    }
                }
                return sum;
            };
            return ScMenuController;
        }());
        ScMenuController.$inject = [
            '$state',
            '$scope',
        ];
        Kpi.ScMenuController = ScMenuController;
        Kpi.KpiModule.getModule().controller('ScMenuController', ScMenuController);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива выпадающего древовидного подмеменю
         * @class ScMenuItemDirective
         * @directive sc-menu-item
         */
        function ScMenuItemDirective($compile) {
            return {
                restrict: 'E',
                templateUrl: Kpi.KpiModule.contentURL() + '/sc-menu/sc-menu-item/sc-menu-item.html',
                replace: true,
                transclude: false,
                scope: {
                    item: '=' //IScMenu
                },
                compile: function (tElement, tAttr) {
                    var contents = tElement.contents().remove();
                    var compiledContents;
                    return function (scope, iElement, iAttr) {
                        if (!compiledContents) {
                            compiledContents = $compile(contents);
                        }
                        compiledContents(scope, function (clone, scope) {
                            iElement.append(clone);
                        });
                    };
                }
            };
        }
        Kpi.ScMenuItemDirective = ScMenuItemDirective;
        Kpi.KpiModule.getModule().directive('scMenuItem', ['$compile', ScMenuItemDirective]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива выпадающего древовидного подмеменю
         * @class ScMenuTeaserDirective
         * @directive sc-menu-teaser
         */
        function ScMenuTeaserDirective($compile) {
            return {
                restrict: 'E',
                templateUrl: Kpi.KpiModule.contentURL() + '/sc-menu/sc-menu-teaser/sc-menu-teaser.html',
                replace: true,
                transclude: false,
                scope: {
                    num: '=',
                    text: '=',
                    events: '='
                },
                link: function (scope, element) {
                    /**
                     * Общее событие клика вызывающее массив колбэков
                     * @param event
                     */
                    scope.actionOnClick = function (event) {
                        event.preventDefault();
                        event.stopPropagation();
                        if (scope.events && scope.events.length) {
                            scope.events.forEach(function (event) {
                                if (event.click && typeof event.click == "function") {
                                    // Если ошибка работы колбэка, выведет ошибку, остальные отработают
                                    try {
                                        event.click();
                                    }
                                    catch (e) {
                                        console.error('Ошибка работы колбэка события клик на тизере', event);
                                    }
                                }
                            });
                        }
                    };
                }
            };
        }
        Kpi.ScMenuTeaserDirective = ScMenuTeaserDirective;
        Kpi.KpiModule.getModule().directive('scMenuTeaser', ['$compile', ScMenuTeaserDirective]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="ScMenuController.ts" />
/// <reference path="sc-menu-item/ScMenuItemDirective.ts" />
/// <reference path="sc-menu-teaser/ScMenuTeaserDirective.ts" />
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива меню
         * @class ScMenuDirective
         * @directive menu
         */
        function ScMenuDirective() {
            return {
                restrict: 'E',
                templateUrl: Kpi.KpiModule.contentURL() + '/sc-menu/sc-menu.html',
                replace: true,
                transclude: false,
                controller: 'ScMenuController as controller',
                scope: {
                    items: '=' //IScMenu
                },
                link: function (scope, elem) {
                    scope.$watch('items', function (n, o) {
                        if (n == o)
                            return;
                        scope.controller.refreshTeasers(scope.items);
                    }, true);
                    scope.controller.isActiveScMenuItem(scope.items);
                    scope.controller.refreshTeasers(scope.items);
                }
            };
        }
        Kpi.ScMenuDirective = ScMenuDirective;
        Kpi.KpiModule.getModule().directive('scMenu', [ScMenuDirective]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/// <reference path="../sc-menu/ScMenuDirective.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Класс-контроллер для упавления "шапкой" приложения
         *
         * @class HeaderController
         */
        var ScPageHeaderController = (function () {
            function ScPageHeaderController($scope, $state) {
                //if ($scope.profile) this.isShowUserProfile = false;
                //else this.isShowUserProfile = JSON.parse($scope.profile);
                this.$scope = $scope;
                this.$state = $state;
                this.menu = [];
                this.isShowUserProfile = true;
            }
            return ScPageHeaderController;
        }());
        ScPageHeaderController.$inject = [
            '$scope',
            '$state'
        ];
        Kpi.ScPageHeaderController = ScPageHeaderController;
        Kpi.KpiModule.getModule().controller('ScPageHeaderController', ScPageHeaderController);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Контроллер директивы профайла пациента
         * @class PatientBannerController
         */
        var ScUserProfileController = (function () {
            //static $inject = ['$scope', 'ConfigStorageService', 'DocumentService','$state', '$modal','$q', 'AuthSessionService', 'AppService'];
            function ScUserProfileController() {
            }
            return ScUserProfileController;
        }());
        Kpi.ScUserProfileController = ScUserProfileController;
        Kpi.KpiModule.getModule().controller('ScUserProfileController', ScUserProfileController);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="ScUserProfileController.ts" />
/// <reference path="../../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива визуального компонента "Профайл пользователя".
         * @class UserProfileDirective
         * @directive UserProfileDirective
         */
        function ScUserProfileDirective() {
            return {
                restrict: 'EA',
                replace: true,
                scope: {
                    profile: '=' //UserProfile
                },
                controller: 'ScUserProfileController as controller',
                templateUrl: Kpi.KpiModule.contentURL() + '/sc-page-header/sc-user-profile/sc-user-profile.html'
            };
        }
        Kpi.ScUserProfileDirective = ScUserProfileDirective;
        Kpi.KpiModule.getModule().directive('scUserProfile', [ScUserProfileDirective]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="ScPageHeaderController.ts" />
/// <reference path="sc-user-profile/ScUserProfileDirective.ts" />
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива визуального компонента "Header".
         * @class HeaderDirective
         * @directive HeaderDirective
         */
        function ScPageHeaderDirective() {
            return {
                restrict: 'EA',
                replace: true,
                scope: {
                    profile: '=?',
                    menu: "=?" //menu
                },
                controller: 'ScPageHeaderController as controller',
                templateUrl: Kpi.KpiModule.contentURL() + '/sc-page-header/sc-page-header.html'
            };
        }
        Kpi.ScPageHeaderDirective = ScPageHeaderDirective;
        Kpi.KpiModule.getModule().directive('scPageHeader', [ScPageHeaderDirective]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/**
 * @module Utils
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        var ScTypeaheadInnerDataElement = (function () {
            function ScTypeaheadInnerDataElement(data, valueFormatter) {
                this.setInnerData(data, valueFormatter);
            }
            /**
             * Задаем внутренние данные
             * @param data
             * @param valueFormatter
             * @returns {UiKit.Kpi.IScTypeaheadValueFormatter}
             */
            ScTypeaheadInnerDataElement.prototype.setInnerData = function (data, valueFormatter) {
                this.setFormatValue(data, valueFormatter)
                    .setValue(data)
                    .setDataTypeElement(data)
                    .setSelected(false)
                    .setFiltered(true);
                return this;
            };
            /**
             * Получаем formatValue
             * @returns {any}
             */
            ScTypeaheadInnerDataElement.prototype.getFormatValue = function () {
                return this.formatValue;
            };
            /**
             * Задаем formatValue
             * @param data
             * @param valueFormatter
             * @returns {UiKit.Kpi.ScTypeaheadInnerDataElement}
             */
            ScTypeaheadInnerDataElement.prototype.setFormatValue = function (data, valueFormatter) {
                this.formatValue = valueFormatter ? valueFormatter(angular.copy(data)) : angular.copy(data);
                return this;
            };
            /**
             * Получаем value
             * @returns {any}
             */
            ScTypeaheadInnerDataElement.prototype.getValue = function () {
                return this.value;
            };
            /**
             * Задаем value
             * @param data
             * @returns {UiKit.Kpi.ScTypeaheadInnerDataElement}
             */
            ScTypeaheadInnerDataElement.prototype.setValue = function (data) {
                this.value = angular.copy(data);
                return this;
            };
            /**
             * Задаем dataType
             * @param data
             * @returns {UiKit.Kpi.ScTypeaheadInnerDataElement}
             */
            ScTypeaheadInnerDataElement.prototype.setDataTypeElement = function (data) {
                typeof data === 'string' || typeof data === 'number' || typeof data === 'boolean'
                    ? this.setDataType('string')
                    : this.setDataType('object');
                return this;
            };
            /**
             * Получаем dataType
             * @returns {string}
             */
            ScTypeaheadInnerDataElement.prototype.getDataType = function () {
                return this.dataType;
            };
            /**
             * Задаем dataType
             * @param dataType
             * @returns {UiKit.Kpi.ScTypeaheadInnerDataElement}
             */
            ScTypeaheadInnerDataElement.prototype.setDataType = function (dataType) {
                this.dataType = dataType;
                return this;
            };
            /**
             * Задаем selected
             * @param selected
             * @returns {UiKit.Kpi.ScTypeaheadInnerDataElement}
             */
            ScTypeaheadInnerDataElement.prototype.setSelected = function (selected) {
                this.selected = selected;
                return this;
            };
            /**
             * Получаем selected
             * @returns {boolean}
             */
            ScTypeaheadInnerDataElement.prototype.getSelected = function () {
                return this.selected;
            };
            /**
             * Задаем index
             * @param index
             * @returns {UiKit.Kpi.ScTypeaheadInnerDataElement}
             */
            ScTypeaheadInnerDataElement.prototype.setIndex = function (index) {
                this.index = index;
                return this;
            };
            /**
             * Получаем index
             * @returns {number}
             */
            ScTypeaheadInnerDataElement.prototype.getIndex = function () {
                return this.index;
            };
            /**
             * Задаем id
             * @param index
             * @returns {UiKit.Kpi.ScTypeaheadInnerDataElement}
             */
            ScTypeaheadInnerDataElement.prototype.setId = function (index) {
                this.id = "sc-typeahead-element-" + index;
                return this;
            };
            /**
             * Получаем id
             * @returns {string}
             */
            ScTypeaheadInnerDataElement.prototype.getId = function () {
                return this.id;
            };
            /**
             * Получаем filtered
             * @param filtered
             * @returns {UiKit.Kpi.ScTypeaheadInnerDataElement}
             */
            ScTypeaheadInnerDataElement.prototype.setFiltered = function (filtered) {
                this.filtered = filtered;
                return this;
            };
            /**
             * Получаем filtered
             * @returns {boolean}
             */
            ScTypeaheadInnerDataElement.prototype.getFiltered = function () {
                return this.filtered;
            };
            /**
             * Получаем filteredIndex
             * @returns {number}
             */
            ScTypeaheadInnerDataElement.prototype.getFilteredIndex = function () {
                return this.filteredIndex;
            };
            /**
             * Задаем filteredIndex
             * @param filteredIndex
             * @returns {UiKit.Kpi.ScTypeaheadInnerDataElement}
             */
            ScTypeaheadInnerDataElement.prototype.setFilteredIndex = function (filteredIndex) {
                this.filteredIndex = filteredIndex;
                return this;
            };
            return ScTypeaheadInnerDataElement;
        }());
        ScTypeaheadInnerDataElement.GROUP_ALL = 'Все'; //Константа группы по умолчанию
        Kpi.ScTypeaheadInnerDataElement = ScTypeaheadInnerDataElement;
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="ScTypeaheadInnerDataElement.ts" />
/**
 * @module Utils
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Класс ScTypeaheadInnerData
         */
        var ScTypeaheadInnerData = (function () {
            function ScTypeaheadInnerData(data, valueFormatter) {
                this.setList(data, valueFormatter);
            }
            /**
             * Задаем list
             * @param data
             * @param valueFormatter
             * @returns {UiKit.Kpi.ScTypeaheadInnerData}
             */
            ScTypeaheadInnerData.prototype.setList = function (data, valueFormatter) {
                this.list = angular.copy(data)
                    .map(function (el, index) {
                    return new UiKit.Kpi.ScTypeaheadInnerDataElement(el, valueFormatter)
                        .setId(index)
                        .setIndex(index);
                });
                return this;
            };
            /**
             * Получаем list
             * @returns {Array<UiKit.Kpi.ScTypeaheadInnerDataElement>}
             */
            ScTypeaheadInnerData.prototype.getList = function () {
                return this.list;
            };
            /**
             * Получаем отфильтрованные значения
             * @param listElement
             * @returns {UiKit.Kpi.ScTypeaheadInnerDataElement[]}
             */
            ScTypeaheadInnerData.prototype.getFiltered = function (listElement) {
                return listElement.filter(function (d) { return d.getFiltered(); });
            };
            return ScTypeaheadInnerData;
        }());
        Kpi.ScTypeaheadInnerData = ScTypeaheadInnerData;
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/**
 * Created by dkovalev on 29.03.2017.
 */
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Функция, экранирующая спец символы в строке
         * @param searchQuery
         */
        Kpi.scTypeaheadFiltersScreening = function (searchQuery) {
            //Экранируем специальные символы
            return searchQuery
                ? searchQuery
                    .split('')
                    .reduce(function (acc, el) {
                    return el === '.'
                        || el === '('
                        || el === ')'
                        || el === '['
                        || el === ']'
                        || el === '^'
                        || el === '$'
                        || el === '|'
                        || el === '?'
                        || el === '+'
                        || el === '\\'
                        || el === '$'
                        || el === '*'
                        ? acc + ("\\" + el)
                        : acc + el;
                }, '')
                : '';
        };
        /**
         * class ScTypeaheadFilters
         */
        var ScTypeaheadFilters = (function () {
            function ScTypeaheadFilters() {
            }
            /**
             * Фильтруем входной массив данных Array<UiKit.Kpi.ScTypeaheadInnerDataElement>
             * @param innerData - входной набор данных Array<UiKit.Kpi.ScTypeaheadInnerDataElement>
             * @param inputValue - строка поиска
             * @param keys - ключи объекта, для фильтрации
             * @param $parse
             */
            ScTypeaheadFilters.scTypeaheadFilterInnerDataByKey = function (innerData, inputValue, keys, $parse) {
                //Приводим строку поиска к нормальному виду
                inputValue = inputValue ? ('' + inputValue).toLowerCase().trim() : '';
                /**
                 * Поиск в строке
                 * @param innerDataElement
                 * @param inputValue
                 */
                var searchInString = function (innerDataElement, inputValue) {
                    return !!~innerDataElement.getValue().toLowerCase().indexOf(inputValue)
                        ? innerDataElement.setFiltered(true)
                        : innerDataElement.setFiltered(false);
                };
                /**
                 * Поиск в объекте
                 * @param innerDataElement
                 * @param inputValue
                 * @param keys
                 */
                var searchInObject = function (innerDataElement, inputValue, keys) {
                    return keys.some(function (key) { return !!~('' + $parse(key)(innerDataElement.getValue())).toLowerCase().indexOf(inputValue); })
                        ? innerDataElement.setFiltered(true)
                        : innerDataElement.setFiltered(false);
                };
                return innerData.map(function (innerDataElement) {
                    return innerDataElement.getDataType() === 'string'
                        ? searchInString(innerDataElement, inputValue)
                        : searchInObject(innerDataElement, inputValue, keys);
                });
            };
            /**
             * Получаем только отфильтрованные значения
             * @param list
             * @returns {Array<UiKit.Kpi.ScTypeaheadInnerDataElement>|number|[boolean,boolean,boolean,boolean,boolean]}
             */
            ScTypeaheadFilters.scTypeaheadOnlyFiltered = function (list) {
                return list && list.length ? list.filter(function (d) { return d.getFiltered(); }) : [];
            };
            return ScTypeaheadFilters;
        }());
        /**
         * Фильтр для маркировки найденных символов в строчке
         * @param input
         * @param extras
         * @returns {any}
         */
        ScTypeaheadFilters.scTypeaheadTextFilter = function (input, extras, $sce) {
            var MarkString = function (match) {
                return "<span class=\"sc-typeahead-highlight\">" + match + "</span>";
            };
            if (extras.length > 0) {
                extras = UiKit.Kpi.scTypeaheadFiltersScreening(extras);
                var extrasRegExp = new RegExp(extras, 'gi');
                var parsed = input.replace(extrasRegExp, MarkString);
                return $sce.trustAsHtml(parsed);
            }
            return $sce.trustAsHtml(input);
        };
        Kpi.ScTypeaheadFilters = ScTypeaheadFilters;
        Kpi.KpiModule.getModule()
            .filter('scTypeaheadFilterInnerDataByKey', [function () { return ScTypeaheadFilters.scTypeaheadFilterInnerDataByKey; }])
            .filter('scTypeaheadOnlyFiltered', [function () { return ScTypeaheadFilters.scTypeaheadOnlyFiltered; }])
            .filter('scTypeaheadTextFilter', [function () { return ScTypeaheadFilters.scTypeaheadTextFilter; }]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/**
 * Created by dkovalev on 03.04.2017.
 */
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * HandleKeys enum
         */
        var ScTypeaheadHandleKeys;
        (function (ScTypeaheadHandleKeys) {
            ScTypeaheadHandleKeys[ScTypeaheadHandleKeys["DOWN"] = 40] = "DOWN";
            ScTypeaheadHandleKeys[ScTypeaheadHandleKeys["UP"] = 38] = "UP";
            ScTypeaheadHandleKeys[ScTypeaheadHandleKeys["ENTER"] = 13] = "ENTER";
        })(ScTypeaheadHandleKeys = Kpi.ScTypeaheadHandleKeys || (Kpi.ScTypeaheadHandleKeys = {}));
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="ScTypeaheadInnerData.ts" />
/// <reference path="ScTypeaheadFilters.ts" />
/// <reference path="ScTypeaheadKeyboard.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * Компонент kpi-combobox поддерживает следующие
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        var EScTypeaheadMods;
        (function (EScTypeaheadMods) {
            EScTypeaheadMods[EScTypeaheadMods["ATTENTION"] = 'attention'] = "ATTENTION";
            EScTypeaheadMods[EScTypeaheadMods["WARNING"] = 'warning'] = "WARNING";
            EScTypeaheadMods[EScTypeaheadMods["DEFAULT"] = 'default'] = "DEFAULT";
        })(EScTypeaheadMods = Kpi.EScTypeaheadMods || (Kpi.EScTypeaheadMods = {}));
        /**
         * ScTypeaheadController
         */
        var ScTypeaheadController = (function () {
            function ScTypeaheadController($scope, $filter, $timeout, $parse, $sce) {
                this.$scope = $scope;
                this.$filter = $filter;
                this.$timeout = $timeout;
                this.$parse = $parse;
                this.$sce = $sce;
                //Сообщение при отсутствии элементов поискового запроса
                this.EMPTY_SEARCH_RESULTS = 'Совпадений не найдено';
                //Сообщение при отсутствие входные данных
                this.EMPTY_LIST = 'Совпадений не найдено';
                //Находимся ли мы сейчас в поле ввода
                this.searchInProgress = false;
                //Открыт/закрыт dropdown
                this.open = false;
                //Фокус в поле ввода
                this.focus = false;
                //Индекс активного элемента
                this.activeIndex = 0;
                //Храним таймаут для поиска
                this.searchDelayTimeout = null;
                //Моды
                this.EScTypeaheadMods = EScTypeaheadMods;
                this.updateDatas();
            }
            /**
             * Обновляем данные для sctypeahead
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            ScTypeaheadController.prototype.updateDatas = function () {
                this.initScopeModel()
                    .initScopeSearchDelay()
                    .initScopeValueFormatter()
                    .initScopePageSize()
                    .initComboboxInnerData(this.$scope.source, this.$scope.valueFormatter)
                    .initScopeSearchBy()
                    .initScopeList()
                    .initScopeInputFormatter()
                    .initScopeMinLength()
                    .setInputValue('')
                    .setSelectedElementsInput('')
                    .initMod()
                    .initSelectOne();
                return this;
            };
            /**
             * Закрытие dropdown
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            ScTypeaheadController.prototype.close = function () {
                this.open = false;
                return this;
            };
            /**
             * Задаем list
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            ScTypeaheadController.prototype.initScopeList = function () {
                this.$scope.list = this.searchOn
                    ? this.filterInnerData(this.getInnerData().getList(), this.inputValue)
                    : this.getInnerData().getList();
                return this;
            };
            /**
             * Задаем внутренний list
             * @param source
             * @param valueFormatter
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            ScTypeaheadController.prototype.initComboboxInnerData = function (source, valueFormatter) {
                this.innerData = new UiKit.Kpi.ScTypeaheadInnerData(source ? source : [], valueFormatter);
                return this;
            };
            /**
             * Получаем innerData
             * @returns {Array<UiKit.Kpi.ScTypeaheadInnerDataElement>}
             */
            ScTypeaheadController.prototype.getInnerData = function () {
                return this.innerData;
            };
            /**
             * Событие выбора элемента
             * @param data
             * @param $event
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            ScTypeaheadController.prototype.onSelectData = function (data, $event) {
                if (!data)
                    return;
                var selectedData = angular.copy(data);
                this.selectOne(selectedData);
                return this;
            };
            /**
             * Простой выбор элемента
             * @param data
             */
            ScTypeaheadController.prototype.selectOne = function (data) {
                this.$scope.model = angular.copy(data.getValue());
                this.setSelectedElementsInput(this.$scope.inputFormatter(angular.copy(this.$scope.model)))
                    .setOpen(false)
                    .setSearchInProgress(false);
            };
            /**
             * Выбираем один элемент, если изменилась модель извне
             * @param data
             */
            ScTypeaheadController.prototype.selectOneLoad = function (data) {
                this.setSelectedElementsInput(this.$scope.inputFormatter(angular.copy(data).getValue()))
                    .setOpen(false)
                    .setSearchInProgress(false);
            };
            /**
             * Если изначально указана модель, то применяем ее к компоненту
             */
            ScTypeaheadController.prototype.initSelectOne = function () {
                this.$scope.model
                    ? this.selectOneLoad(new UiKit.Kpi.ScTypeaheadInnerDataElement(angular.copy(this.$scope.model), this.$scope.valueFormatter))
                    : null;
                return this;
            };
            ;
            /**
             * Инициализируем model
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            ScTypeaheadController.prototype.initScopeModel = function () {
                this.$scope.model = this.$scope.model ? this.$scope.model : null;
                return this;
            };
            /**
             * Фильтруем innerData
             * @param list
             * @param inputValue - введенное значение в поле ввода
             * @returns {Array<UiKit.Kpi.ScTypeaheadInnerDataElement>}
             */
            ScTypeaheadController.prototype.filterInnerData = function (list, inputValue) {
                var index = 0;
                return this.angularFiltersData(list, this.$scope.searchBy, inputValue)
                    .map(function (data) { return data.getFiltered() ? data.setFilteredIndex(index++) : data.setFilteredIndex(null); });
            };
            /**
             * Инициализируем searchBy
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            ScTypeaheadController.prototype.initScopeSearchBy = function () {
                if (this.$scope.searchBy && Array.isArray(this.$scope.searchBy) && this.$scope.searchBy.length) {
                    this.setSearchOn(true);
                }
                else {
                    this.$scope.searchBy = [];
                    this.setSearchOn(false);
                }
                return this;
            };
            /**
             * InputFormatter по умолчанию
             * @returns {string}
             */
            ScTypeaheadController.prototype.defaultInputFormatter = function () {
                return function (param) { return param; };
            };
            /**
             * Инициализируем inputFormatter
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            ScTypeaheadController.prototype.initScopeInputFormatter = function () {
                this.$scope.inputFormatter = this.$scope.inputFormatter && typeof this.$scope.inputFormatter === 'function'
                    ? this.$scope.inputFormatter
                    : this.defaultInputFormatter();
                return this;
            };
            /**
             * ValueFormatter по умолчанию
             * @returns {string}
             */
            ScTypeaheadController.prototype.defaultValueFormatter = function () {
                return function (param) { return [param]; };
            };
            /**
             * Инициализируем inputFormatter
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            ScTypeaheadController.prototype.initScopeValueFormatter = function () {
                this.$scope.valueFormatter = this.$scope.valueFormatter && typeof this.$scope.valueFormatter === 'function'
                    ? this.$scope.valueFormatter
                    : this.defaultValueFormatter();
                return this;
            };
            /**
             * Применяем angular фильтры для innerData
             * @param list
             * @param keys
             * @param inputValue
             * @returns {Array<UiKit.Kpi.ScTypeaheadInnerDataElement>}
             */
            ScTypeaheadController.prototype.angularFiltersData = function (list, keys, inputValue) {
                list = inputValue
                    ? this.$filter('scTypeaheadFilterInnerDataByKey')(list, inputValue, keys, this.$parse)
                    : this.getInnerData()
                        .getList()
                        .map(function (d) { return d.setFiltered(true); });
                return list;
            };
            /**
             * Инициализируем inputValue
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            ScTypeaheadController.prototype.setInputValue = function (param) {
                this.inputValue = param;
                return this;
            };
            /**
             * Иницицлизируем minLength
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            ScTypeaheadController.prototype.initScopeMinLength = function () {
                this.$scope.minLength = angular.isDefined(this.$scope.minLength)
                    ? this.$scope.minLength
                    : ScTypeaheadController.MIN_LENGTH;
                return this;
            };
            /**
             * Очистка поля, модели, выбранных элементов, отфильтрованных элементов
             */
            ScTypeaheadController.prototype.clear = function () {
                this.setScopeModel(null)
                    .setActiveIndex(0)
                    .initComboboxInnerData(this.$scope.source, this.$scope.valueFormatter)
                    .setInputValue('')
                    .initScopeList()
                    .setSelectedElementsInput('');
                return this;
            };
            /**
             * Задаем selectedElements
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            ScTypeaheadController.prototype.setSelectedElementsInput = function (param) {
                this.selectedElementsInput = param || '';
                return this;
            };
            /**
             * Получаем selectedElementsInput
             * @returns {string}
             */
            ScTypeaheadController.prototype.getSelectedElementsInput = function () {
                return this.selectedElementsInput;
            };
            /**
             * Задаем количество элементов на странице
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            ScTypeaheadController.prototype.initScopePageSize = function () {
                this.$scope.pageSize = this.$scope.pageSize
                    ? this.$scope.pageSize
                    : ScTypeaheadController.PAGE_SIZE;
                return this;
            };
            /**
             * Задаем focus
             * @param focus
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            ScTypeaheadController.prototype.setFocus = function (focus) {
                this.focus = focus;
                return this;
            };
            /**
             * Получаем focus
             * @returns {boolean}
             */
            ScTypeaheadController.prototype.getFocus = function () {
                return this.focus;
            };
            /**
             * Задаем open
             * @param open
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            ScTypeaheadController.prototype.setOpen = function (open) {
                this.open = open;
                return this;
            };
            /**
             * Получаем open
             * @returns {boolean}
             */
            ScTypeaheadController.prototype.getOpen = function () {
                return this.open;
            };
            /**
             *
             * @param searchInProgress
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            ScTypeaheadController.prototype.setSearchInProgress = function (searchInProgress) {
                this.searchInProgress = searchInProgress;
                return this;
            };
            /**
             * Получаем searchInProgress
             * @returns {boolean}
             */
            ScTypeaheadController.prototype.getSearchInProgress = function () {
                return this.searchInProgress;
            };
            /**
             * Задаем model
             * @param model
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            ScTypeaheadController.prototype.setScopeModel = function (model) {
                this.$scope.model = model;
                return this;
            };
            /**
             * Получаем отфильтрованные значения
             * @param data
             * @returns {Array}
             */
            ScTypeaheadController.prototype.getFilteredData = function (data) {
                return data.reduce(function (acc, d) { return d.getFiltered() ? acc.concat(angular.copy(d)) : acc; }, []);
            };
            /**
             * Задаем activeIndex
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            ScTypeaheadController.prototype.setActiveIndex = function (activeIndex) {
                this.activeIndex = activeIndex;
                return this;
            };
            /**
             * Получаем activeIndex
             * @returns {number}
             */
            ScTypeaheadController.prototype.getActiveIndex = function () {
                return this.activeIndex;
            };
            /**
             * Инициализируем searchDelay
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            ScTypeaheadController.prototype.initScopeSearchDelay = function () {
                this.$scope.searchDelay = this.$scope.searchDelay
                    ? this.$scope.searchDelay
                    : ScTypeaheadController.SEARCH_DELAY;
                return this;
            };
            /**
             * Проверяем наличие отфильтрованных элементов в list
             * @returns {boolean}
             */
            ScTypeaheadController.prototype.checkIsFilteredListLength = function () {
                return !!this.$scope.list.filter(function (d) { return d.getFiltered(); }).length;
            };
            /**
             * Проверяем наличие элементов в list
             * @returns {boolean}
             */
            ScTypeaheadController.prototype.checkIsListLength = function () {
                return !!this.$scope.list.filter(function (d) { return d.getValue(); }).length;
            };
            /**
             * Инициализируем мод
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            ScTypeaheadController.prototype.initMod = function () {
                this.$scope.mod = this.$scope.mod ? this.$scope.mod : EScTypeaheadMods.DEFAULT;
                return this;
            };
            /**
             * Закрываем выпадающий список
             * @returns {ScTypeaheadController}
             */
            ScTypeaheadController.prototype.closeDropDown = function () {
                //Закрываем выпадающий списк исходя из включенного/отключенного текстового поиска
                if (this.searchOn) {
                    return this.selectedElementsInput || this.inputValue
                        ? this.setOpen(false).setSearchInProgress(false)
                        : this.setOpen(false).setSearchInProgress(true);
                }
                else {
                    return this.setOpen(false).setSearchInProgress(false);
                }
            };
            /**
             * Задаем searchOn
             * @param searchOn
             * @returns {UiKit.Kpi.ScTypeaheadController}
             */
            ScTypeaheadController.prototype.setSearchOn = function (searchOn) {
                this.searchOn = searchOn;
                return this;
            };
            /**
             * Получаем searchOn
             * @returns {any}
             */
            ScTypeaheadController.prototype.getSearchOn = function () {
                return this.searchOn;
            };
            return ScTypeaheadController;
        }());
        //Константа количества минимального набора символов, чтобы начать поиск (берется по умолчанию, если не задано)
        ScTypeaheadController.MIN_LENGTH = 0;
        //Константа задержки перед поиском (берется по умолчанию, если не задано)
        ScTypeaheadController.SEARCH_DELAY = 300;
        //Константа количества элементов на странице (берется по умолчанию, если не задано)
        ScTypeaheadController.PAGE_SIZE = 4;
        ScTypeaheadController.$inject = [
            '$scope',
            '$filter',
            '$timeout',
            '$parse',
            '$sce'
        ];
        Kpi.ScTypeaheadController = ScTypeaheadController;
        Kpi.KpiModule.getModule().controller('ScTypeaheadController', UiKit.Kpi.ScTypeaheadController);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/// <reference path="ScTypeaheadController.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * ScTypeaheadDirective
         */
        function ScTypeaheadDirective($timeout, $document) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: Kpi.KpiModule.contentURL() + '/sc-typeahead/sc-typeahead.html',
                transclude: true,
                scope: {
                    model: '=?ngModel',
                    source: '=?',
                    valueFormatter: '=?',
                    inputFormatter: '=?',
                    searchBy: '=?',
                    minLength: '=?',
                    searchDelay: '=?',
                    pageSize: '=?',
                    disabled: '=?',
                    placeholder: '=?',
                    mod: '=?',
                    onChange: '&?',
                    onSelect: '&?',
                    onClear: '&?'
                },
                controller: 'ScTypeaheadController as controller',
                link: function (scope, element, attrs, controller) {
                    /**
                     * Задаем размеры контейнеру элементов в выпадающем списке
                     */
                    var initPageHeight = function () {
                        if (scope.paginator)
                            return $timeout(function () { });
                        return $timeout(function () {
                            var li = element.find('[data-sc-typeahead-item]')[0], ul = element.find('[data-sc-typeahead-list]')[0];
                            li && ul && ul.style.setProperty('max-height', li.clientHeight * scope.pageSize + 'px', 'important');
                        });
                    };
                    /**
                     * Watcher на обновление source
                     * При обновлении входных данных (массива всех значений), вызываем update компонента
                     */
                    var datasWatcher = scope.$watchCollection('source', function () {
                        controller.updateDatas();
                    });
                    /**
                     * Watcher на изменение model
                     * @type {any|Function}
                     */
                    var modalWatcher = scope.$watch('model', function (newValue, oldValue) {
                        //Обновляем typeahead, если очищена модель
                        updateTypeahead(newValue, oldValue);
                        //Вызываем callback onChange, если он указан в атрибуте компонента
                        scope.onChange && typeof scope.onChange === 'function' && scope.onChange();
                    });
                    /**
                     * Обновляем typeahead
                     * @param newValue
                     * @param oldValue
                     */
                    var updateTypeahead = function (newValue, oldValue) {
                        if (!newValue && !oldValue)
                            return;
                        //При обновлении компонента, если приходит пустая модель
                        if (!newValue && !_.isEqual(newValue, oldValue)) {
                            controller.updateDatas();
                        }
                        //При задании модели изначально при инициализации компонента, чтобы подцепить выбранное значение
                        if (newValue && !_.isEqual(newValue, oldValue)) {
                            controller.selectOneLoad(new UiKit.Kpi.ScTypeaheadInnerDataElement(newValue, scope.valueFormatter));
                        }
                    };
                    /**
                     * Задаем focus
                     */
                    scope.focus = function () {
                        controller.getSearchOn() && controller.setSearchInProgress(true);
                        controller.setFocus(true);
                        $timeout(function () { return element.find('[data-sc-typeahead-input]').focus(); }, 100);
                    };
                    /**
                     * Активируем typeahead
                     */
                    scope.activate = function () {
                        $timeout(function () {
                            if (scope.disabled)
                                return;
                            controller.setOpen(true);
                            scope.focus();
                            initPageHeight();
                        });
                    };
                    /**
                     * Выбор значения
                     * @param data
                     * @param $event
                     */
                    scope.onSelectData = function (data, $event) {
                        if (scope.disabled)
                            return;
                        $event.preventDefault();
                        controller.onSelectData(data, $event).setSearchInProgress(false);
                        scope.onSelect && typeof scope.onSelect === 'function' && scope.onSelect();
                    };
                    /**
                     * Обработчик клика по выбранным элементам
                     */
                    scope.onSelectedElementsInput = function () {
                        if (scope.disabled)
                            return;
                        controller.setOpen(true);
                        scope.focus();
                    };
                    /**
                     * Событие поиска элемента
                     * @param $event
                     */
                    scope.onSearch = function ($event) {
                        !controller.getOpen() && controller.setOpen(true);
                        initPageHeight().then(function () { return handleDropDown($event); });
                    };
                    /**
                     * Очистка значений
                     */
                    scope.clear = function ($event) {
                        if (scope.disabled)
                            return;
                        $event.stopPropagation();
                        //Если есть callback на очистку модели, то сначала дергаем его, затем либо чистим модель,
                        //если пришел resolve, либо ничего не делаем, если пришел reject
                        if (scope.onClear && typeof scope.onClear === 'function') {
                            scope.disabled = true;
                            scope.onClear()
                                .then(function () {
                                scope.disabled = false;
                                controller.clear().setSearchInProgress(false);
                                scope.focus();
                            })["catch"](function () {
                                scope.disabled = false;
                                console.info('Отмена очистки модели.');
                            });
                        }
                        else {
                            controller.clear().setSearchInProgress(false);
                            scope.focus();
                        }
                    };
                    /**
                     * Событие клика по кнопке выпадающего списка
                     */
                    scope.toggleActivate = function () {
                        !scope.disabled && controller.getOpen()
                            ? controller.closeDropDown()
                            : scope.activate();
                    };
                    /**
                     * Callback при нажатии клавиши
                     * @param $event
                     */
                    var handleDropDown = function ($event) {
                        var key = $event.which, currentIndex = controller.getActiveIndex(), prevIndex = currentIndex - 1, nextIndex = currentIndex + 1, filteredLength = controller.getFilteredData(scope.list).length;
                        switch (key) {
                            case UiKit.Kpi.ScTypeaheadHandleKeys.DOWN:
                                nextIndex + 1 <= filteredLength && controller.setActiveIndex(nextIndex);
                                updateDropDownScroll(UiKit.Kpi.ScTypeaheadHandleKeys.DOWN);
                                break;
                            case UiKit.Kpi.ScTypeaheadHandleKeys.UP:
                                prevIndex >= 0 && controller.setActiveIndex(prevIndex);
                                updateDropDownScroll(UiKit.Kpi.ScTypeaheadHandleKeys.UP);
                                break;
                            case UiKit.Kpi.ScTypeaheadHandleKeys.ENTER:
                                controller.onSelectData(controller.getFilteredData(scope.list)[controller.getActiveIndex()], $event);
                                break;
                            default:
                                controller.searchDelayTimeout && $timeout.cancel(controller.searchDelayTimeout);
                                controller.searchDelayTimeout = $timeout(function () { return controller.setActiveIndex(0).initScopeList(); }, scope.searchDelay);
                                break;
                        }
                    };
                    /**
                     * Обновляем скролл
                     * @param key
                     */
                    var updateDropDownScroll = function (key) {
                        var currentIndex = controller.getActiveIndex(), nextIndex = currentIndex + 1, filteredLength = controller.getFilteredData(scope.list).length;
                        //Dom elements
                        var lis = element.find('[data-sc-typeahead-item]'), li = lis[currentIndex], ul = element.find('[data-sc-typeahead-list]')[0], liHeight = lis.first().height(), ulOffsetTop = ul.offsetTop, $ul = $(ul), currentLiTop = li.offsetTop - ulOffsetTop;
                        switch (key) {
                            case UiKit.Kpi.ScTypeaheadHandleKeys.DOWN:
                                if (currentIndex === 0) {
                                    $ul.scrollTop(0);
                                }
                                else if (li.offsetTop + liHeight > ul.scrollTop + ul.clientHeight) {
                                    $ul.scrollTop(liHeight * nextIndex - liHeight * scope.pageSize);
                                }
                                break;
                            case UiKit.Kpi.ScTypeaheadHandleKeys.UP:
                                if (currentIndex === filteredLength - 1) {
                                    $ul.scrollTop(liHeight * (nextIndex));
                                }
                                else if (currentLiTop < ul.scrollTop || currentLiTop > ul.scrollTop + ul.clientHeight) {
                                    $ul.scrollTop(liHeight * currentIndex);
                                }
                                break;
                            default:
                                break;
                        }
                    };
                    /**
                     * Callback при клике на $document
                     * @param e
                     */
                    var onDocumentClick = function (e) {
                        if (!controller.getOpen())
                            return;
                        var targetController = angular.element(e.target).controller('scTypeahead'); //Смотрим, тот ли scTypeahead
                        if (targetController !== controller) {
                            scope.$apply(function () {
                                controller.closeDropDown();
                            });
                        }
                    };
                    /**
                     * Callback при destroy scope
                     */
                    var offDestroy = function () {
                        $document.off('click', onDocumentClick);
                        datasWatcher();
                        modalWatcher();
                        $timeout.cancel(controller.searchDelayTimeout);
                    };
                    $document.on('click', onDocumentClick);
                    scope.$on('$destroy', offDestroy);
                }
            };
        }
        Kpi.ScTypeaheadDirective = ScTypeaheadDirective;
        Kpi.KpiModule.getModule().directive('scTypeahead', ['$timeout', '$document', UiKit.Kpi.ScTypeaheadDirective]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива всплывающей подсказки
         *
         * @directive sc-tooltip
         */
        UiKit.Kpi.KpiModule.getModule()
            .directive('scTooltipClasses', function () {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    if (scope.placement) {
                        element.addClass(scope.placement);
                    }
                    if (scope.popupClass) {
                        element.addClass(scope.popupClass);
                    }
                    if (scope.animation()) {
                        element.addClass(attrs.tooltipAnimationClass);
                    }
                }
            };
        })
            .directive('scTooltipPopup', [function () {
                return {
                    restrict: 'EA',
                    replace: true,
                    scope: {
                        content: '@',
                        placement: '@',
                        popupClass: '@',
                        animation: '&',
                        isOpen: '&'
                    },
                    templateUrl: Kpi.KpiModule.contentURL() + '/sc-tooltip/sc-tooltip-popup.html'
                };
            }])
            .directive('scTooltip', ['$tooltip', function ($tooltip) { return $tooltip('scTooltip', 'scTooltip', 'mouseenter'); }])
            .directive('scTooltipTemplatePopup', [function () {
                return {
                    restrict: 'EA',
                    replace: true,
                    scope: {
                        contentExp: '&',
                        placement: '@',
                        popupClass: '@',
                        animation: '&',
                        isOpen: '&',
                        originScope: '&'
                    },
                    templateUrl: Kpi.KpiModule.contentURL() + '/sc-tooltip/sc-tooltip-template-popup.html'
                };
            }])
            .directive('scTooltipTemplate', ['$tooltip', function ($tooltip) { return $tooltip('scTooltipTemplate', 'scTooltip', 'mouseenter', {
                useContentExp: true
            }); }])
            .directive('scTooltipHtmlPopup', [function () {
                return {
                    restrict: 'EA',
                    replace: true,
                    scope: {
                        contentExp: '&',
                        placement: '@',
                        popupClass: '@',
                        animation: '&',
                        isOpen: '&'
                    },
                    templateUrl: Kpi.KpiModule.contentURL() + '/sc-tooltip/sc-tooltip-html-popup.html'
                };
            }])
            .directive('scTooltipHtml', ['$tooltip', function ($tooltip) { return $tooltip('scTooltipHtml', 'scTooltip', 'mouseenter', {
                useContentExp: true
            }); }]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива всплывающей подсказки
         *
         * @directive sc-popover
         */
        Kpi.KpiModule.getModule()
            .directive('scPopoverTemplatePopup', [function () {
                return {
                    restrict: 'EA',
                    replace: true,
                    scope: {
                        title: '@',
                        contentExp: '&',
                        placement: '@',
                        popupClass: '@',
                        animation: '&',
                        isOpen: '&',
                        originScope: '&'
                    },
                    templateUrl: Kpi.KpiModule.contentURL() + '/sc-popover/sc-popover-template.html'
                };
            }])
            .directive('scPopoverTemplate', ['$tooltip', function ($tooltip) {
                return $tooltip('scPopoverTemplate', 'scPopover', 'click', {
                    useContentExp: true
                });
            }])
            .directive('scPopoverHtmlPopup', [function () {
                return {
                    restrict: 'EA',
                    replace: true,
                    scope: {
                        contentExp: '&',
                        title: '@',
                        placement: '@',
                        popupClass: '@',
                        animation: '&',
                        isOpen: '&'
                    },
                    templateUrl: Kpi.KpiModule.contentURL() + '/sc-popover/sc-popover-html.html'
                };
            }])
            .directive('scPopoverHtml', ['$tooltip', function ($tooltip) {
                return $tooltip('scPopoverHtml', 'scPopover', 'click', {
                    useContentExp: true
                });
            }])
            .directive('scPopoverPopup', [function () {
                return {
                    restrict: 'EA',
                    replace: true,
                    scope: {
                        title: '@',
                        content: '@',
                        placement: '@',
                        popupClass: '@',
                        animation: '&',
                        isOpen: '&'
                    },
                    templateUrl: Kpi.KpiModule.contentURL() + '/sc-popover/sc-popover.html'
                };
            }])
            .directive('scPopover', ['$tooltip', function ($tooltip) { return $tooltip('scPopover', 'scPopover', 'click'); }]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива переключателя (Да/Нет)
         * class Switch
         * directive sc-switch
         */
        function SwitchDirective() {
            return {
                restrict: 'EA',
                replace: true,
                require: '^ngModel',
                scope: {
                    model: '=ngModel',
                    ngDisabled: '=',
                    onLabel: '@',
                    offLabel: '@'
                },
                templateUrl: Kpi.KpiModule.contentURL() + '/sc-switch/sc-switch.html',
                compile: function () {
                    return {
                        pre: function (scope, elm, attr) {
                            if (!attr.onLabel) {
                                attr.onLabel = 'Да';
                            }
                            if (!attr.offLabel) {
                                attr.offLabel = 'Нет';
                            }
                            if (!attr.disabled) {
                                attr.disabled = false;
                            }
                        }
                    };
                }
            };
        }
        Kpi.SwitchDirective = SwitchDirective;
        Kpi.KpiModule.getModule().directive('scSwitch', SwitchDirective);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        var NCMethod;
        (function (NCMethod) {
            NCMethod[NCMethod["UP"] = 1] = "UP";
            NCMethod[NCMethod["DOWN"] = 0] = "DOWN";
        })(NCMethod || (NCMethod = {}));
        ;
        /**
         * Контроллер элемента управления увеличения-уменьшения числового значения поля с помощью стрелок "плюс" и "минус"
         * @class SpinnerController
         */
        var ScSpinnerController = (function () {
            function ScSpinnerController($scope) {
                this.$scope = $scope;
                /**
                 * Опции по умолчанию
                 * @type {{step: number}}
                 */
                this.defaultOptions = {
                    step: 1
                };
                // Применяем опции
                $scope.options = angular.extend({}, this.defaultOptions, $scope.options);
                this.$scope.self = this;
                if (this.$scope.model === undefined) {
                    this.$scope.model = 1;
                }
            }
            /**
             * функция уменьшения-увеличивания значения числового поля
             * @method number
             */
            ScSpinnerController.prototype.changeValue = function (method) {
                // if (method === undefined || this.$scope.disabled) { return false; }
                switch (method) {
                    case NCMethod.UP:
                        if (!this.$scope.options.maxValue || (+this.$scope.model + this.$scope.options.step) <= +this.$scope.options.maxValue) {
                            this.$scope.model = this.$scope.model + this.$scope.options.step;
                        }
                        break;
                    case NCMethod.DOWN:
                        if (!((this.$scope.model - this.$scope.options.step) < this.$scope.options.minValue)) {
                            this.$scope.model = this.$scope.model - this.$scope.options.step;
                        }
                }
            };
            return ScSpinnerController;
        }());
        ScSpinnerController.$inject = ['$scope'];
        Kpi.ScSpinnerController = ScSpinnerController;
        Kpi.KpiModule.getModule().controller('ScSpinnerController', ScSpinnerController);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/// <reference path="ScSpinnerController.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива элемента управления увеличения-уменьшения числового значения поля с помощью стрелок "плюс" и "минус"
         * @class Spinner
         */
        function ScSpinnerDirective() {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    model: '=ngModel',
                    disabled: '=?ngDisabled',
                    maxlength: '@',
                    options: '=spinnerOptions' //ISpinner
                },
                templateUrl: Kpi.KpiModule.contentURL() + '/sc-spinner/sc-spinner.html',
                controller: 'ScSpinnerController'
            };
        }
        Kpi.ScSpinnerDirective = ScSpinnerDirective;
        Kpi.KpiModule.getModule().directive('scSpinner', [ScSpinnerDirective]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        var ScOverlayMessageType;
        (function (ScOverlayMessageType) {
            ScOverlayMessageType[ScOverlayMessageType["SUCCESS"] = 0] = "SUCCESS";
            ScOverlayMessageType[ScOverlayMessageType["INFO"] = 1] = "INFO";
            ScOverlayMessageType[ScOverlayMessageType["WARNING"] = 2] = "WARNING";
            ScOverlayMessageType[ScOverlayMessageType["DANGER"] = 3] = "DANGER";
            ScOverlayMessageType[ScOverlayMessageType["ERROR"] = 4] = "ERROR";
        })(ScOverlayMessageType = Kpi.ScOverlayMessageType || (Kpi.ScOverlayMessageType = {}));
        var ScOverlayMessage = (function () {
            function ScOverlayMessage(messages, deferred, type, options) {
                if (type === void 0) { type = ScOverlayMessageType.SUCCESS; }
                if (options === void 0) { options = null; }
                this.deferred = deferred;
                this.type = type;
                this.messages = [];
                if (typeof messages === 'string') {
                    this.messages.push(messages);
                }
                else if (Array.isArray(messages)) {
                    this.messages = messages;
                }
                if (options) {
                    if (options.title) {
                        this.title = options.title;
                    }
                    if (options.buttons) {
                        this.buttons = options.buttons;
                    }
                    if (options.autoClose) {
                        this.autoClose = options.autoClose;
                    }
                }
            }
            return ScOverlayMessage;
        }());
        Kpi.ScOverlayMessage = ScOverlayMessage;
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="ScOverlayMessage.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Сервис управляющий оверлейными сообщениями
         *
         * @class OverlayMessagesService
         */
        var OverlayMessagesService = (function () {
            function OverlayMessagesService($q, $timeout, $compile, $http, $rootScope, $templateCache) {
                var _this = this;
                this.$q = $q;
                this.$timeout = $timeout;
                this.$compile = $compile;
                this.$http = $http;
                this.$rootScope = $rootScope;
                this.$templateCache = $templateCache;
                /**
                 * Признак был ли инициализирован контейнер для сообщений
                 * @type {boolean}
                 */
                this.IsInitialized = false;
                /**
                 * Признак, паузы для скрытия сообщений, при заданном времени жизни
                 * @type {boolean}
                 */
                this.pause = false;
                // установки по умолчанию
                this.defaultOptions = {
                    title: '',
                    autoClose: true,
                    lifeTime: 5000,
                    buttons: []
                };
                this.messages = [];
                // Создаём контейнер для вывода сообщений, если его ещё нет
                if (!this.IsInitialized) {
                    // Получаем шаблон
                    this.getTemplate()
                        .then(function (tpl) {
                        var scope = _this.$rootScope.$new();
                        scope.controller = _this;
                        var $layout = _this.$compile(tpl)(scope);
                        angular.element('body').append($layout);
                        _this.IsInitialized = true;
                    });
                }
            }
            ;
            OverlayMessagesService.prototype.getTemplate = function () {
                var path = Kpi.KpiModule.contentURL() + '/sc-overlay-message/sc-overlay-message.html';
                if (this.$templateCache.get(path)) {
                    return this.$q.when(this.$templateCache.get(path));
                }
                else {
                    return this.$http.get(path).then(function (responce) { return responce.data; });
                }
            };
            /**
             * Установка времени жизни уведомления
             * @method setLifeTime
             * @param {number} ms Время жизни уведомления в мс
             */
            OverlayMessagesService.prototype.setLifeTime = function (ms) {
                this.defaultOptions.lifeTime = ms;
            };
            ;
            OverlayMessagesService.prototype.setPause = function (val) {
                var _this = this;
                this.pause = val;
                if (val) {
                    this.messages.forEach(function (item) {
                        if (item.autoClose) {
                            _this.$timeout.cancel(item.timer);
                        }
                    });
                }
                else {
                    this.messages.forEach(function (item) {
                        if (item.autoClose) {
                            item.timer = _this.$timeout(function () {
                                // Если таймер уже вышел, удаляем сообщение из коллекции с задержкой
                                _this.removeItem(item);
                            }, _this.defaultOptions.lifeTime / 2);
                        }
                    });
                }
            };
            ;
            /**
             * Очистка хранилища уведомлений
             * @method remove
             */
            OverlayMessagesService.prototype.clearMessage = function () {
                this.messages = [];
            };
            ;
            /**
             * Отображение уведомления
             * @method show
             * @param {any} messages сообщения
             * @param {string} type тип уведомления
             * @param {options} IAlertMessagesOptions настройки уведомления
             * @return
             */
            OverlayMessagesService.prototype.show = function (messages, type, options) {
                var _this = this;
                if (options === void 0) { options = null; }
                var messageOptions = angular.extend({}, this.defaultOptions, options);
                var alertMessage = new Kpi.ScOverlayMessage(messages, this.$q.defer(), type, messageOptions);
                this.messages.push(alertMessage);
                // Если установлено автозакрытие и нет состояния паузы
                if (messageOptions.autoClose && this.pause === false) {
                    alertMessage.timer = this.$timeout(function () {
                        _this.messages.splice(_this.messages.indexOf(alertMessage), 1);
                        alertMessage.deferred.reject();
                    }, messageOptions.lifeTime);
                }
                return alertMessage.deferred.promise;
            };
            /**
             * Метод для отображения уведомления об успешном выполнении операции
             * @method success
             * @param {any} messages Сообщения
             * @param {IAlertMessagesOptions} options Настройки уведомления
             * @return
             */
            OverlayMessagesService.prototype.success = function (messages, options) {
                if (options === void 0) { options = null; }
                return this.show(messages, Kpi.ScOverlayMessageType.SUCCESS, options);
            };
            /**
             * Метод для отображения информационного уведомления
             * @method info
             * @param {any} messages Сообщения
             * @param {IAlertMessagesOptions} options Настройки уведомления
             * @return
             */
            OverlayMessagesService.prototype.info = function (messages, options) {
                if (options === void 0) { options = null; }
                return this.show(messages, Kpi.ScOverlayMessageType.INFO, options);
            };
            /**
             * Метод для отображения уведомления-предупреждения
             * @method warning
             * @param {any} messages Сообщения
             * @param {IAlertMessagesOptions} options Настройки уведомления
             * @return
             */
            OverlayMessagesService.prototype.warning = function (messages, options) {
                if (options === void 0) { options = null; }
                return this.show(messages, Kpi.ScOverlayMessageType.WARNING, options);
            };
            /**
             * Метод для отображения уведомления об опасности
             * @method danger
             * @param {any} messages Сообщения
             * @param {IAlertMessagesOptions} options Настройки уведомления
             * @return
             */
            OverlayMessagesService.prototype.danger = function (messages, options) {
                if (options === void 0) { options = null; }
                return this.show(messages, Kpi.ScOverlayMessageType.DANGER, options);
            };
            /**
             * Метод для отображения уведомления об ошибке
             * @method error
             * @param {any} messages Сообщения
             * @param {IAlertMessagesOptions} options Настройки уведомления
             * @return
             */
            OverlayMessagesService.prototype.error = function (messages, options) {
                if (options === void 0) { options = null; }
                return this.danger(messages, options);
            };
            /**
             * Удаление сообщения из коллекции
             * @method removeItem
             * @param alertMessage {Core.UI.AlertMessage} - Объект сообщения который нужно удалить
             */
            OverlayMessagesService.prototype.removeItem = function (message) {
                this.messages.splice(this.messages.indexOf(message), 1);
                message.deferred.reject();
            };
            /**
             * Калбек при нажатии на кнопки сообщения
             * @param btnTitle {string} - Название нажатой кнопки
             * @param alertMessage {Core.UI.AlertMessage} - Объект сообщения из которого было нажатие
             */
            OverlayMessagesService.prototype.callbackButton = function (btnTitle, message) {
                message.deferred.resolve(btnTitle);
                this.messages.splice(this.messages.indexOf(message), 1);
            };
            return OverlayMessagesService;
        }());
        OverlayMessagesService.$inject = ['$q', '$timeout', '$compile', '$http', '$rootScope', '$templateCache'];
        Kpi.OverlayMessagesService = OverlayMessagesService;
        Kpi.KpiModule.getModule().service('OverlayMessagesService', OverlayMessagesService);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива ScGridMain
         * @class Grid
         * @directive sc-grid-main
         */
        function ScGridMainDirective() {
            return {
                restrict: 'EA',
                replace: true,
                template: "\n\t\t\t\t\t<div class=\"sc-grid sc-grid_main\" ng-transclude></div>\n\t\t\t\t",
                transclude: true,
                scope: {}
            };
        }
        Kpi.ScGridMainDirective = ScGridMainDirective;
        Kpi.KpiModule.getModule().directive('scGridMain', [ScGridMainDirective]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива GridCol
         * @class Grid
         * @directive sc-grid-col
         */
        function ScGridHelpCardDirective() {
            return {
                restrict: 'EA',
                replace: true,
                template: "\n\t\t\t\t\t<div class=\"sc-grid sc-grid_help-card\" ng-class=\"\n\t\t\t\t\thelpCard == 80 ? 'sc-grid_help-card_80' : 'sc-grid_help-card_120'\n\t\t\t\t\t\">\n\t\t\t\t\t\t<div class=\"sc-grid__col sc-grid__col_1_1\" ng-transclude></div>\n\t\t\t\t\t</div>\n\t\t\t\t",
                transclude: true,
                scope: {
                    helpCard: '=?'
                }
            };
        }
        Kpi.ScGridHelpCardDirective = ScGridHelpCardDirective;
        Kpi.KpiModule.getModule().directive('scGridHelpCard', [ScGridHelpCardDirective]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива ScGridJobCard
         *
         * @directive sc-grid-col
         */
        function ScGridJobCardDirective() {
            return {
                restrict: 'EA',
                replace: true,
                template: "\n\t\t\t\t\t<div class=\"sc-grid sc-grid_job-card\" ng-class=\"\n\t\t\t\t\t{'sc-grid_job-card_help-card_80' : helpCard == 80 , 'sc-grid_job-card_help-card_120' : helpCard == 120}\n\t\t\t\t\t\" ng-transclude>\n\t\t\t\t\t</div>\n\t\t\t\t",
                transclude: true,
                scope: {
                    helpCard: '=?'
                }
            };
        }
        Kpi.ScGridJobCardDirective = ScGridJobCardDirective;
        Kpi.KpiModule.getModule().directive('scGridJobCard', [ScGridJobCardDirective]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива ScGridCol
         * @class Grid
         * @directive sc-grid-col
         */
        function ScGridColDirective() {
            return {
                restrict: 'EA',
                replace: true,
                template: "\n\t\t\t\t\t<div class=\"sc-grid__col  {{sidebar ? 'sc-grid__col_' + sidebar : '' }}\" ng-class=\"{true:'sc-grid__col_' + current + '_' + all, false:''}[current <= all]\" ng-transclude></div>\n\t\t\t\t",
                transclude: true,
                scope: {
                    current: "@?",
                    all: "@?",
                    sidebar: "@?"
                }
            };
        }
        Kpi.ScGridColDirective = ScGridColDirective;
        Kpi.KpiModule.getModule().directive('scGridCol', [ScGridColDirective]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../KpiModule.ts" />
/// <reference path="ScGridMainDirective.ts" />
/// <reference path="ScGridHelpCardDirective.ts" />
/// <reference path="ScGridJobCardDirective.ts" />
/// <reference path="ScGridColDirective.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива ScGrid
         * @class Grid
         * @directive sc-grid
         */
        function ScGridDirective() {
            return {
                restrict: 'EA',
                replace: true,
                template: "\n\t\t\t\t\t<div class=\"sc-grid\" ng-class=\"{'sc-grid_table': table}\" ng-transclude></div>\n\t\t\t\t",
                transclude: true,
                scope: {
                    table: '@?'
                }
            };
        }
        Kpi.ScGridDirective = ScGridDirective;
        Kpi.KpiModule.getModule().directive('scGrid', [ScGridDirective]);
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
// переопределяем шаблон бутстрапа
angular.module("template/tabs/tab.html", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("template/tabs/tab.html", "<li ng-class=\"{active: active, disabled: disabled}\" ng-click=\"select()\">\n      <span tab-heading-transclude>{{heading}}</span>\n    </li>\n    ");
    }]);
angular.module("template/tabs/tabset.html", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("template/tabs/tabset.html", "<div class=\"sc-tabs\">\n      <ul class=\"sc-tabs__nav sc-tabs__nav_{{type || 'tabs'}}\" ng-class=\"{'nav-stacked': vertical, 'nav-justified': justified}\" ng-transclude></ul>\n      <div class=\"sc-tabs__content\">\n        <div class=\"sc-tabs__pane\"\n             ng-repeat=\"tab in tabs\"\n             ng-class=\"{active: tab.active}\"\n             tab-content-transclude=\"tab\">\n        </div>\n      </div>\n    </div>\n    ");
    }]);
/// <reference path="../KpiModule.ts" />
/// <reference path="./ScTabTpl.ts" />
/**
 * @module UiKit
 */
var UiKit;
(function (UiKit) {
    /**
     * @module Kpi
     */
    var Kpi;
    (function (Kpi) {
        /**
         * Директива
         *
         * @directive sc-tab
         */
        UiKit.Kpi.KpiModule.getModule();
    })(Kpi = UiKit.Kpi || (UiKit.Kpi = {}));
})(UiKit || (UiKit = {}));
/// <reference path="../libs/tsd.d.ts" />
/// <reference path="sc-button/ScButtonDirective.ts" />
/// <reference path="sc-panel-header/ScPanelHeaderDirective.ts" />
/// <reference path="sc-accordion/ScAccordionDirective.ts" />
/// <reference path="sc-accordion/sc-accordion-group/ScAccordionGroupDirective.ts" />
/// <reference path="sc-accordion/sc-accordion-heading/ScAccordionHeadingDirective.ts" />
/// <reference path="sc-accordion/sc-accordion-transclude/ScAccordionTranscludeDirective.ts" />
/// <reference path="sc-textarea/ScTextareaDirective.ts" />
/// <reference path="sc-button-split/ScButtonSplitDirective.ts" />
/// <reference path="sc-checkbox/ScCheckbox.ts" />
/// <reference path="sc-checkbox/ScCheckboxDirective.ts" />
/// <reference path="sc-radio/ScRadioDirective.ts" />
/// <reference path="sc-icon/ScIconDirective.ts" />
/// <reference path="sc-date-field/ScDateFieldDirective.ts" />
/// <reference path="sc-date-period/ScDatePeriodDirective.ts" />
/// <reference path="sc-date-spinner/ScDateSpinnerDirective.ts" />
/// <reference path="sc-text-field/ScTextFieldDirective.ts" />
/// <reference path="sc-panel-tag/ScPanelTagDirective.ts" />
/// <reference path="sc-page-footer/ScFooterDirective.ts" />
/// <reference path="sc-combobox/ScComboboxDirective.ts" />
/// <reference path="sc-modal/ScModalService.ts" />
/// <reference path="sc-menu/ScMenuDirective.ts" />
/// <reference path="sc-page-header/ScPageHeaderDirective.ts" />
/// <reference path="sc-typeahead/ScTypeaheadDirective.ts" />
/// <reference path="sc-tooltip/ScTooltipDirective.ts" />
/// <reference path="sc-popover/ScPopoverDirective.ts" />
/// <reference path="sc-pagination/ScPaginationDirective.ts" />
/// <reference path="sc-preloader/ScPreloaderDirective.ts" />
/// <reference path="sc-switch/SwitchDirective.ts" />
/// <reference path="sc-spinner/ScSpinnerDirective.ts" />
/// <reference path="sc-overlay-message/ScOverlayMessagesService.ts" />
/// <reference path="sc-combobox/ScComboboxDirective.ts" />
/// <reference path="sc-grid/ScGridDirective.ts" />
/// <reference path="sc-tab/ScTabDirective.ts" /> 
