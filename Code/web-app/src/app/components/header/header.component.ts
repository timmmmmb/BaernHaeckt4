import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {UpdateUser} from '../../store/user/user.actions';
import {Store} from '@ngrx/store';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private store: Store<any>, private cookieService: CookieService) { }

  ngOnInit() {
    if (this.cookieService.check('UserID')) {
      this.userService.getById(this.cookieService.get('UserID')).subscribe((user: User) => {
        this.store.dispatch(new UpdateUser(user));
      });
    }
  }

  // Navigate to a specific URL
  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }

  logout() {
    this.cookieService.delete('UserID');
    const empty = new User();
    this.store.dispatch(new UpdateUser(empty));
    this.router.navigate(['/']);
  }
}
