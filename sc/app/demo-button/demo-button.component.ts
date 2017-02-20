import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'demo-button',
  templateUrl: './demo-button.component.html',
  styleUrls: ['./demo-button.component.scss']
})
export class DemoButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public disabled = true;

  public clickMe(e){
    alert("Click " + e);
  };
}
