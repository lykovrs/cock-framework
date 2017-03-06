/**
 * Created by dkovalev on 03.03.2017.
 */
import {Component, Input, ViewEncapsulation} from '@angular/core';

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'demo-modal-content',
  styleUrls: ['./demo-modal.component.scss'],
  template: `
    <div class="sc-modal-test">
      <sc-typeahead [data]="dataTest" [mod]="testMod"></sc-typeahead>
      <div>----------------------------------------------------</div>
      <sc-typeahead [data]="dataTest"></sc-typeahead>
      <div>----------------------------------------------------</div>
      <sc-typeahead [data]="dataTest" [mod]="testMod2"></sc-typeahead>
      <div>----------------------------------------------------</div>
</div>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class DemoModalContent {
  private dataTest = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
    'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  private testMod = 'warning';
  private testMod2 = 'attention';

  constructor(public activeModal: NgbActiveModal) {}
}
