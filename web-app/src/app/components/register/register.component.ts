import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {User} from "../../models/user";
import {UpdateUser} from "../../store/user/user.actions";
import {selectUser} from "../../store/user/user.reducer";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerSucess: boolean = false;

  constructor(private userService: UserService, private store: Store<any>, private router: Router) { }

  ngOnInit() {
    this.store.select(selectUser).subscribe(user => {
      console.log(user)
      if (user.id)
      {
        this.router.navigateByUrl('/profile')
      }
    });
  }

  register(email:string, pass:string, firstname:string, lastname:string, dateofbirth:string){
    const userObj: User = {
      created: new Date(),
      dateOfBirth: dateofbirth,
      email: email,
      firstname: firstname,
      name: lastname,
      password: pass,
      id: undefined
    }
    this.userService.register(userObj).subscribe(user => {
      if(user){
        this.store.dispatch(new UpdateUser(user));
        this.registerSucess = true;
        setTimeout(() =>
          {
            this.router.navigateByUrl(('/'));
          },
          5000)
      }
    })
  }
}
