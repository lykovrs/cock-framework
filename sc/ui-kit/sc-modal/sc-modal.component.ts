/**
 * Created by dkovalev on 02.03.2017.
 */
/**
 * Modules
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sc-modal',
  templateUrl: './sc-modal.component.html',
  styleUrls: ['./sc-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ScModalComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

}
