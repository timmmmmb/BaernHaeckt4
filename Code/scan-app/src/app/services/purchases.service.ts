import { Injectable } from '@angular/core';
import {environment} from '../app.environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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

  getPurchaseByQRCode(qrCode) {
    return this.http.get(this.uri + `/purchases/check-qr-code?code=${qrCode}`, this.headers);
  }
}
