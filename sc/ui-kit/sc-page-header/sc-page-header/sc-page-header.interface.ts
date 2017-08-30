export interface IScProfile {
  fullName: string,
  shortName: string,
  lpuName: string,
  role: string,
  contractName: string,
  avialibleResourceName: string,
  onClickChangeProfile: (e: Event) => void;
  onClickExit: (e: Event) => void;
  onClickSendProblem: (e: Event) => void;
  onClickSettings: (e: Event) => void;
};
