import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {PurchasesService} from '../../services/purchases.service';
import {Purchase} from '../../models/purchase';
import {Store} from '@ngrx/store';
import {selectUser} from '../../store/user/user.reducer';
import {User} from '../../models/user';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(private purchaseService: PurchasesService, private store: Store<any>) { }

  ngOnInit() {
  }

  purchase(from: string, to: string) {
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
          console.log(res);
        }
      });
    });
  }
}
