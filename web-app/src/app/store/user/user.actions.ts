import { Action } from '@ngrx/store';
import {appReducer} from "../app.reducer";

export enum UserActionTypes {
  UpdateUser = '[User Component] UpdateUser',
}

export class ActionEx implements Action {
  readonly type;
  payload: any;
}

export class UpdateUser implements ActionEx {
  readonly type = UserActionTypes.UpdateUser;
  constructor(public payload: any) {}
}


