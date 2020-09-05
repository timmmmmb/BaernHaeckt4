import {Action} from '@ngrx/store';

export enum RegionsActionTypes {
  Add = '[Regions Component] Add',
  AddAll = '[Regions Component] AddAll',
  Remove = '[Regions Component] Remove'
}

export class ActionEx implements Action {
  readonly type;
  payload: any;
}

export class RegionsAdd implements ActionEx {
  readonly type = RegionsActionTypes.Add;
  constructor(public payload: any) {}
}

export class RegionsAddAll implements ActionEx {
  readonly type = RegionsActionTypes.AddAll;
  constructor(public payload: any) {}
}

export class RegionsRemove implements ActionEx {
  readonly type = RegionsActionTypes.Remove;
  constructor(public payload: any) {}
}
