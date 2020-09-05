import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {selectUser} from "../../store/user/user.reducer";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayProfile:boolean = false;
  notLoggedIn: boolean = false;

  constructor(private userService: UserService, private store: Store<any>, private router: Router) { }

  ngOnInit() {
    this.store.select(selectUser).subscribe(user => {
      console.log(user)
      if (user.id)
      {
        this.displayProfile = true;
      }
      else {
        this.notLoggedIn = true;
      }
    });
  }
}
