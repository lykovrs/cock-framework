import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'cock-demo-button',
  templateUrl: './demo-button.component.html',
  styleUrls: ['./demo-button.component.scss']
})
export class DemoButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public clickCounter = 0;
  public target = null;

  public clickMe(e){
    this.target = e.target;
    this.clickCounter++;
    alert("Click " + e);
  };
}
