import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {environment} from '../app.environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = environment;

  headers = { headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'})};

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post(this.uri + '/user-management/login', user, this.headers);
  }

  register(user: User) {
    return this.http.post(this.uri + '/user-management/register', user, this.headers);
  }

  getById(id: string) {
    return this.http.get(this.uri + `/users/${id}`, this.headers);
  }

}
