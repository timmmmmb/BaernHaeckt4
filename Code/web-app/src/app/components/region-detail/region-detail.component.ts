import { Component, OnInit } from '@angular/core';
import {RegionsService} from '../../services/regions.service';
import {Store} from '@ngrx/store';
import {Region} from '../../models/region';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-region-detail',
  templateUrl: './region-detail.component.html',
  styleUrls: ['./region-detail.component.css']
})
export class RegionDetailComponent implements OnInit {
  region: Region;

  constructor(private route: ActivatedRoute, private regionsService: RegionsService) { }

  ngOnInit() {
    // With this.route.snapshot.params.region you can get the region from the URL
    this.regionsService.getRegionByName(this.route.snapshot.params.region).subscribe((region: Region[]) => {
      this.region = region[0];
    });
  }

}
