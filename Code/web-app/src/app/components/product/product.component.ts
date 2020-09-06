import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {PurchasesService} from '../../services/purchases.service';
import {Purchase} from '../../models/purchase';
import {Store} from '@ngrx/store';
import {selectUser} from '../../store/user/user.reducer';
import {User} from '../../models/user';
import {Router} from '@angular/router';

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
  calculatedPrice: number;

  constructor(private purchaseService: PurchasesService, private router: Router, private store: Store<any>) { }

  ngOnInit() {
    this.store.select(selectUser).subscribe(user => this.user = user);
    this.calculatedPrice = this.product.price;
  }

  purchase(from: string, to: string) {
    this.invalidDate = !this.areDatesValid(from, to);

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

  areDatesValid(from: string, to: string) {
    if (from.length === 0 || to.length === 0) {
      return false;
    }

    const validFrom = new Date(from);
    const validTo = new Date(to);

    if (validFrom < new Date()) {
      return false;
    }

    return validFrom <= validTo;
  }

  calculatePrice(from: string, to: string) {
    if (!this.areDatesValid(from, to)) {
      return;
    }

    const validFrom = new Date(from);
    const validTo = new Date(to);

    // Calculate the days between the two dates
    const diffInTime = validTo.getTime() - validFrom.getTime();
    const diffInDays = diffInTime / (1000 * 3600 * 24);

    this.calculatedPrice = this.product.price * diffInDays;
  }
}
