/**
 * Created by dkovalev on 02.03.2017.
 */
/**
 * Modules
 */
import {
  Component,
  ViewEncapsulation,
  ComponentFactoryResolver,
  ViewChild,
  Input,
  AfterViewInit,
  ComponentFactory,
  ViewContainerRef,
  ComponentRef
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
/**
 * Directives
 */
import { ScModalAddDirective } from './sc-modal-add.directive';
/**
 * Services
 */
import { ScModalAddService } from './sc-modal-add.service';

@Component({
  selector: 'sc-modal',
  templateUrl: './sc-modal.component.html',
  styleUrls: ['./sc-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ScModalComponent implements AfterViewInit {

  private title: string = 'Заголовок модального окна'; //Заголовок модального окна
  @ViewChild(ScModalAddDirective) ScModalAddDirective: ScModalAddDirective;

  constructor(
      private activeModal: NgbActiveModal,
      private componentFactoryResolver: ComponentFactoryResolver,
      private scModalAddService: ScModalAddService
  ) {

  }

  ngAfterViewInit() {
    //Прописываем в template необходимый компонент
    let componentFactory: ComponentFactory<any>,
        viewContainerRef: ViewContainerRef,
        componentRef: ComponentRef<any>;
    componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.scModalAddService.getComponent());
    viewContainerRef = this.ScModalAddDirective.viewContainerRef;
    viewContainerRef.clear();
    componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
