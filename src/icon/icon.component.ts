import { Component, OnInit, Input} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: '[cock-icon]',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  public url:string; // = `../assets/svg/${name}.svg`;
  // private name:string = this.name;

  getUrl():String {
    return  this.url;
  }
  constructor(private location: Location) {

  }

  ngOnInit() {
    this.url = this.location.normalize('/assets/svg/'+this.name+'.svg') ;
    console.log(this.url);
console.log('name(onInit): ', this.name);
  }

  @Input() name:String;
}
