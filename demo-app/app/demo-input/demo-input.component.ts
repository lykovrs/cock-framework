import { Component, OnInit } from '@angular/core';
import { FormControl }            from '@angular/forms';
@Component({
  selector: 'app-demo-input',
  templateUrl: './demo-input.component.html',
  styleUrls: ['./demo-input.component.scss']
})
export class DemoInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public inputModel = 'Example text'
}
