import {User} from '../../models/user';
import {ActionEx, UserActionTypes} from "./user.actions";
import {createSelector} from "@ngrx/store";

export const initialState: User = {
  id: null,
  name: null,
  firstname: null,
  email: null,
  password: null,
  dateOfBirth: null,
  created: null
};

export function UserReducer(state = initialState, action: ActionEx): User {
  switch (action.type) {
    case UserActionTypes.UpdateUser:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        firstname: action.payload.firstname,
        email: action.payload.email,
        dateOfBirth: action.payload.dateOfBirth,
        created: action.payload.created
      };
    default:
      return state;
  }
}

export const selectFeature = (state): User => state.root.user;

export const selectUser = createSelector(
  selectFeature,
  (state: User) => state
);
