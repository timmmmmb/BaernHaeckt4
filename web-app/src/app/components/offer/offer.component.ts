import {Component, Input, OnInit} from '@angular/core';
import {Offer} from '../../models/offer';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  // Store a single offer that was passed to the component
  @Input() offer: Offer;
  constructor() { }

  ngOnInit() {
  }
}
