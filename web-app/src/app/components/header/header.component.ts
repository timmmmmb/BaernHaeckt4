import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {environment} from "../../app.environment";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }

}
