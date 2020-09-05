import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {selectUser} from '../../store/user/user.reducer';
import {Purchase} from "../../models/purchase";
import {PurchasesService} from "../../services/purchases.service";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayProfile:boolean = false;
  notLoggedIn: boolean = false;
  firstname: string;
  lastname:string;
  dateofbrith: string;
  validity: string;
  validDates: string[] = [];

  constructor(private purchasesService: PurchasesService, private store: Store<any>) { }

  ngOnInit() {
    this.store.select(selectUser).subscribe(user => {
      if (user.id)
      {
        this.purchasesService.getValidPurchases().subscribe((purchases: Purchase[]) => {
          const purchasesByUser: Purchase[] = purchases.filter(p => p.user.id === user.id);
          purchasesByUser.forEach((purchase:Purchase) => this.validDates.push(this.formatDate(purchase.validFrom) + " - " + this.formatDate(purchase.validTo)))

          this.firstname = user.firstname;
          this.lastname = user.name;
          this.dateofbrith = user.dateOfBirth;
          this.displayProfile = true;
        });
      }
      else {
        this.notLoggedIn = true;
      }
    });
  }

  formatDate(date: Date): string {
    date = new Date(date.toString());
    let dd: string = date.getDate().toString();
    let mm: string = date.getMonth().toString();
    let yyyy: string = date.getFullYear().toString();

    if(dd.length < 2) {
      dd = '0' + dd;
    }
    if(mm.length < 2) {
      mm = '0' + mm;
    }
    return `${dd}.${mm}.${yyyy}`;
  }
}
