import { Injectable } from '@angular/core';
import {environment} from '../app.environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Purchase} from "../models/purchase";

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

  getPurchasesByUser(userId: string) {
    return this.http.get(this.uri + `/offers/${userId}`, this.headers);
  }

  savePurchase(purchase: Purchase) {
    return this.http.post(this.uri + '/purchases/savePurchase', purchase, this.headers);
  }
}
