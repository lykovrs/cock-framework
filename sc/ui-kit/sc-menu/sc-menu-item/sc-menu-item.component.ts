import {Component, Input, ElementRef} from "@angular/core";
import {IScMenu} from "./sc-menu-item.interface";

@Component({
	selector: 'sc-menu-item',
	templateUrl: './sc-menu-item.component.html',
	styleUrls: ['./sc-menu-item.component.scss']
})
/**
 * Директива выпадающего древовидного подмеменю
 * @class ScMenuItemComponent
 * @directive sc-menu-item
 */
export class ScMenuItemComponent {
	@Input() item: IScMenu = null;

}
