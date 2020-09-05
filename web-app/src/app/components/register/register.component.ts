import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {User} from '../../models/user';
import {UpdateUser} from '../../store/user/user.actions';
import {selectUser} from '../../store/user/user.reducer';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerSucess = false;

  constructor(private userService: UserService, private store: Store<any>, private router: Router, private cookieService: CookieService) { }

  ngOnInit() {
    this.store.select(selectUser).subscribe(user => {
      if (user.id) {
        this.router.navigateByUrl('/profile');
      }
    });
  }

  register(email: string, pass: string, firstname: string, lastname: string, dateofbirth: string) {
    const userObj: User = {
      created: new Date(),
      dateOfBirth: dateofbirth,
      email,
      firstname,
      name: lastname,
      password: pass,
      id: undefined
    };

    this.userService.register(userObj).subscribe((user:User) => {
      if (user) {
        this.store.dispatch(new UpdateUser(user));
        this.registerSucess = true;
        this.cookieService.set('UserID', user.id);
        // Wait 5 seconds before redirect
        setTimeout(() => {
            this.router.navigateByUrl(('/'));
          },
          5000);
      }
    });
  }
}
