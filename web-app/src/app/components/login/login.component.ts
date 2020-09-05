import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Store} from "@ngrx/store";
import {User} from "../../models/user";
import {UpdateUser} from "../../store/user/user.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private store: Store<any>, private router: Router) {
  }

  ngOnInit() {
  }

  signIn(email: string, pass: string) {
    const userObj: User = {
      created: undefined,
      dateOfBirth: undefined,
      email: email,
      firstname: undefined,
      name: undefined,
      password: pass,
      id: undefined

    }
    this.userService.login(userObj).subscribe(user => {
      console.log(user);
      if (user) {
        this.store.dispatch(new UpdateUser(user));

        this.router.navigateByUrl('/');
      }
    })
  }
}
