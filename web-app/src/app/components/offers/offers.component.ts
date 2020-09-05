import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {OffersAddAll} from '../../store/offers/offers.actions';
import {RegionsService} from '../../services/regions.service';
import {Region} from '../../models/region';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  @Input() region: Region;

  constructor(private regionService: RegionsService, private store: Store<any>) { }

  ngOnInit() {

  }

}
