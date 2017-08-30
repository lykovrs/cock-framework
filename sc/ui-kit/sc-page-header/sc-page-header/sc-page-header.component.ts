import {Component, OnInit, Input} from "@angular/core";
import {IScMenu} from "../../sc-menu/sc-menu-item/sc-menu-item.interface";
import {IScProfile} from "./sc-page-header.interface";

/**
 * Компонент для отображения хедера.
 * Содержит данные для формирования меню приложения
 */
@Component({
    selector: 'sc-page-header',
    templateUrl: './sc-page-header.component.html',
    styleUrls: ['./sc-page-header.component.scss']
})

export class ScHeaderComponent implements OnInit {

    private mainPagePath: string = ""; // Ссылка по умолчанию
    private isShowUserProfile: boolean = true;

  @Input() profile: IScProfile  = null;
  @Input() menu: Array<IScMenu>  = null;

  public constructor() {}
    ngOnInit() {}
}

