import { Component, OnInit, Input } from '@angular/core';
import { ITeaser, TeaserTypes } from './sc-teaser.interface';

@Component({
  selector: 'sc-teaser',
  templateUrl: './sc-teaser.component.html',
  styleUrls: ['./sc-teaser.component.scss']
})
/**
 * Директива меню
 * @class ScTeaserComponent
 * @directive sc-teaser
 */
export class ScTeaserComponent implements OnInit {

  @Input() teaser: ITeaser = null;

  private teaserTypes = TeaserTypes;

  constructor() { }

  ngOnInit() {}
}
