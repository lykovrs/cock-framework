/**
 * Created by dkovalev on 03.03.2017.
 */
export interface IModalParams {
  title?: string,
  subtitle?: string,
  successCallback?: (any) => any,
  dismissCallback?: (any) => any,
  closeCallback? :(any) => any
}

export interface IModal {
  component?: any,
  params?: IModalParams
}
