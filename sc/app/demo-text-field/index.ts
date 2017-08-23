import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'demo-text-field',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class DemoTextFieldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public placeholder = "Add value"
  public clearModel = "";
  public myModel = 'Example text';
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskModel = "";
  public disabledInput = true;
}
