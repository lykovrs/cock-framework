/**
 * Created by dkovalev on 06.03.2017.
 */
import {Component, Input } from '@angular/core';

@Component({
  selector: 'sc-preloader',
  templateUrl: './sc-preloader.component.html',
  styleUrls: ['./sc-preloader.component.scss']
})

export class ScPreloaderComponent {

  @Input() title?: string = 'Выполнение';
  @Input() condition: boolean = false;

  constructor() {}
}

