import {ITeaser} from '../../sc-teaser/sc-teaser.interface';

export interface IScMenu {
  name:string;
  url:string;
  action?:Function;
  menuItems?: IScMenu[];
  teaser ?: ITeaser // Кружок со значением
  disabled?:boolean;
  isAvailable?:boolean;
}
