import { Component, OnInit, Input} from '@angular/core';
import { FormControl }            from '@angular/forms';
@Component({
  selector: 'sc-input',
  templateUrl: './sc-input.component.html',
  styleUrls: ['./sc-input.component.scss']
})
export class InputComponent implements OnInit {
  private myModel:any
  constructor() { }

  ngOnInit() {

  }

  @Input() disabled?:boolean;
  @Input() name?:string;
  // @Input() ngModel: any;
}
