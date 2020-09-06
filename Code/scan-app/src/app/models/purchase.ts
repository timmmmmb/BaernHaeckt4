import {User} from './user';
import {Product} from './product';

export class Purchase {
  id: string;
  user: User;
  product: Product;
  purchasedOn: Date;
  validFrom: Date;
  validTo: Date;
  qrCode: string;
}
