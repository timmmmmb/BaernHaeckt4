import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Store} from '@ngrx/store';
import {User} from '../../models/user';
import {UpdateUser} from '../../store/user/user.actions';
import {Router} from '@angular/router';
import {selectUser} from '../../store/user/user.reducer';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private store: Store<any>, private router: Router, private cookieService: CookieService) {
  }

  ngOnInit() {
    // Store the user and redirect to his user site
    this.store.select(selectUser).subscribe(user => {
      if (user.id) {
        this.navigateTo('/profile');
      }
    });
  }

  signIn(email: string, pass: string) {
    const userObj: User = {
      created: undefined,
      dateOfBirth: undefined,
      email,
      firstname: undefined,
      name: undefined,
      password: pass,
      id: undefined
    };
    this.userService.login(userObj).subscribe((user:User) => {
      // Check if there is a user
      if (user) {
        this.store.dispatch(new UpdateUser(user));
        this.cookieService.set('UserID', user.id);
        this.router.navigateByUrl('/');
      }
    });
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
