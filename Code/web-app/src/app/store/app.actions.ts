import {Action} from "@ngrx/store";

export enum AppActionTypes {
  LoadApp = '[App] Load Common',
  LoadedApp = '[App] Loaded Common'
}

export class LoadApp implements Action {
  readonly type = AppActionTypes.LoadApp;
}

export class LoadedApp implements Action {
  readonly type = AppActionTypes.LoadedApp;
}

export type AppActions =
  | LoadApp
  | LoadedApp;
