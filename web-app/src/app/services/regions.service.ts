import { Injectable } from '@angular/core';
import {environment} from '../app.environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {

  uri = environment;

  headers = { headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'})};

  constructor(private http: HttpClient) { }

  getAllRegions() {
    return this.http.get(this.uri + '/regions', this.headers);
  }

  getRegionByName(name: string) {
    return this.http.get(this.uri + `/regions/${name}`, this.headers);
  }
}
