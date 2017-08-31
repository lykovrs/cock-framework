import { Component, OnInit} from '@angular/core';
import {ISpinnerOptions} from 'ui-kit/sc-spinner/sc-spinner.interface';

@Component({
  selector: 'demo-spinner',
  templateUrl: './index.html',
  styleUrls: ['./index.scss']
})

export class DemoSpinnerComponent implements OnInit {

  private options: ISpinnerOptions = null;
  private optionsDisabled: ISpinnerOptions = null;
  private optionsTooltip: ISpinnerOptions = null;
  private optionsArrow: ISpinnerOptions = null;
  private optionsArrowDisabled: ISpinnerOptions = null;

  constructor() {}

  ngOnInit() {
    this.options = {
      values: {
        min: 0.01,
        max: 1,
        step: 0.25
      },
      //valuesFixed: [1,4,5,6,9,990], // Если не указывать values, необходимо передавать valuesFixed
      // minTooltip: 'start',
      // maxTooltip: 'end',
      // isArrowsType: true,
      // disabled: true
    };

    this.optionsDisabled = Object.assign({}, this.options, {
      disabled: true
    });

    this.optionsTooltip = Object.assign({}, this.options, {
      minTooltip: '-0,25',
      maxTooltip: '+0,25',
    });

    this.optionsArrow = Object.assign({}, this.options, {
      isArrowsType: true
    });

    this.optionsArrowDisabled = Object.assign({}, this.options, {
      disabled: true
    });

  }
}

