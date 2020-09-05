import {Component, Input, OnInit} from '@angular/core';
import {Offer} from '../../models/offer';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  @Input() offer: Offer;
  constructor() { }

  ngOnInit() {
  }
}
