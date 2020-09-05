import {Offer} from '../../models/Offer';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {ActionEx, OffersActionTypes} from './offers.actions';
import {createSelector} from '@ngrx/store';

export interface State extends EntityState<Offer> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Offer> = createEntityAdapter<Offer>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function OffersReducer(state = initialState, action: ActionEx): State {
  switch (action.type) {
    case OffersActionTypes.Add:
      return adapter.addOne(action.payload, state);
    case OffersActionTypes.AddAll:
      return adapter.addMany(action.payload, state);
    case OffersActionTypes.Remove:
      return adapter.removeOne(action.payload.id, state);
    default:
      return state;
  }
}

export const selectFeature = (state): EntityState<Offer> => state.root.Offers;

export const {
  selectIds,
  selectEntities,
  selectAll,
} = adapter.getSelectors(selectFeature);

export const selectOffers = createSelector(
  selectAll,
  (state: Offer[]) => state
);
