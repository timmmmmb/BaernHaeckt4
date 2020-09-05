import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {PurchasesService} from '../../services/purchases.service';
import {Purchase} from '../../models/purchase';
import {Store} from '@ngrx/store';
import {selectUser} from '../../store/user/user.reducer';
import {User} from '../../models/user';
import {Router} from "@angular/router";
import {log} from "util";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  user: User;
  invalidDate = false;
  purchaseSuccess = false;

  constructor(private purchaseService: PurchasesService, private router: Router, private store: Store<any>) { }

  ngOnInit() {
    console.log(this.product);
    this.store.select(selectUser).subscribe(user => this.user = user);
  }

  purchase(from: string, to: string) {
    this.invalidDate = false;

    if (from.length === 0 || to.length === 0) {
      this.invalidDate = true;
    }

    const validFrom = new Date(from);
    const validTo = new Date(to);

    if (validFrom > validTo) {
      this.invalidDate = true;
    }

    if (this.invalidDate) {
      return;
    }

    this.store.select(selectUser).subscribe((user: User) => {
      const purchase: Purchase = {
        id: null,
        product: this.product,
        purchasedOn: null,
        qrCode: null,
        user,
        validFrom: new Date(from),
        validTo: new Date(to)
      };

      this.purchaseService.savePurchase(purchase).subscribe(res => {
        if (res) {
          this.purchaseSuccess = true;

          setTimeout(() => {
            this.router.navigateByUrl('/profile');
          }, 5000);
        }
      });
    });
  }
}
