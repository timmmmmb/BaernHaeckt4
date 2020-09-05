import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {OffersService} from '../../services/offers.service';
import {Offer} from '../../models/offer';
import {OffersAddAll} from '../../store/offers/offers.actions';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  offers: Offer[] = [];

  constructor(private offersService: OffersService, private store: Store<any>) { }

  ngOnInit() {
    this.offersService.getAllOffers().subscribe((offers: Offer[]) => {
      this.offers = offers;
      this.store.dispatch(new OffersAddAll(this.offers));
    } );
  }

}
