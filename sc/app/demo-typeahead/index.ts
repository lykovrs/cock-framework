import { Component, OnInit } from '@angular/core';
import {Http, URLSearchParams, Jsonp} from '@angular/http';
@Component({
  selector: 'demo-typeahead',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class DemoTypeaheadComponent implements OnInit {

  /**
   * Описание атрибутов:
   * <sc-typeahead
       [disabled]: boolean = false; disable компонента
       [(ngModel)]: any Моделька, в которой сохраняется выбранный элемент
       [placeholder]: string = 'Введите значение';
       [searchWaitLoading]: number = 300; Задержка перед фильтрацией (Чтобы облегчить нагрузку на поисковик)
       [searchMinLength]: number = 3; Начинаем фильтрацию после данного количества символов
       [data]: Array<any> | (any) => Observable<any> = []; Переданные данные
          (Либо массив объектов, либо callback функция)
       [maxDropDownLength]: number = 5; Максимальный размер выпадающего списка с найденными элементами
       [valuesFormatter]: (any) => any = По умолчанию callback, который возвращает первое значение
          первого элемента переданного списка объектов или, в случае передачи массива строк, callback, который
          возвращает первый элемент переданного массива данных
       [inputFormatter]: (any) => string = null; - формат вывода данных в поле ввода
       [mod]="modTest2"> Мод: attention, warning, либо вообще не указывается (def)
     </sc-typeahead >
   */

  private data1 = [];
  private data3 = [];
  private data6 = [];
  constructor(private http: Http, private _jsonp: Jsonp) {
    for (let i = 0; i <= 100; i++) {
        this.data1.push({
          test1: 'code' + i,
          test2: 'Alabama' + i,
          test3: 'Alaska' + i,
        });
        this.data3.push({
          test1: 'code' + i,
          test2: 'Alabama' + i,
          test3: 'Alaska' + i,
        });
    }
    for (let i = 0; i < 4; i++) {
      this.data6.push({
        test1: 'code' + i,
        test2: 'Alabama' + i,
        test3: 'Alaska' + i,
      })
    }
  }
  private placeholderTest1 = 'Заполните поле ввода';
  private searchMinLengthTest1 = 0;
  private searchLoadingTest1 = 1;
  private valuesFormatterTest1 = (x: {test1: string, test2: string, test3: string}) => {
    return {test1: x.test1.toLowerCase(), test2: x.test2.toUpperCase(),  test3: x.test3.toUpperCase()}
  };
  private inputFormatterTest1 = (x) => {console.log(x);return x.test1.toUpperCase()};
  private customTemplateTest1 = `<div>Test Custom Template</div>`;
  private modTest1 = 'warning';
  private modTest2 = 'attention';

  private data2 = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
    'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  private data5 = (term) => {
    let params = new URLSearchParams();
    params.set('search', term);
    return this.http.get('/sc/app/demo-typeahead/demo-typeahead-http.json', {search: params});
  };

  private valuesFormatterTest5 = (x: {test1: string, test2: string, test3: string}) => {
    return {test1: x.test1.toLowerCase() + ' modify view',  test3: x.test3.toUpperCase()}
  };
  private inputFormatterTest5 = (x) => x.test1.toUpperCase();

  ngOnInit() {
  }
}
