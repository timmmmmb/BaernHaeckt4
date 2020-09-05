import {Product} from './product';
import {User} from './user';

export class Purchase {
  id: string;
  user: User;
  product: Product;
  purchasedOn: Date;
  validFrom: Date;
  validTo: Date;
  qrCode: string;
}
