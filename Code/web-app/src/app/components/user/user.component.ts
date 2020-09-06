import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {selectUser} from '../../store/user/user.reducer';
import {Purchase} from '../../models/purchase';
import {PurchasesService} from '../../services/purchases.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  displayProfile = false;
  notLoggedIn = false;
  firstname: string;
  lastname: string;
  dateofbrith: string;
  validity: string;
  passes: { valid: string, qrcode: string }[] = [];

  constructor(private purchasesService: PurchasesService, private store: Store<any>) { }

  ngOnInit() {
    this.store.select(selectUser).subscribe(user => {
      this.notLoggedIn = true;
      if (user.id) {
        this.purchasesService.getValidPurchases().subscribe((purchases: Purchase[]) => {
          const purchasesByUser: Purchase[] = purchases.filter(p => p.user.id === user.id);
          this.firstname = user.firstname;
          this.lastname = user.name;
          this.dateofbrith = user.dateOfBirth;
          this.displayProfile = true;
          // tslint:disable-next-line:max-line-length
          purchasesByUser.forEach((purchase: Purchase) => this.passes.push({valid: this.formatDate(purchase.validFrom) + ' - ' + this.formatDate(purchase.validTo), qrcode: purchase.qrCode}));
        });
        this.notLoggedIn = false;
      }
    });
  }

  formatDate(date: Date): string {
    // To solve issues with different date types
    date = new Date(date.toString());

    let dd: string = date.getDate().toString();
    let mm: string = date.getMonth().toString();
    const yyyy: string = date.getFullYear().toString();

    if (dd.length < 2) {
      dd = '0' + dd;
    }
    if (mm.length < 2) {
      mm = '0' + mm;
    }
    return `${dd}.${mm}.${yyyy}`;
  }
}
