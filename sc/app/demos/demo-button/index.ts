import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'demo-button',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})
export class DemoButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public isDisabled = true;

  public clickMe(e){
    alert("Click " + e);
  };
}
