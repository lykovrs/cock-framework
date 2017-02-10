import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: '[cock-icon]',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() name:String; 
}
