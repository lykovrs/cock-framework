import { Component, OnInit, Input} from '@angular/core';
import { FormControl }            from '@angular/forms';
@Component({
  selector: 'sc-text-field',
  templateUrl: './sc-text-field.component.html',
  styleUrls: ['./sc-text-field.component.scss']
})
export class TextField implements OnInit {
  private myModel:any
  constructor() { }

  ngOnInit() {

  }

  @Input() mod?:string;
  @Input() disabled?:boolean;


}
