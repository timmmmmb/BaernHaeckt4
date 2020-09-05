import { Injectable } from '@angular/core';
import {environment} from '../app.environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {
  uri = environment;

  headers = { headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'})};

  constructor(private http: HttpClient) { }

  getAllPurchases() {
    return this.http.get(this.uri + '/offers', this.headers);
  }

  getValidPurchases() {
    return this.http.get(this.uri + `/purchases/getValidPurchases`, this.headers);
  }
}
