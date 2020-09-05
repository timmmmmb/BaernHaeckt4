import {Action} from '@ngrx/store';

export enum OffersActionTypes {
  Add = '[Offers Component] Add',
  AddAll = '[Offers Component] AddAll',
  Remove = '[Offers Component] Remove'
}

export class ActionEx implements Action {
  readonly type;
  payload: any;
}

export class OffersAdd implements ActionEx {
  readonly type = OffersActionTypes.Add;
  constructor(public payload: any) {}
}

export class OffersAddAll implements ActionEx {
  readonly type = OffersActionTypes.AddAll;
  constructor(public payload: any) {}
}

export class OffersRemove implements ActionEx {
  readonly type = OffersActionTypes.Remove;
  constructor(public payload: any) {}
}
