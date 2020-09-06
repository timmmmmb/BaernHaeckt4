import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppActionTypes, LoadedApp} from './app.actions';
import {Actions, Effect, ofType} from '@ngrx/effects';
import { UserService } from '../services/user.service';
import {RegionsService} from '../services/regions.service';
import {OffersService} from '../services/offers.service';
import {OffersAddAll} from './offers/offers.actions';
import {RegionsAddAll} from './regions/regions.actions';
import {Region} from '../models/region';
import {Offer} from '../models/offer';

@Injectable()
export class AppEffects {

  constructor(private actions$: Actions, private store: Store<any>,
              private regionsService: RegionsService, private offersService: OffersService) {}

  @Effect()
  getData = this.actions$.pipe(
    ofType(AppActionTypes.LoadApp),
    map((arg) => {
      this.getOffers();
      this.getRegions();
      this.getUser();

      return new LoadedApp();
    }),
  );

  getUser() {
    /*this.userService.().subscribe((users: User[]) => {
      this.store.dispatch(new UpdateUser(users));
    });*/
  }

  getRegions() {
    this.regionsService.getAllRegions().subscribe((regions: Region[]) => {
      this.store.dispatch(new RegionsAddAll(regions));
    });
  }

  getOffers() {
    this.offersService.getAllOffers().subscribe((offers: Offer[]) => {
      this.store.dispatch(new OffersAddAll(offers));
    });
  }

}

export const effects = [
  AppEffects
];
