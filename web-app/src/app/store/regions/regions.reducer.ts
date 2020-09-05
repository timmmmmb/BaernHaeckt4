import {Region} from '../../models/region';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {ActionEx, RegionsActionTypes} from "./regions.actions";
import {createSelector} from "@ngrx/store";

export interface State extends EntityState<Region> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Region> = createEntityAdapter<Region>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function RegionsReducer(state = initialState, action: ActionEx): State {
  switch (action.type) {
    case RegionsActionTypes.Add:
      return adapter.addOne(action.payload, state);
    case RegionsActionTypes.AddAll:
      return adapter.addMany(action.payload, state);
    case RegionsActionTypes.Remove:
      return adapter.removeOne(action.payload.id, state);
    default:
      return state;
  }
}

export const selectFeature = (state): EntityState<Region> => state.root.regions;

export const {
  selectIds,
  selectEntities,
  selectAll,
} = adapter.getSelectors(selectFeature);

export const selectRegions = createSelector(
  selectAll,
  (state: Region[]) => state
);
