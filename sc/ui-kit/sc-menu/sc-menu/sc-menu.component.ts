
import {Component, Input, OnChanges, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {IScMenu} from "../sc-menu-item/sc-menu-item.interface";

@Component({
	selector: 'sc-menu',
	templateUrl: './sc-menu.component.html',
	styleUrls: ['./sc-menu.component.scss']
})
/**
 * Директива меню
 * @class ScMenuComponent
 * @directive menu
 */
export class ScMenuComponent implements OnChanges, OnInit {

	@Input() items: IScMenu[] = [];

	public constructor(private router: Router) {}

	ngOnInit() {
		this.isActiveKpiMenuItem();
		this.refreshTeasers(this.items);
	}

	ngOnChanges() {
		this.refreshTeasers(this.items)
	}

	/**
	 * Проверка, является ли элемент меню текущим
	 */
	public isActiveKpiMenuItem(): void {
		let context = this;
		let getItem = ((items) => {
			if (!items) return;
			for(let menuItem of items){
				if (menuItem.url) {
					let itemUrl = menuItem.url.match(/[^\/].*?(?=\?|$)/g);
					let currentUrl = this.router.url.match(/[^\/].*?(?=\?|$)/g);

					if (itemUrl && itemUrl[0] && currentUrl && currentUrl[0]) {
						menuItem.isActive = (itemUrl[0] === currentUrl[0]);
					}
				}

				if (menuItem.menuItems) {
					menuItem.isActive = getItem(menuItem.menuItems) || menuItem.isActive;
				}
			}
			return items.some(i => i.isActive);
		});
		getItem(this.items);
	}


	/**
	 * Проверка, и подсчет тизеров в пунктах меню
	 * @param items {IScMenu[]} - элемент меню
	 * @returns {number}
	 */

	public refreshTeasers(items: IScMenu[]): number {
		if (!items) return;
		let sum = 0;
		for(let menuItem of items){
			if ('teaser' in menuItem) {
				menuItem.teaser && (sum += menuItem.teaser.num);
			}

			if (menuItem.menuItems) {
				sum = this.refreshTeasers(menuItem.menuItems);
				menuItem.teaser && (menuItem.teaser.num = sum);
			}
		}
		return sum;
	}
}
