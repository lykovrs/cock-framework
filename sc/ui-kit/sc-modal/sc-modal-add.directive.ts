/**
 * Created by dkovalev on 06.03.2017.
 */
import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[sc-modal-add]',
})
export class ScModalAddDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
