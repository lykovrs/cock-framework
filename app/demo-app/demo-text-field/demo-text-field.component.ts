import { Component, OnInit } from '@angular/core';
import { FormControl }            from '@angular/forms';
@Component({
  selector: 'app-demo-text-field',
  templateUrl: './demo-text-field.component.html',
  styleUrls: ['./demo-text-field.component.scss']
})
export class DemoTextFieldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public myModel = 'Example text';
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  public disabledInput = true;
}
