import { Component,  ViewEncapsulation, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'sc-grid',
  templateUrl: './sc-grid.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./sc-grid.component.scss']
})
export class ScGridComponent implements OnInit {

  private isHelpCard: boolean = true;

  @ViewChild('helpCard') helpCard: ElementRef;


  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.isHelpCard = !!this.helpCard.nativeElement.children.length;
    });
  }

}
