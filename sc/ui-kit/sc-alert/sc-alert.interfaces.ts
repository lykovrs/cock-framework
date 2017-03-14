/**
 * Created by dkovalev on 09.03.2017.
 */
export interface IScAlertOptions {
  title?: string;
  autoClose?: boolean;
  lifeTime?: number;
  buttons?: Array<IScAlertOptionsButton>;
}

export interface IScAlertOptionsButton {
  title: string,
  cb?: () => any
}
