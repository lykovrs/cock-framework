
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

export interface IShowHelp {
  callback: (e: Event) => void;
  text: string
}

@Component({
    selector: 'sc-page-footer',
    templateUrl: 'sc-footer.component.html',
    styleUrls: ['./sc-footer.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

/**
 * Директива визуального компонента "footer".
 * @class ScFooterComponent
 * @Component sc-footer
 */
export class ScFooterComponent implements OnInit {
  @Input() showHelp: IShowHelp; //Модель

  constructor() {}
  ngOnInit() {}
}



