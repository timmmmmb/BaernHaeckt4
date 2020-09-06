import { Component, OnInit } from '@angular/core';
import {Region} from '../../models/region';
import {RegionsService} from '../../services/regions.service';
import {Store} from '@ngrx/store';
import {RegionsAddAll} from '../../store/regions/regions.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  regions: Region[] = [];

  constructor(private regionsService: RegionsService, private router: Router, private store: Store<any>) { }

  ngOnInit() {
    // Get all regions to display them on the regions page
    this.regionsService.getAllRegions().subscribe((regions: Region[]) => {
      this.regions = regions;
      this.store.dispatch(new RegionsAddAll(this.regions));
    } );
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
