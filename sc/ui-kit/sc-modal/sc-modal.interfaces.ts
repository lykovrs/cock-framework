import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
/**
 * Created by dkovalev on 03.03.2017.
 */
export interface IModalParams {
  title?: string,
}

export interface IModalOptions {
  backdrop?: boolean | 'static';
  keyboard?: boolean;
  windowClass?: string;
}

export interface IModal {
  component: any,
  params?: IModalParams,
  options?: IModalOptions
}
