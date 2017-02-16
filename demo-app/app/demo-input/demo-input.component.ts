import { Component, OnInit } from '@angular/core';
import { FormControl }            from '@angular/forms';
@Component({
  selector: 'app-demo-input',
  templateUrl: './demo-input.component.html',
  styleUrls: ['./demo-input.component.scss']
})
export class DemoTextField implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public myModel = 'Example text';
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  public disabledInput = true;
}
