import { Injectable } from '@angular/core';
import {environment} from '../app.environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri = environment;

  headers = { headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'})};

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(this.uri + '/products', this.headers);
  }
}
