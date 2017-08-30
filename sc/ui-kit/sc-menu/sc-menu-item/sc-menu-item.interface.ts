export interface IScMenu {
  name:string;
  url:string;
  action?:Function;
  menuItems?: IScMenu[];
  teaser?;
  disabled?:boolean;
  isAvailable?:boolean;
}
