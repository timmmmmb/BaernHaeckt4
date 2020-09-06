import {User} from '../models/user';
import * as fromUser from './user/user.reducer';
import * as fromRegions from './regions/regions.reducer';
import * as fromOffers from './offers/offers.reducer';

export interface AppState {
  user: User;
  regions: fromRegions.State;
  offers: fromOffers.State;
}

export const appInitialState: AppState = {
  user: fromUser.initialState,
  regions: fromRegions.initialState,
  offers: fromOffers.initialState
};

export function appReducer(state: AppState = appInitialState, action: any): AppState {
  const root = {root: state};

  return {
    user: fromUser.UserReducer(state.user, action),
    regions: fromRegions.RegionsReducer(state.regions, action),
    offers: fromOffers.OffersReducer(state.offers, action)
  }
}

