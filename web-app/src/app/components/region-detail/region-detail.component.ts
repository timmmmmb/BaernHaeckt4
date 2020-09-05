import { Component, OnInit } from '@angular/core';
import {RegionsService} from '../../services/regions.service';
import {Store} from '@ngrx/store';
import {Region} from '../../models/region';
import {RegionsAddAll} from '../../store/regions/regions.actions';

@Component({
  selector: 'app-region-detail',
  templateUrl: './region-detail.component.html',
  styleUrls: ['./region-detail.component.css']
})
export class RegionDetailComponent implements OnInit {
  regions: Region[] = [];

  constructor(private regionsService: RegionsService, private store: Store<any>) { }

  ngOnInit() {
    this.regionsService.getAllRegions().subscribe((regions: Region[]) => {
      this.regions = regions;
      this.store.dispatch(new RegionsAddAll(this.regions));
    } );
  }

}
