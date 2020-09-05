import { Component, OnInit } from '@angular/core';
import {Region} from "../../models/region";
import {RegionsService} from "../../services/regions.service";
import {Store} from "@ngrx/store";
import {RegionsAddAll} from "../../store/regions/regions.actions";

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  regions: Region[] = [];

  constructor(private regionsService: RegionsService, private store: Store<any>) { }

  ngOnInit() {
    this.regionsService.getAllRegions().subscribe((regions: Region[]) => {
      this.regions = regions;
      this.store.dispatch(new RegionsAddAll(this.regions));
    } );
  }

}
