import {Component, OnInit} from '@angular/core';
import {IShowHelp} from 'ui-kit/sc-footer/sc-footer.component';

@Component({
  selector: 'demo-footer',
  templateUrl: './index.html'
})
export class DemoFooter implements OnInit {

  private help: IShowHelp = null;

  constructor() {}
  ngOnInit() {
    this.help = {
      callback: function (e) {
        console.log('action! ', e);
        alert('action!');
      },
      text: 'v 12.2'
    }
  }
}
